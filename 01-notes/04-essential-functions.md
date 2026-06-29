# 04 — Essential Functions (Count, Sum & Statistical)

**Navigation:** [Notes Index](README.md) | ← Previous [03 — Formulas & Cell References](03-formulas-and-cell-references.md) | Next → [05 — Logical Functions](05-logical-functions.md)
**Exercise:** [Exercise 04](../02-exercises/04-essential-functions-exe.md)

---

## What is a Function?

A **function** is a built-in, named formula that performs a specific job. Instead of writing `=A1+A2+A3+...+A100`, you call the `SUM` function:

```
=SUM(A1:A100)
```

Every function follows the same shape:

```
=NAME(argument1, argument2, ...)
```

- **NAME** — the function name (`SUM`, `AVERAGE`, `COUNT`).
- **( )** — parentheses always follow the name, even when empty (e.g. `=TODAY()`).
- **arguments** — the inputs, separated by commas. An argument can be a number, a cell, a range, text, or another function.

Excel has ~500 functions. You need maybe 30 for most analytics, and this note covers the foundational aggregation and statistical ones.

> **AutoComplete helps you.** Type `=SU` and Excel lists matching functions with a tooltip describing each. As you fill in arguments, a hint shows which argument you're on (the bold one). Press `Tab` to accept a suggested function.

---

## The Big Five Aggregations

These summarize a range of numbers into a single value. They are the workhorses of analytics.

| Function | Returns | Example |
|----------|---------|---------|
| `SUM` | Total | `=SUM(B2:B100)` |
| `AVERAGE` | Arithmetic mean | `=AVERAGE(B2:B100)` |
| `COUNT` | How many **numbers** | `=COUNT(B2:B100)` |
| `MAX` | Largest value | `=MAX(B2:B100)` |
| `MIN` | Smallest value | `=MIN(B2:B100)` |

### AutoSum — the one-click shortcut

Select the cell just **below** a column of numbers and press **`Alt + =`** (or Home → AutoSum). Excel guesses the range and writes the `SUM` for you. The AutoSum drop-down also offers Average, Count, Max, and Min.

---

## Counting: COUNT vs COUNTA vs COUNTBLANK

Counting trips people up because "how many" depends on *what* you're counting.

| Function | Counts | Use when |
|----------|--------|----------|
| `COUNT` | Cells containing **numbers** | Counting numeric records (e.g. how many sales had a price) |
| `COUNTA` | Cells that are **not empty** (text *or* numbers) | Counting all records, including text |
| `COUNTBLANK` | **Empty** cells | Finding missing data |

```
=COUNT(B2:B100)       → 95   (95 of the cells hold numbers)
=COUNTA(A2:A100)      → 99   (99 cells have something in them)
=COUNTBLANK(B2:B100)  → 4    (4 numeric cells are missing)
```

A common analytics check: `=COUNTA(A2:A100)` for total records vs `=COUNT(B2:B100)` for how many have a value in column B — the difference reveals gaps.

---

## Conditional Aggregation: the `*IF` Family

The plain functions total *everything*. Real questions are conditional: "total revenue **for the North region**", "average price **of apples**", "how many sales **over $100**". The `*IF` and `*IFS` functions answer these.

### COUNTIF — count cells that meet one condition

```
=COUNTIF(range, criteria)
```

```
=COUNTIF(C2:C100, "North")     → how many rows have "North"
=COUNTIF(D2:D100, ">100")      → how many values exceed 100
=COUNTIF(A2:A100, "Apple*")    → how many start with "Apple" (* = wildcard)
```

### SUMIF — total the values where a condition holds

```
=SUMIF(criteria_range, criteria, sum_range)
```

```
=SUMIF(C2:C100, "North", D2:D100)   → total of column D where column C = "North"
=SUMIF(D2:D100, ">=100")            → total of D where D itself is ≥ 100 (sum_range omitted = criteria range)
```

Note the argument order: the range you *test* comes first, the range you *add up* comes last.

### AVERAGEIF — mean of values where a condition holds

```
=AVERAGEIF(C2:C100, "South", D2:D100)   → average of D where C = "South"
```

### The `*IFS` versions — multiple conditions

When you need **more than one** condition, use the plural forms: `COUNTIFS`, `SUMIFS`, `AVERAGEIFS`. Note the argument order **flips** for `SUMIFS`/`AVERAGEIFS` — the value range comes *first*.

```
=COUNTIFS(C2:C100, "North", D2:D100, ">100")
   → rows where region = North AND amount > 100

=SUMIFS(D2:D100, C2:C100, "North", E2:E100, "Apples")
   → sum of D where region = North AND product = Apples
   (sum_range first, then range/criteria pairs)
```

`SUMIFS` and `COUNTIFS` are arguably the most important analytics functions in Excel — they answer "how much / how many, broken down by category" without a PivotTable.

> **Criteria syntax:** comparisons and wildcards go *inside quotes*: `">100"`, `"<>North"` (not equal to North), `"Apple*"` (starts with Apple), `"*berry"` (ends with berry), `"?at"` (any one char then "at"). To compare against a cell value, concatenate: `">"&G1`.

---

## Useful Statistical Functions

Beyond the basics, these summarize the *shape* of your data.

| Function | Returns |
|----------|---------|
| `MEDIAN(range)` | The middle value — robust to outliers, unlike AVERAGE |
| `MODE.SNGL(range)` | The most frequent value |
| `STDEV.S(range)` | Standard deviation (of a **sample**) — how spread out the data is |
| `STDEV.P(range)` | Standard deviation of a whole **population** |
| `VAR.S(range)` | Variance (sample) |
| `LARGE(range, k)` | The k-th largest value (`LARGE(R,1)` = max, `LARGE(R,2)` = 2nd largest) |
| `SMALL(range, k)` | The k-th smallest value |
| `RANK.EQ(value, range)` | The rank of a value within the range |
| `PERCENTILE.INC(range, 0.9)` | The value below which 90% of data falls |
| `QUARTILE.INC(range, 1)` | The first quartile (25th percentile) |

**Mean vs. median — a key analytics distinction:** AVERAGE is pulled by extreme values (one billionaire raises the "average" net worth of a room); MEDIAN reports the true middle and resists outliers. Report both, and if they differ a lot, your data is skewed — worth investigating.

```
=AVERAGE(salaries)   → 78,000   (dragged up by a few high earners)
=MEDIAN(salaries)    → 52,000   (the typical person)
```

### Top-N analysis with LARGE

To build a "Top 3 products" list:

```
=LARGE(Sales[Revenue], 1)   → biggest
=LARGE(Sales[Revenue], 2)   → second
=LARGE(Sales[Revenue], 3)   → third
```

Pair with lookups (Note 08) to fetch the product name for each.

---

## Rounding Functions

Calculations produce long decimals; reports need clean numbers. Rounding changes the *value* (unlike number formatting, which only changes the *display*).

| Function | Behavior | `=FN(2.567, 1)` |
|----------|----------|------------------|
| `ROUND(num, digits)` | Round to N decimals (normal rounding) | `2.6` |
| `ROUNDUP(num, digits)` | Always round away from zero | `2.6` |
| `ROUNDDOWN(num, digits)` | Always round toward zero (truncate) | `2.5` |
| `INT(num)` | Drop the decimal (round down to integer) | `2` |
| `MROUND(num, multiple)` | Round to nearest multiple | `MROUND(23,5)`→`25` |

`digits` can be negative to round to tens/hundreds: `=ROUND(1234, -2)` → `1200`.

> **Rounding vs. formatting:** `=ROUND(A1,2)` actually stores 2-decimal value; setting a cell's number format to "2 decimal places" only *hides* the extra digits while the full precision is still used in further math. For money that must add up exactly, round the value; for display only, format the cell.

---

## Nesting and Combining

Functions can take other functions as arguments. This is where Excel gets powerful:

```
=ROUND(AVERAGE(B2:B100), 2)                 → average, cleaned to 2 decimals
=SUM(D2:D100)/COUNT(D2:D100)                → manual average
=MAX(D2:D100)-MIN(D2:D100)                  → the range (spread) of values
=SUMIFS(...)/COUNTIFS(...)                  → conditional average, built from parts
```

Read nested functions from the **inside out**: Excel computes the innermost function first, then feeds its result outward.

---

## Key Things to Remember

> **`SUMIFS` and `COUNTIFS` are the analytics backbone.** "How much / how many, by category and condition" is the most common question in data work, and these answer it directly. Remember `SUMIFS` puts the value range *first*.

> **Know your COUNT.** `COUNT` = numbers only, `COUNTA` = anything non-empty, `COUNTBLANK` = the gaps. Comparing them reveals missing data.

> **Median resists outliers; average doesn't.** When the two diverge, your distribution is skewed — report both.

> **Round the value, format the display.** `ROUND()` changes the stored number; cell formatting only changes how it looks. Choose based on whether the result feeds further math.

---

**Navigation:** [Notes Index](README.md) | ← Previous [03 — Formulas & Cell References](03-formulas-and-cell-references.md) | Next → [05 — Logical Functions](05-logical-functions.md)
**Exercise:** [Exercise 04](../02-exercises/04-essential-functions-exe.md)
