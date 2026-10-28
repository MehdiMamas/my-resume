# AGENTS.md

## What it is
A static, published build of a personal resume page (title "My Resume"). The repo holds only the built output: `index.html` plus hashed bundles in `assets/` (one JS, one CSS). There is no source, `package.json` or CI here.

## Where things live
- `index.html`: page shell with metadata; loads the bundles via relative paths.
- `assets/index-*.js`, `assets/index-*.css`: generated, minified bundles.

## Gotchas
- Do not hand-edit the bundles. A content change means rebuilding from the resume's source project and committing the new output; if the bundle file names change, update the two references in `index.html`.
- Commit history shows changes are merged through PRs.
