# 06 — Text Functions

**Navigation:** [Notes Index](README.md) | ← Previous [05 — Logical Functions](05-logical-functions.md) | Next → [07 — Date & Time Functions](07-date-and-time-functions.md)
**Exercise:** [Exercise 06](../02-exercises/06-text-functions-exe.md)

---

## Why Text Functions Matter in Analytics

Real-world data is messy. Names arrive as `"  John  SMITH "`, dates as text, codes glued together like `"NORTH-2026-APX"`, and full addresses crammed into one cell. Before you can analyze, you often have to **parse, clean, and reshape text**. Text functions do exactly this — they extract pieces, join values, standardize case, and strip junk.

A note on vocabulary: a piece of text is called a **string**. The position of a character is counted from `1` (the first character).

---

## Measuring and Extracting

### LEN — length of a string

```
=LEN("Excel")      → 5
=LEN(A2)           → number of characters in A2 (spaces count!)
```

`LEN` is great for data validation: flag phone numbers that aren't 10 digits, or spot stray trailing spaces (`=LEN(A2)` bigger than expected).

### LEFT, RIGHT, MID — pull out substrings

```
=LEFT(text, n)          → first n characters
=RIGHT(text, n)         → last n characters
=MID(text, start, n)    → n characters beginning at position start
```

```
=LEFT("NORTH-2026", 5)     → "NORTH"
=RIGHT("NORTH-2026", 4)    → "2026"
=MID("NORTH-2026", 7, 4)   → "2026"  (start at char 7, take 4)
```

### FIND and SEARCH — locate a character or word

These return the **position** where a substring begins — essential for extracting parts whose length varies.

```
=FIND(find_text, within_text, [start])
```

- `FIND` is **case-sensitive**; `SEARCH` is **not** (and allows wildcards).

```
=FIND("-", "NORTH-2026")    → 6   (the dash is the 6th character)
=SEARCH("o", "Hello")       → 5   (case-insensitive)
```

**Combine them to split on a delimiter.** To grab everything before the first dash, no matter how long:

```
=LEFT(A2, FIND("-", A2) - 1)
```

`FIND` locates the dash; `LEFT` takes everything up to (but not including) it. This "find the marker, then extract around it" pattern is the core of text parsing.

---

## Cleaning Text

### TRIM — remove extra spaces

`TRIM` strips leading and trailing spaces and collapses multiple internal spaces to one. The single most useful cleaning function, because invisible spaces silently break matching, grouping, and lookups.

```
=TRIM("  John   Smith  ")    → "John Smith"
```

### CLEAN — remove non-printable characters

Strips control characters (line breaks, tabs) that sneak in from copy-pasting or imported files.

```
=CLEAN(A2)
=TRIM(CLEAN(A2))    → the standard one-two punch for imported text
```

### UPPER, LOWER, PROPER — standardize case

```
=UPPER("north")     → "NORTH"
=LOWER("NORTH")     → "north"
=PROPER("john smith") → "John Smith"   (capitalizes each word)
```

Standardizing case matters because `North`, `NORTH`, and `north` are treated as **different** categories by PivotTables and `COUNTIF` unless you unify them first.

### SUBSTITUTE — find and replace within a formula

```
=SUBSTITUTE(text, old_text, new_text, [instance])
```

```
=SUBSTITUTE("North-Region", "-", " ")   → "North Region"
=SUBSTITUTE(A2, ",", "")                → strip all commas (e.g. from "1,234")
=SUBSTITUTE("a-b-c", "-", " ", 2)       → "a-b c"  (only the 2nd dash)
```

`SUBSTITUTE` replaces by **matching text**. Its cousin `REPLACE(text, start, n, new)` replaces by **position** instead.

---

## Joining Text: Concatenation

### The `&` operator

The simplest way to glue strings together:

```
="Q" & A2                 → "Q1" if A2 is 1
=B2 & " " & C2            → "John Smith" from first + space + last
=C2 & " (" & D2 & ")"     → "North (50)"
```

### CONCAT and TEXTJOIN

For many pieces, functions are cleaner than chains of `&`.

```
=CONCAT(A2, "-", B2, "-", C2)           → joins all arguments
=TEXTJOIN(delimiter, ignore_empty, ...) → joins with a separator
```

`TEXTJOIN` is the star — it inserts a delimiter between items and can skip blanks:

```
=TEXTJOIN(", ", TRUE, A2:E2)
   → "North, Apples, 50, 0.30" — comma-separated, empties ignored
```

This is perfect for building a combined key, a tag list, or a CSV-style line from several columns.

---

## Converting Between Text and Numbers

### TEXT — format a number as a string

`TEXT(value, format_code)` turns a number or date into text formatted exactly how you want — useful when building labels that mix words and numbers.

```
=TEXT(0.25, "0%")            → "25%"
=TEXT(1234.5, "$#,##0.00")   → "$1,234.50"
=TEXT(TODAY(), "yyyy-mm-dd") → "2026-06-29"
="Total: " & TEXT(D10, "$#,##0")  → "Total: $1,200"
```

Without `TEXT`, joining a raw number into text gives ugly results (`"Total: 1200.0000001"`). `TEXT` gives you control over decimals, currency, percent, and dates inside a string.

### VALUE and friends — text back to numbers

When numbers arrive as text (left-aligned, won't sum), convert them:

```
=VALUE("1234")        → 1234 (a real number)
=VALUE(A2)            → numeric version of text in A2
=A2 * 1   or  =A2 + 0 → quick coercion tricks
=NUMBERVALUE(A2)      → handles locale-specific separators
```

To convert text-dates to real dates, use `DATEVALUE` (Note 07).

---

## Modern Split Functions (Excel 365)

If you have current Microsoft 365, dedicated functions make parsing far easier:

```
=TEXTBEFORE(A2, "-")        → everything before the first "-"
=TEXTAFTER(A2, "-")         → everything after the first "-"
=TEXTSPLIT(A2, "-")         → spills the parts into separate cells
```

These replace the old `LEFT`/`MID`/`FIND` gymnastics. If you have them, prefer them; if not, the classic combinations above still work everywhere.

---

## Flash Fill: Parsing Without Formulas

Often the fastest way to reshape text needs no functions at all. **Flash Fill** (`Ctrl + E`) watches you type an example and replicates the pattern:

1. With full names in column A, type the first name of row 2 into column B.
2. Press **`Ctrl + E`**.
3. Excel fills the rest of column B with all first names.

It works for splitting, combining, reformatting phone numbers, extracting domains from emails, and more. The catch: Flash Fill produces **static values**, not formulas — it won't update if the source changes. For one-time cleanups it's brilliant; for live dashboards, use formulas.

---

## A Realistic Parsing Example

Suppose column A holds product codes like `NORTH-2026-APX-050`. You want region, year, SKU, and quantity in separate columns.

```
Region (before 1st dash):  =TEXTBEFORE(A2, "-")
                  classic:  =LEFT(A2, FIND("-",A2)-1)

Quantity (after last dash): =TEXTAFTER(A2, "-", -1)
                            (the -1 means "last occurrence")

Full cleanup of a name:     =PROPER(TRIM(CLEAN(A2)))
```

Build each piece in its own helper column, verify a few rows by eye, then (if you like) Paste Special → Values to lock the results.

---

## Key Things to Remember

> **`TRIM` and `CLEAN` first.** Invisible spaces and control characters silently break matching, grouping, and lookups. Run `=TRIM(CLEAN(A2))` on imported text before anything else.

> **Standardize case before grouping.** `North` ≠ `NORTH` to a PivotTable. `UPPER`/`LOWER`/`PROPER` unify categories so counts and lookups behave.

> **`FIND` the marker, then `LEFT`/`MID`/`RIGHT` around it.** This pattern parses variable-length text. On Excel 365, `TEXTBEFORE`/`TEXTAFTER`/`TEXTSPLIT` do it more directly.

> **`TEXT` to format into labels; `VALUE` to convert back.** Use `TEXT` when building strings that include numbers/dates; use `VALUE` (or `*1`) to rescue numbers trapped as text.

> **Flash Fill (`Ctrl + E`) for quick, one-off parsing** — but remember it's static, not a live formula.

---

**Navigation:** [Notes Index](README.md) | ← Previous [05 — Logical Functions](05-logical-functions.md) | Next → [07 — Date & Time Functions](07-date-and-time-functions.md)
**Exercise:** [Exercise 06](../02-exercises/06-text-functions-exe.md)
