# Student Job Tracker

A beginner-friendly React mini project for exploring sample student internship opportunities and tracking application progress.

## Live website

[Open Student Job Tracker](https://thaufick18.github.io/studentrepository/) 
https://thaufick18.github.io/studentrepository/

GitHub Actions deploys the site when changes are pushed to `main`.

> The internship listings are sample records for demonstration only. They are not verified live vacancies.

## Features

- Browse eight sample internships across Electronics, Embedded Systems, IoT, Web Development, and Software.
- Search by job title or company and combine the search with category and location filters.
- Open a LinkedIn search for a role, or prefill its title and company in the application form.
- Add applications with student details, date, and status. Required fields and email format are validated.
- Review saved applications, filter by status, and delete records after confirmation.
- Keep application records in browser local storage so they persist across refreshes.
- Responsive navigation and layouts, including mobile support.

## Requirements

- Node.js and npm

## Run locally

From this directory, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    Footer.jsx          Shared footer
    JobCard.jsx         Internship listing card
    Navbar.jsx          Responsive navigation
    SearchBar.jsx       Job search and filters
  pages/
    AddApplication.jsx  Validated application form
    Applications.jsx    Saved applications and status filter
    Home.jsx            Dashboard and summary counts
    Jobs.jsx            Sample directory and combined filters
  App.jsx               Routes and application state
  index.css             Responsive dark technology theme
  main.jsx              React entry point
index.html
package.json
```

## Application data

Application records are stored in the browser under the `student-job-tracker-applications` local-storage key. Clearing browser storage removes those records. The sample job directory is stored in `src/pages/Jobs.jsx`; it is not fetched from an API.

## Presentation overview

- `Navbar` provides active page links and a collapsible mobile menu.
- `JobCard` renders one internship and links to an external search or the prefilled tracking form.
- `SearchBar` exposes title/company search plus category and location filters.
- `Home` summarizes the number of sample jobs and tracked applications.
- `Jobs` filters and displays the local sample directory.
- `AddApplication` validates and saves application records.
- `Applications` lists, filters, and confirms deletion of saved records.
- `App` connects the routes and owns the application state and persistence.
