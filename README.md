# HackUMass Website

The HackUMass website is a static site in `src/`. It uses HTML, CSS, and browser JavaScript, with no dependencies or build step.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000 --directory src
```

Open http://localhost:8000.

## Deploy to Netlify

Import this repository into Netlify. The root `netlify.toml` defines:

- Base directory: repository root (leave blank).
- Build command: none (leave blank).
- Publish directory: `src`.

For an existing Netlify site, remove any old Next.js build plugins or framework integrations and check that its build settings match the values above. No environment variables or serverless functions are required.

For a manual deployment, drag the `src` folder into Netlify's deploy interface.

Netlify documentation: https://docs.netlify.com/build/configure-builds/file-based-configuration/

## Editing

- `src/index.html`: page content, schedule events, team members, and asset references.
- `src/style.css`: layout, colors, responsive styles, and hero entrance animations.
- `src/navbar.js`: mobile navigation.
- `src/team.js`: team tabs and photo fallbacks.
- `src/schedule.js`: schedule category assignment.
- `src/assets/`: images used by the site.

The schedule is displayed as scrollable lists. Its categories are Hackathon (red), Food (green), and Workshops & Talks (blue).

Licensed under the MIT license; see `LICENSE`.
