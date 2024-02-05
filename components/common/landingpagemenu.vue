<template lang="">
    <!-- Start::app-sidebar -->
    <ul class="main-menu">
        <li v-for="(mainmenuItem, index) in menuData" :key="index"
        :class="`${mainmenuItem.menuTitle ? 'slide__category' : ''} ${mainmenuItem?.type == 'link'? 'slide' : ''} ${mainmenuItem?.type == 'empty'? 'slide' : ''} ${mainmenuItem?.type == 'sub' ? 'slide has-sub' : ''} ${mainmenuItem?.active ? 'open' : ''} ${mainmenuItem?.selected ? 'active' : ''}`">
            <template v-if="mainmenuItem.menuTitle">
                <span class="category-name">{{ mainmenuItem.menuTitle }}</span>
            </template>
            <template v-if="mainmenuItem?.type === 'link'">
                <a href="#"  @click="handleLinkClick($event, mainmenuItem.path); setSubmenu(mainmenuItem.path)" class="side-menu__item" :class="`${mainmenuItem.selected ? 'active' : ''}`" >
                    <span class="side-menu__label">{{ mainmenuItem.title }}<span v-if="mainmenuItem.badge" :class="`badge ${mainmenuItem.badgeColor} ms-2`">{{ mainmenuItem.badge }}</span></span>
                </a >
            </template>
            <template v-if="mainmenuItem?.type === 'empty'">
                <NuxtLink  href="javascript:;" class="side-menu__item">
                    <span class="side-menu__label">{{ mainmenuItem.title }}<span v-if="mainmenuItem.badge" :class="`badge ${mainmenuItem.badgeColor} ms-2`">{{ mainmenuItem.badge }}</span></span>
                </NuxtLink >
            </template>
            <template v-if="mainmenuItem?.type === 'sub'">
                <landingrecursiveMenu
    :menuData="mainmenuItem"
    :setSubmenu="setSubmenu"
    :handleLinkClick="handleLinkClick"
    :toggleSubmenu="toggleSubmenu"
    :level="level + 1"
    />
            </template>
        </li>
    </ul>
<!-- End::app-sidebar -->
</template>
<script>
import landingrecursiveMenu from '../UI/landingrecursiveMenu.vue';
export default {
    props: {
        menuData: Object
    },
    components: {
        landingrecursiveMenu,
    },
    data() {
        return {
            setMenu: false,
            previousUrl: '/',
            WindowPreSize: [window.innerWidth],
            oldLi: undefined,
            level: 0,
            Nested: [],
            PreviousNumber: null,
            scrollTimeout: null,
        };
    },
    methods: {
        handleLinkClick(event, sectionId) {
            event.preventDefault();
            if (sectionId !== '' && sectionId != "#" && sectionId != "javascript:;" && sectionId != "javascript:void(0)") {
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        },
        // Start of Toggle menu event
        toggleSubmenu(event, targetObject, menuData = this.menuData) {
            for (const item of menuData) {
                if (item === targetObject) {
                    item.active = !item.active;
                    if (item.active) {
                        this.closeOtherMenus(menuData, item);
                    }
                    this.setAncestorsActive(menuData, item);
                } else if (!item.active) {
                    item.active = false; // Set active to false for items not matching the target
                }
                if (item.children && item.children.length > 0) {
                    this.toggleSubmenu(event, targetObject, item.children);
                }
            }
        },
        setAncestorsActive(menuData, targetObject) {
            const parent = this.findParent(menuData, targetObject);
            if (parent) {
                parent.active = true;
                this.setAncestorsActive(menuData, parent);
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
        // Start of Set menu Active event
        setSubmenu(targetObject, menuData = this.menuData) {
            this.setMenu = true;
            // set the current menu which is triggered.
            for (const item of menuData) {
                if (item.active || item.selected) {
                    this.removeActiveOtherMenus(menuData, item);
                }
                if (item.path === targetObject) {
                    item.selected = true;
                    this.setMenuAncestorsActive(item);
                } else if (!item.active && !item.selected) {
                    item.active = false; // Set active to false for items not matching the target
                    item.selected = false; // Set active to false for items not matching the target
                }
                if (item.children && item.children.length > 0) {
                    this.setSubmenu(targetObject, item.children);
                }
            }
            this.setMenu = false;
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
            if (parent) {
                parent.selected = true;
                this.setMenuAncestorsActive(parent);
            }
        },
        removeActiveOtherMenus(menuData, targetObject) {
            for (const item of menuData) {
                item.active = false;
                item.selected = false;
                if (item.children && item.children.length > 0) {
                    this.removeActiveOtherMenus(item.children, targetObject);
                }
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
        stickyFn() {
            var navbar = document.getElementById("sidebar");;
            if (window.scrollY >= 75) {
                navbar.classList.add("sticky-pin")
            } else {
                navbar.classList.remove("sticky-pin");
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.stickyFn);
        // Adding the menuResize after the component created.
        window.addEventListener('resize', this.menuResizeFn);
        let mainContent = document.querySelector('.main-content')
        // Adding the mainContentFn after the component created.
        mainContent.addEventListener('click', this.mainContentFn);
        // Used to check on mounting face to close the menu.
        if (window.innerWidth < 992) {
            document.documentElement.setAttribute('data-toggled', 'close');
        } else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
            this.closeMenuFn();
        }
        let scrollTimeout;
        const updateHashBasedOnScroll = () => {
            // Find the section ID based on the scroll position
            const sectionId = findSectionIdBasedOnScroll();
            if (sectionId?.trim()) {
                // Update the hash in the URL
                this.setSubmenu(sectionId, this.menuData)
            }
        };

        const findSectionIdBasedOnScroll = () => {

            const sections = document.querySelectorAll('.section'); // Adjust this selector based on your HTML structure

            for (const section of sections) {
                const rect = section.getBoundingClientRect();

                // Check if the section is at least 50% visible on the screen
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    return section.id;
                }
            }

            return null; // No section found
        };

        function scrollCheck() {
            clearTimeout(scrollTimeout);
            // Use a timeout to debounce the scroll event
            scrollTimeout = setTimeout(() => {
                updateHashBasedOnScroll();
            }, 200);
        }

        window.addEventListener('scroll', scrollCheck);

    },
    unmounted() {
        window.removeEventListener('scroll', this.stickyFn);
        // Removing the menuResize before destorying the component
        window.removeEventListener('resize', this.menuResizeFn);
    },
}
</script>
<style lang="">
    
</style>