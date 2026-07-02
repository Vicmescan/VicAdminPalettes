import template from './vic-palette-switcher.html.twig';
import './vic-palette-switcher.scss';
import { PALETTES, applyPalette, USER_CONFIG_KEY } from '../../palettes';

const { Component } = Shopware;

Component.register('vic-palette-switcher', {
    template,

    data() {
        return {
            currentPaletteId: localStorage.getItem(USER_CONFIG_KEY) || 'shopware',
            palettes: Object.values(PALETTES),
        };
    },

    created() {
        this.syncFromDb();
    },

    methods: {
        async syncFromDb() {
            try {
                const service = Shopware.Service('userConfigService');
                const response = await service.search([USER_CONFIG_KEY]);
                const value = response?.data?.[USER_CONFIG_KEY];

                if (value && value !== this.currentPaletteId) {
                    this.currentPaletteId = value;
                    localStorage.setItem(USER_CONFIG_KEY, value);
                    applyPalette(value);
                }
            } catch {
                // localStorage cache already applied, nothing to do
            }
        },

        async selectPalette(paletteId) {
            if (paletteId === this.currentPaletteId) {
                return;
            }

            this.currentPaletteId = paletteId;
            localStorage.setItem(USER_CONFIG_KEY, paletteId);
            applyPalette(paletteId);

            try {
                const service = Shopware.Service('userConfigService');
                await service.upsert({ [USER_CONFIG_KEY]: paletteId });
            } catch {
                // palette is applied and cached, DB sync failed silently
            }
        },
    },
});
