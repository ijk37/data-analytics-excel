# Exercise 12 — Charts, Dashboards & What-If Analysis

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 11](11-pivottables-and-pivotcharts-exe.md)
**Note:** [12 — Charts, Dashboards & What-If Analysis](../01-notes/12-charts-dashboards-what-if.md)

---

## Before You Start

Read [Note 12](../01-notes/12-charts-dashboards-what-if.md). This final exercise ties everything together: visualize summarized data, assemble a mini-dashboard, and use What-If tools to plan. Use your `Sales` data and the PivotTables from Exercise 11.

---

## Exercise 12.1 — Pick the Right Chart

For each scenario, name the chart type you'd use (then check against the note):

1. Monthly revenue over a year.
2. Revenue compared across 5 regions.
3. Share of total sales by product (3 products).
4. Relationship between advertising spend and sales.
5. Revenue (large $) and profit margin (%) on the same chart.

**Question:** Why is a line chart wrong for scenario 4, and why is a pie chart risky if there were 12 products instead of 3?

---

## Exercise 12.2 — Build and Refine a Column Chart

1. From your "revenue by region" PivotTable (or a plain summary), select it and **Insert → Column Chart** (or Insert → Recommended Charts).
2. Use the **`+` (Chart Elements)** button to add a **clear title**, **data labels**, and **axis titles**.
3. Sort the source data largest-to-smallest so bars descend.
4. Remove clutter: delete heavy gridlines and any 3-D effect.

**Question:** Why should a column chart's value axis start at zero?

---

## Exercise 12.3 — A Line Chart for Trend

1. Using your monthly grouped data (Exercise 11.5), select Month and Revenue.
2. **Insert → Line Chart.**
3. Add a **trendline** (right-click the line → Add Trendline → Linear). Display the equation/R² if offered.

**Question:** What does the trendline tell you that the raw line alone doesn't?

---

## Exercise 12.4 — Sparklines

1. Make a small table: each Region in a row, with 4 columns of monthly revenue.
2. Select an empty cell beside the first region → **Insert → Sparklines → Line** → choose the 4-month range.
3. Copy the sparkline down for every region.

**Question:** When is an in-cell sparkline more useful than a full-size chart?

---

## Exercise 12.5 — Assemble a Mini Dashboard

On a new sheet named `Dashboard`:

1. Add **KPI cards** — big single numbers using formulas: total revenue (`=SUM(...)` or from a pivot), average order value, number of orders. Format them large and bold.
2. Paste/anchor **two PivotCharts** (e.g. revenue by region, revenue by month).
3. **Insert → Slicer** for Region and a **Timeline** for Date. Connect them to *both* pivots (Slicer → **Report Connections** → tick both PivotTables).
4. Click a region and a time range — confirm both charts and (ideally) the KPIs respond.
5. Align everything on a clean grid; lead with the most important KPI top-left.

**Question:** Why keep raw data, pivots, and the dashboard on separate sheets?

---

## Exercise 12.6 — Goal Seek

Set up a tiny profit model:

| | A | B |
|--|----------------|--------|
|1| Units sold | 100 |
|2| Price | 10 |
|3| Fixed cost | 400 |
|4| Profit | `=B1*B2-B3` |

1. Profit currently = ? 
2. **Data → What-If Analysis → Goal Seek.** Set cell `B4` **To value** `0` **By changing cell** `B1`. How many units to break even?
3. Now find the price needed for `$1000` profit at 100 units: Goal Seek B4 to 1000 by changing B2.

**Question:** Goal Seek adjusts how many inputs to hit how many targets?

---

## Exercise 12.7 — Data Table (Sensitivity)

Using the same model:

1. In a column, list candidate prices: `8, 9, 10, 11, 12`.
2. Next to the top of that list, reference the profit formula (`=B4`).
3. Select the block and **Data → What-If Analysis → Data Table**, with **Column input cell** = `B2` (Price).
4. Excel fills profit for every price. Which price first turns a profit?

**Question:** How does a Data Table differ from running Goal Seek five times?

---

## Exercise 12.8 — Forecast (optional)

If you have monthly revenue across at least ~8 months:

1. Select the Date and Revenue columns → **Data → Forecast Sheet.**
2. Excel generates a forecast chart with confidence bounds. Adjust the forecast end date.

**Question:** What assumption does any forecast make, and why should you sanity-check it?

---

## Challenge — Test Yourself

1. Match each to a chart type: (a) trend over time, (b) category comparison, (c) correlation of two numbers, (d) two metrics on different scales.
2. Name three things that make a chart more readable.
3. You know the target profit and want to find the required price. Which What-If tool, and what do you set?
4. You want to see profit across many prices *and* many unit volumes at once. Which tool?
5. List the seven stages of the full analytics workflow from the note.

> **Answers:**
> 1. (a) Line, (b) Column/Bar, (c) Scatter (XY), (d) Combo.
> 2. Any three: clear title stating the takeaway, labeled axes with units, data labels, sorted bars, zero-based axis, removed clutter, a trendline.
> 3. Goal Seek — Set the profit cell To the target value By changing the price cell.
> 4. A two-variable Data Table (price as one input, units as the other).
> 5. Import → clean & validate → enrich with formulas → explore → summarize (PivotTables) → visualize (charts/dashboard) → plan (What-If/forecast).

---

🎉 **You've completed the curriculum!** Now build the [mini-projects](../04-mini-projects/README.md) end-to-end to put it all into practice.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 11](11-pivottables-and-pivotcharts-exe.md)
**Note:** [12 — Charts, Dashboards & What-If Analysis](../01-notes/12-charts-dashboards-what-if.md)
