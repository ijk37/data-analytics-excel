# 05 — Logical Functions

**Navigation:** [Notes Index](README.md) | ← Previous [04 — Essential Functions](04-essential-functions.md) | Next → [06 — Text Functions](06-text-functions.md)
**Exercise:** [Exercise 05](../02-exercises/05-logical-functions-exe.md)

---

## Why Logical Functions Matter

Analytics is full of "if this, then that" decisions: flag a sale as **Large** if it's over $500, mark a student **Pass** or **Fail**, bucket customers into tiers, or hide ugly error codes. Logical functions let a formula make these decisions automatically across thousands of rows.

At the heart of it all is the **Boolean** — a value that is either `TRUE` or `FALSE`. Every comparison produces one:

```
=10>5        → TRUE
=10=5        → FALSE
=A1<>"North" → TRUE if A1 is anything other than "North"
```

---

## The IF Function

`IF` is the most important logical function. It chooses between two outcomes based on a condition.

```
=IF(logical_test, value_if_true, value_if_false)
```

- **logical_test** — something that evaluates to TRUE or FALSE.
- **value_if_true** — what to return if the test is TRUE.
- **value_if_false** — what to return if the test is FALSE.

```
=IF(D2>500, "Large", "Small")
   → "Large" when D2 exceeds 500, otherwise "Small"

=IF(B2>=60, "Pass", "Fail")
   → grade based on a score in B2

=IF(C2="North", D2*0.1, 0)
   → 10% bonus only for the North region, else nothing
```

The outputs can be text (in quotes), numbers, cell references, or even other formulas.

> **Quotes matter.** Text results must be in double quotes: `"Pass"`. Numbers and cell references must **not** be quoted: `D2*0.1`, not `"D2*0.1"`. An empty result is `""` (two quotes with nothing between).

---

## Nested IF: More Than Two Outcomes

When there are several categories, put an `IF` inside another `IF`. Each one handles a slice, and the false branch passes the leftover cases to the next test.

**Letter grades from a score:**

```
=IF(B2>=90, "A",
   IF(B2>=80, "B",
      IF(B2>=70, "C",
         IF(B2>=60, "D", "F"))))
```

Read it as a waterfall: "Is it ≥90? If yes, A. Otherwise is it ≥80? If yes, B. Otherwise…". **Order matters** — test from highest to lowest, because the first true condition wins.

Nested IFs become hard to read past 3–4 levels. Two cleaner alternatives:

### IFS — a flat list of conditions (Excel 2019 / 365)

```
=IFS(B2>=90,"A", B2>=80,"B", B2>=70,"C", B2>=60,"D", TRUE,"F")
```

Each pair is `condition, result`. The final `TRUE,"F"` is the catch-all "else". Much easier to read than deep nesting.

### A lookup table — the most maintainable option

For many tiers, store the breakpoints in a small table and use `VLOOKUP` or `XLOOKUP` in approximate-match mode (Note 08). Changing a threshold then means editing a cell, not rewriting a formula.

---

## Combining Conditions: AND, OR, NOT

These combine multiple tests into one TRUE/FALSE result, usually inside an `IF`.

| Function | Returns TRUE when | Example |
|----------|-------------------|---------|
| `AND(t1, t2, …)` | **All** conditions are true | `=AND(B2>0, B2<100)` |
| `OR(t1, t2, …)` | **At least one** is true | `=OR(C2="North", C2="South")` |
| `NOT(t)` | The condition is false | `=NOT(C2="North")` |

Used inside IF:

```
=IF(AND(D2>500, C2="North"), "Priority", "Normal")
   → Priority only if BOTH big sale AND North region

=IF(OR(B2>=90, A2="VIP"), "Reward", "")
   → Reward if high score OR a VIP customer
```

> **Comparison shortcut:** an inline `*` acts like AND and `+` like OR when multiplying TRUE/FALSE (which behave as 1/0). Advanced, but you'll see `(C2="North")*(D2>500)` used inside array formulas to mean "both true".

---

## Handling Errors: IFERROR and IFNA

Formulas fail — a lookup finds nothing (`#N/A`), a divide hits zero (`#DIV/0!`). Raw error codes look broken in a report. **`IFERROR`** catches any error and substitutes something tidy.

```
=IFERROR(formula, value_if_error)
```

```
=IFERROR(D2/C2, 0)                 → 0 instead of #DIV/0! when C2 is empty
=IFERROR(VLOOKUP(...), "Not found") → friendly message instead of #N/A
=IFERROR(A2/B2, "")                → blank instead of an error
```

**`IFNA`** is a narrower version that catches **only** `#N/A` (typical of lookups) and lets other errors through — useful when you *want* to be alerted to a real `#DIV/0!` but expect some lookups to miss.

```
=IFNA(VLOOKUP(...), "No match")
```

> **Don't over-suppress.** `IFERROR(..., 0)` can hide genuine bugs by turning every mistake into a zero. Wrap the *specific* formula you expect to occasionally fail, not an entire complex expression, and prefer `IFNA` when you only mean to catch lookup misses.

---

## Logical Functions for Flags and Tags

A powerful analytics pattern: add a **helper column** of flags that you can later filter, count, or pivot on.

| | A (Customer) | B (Spend) | C (Tier) |
|--|-------------|-----------|----------|
|2| Acme | 12,000 | `=IF(B2>=10000,"Gold",IF(B2>=5000,"Silver","Bronze"))` |

Now `COUNTIF(C:C,"Gold")` tells you how many Gold customers there are, and a PivotTable can break revenue down by tier. **Turning a continuous number into a category** with `IF` is one of the most common preparation steps before summarizing.

Other handy flag-makers:

```
=IF(COUNTBLANK(A2:E2)>0, "Incomplete", "OK")   → data-quality flag
=IF(ISBLANK(C2), "Missing", C2)                → fill in a label for empties
=IF(D2>AVERAGE($D$2:$D$100), "Above avg", "Below avg")
```

---

## The IS Functions

These test the *kind* of value in a cell and return TRUE/FALSE. They pair naturally with `IF`.

| Function | TRUE when the cell… |
|----------|---------------------|
| `ISBLANK(A1)` | is empty |
| `ISNUMBER(A1)` | holds a number |
| `ISTEXT(A1)` | holds text |
| `ISERROR(A1)` | holds any error |
| `ISNA(A1)` | holds `#N/A` specifically |

A classic use — check whether a value exists in another list (a poor man's lookup):

```
=IF(ISNUMBER(MATCH(A2, OtherList, 0)), "Found", "Not found")
```

`ISNUMBER` is also a clean way to test whether something is *really* a number versus text-that-looks-like-a-number (the alignment bug from Note 01).

---

## Key Things to Remember

> **`IF` makes decisions; `AND`/`OR` combine the conditions.** Master the pattern `IF(AND(...), this, that)` and you can express almost any business rule.

> **Prefer `IFS` or a lookup table over deep nesting.** Beyond three levels, nested IFs become unreadable and error-prone. Flat `IFS` or a thresholds table is easier to maintain.

> **`IFERROR` cleans reports — but wrap tightly.** Catch the specific formula that may fail; use `IFNA` when you only mean lookup misses. Don't let a blanket `IFERROR(...,0)` hide real problems.

> **Use `IF` to turn numbers into categories.** Tier/bucket helper columns make data countable and pivotable — a key step before summarizing.

---

**Navigation:** [Notes Index](README.md) | ← Previous [04 — Essential Functions](04-essential-functions.md) | Next → [06 — Text Functions](06-text-functions.md)
**Exercise:** [Exercise 05](../02-exercises/05-logical-functions-exe.md)
