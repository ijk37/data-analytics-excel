# Exercise 11 — PivotTables & PivotCharts

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 10](10-sorting-filtering-conditional-formatting-exe.md) | Next → [Exercise 12](12-charts-dashboards-what-if-exe.md)
**Note:** [11 — PivotTables & PivotCharts](../01-notes/11-pivottables-and-pivotcharts.md)

---

## Before You Start

Read [Note 11](../01-notes/11-pivottables-and-pivotcharts.md). PivotTables shine on bigger data, so use the sales dataset from [Project 01](../04-projects/01-sales-dashboard/sales-data.csv) if you have it — import it (Data → From Text/CSV). Otherwise expand your `Orders` table to ~20 rows with varied Region, Product, Date, and Amount values. Convert the source to a **Table** (`Ctrl + T`) named `Sales`.

---

## Exercise 11.1 — Your First PivotTable

1. Click inside the data → **Insert → PivotTable → New Worksheet → OK.**
2. In the Fields pane, drag **Region** to **Rows**.
3. Drag **Amount** to **Values**.

You now have total amount per region.

**Questions:**
- What appears at the bottom of the Rows area?
- Did Excel default to **Sum** of Amount? How can you tell?

---

## Exercise 11.2 — Two-Dimensional Analysis

1. Drag **Product** to **Columns**. Now you have a region × product grid.
2. Read off: what's the total for North + Apples?
3. Drag **Date** (or a Year field) to **Filters** and pick one period. Does the whole grid rescope?

**Question:** How many `SUMIFS` formulas would you need to reproduce this grid by hand?

---

## Exercise 11.3 — Change the Aggregation

1. Click the **Sum of Amount** field → **Value Field Settings**.
2. Change it to **Average**. What does the report show now?
3. Change to **Count**. What does each number mean now?
4. Drag **Amount** into Values a *second* time and set one to Sum and one to Average — see both side by side.

**Question:** If a numeric field shows up as **Count** when you expected Sum, what's the likely cause?

---

## Exercise 11.4 — Show Values As

1. With **Sum of Amount** by Region, open **Value Field Settings → Show Values As → % of Grand Total.**
2. Each region now shows its **share** of total sales. Which region is the biggest contributor?
3. Try **Show Values As → Rank Largest to Smallest** in a second copy.

**Question:** Why is "% of Grand Total" more insightful for a stakeholder than raw dollar totals?

---

## Exercise 11.5 — Grouping by Date

1. Put **Date** in Rows and **Amount** in Values.
2. Right-click any date in the report → **Group** → select **Months** (and **Years** if data spans years).
3. You now have a monthly trend without any helper columns.
4. Try grouping a numeric field (e.g. **Amount**) into bins of 100 to make a value-distribution summary.

**Question:** How does PivotTable date grouping compare to adding a `=TEXT(date,"yyyy-mm")` helper column (Note 07)?

---

## Exercise 11.6 — Refresh (the rule people forget)

1. Go back to your source Table and **add a new row** of data.
2. Return to the PivotTable. Did the new data appear automatically?
3. Right-click the PivotTable → **Refresh** (or `Alt + F5`). Now does it include the new row?

**Question:** Why does building the PivotTable on a **Table** (rather than a fixed range like `A1:F50`) matter when you add rows?

---

## Exercise 11.7 — Slicers and a PivotChart

1. Click the PivotTable → **PivotTable Analyze → Insert Slicer** → choose **Region**. Click buttons to filter.
2. Click the PivotTable → **PivotTable Analyze → PivotChart** → choose a **Column** chart.
3. Click a region on the slicer. Do the PivotTable **and** the chart both update?

**Question:** How does this combination (slicer + pivot + pivotchart) form the basis of an interactive dashboard (Note 12)?

---

## Challenge — Test Yourself

1. Describe the four PivotTable drop zones and what each does.
2. You want average order value per region per month. Which fields go in Rows, Columns, and Values, and what aggregation?
3. Your PivotTable doesn't show data you just added to the source. Give two possible reasons and the fix for each.
4. How do you turn "Sum of Amount" into "% of Grand Total"?
5. Why is a PivotTable built on dirty/inconsistent data (e.g. `North` vs `north`) misleading?

> **Answers:**
> 1. Rows (categories down the side), Columns (categories across the top), Values (the numbers aggregated), Filters (a master drop-down over the whole report).
> 2. Region in Rows, Month (grouped Date) in Columns, Amount in Values set to **Average**.
> 3. (a) You didn't Refresh — right-click → Refresh. (b) The source is a fixed range that doesn't include the new rows — change the data source or use a Table.
> 4. Value Field Settings → Show Values As → % of Grand Total.
> 5. Inconsistent categories split into separate rows (`North` and `north` counted separately), so totals and breakdowns are wrong — clean and standardize first.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 10](10-sorting-filtering-conditional-formatting-exe.md) | Next → [Exercise 12](12-charts-dashboards-what-if-exe.md)
**Note:** [11 — PivotTables & PivotCharts](../01-notes/11-pivottables-and-pivotcharts.md)
