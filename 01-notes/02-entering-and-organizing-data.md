# 02 — Entering & Organizing Data

**Navigation:** [Notes Index](README.md) | ← Previous [01 — Introduction](01-introduction-to-excel.md) | Next → [03 — Formulas & Cell References](03-formulas-and-cell-references.md)
**Exercise:** [Exercise 02](../02-exercises/02-entering-and-organizing-data-exe.md)

---

## The Golden Rule of Analytics Data

Before learning *how* to enter data, learn *how it should be shaped*. Almost every powerful Excel feature — sorting, filtering, PivotTables, charts — assumes your data is **tidy**:

1. **One table, one topic.** Each table describes one kind of thing (sales, employees, products).
2. **One row per record.** Each row is a single observation — one sale, one person, one day.
3. **One column per attribute.** Each column holds one kind of value — a date, a name, an amount.
4. **One header row** at the top, with a short unique label per column. No merged cells, no blank header.
5. **No gaps.** No blank rows or blank columns inside the data block. No totals stuffed in the middle.
6. **Raw values, not formatting, carry meaning.** Don't use cell color as your only way to mark "important" — add a column for it instead, so it can be filtered and counted.

A tidy table:

| Date | Region | Product | Units | Price |
|------|--------|---------|-------|-------|
| 2026-01-03 | North | Apples | 50 | 0.30 |
| 2026-01-03 | South | Bananas | 30 | 0.25 |
| 2026-01-04 | North | Cherries | 20 | 1.10 |

Keep this shape and the rest of the curriculum becomes easy.

---

## Entering Data Efficiently

### Moving as you type

- **Enter** — confirm the cell and move **down**.
- **Tab** — confirm and move **right**. Useful for typing across a row.
- After typing a row with Tab, pressing **Enter** jumps back to the column where you started, one row down. This lets you type a whole table without touching the mouse.
- **Esc** — cancel what you're typing and restore the old value.

### AutoComplete

When you start typing in a column where similar text already exists, Excel suggests the matching entry. Press **Enter** to accept. This keeps categories like `North` / `South` spelled consistently — important, because `North` and `north ` (with a trailing space) count as two different groups in a PivotTable.

### Pick from a list

Right-click a cell under a column of text and choose **Pick From Drop-down List** (or press `Alt + ↓`) to choose an existing value instead of retyping it.

---

## AutoFill: Excel's Time-Saver

The small square at the bottom-right corner of the active cell (or selected range) is the **fill handle**. Drag it to copy or extend a pattern.

| You type | Then drag the fill handle | Excel produces |
|----------|---------------------------|----------------|
| `1` | down | `1, 1, 1, …` (copies) |
| `1` then `2` (select both) | down | `1, 2, 3, 4, …` (continues the series) |
| `Mon` | down | `Mon, Tue, Wed, …` |
| `Jan` | down | `Jan, Feb, Mar, …` |
| `2026-01-01` | down | `2026-01-02, 2026-01-03, …` |
| `Q1` | right | `Q1, Q2, Q3, Q4` |

**Flash Fill** (`Ctrl + E`) is smarter still: type one or two examples of the output you want, and Excel detects the pattern and fills the rest. For instance, with full names in column A, type the first name in column B and press `Ctrl + E` — Excel extracts all the first names. (More on this in Note 09.)

> **Double-click trick:** instead of dragging the fill handle all the way down a long column, **double-click** it. Excel fills down automatically to match the length of the neighboring column. Essential for large datasets.

---

## Selecting Ranges and Whole Tables

| Selection | How |
|-----------|-----|
| A range | Click first cell, drag to last; or click first, `Shift`+click last |
| Extend selection | `Shift + Arrow` (one cell) or `Ctrl + Shift + Arrow` (to data edge) |
| Whole column | Click the column letter (or `Ctrl + Space` from a cell) |
| Whole row | Click the row number (or `Shift + Space` from a cell) |
| The entire connected data block | `Ctrl + A` from inside it |
| Non-adjacent cells | Hold `Ctrl` while clicking each one |

`Ctrl + Shift + End` selects from the active cell all the way to the bottom-right of the used area — handy for grabbing an entire dataset of unknown size.

---

## Rows and Columns: Insert, Delete, Resize

- **Insert** — right-click a row number or column letter → **Insert**. The new row/column appears *before* (above/left of) the one you clicked.
- **Delete** — right-click → **Delete**. This removes the data and shifts the rest over. (Pressing the `Delete` key only clears contents; it does not remove the row.)
- **Resize** — drag the border between two headers. **Double-click** the border to auto-fit the width to the widest entry.
- **Hide** — right-click → **Hide** to tuck away columns you don't need to see (the data stays and still calculates).

> **`#####` in a cell** means the column is too narrow to display a number or date. The value is fine — just widen the column (double-click the right border of the header).

---

## Freezing Panes for Large Datasets

When you scroll down a long table, the header row disappears off the top. **Freeze** it so it stays visible:

- **View** tab → **Freeze Panes** → **Freeze Top Row** keeps row 1 visible while you scroll.
- **Freeze First Column** keeps column A visible while you scroll right.
- **Freeze Panes** (the main option) freezes everything *above and to the left* of the active cell. To freeze the top row *and* the first column, select cell `B2` first, then Freeze Panes.

This is essential when analyzing datasets with hundreds of rows.

---

## Importing Data: CSV and Text Files

Real analytics rarely starts with typing — it starts with a file someone gave you. The most common is a **CSV** (comma-separated values) file.

**The quick way:** simply open the `.csv` in Excel (`File → Open`), and it splits into columns automatically. Good for a fast look, but Excel guesses the data types and may mangle things (leading zeros dropped, long numbers turned to scientific notation, dates misread).

**The robust way — Get & Transform (Power Query):**

1. Go to the **Data** tab → **Get Data** → **From File** → **From Text/CSV** (or the **From Text/CSV** button directly).
2. Pick your file. A preview window opens.
3. Check the **delimiter** (comma, semicolon, tab) and the detected data types for each column.
4. Click **Transform Data** to clean it first (covered in Note 09), or **Load** to drop it straight into a sheet.

The Power Query route keeps a live connection: if the source file updates, you click **Refresh** and the data reloads. This is the professional habit for repeatable analysis.

> **Leading-zero gotcha:** values like ZIP codes (`02134`) or product codes (`007`) lose their leading zeros if Excel reads them as numbers. In the Power Query import, set that column's type to **Text** to preserve them.

---

## Convert Your Data to a Table (`Ctrl + T`)

This single step makes everything downstream easier. Select any cell in your data and press **`Ctrl + T`** (Insert → Table). Confirm that "My table has headers" is checked.

An Excel **Table** (a formal object, distinct from a plain range) gives you:

- **Automatic filters** — drop-down arrows on every header.
- **Banded rows** — easier to read.
- **A name** — Excel calls it `Table1` by default; rename it (Table Design → Table Name) to something meaningful like `Sales`.
- **Structured references** — formulas can say `=Sales[Units]` instead of `=B2:B5000`. Readable and self-documenting.
- **Auto-expansion** — type a new row right below the table and it joins automatically; formulas and formatting extend to it. No more "I forgot to update the range".
- **A Total Row** — Table Design → check **Total Row** to add an instant sum/average/count at the bottom.

Using Tables is one of the highest-value habits in Excel. We'll lean on them throughout.

---

## Key Things to Remember

> **Tidy data first.** One record per row, one attribute per column, one header row, no blank rows. This shape is the foundation every analytics feature depends on.

> **Convert to a Table (`Ctrl + T`).** Tables auto-filter, auto-expand, auto-name, and let formulas reference columns by name. Make it a reflex.

> **Import with Get & Transform, not just Open.** A Power Query connection lets you refresh when the source changes and preserves data types like leading zeros.

> **Watch alignment and `#####`.** Right = number/date, left = text. `#####` just means "too narrow" — widen the column.

---

**Navigation:** [Notes Index](README.md) | ← Previous [01 — Introduction](01-introduction-to-excel.md) | Next → [03 — Formulas & Cell References](03-formulas-and-cell-references.md)
**Exercise:** [Exercise 02](../02-exercises/02-entering-and-organizing-data-exe.md)
