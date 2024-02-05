import { defineStore } from 'pinia';

export const switcherStore = defineStore({
    id: 'switcher',
    state: () => ({
        colortheme: 'light',            // light, dark
        direction: 'ltr',               // ltr, rtl
        navigationStyles: 'vertical',   // vertical, horizontal
        menuStyles: '',                 // menu-click, menu-hover, icon-click, icon-hover
        layoutStyles: 'default-menu',   // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
        pageStyles: 'regular',          // regular, classic, modern
        widthStyles: 'fullwidth',       // fullwidth, boxed
        menuPosition: 'fixed',          // fixed, scrollable
        headerPosition: 'fixed',        // fixed, scrollable
        menuColor: 'dark',                  // light, dark, color, gradient, transparent
        headerColor: 'light',                // light, dark, color, gradient, transparent
        themePrimary: '',               // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
        themeBackground: '',
        backgroundImage: '',            // bgimg1, bgimg2, bgimg3, bgimg4, bgimg5
    }),
    getters: {

    },
    actions: {
        colorthemeFn(value) {
            let html = document.querySelector('html');
            if (value == 'light') {
                this.$state.colortheme = 'light';
                html.setAttribute('data-theme-mode', 'light');
                html.setAttribute('data-header-styles', 'light');
                html.setAttribute('data-menu-styles', 'dark');
                html.style.removeProperty('--body-bg-rgb');
                html.style.removeProperty('--body-bg-rgb2');
                html.style.removeProperty('--light-rgb');
                html.style.removeProperty('--form-control-bg');
                html.style.removeProperty('--input-border');
            }
            if (value == 'dark') {
                this.colortheme = 'dark';
                if (!localStorage.getItem('ynexMenu') || localStorage.getItem('ynexMenu') == 'dark') {
                    this.menuColor = 'dark'
                } if (!localStorage.getItem('ynexHeader') || localStorage.getItem('ynexHeader') == 'dark') {
                    this.headerColor = 'dark'
                }
                html.setAttribute('data-theme-mode', 'dark');
                html.setAttribute('data-header-styles', 'dark');
                html.setAttribute('data-menu-styles', 'dark');
                html.style.removeProperty('--body-bg-rgb');
                html.style.removeProperty('--body-bg-rgb2');
                html.style.removeProperty('--light-rgb');
                html.style.removeProperty('--form-control-bg');
                html.style.removeProperty('--input-border');
            }
        },
        directionFn(value) {
            let html = document.querySelector('html');
            if (value === 'rtl') {
                this.$state.direction = 'rtl';
                html.setAttribute("dir", "rtl");

            } else {
                this.$state.direction = 'ltr';
                html.setAttribute("dir", "ltr");
            }
        },
        navigationStylesFn(value) {
            let html = document.querySelector('html');
            if (value == 'horizontal') {
                this.$state.navigationStyles = 'horizontal';
                html.setAttribute('data-nav-layout', 'horizontal');
                html.removeAttribute('data-vertical-style');
                if (!html.getAttribute('data-nav-style')) {
                    html.setAttribute('data-nav-style', 'menu-click');
                }
            } else {
                this.$state.navigationStyles = 'vertical';
                html.setAttribute('data-nav-layout', 'vertical');
                html.setAttribute('data-vertical-style', 'overlay');
                html.removeAttribute('data-nav-style');
                html.removeAttribute('data-toggled');
                // this.layoutStylesFn('default-menu');
            }
        },
        layoutStylesFn(value) {
            let html = document.querySelector('html');
            let appSidebar = document.querySelector('.app-sidebar');
            let mainContentDiv = document.querySelector('.main-content');
            appSidebar?.removeEventListener('mouseenter', this.iconoverLayoutHoverFn);
            appSidebar?.removeEventListener('mouseleave', this.iconoverLayoutHoverFn);
            appSidebar?.removeEventListener('click', this.icontextOpenFn);
            mainContentDiv?.removeEventListener('click', this.icontextCloseFn);
            localStorage.removeItem('ynexmenuStyles');
            html.removeAttribute('data-nav-style');
            switch (value) {
                case 'default-menu':
                    this.$state.layoutStyles = value;
                    html.setAttribute('data-vertical-style', 'overlay');
                    html.removeAttribute('data-toggled');
                    html.setAttribute('data-nav-layout', 'vertical')
                    document.querySelectorAll(".main-menu>li.open").forEach((ele) => {
                        if (!ele?.classList.contains('active')) {
                            ele.classList.remove('open')
                            ele.querySelector('ul').style.display = 'none'
                        }
                    });
                    appSidebar?.addEventListener('mouseenter', this.iconoverLayoutHoverFn);
                    appSidebar?.addEventListener('mouseleave', this.iconoverLayoutHoverFn);
                    break;
                case 'closed-menu':
                    this.$state.layoutStyles = value;
                    html.setAttribute('data-nav-layout', 'vertical');
                    html.setAttribute('data-toggled', 'close-menu-close');
                    html.setAttribute('data-vertical-style', 'closed');
                    document.querySelectorAll(".main-menu>li.open").forEach((ele) => {
                        if (!ele?.classList.contains('active')) {
                            ele.classList.remove('open')
                            ele.querySelector('ul').style.display = 'none'
                        }
                    })
                    break;
                case 'detached':
                    this.$state.layoutStyles = value;
                    html.setAttribute('data-nav-layout', 'vertical');
                    html.setAttribute('data-toggled', 'detached-close');
                    html.setAttribute('data-vertical-style', 'detached');
                    appSidebar?.addEventListener('mouseenter', this.iconoverLayoutHoverFn);
                    appSidebar?.addEventListener('mouseleave', this.iconoverLayoutHoverFn);
                    break;
                case 'icontext-menu':
                    this.$state.layoutStyles = value;
                    html.setAttribute('data-nav-layout', 'vertical');
                    html.setAttribute('data-toggled', 'icon-text-close');
                    html.setAttribute('data-vertical-style', 'icontext');
                    appSidebar?.addEventListener('click', this.icontextOpenFn);
                    mainContentDiv?.addEventListener('click', this.icontextCloseFn);

                    break;
                case 'icon-overlay':
                    this.$state.layoutStyles = value;
                    html.setAttribute('data-nav-layout', 'vertical');
                    html.setAttribute('data-toggled', 'icon-overlay-close');
                    html.setAttribute('data-vertical-style', 'overlay');
                    document.querySelectorAll(".main-menu>li.open").forEach((ele) => {
                        if (!ele?.classList.contains('active')) {
                            ele.classList.remove('open')
                            ele.querySelector('ul').style.display = 'none'
                        }
                    })
                    appSidebar.addEventListener('mouseenter', this.iconoverLayoutHoverFn);
                    appSidebar.addEventListener('mouseleave', this.iconoverLayoutHoverFn);
                    break;
                case 'double-menu':
                    this.$state.layoutStyles = value;
                    html.setAttribute('data-nav-layout', 'vertical');
                    html.setAttribute('data-toggled', 'double-menu-open');
                    html.setAttribute('data-vertical-style', 'doublemenu');
                    const menuSlideItem = document.querySelectorAll(
                        ".main-menu > li > .side-menu__item"
                    );
                    // Create the tooltip element
                    const tooltip = document.createElement("div");
                    tooltip.className = "custome-tooltip";
                    // tooltip.textContent = "This is a tooltip";

                    // Set the CSS properties of the tooltip element
                    tooltip.style.setProperty("position", "fixed");
                    tooltip.style.setProperty("display", "none");
                    tooltip.style.setProperty("padding", "0.5rem");
                    tooltip.style.setProperty("font-weight", "500");
                    tooltip.style.setProperty("font-size", "0.75rem");
                    tooltip.style.setProperty("background-color", "rgb(15, 23 ,42)");
                    tooltip.style.setProperty("color", "rgb(255, 255 ,255)");
                    tooltip.style.setProperty("margin-inline-start", "45px");
                    tooltip.style.setProperty("border-radius", "0.25rem");
                    tooltip.style.setProperty("z-index", "99");
                    let sidemenulink = document.querySelectorAll('.main-menu li > .side-menu__item');
                    sidemenulink?.forEach(ele => ele.removeEventListener('click', this.doubleClickFn))

                    menuSlideItem.forEach((e) => {
                        // Add an event listener to the menu slide item to show the tooltip
                        e?.addEventListener("mouseenter", () => {
                            tooltip.style.setProperty("display", "block");
                            let value = e.querySelector(".side-menu__label")?.childNodes?.[0]?.nodeValue;
                            tooltip.textContent = value;
                            if (
                                document
                                    .querySelector("html")
                                    .getAttribute("data-vertical-style") == "doublemenu"
                            ) {
                                e.appendChild(tooltip);
                            }
                        });

                        // Add an event listener to hide the tooltip
                        e.addEventListener("mouseleave", () => {
                            tooltip.style.setProperty("display", "none");
                            tooltip.textContent =
                                e.querySelector(".side-menu__label")?.textContent;
                            if (
                                document
                                    .querySelector("html")
                                    .getAttribute("data-vertical-style") == "doublemenu"
                            ) {
                                e.removeChild(tooltip);
                            }
                        });
                    });
                    if (!document.querySelector('.double-menu-active')) {
                        html.setAttribute('data-toggled', 'double-menu-close');
                    }
                    break;
            }
        },
        iconoverLayoutHoverFn(event) {
            let html = document.documentElement;
            if (html.getAttribute('data-toggled') === 'icon-overlay-close' || html.getAttribute('data-toggled') === 'detached-close') {
                if (event.type == 'mouseenter') {
                    html.setAttribute('data-icon-overlay', 'open');
                }
                if (event.type == 'mouseleave') {
                    html.removeAttribute('data-icon-overlay');
                }
            }
        },
        icontextOpenFn() {
            let html = document.documentElement;
            if (html.getAttribute('data-toggled') === 'icon-text-close') {
                html.setAttribute('data-icon-text', 'open');
            }
        },
        icontextCloseFn() {
            let html = document.documentElement;
            if (html.getAttribute('data-toggled') === 'icon-text-close') {
                html.removeAttribute('data-icon-text');
            }
        },
        doubleClickFn() {
            var $this = this;
            let html = document.querySelector('html');
            var checkElement = $this.nextElementSibling;
            if (checkElement) {
                if (!checkElement.classList.contains('double-menu-active')) {
                    if (document.querySelector('.slide-menu')) {
                        let slidemenu = document.querySelectorAll('.slide-menu');
                        slidemenu.forEach(e => {
                            if (e?.classList.contains('double-menu-active')) {
                                e.classList.remove('double-menu-active');
                                html.setAttribute('data-toggled', 'double-menu-close');
                            }
                        })
                    }
                    checkElement?.classList.add('double-menu-active');
                    html.setAttribute('data-toggled', 'double-menu-open');
                }
            }
        },
        menuStylesFn(value) {
            let html = document.querySelector('html');
            this.$state.menuStyles = value;
            localStorage.removeItem('ynexverticalstyles');
            html.removeAttribute('data-vertical-style');
            html.removeAttribute('data-hor-style');
            switch (value) {
                case 'menu-click':
                    html.setAttribute('data-nav-style', 'menu-click');
                    html.setAttribute('data-toggled', 'menu-click-closed');
                    break;
                case 'menu-hover':
                    html.setAttribute('data-nav-style', 'menu-hover');
                    html.setAttribute('data-toggled', 'menu-hover-closed');
                    break;
                case 'icon-click':
                    html.setAttribute('data-nav-style', 'icon-click');
                    html.setAttribute('data-toggled', 'icon-click-closed');
                    break;
                case 'icon-hover':
                    html.setAttribute('data-nav-style', 'icon-hover');
                    html.setAttribute('data-toggled', 'icon-hover-closed');
                    break;
            }
        },
        pageStylesFn(value) {
            let html = document.querySelector('html');
            if (value) {
                this.$state.pageStyles = value;
                html.setAttribute('data-page-style', value);
            }
        },
        widthStylesFn(value) {
            let html = document.querySelector('html');
            if (value) {
                this.$state.widthStyles = value;
                html.setAttribute('data-width', value);
            }
        },
        menuPositionFn(value) {
            let html = document.querySelector('html');
            if (value) {
                this.$state.menuPosition = value;
                html.setAttribute('data-menu-position', value);
            }
        },
        headerPositionFn(value) {
            let html = document.querySelector('html');
            if (value) {
                this.$state.headerPosition = value;
                html.setAttribute('data-header-position', value);
            }
        },
        menuColorFn(value) {
            let html = document.querySelector('html');
            if (value) {
                this.$state.menuStyles = value;
                html.setAttribute('data-menu-styles', value);
            }
        },
        headerColorFn(value) {
            let html = document.querySelector('html');
            if (value) {
                this.$state.headerColor = value;
                html.setAttribute('data-header-styles', value);
            }
        },
        themePrimaryFn(value) {
            let html = document.querySelector('html');
            let primaryrgb = value ? value : localStorage.ynexprimaryRGB;
            if (primaryrgb) {
                this.$state.themePrimary = primaryrgb;
                html.style.setProperty('--primary-rgb', primaryrgb)
                localStorage.setItem('ynexprimaryRGB', primaryrgb)
            }
        },
        themeBackgroundFn(val1, val2) {
            let html = document.querySelector('html');
            let bgrgb = val1 ? val1 : localStorage.ynexbodyBgRGB;
            let bgrgb2 = val2 ? val2 : localStorage.ynexbodylightRGB;
            html.setAttribute('data-theme-mode', 'dark');
            html.setAttribute('data-menu-styles', 'dark');
            html.setAttribute('data-header-styles', 'dark');
            if (bgrgb && bgrgb2) {
                html.style.setProperty('--body-bg-rgb', bgrgb);
                html.style.setProperty('--body-bg-rgb2', bgrgb2);
                html.style.setProperty('--light-rgb', bgrgb2);
                html.style.setProperty('--form-control-bg', `rgb(${bgrgb2})`);
                html.style.setProperty('--input-border', "rgba(255,255,255,0.1)");
                localStorage.setItem('ynexbodyBgRGB', bgrgb);
                localStorage.setItem('ynexbodylightRGB', bgrgb2);
            }
            this.colortheme = 'dark';
            if (!localStorage.getItem('ynexMenu') || localStorage.getItem('ynexMenu') == 'dark') {
                this.menuColor = 'dark'
            } if (!localStorage.getItem('ynexHeader') || localStorage.getItem('ynexHeader') == 'dark') {
                this.headerColor = 'dark'
            }
        },
        backgroundImageFn(value) {
            let html = document.querySelector('html');
            this.$state.backgroundImage = value;
            html.setAttribute('data-bg-img', value);
        },
        reset() {
            let html = document.querySelector('html');
            let mainMenuEle = document.querySelector(".main-menu");
            if (localStorage.getItem("ynexnavstyles") == "horizontal" && mainMenuEle) {
                mainMenuEle.style.display = "block"
            }

            // clearing localstorage
            localStorage.clear();

            // reseting to light
            this.colorthemeFn('light');

            //To reset the light-rgb
            html.removeAttribute("style")

            // clearing attibutes
            // removing header, menu, pageStyle & boxed
            html.removeAttribute('data-nav-style');
            html.removeAttribute('data-menu-position');
            html.removeAttribute('data-header-position');
            html.removeAttribute('data-width');
            html.removeAttribute('data-page-style');

            // removing theme styles
            html.removeAttribute('data-bg-img');

            // clear primary & bg color
            html.style.removeProperty(`--primary-rgb`);
            html.style.removeProperty(`--body-bg-rgb`);

            // reseting to ltr
            this.directionFn('ltr');

            // reseting to vertical
            this.navigationStylesFn('vertical');

            // resetting the menu Colot
            this.menuColorFn('dark');

            // to reset horizontal menu scroll
            mainMenuEle ? mainMenuEle.style.marginLeft = "0px" : '';
            mainMenuEle ? mainMenuEle.style.marginRight = "0px" : '';
        },

        retrieveFromLocalStorage() {
            this.direction = localStorage.getItem('ynexdirection') || this.direction;
            this.directionFn(this.direction);
            this.navigationStyles = localStorage.getItem('ynexnavstyles') || this.navigationStyles;
            this.navigationStylesFn(this.navigationStyles);
            this.pageStyles = localStorage.getItem('ynexpageStyle') || this.pageStyles;
            this.pageStylesFn(this.pageStyles);
            this.widthStyles = localStorage.getItem('ynexwidthStyles') || this.widthStyles;
            this.widthStylesFn(this.widthStyles);
            this.menuPosition = localStorage.getItem('ynexmenuposition') || this.menuPosition;
            this.menuPositionFn(this.menuPosition);
            this.headerPosition = localStorage.getItem('ynexheaderposition') || this.headerPosition;
            this.headerPositionFn(this.headerPosition);
            this.themePrimary = localStorage.getItem('ynexprimaryRGB') || this.themePrimary;
            this.themePrimaryFn(this.themePrimary);

            this.colortheme = localStorage.getItem('ynexcolortheme') || this.colortheme;
            this.colorthemeFn(this.colortheme);
            this.backgroundImage = localStorage.getItem('ynexbgimg') || this.backgroundImage;
            this.backgroundImageFn(this.backgroundImage);
            this.themeBackground = localStorage.getItem('ynexbodyBgRGB') || this.themeBackground;
            if (this.themeBackground) {
                this.themeBackgroundFn(this.themeBackground);
                this.colortheme = 'dark';
                this.menuColor = 'dark';
                this.headerColor = 'dark';
            }
            this.menuColor = localStorage.getItem('ynexMenu') ? localStorage.getItem('ynexMenu') :
                (localStorage.getItem('ynexcolortheme') === 'dark' ? 'dark' : this.menuColor);
            this.menuColorFn(this.menuColor);
            this.headerColor = localStorage.getItem('ynexHeader') ? localStorage.getItem('ynexHeader') :
                (localStorage.getItem('ynexcolortheme') === 'dark' ? 'dark' : this.headerColor);
            this.headerColorFn(this.headerColor);
            this.menuStyles = localStorage.getItem('ynexmenuStyles') || this.menuStyles;
            if (!localStorage.getItem('ynexverticalstyles')) {
                this.menuStylesFn(this.menuStyles);
            }
            this.layoutStyles = localStorage.getItem('ynexverticalstyles') || this.layoutStyles;
            if (!localStorage.getItem('ynexmenuStyles') && localStorage.getItem('ynexnavstyles') != 'horizontal' && !localStorage.getItem('ynexmenuStyles')) {
                this.layoutStylesFn(this.layoutStyles);
            }
        },
        custompageLocalStorage() {
            this.colortheme = localStorage.getItem('ynexcolortheme') || this.colortheme;
            this.colorthemeFn(this.colortheme);
            this.direction = localStorage.getItem('ynexdirection') || this.direction;
            this.directionFn(this.direction);
            this.navigationStyles = 'horizontal';
            this.navigationStylesFn(this.navigationStyles);
            this.themePrimary = localStorage.getItem('ynexprimaryRGB') || this.themePrimary;
            this.themePrimaryFn(this.themePrimary);
            this.themeBackground = localStorage.getItem('ynexbodyBgRGB') || this.themeBackground;
            if (this.themeBackground) {
                this.themeBackgroundFn(this.themeBackground);
                this.colortheme = 'dark';
                this.menuColor = 'light';
                this.headerColor = 'light';
            }
            document.documentElement.removeAttribute("data-menu-styles");
        },
        custompageReset() {
            let html = document.querySelector('html');

            // clearing localstorage
            localStorage.clear();

            // reseting to light
            this.colorthemeFn('light');

            //To reset the light-rgb
            html.removeAttribute("style")

            // clearing attibutes
            // removing header, menu, pageStyle & boxed
            html.removeAttribute('data-nav-style');
            html.removeAttribute('data-menu-position');
            html.removeAttribute('data-header-position');
            html.removeAttribute('data-width');
            html.removeAttribute('data-page-style');

            // removing theme styles
            html.removeAttribute('data-bg-img');

            // clear primary & bg color
            html.style.removeProperty(`--primary-rgb`);
            html.style.removeProperty(`--body-bg-rgb`);

            // reseting to ltr
            this.directionFn('ltr');

            // reseting to vertical
            this.navigationStylesFn('horizontal');

            // resetting the menu Colot
            document.documentElement.removeAttribute("data-menu-styles");
        },
    },
});
