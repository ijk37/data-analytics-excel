# Exercise 05 — Logical Functions

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 04](04-essential-functions-exe.md) | Next → [Exercise 06](06-text-functions-exe.md)
**Note:** [05 — Logical Functions](../01-notes/05-logical-functions.md)

---

## Before You Start

Read [Note 05](../01-notes/05-logical-functions.md). Reuse the `Orders` dataset from Exercise 04 (Date, Region, Product, Units, Amount). These exercises make formulas *decide* — the heart of turning raw numbers into categories and flags.

---

## Exercise 5.1 — Your First IF

1. In a new column `F` headed `Size`, write in `F2`:
   ```
   =IF(E2>140, "Large", "Small")
   ```
2. Copy it down the column.
3. Read a few results against the Amount column — do they match?

**Questions:**
- What does `IF` return when the test is TRUE? When FALSE?
- Why are `"Large"` and `"Small"` in quotes? What would happen without them?

---

## Exercise 5.2 — IF with a Calculation

A 10% bonus applies only to North-region orders.

1. In column `G` headed `Bonus`, write in `G2`:
   ```
   =IF(B2="North", E2*0.1, 0)
   ```
2. Copy down.

**Questions:**
- Why is `E2*0.1` **not** in quotes?
- What's in the Bonus column for non-North rows?

---

## Exercise 5.3 — Nested IF (Categories)

Turn Amount into three tiers.

1. In column `H` headed `Tier`, write in `H2`:
   ```
   =IF(E2>=200, "A", IF(E2>=120, "B", "C"))
   ```
2. Copy down and verify: ≥200 → A, 120–199 → B, below 120 → C.
3. **Rewrite the same logic using `IFS`** (if you have Excel 2019/365):
   ```
   =IFS(E2>=200,"A", E2>=120,"B", TRUE,"C")
   ```

**Questions:**
- In the nested version, why must you test `>=200` *before* `>=120`?
- What does the final `TRUE,"C"` mean in the IFS version?

---

## Exercise 5.4 — AND / OR

| # | Rule | Formula |
|---|------|---------|
| 1 | "Priority" if amount > 140 **AND** region = North, else "Normal" | `=IF(AND(E2>140,B2="North"),"Priority","Normal")` |
| 2 | "Watch" if region is **North OR East**, else "" | `=IF(OR(B2="North",B2="East"),"Watch","")` |
| 3 | "Not South" flag using NOT | `=IF(NOT(B2="South"),"Yes","No")` |

Add each as a helper column and check a few rows by hand.

**Question:** What's the difference between using `AND` and `OR` inside the IF — when is each row flagged?

---

## Exercise 5.5 — Counting Your Flags

Now that you've categorized rows, summarize them (combines with Note 04):

1. `=COUNTIF(H2:H9, "A")` — how many Tier A orders?
2. `=COUNTIF(F2:F9, "Large")` — how many Large orders?
3. `=SUMIF(H2:H9, "A", E2:E9)` — total amount of Tier A orders.

**Question:** Why is it useful to turn a number (Amount) into a category (Tier) before summarizing?

---

## Exercise 5.6 — Handling Errors with IFERROR

1. In a blank cell, deliberately cause an error: `=E2/0`. What error appears?
2. Wrap it: `=IFERROR(E2/0, 0)`. What shows now?
3. Build a "units per dollar" column: `=E2/D2` is fine, but make a row where Units is blank, then use:
   ```
   =IFERROR(E2/D2, "n/a")
   ```

**Questions:**
- What does `IFERROR` do?
- The note warns against over-using `IFERROR(..., 0)`. Why can blindly turning all errors into `0` be dangerous?
- When would `IFNA` be a better choice than `IFERROR`?

---

## Exercise 5.7 — IS Functions

1. In a blank cell, test a value: `=ISNUMBER(E2)` → TRUE or FALSE?
2. `=ISTEXT(B2)` on a region → ?
3. Make a data-quality flag in a helper column:
   ```
   =IF(ISBLANK(E2), "MISSING", "ok")
   ```
4. Blank out one Amount and confirm the flag fires.

**Question:** How could `ISNUMBER` help detect the "number stored as text" bug from Note 01?

---

## Challenge — Test Yourself

1. Write an `IF` that returns "Free shipping" when Amount ≥ 100, otherwise "Pay shipping".
2. Write a single formula that flags an order "VIP" if it is **both** over $200 **and** from North.
3. Convert this nested IF to IFS: `=IF(x>=90,"A",IF(x>=80,"B","C"))`.
4. A `VLOOKUP` sometimes returns `#N/A`. Write a wrapper that shows "Not found" instead — and say whether `IFERROR` or `IFNA` is more appropriate here.
5. Why is turning a continuous value into a category (with IF) a common step before building a PivotTable?

> **Answers:**
> 1. `=IF(E2>=100, "Free shipping", "Pay shipping")`
> 2. `=IF(AND(E2>200, B2="North"), "VIP", "")`
> 3. `=IFS(x>=90,"A", x>=80,"B", TRUE,"C")`
> 4. `=IFNA(VLOOKUP(...), "Not found")` — IFNA is better because it catches only the lookup's `#N/A` and still lets genuine errors (like `#REF!`) surface.
> 5. Categories give you something to group/count by; PivotTables and COUNTIF summarize by category, not by every distinct number.

---

**Navigation:** [Exercises Index](README.md) | ← Previous [Exercise 04](04-essential-functions-exe.md) | Next → [Exercise 06](06-text-functions-exe.md)
**Note:** [05 — Logical Functions](../01-notes/05-logical-functions.md)
