const l={"vic-admin-palettes":{switcher:{label:"Theme"},palettes:{shopware:"Shopware (default)",midnight:"Midnight",forest:"Forest",ember:"Ember"}}},m={"vic-admin-palettes":{switcher:{label:"Farbschema"},palettes:{shopware:"Shopware (Standard)",midnight:"Mitternacht",forest:"Wald",ember:"Glut"}}},b={"vic-admin-palettes":{switcher:{label:"Tema"},palettes:{shopware:"Shopware (por defecto)",midnight:"Medianoche",forest:"Bosque",ember:"Brasa"}}},r="vic-admin-palettes.palette",s="vic-admin-palettes-style",n={shopware:{id:"shopware",color:"#189eff",vars:null,menuCss:null,darkTheme:!1},midnight:{id:"midnight",color:"#26262b",vars:null,darkTheme:!0,menuCss:`
            body { background: #09090b !important; }

            /* Sidebar */
            .sw-admin-menu,
            .sw-admin-menu_flyout-holder { background: #141418 !important; }
            .sw-admin-menu .sw-admin-menu__navigation-link.router-link-active { background: #09090b !important; }
            .sw-admin-menu .sw-admin-menu__navigation-list-item:hover,
            .sw-admin-menu__navigation-list-item.is--flyout-enabled { background: #26262b !important; }
            .sw-admin-menu__navigation-list-item.is--entry-expanded,
            .sw-admin-menu__navigation-list-item.is--entry-expanded:hover { background: #09090b !important; }
            .sw-admin-menu__user-actions-toggle { background: #09090b !important; }
            .sw-admin-menu__user-actions-toggle:hover,
            .sw-admin-menu__user-actions-toggle.is--active { background: #1e1e24 !important; }
            .sw-admin-menu__user-actions .sw-admin-menu__navigation-list-item { background: #09090b !important; }
            .sw-admin-menu__user-actions-label { background: #09090b !important; }

            /* sw-meteor-page header — uses hardcoded $color-white in SCSS, not a CSS variable */
            .sw-meteor-page__head-area {
                background: #141418 !important;
                border-bottom-color: #2d2e32 !important;
                color: #fafbfe !important;
            }
            .sw-meteor-page__head-area-top-bar-content::after {
                background-color: #2d2e32 !important;
            }
            .sw-meteor-page__smart-bar-title { color: #fafbfe !important; }

            /* Category tree side panel — sw-category-detail.scss hardcodes $color-white */
            .sw-category .sw-page__side-content { background: #1e1e24 !important; }

            /* Category tree popover — hardcoded white bg not following dark theme */
            .sw-popover__wrapper {
                background: #1e1e24 !important;
                border-color: #2d2e32 !important;
            }
            .sw-popover__wrapper .sw-tree-item__label {
                color: #fafbfe !important;
            }
            .sw-popover__wrapper .sw-tree-item__icon svg path {
                fill: #8b8b9b !important;
            }

            /* Autofill — browser forces white bg via box-shadow inset; override with dark */
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 1000px #1e1e24 inset !important;
                -webkit-text-fill-color: #fafbfe !important;
            }
        `},forest:{id:"forest",color:"#4caf50",darkTheme:!1,vars:{"--color-shopware-brand-50":"#e8f5e9","--color-shopware-brand-100":"#c8e6c9","--color-shopware-brand-200":"#a5d6a7","--color-shopware-brand-300":"#81c784","--color-shopware-brand-400":"#66bb6a","--color-shopware-brand-500":"#4caf50","--color-shopware-brand-600":"#43a047","--color-shopware-brand-700":"#388e3c","--color-shopware-brand-800":"#2e7d32","--color-shopware-brand-900":"#1b5e20","--color-interaction-primary-default":"#388e3c","--color-interaction-primary-hover":"#2e7d32","--color-interaction-primary-pressed":"#1b5e20","--color-interaction-primary-disabled":"#a5d6a7","--color-icon-brand-default":"#388e3c","--color-icon-brand-hover":"#2e7d32","--color-icon-brand-pressed":"#1b5e20","--color-icon-brand-disabled":"#a5d6a7","--color-text-brand-default":"#388e3c","--color-text-brand-hover":"#2e7d32","--color-text-brand-pressed":"#1b5e20","--color-text-brand-disabled":"#a5d6a7","--color-text-brand-inverse":"#66bb6a","--color-border-brand-selected":"#388e3c","--color-border-brand-default":"#388e3c","--color-border-brand-disabled":"#a5d6a7","--color-background-brand-default":"#e8f5e9"},menuCss:`
            .sw-admin-menu,
            .sw-admin-menu_flyout-holder { background: #1a3d2a !important; }
            .sw-admin-menu .sw-admin-menu__navigation-link.router-link-active { background: #0d2a1a !important; }
            .sw-admin-menu .sw-admin-menu__navigation-list-item:hover,
            .sw-admin-menu__navigation-list-item.is--flyout-enabled { background: #1e4a30 !important; }
            .sw-admin-menu__navigation-list-item.is--entry-expanded,
            .sw-admin-menu__navigation-list-item.is--entry-expanded:hover { background: #0d2a1a !important; }
            .sw-admin-menu__user-actions-toggle { background: #0d2a1a !important; }
            .sw-admin-menu__user-actions-toggle:hover,
            .sw-admin-menu__user-actions-toggle.is--active { background: #143320 !important; }
            .sw-admin-menu__user-actions .sw-admin-menu__navigation-list-item { background: #0d2a1a !important; }
            .sw-admin-menu__user-actions-label { background: #0d2a1a !important; }
        `},ember:{id:"ember",color:"#ff9800",darkTheme:!1,vars:{"--color-shopware-brand-50":"#fff3e0","--color-shopware-brand-100":"#ffe0b2","--color-shopware-brand-200":"#ffcc80","--color-shopware-brand-300":"#ffb74d","--color-shopware-brand-400":"#ffa726","--color-shopware-brand-500":"#ff9800","--color-shopware-brand-600":"#fb8c00","--color-shopware-brand-700":"#f57c00","--color-shopware-brand-800":"#ef6c00","--color-shopware-brand-900":"#e65100","--color-interaction-primary-default":"#f57c00","--color-interaction-primary-hover":"#ef6c00","--color-interaction-primary-pressed":"#e65100","--color-interaction-primary-disabled":"#ffcc80","--color-icon-brand-default":"#f57c00","--color-icon-brand-hover":"#ef6c00","--color-icon-brand-pressed":"#e65100","--color-icon-brand-disabled":"#ffcc80","--color-text-brand-default":"#f57c00","--color-text-brand-hover":"#ef6c00","--color-text-brand-pressed":"#e65100","--color-text-brand-disabled":"#ffcc80","--color-text-brand-inverse":"#ffa726","--color-border-brand-selected":"#f57c00","--color-border-brand-default":"#f57c00","--color-border-brand-disabled":"#ffcc80","--color-background-brand-default":"#fff3e0"},menuCss:`
            .sw-admin-menu,
            .sw-admin-menu_flyout-holder { background: #3e2000 !important; }
            .sw-admin-menu .sw-admin-menu__navigation-link.router-link-active { background: #2a1500 !important; }
            .sw-admin-menu .sw-admin-menu__navigation-list-item:hover,
            .sw-admin-menu__navigation-list-item.is--flyout-enabled { background: #4a2800 !important; }
            .sw-admin-menu__navigation-list-item.is--entry-expanded,
            .sw-admin-menu__navigation-list-item.is--entry-expanded:hover { background: #2a1500 !important; }
            .sw-admin-menu__user-actions-toggle { background: #2a1500 !important; }
            .sw-admin-menu__user-actions-toggle:hover,
            .sw-admin-menu__user-actions-toggle.is--active { background: #361c00 !important; }
            .sw-admin-menu__user-actions .sw-admin-menu__navigation-list-item { background: #2a1500 !important; }
            .sw-admin-menu__user-actions-label { background: #2a1500 !important; }
        `}},u=[...new Set(Object.values(n).flatMap(e=>e.vars?Object.keys(e.vars):[]))];function i(e){const o=n[e]||n.shopware;o.darkTheme?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),u.forEach(t=>document.documentElement.style.removeProperty(t)),o.vars&&Object.entries(o.vars).forEach(([t,d])=>{document.documentElement.style.setProperty(t,d)});let a=document.getElementById(s);o.menuCss?(a||(a=document.createElement("style"),a.id=s,document.head.appendChild(a)),a.textContent=o.menuCss):a&&a.remove()}const p=`{% block vic_palette_switcher %} <li class="vic-palette-switcher sw-admin-menu__navigation-list-item"> {% block vic_palette_switcher_label %} <span class="vic-palette-switcher__label"> {{ $t('vic-admin-palettes.switcher.label') }} </span> {% endblock %} {% block vic_palette_switcher_swatches %} <div class="vic-palette-switcher__swatches"> <button v-for="palette in palettes" :key="palette.id" class="vic-palette-switcher__swatch" :class="{ 'is--active': currentPaletteId === palette.id }" :style="{ backgroundColor: palette.color }" :title="$t('vic-admin-palettes.palettes.' + palette.id)" :aria-pressed="currentPaletteId === palette.id ? 'true' : 'false'" @click="selectPalette(palette.id)" /> </div> {% endblock %} </li> {% endblock %}`,{Component:w}=Shopware;w.register("vic-palette-switcher",{template:p,data(){return{currentPaletteId:localStorage.getItem(r)||"shopware",palettes:Object.values(n)}},created(){this.syncFromDb()},methods:{async syncFromDb(){var e;try{const a=await Shopware.Service("userConfigService").search([r]),t=(e=a==null?void 0:a.data)==null?void 0:e[r];t&&t!==this.currentPaletteId&&(this.currentPaletteId=t,localStorage.setItem(r,t),i(t))}catch{}},async selectPalette(e){if(e!==this.currentPaletteId){this.currentPaletteId=e,localStorage.setItem(r,e),i(e);try{await Shopware.Service("userConfigService").upsert({[r]:e})}catch{}}}}});const h="{% block sw_admin_menu_user_actions_items %} <vic-palette-switcher /> {% parent %} {% endblock %}",{Component:_}=Shopware;_.override("sw-admin-menu",{template:h});Shopware.Locale.extend("en-GB",l);Shopware.Locale.extend("de-DE",m);Shopware.Locale.extend("es-ES",b);const c=localStorage.getItem(r);c&&i(c);
//# sourceMappingURL=vic-admin-palettes-jeOWyoJI.js.map
