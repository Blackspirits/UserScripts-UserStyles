# Contributing Guide

Thank you for taking the time to contribute! Here's how to get started.

## Reporting Issues

Use the issue templates provided:

- **Bug report** — something broken or behaving unexpectedly
- **Feature request** — a new idea or improvement
- **Site support** — a site-specific request (e.g. new match domain)

Please search existing issues before opening a new one.

## Submitting a Pull Request

1. Fork the repository and create a new branch from `main`
2. Make your changes following the conventions below
3. Test your script/style in at least one userscript manager (Tampermonkey or Violentmonkey)
4. Submit a pull request with a clear description of what changed and why

## Code Conventions

### UserScripts

- Use `'use strict'`
- Keep metadata complete: `@name`, `@namespace`, `@version`, `@description`, `@author`, `@license`, `@match`, `@grant`
- Use `blackspirits.github.io/` as `@namespace`
- Prefer `GM_getValue` / `GM_setValue` for persistence
- Avoid `innerHTML` with user-controlled data — prefer DOM methods or sanitised strings
- Wrap `JSON.parse` calls in `try/catch`

### UserStyles

- Use CSS custom properties for theme tokens
- Group rules by section with a comment header
- Avoid `!important` unless overriding inline styles from the target site

## File Structure

```
userscripts/
  <site>/
    <site>-<purpose>.user.js

userstyles/
  <site>/
    <site>-<theme>.user.css
```

## Versioning

Scripts follow [Semantic Versioning](https://semver.org/):

- `MAJOR` — breaking change or full rewrite
- `MINOR` — new feature, backwards compatible
- `PATCH` — bug fix or small improvement

## License

By contributing, you agree your work will be licensed under the [MIT License](./LICENSE).
