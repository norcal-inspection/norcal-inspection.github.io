# Nor Cal Inspections — Marketing Site

Public marketing site for Nor Cal Inspections. Hosted on GitHub Pages at **norcal-inspection.github.io**.

Built with Vite + React + TypeScript + Tailwind CSS. Deploys automatically via GitHub Actions on every push to `main`.

---

## Deployment Workflow

**Edit → commit + push in GitHub Desktop → live in ~1–2 minutes.**

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the project in the cloud and publishes the result to GitHub Pages. You don't need to run a build step yourself.

> Note: This is slower than the ~30-second loop for the `norcal-tools` HTML/JS tools because this project uses a build step. The tradeoff is keeping the React/Vite stack while still pushing source-only commits.

---

## First-time setup

You only do this once.

### 1. Install Node.js

Download from [nodejs.org](https://nodejs.org). Get the LTS version (currently 20.x).

### 2. Install dependencies and create the lockfile

Open Terminal in the project folder and run:

```bash
npm install
```

This creates `package-lock.json`, which the GitHub Actions workflow needs. **Commit this file** — it must be in the repo for builds to work.

### 3. Create the GitHub repo

This is a **user/org site**, so the repo name must be exactly `norcal-inspection.github.io` (matches the org name).

In GitHub Desktop:
- File → Add Local Repository → choose this folder
- Publish repository → name it `norcal-inspection.github.io`, set visibility, publish

### 4. Enable GitHub Pages with Actions

On GitHub.com:
- Go to the repo → **Settings** → **Pages**
- Under **Source**, select **GitHub Actions** (not "Deploy from a branch")

Once that's set, every push to `main` will build and deploy automatically.

### 5. Push and verify

Make any small change, commit + push in GitHub Desktop. Watch the **Actions** tab on GitHub — you'll see the workflow run. When it finishes (green check), the site is live at `https://norcal-inspection.github.io`.

---

## Day-to-day editing

1. Open the project folder
2. Edit a file (page copy, image, etc.)
3. Open GitHub Desktop → review changes → commit → push
4. Wait ~1–2 minutes
5. Refresh `norcal-inspection.github.io`

That's it. No build step, no terminal.

---

## Working on the site locally (optional)

If you want to preview changes before pushing — useful for bigger edits:

```bash
npm run dev
```

Opens at `http://localhost:5173` and reloads on save. Stop with `Ctrl+C`.

---

## Project structure

```
src/
  assets/           Images (UCSF Helen Diller photos, etc.)
  components/       Header, Footer, Carousel
  pages/            One file per route
    Home.tsx
    About.tsx
    Services.tsx
    Clients.tsx
    Connect.tsx
    HelenDillerProject.tsx
  main.tsx          Routes are defined here
  index.css         Theme tokens + global styles

.github/workflows/
  deploy.yml        GitHub Actions build + deploy

public/
  404.html          SPA fallback for React Router on GitHub Pages
```

---

## Common edits

### Update copy on a page

Open the relevant file in `src/pages/` and edit the text directly. Save, commit, push.

### Swap a project image

Drop the new file into `src/assets/`, then update the `import` line at the top of the page that uses it.

### Add a new page

1. Create the file in `src/pages/` (e.g. `Projects.tsx`).
2. Register the route in `src/main.tsx`:
   ```tsx
   <Route path="/projects" element={<Projects />} />
   ```
3. Link to it from anywhere using `<Link to="/projects">`.

### Add a new project detail page

Use `src/pages/HelenDillerProject.tsx` as the template. Duplicate it, swap the images and copy, register a new route in `main.tsx`.

---

## Troubleshooting

**Push went through but the site didn't update.**
Check the **Actions** tab on GitHub. If the workflow failed (red X), click into it to see the error. Most common cause: `package-lock.json` wasn't committed, or a syntax error in a `.tsx` file.

**A page works at `/` but a deep link like `/about` returns 404.**
This means the `public/404.html` SPA redirect isn't deployed. Confirm the file is in `public/` and was included in the last build.

**Images broken after deploy.**
Confirm the image is imported at the top of the page file (e.g. `import heroImg from "@/assets/hero.avif"`) and used as `src={heroImg}` — not referenced by string path.
