# 12 — Charts, Dashboards & What-If Analysis

**Navigation:** [Notes Index](README.md) | ← Previous [11 — PivotTables & PivotCharts](11-pivottables-and-pivotcharts.md) | Next → [Notes Index](README.md)
**Exercise:** [Exercise 12](../02-exercises/12-charts-dashboards-what-if-exe.md)

---

## From Numbers to Insight

This final note covers the "last mile" of analytics: turning your summarized data into **charts** people can read instantly, assembling them into a **dashboard**, and using **What-If** tools to ask "what would happen if…". This is where analysis becomes communication and decision-making.

---

## Choosing the Right Chart

The most common charting mistake is picking the wrong type. Match the chart to the question:

| Question / data | Best chart |
|-----------------|-----------|
| Compare values across categories | **Column** (vertical bars) |
| Compare across many categories or long labels | **Bar** (horizontal bars) |
| Trend over **time** | **Line** |
| Cumulative total over time / volume | **Area** |
| Part-to-whole (a few slices) | **Pie** or **Doughnut** (use sparingly) |
| Relationship between two numeric variables | **Scatter (XY)** |
| Distribution of one variable | **Histogram** |
| Two metrics on different scales together | **Combo** (e.g. revenue columns + margin % line) |

**Rules of thumb:**

- **Line for time, column for categories.** This covers 80% of business charts.
- **Avoid pie charts with more than ~4 slices** — people can't compare angles well. A bar chart almost always communicates better.
- **Start the axis at zero for column/bar charts** — a truncated axis exaggerates differences and misleads.
- **Use a scatter plot to show correlation** (e.g. ad spend vs. sales), never a line chart for non-time data.

---

## Creating and Refining a Chart

1. Select your summarized data (including the category labels and a header).
2. **Insert** tab → pick a chart type, or use **Insert → Recommended Charts** to let Excel suggest one.
3. The chart appears with three control buttons on its top-right (in desktop Excel):
   - **`+` Chart Elements** — toggle title, axis titles, data labels, gridlines, legend, trendline.
   - **🖌 Chart Styles** — preset looks and colors.
   - **▼ Chart Filters** — show/hide specific series or categories.

### Make every chart readable

- **Title it clearly** — state the takeaway, not just "Chart 1". `Revenue by Region, 2026` beats `Revenue`.
- **Label axes** and include units (`$`, `%`, `units`).
- **Add data labels** when exact values matter (Chart Elements → Data Labels).
- **Sort the data** before charting categories (largest to smallest) so bars descend — far easier to read.
- **Remove clutter** — drop heavy gridlines, 3-D effects, and busy backgrounds. Less ink, more signal.
- **Add a trendline** (right-click a series → Add Trendline) to show direction on scatter/line charts.

### Sparklines — tiny in-cell charts

**Insert → Sparklines** (Line, Column, or Win/Loss) draws a mini chart *inside a single cell*, perfect for showing a trend next to each row of a table (e.g. each product's 12-month sales as a tiny line). Great for compact dashboards.

---

## Building a Dashboard

A **dashboard** is a single screen that answers a business's key questions at a glance — a few charts, some headline numbers (KPIs), and interactive filters, all on one sheet.

### A practical recipe

1. **Separate the layers.** Use three sheets: `Data` (raw Table), `Pivots` (PivotTables/calculations), `Dashboard` (the visuals only). Never build charts directly on raw data.
2. **Summarize with PivotTables** (Note 11) — one per question (revenue by month, sales by region, top products).
3. **Create PivotCharts** from them, or regular charts from formula-driven summaries.
4. **Add KPI cards** — big single numbers for headline metrics using `SUM`/`SUMIFS`/`AVERAGE`, formatted large and bold (total revenue, avg order value, YoY growth).
5. **Add Slicers and a Timeline** (Note 10/11) and connect them to *all* the PivotTables (Slicer → Report Connections) so one click filters the whole dashboard at once.
6. **Lay it out cleanly** — align charts on a grid, use consistent colors, group related items, put the most important KPI top-left (where eyes land first).
7. **Refresh** before presenting (Data → Refresh All) so every pivot and chart reflects the latest data.

The result: a manager clicks `North` and `Q2`, and every chart, table, and KPI updates together. That interactivity is what separates a dashboard from a static report.

> **Design discipline:** a dashboard is about *focus*. Pick the 4–6 questions that matter, give each one clear visual, and resist cramming in everything. White space and a clear hierarchy beat density.

---

## What-If Analysis

What-If tools work **backwards and forwards** through your formulas to answer planning questions. They live under **Data → What-If Analysis** (plus Goal Seek and Solver).

### Goal Seek — "what input gives me this result?"

You know the **answer** you want and need to find the **input** that produces it. Excel adjusts one cell until a formula hits your target.

**Example:** A loan payment formula in `B5` depends on the interest rate in `B2`. You want the payment to be exactly `$500`.

1. **Data → What-If Analysis → Goal Seek.**
2. **Set cell:** `B5` (the formula result).
3. **To value:** `500`.
4. **By changing cell:** `B2` (the input to adjust).
5. Excel iterates and tells you the rate that yields a $500 payment.

Goal Seek changes **one input** to hit **one target** — perfect for break-even points ("how many units to reach $0 profit?") and required-rate questions.

### Data Tables — see many scenarios at once

A **Data Table** recalculates a formula across a range of input values and lays the results in a grid — a sensitivity analysis.

- **One-variable** data table: how does monthly payment change as the interest rate varies from 3% to 8%?
- **Two-variable** data table: how does payment change across a grid of *both* interest rate **and** loan term?

Set up the input values along a row and/or column, point the table at your formula (Data → What-If Analysis → Data Table), and Excel fills the whole grid. You instantly see how sensitive the outcome is to each input.

### Scenario Manager — compare named cases

When several inputs change together, **Scenario Manager** stores complete sets of input values as named scenarios — `Best Case`, `Expected`, `Worst Case` — and switches between them or produces a summary report comparing their outcomes side by side. Ideal for budgeting and forecasting with multiple moving assumptions.

### Solver — optimization with constraints

For complex problems — "maximize profit subject to a budget and capacity limits" — the **Solver** add-in (File → Options → Add-ins → enable Solver) adjusts *many* inputs at once to optimize a target while respecting constraints. It's Goal Seek's heavyweight sibling, used for resource allocation, scheduling, and product-mix optimization.

---

## Forecasting

Excel has built-in forecasting for time-series data:

- **Forecast Sheet** (Data → Forecast Sheet) — select a date column and a value column, and Excel generates a forecast chart with confidence bounds using exponential smoothing. One click, no statistics required.
- **TREND / FORECAST.LINEAR** functions — project a linear trend forward.
- **Trendlines** on a chart — add a linear, moving-average, or polynomial trendline and optionally display its equation and R² to gauge fit.

These give quick, defensible projections for planning — just remember a forecast assumes the past pattern continues, so sanity-check against real-world knowledge.

---

## Bringing the Whole Curriculum Together

A complete analytics workflow, start to finish:

1. **Import** raw data (Note 02, Power Query).
2. **Clean & validate** it (Note 09).
3. **Enrich** with formulas — categories, dates parsed, lookups joined (Notes 3–8).
4. **Explore** with sort, filter, conditional formatting (Note 10).
5. **Summarize** with PivotTables (Note 11).
6. **Visualize** with charts and a dashboard (this note).
7. **Plan** with What-If analysis and forecasting (this note).

That arc — raw data to decision — is data analytics in Excel. The [projects](../04-projects/README.md) walk you through it end to end on real datasets.

---

## Key Things to Remember

> **Match the chart to the question.** Line for time, column/bar for categories, scatter for relationships, combo for two scales. Avoid many-slice pies and truncated axes — they mislead.

> **A dashboard is layered and interactive.** Keep raw data, pivots, and visuals on separate sheets; drive everything with shared Slicers/Timeline; lead with the key KPI. Focus on a few questions, not everything.

> **Goal Seek finds the input for a target; Data Tables/Scenarios explore many cases; Solver optimizes under constraints.** Pick the What-If tool by how many inputs change and whether you're targeting or optimizing.

> **The full workflow is import → clean → enrich → explore → summarize → visualize → plan.** Every note in this curriculum is one stage of that pipeline.

---

**Navigation:** [Notes Index](README.md) | ← Previous [11 — PivotTables & PivotCharts](11-pivottables-and-pivotcharts.md)
**Exercise:** [Exercise 12](../02-exercises/12-charts-dashboards-what-if-exe.md)

---

*This is the final note. From here, practice with the [exercises](../02-exercises/README.md) and build the [projects](../04-projects/README.md) to cement everything.*
