# 08 — Lookup & Reference Functions

**Navigation:** [Notes Index](README.md) | ← Previous [07 — Date & Time Functions](07-date-and-time-functions.md) | Next → [09 — Data Cleaning & Validation](09-data-cleaning-and-validation.md)
**Exercise:** [Exercise 08](../02-exercises/08-lookup-and-reference-functions-exe.md)

---

## The Problem Lookups Solve

Data is usually split across multiple tables. One table lists **orders** (with a product ID); another lists **products** (with names and prices). To analyze orders, you need to pull the product name and price *into* the orders table by matching the ID.

This "look up a value in one table based on a key from another" operation is called a **lookup**, and it's the spreadsheet equivalent of a database **join**. It is one of the most important analytics skills in Excel.

```
ORDERS                          PRODUCTS
┌──────┬─────────┐              ┌─────────┬──────────┬───────┐
│ Order│ ProdID  │              │ ProdID  │ Name     │ Price │
├──────┼─────────┤   lookup     ├─────────┼──────────┼───────┤
│ 1001 │ P-APX   │  ────────►   │ P-APX   │ Apples   │ 0.30  │
│ 1002 │ P-BNX   │   by ProdID  │ P-BNX   │ Bananas  │ 0.25  │
└──────┴─────────┘              │ P-CHX   │ Cherries │ 1.10  │
                                └─────────┴──────────┴───────┘
```

---

## XLOOKUP — the Modern Standard (Excel 365 / 2021)

If you have a recent Excel, **`XLOOKUP`** is the best tool — simpler and more robust than the older functions. Learn this first.

```
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode])
```

- **lookup_value** — what you're searching for (e.g. the ProdID in the current order row).
- **lookup_array** — the column to search in (the ProdID column of the Products table).
- **return_array** — the column to pull the answer from (the Name column).
- **if_not_found** — (optional) what to return when there's no match, instead of `#N/A`.

```
=XLOOKUP(B2, Products[ProdID], Products[Name], "Unknown")
   → finds B2's ProdID in the products list, returns the matching Name,
     or "Unknown" if not found
```

Why `XLOOKUP` wins:

- The lookup and return columns are **separate** — the answer can be to the **left** of the key (impossible for `VLOOKUP`).
- It defaults to **exact match** (the safe choice), no fourth-argument trap.
- Built-in **if_not_found** — no need to wrap in `IFERROR`.
- Insert or move columns and it keeps working (no fragile column-number counting).

---

## VLOOKUP — the Classic (still everywhere)

`VLOOKUP` is older but still ubiquitous — you must know it because countless existing workbooks use it. **V** = vertical (it searches down the first column of a table).

```
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```

- **lookup_value** — what to find.
- **table_array** — the whole table to search. **The key must be in the leftmost column.**
- **col_index_num** — which column *number* (counting from the left, starting at 1) holds the answer.
- **range_lookup** — `FALSE` for exact match, `TRUE` (or omitted) for approximate. **Almost always use `FALSE`.**

```
=VLOOKUP(B2, Products, 2, FALSE)
   → search B2 in the first column of Products, return the value from column 2, exact match
```

### VLOOKUP's three big limitations

1. **Can only look right.** The key must be the leftmost column; the answer must be to its right. You can't return a value sitting left of the key.
2. **The column index is fragile.** `col_index_num` is a hard-coded number. Insert a column into the table and `2` now points at the wrong column — silent, dangerous breakage.
3. **The `FALSE` trap.** Forget the fourth argument and `VLOOKUP` defaults to *approximate* match, returning wrong values on unsorted data. **Always type `FALSE`.**

> **Robust VLOOKUP tip:** wrap it to handle misses — `=IFERROR(VLOOKUP(B2, Products, 2, FALSE), "Not found")`. And use `MATCH` to compute the column index dynamically (see below) so inserting columns doesn't break it.

---

## INDEX + MATCH — the Flexible Power Couple

Before `XLOOKUP`, the pros used **`INDEX` + `MATCH`** to overcome VLOOKUP's limits. It's still worth knowing — it appears constantly in real workbooks and works in every Excel version.

### MATCH — find the *position* of a value

```
=MATCH(lookup_value, lookup_array, 0)    → 0 means exact match
```

```
=MATCH("P-BNX", Products[ProdID], 0)   → 2   (P-BNX is the 2nd item)
```

### INDEX — return the value at a *position*

```
=INDEX(return_array, row_number)
```

```
=INDEX(Products[Name], 2)   → "Bananas"   (the 2nd name)
```

### Combine them

`MATCH` finds *where*; `INDEX` fetches *what's there*:

```
=INDEX(Products[Name], MATCH(B2, Products[ProdID], 0))
   → find B2's position in the ProdID column, return the Name at that position
```

This looks in **any direction** (the return column can be left or right of the key), survives inserted columns (no fixed index number), and is efficient on large data. If you don't have `XLOOKUP`, this is the gold standard.

---

## Approximate Match: Lookups on Ranges

Exact match isn't always what you want. To assign a **tier** based on which *band* a number falls into — grade from score, shipping cost from weight, commission from sales — use **approximate match**.

Build a lookup table sorted **ascending** by the lower bound of each band:

| Min Score | Grade |
|-----------|-------|
| 0 | F |
| 60 | D |
| 70 | C |
| 80 | B |
| 90 | A |

```
=XLOOKUP(B2, GradeTable[Min Score], GradeTable[Grade], , -1)
   (match_mode -1 = exact or next smaller)

=VLOOKUP(B2, GradeTable, 2, TRUE)
   (TRUE = approximate; table MUST be sorted ascending)
```

A score of `85` finds the largest threshold not exceeding it (`80`) and returns `B`. This is the clean alternative to deep nested `IF`s from Note 05. **The table must be sorted ascending** or approximate match returns nonsense.

---

## Two-Way Lookups

To find a value at the intersection of a **row** and a **column** (e.g. sales for *North* region in *March*), combine two matches.

With `INDEX` + two `MATCH`es:

```
=INDEX(DataRange,
       MATCH("North", RowHeaders, 0),
       MATCH("March", ColHeaders, 0))
```

`INDEX` takes both a row number and a column number; each `MATCH` supplies one. With `XLOOKUP` you can nest one inside another's return array. Two-way lookups are common when reading a matrix-shaped report.

---

## Other Reference Functions

| Function | Purpose |
|----------|---------|
| `HLOOKUP` | Like VLOOKUP but searches the top **row** (horizontal). Rarely needed — restructure to vertical instead. |
| `LOOKUP` | Old, simple lookup; superseded by the above. |
| `CHOOSE(n, v1, v2, …)` | Returns the n-th item from a list — a mini lookup without a table. |
| `INDIRECT("A1")` | Turns a text string into a real cell reference. Powerful for dynamic sheet/range names, but volatile and fragile — use sparingly. |
| `OFFSET(ref, rows, cols)` | Returns a reference shifted from a starting point. Volatile; prefer INDEX where possible. |
| `UNIQUE(range)` | (365) Returns the distinct values — great for building a list of categories. |
| `FILTER(range, condition)` | (365) Returns all rows meeting a condition — a formula-based filter that spills results. |

`UNIQUE` and `FILTER` are **dynamic array** functions: they "spill" their output across multiple cells automatically. `=UNIQUE(Sales[Region])` produces a clean list of every region with no duplicates — perfect for feeding a summary or a drop-down.

---

## Choosing the Right Lookup

```
Need a lookup?
│
├─ Have Excel 365 / 2021?  ───────────────►  Use XLOOKUP (simplest, most robust)
│
├─ Need it to work in older Excel too?  ──►  Use INDEX + MATCH (flexible, version-proof)
│
├─ Maintaining a workbook that already uses it?  ──►  VLOOKUP (always with FALSE)
│
└─ Assigning a band/tier from a number?  ─►  Approximate match (sorted table, XLOOKUP -1 or VLOOKUP TRUE)
```

---

## Key Things to Remember

> **A lookup is a join.** It pulls related data from one table into another by matching a key — the foundation of combining datasets in Excel.

> **Prefer `XLOOKUP`; know `INDEX`+`MATCH`; handle `VLOOKUP`.** XLOOKUP is the modern default. INDEX+MATCH is the version-proof power tool and still everywhere. VLOOKUP you'll inherit — always pass `FALSE`.

> **Exact vs. approximate is a deliberate choice.** Use exact match for IDs and codes; use approximate (sorted table) to assign tiers/bands from a number.

> **Wrap lookups against misses.** `XLOOKUP`'s `if_not_found` argument, or `IFERROR`/`IFNA` around the others, keeps `#N/A` out of your reports.

---

**Navigation:** [Notes Index](README.md) | ← Previous [07 — Date & Time Functions](07-date-and-time-functions.md) | Next → [09 — Data Cleaning & Validation](09-data-cleaning-and-validation.md)
**Exercise:** [Exercise 08](../02-exercises/08-lookup-and-reference-functions-exe.md)
