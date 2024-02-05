<template>
    <a href="javascript:;" class="side-menu__item" :class="`${menuData?.selected ? 'active' : ''}`"
        @click="toggleSubmenu($event, menuData)">
        <span class="side-menu__label" v-if="level == 1">{{ menuData.title }}
            <span v-if="menuData.badge" :class="`badge ${menuData?.badgeColor} ms-2`">{{ menuData.badge
            }}</span></span>
        <span v-if="level > 1">{{ menuData.title }}
            <span v-if="menuData.badge" :class="`badge ${menuData?.badgeColor} ms-2`">{{ menuData.badge
            }}</span></span>
        <i class="fe fe-chevron-right side-menu__angle"></i>
    </a>
    <ul class="slide-menu "
        :class="`${menuData.active ? 'double-menu-active' : ''} child1 ${menuData?.dirchange ? 'force-left' : ''}`"
        :style="menuData.active ? 'display : block' : ''">
        <li class="slide side-menu__label1">
            <a href="javascript:void(0)">{{ menuData.title }}</a>
        </li>

        <li v-for="(firstLevelMenuItem, subIndex) in menuData.children" :key="subIndex"
            :class="`
            ${firstLevelMenuItem.menuTitle ? 'slide__category' : ''} ${firstLevelMenuItem?.type == 'empty' ? 'slide' : ''} ${firstLevelMenuItem?.type == 'link' ? 'slide' : ''} ${firstLevelMenuItem?.type == 'sub' ? 'slide has-sub' : ''} ${firstLevelMenuItem?.active ? 'open' : ''} ${firstLevelMenuItem?.selected ? 'active' : ''}`">
            <template v-if="firstLevelMenuItem?.type === 'link'">
                <a href="#" @click="handleLinkClick($event, firstLevelMenuItem.path); setSubmenu(firstLevelMenuItem.path)" class="side-menu__item"
                    :class="`${firstLevelMenuItem?.selected ? 'active' : ''}`">
                    {{ firstLevelMenuItem.title }}<span v-if="firstLevelMenuItem.badge"
                        :class="`badge ${firstLevelMenuItem.badgeColor} ms-2`">{{ firstLevelMenuItem.badge }}</span>
                </a>
            </template>
            <template v-if="firstLevelMenuItem?.type === 'empty'">
                <NuxtLink href="javascript:;" class="side-menu__item">
                    {{ firstLevelMenuItem.title }}<span v-if="firstLevelMenuItem.badge"
                        :class="`badge ${firstLevelMenuItem.badgeColor} ms-2`">{{ firstLevelMenuItem.badge }}</span>
                </NuxtLink>
            </template>
            <template v-if="firstLevelMenuItem?.type === 'sub'">
                <landingrecursiveMenu :menuData="firstLevelMenuItem" :handleLinkClick="handleLinkClick" :setSubmenu="setSubmenu" :toggleSubmenu="toggleSubmenu" :level="level + 1" />
            </template>
        </li>
    </ul>
</template>
  
<script>
export default {
    props: {
        menuData: {
            type: Object,
            required: true,
        },
        toggleSubmenu: {
            type: Function,
            required: true,
        },
        setSubmenu: {
            type: Function,
            required: true,
        },
        handleLinkClick: {
            type: Function,
            required: true,
        },
        level: {
            type: Number,
            required: true,
        },
    },
    created() {
        // Access and check propData in the created hook
        // console.log(this.menuData);
    },
};
</script>
  