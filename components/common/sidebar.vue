<template lang="">
  <!-- Start::app-sidebar -->
  <div id="responsive-overlay" @click="mainContentFn"></div>
    <aside class="app-sidebar sticky" :class="{'sticky-pin' : menuOverflowed}" id="sidebar">
        <!-- Start::main-sidebar-header -->
        <div class="main-sidebar-header">
            <NuxtLink  to='/' class="header-logo">
                <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo">
                <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
                <img src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark">
                <img src="/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white">
                <img src="/images/brand-logos/toggle-white.png" alt="logo" class="toggle-white">
            </NuxtLink>
        </div>
        <!-- End::main-sidebar-header -->

        <!-- Start::main-sidebar -->
        <PerfectScrollbar class="main-sidebar" id="sidebar-scroll">
                <div class="hor-scroll">
                    <!-- Start::nav -->
                    <nav class="main-menu-container nav nav-pills flex-column sub-open">
                        <div class="slide-left" id="slide-left" @click="leftArrowFn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
                        </div>
                        <ul class="main-menu">
                            <li v-for="(mainmenuItem, index) in menuData" :key="index"
                            :class="`${mainmenuItem.menuTitle ? 'slide__category' : ''} ${mainmenuItem?.type == 'link'? 'slide' : ''} ${mainmenuItem?.type == 'empty'? 'slide' : ''} ${mainmenuItem?.type == 'sub' ? 'slide has-sub' : ''} ${mainmenuItem?.active ? 'open' : ''} ${mainmenuItem?.selected ? 'active' : ''}`">
                                <template v-if="mainmenuItem.menuTitle">
                                    <span class="category-name">{{ mainmenuItem.menuTitle }}</span>
                                </template>
                                <template v-if="mainmenuItem?.type === 'link'">
                                    <NuxtLink  :to="mainmenuItem.path" class="side-menu__item" :class="`${mainmenuItem.selected ? 'active' : ''}`" >
                                        <i :class="`${mainmenuItem.icon} side-menu__icon`"></i>
                                        <span class="side-menu__label">{{ mainmenuItem.title }}<span v-if="mainmenuItem.badge" :class="`badge ${mainmenuItem.badgeColor} ms-1`">{{ mainmenuItem.badge }}</span></span>
                                    </NuxtLink >
                                </template>
                                <template v-if="mainmenuItem?.type === 'empty'">
                                    <NuxtLink  href="javascript:;" class="side-menu__item">
                                        <i :class="`${mainmenuItem.icon} side-menu__icon`"></i>
                                        <span class="side-menu__label">{{ mainmenuItem.title }}<span v-if="mainmenuItem.badge" :class="`badge ${mainmenuItem.badgeColor} ms-1`">{{ mainmenuItem.badge }}</span></span>
                                    </NuxtLink >
                                </template>
                                <template v-if="mainmenuItem?.type === 'sub'">
                                    <RecursiveMenu
                    :menuData="mainmenuItem"
                    :toggleSubmenu="toggleSubmenu"
                    :HoverToggleInnerMenuFn="HoverToggleInnerMenuFn"
                    :level="level + 1"
                    />
                                </template>
                            </li>
                        </ul>
                        <div class="slide-right" @click="rightArrowFn" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                    </nav>
                    <!-- End::nav -->
                </div> 
            <!-- </div> -->
        </PerfectScrollbar>
        <!-- End::main-sidebar -->

    </aside>
    <div ref="preventpagejump" class="prevent-page-jump"></div>

<!-- End::app-sidebar -->
</template>
<script>
import RecursiveMenu from '../UI/recursiveMenu.vue';
import { menuData } from '@/data/menuData.js';
import { useRouter } from 'vue-router';
export default {
    components: {
        RecursiveMenu,
    },
    data() {
        return {
            setMenu: false,
            menuOverflowed: false,
            previousUrl: '/',
            menuData,
            WindowPreSize: [window.innerWidth],
            oldLi: undefined,
            level: 0,
            Nested: [],
            PreviousNumber: null,
            hasParent: false,
            hasParentLevel: 0
        };
    },
    methods: {
        // Start of Toggle menu event
        toggleSubmenu(event, targetObject, menuData = this.menuData) {
            let html = document.documentElement;
            let element = event.target;
            if (html.getAttribute('data-nav-style') != "icon-hover" && html.getAttribute('data-nav-style') != "menu-hover") {
                for (const item of menuData) {
                    if (item === targetObject) {
                        if (html.getAttribute('data-vertical-style') == 'doublemenu' && item.active) { return }
                        item.active = !item.active;
                        if (item.active) {
                            this.closeOtherMenus(menuData, item);
                        } else {
                            if (html.getAttribute('data-vertical-style') == 'doublemenu') {
                                html.setAttribute('data-toggled', 'double-menu-close');
                            }
                        }
                        this.setAncestorsActive(menuData, item);

                    } else if (!item.active) {
                        if (html.getAttribute('data-vertical-style') != 'doublemenu') {
                            item.active = false; // Set active to false for items not matching the target
                        }
                    }
                    if (item.children && item.children.length > 0) {
                        this.toggleSubmenu(event, targetObject, item.children);
                    }
                }
                if (targetObject?.children && targetObject.active) {
                    if (html.getAttribute('data-vertical-style') == 'doublemenu' && html.getAttribute('data-toggled') != 'double-menu-open') {
                        html.setAttribute('data-toggled', 'double-menu-open');
                    }
                }
                if (element && html.getAttribute("data-nav-layout") == 'horizontal' && (html.getAttribute("data-nav-style") == 'menu-click' || html.getAttribute("data-nav-style") == 'icon-click')) {
                    const listItem = element.closest("li");
                    if (listItem) {
                        // Find the first sibling <ul> element
                        const siblingUL = listItem.querySelector("ul");
                        let outterUlWidth = 0;
                        let listItemUL = listItem.closest('ul:not(.main-menu)');
                        while (listItemUL) {
                            listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
                            if (listItemUL) {
                                outterUlWidth += listItemUL.clientWidth;
                            }
                        }
                        if (siblingUL) {
                            // You've found the sibling <ul> element
                            let siblingULRect = listItem.getBoundingClientRect();
                            if (html.getAttribute('dir') == 'rtl') {
                                if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
                                    targetObject.dirchange = true;
                                } else {
                                    targetObject.dirchange = false;
                                }
                            } else {
                                if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
                                    targetObject.dirchange = true;
                                } else {
                                    targetObject.dirchange = false;
                                }
                            }
                        }
                        setTimeout(() => {
                            let computedValue = siblingUL.getBoundingClientRect();
                            if ((computedValue.bottom) > window.innerHeight) {
                                siblingUL.style.height = (window.innerHeight - computedValue.top - 8) + 'px';
                                siblingUL.style.overflow = 'auto';
                            }
                        }, 100);
                    }
                }
            }
        },
        setAncestorsActive(menuData, targetObject) {
            let html = document.documentElement;
            const parent = this.findParent(menuData, targetObject);
            if (parent) {
                parent.active = true;
                if (parent.active) {
                    html.setAttribute('data-toggled', 'double-menu-open');
                }

                this.setAncestorsActive(menuData, parent);
            } else {
                if (html.getAttribute('data-vertical-style') == 'doublemenu') {
                    html.setAttribute('data-toggled', 'double-menu-close');
                }

            }
        },
        closeOtherMenus(menuData, targetObject) {
            for (const item of menuData) {
                if (item !== targetObject) {
                    item.active = false;
                    if (item.children && item.children.length > 0) {
                        this.closeOtherMenus(item.children, targetObject);
                    }
                }
            }
        },
        findParent(menuData, targetObject) {
            for (const item of menuData) {
                if (item.children && item.children.includes(targetObject)) {
                    return item;
                }
                if (item.children && item.children.length > 0) {
                    const parent = this.findParent(item.children, targetObject);
                    if (parent) {
                        return parent;
                    }
                }
            }
            return null;
        },
        // End of Toggle menu event
        HoverToggleInnerMenuFn(event, item) {
            let html = document.documentElement;
            let element = event.target;
            if (element && html.getAttribute("data-nav-layout") == 'horizontal' && (html.getAttribute("data-nav-style") == 'menu-hover' || html.getAttribute("data-nav-style") == 'icon-hover')) {
                const listItem = element.closest("li");
                if (listItem) {
                    // Find the first sibling <ul> element
                    const siblingUL = listItem.querySelector("ul");
                    let outterUlWidth = 0;
                    let listItemUL = listItem.closest('ul:not(.main-menu)');
                    while (listItemUL) {
                        listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
                        if (listItemUL) {
                            outterUlWidth += listItemUL.clientWidth;
                        }
                    }
                    if (siblingUL) {
                        // You've found the sibling <ul> element
                        let siblingULRect = listItem.getBoundingClientRect();
                        if (html.getAttribute('dir') == 'rtl') {
                            if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
                                item.dirchange = true;
                            } else {
                                item.dirchange = false;
                            }
                        } else {
                            if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
                                item.dirchange = true;
                            } else {
                                item.dirchange = false;
                            }
                        }
                    }
                }
            }
        },
        // Start of Set menu Active event
        setSubmenu(event, targetObject, menuData = this.menuData) {
            let html = document.documentElement;
            if (html.getAttribute('data-nav-style') != "icon-hover" && html.getAttribute('data-nav-style') != "menu-hover") {
                if (!event?.ctrlKey) {
                    this.setMenu = true;
                    for (const item of menuData) {
                        if (item === targetObject) {
                            item.active = true;
                            item.selected = true;
                            this.setMenuAncestorsActive(item);
                        } else if (!item.active && !item.selected) {
                            item.active = false; // Set active to false for items not matching the target
                            item.selected = false; // Set active to false for items not matching the target
                        } else {
                            this.removeActiveOtherMenus(item);
                        }
                        if (item.children && item.children.length > 0) {
                            this.setSubmenu(event, targetObject, item.children);
                        }
                    }
                    this.setMenu = false;
                }
            }
        },
        getParentObject(obj, childObject) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object' && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
                        return obj; // Return the parent object
                    }
                    if (typeof obj[key] === 'object') {
                        const parentObject = this.getParentObject(obj[key], childObject);
                        if (parentObject !== null) {
                            return parentObject;
                        }
                    }
                }
            }
            return null; // Object not found
        },
        setMenuAncestorsActive(targetObject) {
            const parent = this.getParentObject(this.menuData, targetObject);
            let html = document.documentElement;
            if (parent) {
                if (this.hasParentLevel > 2) {
                    this.hasParent = true;
                }
                parent.active = true;
                parent.selected = true;
                this.hasParentLevel += 1;
                this.setMenuAncestorsActive(parent);
            }
            else if (!this.hasParent) {
                if (html.getAttribute('data-vertical-style') == 'doublemenu') {
                    html.setAttribute('data-toggled', 'double-menu-close');
                }
            }
        },
        removeActiveOtherMenus(item) {
            if (item) {
                if (Array.isArray(item)) {
                    for (const val of item) {
                        val.active = false;
                        val.selected = false;
                    }
                }
                item.active = false;
                item.selected = false;

                if (item.children && item.children.length > 0) {
                    this.removeActiveOtherMenus(item.children);
                }
            }
            else {
                return;
            }
        },
        // End of Set menu Active event
        // Start of Menu Close functionality
        closeMenuFn() {
            const closeMenuRecursively = (items) => {
                items?.forEach((item) => {
                    item.active = false;
                    closeMenuRecursively(item.children);
                });
            };
            closeMenuRecursively(this.menuData);
        },
        // End of Menu Close functionality
        // Start of Resize check for menu
        menuResizeFn() {
            this.WindowPreSize.push(window.innerWidth);
            if (this.WindowPreSize.length > 2) { this.WindowPreSize.shift() }
            if (this.WindowPreSize.length > 1) {
                if ((this.WindowPreSize[this.WindowPreSize.length - 1] < 992) && (this.WindowPreSize[this.WindowPreSize.length - 2] >= 992)) {
                    // less than 992;
                    let html = document.documentElement;
                    html.setAttribute('data-toggled', 'close');
                }

                if ((this.WindowPreSize[this.WindowPreSize.length - 1] >= 992) && (this.WindowPreSize[this.WindowPreSize.length - 2] < 992)) {
                    let html = document.documentElement;
                    // greater than 992
                    html.removeAttribute('data-toggled')
                }
            }
        },
        // End of Resize check for menu
        mainContentFn() {
            // Used to close the menu in Horizontal and small screen
            let html = document.documentElement;
            if (window.innerWidth < 992) {
                html.setAttribute('data-toggled', 'close');
            } else if (html.getAttribute('data-nav-layout') == 'horizontal' || html.getAttribute('data-nav-style') == 'menu-click' || html.getAttribute('data-nav-style') == 'icon-click') {
                this.closeMenuFn();
            }
        },
        leftArrowFn() {
            // Used to move the slide of the menu in Horizontal and also remove the arrows after click  if there was no space 
            // Used to Slide the menu to Left side
            let slideLeft = document.querySelector('.slide-left');
            let slideRight = document.querySelector('.slide-right');
            let menuNav = document.querySelector('.main-menu');
            let mainContainer1 = document.querySelector('.main-sidebar');
            let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split('px')[0]));
            let mainContainer1Width = mainContainer1.offsetWidth;
            if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
                if (marginRightValue < 0 && !(Math.abs(marginRightValue) < mainContainer1Width)) {
                    menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split('px')[0]) + Math.abs(mainContainer1Width) + 'px';
                    slideRight.classList.remove('d-none');
                } else if (marginRightValue >= 0) {
                    menuNav.style.marginInlineStart = '0px';
                    slideLeft.classList.add('d-none');
                    slideRight.classList.remove('d-none');
                } else {
                    menuNav.style.marginInlineStart = '0px';
                    slideLeft.classList.add('d-none');
                    slideRight.classList.remove('d-none');
                }
            }
            else {
                menuNav.style.marginInlineStart = "0px";
                slideLeft.classList.add('d-none');
            }

            let element = document.querySelector(".main-menu > .slide.open")
            let element1 = document.querySelector(".main-menu > .slide.open >ul")
            if (element) {
                element.classList.remove("open")
            }
            if (element1) {
                element1.style.display = "none"
            }
        },
        rightArrowFn() {
            // Used to move the slide of the menu in Horizontal and also remove the arrows after click  if there was no space 
            // Used to Slide the menu to Right side
            let slideLeft = document.querySelector('.slide-left');
            let slideRight = document.querySelector('.slide-right');
            let menuNav = document.querySelector('.main-menu');
            let mainContainer1 = document.querySelector('.main-sidebar');
            let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginInlineStart.split('px')[0]));
            let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
            let mainContainer1Width = mainContainer1.offsetWidth;

            if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
                if (Math.abs(check) > Math.abs(marginRightValue)) {
                    if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
                        mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
                        slideRight.classList.add('d-none');
                    }
                    menuNav.style.marginInlineStart = Number(menuNav.style.marginInlineStart.split('px')[0]) - Math.abs(mainContainer1Width) + 'px';
                    slideLeft.classList.remove('d-none');
                }
            }

            let element = document.querySelector(".main-menu > .slide.open")
            let element1 = document.querySelector(".main-menu > .slide.open >ul")
            if (element) {
                element.classList.remove("open")
            }
            if (element1) {
                element1.style.display = "none"
            }
        },
        handleAttributeChange(mutationsList, observer) {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
                    const newValue = mutation.target.getAttribute('data-nav-layout');
                    if (newValue == 'vertical') {
                        let currentPath = this.$route.path.endsWith('/') ? this.$route.path.slice(0, -1) : this.$route.path;
                        currentPath = !currentPath ? '/dashboard/ecommerce' : currentPath;
                        this.setMenuUsingUrl(currentPath);
                    } else {
                        this.closeMenuFn();
                    }
                }
            }
        },
        setMenuUsingUrl(currentPath) {
            this.hasParent = false;
            this.hasParentLevel = 1;
            // Check current url and trigger the setSidemenu method to active the menu.
            const setSubmenuRecursively = (items) => {
                items?.forEach((item) => {
                    if (item.path == '') { }
                    else if (item.path === currentPath) {
                        this.setSubmenu(null, item);
                    }
                    setSubmenuRecursively(item.children);
                });
            };
            setSubmenuRecursively(this.menuData);
        },
        menuscrollFn() {
            let html = document.documentElement;
            let navLayout = html.getAttribute('data-nav-layout') == "horizontal";
            let menuPosition = html.getAttribute('data-menu-position') == "scrollable";
            let header = document.querySelector('.app-header')?.clientHeight || 0;
            window.onscroll = () => {
                if (!menuPosition && this.$refs['preventpagejump'] && navLayout && window.innerWidth >= 992) {
                    if (window.scrollY > header) {
                        this.$refs['preventpagejump'].style.height = header + 'px';
                        this.menuOverflowed = true;
                    } else {
                        this.$refs['preventpagejump'].style.height = 0 + 'px';
                        this.menuOverflowed = false;
                    }
                }
            };
        }
    },
    created() {
        // initally load the menu active 
        let currenUrl = this.$route.path.endsWith('/') ? this.$route.path.slice(0, -1) : this.$route.path;
        this.setMenuUsingUrl(currenUrl);
        // Use the useRouter hook to access the router instance
        const router = useRouter();
        // Use watchEffect to trigger a custom function when the route changes
        watchEffect(() => {
            let currentPath = router.currentRoute.value.path.endsWith('/') ? router.currentRoute.value.path.slice(0, -1) : router.currentRoute.value.path;
            currentPath = !currentPath ? '/dashboard/ecommerce' : currentPath;
            // Your custom function goes here
            if (currentPath !== this.previousUrl) {
                // Your custom function goes here
                this.setMenuUsingUrl(currentPath);
                // Update the previous URL
                this.previousUrl = currentPath
            }
        })
        let html = document.documentElement;
        if (html.getAttribute('data-nav-layout') == 'horizontal' || html.getAttribute('data-nav-style') == 'menu-hover' || html.getAttribute('data-nav-style') == 'icon-hover') {
            this.closeMenuFn();
        }
    },
    mounted() {
        // Adding the menuResize after the component created.
        window.addEventListener('resize', this.menuResizeFn);
        window.addEventListener('scroll', this.menuscrollFn);
        let mainContent = document.querySelector('.main-content')
        // Adding the mainContentFn after the component created.
        mainContent.addEventListener('click', this.mainContentFn);
        // Used to check on mounting face to close the menu.
        if (window.innerWidth < 992) {
            document.documentElement.setAttribute('data-toggled', 'close');
        } else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
            this.closeMenuFn();
        }

        // Select the target element
        const targetElement = document.documentElement;

        // Create a MutationObserver instance
        const observer = new MutationObserver(this.handleAttributeChange);

        // Configure the observer to watch for attribute changes
        const config = { attributes: true };

        // Start observing the target element
        observer.observe(targetElement, config);
    },
    beforeUnmount() {
        // Removing the menuResize before destorying the component
        window.removeEventListener('resize', this.menuResizeFn);
    },
}
</script>
<style lang="">
    
</style>