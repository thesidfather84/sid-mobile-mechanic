# Sid Mobile Mechanic LLC — Company Website

One-page company website for **Sid Mobile Mechanic LLC** (sidmobilemechanic.net), a Louisiana automotive service and technology company and the owner of **BIDWRENX** and **HoundMoto**.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Static content only — no database, no authentication, no backend required.

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

## 2. Replace the BIDWRENX screenshot

The current screenshot lives at:

```
public/projects/bidwrenx-homepage.webp
```

To update it, overwrite that file with a new screenshot and set
`screenshotWidth` / `screenshotHeight` in `data/projects.ts` to the new
image's pixel size (this keeps the layout stable while the image loads).
If you use a different filename, update `screenshot` there too.

## 3. Replace the HoundMoto screenshot

Same as above, at:

```
public/projects/houndmoto-homepage.png
```

## 4. Replace the founder photo

Place a portrait (roughly 560×640, WebP preferred) at:

```
public/founder/sidney-impastato.webp
```

The placeholder is replaced automatically on the next build.

## 5. Update contact details

All contact details live in one file: **`data/contact.ts`**

- `email` — powers the contact form and the displayed address.
- `phone` — set a string to display it, or leave `null` to show "Available on request".
- `formEndpoint` — the form opens the visitor's email app (mailto) by default. To use a real backend later, create a form at [Formspree](https://formspree.io) (or a Vercel serverless function / Resend) and set this to the endpoint URL. The form will then POST there instead.

Other editable content lives alongside it in `data/`:

| File                 | Contents                                   |
| -------------------- | ------------------------------------------ |
| `data/company.ts`    | Company name, founder bio, values, taglines |
| `data/navigation.ts` | Header and footer links                    |
| `data/services.ts`   | Service cards and disclaimer               |
| `data/projects.ts`   | BIDWRENX / HoundMoto cards                 |
| `data/investment.ts` | Investment section copy                    |
| `data/social.ts`     | Social media links (footer)                |

## 6. Update project URLs

Edit **`data/projects.ts`** and set the `url` field for each project:

```ts
url: "https://bidwrenx.com",
```

While `url` is `null`, the card shows a "live link coming soon" note instead of a button.

## 7. Push the repository to GitHub

The repository is connected to https://github.com/thesidfather84/sid-mobile-mechanic. After making changes:

```bash
git add .
git commit -m "Describe your change"
git push
```

(First-time setup on a new machine: `git clone https://github.com/thesidfather84/sid-mobile-mechanic.git`)

## 8. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import `thesidfather84/sid-mobile-mechanic`.
3. Vercel auto-detects Next.js — accept the defaults and click **Deploy**.
4. Every future `git push` to `main` deploys automatically.

## 9. Connect sidmobilemechanic.net

1. In the Vercel project, open **Settings → Domains**.
2. Add `sidmobilemechanic.net` (and `www.sidmobilemechanic.net`).
3. Vercel shows the DNS records to set at your domain registrar:
   - Either change the domain's **nameservers** to Vercel's (easiest), or
   - Add an **A record** for `@` pointing to Vercel's IP and a **CNAME** for `www` pointing to `cname.vercel-dns.com` (Vercel displays the exact values).
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues the HTTPS certificate automatically.

## Project structure

```
app/          Layout, page, global styles, favicon, OG image
components/   Header, Hero, About, Services, Companies, Investment,
              Founder, Contact, Footer
data/         All editable content (see table above)
lib/          Small helpers
public/
  projects/   BIDWRENX / HoundMoto screenshots
  founder/    Founder photo
  branding/   Logos and brand assets
```
