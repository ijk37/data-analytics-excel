# Exercise 03 — Formulas & Cell References

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 02](02-entering-and-organizing-data-exe.md) | Next → [Exercise 04](04-essential-functions-exe.md)
**Note:** [03 — Formulas & Cell References](../01-notes/03-formulas-and-cell-references.md)

---

## Before You Start

Read [Note 03](../01-notes/03-formulas-and-cell-references.md). This exercise drills the most important formula skill in Excel: knowing when a reference should shift (`B2`) and when it should stay fixed (`$B$2`). Get this and copying formulas across thousands of rows becomes trivial.

---

## Exercise 3.1 — Operators and Order of Operations

Predict each result **before** typing it, then check in Excel:

| Formula | Your prediction | Actual |
|---------|-----------------|--------|
| `=2+3*4` | | |
| `=(2+3)*4` | | |
| `=2^3` | | |
| `=10/4` | | |
| `=10/0` | | |
| `="Q"&1` | | |
| `=5>3` | | |

**Questions:**
- Which one returned an error, and which error code?
- Why does `=2+3*4` differ from `=(2+3)*4`?

---

## Exercise 3.2 — Relative References (Copying Down)

Build this table starting at `A1`:

| | A | B | C | D |
|--|----------|-------|-------|---------|
|1| Product | Units | Price | Revenue |
|2| Apples | 50 | 0.30 | |
|3| Bananas | 30 | 0.25 | |
|4| Cherries | 20 | 1.10 | |

1. In `D2` type `=B2*C2` and press Enter.
2. Select `D2` and **double-click the fill handle** to copy it down to D4.
3. Click `D3` and `D4` and read their formulas in the formula bar.

**Questions:**
- What does the formula in `D3` say? In `D4`?
- The references changed automatically. What is this type of reference called?

---

## Exercise 3.3 — Absolute References (The Tax Rate)

Continuing the table above:

1. In cell `G1`, type `0.08` (an 8% tax rate). In `F1` type a label `Tax Rate`.
2. In `E1` type the header `Tax`.
3. In `E2`, you want revenue × tax rate. **First try the wrong way:** type `=D2*G1` and copy it down to E4.
4. Look at `E3` and `E4`. What went wrong? Click them and read the formulas — what is `G2` and `G3`?

**Now fix it:**
5. In `E2` type `=D2*$G$1` (or type `=D2*G1`, then click `G1` in the formula and press **`F4`**).
6. Copy down to E4. Read the formulas in `E3` and `E4`.

**Questions:**
- Why did the first version give wrong (or zero) answers?
- In `=D2*$G$1`, which part shifts when copied and which part stays locked?
- What does pressing `F4` do while editing a reference?

---

## Exercise 3.4 — Mixed References (A Multiplication Grid)

Build a multiplication table to practice mixed references.

1. In `A1` leave blank. In `B1:F1` type `1 2 3 4 5`. In `A2:A6` type `1 2 3 4 5` going down.
2. In `B2`, you want (column header) × (row header). Type:
   ```
   =B$1*$A2
   ```
3. Copy `B2` across to `F2`, then down to row 6 (or copy the whole `B2:F6` block from B2).
4. Check that you get a correct 5×5 multiplication table.

**Questions:**
- In `B$1`, what is locked and what is free? Why does that work as you copy down *and* across?
- What would happen if you used `=B1*A2` (no dollar signs) instead?

---

## Exercise 3.5 — Paste Special: Values

1. In your Revenue column (D2:D4), the values are formulas.
2. Select `D2:D4`, copy (`Ctrl + C`).
3. **Paste Special** (`Ctrl + Alt + V`) → choose **Values** → OK.
4. Click `D2` and look at the formula bar. Is it still a formula or just a number?
5. Now delete column B (Units). Did the Revenue numbers survive? Would they have survived if they were still formulas?

**Question:** When is "convert formulas to values" useful in real analytics work?

---

## Exercise 3.6 — Named Ranges

1. Click cell `G1` (your tax rate). Click the **Name Box**, type `TaxRate`, press Enter.
2. In a blank cell type `=D2*TaxRate`. Does it work?
3. Open **Formulas → Name Manager**. Find `TaxRate` listed.

**Question:** Why might `=D2*TaxRate` be easier to read and maintain than `=D2*$G$1`?

---

## Challenge — Test Yourself

1. Copying `=A1+B1` from `C1` to `C2` gives what formula? What about copying it to `D1`?
2. You have one discount rate in `B1` to apply to a column of prices in `A2:A100`. Write the formula for `C2` that copies down correctly.
3. What's the difference between `$A1`, `A$1`, and `$A$1`?
4. What does `#REF!` mean, and what action typically causes it?
5. You want to send a colleague the *results* of your calculations but not the formulas. What do you do?

> **Answers:**
> 1. `=A2+B2` (down); `=B1+C1` (right) — relative references shift in the direction you copy.
> 2. `=A2*$B$1` — lock the rate cell so it doesn't slide as you copy down.
> 3. `$A1` locks the column only; `A$1` locks the row only; `$A$1` locks both.
> 4. An invalid cell reference — usually because you deleted a cell/row/column the formula pointed to.
> 5. Copy the results and Paste Special → Values, so the cells hold static numbers.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 02](02-entering-and-organizing-data-exe.md) | Next → [Exercise 04](04-essential-functions-exe.md)
**Note:** [03 — Formulas & Cell References](../01-notes/03-formulas-and-cell-references.md)
