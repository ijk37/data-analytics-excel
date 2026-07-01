# Mini Project 02 — Personal Budget Tracker

**Navigation:** [Projects Index](../README.md) | ← Previous [01 — Sales Dashboard](../01-sales-dashboard/README.md) | Next → [03 — Survey Analysis](../03-survey-analysis/README.md)

---

## Overview

Build a personal budget tracker that categorizes spending, compares actual vs. budget per category, and flags overspending — all driven by formulas, validation, and conditional formatting.

**Skills:** Formulas & references, SUMIFS, IF logic, Data Validation, Conditional Formatting, basic charts
**Notes used:** [03](../../01-notes/03-formulas-and-cell-references.md), [04](../../01-notes/04-essential-functions.md), [05](../../01-notes/05-logical-functions.md), [09](../../01-notes/09-data-cleaning-and-validation.md), [10](../../01-notes/10-sorting-filtering-conditional-formatting.md)

---

## The Data

`transactions.csv` contains ~30 personal expense transactions:

| Column | Description |
|--------|-------------|
| Date | Transaction date |
| Description | What it was |
| Category | Groceries, Rent, Transport, Dining, Utilities, Entertainment, Other |
| Amount | Cost in dollars |

---

## What You'll Build

1. A **Transactions** table with a validated Category column (drop-down).
2. A **Budget** table: each category's monthly budget.
3. A **Summary** that shows, per category: budget, actual spend, remaining, and a status flag (`OK` / `Over`).
4. Conditional formatting that turns overspent categories red.
5. A column chart of Actual vs. Budget.

---

## Walkthrough

### Step 1 — Import and validate
1. Import `transactions.csv` (Data → From Text/CSV → Load). Make it a Table named `Tx`.
2. Select the Category column → **Data → Data Validation → List** → Source: `Groceries,Rent,Transport,Dining,Utilities,Entertainment,Other`. Now categories can only be valid values.

### Step 2 — Set budgets
On a `Budget` sheet, create a Table named `Budget`:

| Category | Monthly Budget |
|----------|----------------|
| Groceries | 400 |
| Rent | 1200 |
| Transport | 150 |
| Dining | 200 |
| Utilities | 250 |
| Entertainment | 120 |
| Other | 100 |

### Step 3 — Summarize actual spend
Add an **Actual** column to the Budget table that totals spending per category from the transactions:
```
Actual:     =SUMIF(Tx[Category], [@Category], Tx[Amount])
Remaining:  =[@[Monthly Budget]]-[@Actual]
Status:     =IF([@Actual]>[@[Monthly Budget]], "Over", "OK")
% Used:     =[@Actual]/[@[Monthly Budget]]
```

### Step 4 — Flag overspending
1. Select the Status column → **Conditional Formatting → Highlight Cells Rules → Text that Contains → "Over"** → red fill.
2. Select the **% Used** column → **Data Bars** to see how close each category is to its limit.
3. Bonus: select the whole Budget table and add a **formula rule** `=$D2>$C2` (Actual > Budget) to highlight the entire overspent row red.

### Step 5 — KPI and chart
1. Add headline cells: Total Budget (`=SUM(Budget[Monthly Budget])`), Total Spent (`=SUM(Budget[Actual])`), Net (`=Total Budget - Total Spent`).
2. Select Category, Monthly Budget, and Actual → **Insert → Column Chart** to compare budget vs. actual per category. Title it clearly.

---

## Learning Goals

After this project you can:
- Use `SUMIF` to roll transactions up by category.
- Build a budget-vs-actual comparison with `IF` status flags.
- Prevent dirty categories with Data Validation drop-downs.
- Use conditional formatting (text rules, data bars, formula rules) to surface exceptions.

---

## Extensions

- Add a **Month** column (`=TEXT([@Date],"yyyy-mm")`) and a slicer/PivotTable to view spend by month.
- Add a **% Used** icon set (green/amber/red traffic lights).
- Use `SUMIFS` to budget per category *per month* instead of overall.

---

[Projects Index](../README.md) | ← Previous [01 — Sales Dashboard](../01-sales-dashboard/README.md) | Next → [03 — Survey Analysis](../03-survey-analysis/README.md)
