# 03 — Formulas & Cell References

**Navigation:** [Notes Index](README.md) | ← Previous [02 — Entering & Organizing Data](02-entering-and-organizing-data.md) | Next → [04 — Essential Functions](04-essential-functions.md)
**Exercise:** [Exercise 03](../02-exercises/03-formulas-and-cell-references-exe.md)

---

## What is a Formula?

A **formula** is an instruction that calculates a value. It always begins with `=`. Everything after the `=` is an expression Excel evaluates and then displays the result of.

```
=2+2            → 4
=10/4           → 2.5
=A1*B1          → multiplies whatever is in A1 by whatever is in B1
=(A1+A2)*0.1    → adds two cells, then takes 10%
```

The power of a formula is that it references **cells**, not fixed numbers. Change a referenced cell and the formula recalculates instantly. This is what makes a spreadsheet "live".

---

## Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+` | Add | `=5+3` | `8` |
| `-` | Subtract | `=5-3` | `2` |
| `*` | Multiply | `=5*3` | `15` |
| `/` | Divide | `=6/3` | `2` |
| `^` | Power (exponent) | `=2^3` | `8` |
| `%` | Percent | `=50%` | `0.5` |
| `&` | Join text (concatenate) | `="Q"&1` | `Q1` |
| `=` `<>` | Equal / not equal | `=A1=10` | `TRUE`/`FALSE` |
| `>` `<` `>=` `<=` | Comparisons | `=A1>100` | `TRUE`/`FALSE` |

### Order of operations

Excel follows standard math precedence (often remembered as **PEMDAS**):

1. **P**arentheses `( )`
2. **E**xponents `^`
3. **M**ultiplication and **D**ivision `* /` (left to right)
4. **A**ddition and **S**ubtraction `+ -` (left to right)

```
=2+3*4      → 14   (multiply first: 3*4=12, then +2)
=(2+3)*4    → 20   (parentheses first: 2+3=5, then *4)
```

When in doubt, **add parentheses**. They cost nothing and make intent obvious.

---

## Referencing Cells

Instead of typing numbers, point to cells. You can type the address (`=A1+A2`) or, while building a formula, **click** the cells — Excel inserts the reference for you.

A simple revenue example, with data in rows 2–4:

| | A | B | C | D |
|--|---------|-------|-------|------------------|
|1| Product | Units | Price | Revenue |
|2| Apples | 50 | 0.30 | `=B2*C2` → 15 |
|3| Bananas | 30 | 0.25 | `=B3*C3` → 7.5 |
|4| Cherries | 20 | 1.10 | `=B4*C4` → 22 |

You wrote the D2 formula once. Now copy it down — and this is where reference types matter.

---

## Relative, Absolute, and Mixed References

This is the single most important concept for using formulas efficiently. When you **copy** a formula to another cell, Excel adjusts the references depending on their type.

### Relative references (the default): `A1`

A plain reference like `B2` is **relative** — it means "the cell two to my left", not literally B2. Copy `=B2*C2` from D2 down to D3 and it becomes `=B3*C3` automatically. That's exactly what you want for the revenue column: each row multiplies its own units by its own price.

### Absolute references: `$A$1`

Sometimes you want a reference to **stay fixed** when copied. Put a `$` before the column letter *and* the row number. `$B$1` always means B1, no matter where you copy it.

**Example — applying one tax rate to many rows.** Put the rate `0.08` in cell `G1`. To compute tax for each revenue figure:

```
=D2*$G$1
```

Copy this down. The `D2` shifts to `D3`, `D4`, … (relative — good), but `$G$1` stays locked on the rate cell (absolute — essential). Without the `$`, copying down would slide the reference to `G2`, `G3` (empty cells) and your tax would come out zero.

### Mixed references: `$A1` or `A$1`

Lock only the column **or** only the row:

- `$A1` — column A is locked, row is free. (Useful when copying *across*.)
- `A$1` — row 1 is locked, column is free. (Useful when copying *down*.)

Mixed references shine when building a grid that pulls from a row header and a column header at once — like a multiplication table or a price matrix.

### The `F4` shortcut

While editing a formula, click a reference and press **`F4`** to cycle through the four states:

```
A1  →  $A$1  →  A$1  →  $A1  →  A1  ...
```

This is far faster than typing `$` signs by hand.

---

## Copying Formulas

You write a formula once and propagate it. Three ways:

1. **Fill handle** — select the cell, drag the bottom-right square down (or double-click it to auto-fill to the bottom of the adjacent data).
2. **Copy/Paste** — `Ctrl + C`, select the destination range, `Ctrl + V`. References adjust per the rules above.
3. **Fill Down** — select the formula cell *and* the cells below it, press `Ctrl + D` (fill down) or `Ctrl + R` (fill right).

> **In an Excel Table**, you barely copy at all: type a formula in one cell of a column and Excel fills the entire column instantly, using readable structured references like `=[@Units]*[@Price]`.

---

## Paste Special: Values, Formulas, Formats

Plain paste brings everything. Often you want just part of it. After copying, use **Paste Special** (`Ctrl + Alt + V`, or right-click → Paste Special):

- **Values** — pastes the *result* of formulas, not the formulas themselves. Crucial when you want to "freeze" a calculation, or send numbers to someone without the underlying logic. (Shortcut habit: `Ctrl+C`, then `Ctrl+Alt+V`, then `V`, then Enter.)
- **Formulas** — formulas without the formatting.
- **Formats** — copy only the look (colors, number format), not the data.
- **Transpose** — flip rows into columns and vice versa.

> **"Convert formulas to values"** is one of the most-used moves in analytics: select the range, copy, then Paste Special → Values onto itself. The cells now hold static numbers that won't change if the source data is deleted.

---

## Named Ranges

Instead of `$G$1`, you can give a cell a **name** and use it in formulas. Select `G1`, click the **Name Box** (left of the formula bar), type `TaxRate`, and press Enter. Now:

```
=D2*TaxRate
```

This reads like English and is automatically absolute (names don't shift when copied). Names are great for constants (`TaxRate`, `MinWage`) and key ranges you reference often. Manage them via **Formulas → Name Manager**.

---

## Common Formula Errors

When a formula can't compute, Excel shows an error code. Learn to read them:

| Error | Meaning | Typical cause |
|-------|---------|---------------|
| `#DIV/0!` | Divide by zero | Denominator is `0` or empty |
| `#N/A` | Value not available | A lookup found no match (Note 08) |
| `#NAME?` | Unrecognized name | Misspelled function or range name (`=SUMM(...)`) |
| `#VALUE!` | Wrong type | Doing math on text (e.g. `="abc"*2`) |
| `#REF!` | Invalid reference | You deleted a cell the formula pointed to |
| `#NUM!` | Invalid number | Impossible math (e.g. square root of a negative) |
| `#####` | Not an error | Column too narrow — just widen it |
| `#SPILL!` | Spill blocked | A dynamic array can't expand because a cell below is occupied |

You'll learn to catch these gracefully with `IFERROR` in Note 05.

> **Trace the problem:** select an erroring cell and use **Formulas → Error Checking** or **Trace Precedents** to see which cells feed into it. The small green triangle in a cell corner also flags potential issues.

---

## Key Things to Remember

> **Relative vs. absolute is everything.** A plain reference (`B2`) shifts when copied; a `$`-locked reference (`$G$1`) stays put. Use `F4` to toggle. Getting this right is what lets you write a formula once and copy it across thousands of rows.

> **Parentheses beat memorized precedence.** When a formula mixes operators, wrap the part you want done first in `( )`. Clear beats clever.

> **Paste Special → Values freezes results.** Convert formulas to static numbers when you need a snapshot that won't recalculate.

> **Read the error code.** Each `#…!` tells you exactly what went wrong. They're clues, not failures.

---

**Navigation:** [Notes Index](README.md) | ← Previous [02 — Entering & Organizing Data](02-entering-and-organizing-data.md) | Next → [04 — Essential Functions](04-essential-functions.md)
**Exercise:** [Exercise 03](../02-exercises/03-formulas-and-cell-references-exe.md)
