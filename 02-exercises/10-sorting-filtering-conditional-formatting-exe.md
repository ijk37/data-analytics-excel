# Exercise 10 — Sorting, Filtering & Conditional Formatting

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 09](09-data-cleaning-and-validation-exe.md) | Next → [Exercise 11](11-pivottables-and-pivotcharts-exe.md)
**Note:** [10 — Sorting, Filtering & Conditional Formatting](../01-notes/10-sorting-filtering-conditional-formatting.md)

---

## Before You Start

Read [Note 10](../01-notes/10-sorting-filtering-conditional-formatting.md). Use the `Orders` dataset (Date, Region, Product, Units, Amount) from Exercise 04 — add a few more rows so there's enough to explore (15–20 rows is ideal). Convert it to a Table (`Ctrl + T`).

---

## Exercise 10.1 — Sorting

1. Sort by **Amount**, largest to smallest. Who's at the top?
2. Sort by **Region** A→Z. Notice rows group by region but Amount is jumbled within each.
3. **Multi-level sort:** Data → Sort. Sort by **Region** (A→Z), then add a level: **Amount** (Largest to Smallest). Now each region's orders are ranked internally.
4. Add an index column `1,2,3…` first. After sorting, can you restore the original order by sorting on the index?

**Question:** Why should you click a single cell in the data (not select one whole column) before sorting?

---

## Exercise 10.2 — Filtering

With filters on (`Ctrl + Shift + L`):

1. Filter **Region** to show only `North`. How many rows remain (check the status bar)?
2. Add a second filter: **Amount** → Number Filters → **Greater Than** → `140`. Now you see North orders over $140 only.
3. Clear both filters (Data → Clear).
4. Use **Amount → Number Filters → Top 10 → Top 5 Items**. Which orders show?
5. If your dates are real dates, try **Date → Date Filters → This Month** (or a specific month).

**Question:** When you filter, are the hidden rows deleted? How do you know a column has an active filter?

---

## Exercise 10.3 — Conditional Formatting: Highlight Rules

Select the **Amount** column (data cells only):

1. **Home → Conditional Formatting → Highlight Cells Rules → Greater Than** → `150` → choose a green fill. Which cells light up?
2. Add **Top/Bottom Rules → Top 10% **. What gets highlighted?
3. Add **Top/Bottom Rules → Above Average**. 

**Question:** How do conditional formats differ from just manually coloring cells?

---

## Exercise 10.4 — Data Bars, Color Scales, Icon Sets

On the Amount column:

1. **Conditional Formatting → Data Bars** → pick a gradient. Each cell now has an in-cell bar. What does bar length represent?
2. Remove it, then apply a **Color Scale** (green-yellow-red). Where are the "hot" values?
3. Remove it, then apply an **Icon Set** (e.g. 3 arrows). What determines which icon each cell gets?

**Question:** Which of the three is best for quickly comparing magnitudes across many rows?

---

## Exercise 10.5 — Highlight an Entire Row (Formula Rule)

This is the most useful trick. Add a `Status` column with values like `Open`/`Overdue`/`Closed` (type some in). Now highlight every **Overdue** row across all columns:

1. Select the entire data range (all columns, data rows).
2. **Conditional Formatting → New Rule → Use a formula to determine which cells to format.**
3. Enter (assuming Status is in column F):
   ```
   =$F2="Overdue"
   ```
   Note the `$` on the **column** F but **not** the row 2.
4. Pick a red fill. Click OK.

**Questions:**
- Why is the `$` on `F` essential? What would `=F2="Overdue"` (no dollar) do differently?
- Why must the row number (`2`) be the first data row and *not* locked?

---

## Exercise 10.6 — Slicers

1. Click in your Table → **Table Design → Insert Slicer** → choose **Region**.
2. A box of region buttons appears. Click `North`. What happens to the table?
3. Ctrl-click to select multiple regions. Click the "clear filter" icon to reset.

**Question:** How is a slicer more user-friendly than the header drop-down filter? Where will slicers become essential (hint: Note 11/12)?

---

## Challenge — Test Yourself

1. You want each region's orders listed, and within each region sorted high-to-low by Amount. Describe the sort setup.
2. Filtering hides rows; what does sorting do to them? Which is reversible without an index column?
3. Write the conditional-formatting formula to highlight the **whole row** when a date in column G is **before today**.
4. Which conditional format would you use to turn a column of numbers into an at-a-glance heatmap?
5. Why work inside a Table when sorting and filtering?

> **Answers:**
> 1. Data → Sort: first level Region A→Z, second level Amount Largest to Smallest.
> 2. Sorting permanently reorders rows (reversible only if you saved an index column); filtering just hides them and is fully reversible by clearing.
> 3. `=$G2<TODAY()` (dollar on the column G, applied to the whole selected row range).
> 4. A Color Scale.
> 5. Tables keep all columns moving together when sorting, give filter arrows automatically, auto-expand to new rows, and connect to slicers.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 09](09-data-cleaning-and-validation-exe.md) | Next → [Exercise 11](11-pivottables-and-pivotcharts-exe.md)
**Note:** [10 — Sorting, Filtering & Conditional Formatting](../01-notes/10-sorting-filtering-conditional-formatting.md)
