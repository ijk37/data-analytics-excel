# Exercise 08 — Lookup & Reference Functions

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 07](07-date-and-time-functions-exe.md) | Next → [Exercise 09](09-data-cleaning-and-validation-exe.md)
**Note:** [08 — Lookup & Reference Functions](../01-notes/08-lookup-and-reference-functions.md)

---

## Before You Start

Read [Note 08](../01-notes/08-lookup-and-reference-functions.md). Lookups are how you join two tables — one of the most valuable analytics skills. Set up **two** tables.

**Products** (sheet `Products`, A1):

| ProdID | Name | Price |
|--------|------|-------|
| P-APX | Apples | 0.30 |
| P-BNX | Bananas | 0.25 |
| P-CHX | Cherries | 1.10 |
| P-DTX | Dates | 2.40 |

**Orders** (sheet `Orders2`, A1):

| OrderID | ProdID | Qty |
|---------|--------|-----|
| 1001 | P-BNX | 30 |
| 1002 | P-APX | 50 |
| 1003 | P-CHX | 20 |
| 1004 | P-ZZZ | 10 |

Convert each to a Table (`Ctrl + T`) named `Products` and `Orders`.

---

## Exercise 8.1 — XLOOKUP (if you have Excel 365/2021)

In the Orders table, add a `ProductName` column:

1. In the first data cell, write:
   ```
   =XLOOKUP([@ProdID], Products[ProdID], Products[Name], "Unknown")
   ```
2. Add a `Price` column with another XLOOKUP returning `Products[Price]`.
3. Add a `LineTotal` column: `=[@Qty]*[@Price]`.

**Questions:**
- What does order 1004 (`P-ZZZ`) return for ProductName, and why?
- What does the 4th argument `"Unknown"` do?

---

## Exercise 8.2 — VLOOKUP (the classic)

Do the same join with `VLOOKUP` to learn the older function:

1. `=VLOOKUP(B2, Products, 2, FALSE)` to get the Name (column 2 of Products).
2. `=VLOOKUP(B2, Products, 3, FALSE)` to get the Price (column 3).

**Now break it on purpose:**
3. Insert a new column **between** Name and Price in the Products table. Did your `VLOOKUP(...,3,...)` still return the right Price? Why or why not?
4. Remove the `FALSE` from one formula (`=VLOOKUP(B2,Products,2)`). On this unsorted data, does it still give correct results?

**Questions:**
- What are VLOOKUP's three main limitations from the note?
- Why must you (almost) always pass `FALSE` as the last argument?

---

## Exercise 8.3 — INDEX + MATCH

Build the same lookup the flexible way:

1. `=MATCH(B2, Products[ProdID], 0)` — what position does the ProdID match to?
2. `=INDEX(Products[Name], MATCH(B2, Products[ProdID], 0))` — does it return the right name?
3. Now do something VLOOKUP **can't**: put `Name` to the *left* of `ProdID` in a copy of the table, and use INDEX+MATCH to look up the price from the name. Confirm it works in either direction.

**Question:** Why does INDEX+MATCH survive inserting/moving columns when VLOOKUP doesn't?

---

## Exercise 8.4 — Handle the Missing Match

Order 1004's `P-ZZZ` has no match.

1. With VLOOKUP: `=IFERROR(VLOOKUP(B2,Products,2,FALSE), "Not found")`.
2. With XLOOKUP: the 4th argument already handles it — `=XLOOKUP(B2,Products[ProdID],Products[Name],"Not found")`.

**Question:** Which approach is cleaner, and why does XLOOKUP not need an extra `IFERROR`?

---

## Exercise 8.5 — Approximate Match (Tiers from a Number)

Build a grade lookup. Create this table sorted **ascending** (sheet `Grades`):

| MinScore | Grade |
|----------|-------|
| 0 | F |
| 60 | D |
| 70 | C |
| 80 | B |
| 90 | A |

1. Put a score like `85` in a cell.
2. Approximate VLOOKUP: `=VLOOKUP(85, Grades, 2, TRUE)` → what grade?
3. XLOOKUP equivalent: `=XLOOKUP(85, Grades[MinScore], Grades[Grade], , -1)`.
4. Try scores `59`, `70`, `100`. Do the bands work?

**Questions:**
- Why must the lookup table be sorted ascending for approximate match?
- How is this cleaner than a 5-level nested `IF`?

---

## Exercise 8.6 — UNIQUE and FILTER (Excel 365)

1. `=UNIQUE(Orders[ProdID])` — what spills out?
2. `=FILTER(Orders, Orders[Qty]>=20)` — what rows appear? Change a Qty and watch it update.

**Question:** How could `UNIQUE` help you build a drop-down list of valid categories (Note 09)?

---

## Challenge — Test Yourself

1. In one sentence, what is a lookup the equivalent of in database terms?
2. Write an `XLOOKUP` that finds the price for the ProdID in `B2` from the `Products` table, returning `0` if not found.
3. Write the `INDEX`+`MATCH` equivalent of `=VLOOKUP(B2, Products, 2, FALSE)`.
4. Your VLOOKUP returns the wrong value after a colleague inserted a column in the source table. What happened, and what function would have prevented it?
5. You need to assign shipping cost bands by weight. Exact or approximate match? What must be true of the lookup table?

> **Answers:**
> 1. A join — combining two tables by matching a key.
> 2. `=XLOOKUP(B2, Products[ProdID], Products[Price], 0)`
> 3. `=INDEX(Products[Name], MATCH(B2, Products[ProdID], 0))`
> 4. The hard-coded `col_index_num` now points at the wrong column. `XLOOKUP` or `INDEX`+`MATCH` (which reference columns directly) would have survived.
> 5. Approximate match; the lookup table must be sorted ascending by the lower bound of each band.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 07](07-date-and-time-functions-exe.md) | Next → [Exercise 09](09-data-cleaning-and-validation-exe.md)
**Note:** [08 — Lookup & Reference Functions](../01-notes/08-lookup-and-reference-functions.md)
