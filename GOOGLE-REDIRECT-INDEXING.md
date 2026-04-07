# Fix: "Page with redirect" – Google Not Indexing (homesintulesprings.com)

When Google Search Console shows **Page indexing → Page with redirect** and "These pages aren't indexed or served on Google," it usually means Google is seeing redirects (e.g. `http`→`https`, `www`↔ non-`www`) and is not treating those URLs as the final page to index.

This guide is for **www.homesintulesprings.com** (this repo).

---

## 1. Pick one canonical URL

This site uses **https://www.homesintulesprings.com** (with www) everywhere (sitemap, metadata, canonicals). Stick with that.

- **Canonical:** **https://www.homesintulesprings.com**
- Use it in: sitemap, internal links, canonical tags, Google Search Console property.

---

## 2. Redirect everything else to that URL (301)

Configure Vercel (and Cloudflare if used) so that:

| If user or bot requests | Redirect to |
|-------------------------|-------------|
| `http://homesintulesprings.com` | `https://www.homesintulesprings.com` |
| `http://www.homesintulesprings.com` | `https://www.homesintulesprings.com` |
| `https://homesintulesprings.com` | `https://www.homesintulesprings.com` |

- Use **301 (permanent)** redirects.
- No redirect chains; one hop to the canonical URL.

**Vercel:** Project → **Settings → Domains**. Add **www.homesintulesprings.com** as primary. Add **homesintulesprings.com** and set it to **Redirect to www.homesintulesprings.com** (301).

**Cloudflare (if used, DNS only):** At your registrar, point both `www` and apex to the same target; Vercel will handle redirects if you set them in Vercel Domains.

---

## 3. Sitemap and canonicals (this repo)

- **Sitemap** (`app/sitemap.ts`) already lists only **https://www.homesintulesprings.com** URLs.
- **Canonicals:** Layout and pages use `metadataBase` and `openGraph.url` with **https://www.homesintulesprings.com**. No change needed if you keep www as canonical.

---

## 4. Google Search Console

1. **Property:** Use a property for **https://www.homesintulesprings.com**. Add it if you only had the non-www or http version.
2. **Sitemaps:** Submit **https://www.homesintulesprings.com/sitemap.xml**.
3. **URL Inspection:** For important canonical URLs (e.g. `/`, `/listings`, `/about`), use **Request indexing**.
4. **"Page with redirect":** After 301s and canonicals are correct, this count should go down as Google recrawls.

---

## 5. Checklist

- [ ] Canonical base URL: **https://www.homesintulesprings.com**
- [ ] 301 redirects: `http` → `https`, and **homesintulesprings.com** → **www.homesintulesprings.com**
- [ ] Sitemap lists only **https://www.homesintulesprings.com/...** (already done in this repo)
- [ ] GSC property is **https://www.homesintulesprings.com**; sitemap submitted; Request indexing for key pages

After this, "Page with redirect" should decrease as Google recrawls and indexes the canonical URLs.

---

## 6. Resolve GSC “Page with redirect” (validation workflow)

**What the report means:** URLs such as `http://`, apex (non-`www`), or legacy `*.html` paths are **not** errors—they redirect to the canonical site. Google lists them as “Page with redirect” because it does not index the **source** URL; it should index the **destination**.

### 6a. Inspect canonical destinations (success = indexed)

In **Google Search Console** → **URL Inspection**, paste each **canonical** URL below (same set as `app/sitemap.ts` / `NAV_ROUTES` in `lib/site-contact.ts`). Confirm the live page is **200** and indexing status shows **URL is on Google** (or acceptable alternate) for the **destination**, not the redirecting variant.

| Path | Full canonical URL |
|------|----------------------|
| `/` | `https://www.homesintulesprings.com/` |
| `/buyers` | `https://www.homesintulesprings.com/buyers` |
| `/sellers` | `https://www.homesintulesprings.com/sellers` |
| `/listings` | `https://www.homesintulesprings.com/listings` |
| `/about` | `https://www.homesintulesprings.com/about` |
| `/contact` | `https://www.homesintulesprings.com/contact` |
| `/tule-springs` | `https://www.homesintulesprings.com/tule-springs` |
| `/tule-springs-homes-for-sale` | `https://www.homesintulesprings.com/tule-springs-homes-for-sale` |
| `/tule-springs-villages` | `https://www.homesintulesprings.com/tule-springs-villages` |
| `/tule-springs-schools` | `https://www.homesintulesprings.com/tule-springs-schools` |
| `/tule-springs-amenities` | `https://www.homesintulesprings.com/tule-springs-amenities` |
| `/why-tule-springs` | `https://www.homesintulesprings.com/why-tule-springs` |
| `/tule-springs-real-estate` | `https://www.homesintulesprings.com/tule-springs-real-estate` |
| `/tule-springs-neighborhoods` | `https://www.homesintulesprings.com/tule-springs-neighborhoods` |
| `/north-las-vegas-tule-springs` | `https://www.homesintulesprings.com/north-las-vegas-tule-springs` |
| `/tule-springs-new-homes` | `https://www.homesintulesprings.com/tule-springs-new-homes` |

- If **destinations** are indexed: treat the redirect report as **expected**; no code change required for those rows.
- Use **Request indexing** sparingly for high-priority canonical URLs if needed.

### 6b. Validate Fix — only when needed

Click **Validate Fix** in the Page indexing report **only if** GSC shows **stale or wrong** redirect behavior (e.g. wrong target, soft redirect, or chain). Do **not** validate merely because the count is non-zero—redirect sources are often permanently non-indexed by design.

### 6c. Canonical link audit (repo)

- **App Router** internal links use path-only `Link href="/..."` (no `.html`, no apex, no `http`)—see `components/Header.tsx`, `components/Footer.tsx`.
- **Sitemap / robots** use `SITE_URL` = `https://www.homesintulesprings.com` only.
- **Legacy static `*.html` files** in the repo root (if present) are superseded by Next routes; `vercel.json` redirects legacy paths to clean URLs. Prefer linking to `/path` everywhere; update external profiles (GBP, social bios) to **https://www.homesintulesprings.com/...** only.

### Success criteria

- Canonical **https://www.homesintulesprings.com/...** URLs are indexed.
- Redirect variants (`http`, apex, `/page.html`) remain **non-indexed** with valid **301/308** to the canonical URL.
- Sitemap and primary internal navigation do not advertise non-canonical URLs.
