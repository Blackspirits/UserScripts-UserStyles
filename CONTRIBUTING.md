# Contributing

Thanks for your interest in contributing to this project.

## Reporting bugs

Use the [Bug Report](https://github.com/BlackSpirits/UserScripts-UserStyles/issues/new?template=bug_report.md) issue template.  
Please include: browser, userscript manager, script version, and steps to reproduce.

## Requesting features or site support

Use the [Feature Request](https://github.com/BlackSpirits/UserScripts-UserStyles/issues/new?template=feature_request.md) or [Site Support](https://github.com/BlackSpirits/UserScripts-UserStyles/issues/new?template=site_support.md) templates.

## Submitting a pull request

1. Fork the repository and create a branch from `main`.
2. Keep changes focused — one fix or feature per PR.
3. Follow the existing code style (see `.eslintrc.json` and `.stylelintrc.json`).
4. Test your changes in at least one Chromium-based browser with Tampermonkey or Violentmonkey.
5. Update the relevant `Changelog` section in `CHANGELOG.md`.
6. Open a pull request against `main` using the provided template.

## Code style

- UserScripts: ES2020+, no external dependencies at runtime unless strictly necessary.
- UserStyles: standard CSS or Less (userstyles-world), Catppuccin palette tokens where applicable.
- All files use 4-space indentation.

## Licence

By contributing you agree that your changes will be released under the [MIT Licence](./LICENSE).
