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
- Build command: `test -f src/index.html` (only verifies the static entry point exists).
- Publish directory: `src`.

For an existing Netlify site, open **Project configuration → Developer settings → Continuous deployment → Build settings → Configure** and replace `next build` with `test -f src/index.html` and `.next` with `src`. Leave the base directory at the repository root and the package directory unset. Remove any manually installed Next.js build plugin under **Build plugins**. No environment variables or serverless functions are required.

Commit and push the root `netlify.toml` along with the `src/` directory to the branch connected to Netlify, then retry the deployment. The explicit verification command overrides any old build command without requiring a framework build. If it still fails, inspect the deploy log for the resolved configuration and the first error.

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
