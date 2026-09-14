# Go-Live: pointing norcalinspection.com at this site

Status as of 2026-09-10: code changes are done and committed. **Blocked on GoDaddy DNS
access** — the steps below are what remains. Nothing here needs a rebuild; the `CNAME`
file is already in `public/` and ships with every deploy.

Target: **apex domain `norcalinspection.com`** as the primary address, with `www` redirecting to it.

---

## 1. Push the code (if not already pushed)

```
git add -A
git commit -m "Custom domain + SEO: sitemap, robots, structured data, per-route meta"
git push origin main
```

GitHub Actions builds and deploys automatically on push to `main`. Confirm a green
"Deploy to GitHub Pages" run in the repo's **Actions** tab.

---

## 2. GoDaddy DNS records

GoDaddy → the domain → **DNS → Manage DNS**.

1. **Delete** GoDaddy's existing parked `A` record on `@` (and any parked `CNAME` on `www`).
2. Add these records:

| Type  | Name (Host) | Value                          |
|-------|-------------|--------------------------------|
| A     | `@`         | `185.199.108.153`              |
| A     | `@`         | `185.199.109.153`              |
| A     | `@`         | `185.199.110.153`              |
| A     | `@`         | `185.199.111.153`              |
| CNAME | `www`       | `norcal-inspection.github.io`  |

Optional IPv6 (add all four if GoDaddy allows AAAA):

| Type | Name | Value                   |
|------|------|-------------------------|
| AAAA | `@`  | `2606:50c0:8000::153`   |
| AAAA | `@`  | `2606:50c0:8001::153`   |
| AAAA | `@`  | `2606:50c0:8002::153`   |
| AAAA | `@`  | `2606:50c0:8003::153`   |

Propagation is usually minutes; allow up to 48 h worst case.

---

## 3. GitHub repo settings

Repo → **Settings → Pages**:

1. **Custom domain** → enter `norcalinspection.com` → Save.
2. Wait for the "DNS check successful" green check.
3. Tick **Enforce HTTPS** (the certificate can take a few hours to issue after the
   check passes).

---

## 4. Domain verification (recommended, prevents takeover)

GitHub → your **account** Settings → **Pages** → **Add a domain** →
it gives you a `TXT` record like `_github-pages-challenge-norcal-inspection` with a
value. Add that as a `TXT` record in GoDaddy, then click Verify.

---

## 5. After the domain is live

- Google Search Console → add property `https://norcalinspection.com` →
  submit sitemap `https://norcalinspection.com/sitemap.xml`.
- Spot-check: `https://norcalinspection.com`, `https://www.norcalinspection.com`
  (should redirect to apex), and a deep link like
  `https://norcalinspection.com/projects/richmond-transit-village` (should load, not 404).

---

## Follow-ups not blocked on DNS

- Replace `public/favicon.png` with a square icon and `public/og-image.png` with a
  1200×630 graphic (same filenames — no code change).
- The 4 placeholder pages (`/about`, `/services`, `/clients`, `/connect`) are
  `noindex` and excluded from the sitemap. Remove the `noindex` prop in each page's
  `<Seo>` and add them to `public/sitemap.xml` once they have real content.
- Hero video `src/assets/aerial-crane.mp4` is ~46 MB — compress it; it's the largest
  performance drag on the homepage.
- Contact form on the homepage is now wired to Web3Forms (real `<form>` with
  fetch submit + status messages in `src/pages/Home.tsx`, styles in `index.css`).
  **Remaining:** create the access key at web3forms.com using
  `norcalinspection@icloud.com`, then replace `WEB3FORMS_ACCESS_KEY` at the top of
  `src/pages/Home.tsx` and push. Submissions email to that iCloud address; the
  `email` field is set as reply-to. Honeypot spam field included.
