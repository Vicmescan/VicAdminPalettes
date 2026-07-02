# VicAdminPalettes — Shopware 6.7 Plugin

Switch the Shopware administration between **four color palettes** with a single click. The selected theme is saved per admin user in the database and applied instantly on every page load.

---

## Palettes

| Name | Accent | Description |
|---|---|---|
| **Shopware** | `#189eff` | Original Shopware blue — the default |
| **Midnight** | `#26262b` | Full dark mode using the Meteor design system |
| **Forest** | `#4caf50` | Deep green sidebar and green brand accents |
| **Ember** | `#ff9800` | Warm orange sidebar and amber brand accents |

<img width="1923" height="963" alt="screenshot" src="https://github.com/user-attachments/assets/f7f43a78-dda1-405e-a5e7-a3a4e4624753" />
---

## Features

- **Per-user persistence** — saved to the database via `userConfigService`; each admin user keeps their own preference across sessions and devices
- **Instant apply** — cached in `localStorage` so the chosen theme is applied before Vue mounts, with no flash of the default theme
- **Sidebar overrides** — the Shopware admin sidebar uses hardcoded compiled SCSS values; the plugin injects a `<style>` tag at runtime to override those too
- **Dark mode via Meteor** — Midnight activates `data-theme="dark"` on `<html>`, which triggers the official Meteor component library dark theme for all standard UI components
- **No PHP backend** — pure administration-side JavaScript; no routes, no migrations, nothing to break on upgrades

---

## How to use

After activating the plugin, click your **avatar** in the bottom-left corner of the admin sidebar. A small **"Theme"** row with four colored circles appears above the logout button. Click any circle to switch instantly.

```
Sidebar footer  →  [avatar]  →  Theme: ⬤ ⬤ ⬤ ⬤
                                         └ click to switch
```

---

## Requirements

| Dependency | Version |
|---|---|
| Shopware | ~6.7.0 |
| PHP | ^8.2 |

---

## Installation

```bash
bin/console plugin:refresh
bin/console plugin:install --activate VicAdminPalettes
```

Then rebuild the administration:

```bash
cd vendor/shopware/administration/Resources/app/administration
PROJECT_ROOT=/var/www/html \
ADMIN_ROOT=/var/www/html/vendor/shopware/administration \
SHOPWARE_ADMIN_SKIP_SOURCEMAP_GENERATION=1 \
npm run build

bin/console assets:install
bin/console cache:clear
```

---

## Structure

```
VicAdminPalettes/
├── composer.json
└── src/
    ├── VicAdminPalettes.php                      # Minimal plugin class (no lifecycle logic)
    └── Resources/
        ├── config/
        │   └── plugin.png                        # Plugin icon
        └── app/administration/src/
            ├── main.js
            └── module/vic-admin-palettes/
                ├── index.js                      # Module entry — applies cached palette on load
                ├── palettes.js                   # Palette definitions + applyPalette()
                ├── component/
                │   └── vic-palette-switcher/     # Swatch UI component
                ├── extension/
                │   └── sw-admin-menu/            # Injects switcher into the user actions popup
                └── snippet/
                    ├── en-GB.json
                    ├── es-ES.json
                    └── de-DE.json
```

---

## How it works

`applyPalette(id)` does three things every time a palette is selected:

1. **`data-theme` attribute** — sets or removes `data-theme="dark"` on `<html>`, which activates/deactivates the Meteor component library dark theme via its CSS `[data-theme='dark']` selector.
2. **CSS custom properties** — sets or resets palette-specific CSS variables (brand color scale, interaction tokens) directly on `document.documentElement.style`, which overrides any stylesheet value.
3. **Injected `<style>` tag** — creates or removes a `<style id="vic-admin-palettes-style">` element in `<head>` to override components that use hardcoded compiled SCSS values (sidebar, `sw-meteor-page__head-area`, etc.) which cannot be reached via CSS variables alone.

---

## Author

**Vicmescan** · [github.com/Vicmescan](https://github.com/Vicmescan)
