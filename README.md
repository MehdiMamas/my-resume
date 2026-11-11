# my-resume

Mehdi Mamas' resume as a single-page website: **https://mehdimamas.github.io/my-resume/**

Full-stack software engineer focused on AI and backend systems. The page covers skills, work experience and projects, and is laid out to print cleanly.

## What is in this repo

Only the built site: `index.html` and the generated bundles in `assets/` (one JavaScript file, one CSS file). It is served as it is by GitHub Pages. There is no source, build step or CI here.

## Run it locally

Any static file server works:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Updating

The bundles are generated, so do not edit them by hand. A change to the content means rebuilding from the resume's source project and committing the new output. If the bundle file names change, update the two references in `index.html`.

## Tech

React and Vite (built output), hosted on GitHub Pages.
