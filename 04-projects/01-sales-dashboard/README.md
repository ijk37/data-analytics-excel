# Project 01 — Sales Dashboard

**Navigation:** [Projects Index](../README.md) | Next → [02 — Budget Tracker](../02-budget-tracker/README.md)

---

## Overview

Build an interactive sales dashboard from raw transaction data: import a CSV, enrich it with formulas, summarize it with PivotTables, and present it as a one-screen dashboard with charts, KPIs, and slicers.

**Skills:** Importing data, Tables, Lookups, Date functions, PivotTables, PivotCharts, Slicers, Charts
**Notes used:** [02](../../01-notes/02-entering-and-organizing-data.md), [07](../../01-notes/07-date-and-time-functions.md), [08](../../01-notes/08-lookup-and-reference-functions.md), [11](../../01-notes/11-pivottables-and-pivotcharts.md), [12](../../01-notes/12-charts-dashboards-what-if.md)

---

## The Data

`sales-data.csv` contains ~40 sales transactions with these columns:

| Column | Description |
|--------|-------------|
| OrderID | Unique order number |
| OrderDate | Date of sale (YYYY-MM-DD) |
| Region | North / South / East / West |
| Rep | Sales representative |
| Product | Product name |
| Units | Quantity sold |
| UnitPrice | Price per unit |

A second file, `products.csv`, is a lookup table of Product → Category → Cost, so you can practice joining and computing profit.

---

## What You'll Build

A `Dashboard` sheet showing:

- **KPI cards:** Total Revenue, Total Units, Average Order Value, Number of Orders.
- **Revenue by Region** (column chart).
- **Revenue by Month** (line chart — the trend).
- **Top 5 Products** (bar chart).
- **Slicers** for Region and Rep, plus a **Timeline** for OrderDate, controlling everything at once.

---

## Walkthrough

### Step 1 — Import and make a Table
1. **Data → Get Data → From Text/CSV** → select `sales-data.csv` → check column types → **Load**.
2. The data loads as a Table. Rename it `Sales` (Table Design → Table Name).

### Step 2 — Enrich with calculated columns
Add these columns to the `Sales` table (structured references auto-fill the column):
```
Revenue:    =[@Units]*[@UnitPrice]
MonthKey:   =TEXT([@OrderDate], "yyyy-mm")
Category:   =XLOOKUP([@Product], Products[Product], Products[Category], "Other")
Cost:       =[@Units]*XLOOKUP([@Product], Products[Product], Products[Cost], 0)
Profit:     =[@Revenue]-[@Cost]
```
(Import `products.csv` as a Table named `Products` first. If you don't have `XLOOKUP`, use `INDEX`/`MATCH` or `VLOOKUP`.)

### Step 3 — Build the PivotTables
On a `Pivots` sheet, create (Insert → PivotTable) one each:
- **Revenue by Region:** Region in Rows, Sum of Revenue in Values.
- **Revenue by Month:** MonthKey in Rows, Sum of Revenue in Values.
- **Revenue by Product:** Product in Rows, Sum of Revenue in Values; sort descending and filter Top 5.

### Step 4 — KPI cards
On the `Dashboard` sheet, add big-number formulas:
```
Total Revenue:        =SUM(Sales[Revenue])
Total Units:          =SUM(Sales[Units])
Number of Orders:     =COUNTA(Sales[OrderID])
Average Order Value:  =SUM(Sales[Revenue])/COUNTA(Sales[OrderID])
```
Format them large, bold, with currency where appropriate.

### Step 5 — Charts
Create a PivotChart from each PivotTable (column for Region, line for Month, bar for Top-5 Products). Title each clearly, add data labels, remove clutter.

### Step 6 — Make it interactive
1. Click a PivotTable → **PivotTable Analyze → Insert Slicer** → Region and Rep.
2. **Insert Timeline** → OrderDate.
3. Right-click each slicer/timeline → **Report Connections** → tick **all** the PivotTables so one control filters the whole dashboard.

### Step 7 — Polish
Arrange KPIs across the top, charts below, slicers on the left. Align to a grid, use one consistent color palette, and put the headline KPI top-left. **Data → Refresh All** before sharing.

---

## Learning Goals

After this project you can:
- Import and enrich raw transactional data into an analysis-ready Table.
- Join a lookup table to compute derived metrics like profit.
- Summarize with multiple PivotTables and visualize with PivotCharts.
- Wire slicers/timeline to build a single interactive dashboard.

---

## Extensions

- Add a **Profit Margin** KPI (`=SUM(Profit)/SUM(Revenue)`), formatted as %.
- Add a **% of Grand Total** view to the Region pivot.
- Add conditional formatting (data bars) to the product list.
- Add a Region-over-time **combo chart**.

---

[Projects Index](../README.md) | Next → [02 — Budget Tracker](../02-budget-tracker/README.md)
