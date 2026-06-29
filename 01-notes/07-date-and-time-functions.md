# 07 — Date & Time Functions

**Navigation:** [Notes Index](README.md) | ← Previous [06 — Text Functions](06-text-functions.md) | Next → [08 — Lookup & Reference Functions](08-lookup-and-reference-functions.md)
**Exercise:** [Exercise 07](../02-exercises/07-date-and-time-functions-exe.md)

---

## The Big Secret: Dates Are Numbers

This one idea unlocks everything about dates in Excel.

Excel stores every date as a **serial number** — the count of days since **January 1, 1900** (which is day `1`). So:

- `1` = 1900-01-01
- `45000` = 2023-03-15
- `46021` = 2025-12-31

The date you *see* (`2025-12-31`) is just a **number format** painted over the serial number `46021`. Underneath, it's an ordinary number. That's why:

- You can **subtract** dates to get the days between them: `=B2-A2`.
- You can **add** days: `=A2+30` gives the date 30 days later.
- Dates **sort** and **filter** correctly as numbers.

**Times** work the same way, as the *fractional* part of the day: `0.5` = noon, `0.25` = 6:00 AM, `0.75` = 6:00 PM. A value like `45000.5` means "noon on 2023-03-15".

> **Test it yourself:** type a date in a cell, then change its number format to **General** (Home → Number format dropdown). The date turns into its serial number. Change it back to a Date format and the date reappears. The value never changed — only the costume.

---

## The Text-Date Trap

The most common date problem in analytics: dates that look right but are actually **text**. If a "date" is left-aligned, won't subtract, and ignores date formatting, Excel is treating it as a string, not a serial number.

Causes: imported CSVs, copy-paste from the web, or a format Excel didn't recognize (e.g. `2026.06.29` or `29/06/2026` on a US-locale machine).

**Fixes:**

```
=DATEVALUE("2026-06-29")     → converts a text-date to a real serial number
=A2 + 0                       → sometimes coerces a text-date to a number
```

Or select the column → **Data → Text to Columns** → Finish (this re-parses text-dates into real dates). When importing, set the column type to **Date** in Power Query (Note 02). Until a date is a *real* date, none of the functions below will work on it.

---

## Today, Now, and Building Dates

| Function | Returns |
|----------|---------|
| `TODAY()` | Today's date (updates each day; no arguments) |
| `NOW()` | Current date **and** time |
| `DATE(year, month, day)` | Builds a date from parts → `DATE(2026,6,29)` |
| `TIME(hour, min, sec)` | Builds a time from parts |

`TODAY()` and `NOW()` are **volatile** — they recalculate every time the sheet changes. Great for "days until deadline" dashboards; if you want a fixed timestamp instead, type `Ctrl + ;` (inserts today's date as a static value).

`DATE()` is the safe way to construct a date in a formula — it never depends on locale or text parsing:

```
=DATE(2026, 12, 31)            → 2026-12-31
=DATE(A2, 1, 1)                → Jan 1 of the year in A2
=DATE(2026, 13, 1)             → 2027-01-01  (month 13 rolls into next year — handy!)
```

---

## Extracting Parts of a Date

Pull components out of a real date to group or filter by them.

| Function | Example (date = 2026-06-29, a Monday) | Result |
|----------|----------------------------------------|--------|
| `YEAR(date)` | `=YEAR(A2)` | `2026` |
| `MONTH(date)` | `=MONTH(A2)` | `6` |
| `DAY(date)` | `=DAY(A2)` | `29` |
| `HOUR / MINUTE / SECOND(time)` | `=HOUR(B2)` | hour of a time |
| `WEEKDAY(date, 2)` | `=WEEKDAY(A2, 2)` | `1` (Mon=1 … Sun=7 with type 2) |
| `WEEKNUM(date)` | `=WEEKNUM(A2)` | week number of the year |

**Why extract?** To analyze trends. A column of `=YEAR(A2)` and `=MONTH(A2)` lets you group thousands of transactions by month in a PivotTable, or `SUMIFS` revenue per year. Extracting the part you care about is the bridge from raw timestamps to time-based insight.

### Friendly labels with TEXT

```
=TEXT(A2, "mmmm")      → "June"        (full month name)
=TEXT(A2, "mmm")       → "Jun"         (short month)
=TEXT(A2, "dddd")      → "Monday"      (day name)
=TEXT(A2, "yyyy-mm")   → "2026-06"     (year-month, great for sorting/grouping)
```

`"yyyy-mm"` as text is a fantastic grouping key because it sorts chronologically *and* alphabetically.

---

## Date Arithmetic

Because dates are numbers, math just works:

```
=B2 - A2                       → number of days between two dates
=TODAY() - A2                  → age of a record in days ("days since")
=A2 + 90                       → 90 days after A2
=EDATE(A2, 3)                  → same day, 3 months later (handles month lengths)
=EDATE(A2, -1)                 → one month earlier
=EOMONTH(A2, 0)                → last day of A2's month
=EOMONTH(A2, 1)                → last day of next month
```

`EDATE` and `EOMONTH` are smarter than adding 30/31 days because they respect real calendar months — vital for billing cycles, subscriptions, and month-end reporting.

### Counting working days

```
=NETWORKDAYS(start, end, [holidays])
   → number of weekdays between two dates (excludes Sat/Sun, and any holidays you list)

=WORKDAY(start, days, [holidays])
   → the date N working days after start
```

These power "business days to deliver" and SLA calculations. Provide an optional range of holiday dates to exclude those too.

### DATEDIF — duration in years/months/days

A hidden but useful function for ages and tenures:

```
=DATEDIF(start, end, "Y")    → whole years between (e.g. age)
=DATEDIF(start, end, "M")    → whole months
=DATEDIF(start, end, "D")    → days
```

(It's the right tool for "how many complete years" because plain subtraction gives days, and dividing by 365 mishandles leap years.)

---

## Formatting Dates for Display

Right-click → **Format Cells** → **Number** → **Date/Custom** to control how a date looks *without changing its value*. Custom format codes:

| Code | Shows | Example |
|------|-------|---------|
| `yyyy` / `yy` | Year | `2026` / `26` |
| `mmm` / `mmmm` | Month name | `Jun` / `June` |
| `mm` / `m` | Month number | `06` / `6` |
| `dd` / `d` | Day | `29` / `29` |
| `ddd` / `dddd` | Weekday | `Mon` / `Monday` |
| `hh:mm` | Time | `14:30` |

Example custom format `dddd, mmmm d, yyyy` displays `Monday, June 29, 2026`. The underlying serial number is unchanged — so it still sorts and calculates correctly.

> **Display vs. value, again:** changing a date's *format* only changes its appearance. To change the actual stored value (e.g. force everything to the first of the month), you need a *formula* like `=DATE(YEAR(A2), MONTH(A2), 1)`.

---

## A Realistic Time-Analysis Pattern

Given a `Sales` table with an `OrderDate` column, add helper columns to enable time analysis:

```
Year:        =YEAR([@OrderDate])
Month:       =TEXT([@OrderDate], "yyyy-mm")     ← sortable grouping key
Weekday:     =TEXT([@OrderDate], "dddd")
Days to ship: =NETWORKDAYS([@OrderDate], [@ShipDate])
Is weekend:  =IF(WEEKDAY([@OrderDate],2)>5, "Weekend", "Weekday")
```

Now a PivotTable can show revenue by month, average shipping days, or weekday-vs-weekend patterns — all because you converted raw dates into analyzable dimensions.

---

## Key Things to Remember

> **A date is a number in disguise.** It's the day-count since 1900-01-01, formatted to look like a date. That's why subtraction, addition, sorting, and filtering all work.

> **Beware text-dates.** Left-aligned "dates" that won't calculate are text. Fix with `DATEVALUE`, Text to Columns, or a typed column in Power Query — *before* analyzing.

> **`EDATE`/`EOMONTH` for month math; `NETWORKDAYS` for business days.** They respect real calendars, unlike adding raw day counts.

> **Extract parts (`YEAR`, `MONTH`, `TEXT(...,"yyyy-mm")`) to enable trend analysis.** Converting timestamps into year/month/weekday dimensions is what makes time-based PivotTables and charts possible.

---

**Navigation:** [Notes Index](README.md) | ← Previous [06 — Text Functions](06-text-functions.md) | Next → [08 — Lookup & Reference Functions](08-lookup-and-reference-functions.md)
**Exercise:** [Exercise 07](../02-exercises/07-date-and-time-functions-exe.md)
