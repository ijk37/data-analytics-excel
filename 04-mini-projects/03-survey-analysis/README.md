# Mini Project 03 — Survey Data Analysis

**Navigation:** [Projects Index](../README.md) | ← Previous [02 — Budget Tracker](../02-budget-tracker/README.md) | Next → [04 — Inventory Manager](../04-inventory-manager/README.md)

---

## Overview

Analyze responses from a customer satisfaction survey: compute response rates, average ratings, break results down by segment, and turn a 1–5 satisfaction score into a Net Promoter–style summary. This is classic "categorical + rating" analytics.

**Skills:** COUNTIF/COUNTIFS, AVERAGEIF, IF categorization, percentages, charts, PivotTables
**Notes used:** [04](../../01-notes/04-essential-functions.md), [05](../../01-notes/05-logical-functions.md), [10](../../01-notes/10-sorting-filtering-conditional-formatting.md), [11](../../01-notes/11-pivottables-and-pivotcharts.md), [12](../../01-notes/12-charts-dashboards-what-if.md)

---

## The Data

`survey-responses.csv` contains ~50 survey responses:

| Column | Description |
|--------|-------------|
| RespondentID | Unique ID |
| AgeGroup | 18-24, 25-34, 35-44, 45-54, 55+ |
| Channel | How they're a customer: Web, Store, Mobile |
| Satisfaction | Rating 1 (worst) to 5 (best) |
| WouldRecommend | Yes / No |
| Comment | Free text (some blank) |

---

## What You'll Build

A summary report and chart covering:
- Total responses and **completion rate** (how many left a comment).
- **Average satisfaction**, overall and by Channel and AgeGroup.
- Distribution of ratings 1–5 (a count of each) → column chart.
- A **sentiment bucket**: Promoter (4–5), Neutral (3), Detractor (1–2), and the **% Promoters**.
- % who would recommend.

---

## Walkthrough

### Step 1 — Import and tidy
1. Import `survey-responses.csv` → Table named `Survey`.
2. Quick checks: `=COUNTA(Survey[RespondentID])` for total responses; `=COUNTBLANK(Survey[Comment])` for how many skipped the comment.

### Step 2 — Rating distribution
Build a small table of scores 1–5 and count each:
```
=COUNTIF(Survey[Satisfaction], 1)
=COUNTIF(Survey[Satisfaction], 2)
... through 5
```
Add a **% of total** column and insert a **column chart** of the distribution.

### Step 3 — Averages by segment
```
Overall avg:        =AVERAGE(Survey[Satisfaction])
Avg by channel:     =AVERAGEIF(Survey[Channel], "Web", Survey[Satisfaction])
Avg 25-34 on Mobile:=AVERAGEIFS(Survey[Satisfaction], Survey[AgeGroup],"25-34", Survey[Channel],"Mobile")
```

### Step 4 — Sentiment buckets
Add a calculated column to the table:
```
Sentiment: =IF([@Satisfaction]>=4,"Promoter", IF([@Satisfaction]=3,"Neutral","Detractor"))
```
Then summarize:
```
% Promoters:  =COUNTIF(Survey[Sentiment],"Promoter")/COUNTA(Survey[Sentiment])
% Detractors: =COUNTIF(Survey[Sentiment],"Detractor")/COUNTA(Survey[Sentiment])
NPS-style:    =% Promoters - % Detractors
```

### Step 5 — Recommendation rate
```
=COUNTIF(Survey[WouldRecommend],"Yes")/COUNTA(Survey[WouldRecommend])
```
Format as a percentage and display as a KPI.

### Step 6 — Cross-tab with a PivotTable
Insert a PivotTable: **AgeGroup** in Rows, **Channel** in Columns, **Average of Satisfaction** in Values. Which segment is happiest? Add a **Color Scale** to spot patterns.

---

## Learning Goals

After this project you can:
- Build a frequency distribution with `COUNTIF` and chart it.
- Compute segmented averages with `AVERAGEIF`/`AVERAGEIFS`.
- Turn a numeric rating into sentiment categories with nested `IF`.
- Cross-tabulate satisfaction by two dimensions in a PivotTable.

---

## Extensions

- Add conditional formatting to flag any segment with average satisfaction below 3.
- Compute the recommendation rate *by channel* with `COUNTIFS`.
- Use `=COUNTIF(Survey[Comment],"?*")` ideas to count non-empty comments and compute a true completion rate.
- Build a small dashboard with a slicer on Channel.

---

[Projects Index](../README.md) | ← Previous [02 — Budget Tracker](../02-budget-tracker/README.md) | Next → [04 — Inventory Manager](../04-inventory-manager/README.md)
