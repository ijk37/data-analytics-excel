# 11 — PivotTables & PivotCharts

**Navigation:** [Notes Index](README.md) | ← Previous [10 — Sorting, Filtering & Conditional Formatting](10-sorting-filtering-conditional-formatting.md) | Next → [12 — Charts, Dashboards & What-If Analysis](12-charts-dashboards-what-if.md)
**Exercise:** [Exercise 11](../02-exercises/11-pivottables-and-pivotcharts-exe.md)

---

## The Most Powerful Feature in Excel

A **PivotTable** summarizes a large table into a compact report — totals, averages, and counts broken down by category — **without writing a single formula**, in seconds, by dragging fields. If you learn one "advanced" Excel skill for analytics, learn this.

Give a PivotTable 50,000 rows of raw sales and it can answer, instantly and interactively:

- Total revenue **by region**
- Average order value **by month**
- Count of orders **by product, split by region**
- Which customers account for the **top 80%** of sales

"Pivot" means you can **rotate** the analysis — swap what's in rows and columns — by dragging, exploring many questions from one dataset.

---

## Before You Start: Clean, Tabular Source

A PivotTable needs tidy source data (Note 02): one header row, one record per row, no blank rows, no merged cells, consistent categories (Note 09). The best practice is to base it on an **Excel Table** (`Ctrl + T`) so that when you add new rows, the PivotTable picks them up on **Refresh**.

---

## Creating a PivotTable

1. Click any cell inside your data (or select your Table).
2. **Insert → PivotTable.**
3. Confirm the source range and choose where to put it (a **New Worksheet** is usually cleanest).
4. An empty PivotTable appears with the **PivotTable Fields** pane on the right.

The Fields pane lists every column from your source and has **four drop zones**:

```
┌─────────────────────────────┐
│  Fields:  ☐ Date            │
│           ☐ Region          │
│           ☐ Product         │
│           ☐ Units           │
│           ☐ Revenue         │
├──────────────┬──────────────┤
│  ▼ FILTERS   │  ▥ COLUMNS   │
│              │              │
├──────────────┼──────────────┤
│  ☰ ROWS      │  Σ VALUES    │
│              │              │
└──────────────┴──────────────┘
```

| Drop zone | What it does |
|-----------|--------------|
| **Rows** | Categories listed down the left (e.g. Region, Product) |
| **Columns** | Categories spread across the top (e.g. Year) |
| **Values** | The numbers being aggregated (e.g. Sum of Revenue) |
| **Filters** | A drop-down to filter the whole report (e.g. one Year) |

**Drag fields into zones** and the report builds live. That's the whole skill — everything else is refinement.

---

## A First Report, Step by Step

Goal: total revenue by region.

1. Drag **Region** to **Rows**. You get a list of regions.
2. Drag **Revenue** to **Values**. Each region now shows its total revenue, with a grand total at the bottom.

That's it. Now make it two-dimensional:

3. Drag **Product** to **Columns**. You now have a grid: regions down the side, products across the top, revenue at every intersection. This **cross-tabulation** would take many `SUMIFS` formulas to reproduce by hand.

4. Drag **Year** (or a date field) to **Filters** and pick a single year to scope the whole report.

Swap any field to a different zone and the analysis rotates — that's the "pivot".

---

## Choosing How Values Aggregate

By default, Excel **sums** numeric fields and **counts** text fields. To change it, click the field in **Values → Value Field Settings** (or right-click a value → **Summarize Values By**):

| Summarize by | Answers |
|--------------|---------|
| **Sum** | Total revenue, total units |
| **Count** | Number of orders/records |
| **Average** | Average order value |
| **Max / Min** | Largest/smallest order |
| **Count (Distinct)** | Number of *unique* customers (requires "Add to Data Model" when creating) |
| **StdDev / Var** | Spread of values |

> **"Count of Revenue" surprise:** if a numeric field shows up as *Count* instead of *Sum*, it usually means that column contains some **text** (a stray non-number) — a data-type problem (Note 09). Clean the source and refresh.

### Show Values As — % and running totals

The hidden gem: **Value Field Settings → Show Values As** recomputes the numbers as:

- **% of Grand Total** — each cell as a share of the whole (instant contribution analysis).
- **% of Column/Row Total** — share within each column or row.
- **Running Total In** — cumulative sum down a date field.
- **% Difference From** — growth vs. a previous period.
- **Rank** — rank each item.

`% of Grand Total` turns raw revenue into "North is 42% of sales" with two clicks — no formula needed.

---

## Grouping

PivotTables can **group** values on the fly:

- **Dates:** right-click a date in the report → **Group** → choose Years, Quarters, Months, Days. This is the easiest way to roll daily transactions up to monthly or quarterly trends. (Modern Excel often auto-groups dates when you drop a date field in.)
- **Numbers:** right-click a numeric row field → **Group** → set a bin size (e.g. age in 10-year bands) to build a histogram-style summary.
- **Text:** select several row items, right-click → **Group** to combine them into a custom category (e.g. group three small regions into "Other").

Grouping by date is one of the most common analytics moves — it converts a timestamp column into trend rows without any helper columns.

---

## Filtering Inside a PivotTable

- **Report Filter** (the Filters zone) — a master drop-down over the whole table.
- **Row/Column label filters** — each field's drop-down offers Label Filters (text), Value Filters (e.g. "revenue > 10,000", "Top 10"), and manual checkboxes.
- **Slicers** — **PivotTable Analyze → Insert Slicer** adds clickable filter buttons (Note 10). One slicer can control **multiple** PivotTables/PivotCharts at once (Report Connections), the foundation of an interactive dashboard.
- **Timeline** — **Insert Timeline** is a slider specifically for date fields: drag to filter to a month/quarter/year range visually.

---

## Refreshing — the One Rule People Forget

A PivotTable is a **snapshot**. If the underlying data changes, the PivotTable does **not** update automatically. You must **right-click → Refresh** (or PivotTable Analyze → Refresh, or `Alt + F5`).

- If your source is a **Table**, new rows are included automatically on refresh.
- If your source is a fixed range (`A1:F500`) and you added rows beyond it, you must update the source range first (PivotTable Analyze → Change Data Source). **This is why building on a Table matters.**

> **Make a habit of Refresh.** The most common "the PivotTable is wrong" complaint is simply stale data that hasn't been refreshed after the source changed.

---

## PivotCharts

A **PivotChart** is a chart wired to a PivotTable — change the pivot and the chart changes with it; click the chart's field buttons and the pivot filters too.

1. Click inside a PivotTable → **PivotTable Analyze → PivotChart** (or Insert → PivotChart from raw data).
2. Pick a chart type (column for comparisons, line for trends over time — see Note 12).
3. Use the field buttons on the chart, or a shared **Slicer**, to filter interactively.

PivotCharts plus Slicers are the quickest route to an **interactive dashboard**: a manager clicks a region slicer and both the summary table and its chart update together.

---

## Common Pitfalls

- **Blank/merged cells in the source** → fields don't appear or grouping fails. Clean first (Note 09).
- **Mixed data types in a column** → numbers aggregate as Count. Fix the source.
- **Forgetting to Refresh** → stale results.
- **Source as a range, not a Table** → new data is silently excluded.
- **Inconsistent categories** (`North`/`north`) → split into multiple rows. Standardize first.

Most PivotTable "bugs" are really source-data problems — which is why Notes 02 and 09 come first.

---

## Key Things to Remember

> **PivotTables summarize by dragging, not formulas.** Drop categories in Rows/Columns and numbers in Values to get instant cross-tabulated totals, averages, and counts from thousands of rows.

> **Build on a Table and Refresh.** A PivotTable is a snapshot that ignores source changes until you Refresh; a Table source auto-includes new rows. Together they keep reports current.

> **"Show Values As" and Grouping add analysis for free.** % of Grand Total, running totals, and date/number grouping answer rich questions with clicks, not formulas.

> **Slicers + PivotCharts = interactive dashboard.** One slicer can drive several pivots and charts at once, letting anyone explore the data without touching Excel's internals.

---

**Navigation:** [Notes Index](README.md) | ← Previous [10 — Sorting, Filtering & Conditional Formatting](10-sorting-filtering-conditional-formatting.md) | Next → [12 — Charts, Dashboards & What-If Analysis](12-charts-dashboards-what-if.md)
**Exercise:** [Exercise 11](../02-exercises/11-pivottables-and-pivotcharts-exe.md)
