# Project 05 — Data Cleaning Challenge

**Navigation:** [Projects Index](../README.md) | ← Previous [04 — Inventory Manager](../04-inventory-manager/README.md)

---

## Overview

You've been handed a deliberately messy customer export and asked to make it analysis-ready. This is the most realistic analytics task there is — turning chaos into a clean table you'd trust. Do it twice: once **by hand** with functions, then once in **Power Query** so it can be re-run on next month's file with a single Refresh.

**Skills:** TRIM/CLEAN, case standardization, text parsing, fixing data types, Remove Duplicates, Data Validation, Power Query
**Notes used:** [06](../../01-notes/06-text-functions.md), [07](../../01-notes/07-date-and-time-functions.md), [09](../../01-notes/09-data-cleaning-and-validation.md)

---

## The Data

`messy-customers.csv` contains ~25 customer records riddled with real-world problems:

| Column | Description | Problems lurking |
|--------|-------------|------------------|
| CustomerID | ID code | Some leading zeros at risk |
| Name | Full name | Extra spaces, inconsistent case |
| Email | Email address | Mixed case, stray spaces |
| Country | Country | `USA`/`U.S.A`/`united states`, `UK`/`U.K.` variants |
| SignupDate | Join date | Mixed formats, some as text |
| Spend | Total spend | Some stored as text, `$` and commas, blanks |

There are also **duplicate rows**. Your job: produce one clean record per customer.

---

## Your Cleaning Checklist

Work on a **copy** — never the raw import. Tackle these in order:

1. **Preserve IDs** — import CustomerID as **Text** so leading zeros survive.
2. **Trim & clean names** — `=PROPER(TRIM(CLEAN([@Name])))`.
3. **Normalize emails** — `=LOWER(TRIM([@Email]))`.
4. **Standardize Country** — map all variants to a canonical value (`United States`, `United Kingdom`, …). Use a small mapping table + `XLOOKUP`, or Find & Replace for known variants.
5. **Fix SignupDate** — convert text-dates to real dates (`DATEVALUE`, Text to Columns, or a typed column in Power Query). Confirm they right-align.
6. **Fix Spend** — strip `$` and commas (`=VALUE(SUBSTITUTE(SUBSTITUTE([@Spend],"$",""),",","")) `) and decide what blanks mean.
7. **Remove duplicates** — Data → Remove Duplicates, keyed on CustomerID (or Email).
8. **Validate going forward** — add a Country drop-down and a Spend "decimal ≥ 0" rule.

Finish with sanity checks: `COUNTA` vs `COUNT` on Spend, the Country filter drop-down showing only clean values, and a reasonable `=SUM(Spend)`.

---

## Walkthrough A — By Hand (functions)

1. Import `messy-customers.csv`; in the Power Query preview set **CustomerID** and any code column to **Text**, then **Load** (or just open and accept, then fix types).
2. Copy the data to a `Clean` sheet.
3. Add helper columns for each cleaning step above, verifying a few rows by eye.
4. Once happy, select the cleaned columns → copy → **Paste Special → Values** over the originals, then delete the helpers.
5. Remove duplicates and apply validation.

## Walkthrough B — Power Query (repeatable)

1. **Data → Get Data → From Text/CSV → Transform Data** to open the Power Query Editor.
2. Apply each step using the ribbon — every action is recorded in **Applied Steps**:
   - Set **CustomerID** type to Text.
   - **Format → Trim** and **Clean** on Name; **Format → Capitalize Each Word**.
   - **Format → lowercase** on Email.
   - **Replace Values** to standardize Country variants (or merge a mapping query).
   - Set **SignupDate** type to Date.
   - **Replace Values** to strip `$`/`,` from Spend, then set type to Decimal.
   - **Home → Remove Rows → Remove Duplicates**.
3. **Close & Load.** The cleaned table lands in Excel with a live connection.
4. **The payoff:** when you get next month's `messy-customers.csv`, replace the file and click **Refresh** — every cleaning step re-runs automatically.

---

## Learning Goals

After this project you can:
- Diagnose dirty data (spaces, case, text-numbers, text-dates, duplicates, inconsistent categories).
- Clean it reliably with text/date functions and built-in tools.
- Rebuild the same pipeline in Power Query so recurring cleanups become one click.
- Lock quality in with Data Validation.

---

## Self-Check

Your cleaned table should have:
- Consistent `Proper Case` names with no stray spaces.
- All-lowercase emails.
- Exactly the canonical country names (open the filter to confirm).
- Right-aligned real dates and numeric spend that sums correctly.
- No duplicate CustomerIDs.

Compare `COUNTA` before and after Remove Duplicates to confirm how many duplicates you removed.

---

[Projects Index](../README.md) | ← Previous [04 — Inventory Manager](../04-inventory-manager/README.md)
