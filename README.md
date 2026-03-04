# aps

A small security scan dashboard. You get a main dashboard with scan summaries and a table of scans, and clicking a row takes you to that scan’s detail view (progress, stages, activity log, findings). There’s also a signup and a login page with a fixed dark layout; login/signup send you to the dashboard.

**Run it:** `npm install` then `npm run dev`. Open `http://localhost:3000`. The root route is the dashboard. Use the sidebar to move around (Dashboard, Scans, etc.). Scans in the table link to `/scan/[id]`. Signup and login live at `/signup` and `/login`.

Everything is wired to mock data (see the `constants` folder). The app supports light and dark theme; the signup/login screens stay in their own dark style and don’t use the theme toggle. Loading states use skeleton placeholders and a short delay so you can see them when navigating.
