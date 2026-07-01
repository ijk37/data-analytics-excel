# 09 — Data Cleaning & Validation

**Navigation:** [Notes Index](README.md) | ← Previous [08 — Lookup & Reference Functions](08-lookup-and-reference-functions.md) | Next → [10 — Sorting, Filtering & Conditional Formatting](10-sorting-filtering-conditional-formatting.md)
**Exercise:** [Exercise 09](../02-exercises/09-data-cleaning-and-validation-exe.md)

---

## Why Cleaning is 80% of the Job

Analysts have a saying: data cleaning is **80% of the work**. Raw data is almost never analysis-ready. It has duplicates, inconsistent spellings, stray spaces, numbers stored as text, blanks, and outright errors. Garbage in, garbage out — a beautiful PivotTable built on dirty data produces confident, wrong answers.

This note covers how to find dirty data, fix it, and **prevent** it from coming back with validation rules.

---

## A Cleaning Checklist

Work through these in roughly this order on any new dataset:

1. **Make a copy of the raw data.** Never clean in place — keep an untouched original on its own sheet.
2. **Trim spaces and non-printables** — `TRIM`, `CLEAN`.
3. **Fix data types** — numbers/dates trapped as text.
4. **Standardize categories** — unify `North` / `NORTH` / `north `.
5. **Remove duplicates.**
6. **Handle blanks and missing values.**
7. **Split or combine columns** as needed.
8. **Spot-check and validate** — sanity-check totals, ranges, counts.

---

## Finding Problems First

You can't fix what you can't see. Quick reconnaissance:

- **Filter drop-downs** (`Ctrl + Shift + L`) — open a column's filter and scan the list of distinct values. Misspellings and case variants jump out immediately (`North`, `Norht`, `north `).
- **`COUNTA` vs `COUNT`** (Note 04) — the gap reveals non-numeric or missing entries in a numeric column.
- **Conditional Formatting → Highlight Duplicate Values** (Note 10) — paints repeats so you can see them.
- **`LEN`** — `=LEN(A2)` longer than expected signals trailing spaces; a code that should be 5 chars showing 6 is suspicious.
- **Sort** a column — extremes float to the top/bottom, exposing outliers and typos like a price of `99999`.

---

## Removing Extra Spaces and Junk

The invisible culprits behind "why won't these match?":

```
=TRIM(A2)              → strip leading/trailing spaces, collapse internal doubles
=CLEAN(A2)             → remove non-printable control characters
=TRIM(CLEAN(A2))       → the standard combo for imported text
=SUBSTITUTE(A2, CHAR(160), " ")   → replace non-breaking spaces (common from web copies)
```

That last one matters: text pasted from websites often contains **non-breaking spaces** (`CHAR(160)`) that `TRIM` alone won't remove. Substitute them to a normal space first, then `TRIM`.

Apply in a helper column, verify, then Paste Special → Values back over the original.

---

## Fixing Numbers and Dates Stored as Text

The classic symptom: numbers hug the **left** of the cell and won't `SUM`. Excel may show a small green triangle and a warning "Number Stored as Text".

**Fixes, easiest first:**

1. Select the range → click the **warning icon** → **Convert to Number**.
2. **Text to Columns**: select the column → **Data → Text to Columns → Finish**. This re-parses each cell, converting text-numbers and text-dates to real values in one move.
3. **Paste Special trick**: type `1` in a blank cell, copy it, select your text-numbers, Paste Special → **Multiply**. Multiplying by 1 forces numeric conversion.
4. **Formulas**: `=VALUE(A2)` for numbers, `=DATEVALUE(A2)` for dates (Note 07).

> **Text to Columns is the Swiss-army knife here** — it fixes text-numbers, text-dates, and can split delimited data, all from one dialog.

---

## Standardizing Categories

`North`, `NORTH`, `north`, and `North ` are four different values to Excel — they'll split into four PivotTable rows and break `SUMIF`. Unify them:

- **Case:** `=PROPER(TRIM(A2))` → consistent `North`.
- **Spelling/aliases:** map variants to a canonical form with a small lookup table (`XLOOKUP` from a "messy → clean" mapping) or nested `SUBSTITUTE`.
- **Find & Replace** (`Ctrl + H`) — bulk-fix a known typo across the sheet (`Norht` → `North`). Use "Match entire cell contents" to avoid partial-match accidents.

After standardizing, re-open the filter drop-down and confirm the list of distinct values is now clean.

---

## Removing Duplicates

Duplicate rows inflate counts and totals. Two approaches:

### Remove Duplicates (permanent)

1. Select the data (or a single cell inside a Table).
2. **Data → Remove Duplicates.**
3. Choose which **columns** define a duplicate. *This is the key decision:* ticking only `Email` removes rows that repeat an email; ticking all columns removes only fully identical rows.
4. Excel deletes the repeats and reports how many it removed.

> **Always work on a copy.** Remove Duplicates is destructive — it deletes rows immediately. Keep the raw data safe so you can recover if you picked the wrong key columns.

### Flag duplicates without deleting (non-destructive)

Sometimes you want to *see* and *count* duplicates, not erase them:

```
=COUNTIF($A$2:$A2, A2)        → running count; >1 means this is a repeat
=IF(COUNTIF($A:$A, A2)>1, "Dup", "Unique")
```

Or use **Conditional Formatting → Highlight Cell Rules → Duplicate Values** to color them. The modern `=UNIQUE(range)` function (365) spills a clean deduplicated list while leaving the source intact.

---

## Handling Blanks and Missing Data

Decide *deliberately* what missing means — don't just ignore it:

- **Find the blanks:** select the range → `F5` (Go To) → **Special** → **Blanks** to select every empty cell at once.
- **Fill with a placeholder:** with blanks selected, type a value (e.g. `0` or `N/A`) and press `Ctrl + Enter` to fill all selected cells at once.
- **Fill down from above** (common after un-pivoting): select the column, Go To Special → Blanks, type `=` and the up-arrow, then `Ctrl + Enter` to copy each value down into the blanks beneath it.
- **Exclude vs. zero:** a blank and a `0` mean different things. "No sale recorded" (blank, excluded from averages) is not the same as "a sale of $0". `AVERAGE` ignores blanks but counts zeros — choose intentionally.

---

## Splitting and Combining Columns

- **Text to Columns** — split `"Smith, John"` or `"NORTH-2026"` into separate columns by a delimiter (comma, dash, space) or fixed width.
- **Flash Fill** (`Ctrl + E`) — type one example of the desired output and let Excel infer the pattern (Note 06).
- **Functions** — `LEFT`/`MID`/`RIGHT`/`TEXTSPLIT` for live, refreshable splits; `&`/`TEXTJOIN` to combine.

Choose Flash Fill / Text to Columns for one-time cleanups, functions when the data refreshes and the split must stay live.

---

## Preventing Bad Data: Data Validation

Cleaning fixes the past; **Data Validation** protects the future by restricting what can be entered. Select the cells, then **Data → Data Validation**.

### Drop-down lists (the most useful)

Force a column to allowed values only — no more `North` vs `Norht`:

1. Data Validation → **Allow: List**.
2. **Source:** type `North,South,East,West` (comma-separated) **or** point to a range of valid values.
3. Now those cells show a drop-down arrow and reject anything off-list.

This single feature eliminates most category-spelling problems at the source.

### Other validation rules

| Allow | Restricts entry to |
|-------|--------------------|
| **Whole number** | Integers within a min/max (e.g. age 0–120) |
| **Decimal** | Numbers within a range |
| **Date** | Dates within a range (e.g. not in the future) |
| **Text length** | A length range (e.g. exactly 5 for a ZIP) |
| **Custom** | Any formula that returns TRUE (e.g. `=ISNUMBER(A2)`) |

- **Input Message** tab — show a hint when the cell is selected ("Enter region from the list").
- **Error Alert** tab — customize the message, and choose **Stop** (reject), **Warning**, or **Information**.

> **Validation only checks new entries.** Applying a rule does **not** flag data already in the cells. To audit existing data against a new rule, use **Data Validation → Circle Invalid Data**, which draws red circles around violations.

---

## A Note on Power Query for Cleaning

For cleanups you'll repeat (every week's new export), do them once in **Power Query** (Data → Get & Transform) instead of by hand. Each step — trim, change type, remove duplicates, split column, replace values — is **recorded** and re-applied automatically when you click **Refresh** on next month's file. This is the professional approach to recurring cleaning, covered hands-on in [Mini-Project 05](../04-mini-projects/05-data-cleaning-challenge/README.md).

---

## Key Things to Remember

> **Always clean on a copy.** Keep the raw data untouched on its own sheet. Cleaning steps — especially Remove Duplicates — destroy information you may need back.

> **`TRIM(CLEAN())` and fix data types early.** Invisible spaces and text-trapped numbers/dates silently break matching, math, and lookups. Resolve them before any analysis.

> **Standardize categories before summarizing.** Unify case and spelling so `North` is one group, not four. Use the filter drop-down to verify the distinct list is clean.

> **Validate to prevent re-dirtying.** A drop-down list (Data Validation → List) stops bad categories at the source. Remember it only guards *new* entries — use Circle Invalid Data to audit old ones.

> **For recurring cleanups, record steps in Power Query.** Clean once, refresh forever.

---

**Navigation:** [Notes Index](README.md) | ← Previous [08 — Lookup & Reference Functions](08-lookup-and-reference-functions.md) | Next → [10 — Sorting, Filtering & Conditional Formatting](10-sorting-filtering-conditional-formatting.md)
**Exercise:** [Exercise 09](../02-exercises/09-data-cleaning-and-validation-exe.md)
