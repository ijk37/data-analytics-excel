# Exercise 07 — Date & Time Functions

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 06](06-text-functions-exe.md) | Next → [Exercise 08](08-lookup-and-reference-functions-exe.md)
**Note:** [07 — Date & Time Functions](../01-notes/07-date-and-time-functions.md)

---

## Before You Start

Read [Note 07](../01-notes/07-date-and-time-functions.md). The key mindset: **a date is just a number wearing a date costume.** These exercises prove it and then put dates to work for time-based analysis.

Set up on a sheet named `Dates`:

| | A | B |
|--|------------|------------|
|1| OrderDate | ShipDate |
|2| 2026-01-05 | 2026-01-09 |
|3| 2026-02-14 | 2026-02-20 |
|4| 2026-03-30 | 2026-04-02 |

---

## Exercise 7.1 — Dates Are Numbers

1. Click `A2` (a date). Change its number format to **General** (Home → number format dropdown → General). What does the date turn into?
2. Change it back to a **Short Date** format. The date returns — did the underlying value ever change?
3. In `C2` type `=A2` and format it as **General**. Note the serial number.
4. In `D2` type `=B2-A2`. What does it return, and what does that number mean?

**Question:** Why can you subtract two dates and get a meaningful answer?

---

## Exercise 7.2 — The Text-Date Trap

1. In `A6`, type a date as text by prefixing an apostrophe: `'2026-05-01`. It aligns **left**.
2. Try `=A6+1`. Does it work, or error? Try `=A6-A2`.
3. Convert it: `=DATEVALUE(A6)` and format the result as a date. Now does it calculate?
4. Alternatively, select the text-date and use **Data → Text to Columns → Finish**. Does it become a real date?

**Question:** How can you tell at a glance whether a "date" is a real date or just text?

---

## Exercise 7.3 — Today, Now, and Building Dates

1. `=TODAY()` — what shows? `=NOW()` — what extra does it add?
2. `=TODAY()-A2` — how many days ago was the order? (Format the result as a number, not a date.)
3. Build a date from parts: `=DATE(2026,12,25)`.
4. Try the rollover trick: `=DATE(2026,13,1)`. What date results, and why?

**Question:** What's the difference between `=TODAY()` and pressing `Ctrl + ;` in a cell?

---

## Exercise 7.4 — Extract Date Parts

For each OrderDate, add helper columns:

| Goal | Formula |
|------|---------|
| Year | `=YEAR(A2)` |
| Month number | `=MONTH(A2)` |
| Month name | `=TEXT(A2,"mmmm")` |
| Weekday name | `=TEXT(A2,"dddd")` |
| Year-month key | `=TEXT(A2,"yyyy-mm")` |

**Questions:**
- Why is `"yyyy-mm"` a good grouping key for sorting transactions chronologically?
- How would extracting `MONTH` help you total sales per month?

---

## Exercise 7.5 — Date Arithmetic

| # | Goal | Formula |
|---|------|---------|
| 1 | Days to ship | `=B2-A2` |
| 2 | **Working** days to ship | `=NETWORKDAYS(A2,B2)` |
| 3 | 30 days after order | `=A2+30` |
| 4 | Same day, 3 months later | `=EDATE(A2,3)` |
| 5 | Last day of order's month | `=EOMONTH(A2,0)` |

**Question:** Why is `EOMONTH` better than just adding 30 days to find month-end?

---

## Exercise 7.6 — Duration with DATEDIF

1. In a cell, put a birthdate, e.g. `1995-06-15` in `F2`.
2. Compute age in whole years: `=DATEDIF(F2, TODAY(), "Y")`.
3. Compute months: `=DATEDIF(F2, TODAY(), "M")`.

**Question:** Why use `DATEDIF(...,"Y")` instead of `=(TODAY()-F2)/365` to get age?

---

## Exercise 7.7 — Build an Analysis-Ready Date Column

Using your `Orders` dataset from earlier exercises, add helper columns so it's ready for time analysis:

```
Year:         =YEAR([@Date])
Month key:    =TEXT([@Date], "yyyy-mm")
Weekday:      =TEXT([@Date], "dddd")
Weekend?:     =IF(WEEKDAY([@Date],2)>5, "Weekend", "Weekday")
```

(If you're not using a Table, replace `[@Date]` with the cell reference like `A2`.)

**Question:** With these columns, what new questions can a PivotTable now answer that it couldn't with just a raw date?

---

## Challenge — Test Yourself

1. A cell shows `2026-06-29` but won't subtract from another date. What is it really, and how do you fix it?
2. Write a formula for "how many days until 2026-12-31 from today".
3. Write a formula that returns the last day of *next* month relative to a date in A2.
4. Write a formula that labels a date in A2 as "Weekend" or "Weekday".
5. Why is `=TEXT(A2,"yyyy-mm")` more useful as a grouping key than `=MONTH(A2)` alone?

> **Answers:**
> 1. It's text, not a real date. Fix with `DATEVALUE`, Text to Columns, or setting the column type to Date on import.
> 2. `=DATE(2026,12,31)-TODAY()`
> 3. `=EOMONTH(A2,1)`
> 4. `=IF(WEEKDAY(A2,2)>5,"Weekend","Weekday")`
> 5. `MONTH` returns just `1–12`, so January 2025 and January 2026 collapse together; `"yyyy-mm"` keeps year and month, so each month is distinct and sorts chronologically.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 06](06-text-functions-exe.md) | Next → [Exercise 08](08-lookup-and-reference-functions-exe.md)
**Note:** [07 — Date & Time Functions](../01-notes/07-date-and-time-functions.md)
