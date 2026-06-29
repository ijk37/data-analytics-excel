# Exercise 06 — Text Functions

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 05](05-logical-functions-exe.md) | Next → [Exercise 07](07-date-and-time-functions-exe.md)
**Note:** [06 — Text Functions](../01-notes/06-text-functions.md)

---

## Before You Start

Read [Note 06](../01-notes/06-text-functions.md). Set up this deliberately messy data on a sheet named `TextLab`, starting at `A1` (type the spaces exactly — they matter):

| | A |
|--|------------------------|
|1| FullName |
|2| `  john SMITH  ` |
|3| `mary jones` |
|4| `ALI  KHAN` |
|5| `Sara O'Neil` |

And in column C, these product codes:

| | C |
|--|------------------|
|1| Code |
|2| `NORTH-2026-APX` |
|3| `SOUTH-2026-BNX` |
|4| `EAST-2025-CHX` |

---

## Exercise 6.1 — Measure and Clean

1. In `B2` write `=LEN(A2)`. Copy down. Which name is longest? Do the counts look bigger than expected (because of spaces)?
2. In `D2` (next to FullName) clean it: `=TRIM(A2)`. Copy down. Compare `LEN` before and after — how many characters did TRIM remove from row 2?
3. Standardize case and clean in one shot: `=PROPER(TRIM(A2))`. What does row 2 become?

**Question:** Why is `=TRIM(CLEAN(A2))` the recommended combo for imported text?

---

## Exercise 6.2 — Extract Substrings

Using the product codes in column C:

| # | Goal | Formula | Result |
|---|------|---------|--------|
| 1 | First 5 characters | `=LEFT(C2,5)` | |
| 2 | Last 3 characters | `=RIGHT(C2,3)` | |
| 3 | The year (chars 7–10) | `=MID(C2,7,4)` | |

**Question:** `LEFT(C2,5)` works for `NORTH` but fails for `SOUTH-...` vs `EAST-...` because regions have different lengths. How will you fix that? (Next exercise.)

---

## Exercise 6.3 — Find the Delimiter, Extract Around It

The region part has a variable length (`NORTH`=5, `EAST`=4). Use `FIND` to locate the first dash, then extract:

1. `=FIND("-", C2)` — what position is the first dash for row 2? For row 4 (`EAST-...`)?
2. Extract the region of any length:
   ```
   =LEFT(C2, FIND("-",C2)-1)
   ```
   Copy down. Does it correctly give `NORTH`, `SOUTH`, `EAST`?
3. **If you have Excel 365**, do the same with `=TEXTBEFORE(C2,"-")` and confirm it matches.

**Question:** Why subtract `1` in `FIND("-",C2)-1`?

---

## Exercise 6.4 — Joining Text

Using the cleaned names (assume `PROPER(TRIM())` results are in column E as `John Smith`, etc.):

1. Build an email: `=LOWER(SUBSTITUTE(E2," ","."))&"@company.com"`. What does row 2 produce?
2. Join several fields with `&`: in your `Orders` data, `=B2&" - "&C2` → `North - Apples`.
3. Use `TEXTJOIN` to combine a row: `=TEXTJOIN(" | ", TRUE, A2:E2)`.

**Question:** What advantage does `TEXTJOIN` have over chaining lots of `&`?

---

## Exercise 6.5 — TEXT and VALUE

1. Format a number into a label: `=TEXT(0.25,"0%")` → ? and `=TEXT(1234.5,"$#,##0.00")` → ?
2. Build a sentence: `="Total: "&TEXT(1200,"$#,##0")`. Result?
3. **Number-as-text problem:** in a cell, type `'1234` (the leading apostrophe forces text). It aligns left. Now convert it: `=VALUE(that cell)`. Does it become a real (right-aligned) number?

**Question:** When building a label that mixes words and a number/date, why do you usually need `TEXT()`?

---

## Exercise 6.6 — Flash Fill vs Formulas

1. In `A2:A4` you have full names. In a fresh column, type just the first name of row 2, then press **`Ctrl + E`**. Did Excel extract all first names?
2. Click one of the filled cells — is it a formula or static text?
3. Now change a source name in column A. Does the Flash Fill column update?

**Question:** For a dataset that gets refreshed weekly, should you use Flash Fill or formulas to split names? Why?

---

## Challenge — Test Yourself

Given a cell `A2` containing `"  NORTH-2026-APX-050  "`:

1. Write a formula to clean the surrounding spaces.
2. Write a formula to extract the region (everything before the first dash), regardless of region length.
3. Write a formula to extract the last segment `050` (everything after the last dash). (365: `TEXTAFTER`; otherwise think about it.)
4. Write a formula to turn `john smith` into `John Smith`.
5. Why does standardizing case (`North` vs `NORTH`) matter before you build a PivotTable?

> **Answers:**
> 1. `=TRIM(A2)`
> 2. `=LEFT(TRIM(A2), FIND("-",TRIM(A2))-1)` (or `=TEXTBEFORE(TRIM(A2),"-")`)
> 3. `=TEXTAFTER(A2,"-",-1)` in 365; otherwise a longer `RIGHT/FIND` construction.
> 4. `=PROPER("john smith")`
> 5. PivotTables and COUNTIF treat different cases as different categories, so `North` and `NORTH` would split into separate groups and distort the summary.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 05](05-logical-functions-exe.md) | Next → [Exercise 07](07-date-and-time-functions-exe.md)
**Note:** [06 — Text Functions](../01-notes/06-text-functions.md)
