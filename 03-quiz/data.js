// Quiz data for "Data Analytics with Excel".
// TOPICS = quiz list (12 note-wise + 3 final mixed).
// QUESTIONS[id] = array of { q, options[4], answer (0-based index), explain }.
// All strings use backticks so Excel formulas (which use " and ') need no escaping.

const TOPICS = [
  { id: "01", title: "Introduction to Excel" },
  { id: "02", title: "Entering & Organizing Data" },
  { id: "03", title: "Formulas & Cell References" },
  { id: "04", title: "Essential Functions" },
  { id: "05", title: "Logical Functions" },
  { id: "06", title: "Text Functions" },
  { id: "07", title: "Date & Time Functions" },
  { id: "08", title: "Lookup & Reference Functions" },
  { id: "09", title: "Data Cleaning & Validation" },
  { id: "10", title: "Sorting, Filtering & Conditional Formatting" },
  { id: "11", title: "PivotTables & PivotCharts" },
  { id: "12", title: "Charts, Dashboards & What-If" },
  { id: "mixed-1", title: "Final Mixed Quiz 1 — Foundations" },
  { id: "mixed-2", title: "Final Mixed Quiz 2 — Functions & Analysis" },
  { id: "mixed-3", title: "Final Mixed Quiz 3 — Comprehensive" },
];

const QUESTIONS = {

  // ───────────────────────────── 01 — Introduction ─────────────────────────
  "01": [
    {
      q: `Every Excel formula must begin with which character?`,
      options: [`A plus sign (+)`, `An equals sign (=)`, `An at sign (@)`, `A hash (#)`],
      answer: 1,
      explain: `A formula always starts with =. The equals sign tells Excel to compute the expression instead of storing it as literal text.`,
    },
    {
      q: `You type a number into a cell and it appears aligned to the LEFT. What does this usually mean?`,
      options: [
        `The number is negative`,
        `Excel is treating it as text, so it will not calculate`,
        `The cell is formatted as currency`,
        `The column is too narrow`,
      ],
      answer: 1,
      explain: `Numbers align right by default. A number sitting on the left is being treated as text and will be excluded from calculations like SUM — a very common beginner bug.`,
    },
    {
      q: `What is the correct hierarchy, from largest to smallest?`,
      options: [
        `Cell > Worksheet > Workbook`,
        `Workbook > Worksheet > Cell`,
        `Worksheet > Workbook > Cell`,
        `Workbook > Cell > Worksheet`,
      ],
      answer: 1,
      explain: `A workbook is the whole file; it contains one or more worksheets (tabbed sheets); each worksheet is a grid of cells.`,
    },
    {
      q: `What does the Name Box (left of the formula bar) show and do?`,
      options: [
        `It shows the file name`,
        `It shows the active cell's address and lets you jump to a cell or named range`,
        `It shows the current formula result`,
        `It names the worksheet`,
      ],
      answer: 1,
      explain: `The Name Box displays the address of the selected cell (e.g. A1) and lets you navigate by typing a cell address or a named range and pressing Enter.`,
    },
    {
      q: `The cell address B3 refers to:`,
      options: [`Row B, column 3`, `Column B, row 3`, `The 3rd workbook`, `A range of 3 cells`],
      answer: 1,
      explain: `A cell address is column letter then row number. B3 = column B, row 3.`,
    },
    {
      q: `With the active cell inside a block of data, what does pressing Ctrl + Down Arrow do?`,
      options: [
        `Deletes the row`,
        `Jumps to the last filled cell in that column`,
        `Inserts a new row`,
        `Sorts the column`,
      ],
      answer: 1,
      explain: `Ctrl + Arrow jumps to the edge of the current data region — the fast way to reach the bottom of a large dataset without scrolling.`,
    },
    {
      q: `Which file format keeps only raw values — no formulas, formatting, or multiple sheets?`,
      options: [`.xlsx`, `.xlsm`, `.csv`, `.xltx`],
      answer: 2,
      explain: `CSV (comma-separated values) is plain text holding only the values of one sheet. It is the universal exchange format but discards formulas, formatting, and extra sheets.`,
    },
    {
      q: `What does the formula bar display when you select a cell that shows a calculated number?`,
      options: [
        `The same number as the cell`,
        `The underlying formula that produced the number`,
        `Nothing`,
        `The cell's address`,
      ],
      answer: 1,
      explain: `The cell shows the result; the formula bar reveals the formula behind it. This is how you inspect what a calculated cell is actually doing.`,
    },
    {
      q: `Which file format is required if a workbook contains macros (VBA code)?`,
      options: [`.xlsx`, `.csv`, `.xlsm`, `.txt`],
      answer: 2,
      explain: `.xlsm is the macro-enabled workbook format. A plain .xlsx cannot store macros.`,
    },
    {
      q: `By default, how does Excel align dates and numbers versus text?`,
      options: [
        `Everything is centered`,
        `Numbers/dates align right; text aligns left`,
        `Numbers/dates align left; text aligns right`,
        `Alignment is random`,
      ],
      answer: 1,
      explain: `Numbers and dates align right; text aligns left. This default alignment is a free clue to how Excel is interpreting each value.`,
    },
    {
      q: `What does the range reference A1:C3 describe?`,
      options: [
        `Three separate cells`,
        `A rectangular block from A1 to C3 (3 columns by 3 rows)`,
        `Column A through C only`,
        `The cells A1 and C3 only`,
      ],
      answer: 1,
      explain: `A colon defines a range: A1:C3 is the 3x3 rectangular block with corners A1 (top-left) and C3 (bottom-right).`,
    },
    {
      q: `A best-practice habit for analytics workbooks is to:`,
      options: [
        `Keep raw data and analysis on the same sheet`,
        `Type results directly over the raw data`,
        `Separate raw data from calculations/reports onto different sheets`,
        `Avoid using multiple sheets`,
      ],
      answer: 2,
      explain: `Keep untouched source data on its own sheet and build calculations/reports elsewhere, so you never overwrite data you will need again.`,
    },
  ],

  // ──────────────────────── 02 — Entering & Organizing ─────────────────────
  "02": [
    {
      q: `In a "tidy" analytics table, each row should represent:`,
      options: [`One attribute`, `One record (a single observation)`, `One category`, `One total`],
      answer: 1,
      explain: `Tidy data = one record per row, one attribute per column, a single header row, and no blank rows. Nearly every analytics feature assumes this shape.`,
    },
    {
      q: `What does pressing Ctrl + T do to a selected data range?`,
      options: [
        `Inserts a total row only`,
        `Converts it into an Excel Table (with filters, a name, and auto-expansion)`,
        `Transposes rows and columns`,
        `Applies a theme`,
      ],
      answer: 1,
      explain: `Ctrl + T creates an Excel Table: automatic filter arrows, banded rows, a name, structured references, and auto-expansion when you add new rows.`,
    },
    {
      q: `Instead of dragging the fill handle down a long column, what is faster?`,
      options: [
        `Copy and paste each cell`,
        `Double-click the fill handle to auto-fill to the length of the adjacent column`,
        `Press Enter repeatedly`,
        `Use Find & Replace`,
      ],
      answer: 1,
      explain: `Double-clicking the fill handle fills down automatically to match the neighboring column's length — essential for large datasets.`,
    },
    {
      q: `You type "Jan" in a cell and drag the fill handle down. What does AutoFill produce?`,
      options: [`Jan, Jan, Jan...`, `Jan, Feb, Mar...`, `1, 2, 3...`, `An error`],
      answer: 1,
      explain: `Excel recognizes built-in series like months and weekdays, so dragging "Jan" continues Feb, Mar, and so on.`,
    },
    {
      q: `Which shortcut triggers Flash Fill, where Excel detects a pattern from your example?`,
      options: [`Ctrl + F`, `Ctrl + E`, `Ctrl + T`, `Ctrl + D`],
      answer: 1,
      explain: `Ctrl + E is Flash Fill. Type one or two examples of the output you want and Excel infers the pattern and fills the rest (as static values).`,
    },
    {
      q: `A cell shows ##### instead of a value. What does this mean?`,
      options: [
        `The formula has an error`,
        `The column is too narrow to display the number/date`,
        `The value is text`,
        `The cell is protected`,
      ],
      answer: 1,
      explain: `##### just means the column is too narrow. The value is fine — widen the column (double-click the right border of its header).`,
    },
    {
      q: `To keep the header row visible while scrolling a long dataset, you use:`,
      options: [`Hide Rows`, `Freeze Panes (Freeze Top Row)`, `Group`, `Merge Cells`],
      answer: 1,
      explain: `View > Freeze Panes > Freeze Top Row keeps row 1 on screen as you scroll down.`,
    },
    {
      q: `Importing a CSV, a product code "007" becomes "7". What prevents this?`,
      options: [
        `Format the cell as currency`,
        `Set that column's data type to Text during the Power Query import`,
        `Use a larger font`,
        `Nothing can prevent it`,
      ],
      answer: 1,
      explain: `Excel read the code as a number and dropped the leading zeros. Set the column type to Text in the Get & Transform (Power Query) import to preserve them.`,
    },
    {
      q: `In an Excel Table named Sales, what does the reference =SUM(Sales[Units]) use?`,
      options: [
        `A volatile reference`,
        `A structured reference to the Units column`,
        `An absolute reference`,
        `A 3-D reference`,
      ],
      answer: 1,
      explain: `Tables enable structured references like Sales[Units], which are self-documenting and automatically expand as the table grows.`,
    },
    {
      q: `You add a new row directly below an Excel Table. What happens?`,
      options: [
        `Nothing; you must resize the table manually`,
        `The table auto-expands to include the new row, extending formulas and formatting`,
        `The row is deleted`,
        `The workbook errors`,
      ],
      answer: 1,
      explain: `Tables auto-expand: typing a new adjacent row joins the table, and column formulas/formatting extend to it automatically.`,
    },
    {
      q: `What is the main advantage of importing via Data > Get & Transform rather than just opening a CSV?`,
      options: [
        `It is faster to click`,
        `It creates a refreshable connection and lets you set data types before loading`,
        `It converts the file to .xlsm`,
        `It removes all formatting`,
      ],
      answer: 1,
      explain: `A Power Query connection keeps a live link to the source (click Refresh to reload) and lets you control data types like leading zeros and dates during import.`,
    },
    {
      q: `Why are blank rows inside a data block a problem?`,
      options: [
        `They make the file larger`,
        `Features like sorting, filtering, and PivotTables treat them as the end of the data`,
        `They change the font`,
        `They are not a problem`,
      ],
      answer: 1,
      explain: `A blank row breaks the contiguous data region, so sort/filter/PivotTable operations may stop at the gap. Keep the table free of blank rows and columns.`,
    },
  ],

  // ───────────────────── 03 — Formulas & Cell References ────────────────────
  "03": [
    {
      q: `What does =2+3*4 evaluate to?`,
      options: [`20`, `14`, `24`, `9`],
      answer: 1,
      explain: `Excel follows standard precedence: multiplication before addition. 3*4=12, then +2 = 14. Use parentheses (2+3)*4 to force 20.`,
    },
    {
      q: `Which reference stays fixed when you copy a formula to other cells?`,
      options: [`G1`, `$G$1`, `G$1 only when copied right`, `None of these`],
      answer: 1,
      explain: `$G$1 is an absolute reference — the dollar signs lock both the column and row, so it does not shift when the formula is copied.`,
    },
    {
      q: `While editing a formula, pressing F4 on a reference does what?`,
      options: [
        `Deletes the reference`,
        `Cycles it through absolute/mixed/relative ($A$1 → A$1 → $A1 → A1)`,
        `Runs the formula`,
        `Inserts a function`,
      ],
      answer: 1,
      explain: `F4 toggles a reference through the four states, far faster than typing dollar signs by hand.`,
    },
    {
      q: `You copy =B2*C2 from D2 down to D3. What does D3 contain?`,
      options: [`=B2*C2`, `=B3*C3`, `=B2*C3`, `=D2*D3`],
      answer: 1,
      explain: `Plain references are relative, so copying down shifts the row numbers: D3 becomes =B3*C3. That is exactly what a per-row calculation needs.`,
    },
    {
      q: `Which operator raises a number to a power (exponent)?`,
      options: [`*`, `^`, `%`, `&`],
      answer: 1,
      explain: `^ is the exponent operator: =2^3 returns 8. (* is multiply, % is percent, & joins text.)`,
    },
    {
      q: `You want to "freeze" calculated results so they no longer change. What do you do?`,
      options: [
        `Delete the source cells`,
        `Copy the cells, then Paste Special > Values`,
        `Format them as text`,
        `Lock the cells`,
      ],
      answer: 1,
      explain: `Paste Special > Values replaces formulas with their last-calculated results, so the cells hold static numbers that will not recalculate.`,
    },
    {
      q: `A formula returns #DIV/0!. What is the typical cause?`,
      options: [
        `A misspelled function name`,
        `The denominator is zero or an empty cell`,
        `A deleted cell reference`,
        `Text used in math`,
      ],
      answer: 1,
      explain: `#DIV/0! means division by zero — the divisor cell is 0 or blank. Wrap with IFERROR to handle it gracefully.`,
    },
    {
      q: `An advantage of a named range (e.g. naming G1 "TaxRate") is that:`,
      options: [
        `It runs faster than any other reference`,
        `It reads like English and behaves as absolute (does not shift when copied)`,
        `It hides the cell`,
        `It converts the value to text`,
      ],
      answer: 1,
      explain: `=Price*TaxRate is readable, and names do not shift when copied, so they act like absolute references for constants and key ranges.`,
    },
    {
      q: `In the mixed reference $A1, what is locked?`,
      options: [`Both column and row`, `The column only`, `The row only`, `Nothing`],
      answer: 1,
      explain: `$A1 locks the column (A) but lets the row change. A$1 would lock the row but let the column change.`,
    },
    {
      q: `When a formula mixes operators and you want a specific part done first, the safest approach is to:`,
      options: [
        `Rely on memorized precedence`,
        `Wrap that part in parentheses ( )`,
        `Split it into multiple cells always`,
        `Add spaces around operators`,
      ],
      answer: 1,
      explain: `Parentheses are evaluated first and make intent obvious. Clear beats clever — they cost nothing.`,
    },
    {
      q: `What does the & operator do in a formula, e.g. ="Q"&1 ?`,
      options: [`Adds`, `Joins (concatenates) text, producing "Q1"`, `Compares`, `Raises to a power`],
      answer: 1,
      explain: `& concatenates values into a single text string. ="Q"&1 yields Q1.`,
    },
    {
      q: `A formula suddenly shows #REF!. What most likely happened?`,
      options: [
        `The column is too narrow`,
        `You deleted a cell, row, or column the formula referenced`,
        `You used a percent sign`,
        `The value is text`,
      ],
      answer: 1,
      explain: `#REF! means an invalid reference — usually because a cell the formula pointed to was deleted, leaving it with nothing to point at.`,
    },
  ],

  // ──────────────────────── 04 — Essential Functions ───────────────────────
  "04": [
    {
      q: `In =SUMIFS(...), which range comes FIRST in the argument list?`,
      options: [
        `The first criteria range`,
        `The sum range (the values to total)`,
        `The criteria value`,
        `It does not matter`,
      ],
      answer: 1,
      explain: `SUMIFS puts the sum_range first, then range/criteria pairs. (Note this differs from SUMIF, where the sum range comes last.)`,
    },
    {
      q: `What is the difference between COUNT and COUNTA?`,
      options: [
        `They are identical`,
        `COUNT counts numbers; COUNTA counts any non-empty cell (text or numbers)`,
        `COUNT counts text; COUNTA counts numbers`,
        `COUNTA counts blanks`,
      ],
      answer: 1,
      explain: `COUNT tallies only numeric cells; COUNTA tallies every non-empty cell. Comparing them reveals missing or non-numeric data.`,
    },
    {
      q: `Which formula counts how many values in D2:D100 exceed 100?`,
      options: [
        `=COUNT(D2:D100,100)`,
        `=COUNTIF(D2:D100,">100")`,
        `=SUMIF(D2:D100,100)`,
        `=COUNTA(D2:D100,">100")`,
      ],
      answer: 1,
      explain: `COUNTIF with the criteria ">100" (comparison in quotes) counts cells greater than 100.`,
    },
    {
      q: `Why might MEDIAN be more representative than AVERAGE for salary data?`,
      options: [
        `MEDIAN is always larger`,
        `MEDIAN resists outliers, while AVERAGE is pulled by a few extreme values`,
        `AVERAGE ignores blanks`,
        `They are always equal`,
      ],
      answer: 1,
      explain: `A few very high earners drag the AVERAGE up; the MEDIAN reports the true middle and is robust to such outliers.`,
    },
    {
      q: `Which keyboard shortcut inserts an AutoSum?`,
      options: [`Ctrl + S`, `Alt + =`, `Ctrl + =`, `Alt + S`],
      answer: 1,
      explain: `Alt + = inserts a SUM of the adjacent numbers. The AutoSum drop-down also offers Average, Count, Max, and Min.`,
    },
    {
      q: `What is the difference between =ROUND(A1,2) and just formatting a cell to 2 decimals?`,
      options: [
        `No difference`,
        `ROUND changes the stored value; formatting only changes how it is displayed`,
        `Formatting changes the value; ROUND only displays`,
        `Both delete decimals permanently`,
      ],
      answer: 1,
      explain: `ROUND actually changes the number used in further math. Formatting hides extra digits while full precision is still used in calculations.`,
    },
    {
      q: `=LARGE(range, 2) returns:`,
      options: [`The smallest value`, `The 2nd largest value`, `The average`, `The 2nd row`],
      answer: 1,
      explain: `LARGE(range, k) returns the k-th largest value. LARGE(range,1) is the max; LARGE(range,2) is the second largest — useful for Top-N lists.`,
    },
    {
      q: `Which function counts how many cells in a range are empty?`,
      options: [`COUNT`, `COUNTA`, `COUNTBLANK`, `COUNTIF`],
      answer: 2,
      explain: `COUNTBLANK counts empty cells — handy for finding missing data in a column.`,
    },
    {
      q: `What is the correct argument order for SUMIF?`,
      options: [
        `=SUMIF(sum_range, criteria, criteria_range)`,
        `=SUMIF(criteria_range, criteria, sum_range)`,
        `=SUMIF(criteria, sum_range, criteria_range)`,
        `=SUMIF(criteria_range, sum_range, criteria)`,
      ],
      answer: 1,
      explain: `SUMIF tests the criteria_range first, then the criteria, then the sum_range you add up. (If sum_range is omitted, it sums the criteria_range itself.)`,
    },
    {
      q: `To count values above whatever number is typed in cell H1, you write:`,
      options: [
        `=COUNTIF(E2:E100, ">H1")`,
        `=COUNTIF(E2:E100, ">"&H1)`,
        `=COUNTIF(E2:E100, >H1)`,
        `=COUNTIF(E2:E100, "H1")`,
      ],
      answer: 1,
      explain: `Concatenate the operator with the cell using &: ">"&H1 builds the criteria from H1's value, so it updates when H1 changes.`,
    },
    {
      q: `MEDIAN of a list returns:`,
      options: [
        `The most frequent value`,
        `The middle value when the data is sorted`,
        `The total`,
        `The largest value`,
      ],
      answer: 1,
      explain: `The median is the middle value of the sorted data (or the average of the two middle values), unaffected by extreme highs or lows.`,
    },
    {
      q: `How does Excel evaluate the nested formula =ROUND(AVERAGE(B2:B100), 2)?`,
      options: [
        `ROUND first, then AVERAGE`,
        `AVERAGE first (inner), then ROUND the result (outer)`,
        `Both at once`,
        `It errors`,
      ],
      answer: 1,
      explain: `Nested functions evaluate inside-out: AVERAGE computes first, and ROUND then cleans that result to 2 decimals.`,
    },
  ],

  // ──────────────────────────── 05 — Logical ───────────────────────────────
  "05": [
    {
      q: `What is the correct syntax of the IF function?`,
      options: [
        `=IF(value_if_true, logical_test, value_if_false)`,
        `=IF(logical_test, value_if_true, value_if_false)`,
        `=IF(logical_test, value_if_false, value_if_true)`,
        `=IF(value_if_true, value_if_false)`,
      ],
      answer: 1,
      explain: `IF tests a condition first, then returns the true result, then the false result: =IF(test, if_true, if_false).`,
    },
    {
      q: `When writing nested IFs for grade bands, in what order should you test?`,
      options: [
        `Lowest threshold first`,
        `Highest threshold first (the first true condition wins)`,
        `Order does not matter`,
        `Alphabetical`,
      ],
      answer: 1,
      explain: `Because the first true condition is returned, test from highest to lowest (>=90, then >=80, ...) so each band is reached correctly.`,
    },
    {
      q: `Inside an IF, when is AND(cond1, cond2) TRUE?`,
      options: [
        `When at least one condition is true`,
        `Only when ALL conditions are true`,
        `When no condition is true`,
        `Always`,
      ],
      answer: 1,
      explain: `AND is true only if every condition is true. OR is true if at least one is true.`,
    },
    {
      q: `What does IFERROR do?`,
      options: [
        `Causes an error deliberately`,
        `Returns a substitute value when the wrapped formula produces any error`,
        `Counts errors in a range`,
        `Highlights errors in red`,
      ],
      answer: 1,
      explain: `=IFERROR(formula, value_if_error) replaces any error (like #DIV/0! or #N/A) with a tidy value you choose.`,
    },
    {
      q: `How does IFNA differ from IFERROR?`,
      options: [
        `IFNA catches only #N/A; IFERROR catches every error type`,
        `They are identical`,
        `IFNA catches every error; IFERROR catches only #N/A`,
        `IFNA only works with numbers`,
      ],
      answer: 0,
      explain: `IFNA catches only #N/A (typical of lookups) and lets other errors surface, whereas IFERROR catches all errors. Use IFNA when you only mean lookup misses.`,
    },
    {
      q: `In =IF(D2>500, "Large", "Small"), why are Large and Small in quotes but D2*0.1 would not be?`,
      options: [
        `Quotes are optional everywhere`,
        `Text results must be quoted; numbers/cell references must not be`,
        `Numbers must be quoted; text must not be`,
        `Quotes make text bold`,
      ],
      answer: 1,
      explain: `Literal text results require double quotes ("Large"). Numbers, cell references, and calculations like D2*0.1 must NOT be quoted, or they would become text.`,
    },
    {
      q: `In the IFS function, what does a final TRUE, "F" pair represent?`,
      options: [
        `An error`,
        `The catch-all "else" case when no earlier condition matched`,
        `A comment`,
        `The first condition`,
      ],
      answer: 1,
      explain: `IFS has no built-in else, so a final condition of literal TRUE always matches, acting as the default/catch-all result.`,
    },
    {
      q: `Which function tests whether a cell is empty?`,
      options: [`ISNUMBER`, `ISBLANK`, `ISTEXT`, `ISERROR`],
      answer: 1,
      explain: `ISBLANK(A1) returns TRUE when A1 is empty — useful for data-quality flags like =IF(ISBLANK(A2),"Missing",A2).`,
    },
    {
      q: `Why is turning a continuous number (like Amount) into a category (like Tier) with IF useful before summarizing?`,
      options: [
        `It makes the file smaller`,
        `Categories can be counted and pivoted, while every distinct number cannot`,
        `It deletes outliers`,
        `It is required by Excel`,
      ],
      answer: 1,
      explain: `COUNTIF and PivotTables summarize by category. Bucketing numbers into tiers gives you groups to count and break down.`,
    },
    {
      q: `Which formula flags an order "VIP" only when it is over 200 AND from the North region?`,
      options: [
        `=IF(OR(E2>200, B2="North"), "VIP", "")`,
        `=IF(AND(E2>200, B2="North"), "VIP", "")`,
        `=IF(E2>200, B2="North", "VIP")`,
        `=AND(E2>200, B2="North")`,
      ],
      answer: 1,
      explain: `Use AND inside IF so both conditions must hold: =IF(AND(E2>200, B2="North"), "VIP", "").`,
    },
    {
      q: `A Boolean value in Excel is one of:`,
      options: [`0 or 1 only`, `TRUE or FALSE`, `Yes or No text`, `Any number`],
      answer: 1,
      explain: `Comparisons produce a Boolean — TRUE or FALSE. (Internally TRUE behaves as 1 and FALSE as 0 in arithmetic.)`,
    },
    {
      q: `Which function helps detect a number that is secretly stored as text?`,
      options: [`ISTEXT only`, `ISNUMBER`, `ISBLANK`, `COUNTA`],
      answer: 1,
      explain: `ISNUMBER returns TRUE only for real numbers. =ISNUMBER(A2) returning FALSE on a "number" reveals it is actually text.`,
    },
  ],

  // ───────────────────────────── 06 — Text ─────────────────────────────────
  "06": [
    {
      q: `What does the TRIM function remove?`,
      options: [
        `All spaces`,
        `Leading/trailing spaces and collapses multiple internal spaces to one`,
        `Numbers`,
        `Line breaks only`,
      ],
      answer: 1,
      explain: `TRIM strips leading and trailing spaces and reduces internal runs of spaces to single spaces — the most useful cleaning function.`,
    },
    {
      q: `=LEN("Excel") returns:`,
      options: [`4`, `5`, `6`, `1`],
      answer: 1,
      explain: `LEN counts characters. "Excel" is 5 characters. (Spaces also count, which makes LEN useful for spotting stray spaces.)`,
    },
    {
      q: `Which function extracts characters from the MIDDLE of a string?`,
      options: [`LEFT`, `RIGHT`, `MID`, `FIND`],
      answer: 2,
      explain: `MID(text, start, n) returns n characters beginning at a given position. LEFT/RIGHT take from the ends.`,
    },
    {
      q: `What does FIND("-", A2) return?`,
      options: [
        `TRUE if a dash exists`,
        `The position (number) of the first dash in A2`,
        `Everything before the dash`,
        `The dash character`,
      ],
      answer: 1,
      explain: `FIND returns the numeric position of the substring. Combine it with LEFT/MID to extract around a delimiter, e.g. =LEFT(A2, FIND("-",A2)-1).`,
    },
    {
      q: `=PROPER("john smith") returns:`,
      options: [`JOHN SMITH`, `john smith`, `John Smith`, `John smith`],
      answer: 2,
      explain: `PROPER capitalizes the first letter of each word: "John Smith". UPPER and LOWER force all upper/lower case.`,
    },
    {
      q: `Which function joins many strings with a separator and can skip blanks?`,
      options: [`CONCAT`, `TEXTJOIN`, `LEFT`, `SUBSTITUTE`],
      answer: 1,
      explain: `TEXTJOIN(delimiter, ignore_empty, ...) inserts a separator between items and can ignore empty cells — ideal for building combined keys or lists.`,
    },
    {
      q: `=SUBSTITUTE("North-Region", "-", " ") returns:`,
      options: [`North-Region`, `NorthRegion`, `North Region`, `Region-North`],
      answer: 2,
      explain: `SUBSTITUTE replaces matching text with new text: every "-" becomes a space, giving "North Region".`,
    },
    {
      q: `What does the TEXT function do, e.g. =TEXT(0.25, "0%") ?`,
      options: [
        `Converts text to a number`,
        `Formats a number/date as text using a format code (here "25%")`,
        `Removes spaces`,
        `Counts characters`,
      ],
      answer: 1,
      explain: `TEXT(value, format_code) turns a number or date into formatted text. =TEXT(0.25,"0%") yields the string "25%".`,
    },
    {
      q: `When a number is stuck as text (left-aligned, won't sum), which function converts it to a real number?`,
      options: [`TEXT`, `VALUE`, `TRIM`, `LEN`],
      answer: 1,
      explain: `VALUE("1234") returns the number 1234. (Multiplying by 1 or adding 0 also coerces text-numbers to numbers.)`,
    },
    {
      q: `What does CLEAN remove that TRIM does not?`,
      options: [
        `Spaces`,
        `Non-printable control characters (like line breaks and tabs)`,
        `Numbers`,
        `Capital letters`,
      ],
      answer: 1,
      explain: `CLEAN strips non-printable characters that sneak in from imports or copy-paste. The combo =TRIM(CLEAN(A2)) handles both spaces and control characters.`,
    },
    {
      q: `A key limitation of Flash Fill (Ctrl + E) is that:`,
      options: [
        `It only works on numbers`,
        `Its output is static values, not live formulas — it won't update if the source changes`,
        `It cannot split text`,
        `It deletes the source`,
      ],
      answer: 1,
      explain: `Flash Fill produces fixed values. For data that refreshes, use formulas instead so the output stays live.`,
    },
    {
      q: `=B2 & " " & C2 produces:`,
      options: [
        `The sum of B2 and C2`,
        `B2 and C2 joined with a space between them`,
        `An error`,
        `B2 only`,
      ],
      answer: 1,
      explain: `& concatenates. =B2&" "&C2 joins the two cells with a space — e.g. "John" and "Smith" become "John Smith".`,
    },
  ],

  // ─────────────────────────── 07 — Date & Time ────────────────────────────
  "07": [
    {
      q: `How does Excel store a date internally?`,
      options: [
        `As formatted text`,
        `As a serial number — the count of days since 1900-01-01`,
        `As three separate numbers`,
        `As a special date object`,
      ],
      answer: 1,
      explain: `Dates are serial numbers (days since 1 Jan 1900). The date you see is just a number format painted over that number — which is why dates can be added and subtracted.`,
    },
    {
      q: `What does =B2-A2 return when both cells contain real dates?`,
      options: [
        `An error`,
        `The number of days between the two dates`,
        `The later date`,
        `A percentage`,
      ],
      answer: 1,
      explain: `Because dates are numbers, subtracting them gives the count of days between — e.g. ship date minus order date = days to ship.`,
    },
    {
      q: `A "date" is left-aligned and refuses to do date math. What is it really?`,
      options: [`A number`, `Text, not a real date`, `A formula`, `A negative date`],
      answer: 1,
      explain: `Left-aligned dates that won't calculate are text. Fix with DATEVALUE, Text to Columns, or by setting the column type to Date on import.`,
    },
    {
      q: `Which statement about TODAY() is correct?`,
      options: [
        `It returns a fixed date that never changes`,
        `It is volatile and updates to the current date each time the sheet recalculates`,
        `It includes the time`,
        `It requires an argument`,
      ],
      answer: 1,
      explain: `TODAY() is volatile — it always reflects the current date. For a fixed timestamp instead, press Ctrl + ; to type today's date as a static value.`,
    },
    {
      q: `To group thousands of daily transactions by month, a useful step is to extract the month with:`,
      options: [
        `=LEFT(date, 2)`,
        `=MONTH(date) or =TEXT(date,"yyyy-mm")`,
        `=LEN(date)`,
        `=VALUE(date)`,
      ],
      answer: 1,
      explain: `MONTH extracts the month number; TEXT(date,"yyyy-mm") makes a sortable year-month key. Both turn raw dates into a dimension you can group by.`,
    },
    {
      q: `Which function returns the last day of a date's month?`,
      options: [`EDATE`, `EOMONTH`, `NETWORKDAYS`, `DAY`],
      answer: 1,
      explain: `EOMONTH(date, 0) returns the last day of that month; EOMONTH(date, 1) the last day of next month — better than adding 30 days.`,
    },
    {
      q: `Which function counts weekdays (excluding weekends) between two dates?`,
      options: [`DAYS`, `NETWORKDAYS`, `WEEKDAY`, `EDATE`],
      answer: 1,
      explain: `NETWORKDAYS(start, end, [holidays]) counts working days, excluding Saturdays, Sundays, and any holidays you list.`,
    },
    {
      q: `What does DATEVALUE("2026-06-29") do?`,
      options: [
        `Returns the day of week`,
        `Converts a text-date into a real date serial number`,
        `Adds days to a date`,
        `Returns the year`,
      ],
      answer: 1,
      explain: `DATEVALUE parses a text representation of a date into the underlying serial number so it can be used in calculations.`,
    },
    {
      q: `=EDATE(A2, 3) returns:`,
      options: [
        `The date 3 days after A2`,
        `The same day of the month, 3 months after A2`,
        `3 years after A2`,
        `The 3rd day of the month`,
      ],
      answer: 1,
      explain: `EDATE shifts by whole months, respecting calendar month lengths — ideal for billing cycles and subscriptions.`,
    },
    {
      q: `Why is =TEXT(A2, "yyyy-mm") a good grouping key?`,
      options: [
        `It is shorter`,
        `It keeps year and month and sorts chronologically as text`,
        `It removes the year`,
        `It converts to a number`,
      ],
      answer: 1,
      explain: `"yyyy-mm" keeps both year and month distinct (so Jan 2025 and Jan 2026 don't merge) and sorts correctly both chronologically and alphabetically.`,
    },
    {
      q: `In Excel's time system, what does the value 0.5 represent?`,
      options: [`Half a day = noon`, `30 minutes`, `Midnight`, `Half a year`],
      answer: 0,
      explain: `Times are the fractional part of a day: 0.5 = noon, 0.25 = 6:00 AM, 0.75 = 6:00 PM.`,
    },
    {
      q: `To get someone's age in whole years, the most reliable function is:`,
      options: [
        `=(TODAY()-birthdate)/365`,
        `=DATEDIF(birthdate, TODAY(), "Y")`,
        `=YEAR(TODAY())`,
        `=NETWORKDAYS(birthdate, TODAY())`,
      ],
      answer: 1,
      explain: `DATEDIF(start, end, "Y") returns complete years, correctly handling leap years — unlike dividing day differences by 365.`,
    },
  ],

  // ───────────────────────── 08 — Lookup & Reference ───────────────────────
  "08": [
    {
      q: `In database terms, an Excel lookup is most like:`,
      options: [`A sort`, `A join — combining two tables by matching a key`, `A filter`, `A pivot`],
      answer: 1,
      explain: `A lookup pulls related data from one table into another by matching a key, exactly like a database join.`,
    },
    {
      q: `A key advantage of XLOOKUP over VLOOKUP is that XLOOKUP:`,
      options: [
        `Defaults to approximate match`,
        `Can return values to the LEFT of the key and defaults to exact match`,
        `Is slower but simpler`,
        `Requires a column index number`,
      ],
      answer: 1,
      explain: `XLOOKUP takes separate lookup and return arrays (so the answer can be on either side), defaults to exact match, and has a built-in if_not_found argument.`,
    },
    {
      q: `For VLOOKUP to work, the lookup key must be:`,
      options: [
        `In the rightmost column of the table`,
        `In the leftmost column of the table_array`,
        `Sorted descending`,
        `Formatted as text`,
      ],
      answer: 1,
      explain: `VLOOKUP searches the first (leftmost) column of the table and can only return values to the right of it — a core limitation.`,
    },
    {
      q: `What should the 4th argument of VLOOKUP almost always be?`,
      options: [`TRUE`, `FALSE (exact match)`, `0 then TRUE`, `Omitted`],
      answer: 1,
      explain: `FALSE forces an exact match. Omitting it defaults to TRUE (approximate), which returns wrong values on unsorted data — a classic trap.`,
    },
    {
      q: `Why does INDEX+MATCH survive inserting columns when VLOOKUP often breaks?`,
      options: [
        `It is faster`,
        `It references columns directly instead of a hard-coded column index number`,
        `It sorts automatically`,
        `It ignores errors`,
      ],
      answer: 1,
      explain: `VLOOKUP's col_index_num is a fixed number that points at the wrong column once you insert one. INDEX+MATCH references the actual columns, so it keeps working.`,
    },
    {
      q: `What does MATCH(value, range, 0) return?`,
      options: [
        `The matched value itself`,
        `The position (row number) of the value within the range`,
        `TRUE or FALSE`,
        `The whole row`,
      ],
      answer: 1,
      explain: `MATCH returns the position of the value (0 = exact match). INDEX then fetches the item at that position: =INDEX(return, MATCH(...)).`,
    },
    {
      q: `For an approximate-match lookup (assigning a tier/band from a number), the lookup table must be:`,
      options: [
        `Sorted descending`,
        `Sorted ascending by the lower bound of each band`,
        `Unsorted`,
        `Formatted as a Table`,
      ],
      answer: 1,
      explain: `Approximate match (VLOOKUP TRUE, or XLOOKUP match_mode -1) requires the breakpoints sorted ascending, or it returns nonsense.`,
    },
    {
      q: `Which XLOOKUP argument lets you return a friendly message instead of #N/A?`,
      options: [
        `match_mode`,
        `if_not_found (the 4th argument)`,
        `search_mode`,
        `return_array`,
      ],
      answer: 1,
      explain: `XLOOKUP's optional if_not_found argument substitutes your text (e.g. "Not found") when there is no match, so you don't need a wrapping IFERROR.`,
    },
    {
      q: `Why is VLOOKUP's col_index_num considered fragile?`,
      options: [
        `It is case-sensitive`,
        `It is a hard-coded number that silently points at the wrong column if columns are inserted/moved`,
        `It only accepts text`,
        `It cannot exceed 10`,
      ],
      answer: 1,
      explain: `Because the column is identified by a fixed position number, restructuring the source table breaks the result without any error message.`,
    },
    {
      q: `Which dynamic-array function returns a list of the distinct values in a range?`,
      options: [`FILTER`, `UNIQUE`, `SORT`, `MATCH`],
      answer: 1,
      explain: `UNIQUE(range) spills the distinct values — perfect for building a clean category list or feeding a drop-down.`,
    },
    {
      q: `HLOOKUP differs from VLOOKUP in that it:`,
      options: [
        `Searches the top row horizontally instead of the first column`,
        `Is always exact match`,
        `Returns multiple values`,
        `Works only on Tables`,
      ],
      answer: 0,
      explain: `HLOOKUP scans the top row (horizontal) rather than the leftmost column. It is rarely needed — restructuring data to vertical is usually better.`,
    },
    {
      q: `=INDEX(Products[Name], 2) returns:`,
      options: [
        `The position of the 2nd name`,
        `The 2nd value in the Name column`,
        `The whole Products table`,
        `The header "Name"`,
      ],
      answer: 1,
      explain: `INDEX(array, n) returns the value at position n. With MATCH supplying the position, INDEX+MATCH becomes a flexible lookup.`,
    },
  ],

  // ──────────────────── 09 — Data Cleaning & Validation ────────────────────
  "09": [
    {
      q: `Before cleaning a dataset, the most important first habit is to:`,
      options: [
        `Sort it`,
        `Work on a copy, leaving the raw data untouched`,
        `Delete duplicates immediately`,
        `Convert it to a chart`,
      ],
      answer: 1,
      explain: `Always clean on a copy. Steps like Remove Duplicates are destructive, and you will often need the original raw data again.`,
    },
    {
      q: `Which combination is the standard one-two punch for imported text?`,
      options: [`=UPPER(LOWER(A2))`, `=TRIM(CLEAN(A2))`, `=LEN(VALUE(A2))`, `=LEFT(RIGHT(A2))`],
      answer: 1,
      explain: `TRIM removes stray spaces and CLEAN removes non-printable characters. Together they fix the most common import junk.`,
    },
    {
      q: `A column of numbers won't SUM and the values hug the left edge with a small green triangle. The problem is:`,
      options: [
        `The numbers are negative`,
        `They are stored as text, not numbers`,
        `The column is too narrow`,
        `They are dates`,
      ],
      answer: 1,
      explain: `Left-aligned numbers flagged "Number Stored as Text" are text. Fix via Convert to Number, Text to Columns, or VALUE().`,
    },
    {
      q: `When using Data > Remove Duplicates, the most important decision is:`,
      options: [
        `The font color`,
        `Which columns define a duplicate`,
        `The sort order`,
        `The file format`,
      ],
      answer: 1,
      explain: `Ticking only Email removes rows repeating an email; ticking all columns removes only fully identical rows. The chosen key columns determine what gets deleted.`,
    },
    {
      q: `The best way to stop users entering inconsistent categories like North/north/Norht is to:`,
      options: [
        `Lock the cells`,
        `Add a Data Validation drop-down List of allowed values`,
        `Color the cells`,
        `Hide the column`,
      ],
      answer: 1,
      explain: `Data Validation > List restricts a column to allowed values via a drop-down, eliminating spelling and case variants at the source.`,
    },
    {
      q: `You apply a new validation rule to a column that already contains bad values. What happens, and what helps?`,
      options: [
        `Existing bad values are auto-corrected`,
        `Validation only checks NEW entries; use Circle Invalid Data to flag existing ones`,
        `The whole column is cleared`,
        `Nothing can be done`,
      ],
      answer: 1,
      explain: `Validation guards future entries only. To audit pre-existing data against the rule, use Data Validation > Circle Invalid Data.`,
    },
    {
      q: `Why must you standardize case (North vs NORTH) before grouping or pivoting?`,
      options: [
        `It looks nicer`,
        `PivotTables and COUNTIF treat different cases as different categories, splitting the data`,
        `It saves disk space`,
        `It is required to save the file`,
      ],
      answer: 1,
      explain: `Unstandardized case creates multiple groups for what should be one category, distorting counts and totals. Use UPPER/LOWER/PROPER to unify first.`,
    },
    {
      q: `Which built-in tool re-parses a column, fixing text-numbers/text-dates and optionally splitting by a delimiter?`,
      options: [`Flash Fill`, `Text to Columns`, `Freeze Panes`, `Conditional Formatting`],
      answer: 1,
      explain: `Data > Text to Columns is a Swiss-army knife: it converts text-numbers and text-dates to real values and can split delimited data.`,
    },
    {
      q: `To select every empty cell in a range at once, you use:`,
      options: [
        `Ctrl + A`,
        `Go To Special (F5 > Special) > Blanks`,
        `Filter > Blanks`,
        `Sort`,
      ],
      answer: 1,
      explain: `F5 > Special > Blanks selects all empty cells, after which you can fill them all with one value using Ctrl + Enter.`,
    },
    {
      q: `Text pasted from a website won't TRIM clean because of a stray space. The likely culprit is:`,
      options: [
        `A tab character`,
        `A non-breaking space, CHAR(160)`,
        `A null byte`,
        `A double quote`,
      ],
      answer: 1,
      explain: `Web copies often contain non-breaking spaces (CHAR(160)) that TRIM ignores. Replace them first: =SUBSTITUTE(A2, CHAR(160), " ") then TRIM.`,
    },
    {
      q: `For cleanups you must repeat every month, the professional approach is to:`,
      options: [
        `Re-do them by hand each time`,
        `Record the steps in Power Query so they re-apply automatically on Refresh`,
        `Write a long nested formula`,
        `Avoid cleaning`,
      ],
      answer: 1,
      explain: `Power Query records each transformation step and replays it on the next file with one Refresh — clean once, refresh forever.`,
    },
    {
      q: `Which tool bulk-fixes a known typo across a sheet, e.g. changing every "Norht" to "North"?`,
      options: [`Find & Replace (Ctrl + H)`, `AutoSum`, `Freeze Panes`, `Goal Seek`],
      answer: 0,
      explain: `Find & Replace (Ctrl + H) swaps known text across the sheet. Use "Match entire cell contents" to avoid partial-match accidents.`,
    },
  ],

  // ───────────────── 10 — Sorting, Filtering & Conditional Fmt ─────────────
  "10": [
    {
      q: `What does filtering a table do to rows that don't match?`,
      options: [
        `Deletes them permanently`,
        `Hides them temporarily (they are not deleted)`,
        `Moves them to a new sheet`,
        `Colors them red`,
      ],
      answer: 1,
      explain: `Filtering only hides non-matching rows; the data is all still there and reappears when you clear the filter.`,
    },
    {
      q: `To sort by Region, then by Revenue within each region, you use:`,
      options: [
        `Two separate A-Z clicks`,
        `Data > Sort with multiple levels (a primary key and a "Then by")`,
        `A filter`,
        `Conditional formatting`,
      ],
      answer: 1,
      explain: `The Sort dialog lets you add levels: the first is the primary sort, each "Then by" breaks ties within it.`,
    },
    {
      q: `Which shortcut toggles filter drop-downs on a data range?`,
      options: [`Ctrl + T`, `Ctrl + Shift + L`, `Ctrl + F`, `Alt + =`],
      answer: 1,
      explain: `Ctrl + Shift + L turns filters on or off, adding drop-down arrows to each header.`,
    },
    {
      q: `To highlight an ENTIRE ROW when column F equals "Overdue", the conditional-formatting formula is:`,
      options: [
        `=F2="Overdue"`,
        `=$F2="Overdue"`,
        `=F$2="Overdue"`,
        `=$F$2="Overdue"`,
      ],
      answer: 1,
      explain: `Lock the column but not the row: =$F2="Overdue". The $ on F makes every cell in the row test column F, while the free row lets the rule apply down the data.`,
    },
    {
      q: `Which conditional format places a mini in-cell bar to compare magnitudes across rows?`,
      options: [`Color Scales`, `Data Bars`, `Icon Sets`, `Top 10`],
      answer: 1,
      explain: `Data Bars draw a proportional bar inside each cell — a quick visual comparison of values without leaving the table.`,
    },
    {
      q: `A Color Scale conditional format is best described as:`,
      options: [
        `A single highlight color`,
        `A heatmap — a color gradient across the range of values`,
        `An in-cell bar chart`,
        `A filter`,
      ],
      answer: 1,
      explain: `Color Scales shade cells along a gradient (e.g. green-yellow-red), creating a heatmap that reveals hot and cold values at a glance.`,
    },
    {
      q: `Which feature instantly isolates the five biggest values in a column?`,
      options: [
        `Sort A-Z`,
        `Number Filters > Top 10 (set to Top 5 Items)`,
        `Remove Duplicates`,
        `Freeze Panes`,
      ],
      answer: 1,
      explain: `The Top 10 filter (despite the name) can show the top N items or percent — set it to Top 5 Items to see the five largest.`,
    },
    {
      q: `What is a Slicer?`,
      options: [
        `A formula`,
        `A set of clickable filter buttons for a Table or PivotTable`,
        `A chart type`,
        `A data type`,
      ],
      answer: 1,
      explain: `A Slicer provides on-screen buttons to filter a Table/PivotTable. One slicer can control multiple PivotTables/charts — the basis of an interactive dashboard.`,
    },
    {
      q: `A risk when you select only one column and sort it is that:`,
      options: [
        `Nothing happens`,
        `That column is sorted independently, scrambling its alignment with the other columns`,
        `The file corrupts`,
        `It sorts the wrong direction`,
      ],
      answer: 1,
      explain: `Sorting a lone column rearranges only it, breaking the row relationships. Click a single cell (or use a Table) so Excel expands the sort to all columns.`,
    },
    {
      q: `Since sorting permanently reorders rows, how can you restore the original order later?`,
      options: [
        `Press Undo only`,
        `Add an index column (1,2,3...) first, then sort on it to restore`,
        `You cannot`,
        `Re-import the file`,
      ],
      answer: 1,
      explain: `An index column preserves the original sequence; sorting ascending on it returns the data to its starting order.`,
    },
    {
      q: `Icon Sets assign an icon to each cell based on:`,
      options: [
        `The cell's font`,
        `Which value band the number falls into`,
        `Alphabetical order`,
        `The column width`,
      ],
      answer: 1,
      explain: `Icon Sets (traffic lights, arrows, flags) map values to bands — e.g. up/flat/down arrows for change versus a previous period.`,
    },
    {
      q: `Which conditional-formatting rule splits a column around its mean?`,
      options: [`Duplicate Values`, `Above Average / Below Average`, `Data Bars`, `Text That Contains`],
      answer: 1,
      explain: `The Above/Below Average rules highlight cells on either side of the range's average — a fast way to see over- and under-performers.`,
    },
  ],

  // ─────────────────────── 11 — PivotTables & PivotCharts ──────────────────
  "11": [
    {
      q: `What is the defining strength of a PivotTable?`,
      options: [
        `It writes formulas for you to edit`,
        `It summarizes large data into totals/averages/counts by dragging fields — no formulas`,
        `It cleans data automatically`,
        `It creates charts only`,
      ],
      answer: 1,
      explain: `PivotTables let you cross-tabulate thousands of rows by dragging fields into zones, producing instant summaries with no formulas.`,
    },
    {
      q: `What goes in the VALUES zone of a PivotTable?`,
      options: [
        `The category labels`,
        `The numbers being aggregated (summed, averaged, counted)`,
        `The filter`,
        `The chart`,
      ],
      answer: 1,
      explain: `Values holds the numeric field to aggregate. Rows/Columns hold categories; Filters holds a master drop-down over the whole report.`,
    },
    {
      q: `Your source data changed but the PivotTable still shows old numbers. Why?`,
      options: [
        `PivotTables update live`,
        `A PivotTable is a snapshot — you must Refresh it`,
        `The data is corrupt`,
        `You must rebuild it`,
      ],
      answer: 1,
      explain: `PivotTables do not auto-update. Right-click > Refresh (or Alt + F5) to pull in source changes.`,
    },
    {
      q: `Why is it best to build a PivotTable on an Excel Table rather than a fixed range?`,
      options: [
        `Tables are faster to type`,
        `New rows added to a Table are included automatically on Refresh`,
        `Ranges cannot be pivoted`,
        `It changes the colors`,
      ],
      answer: 1,
      explain: `A Table source auto-includes new rows when you Refresh. A fixed range (A1:F50) silently excludes data added beyond it.`,
    },
    {
      q: `Which PivotTable feature instantly shows each region as a share of total sales?`,
      options: [
        `Group`,
        `Value Field Settings > Show Values As > % of Grand Total`,
        `Sort`,
        `Slicer`,
      ],
      answer: 1,
      explain: `Show Values As > % of Grand Total recomputes each cell as a percentage of the whole — contribution analysis with two clicks.`,
    },
    {
      q: `To turn daily dates into a monthly trend inside a PivotTable, you:`,
      options: [
        `Add a helper column only`,
        `Right-click a date in the report and choose Group > Months`,
        `Sort the dates`,
        `Filter the dates`,
      ],
      answer: 1,
      explain: `PivotTable date grouping rolls daily transactions up to months/quarters/years on the fly, with no helper columns needed.`,
    },
    {
      q: `A numeric field shows as "Count of Amount" instead of Sum. The most likely cause is:`,
      options: [
        `A setting you must always change`,
        `The column contains some text, so Excel treats it as non-numeric`,
        `Too many rows`,
        `A missing header`,
      ],
      answer: 1,
      explain: `Excel counts text fields by default. A numeric column defaulting to Count usually hides a stray text value — clean the source and refresh.`,
    },
    {
      q: `A PivotChart is best described as:`,
      options: [
        `A static picture of a PivotTable`,
        `A chart wired to a PivotTable that updates as the pivot changes`,
        `A separate unrelated chart`,
        `A type of slicer`,
      ],
      answer: 1,
      explain: `A PivotChart is linked to its PivotTable: changing the pivot updates the chart, and its field buttons/slicers filter both.`,
    },
    {
      q: `One Slicer can be connected to:`,
      options: [
        `Only one PivotTable`,
        `Multiple PivotTables/PivotCharts at once (via Report Connections)`,
        `Only charts`,
        `Only the active cell`,
      ],
      answer: 1,
      explain: `Report Connections let a single slicer drive several PivotTables and PivotCharts together — the foundation of an interactive dashboard.`,
    },
    {
      q: `To show average order value instead of total, you change the value field's:`,
      options: [
        `Number format`,
        `Summarize Values By (to Average) in Value Field Settings`,
        `Source range`,
        `Slicer`,
      ],
      answer: 1,
      explain: `Value Field Settings > Summarize Values By lets you switch between Sum, Average, Count, Max, Min, and more.`,
    },
    {
      q: `Most PivotTable "bugs" are actually:`,
      options: [
        `Software errors`,
        `Source-data problems (blank/merged cells, mixed types, inconsistent categories)`,
        `Chart issues`,
        `Printing issues`,
      ],
      answer: 1,
      explain: `Blank rows, merged cells, mixed data types, and inconsistent categories break pivots. Clean and standardize the source first.`,
    },
    {
      q: `Which value summary counts the number of UNIQUE customers (not total rows)?`,
      options: [
        `Count`,
        `Distinct Count (requires adding the data to the Data Model)`,
        `Sum`,
        `Max`,
      ],
      answer: 1,
      explain: `Distinct Count tallies unique values and is available when you tick "Add this data to the Data Model" while creating the PivotTable.`,
    },
  ],

  // ─────────────────── 12 — Charts, Dashboards & What-If ────────────────────
  "12": [
    {
      q: `Which chart type best shows a trend over time?`,
      options: [`Pie`, `Line`, `Scatter`, `Doughnut`],
      answer: 1,
      explain: `A line chart is the standard for trends over time. Columns/bars compare categories; scatter shows relationships between two numeric variables.`,
    },
    {
      q: `Pie charts should generally be avoided when:`,
      options: [
        `There are only 2 slices`,
        `There are many slices (more than ~4), since angles are hard to compare`,
        `Showing parts of a whole`,
        `Using bright colors`,
      ],
      answer: 1,
      explain: `People compare angles poorly, so pies with many slices mislead. A bar chart almost always communicates category shares better.`,
    },
    {
      q: `To show the relationship between advertising spend and sales, the right chart is:`,
      options: [`Line`, `Scatter (XY)`, `Pie`, `Area`],
      answer: 1,
      explain: `A scatter (XY) plot shows correlation between two numeric variables. A line chart is only appropriate when the x-axis is time/ordered.`,
    },
    {
      q: `Goal Seek is used when you:`,
      options: [
        `Optimize many inputs with constraints`,
        `Know the target result and need the single input that produces it`,
        `Compare named scenarios`,
        `Build a forecast`,
      ],
      answer: 1,
      explain: `Goal Seek adjusts ONE input cell until a formula reaches ONE target value — e.g. find the units needed to break even.`,
    },
    {
      q: `A Data Table (What-If Analysis) is used to:`,
      options: [
        `Clean data`,
        `See a formula's result across a range of input values (sensitivity analysis)`,
        `Join two tables`,
        `Remove duplicates`,
      ],
      answer: 1,
      explain: `A Data Table recalculates a formula for many input values (one- or two-variable) and lays the results in a grid, showing sensitivity to each input.`,
    },
    {
      q: `Which tool stores complete sets of input values as named cases like Best/Expected/Worst?`,
      options: [`Goal Seek`, `Scenario Manager`, `Solver`, `Forecast Sheet`],
      answer: 1,
      explain: `Scenario Manager saves named input sets and can produce a summary comparing their outcomes side by side — ideal for budgeting.`,
    },
    {
      q: `For "maximize profit subject to a budget and capacity limits", the right tool is:`,
      options: [`Goal Seek`, `Solver`, `Data Table`, `Conditional Formatting`],
      answer: 1,
      explain: `Solver optimizes a target by adjusting many inputs at once while respecting constraints — Goal Seek's heavyweight sibling for optimization problems.`,
    },
    {
      q: `Why should a column/bar chart's value axis usually start at zero?`,
      options: [
        `To save space`,
        `A truncated axis exaggerates differences and misleads the reader`,
        `It is required by Excel`,
        `To fit more bars`,
      ],
      answer: 1,
      explain: `Starting the axis above zero visually inflates small differences. A zero baseline keeps bar comparisons honest.`,
    },
    {
      q: `To show revenue (large dollars) and profit margin (%) together, use a:`,
      options: [`Pie chart`, `Combo chart (e.g. columns + a line on a secondary axis)`, `Scatter`, `Histogram`],
      answer: 1,
      explain: `A combo chart plots two series of different scales together — e.g. revenue columns with a margin-percent line on a secondary axis.`,
    },
    {
      q: `What are Sparklines?`,
      options: [
        `Animated charts`,
        `Tiny charts drawn inside a single cell to show a trend per row`,
        `A type of slicer`,
        `Chart titles`,
      ],
      answer: 1,
      explain: `Sparklines (Line, Column, Win/Loss) are mini in-cell charts, great for showing each row's trend compactly next to the data.`,
    },
    {
      q: `A clean dashboard design keeps:`,
      options: [
        `Everything on one sheet with raw data visible`,
        `Raw data, pivots/calculations, and visuals on separate sheets`,
        `As many charts as possible`,
        `Only tables, no charts`,
      ],
      answer: 1,
      explain: `Separate the layers (Data / Pivots / Dashboard), drive visuals with shared slicers, lead with the key KPI, and focus on a few questions.`,
    },
    {
      q: `Excel's Forecast Sheet generates a projection using:`,
      options: [
        `A pie chart`,
        `Exponential smoothing on a date/value time series, with confidence bounds`,
        `Manual guesses`,
        `Conditional formatting`,
      ],
      answer: 1,
      explain: `Data > Forecast Sheet builds a forecast chart with confidence intervals from a time series — but remember any forecast assumes the past pattern continues.`,
    },
  ],

  // ═══════════════════ MIXED 1 — Foundations (topics 01–06) ════════════════
  "mixed-1": [
    {
      q: `A formula must begin with which character?`,
      options: [`+`, `=`, `#`, `:`],
      answer: 1,
      explain: `All formulas start with = so Excel computes them instead of storing literal text.`,
    },
    {
      q: `A number appears left-aligned in its cell. What is wrong?`,
      options: [`It is too big`, `It is being treated as text and won't calculate`, `It is a date`, `Nothing`],
      answer: 1,
      explain: `Numbers align right by default; a left-aligned number is text and is excluded from math like SUM.`,
    },
    {
      q: `Which shortcut converts a range into an Excel Table?`,
      options: [`Ctrl + T`, `Ctrl + E`, `Ctrl + L only`, `Alt + =`],
      answer: 0,
      explain: `Ctrl + T creates a Table with filters, a name, structured references, and auto-expansion.`,
    },
    {
      q: `Copying =A1*$B$1 down a column, which part stays fixed?`,
      options: [`A1`, `$B$1`, `Both`, `Neither`],
      answer: 1,
      explain: `$B$1 is absolute and stays locked; A1 is relative and shifts to A2, A3, ... as you copy down.`,
    },
    {
      q: `What does =2+3*4 return?`,
      options: [`20`, `14`, `9`, `24`],
      answer: 1,
      explain: `Multiplication before addition: 3*4=12, +2 = 14.`,
    },
    {
      q: `Which function totals values only where a condition is met?`,
      options: [`SUM`, `SUMIF`, `COUNT`, `AVERAGE`],
      answer: 1,
      explain: `SUMIF (and SUMIFS for multiple conditions) sums values matching the criteria you specify.`,
    },
    {
      q: `COUNTA counts:`,
      options: [`Only numbers`, `Any non-empty cell (text or numbers)`, `Only blanks`, `Only text`],
      answer: 1,
      explain: `COUNTA counts every non-empty cell; COUNT counts only numbers; COUNTBLANK counts empties.`,
    },
    {
      q: `=IF(B2>=60, "Pass", "Fail") returns "Pass" when:`,
      options: [`B2 is below 60`, `B2 is 60 or more`, `B2 is text`, `B2 is blank`],
      answer: 1,
      explain: `The test B2>=60 is TRUE for 60 and above, returning the first result, "Pass".`,
    },
    {
      q: `Which function strips leading/trailing spaces from text?`,
      options: [`CLEAN`, `TRIM`, `LEFT`, `LEN`],
      answer: 1,
      explain: `TRIM removes leading/trailing spaces and collapses internal doubles — essential before matching or grouping.`,
    },
    {
      q: `=PROPER("john smith") gives:`,
      options: [`JOHN SMITH`, `John Smith`, `john smith`, `John smith`],
      answer: 1,
      explain: `PROPER capitalizes the first letter of each word.`,
    },
    {
      q: `Which keyboard shortcut performs AutoSum?`,
      options: [`Alt + =`, `Ctrl + S`, `Ctrl + A`, `Alt + S`],
      answer: 0,
      explain: `Alt + = inserts a SUM of the adjacent numbers above or to the left.`,
    },
    {
      q: `##### in a cell means:`,
      options: [`A formula error`, `The column is too narrow`, `The value is text`, `A circular reference`],
      answer: 1,
      explain: `##### just means the column can't display the value's width — widen it. The value itself is fine.`,
    },
    {
      q: `Pressing F4 while editing a reference:`,
      options: [`Deletes it`, `Toggles absolute/mixed/relative ($ signs)`, `Runs the formula`, `Opens help`],
      answer: 1,
      explain: `F4 cycles a reference through $A$1, A$1, $A1, A1.`,
    },
    {
      q: `MEDIAN is preferred over AVERAGE when data:`,
      options: [`Has no outliers`, `Contains extreme outliers`, `Is all text`, `Is sorted`],
      answer: 1,
      explain: `MEDIAN resists outliers; AVERAGE is pulled toward extreme values.`,
    },
    {
      q: `To force a column to only accept values from an allowed list, use:`,
      options: [`Conditional Formatting`, `Data Validation (List)`, `Freeze Panes`, `Sort`],
      answer: 1,
      explain: `Data Validation > List gives a drop-down of allowed values, preventing inconsistent entries.`,
    },
    {
      q: `=COUNTIF(C2:C100, "North") counts:`,
      options: [`Cells containing North`, `Cells over North`, `Blank cells`, `All cells`],
      answer: 0,
      explain: `COUNTIF counts cells matching the criteria — here, how many equal "North".`,
    },
    {
      q: `The fastest way to total a column with the keyboard, with the cell below it selected, is:`,
      options: [`Type each number`, `Alt + =`, `Ctrl + T`, `Ctrl + Shift + L`],
      answer: 1,
      explain: `Alt + = (AutoSum) guesses the range above and writes the SUM.`,
    },
    {
      q: `Which combination cleans both spaces and non-printable characters from imported text?`,
      options: [`=TRIM(CLEAN(A2))`, `=UPPER(A2)`, `=LEN(A2)`, `=VALUE(A2)`],
      answer: 0,
      explain: `TRIM handles spaces and CLEAN handles control characters — the standard import cleanup.`,
    },
    {
      q: `A best practice for analytics workbooks is to:`,
      options: [
        `Keep raw data and reports mixed together`,
        `Separate raw data from calculations/reports on different sheets`,
        `Never use multiple sheets`,
        `Delete the source after analysis`,
      ],
      answer: 1,
      explain: `Keep untouched raw data on its own sheet and build analysis elsewhere so you never overwrite the source.`,
    },
    {
      q: `Which operator joins two pieces of text?`,
      options: [`+`, `&`, `*`, `^`],
      answer: 1,
      explain: `& concatenates text: =B2&" "&C2 joins with a space.`,
    },
  ],

  // ════════════ MIXED 2 — Functions & Analysis (topics 04–09) ══════════════
  "mixed-2": [
    {
      q: `In =SUMIFS(...), the sum range is placed:`,
      options: [`Last`, `First`, `In the middle`, `It varies`],
      answer: 1,
      explain: `SUMIFS lists the sum_range first, then range/criteria pairs (unlike SUMIF, where it comes last).`,
    },
    {
      q: `Which is the modern, most robust lookup function (Excel 365/2021)?`,
      options: [`VLOOKUP`, `XLOOKUP`, `HLOOKUP`, `LOOKUP`],
      answer: 1,
      explain: `XLOOKUP defaults to exact match, can return values on either side of the key, and has built-in if_not_found handling.`,
    },
    {
      q: `For VLOOKUP's last argument, you should almost always use:`,
      options: [`TRUE`, `FALSE (exact match)`, `1`, `Omit it`],
      answer: 1,
      explain: `FALSE forces an exact match. The default (TRUE/approximate) returns wrong results on unsorted data.`,
    },
    {
      q: `Why does INDEX+MATCH survive inserting a column when VLOOKUP may not?`,
      options: [
        `It is faster`,
        `It references columns directly rather than by a hard-coded index number`,
        `It auto-sorts`,
        `It ignores errors`,
      ],
      answer: 1,
      explain: `VLOOKUP's fixed col_index_num points at the wrong column after an insert; INDEX+MATCH references actual columns and keeps working.`,
    },
    {
      q: `To return a friendly message instead of #N/A from a lookup, the cleanest option is:`,
      options: [
        `Ignore it`,
        `XLOOKUP's if_not_found argument (or IFNA around the formula)`,
        `Format the cell`,
        `Delete the row`,
      ],
      answer: 1,
      explain: `XLOOKUP has a built-in if_not_found; for other lookups, IFNA catches the #N/A specifically.`,
    },
    {
      q: `Approximate-match lookups (assigning bands from a number) require the lookup table to be:`,
      options: [`Unsorted`, `Sorted ascending by lower bound`, `Sorted descending`, `Formatted as currency`],
      answer: 1,
      explain: `Approximate match needs breakpoints sorted ascending, or it returns incorrect bands.`,
    },
    {
      q: `Dates in Excel are stored as:`,
      options: [`Text`, `Serial numbers (days since 1900-01-01)`, `Images`, `Three numbers`],
      answer: 1,
      explain: `A date is a serial number formatted to look like a date, which is why subtraction and sorting work.`,
    },
    {
      q: `=B2-A2 with two real dates returns:`,
      options: [`An error`, `The number of days between them`, `The later date`, `A percentage`],
      answer: 1,
      explain: `Subtracting date serial numbers yields the day count between them.`,
    },
    {
      q: `Which function returns the last day of a date's month?`,
      options: [`EDATE`, `EOMONTH`, `DAY`, `NETWORKDAYS`],
      answer: 1,
      explain: `EOMONTH(date, 0) returns month-end; offsets like 1 give later months.`,
    },
    {
      q: `=IFERROR(VLOOKUP(...), "Not found") does what?`,
      options: [
        `Always returns Not found`,
        `Returns the lookup result, or "Not found" if it errors`,
        `Counts errors`,
        `Deletes the formula`,
      ],
      answer: 1,
      explain: `IFERROR substitutes a tidy value only when the wrapped formula errors; otherwise it returns the normal result.`,
    },
    {
      q: `A nested IF should test thresholds in what order?`,
      options: [`Lowest first`, `Highest first`, `Random`, `Alphabetical`],
      answer: 1,
      explain: `The first true condition wins, so test from highest to lowest threshold for correct banding.`,
    },
    {
      q: `Before Remove Duplicates, the critical decision is:`,
      options: [`The font`, `Which columns define a duplicate`, `The sheet color`, `The zoom level`],
      answer: 1,
      explain: `The chosen key columns determine which rows count as duplicates and get deleted — always work on a copy.`,
    },
    {
      q: `=AVERAGEIF(C2:C100, "South", D2:D100) returns:`,
      options: [
        `The count of South`,
        `The average of D where C equals South`,
        `The sum of D`,
        `The max of D`,
      ],
      answer: 1,
      explain: `AVERAGEIF averages the values in D for rows where C meets the criteria "South".`,
    },
    {
      q: `MATCH(value, range, 0) returns:`,
      options: [`The value`, `The position of the value in the range`, `TRUE/FALSE`, `The whole row`],
      answer: 1,
      explain: `MATCH returns the position (0 = exact match), which INDEX then uses to fetch the corresponding value.`,
    },
    {
      q: `A number stuck as text can be converted to a real number with:`,
      options: [`TEXT`, `VALUE (or multiply by 1)`, `TRIM`, `LEN`],
      answer: 1,
      explain: `VALUE() parses text-numbers into numbers; arithmetic tricks like *1 or +0 also coerce them.`,
    },
    {
      q: `=TEXT(A2, "yyyy-mm") is useful because it:`,
      options: [
        `Deletes the day`,
        `Creates a sortable year-month grouping key`,
        `Converts to a number`,
        `Removes the year`,
      ],
      answer: 1,
      explain: `It keeps year and month and sorts chronologically as text — a clean key for grouping by month.`,
    },
    {
      q: `Which function returns the 3rd largest value in a range?`,
      options: [`MAX(range)`, `LARGE(range, 3)`, `SMALL(range, 3)`, `RANK(range, 3)`],
      answer: 1,
      explain: `LARGE(range, k) returns the k-th largest; LARGE(range, 3) is the third largest.`,
    },
    {
      q: `Web-pasted text won't TRIM clean due to a stray space. Replace what first?`,
      options: [`CHAR(10)`, `CHAR(160) non-breaking space`, `CHAR(9)`, `CHAR(32)`],
      answer: 1,
      explain: `Non-breaking spaces (CHAR(160)) survive TRIM; substitute them to a normal space, then TRIM.`,
    },
    {
      q: `NETWORKDAYS(start, end) counts:`,
      options: [`All days`, `Weekdays, excluding Saturdays and Sundays`, `Weekends only`, `Months`],
      answer: 1,
      explain: `NETWORKDAYS counts working days between two dates, excluding weekends (and any listed holidays).`,
    },
    {
      q: `To detect whether a value is genuinely numeric, use:`,
      options: [`ISTEXT`, `ISNUMBER`, `ISBLANK`, `LEN`],
      answer: 1,
      explain: `ISNUMBER returns TRUE only for real numbers, exposing values that merely look numeric but are text.`,
    },
  ],

  // ═══════════════ MIXED 3 — Comprehensive (all topics) ════════════════════
  "mixed-3": [
    {
      q: `What is the fundamental shape of "tidy" analytics data?`,
      options: [
        `One column per record`,
        `One row per record, one column per attribute, a single header row`,
        `Totals mixed into the data`,
        `Multiple header rows`,
      ],
      answer: 1,
      explain: `Tidy data has one record per row, one attribute per column, one header row, and no blank rows — the basis every analytics feature relies on.`,
    },
    {
      q: `In an Excel Table named Sales, =SUM(Sales[Revenue]) is an example of:`,
      options: [`A volatile function`, `A structured reference`, `An array constant`, `A macro`],
      answer: 1,
      explain: `Structured references name columns (Sales[Revenue]) and expand automatically as the table grows.`,
    },
    {
      q: `Which function answers "total revenue where Region = North AND Product = Apples"?`,
      options: [`SUMIF`, `SUMIFS`, `COUNTIFS`, `AVERAGEIF`],
      answer: 1,
      explain: `SUMIFS handles multiple conditions: =SUMIFS(Revenue, Region, "North", Product, "Apples").`,
    },
    {
      q: `XLOOKUP defaults to which match type?`,
      options: [`Approximate`, `Exact`, `Wildcard`, `Reverse`],
      answer: 1,
      explain: `Unlike VLOOKUP, XLOOKUP defaults to exact match — the safer behavior.`,
    },
    {
      q: `To convert a continuous Amount into Gold/Silver/Bronze tiers, you would use:`,
      options: [`VLOOKUP only`, `Nested IF (or IFS, or a lookup table)`, `SUM`, `TRIM`],
      answer: 1,
      explain: `Nested IF/IFS or an approximate-match lookup table buckets numbers into categories you can then count and pivot.`,
    },
    {
      q: `A PivotTable shows stale numbers after the source changed. You must:`,
      options: [`Rebuild it`, `Refresh it`, `Re-sort it`, `Re-format it`],
      answer: 1,
      explain: `PivotTables are snapshots; Refresh pulls in source changes (and a Table source includes new rows automatically).`,
    },
    {
      q: `Which chart suits a trend over 12 months?`,
      options: [`Pie`, `Line`, `Scatter`, `Doughnut`],
      answer: 1,
      explain: `Line charts are the standard for time-based trends.`,
    },
    {
      q: `Goal Seek finds:`,
      options: [
        `Many inputs to optimize a target`,
        `The single input that makes a formula hit a target value`,
        `Named scenarios`,
        `Duplicate rows`,
      ],
      answer: 1,
      explain: `Goal Seek changes one input cell until a formula equals your target — e.g. break-even units.`,
    },
    {
      q: `To highlight an entire row where column F = "Overdue", the formula rule is:`,
      options: [`=F2="Overdue"`, `=$F2="Overdue"`, `=F$2="Overdue"`, `=$F$2="Overdue"`],
      answer: 1,
      explain: `Lock the column only ($F2) so each cell tests column F while the rule applies across the whole row and down the data.`,
    },
    {
      q: `Show Values As > % of Grand Total in a PivotTable does what?`,
      options: [
        `Sorts the data`,
        `Recomputes each value as a share of the total`,
        `Adds a slicer`,
        `Groups dates`,
      ],
      answer: 1,
      explain: `It converts raw figures into contribution percentages with a couple of clicks.`,
    },
    {
      q: `A date that is left-aligned and won't subtract is actually:`,
      options: [`A number`, `Text`, `A formula`, `An error`],
      answer: 1,
      explain: `It's a text-date; fix it with DATEVALUE, Text to Columns, or a typed column on import before analysis.`,
    },
    {
      q: `Which function returns a list of distinct values that spills into multiple cells (Excel 365)?`,
      options: [`UNIQUE`, `VLOOKUP`, `COUNTIF`, `LEN`],
      answer: 0,
      explain: `UNIQUE(range) is a dynamic-array function that spills the distinct values, ideal for category lists and drop-downs.`,
    },
    {
      q: `Paste Special > Values is used to:`,
      options: [
        `Copy formatting only`,
        `Replace formulas with their static results`,
        `Transpose data`,
        `Insert comments`,
      ],
      answer: 1,
      explain: `It freezes calculations into fixed numbers that won't recalculate or break if the source is removed.`,
    },
    {
      q: `Why standardize "North"/"north"/"NORTH" before pivoting?`,
      options: [
        `It looks tidy`,
        `PivotTables/COUNTIF treat different cases as separate categories, distorting totals`,
        `It is required to save`,
        `It compresses the file`,
      ],
      answer: 1,
      explain: `Unstandardized case splits one real category into several groups. Use PROPER/UPPER/LOWER to unify before summarizing.`,
    },
    {
      q: `A Slicer connected to multiple PivotTables is the basis of:`,
      options: [`A macro`, `An interactive dashboard`, `A data validation rule`, `A named range`],
      answer: 1,
      explain: `Shared slicers let one click filter several pivots and charts together — interactive dashboards.`,
    },
    {
      q: `=ROUND(A1, 2) versus formatting a cell to 2 decimals:`,
      options: [
        `Both change the stored value`,
        `ROUND changes the value; formatting only changes the display`,
        `Both only change display`,
        `No difference`,
      ],
      answer: 1,
      explain: `ROUND alters the number used in further math; formatting just hides digits while full precision remains.`,
    },
    {
      q: `Which import method creates a refreshable connection and lets you set data types?`,
      options: [
        `Double-clicking the CSV`,
        `Data > Get & Transform (Power Query)`,
        `Copy-paste`,
        `Insert > Object`,
      ],
      answer: 1,
      explain: `Power Query keeps a live link to the source (Refresh to reload) and controls types like leading zeros and dates.`,
    },
    {
      q: `Filtering a table:`,
      options: [
        `Deletes non-matching rows`,
        `Temporarily hides non-matching rows`,
        `Sorts the rows`,
        `Colors the rows`,
      ],
      answer: 1,
      explain: `Filtering hides rows that don't match; clearing the filter brings them all back. Nothing is deleted.`,
    },
    {
      q: `The recommended workflow order in Excel analytics is:`,
      options: [
        `Visualize, then clean, then import`,
        `Import, clean, enrich, explore, summarize, visualize, plan`,
        `Summarize, then import`,
        `Chart first, data later`,
      ],
      answer: 1,
      explain: `The pipeline runs import to decision: import > clean & validate > enrich > explore > summarize (PivotTables) > visualize > plan (What-If).`,
    },
    {
      q: `Which What-If tool optimizes a target under constraints by adjusting many inputs?`,
      options: [`Goal Seek`, `Solver`, `Data Table`, `Scenario Manager`],
      answer: 1,
      explain: `Solver maximizes/minimizes a target while respecting constraints, adjusting multiple inputs at once.`,
    },
  ],

};

// ─────────────────────────────────────────────────────────────────────────────
// Additional questions appended to reach 20 per note-wise quiz and 50 per mixed
// quiz. Merged into QUESTIONS below. Kept separate to avoid editing every array.
// ─────────────────────────────────────────────────────────────────────────────
const EXTRA_QUESTIONS = {

  // ───────────────────────── 01 — Introduction (+8) ────────────────────────
  "01": [
    {
      q: `The currently selected cell — the one that receives what you type — is called the:`,
      options: [`Home cell`, `Active cell`, `Anchor cell`, `Primary cell`],
      answer: 1,
      explain: `The active cell is the selected cell where input goes; its address shows in the Name Box.`,
    },
    {
      q: `How do you add a new worksheet to a workbook?`,
      options: [`Press Ctrl + N`, `Click the + next to the sheet tabs`, `Right-click a cell`, `Use the Name Box`],
      answer: 1,
      explain: `The + button beside the sheet tabs adds a new worksheet. Ctrl + N creates a whole new workbook instead.`,
    },
    {
      q: `Which shortcut saves the workbook?`,
      options: [`Ctrl + P`, `Ctrl + S`, `Ctrl + W`, `Ctrl + O`],
      answer: 1,
      explain: `Ctrl + S saves. Save early and often.`,
    },
    {
      q: `How do you rename a worksheet?`,
      options: [
        `Use the Name Box`,
        `Double-click its sheet tab and type a new name`,
        `Right-click a cell`,
        `Press F2 on cell A1`,
      ],
      answer: 1,
      explain: `Double-click the sheet tab (or right-click > Rename) to give it a meaningful name like RawData or Dashboard.`,
    },
    {
      q: `In the grid, columns are labeled with ___ and rows with ___.`,
      options: [`numbers / letters`, `letters / numbers`, `letters / letters`, `numbers / numbers`],
      answer: 1,
      explain: `Columns use letters (A, B, C...) and rows use numbers (1, 2, 3...). A cell address combines them, e.g. C5.`,
    },
    {
      q: `Pressing F2 on a cell does what?`,
      options: [`Deletes it`, `Enters edit mode for that cell`, `Saves the file`, `Opens Help`],
      answer: 1,
      explain: `F2 puts the active cell into edit mode (the same as double-clicking it) so you can change its contents.`,
    },
    {
      q: `Excel is generally NOT the best tool when you have:`,
      options: [
        `A few hundred rows`,
        `Data of many millions of rows or an automated production pipeline`,
        `A budget to track`,
        `Survey results to summarize`,
      ],
      answer: 1,
      explain: `For very large data or automated production pipelines, databases or Python/R are better. Excel shines at exploration and reporting at human scale.`,
    },
    {
      q: `The standard Excel workbook file format is:`,
      options: [`.csv`, `.xlsx`, `.txt`, `.docx`],
      answer: 1,
      explain: `.xlsx is the default workbook format. Use it unless you need macros (.xlsm) or a plain export (.csv).`,
    },
  ],

  // ──────────────────────── 02 — Entering & Organizing (+8) ─────────────────
  "02": [
    {
      q: `While typing across a row, which key confirms the cell and moves RIGHT?`,
      options: [`Enter`, `Tab`, `Esc`, `Ctrl`],
      answer: 1,
      explain: `Tab moves right; Enter moves down (and after a Tab-typed row, Enter returns to the starting column one row down).`,
    },
    {
      q: `AutoComplete helps data entry by:`,
      options: [
        `Calculating sums`,
        `Suggesting matching text already used in the column, keeping categories consistent`,
        `Formatting cells`,
        `Sorting the column`,
      ],
      answer: 1,
      explain: `AutoComplete suggests existing entries so categories like North/South stay spelled consistently — important for grouping later.`,
    },
    {
      q: `To add an instant Sum/Average/Count at the bottom of an Excel Table, you enable:`,
      options: [`Freeze Panes`, `the Total Row (Table Design > Total Row)`, `a Slicer`, `Conditional Formatting`],
      answer: 1,
      explain: `Table Design > Total Row adds a row whose drop-down lets each column show a Sum, Average, Count, and more.`,
    },
    {
      q: `Ctrl + Shift + End selects:`,
      options: [
        `The entire column`,
        `From the active cell to the bottom-right of the used area`,
        `Only the active cell`,
        `The header row`,
      ],
      answer: 1,
      explain: `It extends the selection to the last used cell — handy for grabbing a whole dataset of unknown size.`,
    },
    {
      q: `When you Insert a row, the new row appears:`,
      options: [
        `Below the selected row`,
        `Above the selected row`,
        `At the bottom of the sheet`,
        `In a new sheet`,
      ],
      answer: 1,
      explain: `Insert places the new row above (or the new column to the left of) the one you selected.`,
    },
    {
      q: `Pressing the Delete key on a selected row:`,
      options: [
        `Removes the row and shifts others up`,
        `Only clears the cell contents — it does not remove the row`,
        `Deletes the whole column`,
        `Hides the row`,
      ],
      answer: 1,
      explain: `Delete clears contents only. To remove the row entirely and shift others, right-click the row number > Delete.`,
    },
    {
      q: `To freeze BOTH the top row and the first column at once, you first select:`,
      options: [`Cell A1`, `Cell B2`, `The whole sheet`, `Row 1`],
      answer: 1,
      explain: `Freeze Panes locks everything above and left of the active cell. Selecting B2 first freezes row 1 and column A together.`,
    },
    {
      q: `Double-clicking the border between two column headers does what?`,
      options: [
        `Hides the column`,
        `Auto-fits the column width to its widest entry`,
        `Deletes the column`,
        `Sorts the column`,
      ],
      answer: 1,
      explain: `Double-clicking the header border auto-fits the width so all content shows — the quick fix for ##### too-narrow columns.`,
    },
  ],

  // ──────────────────── 03 — Formulas & Cell References (+8) ────────────────
  "03": [
    {
      q: `What does =(2+3)*4 evaluate to?`,
      options: [`14`, `20`, `24`, `9`],
      answer: 1,
      explain: `Parentheses go first: 2+3=5, then 5*4 = 20. (Without parentheses, =2+3*4 would be 14.)`,
    },
    {
      q: `A formula shows #NAME?. The usual cause is:`,
      options: [
        `Divide by zero`,
        `A misspelled function or an unrecognized name (e.g. =SUMM(...))`,
        `A deleted cell`,
        `A too-narrow column`,
      ],
      answer: 1,
      explain: `#NAME? means Excel doesn't recognize a name — typically a typo in a function name or a non-existent named range.`,
    },
    {
      q: `=10+"abc" returns which error?`,
      options: [`#DIV/0!`, `#VALUE!`, `#REF!`, `#NAME?`],
      answer: 1,
      explain: `#VALUE! signals a wrong data type — here, trying to do math with text.`,
    },
    {
      q: `What does =50% evaluate to?`,
      options: [`50`, `0.5`, `5`, `An error`],
      answer: 1,
      explain: `The % operator divides by 100, so 50% equals 0.5.`,
    },
    {
      q: `Copying =A1+B1 from C1 one cell to the RIGHT (to D1) produces:`,
      options: [`=A1+B1`, `=B1+C1`, `=A2+B2`, `=A1+C1`],
      answer: 1,
      explain: `Relative references shift in the copy direction. Copied right, the columns advance: =B1+C1.`,
    },
    {
      q: `Which shortcut fills the selected formula DOWN into the cells below it?`,
      options: [`Ctrl + R`, `Ctrl + D`, `Ctrl + F`, `Ctrl + T`],
      answer: 1,
      explain: `Ctrl + D fills down from the top cell; Ctrl + R fills right.`,
    },
    {
      q: `Which operator means "not equal to"?`,
      options: [`!=`, `<>`, `><`, `=/=`],
      answer: 1,
      explain: `Excel uses <> for "not equal to", e.g. =A1<>"North" is TRUE when A1 is anything but North.`,
    },
    {
      q: `The quickest way to create a named range for the selected cell is to:`,
      options: [
        `Use Conditional Formatting`,
        `Type the name into the Name Box and press Enter`,
        `Format the cell as text`,
        `Use Paste Special`,
      ],
      answer: 1,
      explain: `Select the cell, click the Name Box, type a name like TaxRate, and press Enter. Manage names via Formulas > Name Manager.`,
    },
  ],

  // ──────────────────────── 04 — Essential Functions (+8) ───────────────────
  "04": [
    {
      q: `=COUNTIF(A2:A100, "Apple*") counts cells that:`,
      options: [
        `Exactly equal "Apple*"`,
        `Start with "Apple" (the * is a wildcard for any characters)`,
        `Contain a literal asterisk`,
        `End with "Apple"`,
      ],
      answer: 1,
      explain: `* is a wildcard matching any sequence of characters, so "Apple*" matches anything beginning with Apple.`,
    },
    {
      q: `Which function returns the largest value in a range?`,
      options: [`TOP`, `MAX`, `LARGE only`, `BIG`],
      answer: 1,
      explain: `MAX returns the single largest value; MIN returns the smallest. (LARGE(range,k) gives the k-th largest.)`,
    },
    {
      q: `=SMALL(range, 1) returns:`,
      options: [`The 1st row`, `The smallest value`, `The average`, `The count`],
      answer: 1,
      explain: `SMALL(range, k) returns the k-th smallest value, so SMALL(range,1) is the minimum.`,
    },
    {
      q: `To count rows where Region = North AND Amount > 100, you use:`,
      options: [`COUNTIF`, `COUNTIFS`, `SUMIF`, `COUNTA`],
      answer: 1,
      explain: `COUNTIFS handles multiple conditions: =COUNTIFS(Region,"North", Amount,">100").`,
    },
    {
      q: `In =AVERAGEIFS(...), the range you average is placed:`,
      options: [`Last`, `First`, `In the middle`, `It varies`],
      answer: 1,
      explain: `Like SUMIFS, AVERAGEIFS puts the value range (to average) first, then the range/criteria pairs.`,
    },
    {
      q: `=INT(133.9) returns:`,
      options: [`134`, `133`, `133.9`, `130`],
      answer: 1,
      explain: `INT drops the decimal part, rounding down to the nearest integer: 133.`,
    },
    {
      q: `=ROUND(1234, -2) returns:`,
      options: [`1234`, `1200`, `1230`, `1000`],
      answer: 1,
      explain: `A negative digits argument rounds to the left of the decimal: -2 rounds to the nearest hundred, giving 1200.`,
    },
    {
      q: `STDEV.S measures:`,
      options: [
        `The total`,
        `How spread out (dispersed) the values are`,
        `The most frequent value`,
        `The middle value`,
      ],
      answer: 1,
      explain: `Standard deviation quantifies dispersion around the mean. STDEV.S is for a sample; STDEV.P for a whole population.`,
    },
  ],

  // ──────────────────────────── 05 — Logical (+8) ───────────────────────────
  "05": [
    {
      q: `OR(cond1, cond2) returns TRUE when:`,
      options: [
        `Both conditions are true`,
        `At least one condition is true`,
        `Neither is true`,
        `Both are false`,
      ],
      answer: 1,
      explain: `OR is true if any condition is true; it is false only when all are false.`,
    },
    {
      q: `NOT(C2="North") returns TRUE when:`,
      options: [`C2 equals North`, `C2 is anything other than North`, `C2 is blank`, `Always`],
      answer: 1,
      explain: `NOT inverts a condition: it returns TRUE precisely when C2 is not North.`,
    },
    {
      q: `In a formula, what does "" (two double quotes) represent?`,
      options: [`A space`, `An empty/blank result`, `The letter O`, `An error`],
      answer: 1,
      explain: `"" is an empty string — used as an IF result to leave a cell visually blank.`,
    },
    {
      q: `Beyond three or four levels, deeply nested IFs are best replaced with:`,
      options: [
        `More nesting`,
        `IFS or a lookup table`,
        `COUNTIF`,
        `Conditional formatting`,
      ],
      answer: 1,
      explain: `Flat IFS or an approximate-match lookup table is far easier to read and maintain than deep IF nesting.`,
    },
    {
      q: `Which function returns TRUE if a cell contains any error value?`,
      options: [`ISBLANK`, `ISERROR`, `ISTEXT`, `ISNUMBER`],
      answer: 1,
      explain: `ISERROR returns TRUE for any error (#DIV/0!, #N/A, etc.). ISNA tests specifically for #N/A.`,
    },
    {
      q: `In a nested IF, the value_if_false branch is used to:`,
      options: [
        `End the formula`,
        `Pass the remaining cases to the next IF test`,
        `Display an error`,
        `Repeat the first test`,
      ],
      answer: 1,
      explain: `Each IF handles one slice; its false branch hands the leftover cases to the next nested IF, forming a waterfall.`,
    },
    {
      q: `=IF(C2="North", E2*0.1, 0) does what?`,
      options: [
        `Always gives 10%`,
        `Gives 10% of E2 only for North rows, otherwise 0`,
        `Adds North to E2`,
        `Counts North rows`,
      ],
      answer: 1,
      explain: `The bonus E2*0.1 applies only when the region is North; every other row returns 0.`,
    },
    {
      q: `In arithmetic, the Boolean TRUE behaves as the number:`,
      options: [`0`, `1`, `-1`, `100`],
      answer: 1,
      explain: `TRUE acts as 1 and FALSE as 0, which is why expressions like (A1>0)*B1 work in array formulas.`,
    },
  ],

  // ───────────────────────────── 06 — Text (+8) ────────────────────────────
  "06": [
    {
      q: `=LEFT("NORTH-2026", 5) returns:`,
      options: [`2026`, `NORTH`, `NORTH-`, `H-202`],
      answer: 1,
      explain: `LEFT(text, n) takes the first n characters — here the first 5, "NORTH".`,
    },
    {
      q: `=RIGHT("NORTH-2026", 4) returns:`,
      options: [`NORT`, `2026`, `-202`, `H-20`],
      answer: 1,
      explain: `RIGHT(text, n) takes the last n characters — the last 4 here, "2026".`,
    },
    {
      q: `=UPPER("north") returns:`,
      options: [`north`, `NORTH`, `North`, `nORTH`],
      answer: 1,
      explain: `UPPER converts all letters to uppercase. LOWER does the opposite; PROPER capitalizes each word.`,
    },
    {
      q: `How do FIND and SEARCH differ?`,
      options: [
        `FIND is case-insensitive; SEARCH is case-sensitive`,
        `FIND is case-sensitive; SEARCH is case-insensitive (and allows wildcards)`,
        `They are identical`,
        `SEARCH only works on numbers`,
      ],
      answer: 1,
      explain: `FIND respects letter case; SEARCH ignores case and supports wildcards. Both return the position of the substring.`,
    },
    {
      q: `On Excel 365, =TEXTBEFORE(A2, "-") returns:`,
      options: [
        `Everything after the first dash`,
        `Everything before the first dash`,
        `The dash itself`,
        `The whole string`,
      ],
      answer: 1,
      explain: `TEXTBEFORE returns the text before a delimiter — a cleaner replacement for LEFT/FIND combinations.`,
    },
    {
      q: `=CONCAT(A2, "-", B2) does what?`,
      options: [
        `Subtracts B2 from A2`,
        `Joins the arguments into one text string with a dash between`,
        `Splits A2`,
        `Counts characters`,
      ],
      answer: 1,
      explain: `CONCAT joins its arguments into a single string. TEXTJOIN is similar but adds a delimiter and can skip blanks.`,
    },
    {
      q: `To extract the region from "NORTH-2026" regardless of its length, you use:`,
      options: [
        `=LEFT(A2, 5)`,
        `=LEFT(A2, FIND("-", A2) - 1)`,
        `=RIGHT(A2, 5)`,
        `=MID(A2, 1, 5)`,
      ],
      answer: 1,
      explain: `FIND locates the dash; LEFT takes everything up to (but not including) it, so any region length works.`,
    },
    {
      q: `In =SUBSTITUTE("a-b-c", "-", " ", 2), what does the final 2 do?`,
      options: [
        `Replaces the first 2 dashes`,
        `Replaces only the 2nd dash`,
        `Repeats the result twice`,
        `Limits to 2 characters`,
      ],
      answer: 1,
      explain: `The optional instance argument targets a specific occurrence — here only the 2nd dash is replaced, giving "a-b c".`,
    },
  ],

  // ─────────────────────────── 07 — Date & Time (+8) ───────────────────────
  "07": [
    {
      q: `=A2+30, where A2 is a date, returns:`,
      options: [
        `An error`,
        `The date 30 days after A2`,
        `30`,
        `A2 with 30 appended as text`,
      ],
      answer: 1,
      explain: `Because dates are serial numbers, adding 30 advances the date by 30 days.`,
    },
    {
      q: `Which function builds a date from year, month, and day numbers?`,
      options: [`DATEVALUE`, `DATE`, `EDATE`, `TODAY`],
      answer: 1,
      explain: `DATE(year, month, day) constructs a date reliably, independent of text formats or locale.`,
    },
    {
      q: `What does NOW() return that TODAY() does not?`,
      options: [`The year only`, `The current time as well as the date`, `A text date`, `Yesterday`],
      answer: 1,
      explain: `TODAY() returns just the date; NOW() returns the current date and time.`,
    },
    {
      q: `=YEAR("2026-06-29" as a real date) returns:`,
      options: [`6`, `2026`, `29`, `June`],
      answer: 1,
      explain: `YEAR extracts the four-digit year. MONTH and DAY extract the other parts.`,
    },
    {
      q: `Which shortcut inserts today's date as a STATIC value (not a volatile formula)?`,
      options: [`=TODAY()`, `Ctrl + ;`, `Ctrl + T`, `Ctrl + D`],
      answer: 1,
      explain: `Ctrl + ; types today's date as a fixed value that won't change tomorrow, unlike the volatile TODAY().`,
    },
    {
      q: `=TEXT(A2, "dddd") returns, for a date that is a Monday:`,
      options: [`Mon`, `Monday`, `1`, `2026`],
      answer: 1,
      explain: `The "dddd" code gives the full weekday name; "ddd" gives the short form (Mon).`,
    },
    {
      q: `=DATE(2026, 13, 1) returns:`,
      options: [`An error`, `2027-01-01`, `2026-12-01`, `2026-01-13`],
      answer: 1,
      explain: `Month 13 rolls over into the next year, so DATE(2026,13,1) becomes January 1, 2027 — a handy trick.`,
    },
    {
      q: `To label a date as weekend or weekday, you can test:`,
      options: [
        `=YEAR(A2)>2025`,
        `=WEEKDAY(A2, 2) > 5`,
        `=MONTH(A2) = 6`,
        `=DAY(A2) > 28`,
      ],
      answer: 1,
      explain: `With WEEKDAY type 2, Monday=1 ... Sunday=7, so a result greater than 5 (i.e. 6 or 7) means Saturday or Sunday.`,
    },
  ],

  // ───────────────────── 08 — Lookup & Reference (+8) ──────────────────────
  "08": [
    {
      q: `On Excel 365, =FILTER(Sales, Sales[Region]="North") returns:`,
      options: [
        `A single value`,
        `Every row where Region is North (spilled), updating automatically`,
        `The count of North rows`,
        `A sorted list`,
      ],
      answer: 1,
      explain: `FILTER is a dynamic-array function that spills all matching rows and recalculates as the data changes.`,
    },
    {
      q: `=CHOOSE(2, "Red", "Green", "Blue") returns:`,
      options: [`Red`, `Green`, `Blue`, `2`],
      answer: 1,
      explain: `CHOOSE(n, ...) returns the n-th item from the list — here the 2nd, "Green". It's a mini lookup without a table.`,
    },
    {
      q: `A two-way lookup (value at the intersection of a row and column) is built with:`,
      options: [
        `Two VLOOKUPs`,
        `INDEX with one MATCH for the row and another MATCH for the column`,
        `COUNTIFS`,
        `A single SUMIF`,
      ],
      answer: 1,
      explain: `INDEX(data, MATCH(rowKey, rowHeaders, 0), MATCH(colKey, colHeaders, 0)) fetches the intersection value.`,
    },
    {
      q: `What is the correct first three arguments of XLOOKUP?`,
      options: [
        `return_array, lookup_array, lookup_value`,
        `lookup_value, lookup_array, return_array`,
        `lookup_array, lookup_value, return_array`,
        `lookup_value, return_array, lookup_array`,
      ],
      answer: 1,
      explain: `=XLOOKUP(lookup_value, lookup_array, return_array, ...): what to find, where to find it, and what to return.`,
    },
    {
      q: `In =VLOOKUP(B2, Products, 3, FALSE), the 3 means:`,
      options: [
        `Search the 3rd row`,
        `Return the value from the 3rd column of the table (counting from the left)`,
        `Allow 3 mismatches`,
        `Round to 3 decimals`,
      ],
      answer: 1,
      explain: `col_index_num is the column to return, counted from the leftmost column of the table_array (which is column 1).`,
    },
    {
      q: `In approximate match (e.g. assigning a grade band), the function returns:`,
      options: [
        `The exact value or #N/A`,
        `The largest threshold that does not exceed the lookup value`,
        `The smallest value`,
        `The first row`,
      ],
      answer: 1,
      explain: `Approximate match finds the largest table value less than or equal to the lookup value — so 85 lands in the 80 band.`,
    },
    {
      q: `To return "Not found" instead of #N/A from a VLOOKUP, wrap it in:`,
      options: [`SUM`, `IFERROR (or IFNA)`, `ROUND`, `TEXT`],
      answer: 1,
      explain: `=IFERROR(VLOOKUP(...), "Not found") catches the error; IFNA is the narrower choice that catches only #N/A.`,
    },
    {
      q: `Dynamic-array functions like UNIQUE and FILTER are said to "spill", meaning they:`,
      options: [
        `Cause errors`,
        `Output results across multiple cells automatically from one formula`,
        `Delete neighboring data`,
        `Run only once`,
      ],
      answer: 1,
      explain: `A single dynamic-array formula fills as many cells as needed. If a cell in the way is occupied, you get #SPILL!.`,
    },
  ],

  // ──────────────────── 09 — Data Cleaning & Validation (+8) ────────────────
  "09": [
    {
      q: `A small green triangle in the corner of a cell typically flags:`,
      options: [
        `A correct formula`,
        `A potential issue, such as a number stored as text`,
        `A locked cell`,
        `A merged cell`,
      ],
      answer: 1,
      explain: `The green triangle is Excel's error-checking flag — most commonly "Number Stored as Text".`,
    },
    {
      q: `Having selected all blank cells, how do you fill them all with one value at once?`,
      options: [
        `Press Enter after each`,
        `Type the value and press Ctrl + Enter`,
        `Use AutoSum`,
        `Drag the fill handle`,
      ],
      answer: 1,
      explain: `Type the value once and press Ctrl + Enter to fill every selected cell simultaneously.`,
    },
    {
      q: `Setting a Data Validation Error Alert to style "Stop" means an invalid entry is:`,
      options: [
        `Allowed with a warning`,
        `Rejected outright`,
        `Logged silently`,
        `Auto-corrected`,
      ],
      answer: 1,
      explain: `Stop blocks the invalid entry. Warning and Information styles allow it after a prompt.`,
    },
    {
      q: `The Data Validation "Whole number" rule restricts entry to:`,
      options: [
        `Any text`,
        `Integers within a min/max you set (e.g. age 0–120)`,
        `Dates only`,
        `Decimals only`,
      ],
      answer: 1,
      explain: `Whole number validation accepts only integers in a chosen range — useful for ages, counts, and quantities.`,
    },
    {
      q: `Which formula flags a row as a duplicate when its value appears more than once in column A?`,
      options: [
        `=COUNTBLANK(A:A)`,
        `=IF(COUNTIF($A:$A, A2) > 1, "Dup", "Unique")`,
        `=SUMIF(A:A, A2)`,
        `=LEN(A2)`,
      ],
      answer: 1,
      explain: `COUNTIF over the whole column returns how many times the value occurs; greater than 1 marks a duplicate.`,
    },
    {
      q: `The Paste Special > Multiply trick (copy a 1, paste-multiply onto text-numbers) is used to:`,
      options: [
        `Double the values`,
        `Force text-numbers to convert into real numbers`,
        `Add formatting`,
        `Remove duplicates`,
      ],
      answer: 1,
      explain: `Multiplying by 1 coerces text that looks numeric into actual numbers, so it will then SUM correctly.`,
    },
    {
      q: `=UNIQUE(range) helps cleaning by:`,
      options: [
        `Deleting the source data`,
        `Spilling a deduplicated list while leaving the original intact (non-destructive)`,
        `Sorting in place`,
        `Counting blanks`,
      ],
      answer: 1,
      explain: `UNIQUE returns the distinct values as a live spilled list, unlike the destructive Remove Duplicates command.`,
    },
    {
      q: `The Data Validation Input Message tab is used to:`,
      options: [
        `Reject bad data`,
        `Show a helpful hint when the cell is selected`,
        `Circle invalid data`,
        `Sort the column`,
      ],
      answer: 1,
      explain: `Input Message displays guidance (e.g. "Pick a region from the list") when the user selects the cell.`,
    },
  ],

  // ─────────────── 10 — Sorting, Filtering & Conditional Fmt (+8) ───────────
  "10": [
    {
      q: `Sorting a metric Z→A (Largest to Smallest) is the quick way to:`,
      options: [
        `Hide rows`,
        `Bring the top performers to the top`,
        `Remove duplicates`,
        `Filter by color`,
      ],
      answer: 1,
      explain: `Descending sort surfaces the biggest values first — a fast way to see who/what is on top.`,
    },
    {
      q: `Which filter finds all text entries that include a word anywhere in them?`,
      options: [
        `Number Filters > Between`,
        `Text Filters > Contains`,
        `Date Filters > This Month`,
        `Top 10`,
      ],
      answer: 1,
      explain: `Text Filters > Contains matches entries that include the given text anywhere within them.`,
    },
    {
      q: `How can you tell at a glance that a column currently has an active filter?`,
      options: [
        `The header turns red`,
        `The drop-down arrow shows a funnel icon`,
        `The column is hidden`,
        `The font becomes bold`,
      ],
      answer: 1,
      explain: `A filtered column's arrow changes to a funnel symbol, signaling that some rows are hidden.`,
    },
    {
      q: `"Sort by Color" is useful because it:`,
      options: [
        `Changes cell colors`,
        `Orders rows by cell/font color, pairing well with conditional formatting`,
        `Removes formatting`,
        `Counts colors`,
      ],
      answer: 1,
      explain: `You can sort rows by the colors applied (often by conditional formatting), grouping highlighted items together.`,
    },
    {
      q: `A Custom List lets you sort by a non-alphabetical order such as:`,
      options: [
        `A to Z only`,
        `Mon, Tue, Wed... or Small, Medium, Large`,
        `Largest to smallest only`,
        `Random order`,
      ],
      answer: 1,
      explain: `Custom Lists define meaningful orders (weekdays, sizes) so sorting follows them instead of alphabetical order.`,
    },
    {
      q: `Which conditional-formatting rule paints repeated values to help spot them?`,
      options: [
        `Data Bars`,
        `Highlight Cells Rules > Duplicate Values`,
        `Color Scales`,
        `Above Average`,
      ],
      answer: 1,
      explain: `Duplicate Values shades repeats — a quick visual aid during data cleaning.`,
    },
    {
      q: `To remove all filters from a table at once, you can:`,
      options: [
        `Delete the table`,
        `Use Data > Clear, or toggle Ctrl + Shift + L twice`,
        `Sort A to Z`,
        `Freeze panes`,
      ],
      answer: 1,
      explain: `Data > Clear removes active filters; toggling Ctrl + Shift + L off and on also resets them.`,
    },
    {
      q: `When two conditional-formatting rules conflict on a cell, which wins?`,
      options: [
        `The newest rule`,
        `The rule higher in Manage Rules (with optional "Stop If True")`,
        `The rule with the brightest color`,
        `Neither applies`,
      ],
      answer: 1,
      explain: `Rules apply top-down in Conditional Formatting > Manage Rules; the topmost matching rule wins, and "Stop If True" halts further rules.`,
    },
  ],

  // ──────────────────── 11 — PivotTables & PivotCharts (+8) ─────────────────
  "11": [
    {
      q: `Fields placed in the ROWS zone of a PivotTable appear:`,
      options: [
        `Across the top`,
        `Listed down the left side as categories`,
        `As the aggregated numbers`,
        `As a master filter`,
      ],
      answer: 1,
      explain: `Rows lists categories down the left. Columns spread categories across the top; Values holds the aggregated numbers.`,
    },
    {
      q: `The FILTERS zone (Report Filter) of a PivotTable provides:`,
      options: [
        `In-cell bars`,
        `A master drop-down that scopes the entire report`,
        `A chart`,
        `A sort order`,
      ],
      answer: 1,
      explain: `A field in the Filters zone becomes a drop-down that filters the whole PivotTable at once.`,
    },
    {
      q: `You can group a numeric PivotTable field into bins (e.g. 0–99, 100–199) to:`,
      options: [
        `Delete outliers`,
        `Build a histogram-style summary of value ranges`,
        `Sort the data`,
        `Refresh faster`,
      ],
      answer: 1,
      explain: `Right-click a numeric row field > Group and set an interval to summarize values into bands.`,
    },
    {
      q: `Show Values As > "% of Column Total" expresses each value as:`,
      options: [
        `A share of the grand total`,
        `A share within its column`,
        `A running total`,
        `A rank`,
      ],
      answer: 1,
      explain: `% of Column Total recomputes each cell relative to the total of its column (similarly there is % of Row Total).`,
    },
    {
      q: `Show Values As > "Running Total In" produces:`,
      options: [
        `A percentage`,
        `A cumulative sum down a field (e.g. month by month)`,
        `A rank`,
        `A difference`,
      ],
      answer: 1,
      explain: `Running Total accumulates values progressively — ideal for cumulative sales over time.`,
    },
    {
      q: `Insert Timeline (PivotTable Analyze) gives you:`,
      options: [
        `A line chart`,
        `A visual slider to filter a date field by month/quarter/year`,
        `A new PivotTable`,
        `A formula`,
      ],
      answer: 1,
      explain: `A Timeline is a date-specific slider you drag to filter the PivotTable to a period — great on dashboards.`,
    },
    {
      q: `Putting a field in the COLUMNS zone (alongside one in Rows) creates:`,
      options: [
        `A single total`,
        `A cross-tabulation grid (e.g. Region down, Product across)`,
        `A chart`,
        `A filter`,
      ],
      answer: 1,
      explain: `Rows plus Columns produce a two-dimensional cross-tab with an aggregated value at each intersection.`,
    },
    {
      q: `It is recommended to place a new PivotTable on:`,
      options: [
        `The same cells as the raw data`,
        `A New Worksheet (to keep it cleanly separated)`,
        `A chart sheet`,
        `The Data Model only`,
      ],
      answer: 1,
      explain: `Putting the PivotTable on a new worksheet keeps the report separate from the source data and avoids overlap.`,
    },
  ],

  // ─────────────── 12 — Charts, Dashboards & What-If (+8) ───────────────────
  "12": [
    {
      q: `A column chart and a bar chart differ in that:`,
      options: [
        `Column is horizontal, bar is vertical`,
        `Column is vertical, bar is horizontal (good for long category labels)`,
        `They are identical`,
        `Bar charts can't show categories`,
      ],
      answer: 1,
      explain: `Columns rise vertically; bars run horizontally, which suits long category names.`,
    },
    {
      q: `To show the distribution of a single numeric variable, the right chart is a:`,
      options: [`Pie`, `Histogram`, `Line`, `Doughnut`],
      answer: 1,
      explain: `A histogram buckets one variable into bins to reveal its distribution shape.`,
    },
    {
      q: `Adding a trendline with its R² value to a chart helps you:`,
      options: [
        `Change colors`,
        `See the direction of a trend and gauge how well the line fits the data`,
        `Filter the data`,
        `Add a slicer`,
      ],
      answer: 1,
      explain: `A trendline shows overall direction; R² (closer to 1) indicates a better fit to the points.`,
    },
    {
      q: `In desktop Excel, the "+" Chart Elements button lets you toggle:`,
      options: [
        `Cell colors`,
        `Title, axis titles, data labels, gridlines, legend, and trendline`,
        `Worksheet tabs`,
        `Pivot fields`,
      ],
      answer: 1,
      explain: `The + button adds or removes chart elements like titles, data labels, and trendlines.`,
    },
    {
      q: `A two-variable Data Table shows how a result changes across:`,
      options: [
        `One input only`,
        `A grid of two inputs at once (e.g. price and units)`,
        `Named scenarios`,
        `Time`,
      ],
      answer: 1,
      explain: `A two-variable Data Table varies two inputs simultaneously and fills a grid of results — fuller sensitivity analysis than one variable.`,
    },
    {
      q: `Insert > Recommended Charts is useful because it:`,
      options: [
        `Cleans your data`,
        `Suggests suitable chart types for your selected data`,
        `Creates a PivotTable`,
        `Adds a slicer`,
      ],
      answer: 1,
      explain: `Recommended Charts previews chart types that fit the shape of your data, a helpful starting point.`,
    },
    {
      q: `A KPI card on a dashboard is typically:`,
      options: [
        `A pie chart`,
        `A single headline number (e.g. Total Revenue) formatted large and bold`,
        `A slicer`,
        `A data table`,
      ],
      answer: 1,
      explain: `KPI cards surface key metrics as prominent single numbers, often via SUM/SUMIFS/AVERAGE.`,
    },
    {
      q: `Before presenting a dashboard, you should:`,
      options: [
        `Delete the raw data`,
        `Refresh All so every PivotTable and chart reflects the latest data`,
        `Remove the slicers`,
        `Convert charts to images`,
      ],
      answer: 1,
      explain: `Data > Refresh All updates all pivots and charts so the dashboard shows current numbers.`,
    },
  ],

  // ═══════════════ MIXED 1 — Foundations (+30, topics 01–06) ════════════════
  "mixed-1": [
    {
      q: `What is the correct hierarchy from largest to smallest?`,
      options: [`Cell > Sheet > Workbook`, `Workbook > Worksheet > Cell`, `Sheet > Cell > Workbook`, `Workbook > Cell > Sheet`],
      answer: 1,
      explain: `A workbook contains worksheets, which contain cells.`,
    },
    {
      q: `The range A1:C3 describes:`,
      options: [`Three cells`, `A 3-by-3 rectangular block`, `Columns A–C only`, `Row 1 to 3 only`],
      answer: 1,
      explain: `A1:C3 is the rectangular block spanning columns A–C and rows 1–3 (nine cells).`,
    },
    {
      q: `Ctrl + Arrow with data selected:`,
      options: [`Deletes data`, `Jumps to the edge of the data region`, `Sorts data`, `Inserts a row`],
      answer: 1,
      explain: `It leaps to the last filled cell in that direction — fast navigation on large datasets.`,
    },
    {
      q: `Saving an .xlsx as .csv discards:`,
      options: [`Nothing`, `Formulas, formatting, and all but one sheet`, `Only colors`, `The data values`],
      answer: 1,
      explain: `CSV keeps only the raw values of one sheet; formulas become results and formatting/extra sheets are lost.`,
    },
    {
      q: `Copying =B2*C2 from D2 down to D5 gives, in D5:`,
      options: [`=B2*C2`, `=B5*C5`, `=B2*C5`, `=D2*D5`],
      answer: 1,
      explain: `Relative references shift with the copy: D5 becomes =B5*C5.`,
    },
    {
      q: `#DIV/0! appears because:`,
      options: [`A name is misspelled`, `You divided by zero or an empty cell`, `A cell was deleted`, `The column is narrow`],
      answer: 1,
      explain: `It signals division by zero; wrap with IFERROR to handle it tidily.`,
    },
    {
      q: `To force part of a formula to calculate first, you use:`,
      options: [`Quotes`, `Parentheses`, `A dollar sign`, `An ampersand`],
      answer: 1,
      explain: `Parentheses are evaluated before other operators — the safe way to control order.`,
    },
    {
      q: `COUNT (not COUNTA) tallies:`,
      options: [`Any non-empty cell`, `Only cells containing numbers`, `Only blanks`, `Only text`],
      answer: 1,
      explain: `COUNT counts numeric cells; COUNTA counts any non-empty cell.`,
    },
    {
      q: `Which function totals values matching two conditions?`,
      options: [`SUM`, `SUMIFS`, `COUNTIF`, `AVERAGE`],
      answer: 1,
      explain: `SUMIFS sums where all listed conditions hold, with the sum range given first.`,
    },
    {
      q: `COUNTBLANK is used to:`,
      options: [`Count numbers`, `Count empty cells (find missing data)`, `Count text`, `Remove blanks`],
      answer: 1,
      explain: `COUNTBLANK reports how many cells are empty — useful for spotting gaps.`,
    },
    {
      q: `=ROUND(A1,2) differs from formatting to 2 decimals because:`,
      options: [`No difference`, `ROUND changes the stored value; formatting only changes display`, `Formatting changes the value`, `Both delete data`],
      answer: 1,
      explain: `ROUND alters the number used in later math; formatting only hides digits.`,
    },
    {
      q: `In nested IFs for grade bands, you should test:`,
      options: [`Lowest first`, `Highest threshold first`, `Any order`, `Alphabetically`],
      answer: 1,
      explain: `The first true condition wins, so test from highest to lowest.`,
    },
    {
      q: `AND(c1, c2) is TRUE when:`,
      options: [`Either is true`, `Both are true`, `Neither is true`, `Always`],
      answer: 1,
      explain: `AND requires every condition to be true.`,
    },
    {
      q: `OR(c1, c2) is TRUE when:`,
      options: [`Both must be true`, `At least one is true`, `Neither is true`, `Never`],
      answer: 1,
      explain: `OR is true if any condition is true.`,
    },
    {
      q: `IFERROR is used to:`,
      options: [`Force an error`, `Return a tidy substitute when a formula errors`, `Count errors`, `Color errors`],
      answer: 1,
      explain: `=IFERROR(formula, value_if_error) replaces errors with something clean.`,
    },
    {
      q: `=LEN(" Excel ") counts:`,
      options: [`5`, `7 (spaces count too)`, `4`, `0`],
      answer: 1,
      explain: `LEN counts every character including spaces, so " Excel " (with two spaces) is 7.`,
    },
    {
      q: `=LEFT("Region", 3) returns:`,
      options: [`ion`, `Reg`, `Region`, `R`],
      answer: 1,
      explain: `LEFT takes the first n characters — here "Reg".`,
    },
    {
      q: `FIND returns:`,
      options: [`TRUE/FALSE`, `The position of a substring within text`, `The whole string`, `The length`],
      answer: 1,
      explain: `FIND gives the numeric position where the substring starts, used to parse around delimiters.`,
    },
    {
      q: `SUBSTITUTE replaces text by:`,
      options: [`Position`, `Matching the old text you specify`, `Color`, `Length`],
      answer: 1,
      explain: `SUBSTITUTE swaps occurrences of matched text; REPLACE works by position instead.`,
    },
    {
      q: `=TEXT(0.25, "0%") returns:`,
      options: [`0.25`, `"25%"`, `25`, `"0.25%"`],
      answer: 1,
      explain: `TEXT formats the number as a string with the given code — here "25%".`,
    },
    {
      q: `VALUE() is used to:`,
      options: [`Format a number as text`, `Convert a text-number into a real number`, `Trim spaces`, `Count cells`],
      answer: 1,
      explain: `VALUE turns text that looks numeric into an actual number that can be calculated.`,
    },
    {
      q: `CLEAN() removes:`,
      options: [`Spaces`, `Non-printable control characters`, `Numbers`, `Capital letters`],
      answer: 1,
      explain: `CLEAN strips control characters (line breaks, tabs); pair with TRIM for spaces.`,
    },
    {
      q: `=UPPER("north") returns:`,
      options: [`north`, `NORTH`, `North`, `Northern`],
      answer: 1,
      explain: `UPPER converts to all caps.`,
    },
    {
      q: `Double-clicking the fill handle:`,
      options: [`Deletes the column`, `Auto-fills down to match the adjacent column's length`, `Sorts the data`, `Opens a chart`],
      answer: 1,
      explain: `It fills down automatically to the end of the neighboring data — no dragging needed.`,
    },
    {
      q: `Flash Fill (Ctrl + E):`,
      options: [`Sums a column`, `Detects a pattern from your example and fills the rest`, `Creates a Table`, `Freezes panes`],
      answer: 1,
      explain: `Type one example of the desired output and Flash Fill replicates the pattern (as static values).`,
    },
    {
      q: `=SUM(Sales[Units]) is an example of:`,
      options: [`An absolute reference`, `A structured (Table) reference`, `A macro`, `A named array constant`],
      answer: 1,
      explain: `Tables enable column references like Sales[Units] that auto-expand and read clearly.`,
    },
    {
      q: `Freeze Top Row is used to:`,
      options: [`Lock formulas`, `Keep the header visible while scrolling`, `Protect the sheet`, `Hide row 1`],
      answer: 1,
      explain: `It keeps row 1 on screen as you scroll a long dataset.`,
    },
    {
      q: `Typing "Jan" and dragging the fill handle gives:`,
      options: [`Jan, Jan, Jan`, `Jan, Feb, Mar...`, `1, 2, 3`, `An error`],
      answer: 1,
      explain: `Excel recognizes the month series and continues it.`,
    },
    {
      q: `#NAME? usually means:`,
      options: [`Divide by zero`, `A misspelled function or unknown name`, `A deleted reference`, `Text in math`],
      answer: 1,
      explain: `Excel doesn't recognize the name — check for typos like =SUMM(...).`,
    },
    {
      q: `Tidy analytics data has:`,
      options: [`One column per record`, `One row per record and one column per attribute`, `Totals inside the data`, `Multiple header rows`],
      answer: 1,
      explain: `One record per row, one attribute per column, a single header row, and no blank rows.`,
    },
  ],

  // ═════════ MIXED 2 — Functions & Analysis (+30, topics 04–09) ════════════
  "mixed-2": [
    {
      q: `COUNTIFS is used to:`,
      options: [`Count with one condition`, `Count rows meeting multiple conditions`, `Sum values`, `Average values`],
      answer: 1,
      explain: `COUNTIFS counts where all listed conditions hold, e.g. Region=North AND Amount>100.`,
    },
    {
      q: `In SUMIF, the argument order is:`,
      options: [`sum_range, criteria, criteria_range`, `criteria_range, criteria, sum_range`, `criteria, sum_range, criteria_range`, `sum_range, criteria_range, criteria`],
      answer: 1,
      explain: `SUMIF tests the criteria_range, applies the criteria, then sums the sum_range.`,
    },
    {
      q: `AVERAGEIFS averages values where:`,
      options: [`One condition holds`, `Multiple conditions all hold`, `Any cell is non-empty`, `Cells are blank`],
      answer: 1,
      explain: `AVERAGEIFS takes the value range first, then range/criteria pairs for multiple conditions.`,
    },
    {
      q: `=COUNTIF(A2:A100, "North*") counts cells that:`,
      options: [`Equal "North*" literally`, `Start with "North"`, `End with "North"`, `Contain an asterisk`],
      answer: 1,
      explain: `The * wildcard matches any trailing characters, so it counts entries beginning with North.`,
    },
    {
      q: `=LARGE(range, 1) is equivalent to:`,
      options: [`MIN(range)`, `MAX(range)`, `AVERAGE(range)`, `COUNT(range)`],
      answer: 1,
      explain: `The 1st largest value is the maximum.`,
    },
    {
      q: `STDEV.S measures:`,
      options: [`The total`, `Dispersion of a sample around its mean`, `The middle value`, `The most common value`],
      answer: 1,
      explain: `It is the sample standard deviation — how spread out the data is.`,
    },
    {
      q: `=IF(AND(E2>200, B2="North"),"VIP","") flags VIP when:`,
      options: [`Either condition holds`, `Both conditions hold`, `Neither holds`, `E2 is blank`],
      answer: 1,
      explain: `AND requires both: the amount over 200 and the region North.`,
    },
    {
      q: `In IFS, a final TRUE, "Other" pair acts as:`,
      options: [`An error`, `The catch-all default case`, `The first test`, `A comment`],
      answer: 1,
      explain: `Literal TRUE always matches, providing the else/default result.`,
    },
    {
      q: `ISBLANK(A2) returns TRUE when:`,
      options: [`A2 has a number`, `A2 is empty`, `A2 has text`, `A2 has an error`],
      answer: 1,
      explain: `ISBLANK tests for an empty cell.`,
    },
    {
      q: `=TRIM(CLEAN(A2)) is the standard combo for:`,
      options: [`Summing`, `Cleaning imported text (spaces + control characters)`, `Sorting`, `Lookups`],
      answer: 1,
      explain: `TRIM removes spaces and CLEAN removes non-printable characters.`,
    },
    {
      q: `Data > Text to Columns can:`,
      options: [`Create charts`, `Convert text-numbers/dates to real values and split delimited data`, `Build PivotTables`, `Add slicers`],
      answer: 1,
      explain: `It re-parses a column, fixing data types and splitting on a delimiter.`,
    },
    {
      q: `To select every empty cell in a range at once, use:`,
      options: [`Ctrl + A`, `F5 > Special > Blanks`, `Filter`, `Sort`],
      answer: 1,
      explain: `Go To Special > Blanks selects all empties so you can fill them together.`,
    },
    {
      q: `A Data Validation drop-down List prevents:`,
      options: [`All typing`, `Inconsistent categories like North vs Norht`, `Formulas`, `Sorting`],
      answer: 1,
      explain: `It restricts entries to allowed values, eliminating spelling/case variants at the source.`,
    },
    {
      q: `Why standardize case before grouping/pivoting?`,
      options: [`It looks nicer`, `North and NORTH count as different categories otherwise`, `It saves space`, `It is required to save`],
      answer: 1,
      explain: `Different cases split into separate groups, distorting counts; unify with PROPER/UPPER/LOWER.`,
    },
    {
      q: `The safest first step when cleaning data is to:`,
      options: [`Remove duplicates`, `Work on a copy, leaving the raw data intact`, `Sort it`, `Chart it`],
      answer: 1,
      explain: `Cleaning steps can be destructive, so preserve the original on its own sheet.`,
    },
    {
      q: `=EDATE(A2, 3) returns:`,
      options: [`3 days after A2`, `The same day, 3 months after A2`, `3 years after`, `The 3rd of the month`],
      answer: 1,
      explain: `EDATE shifts by whole calendar months.`,
    },
    {
      q: `DATEVALUE is used to:`,
      options: [`Add days`, `Convert a text-date into a real date serial number`, `Return the weekday`, `Return the year`],
      answer: 1,
      explain: `It parses text that represents a date into the underlying number.`,
    },
    {
      q: `=YEAR(orderDate) is useful to:`,
      options: [`Sort text`, `Extract the year so you can group/sum by year`, `Count blanks`, `Format currency`],
      answer: 1,
      explain: `Extracting the year turns a date into a dimension you can aggregate by.`,
    },
    {
      q: `TODAY() is volatile, meaning it:`,
      options: [`Never changes`, `Updates to the current date on each recalculation`, `Includes the time`, `Returns text`],
      answer: 1,
      explain: `It always reflects the current date; for a fixed value use Ctrl + ;`,
    },
    {
      q: `XLOOKUP defaults to which match mode?`,
      options: [`Approximate`, `Exact`, `Wildcard`, `Reverse`],
      answer: 1,
      explain: `XLOOKUP uses exact match by default — safer than VLOOKUP's approximate default.`,
    },
    {
      q: `For VLOOKUP, the lookup key must sit in:`,
      options: [`The rightmost column`, `The leftmost column of the table`, `Any column`, `A separate sheet`],
      answer: 1,
      explain: `VLOOKUP searches the first column and returns values to its right only.`,
    },
    {
      q: `=UNIQUE(range) returns:`,
      options: [`The total`, `The distinct values, spilled into cells`, `The duplicates only`, `A sorted copy`],
      answer: 1,
      explain: `UNIQUE spills the list of distinct values — great for category lists and drop-downs.`,
    },
    {
      q: `=FILTER(data, condition) (Excel 365):`,
      options: [`Sorts data`, `Returns all rows meeting the condition, live`, `Counts rows`, `Removes duplicates`],
      answer: 1,
      explain: `FILTER spills every matching row and updates automatically as data changes.`,
    },
    {
      q: `=INDEX(Names, 4) returns:`,
      options: [`The position 4`, `The 4th value in the Names range`, `The header`, `An error`],
      answer: 1,
      explain: `INDEX(array, n) fetches the value at position n.`,
    },
    {
      q: `Approximate-match lookups require the table to be:`,
      options: [`Unsorted`, `Sorted ascending by the band's lower bound`, `Sorted descending`, `Formatted as currency`],
      answer: 1,
      explain: `Otherwise the band assignment returns nonsense.`,
    },
    {
      q: `For a cleanup repeated every month, the professional approach is:`,
      options: [`Redo it by hand`, `Record the steps in Power Query and click Refresh next time`, `Use a macro recorder only`, `Avoid cleaning`],
      answer: 1,
      explain: `Power Query replays recorded steps on the new file automatically.`,
    },
    {
      q: `A number stored as text typically shows as:`,
      options: [`Right-aligned and bold`, `Left-aligned, often with a green triangle`, `Centered`, `Highlighted red`],
      answer: 1,
      explain: `That alignment and flag indicate it won't calculate until converted.`,
    },
    {
      q: `Find & Replace (Ctrl + H) is handy to:`,
      options: [`Sum values`, `Bulk-fix a known typo across the sheet`, `Insert charts`, `Freeze panes`],
      answer: 1,
      explain: `It swaps known text across the sheet; use "match entire cell contents" to be precise.`,
    },
    {
      q: `=DATEDIF(birth, TODAY(), "Y") returns:`,
      options: [`Days lived`, `Whole years of age`, `Months`, `The birth year`],
      answer: 1,
      explain: `"Y" gives complete years, correctly handling leap years.`,
    },
    {
      q: `MEDIAN is preferred over AVERAGE when data has:`,
      options: [`No spread`, `Extreme outliers`, `Only text`, `Few rows`],
      answer: 1,
      explain: `MEDIAN resists outliers; AVERAGE is pulled toward extremes.`,
    },
  ],

  // ═══════════════ MIXED 3 — Comprehensive (+30, all topics) ════════════════
  "mixed-3": [
    {
      q: `Every formula in Excel begins with:`,
      options: [`+`, `=`, `@`, `#`],
      answer: 1,
      explain: `The = sign tells Excel to compute rather than store literal text.`,
    },
    {
      q: `Ctrl + T converts a range into:`,
      options: [`A chart`, `An Excel Table (auto-filter, name, auto-expand)`, `A PivotTable`, `A named range`],
      answer: 1,
      explain: `Tables add filters, structured references, and auto-expansion.`,
    },
    {
      q: `$G$1 is which kind of reference?`,
      options: [`Relative`, `Absolute (locked column and row)`, `Mixed`, `Named`],
      answer: 1,
      explain: `Both dollar signs lock the reference so it doesn't shift when copied.`,
    },
    {
      q: `Pressing F4 while editing a reference:`,
      options: [`Runs it`, `Cycles absolute/mixed/relative ($ states)`, `Deletes it`, `Names it`],
      answer: 1,
      explain: `F4 toggles $A$1 → A$1 → $A1 → A1.`,
    },
    {
      q: `COUNTA differs from COUNT in that it:`,
      options: [`Counts only numbers`, `Counts any non-empty cell`, `Counts blanks`, `Counts errors`],
      answer: 1,
      explain: `COUNTA includes text and numbers; COUNT is numbers only.`,
    },
    {
      q: `=SUMIF(Region, "North", Amount) returns:`,
      options: [`Count of North`, `Total Amount where Region is North`, `Average Amount`, `Max Amount`],
      answer: 1,
      explain: `SUMIF totals the values where the criteria match.`,
    },
    {
      q: `When a few extreme values exist, the AVERAGE is:`,
      options: [`Unaffected`, `Pulled toward the extremes, unlike the MEDIAN`, `Always the median`, `Zero`],
      answer: 1,
      explain: `Report both; a large gap between mean and median signals skew.`,
    },
    {
      q: `IFERROR is mainly used to:`,
      options: [`Create errors`, `Keep error codes out of reports by substituting a value`, `Count errors`, `Highlight errors`],
      answer: 1,
      explain: `It returns a clean value when the wrapped formula errors.`,
    },
    {
      q: `AND inside IF requires:`,
      options: [`One condition true`, `All conditions true`, `No conditions true`, `Text input`],
      answer: 1,
      explain: `=IF(AND(...)) returns the true result only when every condition holds.`,
    },
    {
      q: `TRIM is used to:`,
      options: [`Add spaces`, `Remove stray leading/trailing/double spaces`, `Capitalize`, `Convert to number`],
      answer: 1,
      explain: `It cleans spacing that silently breaks matching and grouping.`,
    },
    {
      q: `PROPER("data analytics") returns:`,
      options: [`DATA ANALYTICS`, `Data Analytics`, `data analytics`, `Data analytics`],
      answer: 1,
      explain: `PROPER capitalizes the first letter of each word.`,
    },
    {
      q: `=LEFT(A2, FIND("-", A2) - 1) extracts:`,
      options: [`Everything after the dash`, `Everything before the first dash`, `The dash`, `The last character`],
      answer: 1,
      explain: `FIND locates the dash and LEFT takes everything before it — variable-length parsing.`,
    },
    {
      q: `The TEXT function is used to:`,
      options: [`Convert text to number`, `Format a number/date as a string for labels`, `Trim spaces`, `Count characters`],
      answer: 1,
      explain: `TEXT(value, code) builds formatted text like "$1,200" or "2026-06".`,
    },
    {
      q: `A date is stored internally as:`,
      options: [`Text`, `A serial number (days since 1900-01-01)`, `An image`, `Three numbers`],
      answer: 1,
      explain: `That is why dates can be added, subtracted, and sorted.`,
    },
    {
      q: `=B2-A2 with two real dates returns:`,
      options: [`An error`, `The number of days between them`, `The later date`, `A percent`],
      answer: 1,
      explain: `Subtracting date serial numbers gives the day count.`,
    },
    {
      q: `NETWORKDAYS counts:`,
      options: [`All calendar days`, `Working days, excluding weekends (and listed holidays)`, `Weekends only`, `Months`],
      answer: 1,
      explain: `It powers business-day and SLA calculations.`,
    },
    {
      q: `VLOOKUP's last argument should usually be:`,
      options: [`TRUE`, `FALSE for exact match`, `Omitted`, `1`],
      answer: 1,
      explain: `FALSE forces exact match; the approximate default misbehaves on unsorted data.`,
    },
    {
      q: `INDEX + MATCH is preferred over VLOOKUP because it:`,
      options: [`Is always faster`, `Looks both directions and survives inserted columns`, `Needs no arguments`, `Sorts data`],
      answer: 1,
      explain: `It references columns directly, so it doesn't break when the table is restructured.`,
    },
    {
      q: `Approximate-match lookups assign a band from a number when the table is:`,
      options: [`Unsorted`, `Sorted ascending by lower bound`, `Sorted descending`, `A PivotTable`],
      answer: 1,
      explain: `It returns the largest threshold not exceeding the value.`,
    },
    {
      q: `In Remove Duplicates, the key decision is:`,
      options: [`The font`, `Which columns define a duplicate`, `The color`, `The zoom`],
      answer: 1,
      explain: `Chosen key columns determine which rows are treated as duplicates and deleted.`,
    },
    {
      q: `A Data Validation List restricts a cell to:`,
      options: [`Any text`, `Values chosen from an allowed drop-down list`, `Numbers only`, `Dates only`],
      answer: 1,
      explain: `It stops inconsistent categories at the point of entry.`,
    },
    {
      q: `Data Bars conditional formatting shows:`,
      options: [`A heatmap gradient`, `An in-cell bar proportional to the value`, `Icons`, `Duplicates`],
      answer: 1,
      explain: `Data Bars give a quick magnitude comparison inside the cells.`,
    },
    {
      q: `A multi-level sort lets you order by:`,
      options: [`Only one column`, `A primary key, then break ties by another column`, `Color only`, `Rows then columns randomly`],
      answer: 1,
      explain: `Add "Then by" levels in the Sort dialog, e.g. Region then Revenue.`,
    },
    {
      q: `The Top 10 number filter is used to:`,
      options: [`Delete rows`, `Quickly isolate the largest N items (or percent)`, `Sort A–Z`, `Add a slicer`],
      answer: 1,
      explain: `Set it to Top 5 Items to show the five biggest values.`,
    },
    {
      q: `The four PivotTable drop zones are:`,
      options: [`Sort, Filter, Group, Total`, `Rows, Columns, Values, Filters`, `X, Y, Z, W`, `Data, Chart, Slicer, Timeline`],
      answer: 1,
      explain: `Categories go in Rows/Columns, numbers in Values, and a master filter in Filters.`,
    },
    {
      q: `A PivotChart differs from a normal chart because it:`,
      options: [`Cannot be filtered`, `Is linked to a PivotTable and updates as the pivot changes`, `Has no axes`, `Only shows pies`],
      answer: 1,
      explain: `Its field buttons and connected slicers filter both the chart and its pivot.`,
    },
    {
      q: `To compare values across categories, the best chart is a:`,
      options: [`Line`, `Column (or bar)`, `Scatter`, `Doughnut`],
      answer: 1,
      explain: `Columns/bars compare categories; lines are for trends over time.`,
    },
    {
      q: `Pie charts should be avoided when:`,
      options: [`There are 2 slices`, `There are many slices (angles are hard to compare)`, `Showing parts of a whole`, `Colors are bright`],
      answer: 1,
      explain: `With many slices a bar chart communicates far better.`,
    },
    {
      q: `A Data Table (What-If) is used for:`,
      options: [`Cleaning data`, `Sensitivity analysis — a result across many input values`, `Joining tables`, `Removing duplicates`],
      answer: 1,
      explain: `It recalculates a formula across a range of inputs and lays results in a grid.`,
    },
    {
      q: `A clean dashboard separates:`,
      options: [`Nothing — all on one sheet`, `Raw data, pivots/calculations, and visuals onto different sheets`, `Charts from titles`, `Numbers from text`],
      answer: 1,
      explain: `Layering keeps it maintainable; shared slicers drive all the visuals at once.`,
    },
  ],

};

// Merge the extra questions into the main QUESTIONS object.
Object.keys(EXTRA_QUESTIONS).forEach(key => {
  if (QUESTIONS[key]) {
    QUESTIONS[key] = QUESTIONS[key].concat(EXTRA_QUESTIONS[key]);
  }
});
