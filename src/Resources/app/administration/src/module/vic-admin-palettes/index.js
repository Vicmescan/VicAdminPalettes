import enGB from './snippet/en-GB.json';
import deDE from './snippet/de-DE.json';
import esES from './snippet/es-ES.json';
import { applyPalette, USER_CONFIG_KEY } from './palettes';

import './component/vic-palette-switcher';
import './extension/sw-admin-menu';

Shopware.Locale.extend('en-GB', enGB);
Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('es-ES', esES);

// Apply the cached palette immediately on module load, before any Vue render
const cachedPaletteId = localStorage.getItem(USER_CONFIG_KEY);
if (cachedPaletteId) {
    applyPalette(cachedPaletteId);
}
