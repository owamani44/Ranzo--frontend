# Ranzo Frontend

Ranzo Frontend is a React + TypeScript dashboard for ranch operations, including animal summaries, charts, and records views.

## Tech Stack
- React 19
- TypeScript
- Vite
- React Router
- Sass (SCSS)
- MUI + React Icons
- Chart.js (`react-chartjs-2`)

## Pages and Routes
- `/` - Dashboard (home)
- `/login` - Login page
- `/register` - Register page
- `/animals` - Animals page
- `/medical-records` - Medical records page
- `/weight-records` - Weight records page

## Project Structure
```text
src/
  Components/
    chart/
    featured/
    navbar/
    sidebar/
    table/
    widget/
  Pages/
    animal/
    home/
    login/
    medical/
    weight/
  data/
    sourceData.json
    weights.json
  App.tsx
  main.tsx
```

## Getting Started
### Prerequisites
- Node.js 20+
- npm 10+

### Install
```bash
cd Ranzo
npm install
```

### Run in Development
```bash
npm run dev
```
Open `http://localhost:5173`.

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Current Data Usage
- `Chart` uses `src/data/weights.json`.
- `Featured` uses `src/data/sourceData.json`.
- `Table` currently uses local dummy data in `src/Components/table/Table.tsx` and derives column headers from JSON keys.

## Notes
- Styling is SCSS per component/page.
- Routing is configured in `src/App.tsx`.
