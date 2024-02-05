<template>
    <a href="javascript:;" class="side-menu__item" :class="`${menuData?.selected ? 'active' : ''}`"
        @mouseover="HoverToggleInnerMenuFn($event, menuData)" @click="toggleSubmenu($event, menuData)">
        <i v-if="menuData?.icon" :class="`${menuData?.icon} side-menu__icon`"></i>
        <span class="side-menu__label" v-if="level == 1">{{ menuData.title }}
            <span v-if="menuData.badge" :class="`badge ${menuData?.badgeColor} ms-1`">{{ menuData.badge
            }}</span></span>
        <span v-if="level > 1">{{ menuData.title }}
            <span v-if="menuData.badge" :class="`badge ${menuData?.badgeColor} ms-1`">{{ menuData.badge
            }}</span></span>
        <i class="fe fe-chevron-right side-menu__angle"></i>
    </a>
    <ul class="slide-menu "
        :class="`${menuData.active ? 'double-menu-active' : ''} child1 ${menuData?.dirchange ? 'force-left' : ''}`"
        :style="menuData.active ? 'display : block' : ''">
        <li v-if="level <= 1" class="slide side-menu__label1">
            <a href="javascript:void(0)">{{ menuData.title }}</a>
        </li>

        <li v-for="(firstLevelMenuItem, subIndex) in menuData.children" :key="subIndex"
            :class="`
            ${firstLevelMenuItem.menuTitle ? 'slide__category' : ''} ${firstLevelMenuItem?.type == 'empty' ? 'slide' : ''} ${firstLevelMenuItem?.type == 'link' ? 'slide' : ''} ${firstLevelMenuItem?.type == 'sub' ? 'slide has-sub' : ''} ${firstLevelMenuItem?.active ? 'open' : ''} ${firstLevelMenuItem?.selected ? 'active' : ''}`">
            <template v-if="firstLevelMenuItem?.type === 'link'">
                <NuxtLink :to="firstLevelMenuItem.path" class="side-menu__item"
                    :class="`${firstLevelMenuItem?.selected ? 'active' : ''}`" >
                    {{ firstLevelMenuItem.title }}<span v-if="firstLevelMenuItem.badge"
                        :class="`badge ${firstLevelMenuItem.badgeColor} ms-1`">{{ firstLevelMenuItem.badge }}</span>
                </NuxtLink>
            </template>
            <template v-if="firstLevelMenuItem?.type === 'empty'">
                <NuxtLink href="javascript:;" class="side-menu__item">
                    {{ firstLevelMenuItem.title }}<span v-if="firstLevelMenuItem.badge"
                        :class="`badge ${firstLevelMenuItem.badgeColor} ms-1`">{{ firstLevelMenuItem.badge }}</span>
                </NuxtLink>
            </template>
            <template v-if="firstLevelMenuItem?.type === 'sub'">
                <RecursiveMenu :menuData="firstLevelMenuItem" :toggleSubmenu="toggleSubmenu"
                    :HoverToggleInnerMenuFn="HoverToggleInnerMenuFn" :level="level + 1" />
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
        HoverToggleInnerMenuFn: {
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
    },
};
</script>
  