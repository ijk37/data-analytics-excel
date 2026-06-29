# Exercise 01 — Introduction to Excel for Data Analytics

**Navigation:** [Exercises Index](README.md) | Next → [Exercise 02](02-entering-and-organizing-data-exe.md)
**Note:** [01 — Introduction to Excel](../01-notes/01-introduction-to-excel.md)

---

## Before You Start

Read [Note 01](../01-notes/01-introduction-to-excel.md) first, then come back here.

These exercises are about getting comfortable — opening Excel, moving around the grid, and writing your very first formula. Nothing here can break anything. Open Excel and create a **Blank workbook**.

---

## Exercise 1.1 — Find Your Way Around

Open a blank workbook and locate each of these by name. Don't change anything yet — just point at them.

1. The **Ribbon** at the top. Click through the tabs: **Home**, **Insert**, **Formulas**, **Data**. Notice the buttons change.
2. The **Name Box** (left of the formula bar). Click a few cells and watch it show the address (`A1`, `B7`, …).
3. The **Formula Bar** (the long box with `fx`).
4. The **sheet tabs** at the bottom. Click the `+` to add a new sheet.

**Tasks:**
- Click cell `C5`. What does the Name Box show?
- Type `D10` into the Name Box and press Enter. Where does the selection jump?
- Double-click the `Sheet1` tab and rename it to `Practice`.

---

## Exercise 1.2 — Enter Different Data Types

In a fresh sheet, type the following and **watch the alignment** of each entry after you press Enter:

| Cell | Type this |
|------|-----------|
| A1 | `Hello` |
| A2 | `42` |
| A3 | `3.14` |
| A4 | `2026-06-29` |
| A5 | `TRUE` |

**Questions:**
- Which entries aligned to the **right**? Which to the **left**? Which **centered**?
- Based on alignment, which are numbers, which is text, and which is a date?
- What does the alignment tell you about how Excel is interpreting each value?

> **Why this matters:** alignment is a free clue to the data type. A number that lands on the left is secretly text and won't calculate — the single most common beginner bug.

---

## Exercise 1.3 — Build a Tiny Table and Write a Formula

Recreate this little table starting at cell `A1` (use **Tab** to move right, **Enter** to start a new row):

| | A | B | C |
|--|----------|-------|-------|
|1| Product | Units | Price |
|2| Apples | 50 | 0.30 |
|3| Bananas | 30 | 0.25 |
|4| Cherries | 20 | 1.10 |

**Now write your first formula:**

1. Click cell `D1` and type `Revenue`.
2. Click `D2` and type:
   ```
   =B2*C2
   ```
   Press Enter. What value appears in D2?
3. Click back on `D2` and look at the **formula bar**. It shows the formula; the cell shows the result. What's the difference?

**Test that it's live:**
- Change `B2` from `50` to `100`. What happens to `D2`? Why?

---

## Exercise 1.4 — Navigate Like a Pro

Still in your table:

1. Click `A1`, then press `Ctrl + ↓`. Where does the selection land, and why?
2. Press `Ctrl + ↑` to come back.
3. Click `A1`, hold `Shift`, and press `→` twice. What got selected?
4. Click anywhere in the table and press `Ctrl + A`. What does it select?
5. Press `F2` on cell `D2`. What mode does the cell enter?

**Question:** On a spreadsheet with 10,000 rows, how would `Ctrl + ↓` save you time?

---

## Exercise 1.5 — Save in Two Formats

1. Save your workbook with `Ctrl + S`. Name it `intro-practice.xlsx`. Note the `.xlsx` extension.
2. Now **File → Save As** and choose **CSV (Comma delimited) (*.csv)**. Save it as `intro-practice.csv`.
3. Open the `.csv` file in a plain text editor (Notepad). What do you see? Where did your formula in D2 go — is it the formula or the result?

**Questions:**
- What did the CSV keep, and what did it throw away (formulas? formatting? the Revenue formula vs. its value)?
- When would you want a `.csv` instead of an `.xlsx`?

---

## Challenge — Test Yourself

Answer without looking back at the note, then check.

1. What is the difference between a **workbook**, a **worksheet**, and a **cell**?
2. Every formula must begin with which character?
3. A number you typed is aligned to the **left** of its cell. What does that tell you, and why is it a problem?
4. What does `Ctrl + Arrow` do?
5. You save an `.xlsx` file as `.csv`. Name two things you lose.

> **Answers:**
> 1. A workbook is the whole file; a worksheet is one tabbed sheet inside it; a cell is one box in the grid.
> 2. The equals sign `=`.
> 3. Excel is treating the number as text, so it won't be included in calculations like SUM.
> 4. Jumps to the edge of the current block of data in that direction.
> 5. Formulas (replaced by their last results), formatting, and all but the active sheet.

---

**Navigation:** [Exercises Index](README.md) | Next → [Exercise 02](02-entering-and-organizing-data-exe.md)
**Note:** [01 — Introduction to Excel](../01-notes/01-introduction-to-excel.md)
