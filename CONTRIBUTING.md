# Contributing to UserScripts-UserStyles

Thank you for your interest in contributing to this project! 🎉

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project adheres to a simple principle: **Be respectful and constructive**. We welcome contributors of all skill levels and backgrounds.

## How Can I Contribute?

### 1. Report Bugs
Found a bug? Please [open an issue](https://github.com/BlackSpirits/UserScripts-UserStyles/issues/new) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Browser and extension versions
- Screenshots if applicable

### 2. Suggest Features
Have an idea? We'd love to hear it! Open an issue describing:
- The feature and its benefits
- Use cases
- Potential implementation approach

### 3. Improve Documentation
Documentation can always be better! Feel free to:
- Fix typos or unclear instructions
- Add examples
- Improve README or code comments

### 4. Submit Code
Ready to code? Great! See the sections below for guidelines.

## Development Setup

### Prerequisites
- A modern browser (Chrome, Firefox, or Edge)
- For **UserScripts**: [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)
- For **UserStyles**: [Stylus](https://add0n.com/stylus.html)
- A text editor (VS Code, Sublime Text, etc.)
- Git for version control

### Getting Started

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/UserScripts-UserStyles.git
   cd UserScripts-UserStyles
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Edit files in `userscripts/` or `userstyles/`
   - Test thoroughly on target websites

4. **Test your changes**
   - Install the script/style locally
   - Test on multiple pages of the target site
   - Verify no console errors
   - Check performance impact

## Coding Standards

### UserScripts (.user.js)

#### Metadata Headers
Always include complete metadata:
```javascript
// ==UserScript==
// @name         Script Name
// @namespace    blackspirits.github.io/
// @version      1.0.0
// @description  Brief description
// @author       Your Name
// @license      MIT
// @homepageURL  https://github.com/BlackSpirits/UserScripts-UserStyles
// @supportURL   https://github.com/BlackSpirits/UserScripts-UserStyles/issues
// @match        *://example.com/*
// @run-at       document-end
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/site/script.user.js
// @updateURL    https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/site/script.user.js
// ==/UserScript==
```

#### JavaScript Style
- Use modern ES6+ syntax (const/let, arrow functions, async/await)
- Use strict mode: `'use strict';`
- Prefer functional programming where appropriate
- Add comments for complex logic
- Use meaningful variable names
- Handle errors gracefully with try-catch

**Example:**
```javascript
(function () {
  'use strict';

  // Good: descriptive name, arrow function
  const removeElement = (selector) => {
    try {
      document.querySelectorAll(selector).forEach(el => el.remove());
    } catch (error) {
      console.error('Failed to remove element:', error);
    }
  };

  // Good: clear purpose
  const init = () => {
    removeElement('.ad-container');
  };

  init();
})();
```

#### Performance Considerations
- Use `requestAnimationFrame` for frequent DOM manipulations
- Throttle MutationObserver callbacks
- Minimize DOM queries (cache selectors)
- Use event delegation where possible

### UserStyles (.user.css)

#### Metadata Headers
```css
/* ==UserStyle==
@name         Style Name
@namespace    blackspirits.github.io/
@version      1.0.0
@description  Brief description
@license      MIT
@author       Your Name
@homepageURL  https://github.com/BlackSpirits/UserScripts-UserStyles
@supportURL   https://github.com/BlackSpirits/UserScripts-UserStyles/issues
@downloadURL  https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userstyles/site/style.user.css
==/UserStyle== */
```

#### CSS Style
- Use CSS custom properties (variables) for colors
- Organize by component/section
- Add section comments
- Use modern CSS features (`:is()`, `:where()` etc.)
- Maintain reasonable specificity
- Use `!important` only when necessary

**Example:**
```css
/* ===========================
   Component Name
   =========================== */

:root {
  --primary-color: #89b4fa;
  --background-color: #1e1e2e;
}

.component {
  background: var(--background-color);
  color: var(--primary-color);
  border-radius: 8px;
}

/* Hover states */
.component:hover {
  opacity: 0.9;
}
```

#### Color Palettes
If using Catppuccin, reference the official palette:
- **Latte** (light): Base `#eff1f5`
- **Frappé** (dark): Base `#303446`
- **Macchiato** (dark): Base `#24273a`
- **Mocha** (dark): Base `#1e1e2e`

See: [Catppuccin Palette](https://github.com/catppuccin/catppuccin)

## Submitting Changes

### Pull Request Process

1. **Update version numbers**
   - Bump version in script/style metadata
   - Follow [Semantic Versioning](https://semver.org/)
     - MAJOR: Breaking changes
     - MINOR: New features (backwards compatible)
     - PATCH: Bug fixes

2. **Update README if needed**
   - Add new features to the table
   - Update descriptions
   - Add screenshots if visual changes

3. **Write a clear commit message**
   ```
   feat: add dark mode toggle to IMDb theme
   
   - Adds user preference for light/dark mode
   - Updates CSS variables dynamically
   - Stores preference in localStorage
   ```

   Use conventional commit prefixes:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation only
   - `style:` Code style (formatting, no logic change)
   - `refactor:` Code refactoring
   - `perf:` Performance improvement
   - `test:` Adding tests
   - `chore:` Maintenance tasks

4. **Create pull request**
   - Provide clear title and description
   - Reference related issues (`Fixes #123`)
   - List changes made
   - Add screenshots for visual changes
   - Mention any breaking changes

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] No console errors
- [ ] No performance issues

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Fixes #(issue number)
```

## Reporting Bugs

### Bug Report Template

**Title**: Brief, descriptive title

**Description**:
A clear description of the bug.

**Steps to Reproduce**:
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**:
What should happen

**Actual Behavior**:
What actually happens

**Environment**:
- Browser: [Chrome 120, Firefox 121, etc.]
- Extension: [Tampermonkey 4.19, Stylus 1.5.37]
- Script/Style Version: [v1.2.0]
- Operating System: [Windows 11, macOS 14, Linux]

**Screenshots**:
If applicable, add screenshots

**Console Errors**:
```
Paste any console errors here
```

## Suggesting Enhancements

### Feature Request Template

**Title**: Brief feature description

**Problem Statement**:
What problem does this solve?

**Proposed Solution**:
How would you implement this?

**Alternatives Considered**:
Other approaches you've thought about

**Additional Context**:
Any other information, mockups, or examples

## Style Guide Summary

### DO ✅
- Test thoroughly before submitting
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Use meaningful names
- Handle errors gracefully
- Consider performance
- Respect user privacy

### DON'T ❌
- Submit untested code
- Introduce breaking changes without discussion
- Add external dependencies without approval
- Include tracking or analytics
- Ignore console errors
- Remove existing functionality
- Use offensive language in code/comments

## Questions?

If you have questions about contributing:
1. Check existing issues for similar questions
2. Open a new issue with the `question` label
3. Reach out via [GitHub Discussions](https://github.com/BlackSpirits/UserScripts-UserStyles/discussions) (if enabled)

## Recognition

Contributors will be:
- Listed in release notes
- Credited in relevant files
- Appreciated in the README (for significant contributions)

Thank you for contributing! 🙏

---

**Happy coding!** 🚀
