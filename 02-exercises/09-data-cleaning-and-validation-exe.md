# Exercise 09 — Data Cleaning & Validation

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 08](08-lookup-and-reference-functions-exe.md) | Next → [Exercise 10](10-sorting-filtering-conditional-formatting-exe.md)
**Note:** [09 — Data Cleaning & Validation](../01-notes/09-data-cleaning-and-validation.md)

---

## Before You Start

Read [Note 09](../01-notes/09-data-cleaning-and-validation.md). This exercise gives you deliberately dirty data to clean — the most realistic analytics skill there is. There's a ready-made messy dataset in [Mini-Project 05](../03-mini-projects/05-data-cleaning-challenge/messy-customers.csv); you can use that or type the small sample below.

Create a sheet `Dirty` with this data (type it exactly, including the inconsistencies):

| | A | B | C |
|--|---------------|-----------|--------|
|1| Customer | Region | Spend |
|2| `  Acme  ` | North | 1200 |
|3| `Acme` | north | 1200 |
|4| `Globex` | NORTH | `850` (as text) |
|5| `Initech` | South | 430 |
|6| `initech` | south | 430 |
|7| `Umbrella` | (blank) | 990 |

**First: copy this sheet** to a sheet called `Clean` and do all work there, leaving `Dirty` untouched.

---

## Exercise 9.1 — Reconnaissance

Before fixing anything, find the problems:

1. Turn on filters (`Ctrl + Shift + L`) and open the **Region** drop-down. How many *distinct* values does it show? How many should there be?
2. In a helper column, `=LEN(A2)` down the Customer column. Which rows have unexpected lengths (trailing spaces)?
3. Compare `=COUNTA(C2:C7)` with `=COUNT(C2:C7)`. What does a difference tell you?

**Write down every problem you find** (duplicates, case mismatches, spaces, text-number, blank).

---

## Exercise 9.2 — Trim and Standardize

1. In a helper column, clean the customer name: `=PROPER(TRIM(A2))`. Copy down. Confirm `  Acme  ` and `Acme` now match.
2. Standardize Region: `=PROPER(TRIM(B2))`. Now `north`, `NORTH`, `North` all become `North`.
3. Paste Special → **Values** the cleaned columns back over the originals, then delete the helper columns.

**Question:** Why must you standardize case *before* counting or pivoting by Region?

---

## Exercise 9.3 — Fix the Text-Number

Cell `C4` (`850`) is stored as text (left-aligned, maybe with a green triangle).

1. Confirm: `=ISNUMBER(C4)` → does it return FALSE?
2. Fix it three different ways on copies:
   - Select C4 → warning icon → **Convert to Number**.
   - **Data → Text to Columns → Finish** on the column.
   - `=VALUE(C4)` in a helper cell.
3. Verify `=SUM(C2:C7)` now includes the 850.

**Question:** What's the visual symptom that a number is secretly text?

---

## Exercise 9.4 — Remove Duplicates

Rows for `Acme` and `Initech` are duplicated (after cleaning).

1. **First flag them non-destructively:** `=COUNTIF($A$2:$A2, A2)` down the column — values >1 mark repeats.
2. Now select the data → **Data → Remove Duplicates**. Choose which columns define a duplicate (try **Customer** only vs **all columns**). How many rows does Excel remove each way?
3. Undo and try the other choice to see the difference.

**Question:** Why does the choice of "which columns define a duplicate" matter so much? Why work on a copy?

---

## Exercise 9.5 — Handle the Blank

Region for `Umbrella` is blank.

1. Select the Region range → `F5` → **Special** → **Blanks**. The blank cell(s) get selected.
2. Type `Unknown` and press **`Ctrl + Enter`** to fill all selected blanks at once.

**Question:** When is filling a blank with `0` wrong, and when is leaving it blank better? (Think about how `AVERAGE` treats each.)

---

## Exercise 9.6 — Prevent Bad Data with Validation

Now protect the Region column so this never happens again.

1. Select the Region cells → **Data → Data Validation**.
2. **Allow: List**, **Source:** `North,South,East,West`.
3. Click a Region cell — a drop-down appears. Try typing `Norht`. What happens?
4. On the **Input Message** tab, add a hint: "Pick a region from the list."
5. On the **Error Alert** tab, set style **Stop** with a custom message.

**Now test the gap:** does the new rule flag the *existing* values, or only new entries? Use **Data Validation → Circle Invalid Data** to check.

**Question:** Validation guards new entries — what tool audits data that was already there before the rule existed?

---

## Challenge — Test Yourself

1. Put the cleaning checklist in order: remove duplicates, trim spaces, standardize categories, fix data types. (What comes first, and why clean on a copy?)
2. Text pasted from a website won't `TRIM` clean — a stray space remains. What character is likely there, and how do you remove it?
3. Write a formula that flags a row "Dup" if its Customer value appears more than once anywhere in column A.
4. You apply a drop-down list to a column that already contains `Norht`. Does the validation rule fix or flag it automatically? What do you do?
5. Why do experienced analysts do recurring cleanups in Power Query instead of by hand?

> **Answers:**
> 1. Copy first → trim/clean → fix data types → standardize categories → remove duplicates → handle blanks. Cleaning on a copy preserves the raw data in case a step (like Remove Duplicates) deletes something you needed.
> 2. A non-breaking space, `CHAR(160)`. Remove with `=SUBSTITUTE(A2, CHAR(160), " ")` then `TRIM`.
> 3. `=IF(COUNTIF($A:$A, A2)>1, "Dup", "")`
> 4. Neither — validation only checks *new* entries. Use **Circle Invalid Data** to highlight the existing `Norht`, then fix it manually (e.g. Find & Replace).
> 5. Power Query records each step and re-applies it on Refresh, so next period's file is cleaned automatically and identically.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 08](08-lookup-and-reference-functions-exe.md) | Next → [Exercise 10](10-sorting-filtering-conditional-formatting-exe.md)
**Note:** [09 — Data Cleaning & Validation](../01-notes/09-data-cleaning-and-validation.md)
