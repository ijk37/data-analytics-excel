# 10 — Sorting, Filtering & Conditional Formatting

**Navigation:** [Notes Index](README.md) | ← Previous [09 — Data Cleaning & Validation](09-data-cleaning-and-validation.md) | Next → [11 — PivotTables & PivotCharts](11-pivottables-and-pivotcharts.md)
**Exercise:** [Exercise 10](../02-exercises/10-sorting-filtering-conditional-formatting-exe.md)

---

## Exploring Data Before Summarizing

Sorting, filtering, and conditional formatting are the **exploration** tools — the things you do to *look at* a dataset and spot patterns before you build PivotTables or charts. They answer quick questions: "Who are the top customers?" "Show me only the North region." "Which orders are overdue?" None of them change your data; they just change what you see and how it's highlighted.

> **Work in a Table.** As in Note 02, pressing `Ctrl + T` first gives every column filter arrows automatically and keeps sorts/filters tied to the right data block.

---

## Sorting

Sorting reorders rows by one or more columns. Select a cell in the data, then **Data → Sort** (or the A→Z / Z→A buttons).

### Single-column sort

- **A→Z** (ascending): smallest number, earliest date, or A-first text on top.
- **Z→A** (descending): largest/most-recent/Z-first on top — use this to find top performers.

Click any cell in the column first; don't select just the column, or Excel may sort it independently of the other columns and **scramble your rows**. (Excel usually warns with "expand the selection" — always expand.)

### Multi-level sort

To sort by Region, then by Revenue within each region: **Data → Sort** opens a dialog where you add levels:

```
Sort by      Region        A → Z
Then by      Revenue       Largest to Smallest
```

Levels apply top-down: the first is the primary key, each "Then by" breaks ties. This is how you produce reports like "each region's customers, ranked by spend".

### Other sort options

- **Sort by color** — order rows by cell or font color (pairs with conditional formatting).
- **Custom lists** — sort by a non-alphabetical order like `Mon, Tue, Wed` or `Small, Medium, Large` (File → Options → Advanced → Edit Custom Lists).
- **Sort left-to-right** — Sort dialog → Options → "Sort left to right" reorders *columns* instead of rows.

> **Sorting is destructive to order.** It permanently rearranges rows (until you re-sort). If the original sequence matters, add an index column (`1, 2, 3…`) first so you can always sort back to it.

---

## Filtering

Filtering **hides** rows that don't meet your criteria, showing only what you care about — without deleting anything. Turn filters on with **`Ctrl + Shift + L`** (or Data → Filter); drop-down arrows appear on each header.

### Basic filter

Click a header's arrow to:

- **Check/uncheck values** — show only `North`, or everything except `Cancelled`.
- **Search** the value list to find entries quickly in a long list.
- Stack filters across columns — they combine with AND (region = North **and** status = Open).

The status bar shows the count of visible rows, and filtered column arrows change to a funnel icon so you remember a filter is active.

### Text, number, and date filters

Each column type offers smart filters:

- **Text Filters:** Begins With, Contains, Does Not Contain, Ends With.
- **Number Filters:** Greater Than, Between, Top 10, Above Average.
- **Date Filters:** This Month, Last Quarter, Year to Date, Before/After a date.

**Top 10** is especially handy: Number Filters → Top 10 → "Top 5 Items" instantly isolates your five biggest values.

### Clearing filters

- One column: open its arrow → **Clear Filter From…**.
- All at once: **Data → Clear**, or toggle `Ctrl + Shift + L` twice.

### Advanced Filter and FILTER()

- **Advanced Filter** (Data → Advanced) filters with complex criteria and can **copy results to another location** — useful for extracting a subset to its own sheet.
- The **`FILTER`** function (365, Note 08) does this with a live formula: `=FILTER(Sales, Sales[Region]="North")` spills every matching row and updates automatically.

### Slicers — visual filter buttons

For Tables and PivotTables, **Insert → Slicer** adds clickable filter buttons. They're more intuitive than drop-downs and are the standard way to make an interactive dashboard (Note 12). Click `North` on a slicer and every connected table/chart filters instantly.

---

## Conditional Formatting

Conditional formatting **changes the appearance** of cells based on their values — turning a wall of numbers into a visual at a glance. Select a range, then **Home → Conditional Formatting**.

### Highlight rules

Color cells that meet a condition:

- **Greater Than / Less Than / Between** — e.g. highlight revenue over 1000 in green.
- **Equal To / Text That Contains** — flag every `Overdue`.
- **A Date Occurring** — last week, this month, etc.
- **Duplicate Values** — paint repeats (a cleaning aid, Note 09).

### Top/Bottom rules

- **Top 10 / Top 10%** — spotlight the best performers.
- **Bottom 10 / 10%** — find the laggards.
- **Above / Below Average** — split the field around its mean.

### Data bars, color scales, and icon sets

Visual encodings inside the cells themselves:

- **Data Bars** — a mini in-cell bar chart; longer bar = bigger value. Instant magnitude comparison without leaving the table.
- **Color Scales** — a heatmap; e.g. green-yellow-red gradient across values. Great for spotting hot/cold regions in a grid.
- **Icon Sets** — traffic lights, arrows, or flags based on value bands (e.g. ▲ up / ▬ flat / ▼ down for change vs. last period).

### Formula-based rules (the powerful option)

For anything the built-in rules can't express, use **New Rule → Use a formula**. The formula returns TRUE/FALSE per cell; TRUE gets the format.

```
=$E2="Overdue"          → highlight the whole row where status is Overdue
=$D2>AVERAGE($D:$D)     → highlight above-average rows
=$F2<TODAY()            → flag past-due dates
```

**To highlight an entire row** based on one column, select the whole data range, write a rule referencing that column with the **column locked** (`$E2` — dollar on the column, not the row). This is how you make "show overdue orders in red" apply across the full row, the single most-requested conditional-format trick.

> **Managing rules:** Home → Conditional Formatting → **Manage Rules** lets you edit, reorder (top rule wins on conflicts), and set "Stop If True". To remove formatting, use **Clear Rules**. Keep rules few and meaningful — over-coloring a sheet hurts readability more than it helps.

---

## Putting It Together: An Exploration Workflow

A typical first pass on a new dataset:

1. `Ctrl + T` to make it a Table.
2. Sort descending by the key metric to see top and bottom.
3. Apply a filter to focus on one segment (e.g. this quarter, one region).
4. Add a color scale or data bars to the metric column to see distribution.
5. Add a "highlight entire row if Overdue/At-risk" formula rule to flag exceptions.
6. Note what you find — then build a PivotTable (Note 11) to quantify it.

---

## Key Things to Remember

> **Sort and filter from inside a Table.** It keeps every column moving together and gives you filter arrows for free. Selecting a lone column and sorting it can scramble your rows.

> **Filtering hides, it doesn't delete.** Filters are non-destructive exploration; the data is all still there. Sorting *does* permanently reorder — add an index column if original order matters.

> **Conditional formatting reveals patterns at a glance.** Data bars for magnitude, color scales for heatmaps, Top/Bottom for outliers, and formula rules (`$Column`-locked) to highlight whole rows on a condition.

> **Slicers turn filters into a dashboard.** Clickable Slicer buttons are the interactive front-end for Tables and PivotTables (Note 12).

---

**Navigation:** [Notes Index](README.md) | ← Previous [09 — Data Cleaning & Validation](09-data-cleaning-and-validation.md) | Next → [11 — PivotTables & PivotCharts](11-pivottables-and-pivotcharts.md)
**Exercise:** [Exercise 10](../02-exercises/10-sorting-filtering-conditional-formatting-exe.md)
