# Sinscripted

Official Sinscripted story hub.

**Live URL:** https://sinscripted.github.io/

## Structure

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── site.js
├── assets/
│   ├── covers/
│   └── stories/
│       └── story-one/
├── stories/
│   └── story-one/
│       └── index.html
└── template/
    └── story-template.html
```

## Adding a new story

1. Duplicate `template/story-template.html`.
2. Put the copy at `stories/<story-slug>/index.html`.
3. Add cover art under `assets/covers/`.
4. Add comic/prologue panels under `assets/stories/<story-slug>/`.
5. Add a new story card to the homepage.
6. Replace the disabled Emochi button with the real story URL when ready.

The current first story is intentionally a working placeholder. Its prologue uses CSS-built panels so the site can be previewed before final art is uploaded.
