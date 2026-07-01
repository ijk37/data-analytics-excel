# Exercise 02 — Entering & Organizing Data

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 01](01-introduction-to-excel-exe.md) | Next → [Exercise 03](03-formulas-and-cell-references-exe.md)
**Note:** [02 — Entering & Organizing Data](../01-notes/02-entering-and-organizing-data.md)

---

## Before You Start

Read [Note 02](../01-notes/02-entering-and-organizing-data.md). This exercise builds a small dataset you'll reuse, and practices the habits — tidy shape, AutoFill, Tables — that make everything later easier.

---

## Exercise 2.1 — Spot the Untidy Data

Look at this layout. List **every** reason it breaks the "tidy data" rules from the note:

```
        A              B           C         D
1   Q1 Sales Report
2
3   Region    Jan      Feb       Mar
4   North      100      120       --
5   South      90    (blank row)
6
7   TOTAL      190      ...
```

**Write down at least four problems.** (Hints: title in the data, blank rows, a total mixed in, months as columns instead of a single Month column, `--` for missing.)

Then sketch on paper how you'd restructure it into a tidy table with columns `Region | Month | Sales`.

---

## Exercise 2.2 — Enter a Dataset Efficiently

Create a new sheet named `Sales`. Type this header row in `A1:E1`:

```
Date | Region | Product | Units | Price
```

Now enter these records using **Tab** to move across each row and **Enter** to drop to the next row's start:

| Date | Region | Product | Units | Price |
|------|--------|---------|-------|-------|
| 2026-01-03 | North | Apples | 50 | 0.30 |
| 2026-01-03 | South | Bananas | 30 | 0.25 |
| 2026-01-04 | North | Cherries | 20 | 1.10 |
| 2026-01-04 | East | Apples | 45 | 0.30 |
| 2026-01-05 | South | Cherries | 15 | 1.10 |

**As you type the Region column**, notice **AutoComplete** suggesting `North`/`South` after the first few. Accept with Enter.

**Question:** Did your dates align left or right? If left, they're text — note it; you'll fix this in Exercise 07.

---

## Exercise 2.3 — AutoFill and Flash Fill

On a blank sheet:

1. In `A1` type `1`, in `A2` type `2`. Select both, then **drag the fill handle** down to `A10`. What sequence appears?
2. In `B1` type `Mon`. Drag its fill handle down to `B7`. What happens?
3. In `C1` type `2026-01-01`. Drag down to `C10`. What pattern does Excel produce?
4. In `D1` type `Q1`. Drag the fill handle **right** to `G1`. Result?

**Flash Fill practice:**
5. In `F1:F3` type three full names: `John Smith`, `Mary Jones`, `Ali Khan`.
6. In `G1` type `John` (just the first name). Press **`Ctrl + E`**.
7. What does Excel put in `G2` and `G3`?

**Question:** Is the Flash Fill result a formula or static text? (Click `G2` and check the formula bar.)

---

## Exercise 2.4 — Convert to a Table

Go back to your `Sales` sheet:

1. Click any cell inside the data and press **`Ctrl + T`**. Confirm "My table has headers" is checked. Click OK.
2. Notice: banded rows, filter arrows on each header.
3. **Table Design** tab → change the **Table Name** to `Sales`.
4. Add a new row: click the cell just below the last `Price` and type a new record. Does the table **expand** to include it automatically?
5. Table Design → tick **Total Row**. A total appears at the bottom. Click the Total cell under last `Price` and use its drop-down to switch between Sum and Average.

**Question:** Name two advantages a Table gave you over a plain range.

---

## Exercise 2.5 — Freeze Panes and Navigate

1. With the `Sales` table active, go to **View → Freeze Panes → Freeze Top Row**.
2. Add enough rows (copy your data a few times) so the sheet scrolls. Scroll down — does the header row stay visible?
3. Select cell `B2` and use **Freeze Panes → Freeze Panes**. Now scroll right and down — what stays locked?
4. Unfreeze (**View → Freeze Panes → Unfreeze Panes**).

---

## Exercise 2.6 — Import a CSV (optional but recommended)

If you have a CSV handy (or export your `Sales` table to one):

1. **Data → Get Data → From Text/CSV** (or **From Text/CSV**).
2. In the preview, check the **delimiter** and the **data type** Excel detected for each column.
3. Click **Load**.
4. Note that this creates a refreshable connection — right-click the result → **Refresh** re-reads the file.

**Question:** What's the advantage of importing via Get & Transform versus just double-clicking the CSV to open it?

---

## Challenge — Test Yourself

1. List the six rules of "tidy" analytics data.
2. What does **double-clicking** the fill handle do, and why is it better than dragging on a long column?
3. What keyboard shortcut converts a range into a Table, and name two things a Table does automatically.
4. You import a CSV of product codes and `007` becomes `7`. What went wrong and how do you prevent it?
5. You want row 1 to stay visible while scrolling a 500-row dataset. What feature do you use?

> **Answers:**
> 1. One table per topic; one row per record; one column per attribute; one header row; no blank rows/columns; meaning in values, not formatting.
> 2. Fills down automatically to match the length of the adjacent column — no dragging needed on long data.
> 3. `Ctrl + T`. It adds filters, banded rows, a name, structured references, and auto-expands to new rows (any two).
> 4. Excel read the code as a number and dropped the leading zeros. Set that column's type to **Text** during the Power Query import.
> 5. Freeze Panes → Freeze Top Row.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 01](01-introduction-to-excel-exe.md) | Next → [Exercise 03](03-formulas-and-cell-references-exe.md)
**Note:** [02 — Entering & Organizing Data](../01-notes/02-entering-and-organizing-data.md)
