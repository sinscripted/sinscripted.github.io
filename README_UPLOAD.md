# Darrow — Sinscripted File 004

This folder is a self-contained, mobile-first static story page.

## Upload

Copy the entire `darrow/` folder into your site repository so it is reachable as:

`/darrow/`

The page expects the parent directory (`../`) to be the Sinscripted home page.

## Before publishing

1. Replace the generic `https://emochi.com/` CTA in `darrow/index.html` with the final Darrow story URL on Emochi.
2. If your deployed site uses a different route than `/darrow/`, update the Back to Sinscripted links as needed.
3. For best social sharing, change `og:image` to the absolute deployed URL of `assets/darrow-og-1200x630.jpg`.
4. If your existing site already has shared typography, header, footer, or global CSS, you can remove those portions from this standalone page and keep the content sections/assets.

## Image optimization

The source PNG/JPG artwork is not included in this package.

All page artwork has been converted to WebP and resized:
- `-640.webp` = mobile/small-screen source
- `-960.webp` = large mobile/tablet/desktop source
- `darrow-campus-desktop-1600.webp` = wide desktop establishing shot
- `darrow-campus-mobile-*` = separately composed phone version
- `darrow-og-1200x630.jpg` = social-card compatibility image
- `darrow-card-480.webp` = small listing/card thumbnail

## Canon / spoiler handling

Public copy and alt text intentionally avoid:
- the identities of Robert's affair partners
- Robert's hidden motives / panic cover story
- Nicole's hidden reporting role
- any implication that the public has proof beyond what it actually witnessed

Newly settled public visual canon in this package:
- Lowell room: 318
- Molly: blonde hair, bright blue eyes
- Nicole: black bob, green eyes

## Files

- `index.html` — finished page
- `darrow.css` — responsive page styling
- `content-manifest.json` — public image mapping and alt text
- `assets/` — optimized images

