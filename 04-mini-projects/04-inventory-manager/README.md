# Mini Project 04 — Inventory Manager

**Navigation:** [Projects Index](../README.md) | ← Previous [03 — Survey Analysis](../03-survey-analysis/README.md) | Next → [05 — Data Cleaning Challenge](../05-data-cleaning-challenge/README.md)

---

## Overview

Build a small inventory management sheet that tracks stock, looks up supplier and price details, computes stock value, and automatically raises **reorder alerts** when quantities fall below a threshold. This is a lookup-and-logic project that mirrors real operational dashboards.

**Skills:** Lookups (XLOOKUP/VLOOKUP/INDEX-MATCH), IF logic, Data Validation, Conditional Formatting, SUMIFS
**Notes used:** [05](../../01-notes/05-logical-functions.md), [08](../../01-notes/08-lookup-and-reference-functions.md), [09](../../01-notes/09-data-cleaning-and-validation.md), [10](../../01-notes/10-sorting-filtering-conditional-formatting.md)

---

## The Data

Two files:

`inventory.csv` — current stock:

| Column | Description |
|--------|-------------|
| SKU | Product code |
| ItemName | Product name |
| Category | Product category |
| QtyOnHand | Units currently in stock |
| ReorderLevel | Minimum before reordering |

`suppliers.csv` — a lookup table:

| Column | Description |
|--------|-------------|
| SKU | Product code (the key) |
| Supplier | Supplier name |
| UnitCost | Cost per unit |
| LeadTimeDays | Days to restock |

---

## What You'll Build

An inventory sheet that, for each item, shows supplier, unit cost, **stock value**, a **reorder flag**, and **suggested order quantity** — plus summary KPIs and a filtered "needs reordering" view.

---

## Walkthrough

### Step 1 — Import both as Tables
Import `inventory.csv` (Table `Inventory`) and `suppliers.csv` (Table `Suppliers`).

### Step 2 — Join supplier details with lookups
Add calculated columns to `Inventory`:
```
Supplier:   =XLOOKUP([@SKU], Suppliers[SKU], Suppliers[Supplier], "UNKNOWN")
UnitCost:   =XLOOKUP([@SKU], Suppliers[SKU], Suppliers[UnitCost], 0)
LeadTime:   =XLOOKUP([@SKU], Suppliers[SKU], Suppliers[LeadTimeDays], "")
```
(No XLOOKUP? Use `=INDEX(Suppliers[Supplier], MATCH([@SKU], Suppliers[SKU], 0))` or `VLOOKUP`.)

### Step 3 — Compute stock value
```
StockValue: =[@QtyOnHand]*[@UnitCost]
```

### Step 4 — Reorder logic
```
NeedsReorder:  =IF([@QtyOnHand]<=[@ReorderLevel], "REORDER", "OK")
SuggestedQty:  =IF([@QtyOnHand]<=[@ReorderLevel], [@ReorderLevel]*2-[@QtyOnHand], 0)
```
The suggested quantity tops the item back up to twice its reorder level (a simple policy — adjust as you like).

### Step 5 — Highlight low stock
1. Select the `NeedsReorder` column → **Conditional Formatting → Text that Contains → "REORDER"** → red fill.
2. Select the whole table → **formula rule** `=$D2<=$E2` (QtyOnHand ≤ ReorderLevel) to flag the entire row.

### Step 6 — KPIs and a reorder view
```
Total stock value:     =SUM(Inventory[StockValue])
Items needing reorder: =COUNTIF(Inventory[NeedsReorder], "REORDER")
Value by category:     =SUMIF(Inventory[Category], "Accessories", Inventory[StockValue])
```
Then **filter** the table on `NeedsReorder = REORDER` (or use `=FILTER(...)` in 365) to produce a clean purchase list.

### Step 7 — Protect data entry
Add **Data Validation** to QtyOnHand (Whole number ≥ 0) and Category (List) so future edits stay clean.

---

## Learning Goals

After this project you can:
- Join two tables with lookups to enrich operational data.
- Encode business rules (reorder thresholds, suggested quantities) with `IF`.
- Surface exceptions with conditional formatting and filtering.
- Summarize inventory value by category with `SUMIF`.

---

## Extensions

- Add **Days of cover** = QtyOnHand ÷ average daily sales (if you have sales data).
- Sort the reorder list by `StockValue` descending to prioritize.
- Build a tiny dashboard: a KPI for total value and a bar chart of value by category.
- Use `XLOOKUP` with approximate match to assign a "stock health" band (Critical/Low/Healthy).

---

[Projects Index](../README.md) | ← Previous [03 — Survey Analysis](../03-survey-analysis/README.md) | Next → [05 — Data Cleaning Challenge](../05-data-cleaning-challenge/README.md)
