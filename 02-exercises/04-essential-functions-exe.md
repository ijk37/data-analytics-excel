# Exercise 04 — Essential Functions (Count, Sum & Statistical)

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 03](03-formulas-and-cell-references-exe.md) | Next → [Exercise 05](05-logical-functions-exe.md)
**Note:** [04 — Essential Functions](../01-notes/04-essential-functions.md)

---

## Before You Start

Read [Note 04](../01-notes/04-essential-functions.md). Set up this dataset on a sheet named `Orders`, starting at `A1`. You'll use it throughout.

| Date | Region | Product | Units | Amount |
|------|--------|---------|-------|--------|
| 2026-01-03 | North | Apples | 50 | 150 |
| 2026-01-03 | South | Bananas | 30 | 75 |
| 2026-01-04 | North | Cherries | 20 | 220 |
| 2026-01-04 | East | Apples | 45 | 135 |
| 2026-01-05 | South | Cherries | 15 | 165 |
| 2026-01-05 | North | Bananas | 60 | 150 |
| 2026-01-06 | East | Apples | 25 | 75 |
| 2026-01-06 | South | Apples | 40 | 120 |

Convert it to a Table (`Ctrl + T`) named `Orders` if you like — then you can use `Orders[Amount]` in formulas.

---

## Exercise 4.1 — The Big Five

Write a formula for each. Use `Amount` (column E) unless noted.

| # | Question | Formula | Answer |
|---|----------|---------|--------|
| 1 | Total amount | | |
| 2 | Average amount | | |
| 3 | How many orders (count of numbers) | | |
| 4 | Largest single amount | | |
| 5 | Smallest single amount | | |
| 6 | Total units sold | | |

**Try AutoSum:** click the cell below the Amount column and press **`Alt + =`**. Does Excel guess the right range?

---

## Exercise 4.2 — Counting Variations

1. `=COUNT(E2:E9)` — what do you get?
2. `=COUNTA(B2:B9)` — what do you get?
3. Now **delete the Amount in E5** (leave it blank). Recompute `=COUNT(E2:E9)` and `=COUNTBLANK(E2:E9)`. What changed?
4. Put the value back.

**Question:** If `COUNTA` of a column is 8 but `COUNT` is 6, what does that tell you about the data?

---

## Exercise 4.3 — Conditional Counting and Summing

Write these and record the answers:

| # | Question | Formula | Answer |
|---|----------|---------|--------|
| 1 | How many orders are from **North**? | `=COUNTIF(B2:B9,"North")` | |
| 2 | How many orders over **$140**? | `=COUNTIF(E2:E9,">140")` | |
| 3 | Total **amount** for North | `=SUMIF(B2:B9,"North",E2:E9)` | |
| 4 | Total amount for **Apples** | | |
| 5 | Average amount for **South** | `=AVERAGEIF(B2:B9,"South",E2:E9)` | |

**Question:** In `SUMIF`, which range comes first — the one you *test* or the one you *add up*?

---

## Exercise 4.4 — Multiple Conditions (the *IFS family)

| # | Question | Formula |
|---|----------|---------|
| 1 | Count orders that are **North AND over $140** | `=COUNTIFS(B2:B9,"North",E2:E9,">140")` |
| 2 | Total amount where **region = South AND product = Cherries** | `=SUMIFS(E2:E9,B2:B9,"South",C2:C9,"Cherries")` |
| 3 | Average units where **product = Apples AND units >= 40** | |

**Important:** Notice that in `SUMIFS` the **sum range comes first**, but in `COUNTIFS` there is no sum range. Write down the argument order for each so you don't mix them up.

---

## Exercise 4.5 — Criteria with Cell References

Hard-coding `">140"` is inflexible. Make it dynamic:

1. In cell `H1`, type a threshold: `140`.
2. Write a formula that counts orders above whatever is in `H1`:
   ```
   =COUNTIF(E2:E9, ">"&H1)
   ```
3. Change `H1` to `100`. Does the count update?

**Question:** Why do you need the `&` and the quotes around `">"`?

---

## Exercise 4.6 — Statistical Functions

| # | Question | Formula | Answer |
|---|----------|---------|--------|
| 1 | Median amount | `=MEDIAN(E2:E9)` | |
| 2 | Standard deviation (sample) | `=STDEV.S(E2:E9)` | |
| 3 | The 2nd largest amount | `=LARGE(E2:E9,2)` | |
| 4 | The smallest amount | `=SMALL(E2:E9,1)` | |
| 5 | The range (max − min) | | |

**Compare:** Is the **mean** (`AVERAGE`) higher or lower than the **median**? What does the gap suggest about the shape of the data?

---

## Exercise 4.7 — Rounding

1. `=AVERAGE(E2:E9)` probably has decimals. Wrap it: `=ROUND(AVERAGE(E2:E9), 0)`.
2. Compare `=ROUNDUP(133.2, 0)`, `=ROUNDDOWN(133.9, 0)`, and `=INT(133.9)`.
3. `=ROUND(1234, -2)` — what do you get, and why?

**Question:** What's the difference between rounding a value with `ROUND()` and just formatting a cell to show 0 decimal places?

---

## Challenge — Test Yourself

Using the `Orders` data:

1. Write one formula for **total amount of all Apple orders from the North region**.
2. Write one formula for the **number of orders between $100 and $200** (inclusive). (Hint: COUNTIFS with two conditions on the same column.)
3. Which is more useful for a salary dataset with a few huge earners — `AVERAGE` or `MEDIAN`? Why?
4. You see `COUNT` = 7 but `COUNTA` = 8 on the Amount column. What's likely going on?
5. Write a formula for the **average amount per order** built from `SUM` and `COUNT` (not `AVERAGE`).

> **Answers:**
> 1. `=SUMIFS(E2:E9, B2:B9, "North", C2:C9, "Apples")`
> 2. `=COUNTIFS(E2:E9, ">=100", E2:E9, "<=200")`
> 3. MEDIAN — it isn't dragged upward by the few extreme high salaries, so it better reflects the typical worker.
> 4. One Amount cell holds text (or is blank but counted by COUNTA) — a data-type/missing-value issue to clean.
> 5. `=SUM(E2:E9)/COUNT(E2:E9)`

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 03](03-formulas-and-cell-references-exe.md) | Next → [Exercise 05](05-logical-functions-exe.md)
**Note:** [04 — Essential Functions](../01-notes/04-essential-functions.md)
