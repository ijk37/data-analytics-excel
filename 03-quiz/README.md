# Quiz

Interactive MCQ quizzes for every topic plus comprehensive mixed quizzes. Built with plain HTML + JavaScript — no server or install required.

## How to use

**Locally:** Open `index.html` in your browser (double-click it). Everything runs offline.

**On GitHub Pages:** [https://ijk37.github.io/data-analytics-excel/03-quiz/](https://ijk37.github.io/data-analytics-excel/03-quiz/)

## Quizzes

### Note-wise (one per topic — 20 questions each)

| # | Topic |
|---|-------|
| 01 | Introduction to Excel |
| 02 | Entering & Organizing Data |
| 03 | Formulas & Cell References |
| 04 | Essential Functions |
| 05 | Logical Functions |
| 06 | Text Functions |
| 07 | Date & Time Functions |
| 08 | Lookup & Reference Functions |
| 09 | Data Cleaning & Validation |
| 10 | Sorting, Filtering & Conditional Formatting |
| 11 | PivotTables & PivotCharts |
| 12 | Charts, Dashboards & What-If |

### Final mixed (50 questions each)

| Quiz | Coverage |
|------|----------|
| Final Mixed 1 — Foundations | Topics 01–06 |
| Final Mixed 2 — Functions & Analysis | Topics 04–09 |
| Final Mixed 3 — Comprehensive | All topics |

## Features

- Two quiz types: **note-wise** (focused on one topic) and **mixed** (cross-topic).
- Questions shuffle on every attempt — and the **answer options shuffle too**, so positions aren't predictable.
- Instant feedback — correct/wrong highlighted after each answer.
- Explanation shown after every question.
- Score, grade, and a review of every wrong answer at the end.
- Retry button re-shuffles and starts over.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Quiz hub — quiz selector |
| `quiz.html` | Quiz engine |
| `data.js` | All questions, answers, and explanations |

## Adding your own questions

Open `data.js` and add an object to the relevant topic array:

```js
{
  q: `Your question text?`,
  options: [`Option A`, `Option B`, `Option C`, `Option D`],
  answer: 2,            // 0-based index of the correct option (here, C)
  explain: `Why the correct answer is correct.`,
}
```

Strings use backticks, so Excel formulas containing `"` and `'` need no escaping. To add a whole new quiz, also add a `{ id, title }` entry to the `TOPICS` array and (optionally) an icon in `index.html`.

---

[← Back to Root](../README.md)
