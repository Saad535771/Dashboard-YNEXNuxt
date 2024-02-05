<template lang="">
    <!-- Start Switcher -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <nav class="border-bottom border-block-end-dashed">
                <div class="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                    <button class="nav-link active" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home"
                        type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</button>
                    <button class="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile"
                        type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active border-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab"
                    tabindex="0">
                    <div class="">
                        <p class="switcher-style-head">Theme Color Mode:    </p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-light-theme">
                                        Light
                                    </label>
                                    <input @click="colorthemeFn('light')" class="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                        :checked="switcher.colortheme == 'light' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input @click="colorthemeFn('dark')" class="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                        :checked="switcher.colortheme == 'dark' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="switcher-style-head">Directions:</p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-ltr">
                                        LTR
                                    </label>
                                    <input @click="directionFn('ltr')" class="form-check-input" type="radio" name="direction" id="switcher-ltr" :checked="switcher.direction == 'ltr' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-rtl">
                                        RTL
                                    </label>
                                    <input @click="directionFn('rtl')" class="form-check-input" type="radio" name="direction" id="switcher-rtl" :checked="switcher.direction == 'rtl' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="switcher-style-head">Navigation Styles:</p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-vertical">
                                        Vertical
                                    </label>
                                    <input @click="navigationStylesFn('vertical')" class="form-check-input" type="radio" name="navigation-style" id="switcher-vertical"
                                    :checked="switcher.navigationStyles == 'vertical' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-horizontal">
                                        Horizontal
                                    </label>
                                    <input @click="navigationStylesFn('horizontal')" class="form-check-input" type="radio" name="navigation-style"
                                        id="switcher-horizontal" :checked="switcher.navigationStyles == 'horizontal' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navigation-menu-styles">
                        <p class="switcher-style-head">Vertical & Horizontal Menu Styles:</p>
                        <div class="row switcher-style gx-0 pb-2 gy-2">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-menu-click">
                                        Menu Click
                                    </label>
                                    <input @click="menuStylesFn('menu-click')" class="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-click" :checked="switcher.menuStyles == 'menu-click' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-menu-hover">
                                        Menu Hover
                                    </label>
                                    <input @click="menuStylesFn('menu-hover')" class="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-hover" :checked="switcher.menuStyles == 'menu-hover' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-icon-click">
                                        Icon Click
                                    </label>
                                    <input @click="menuStylesFn('icon-click')" class="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-click" :checked="switcher.menuStyles == 'icon-click' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-icon-hover">
                                        Icon Hover
                                    </label>
                                    <input @click="menuStylesFn('icon-hover')" class="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-hover" :checked="switcher.menuStyles == 'icon-hover' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidemenu-layout-styles">
                        <p class="switcher-style-head">Sidemenu Layout Styles:</p>
                        <div class="row switcher-style gx-0 pb-2 gy-2">
                            <div class="col-sm-6">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-default-menu">
                                        Default Menu
                                    </label>
                                    <input @click="layoutStylesFn('default-menu')" class="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-default-menu" :checked="switcher.layoutStyles == 'default-menu' ? true : false">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-closed-menu">
                                        Closed Menu
                                    </label>
                                    <input @click="layoutStylesFn('closed-menu')" class="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-closed-menu" :checked="switcher.layoutStyles == 'closed-menu' ? true : false">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-icontext-menu">
                                        Icon Text
                                    </label>
                                    <input @click="layoutStylesFn('icontext-menu')" class="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icontext-menu" :checked="switcher.layoutStyles == 'icontext-menu' ? true : false">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-icon-overlay">
                                        Icon Overlay
                                    </label>
                                    <input @click="layoutStylesFn('icon-overlay')" class="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icon-overlay" :checked="switcher.layoutStyles == 'icon-overlay' ? true : false">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-detached">
                                        Detached
                                    </label>
                                    <input @click="layoutStylesFn('detached')" class="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-detached" :checked="switcher.layoutStyles == 'detached' ? true : false">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-double-menu">
                                        Double Menu
                                    </label>
                                    <input @click="layoutStylesFn('double-menu')" class="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-double-menu" :checked="switcher.layoutStyles == 'double-menu' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="switcher-style-head">Page Styles:</p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-regular">
                                        Regular
                                    </label>
                                    <input @click="pageStylesFn('regular')" class="form-check-input" type="radio" name="page-styles" id="switcher-regular"
                                    :checked="switcher.pageStyles == 'regular' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-classic">
                                        Classic
                                    </label>
                                    <input @click="pageStylesFn('classic')" class="form-check-input" type="radio" name="page-styles" id="switcher-classic" :checked="switcher.pageStyles == 'classic' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-modern">
                                        Modern
                                    </label>
                                    <input @click="pageStylesFn('modern')" class="form-check-input" type="radio" name="page-styles" id="switcher-modern" :checked="switcher.pageStyles == 'modern' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="switcher-style-head">Layout Width Styles:</p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-full-width">
                                        Full Width
                                    </label>
                                    <input @click="widthStylesFn('full-width')" class="form-check-input" type="radio" name="layout-width" id="switcher-full-width"
                                    :checked="switcher.widthStyles == 'fullwidth' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-boxed">
                                        Boxed
                                    </label>
                                    <input @click="widthStylesFn('boxed')" class="form-check-input" type="radio" name="layout-width" id="switcher-boxed" :checked="switcher.widthStyles == 'boxed' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="switcher-style-head">Menu Positions:</p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-menu-fixed">
                                        Fixed
                                    </label>
                                    <input @click="menuPositionFn('fixed')" class="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"
                                    :checked="switcher.menuPosition == 'fixed' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-menu-scroll">
                                        Scrollable
                                    </label>
                                    <input @click="menuPositionFn('scrollable')" class="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll" :checked="switcher.menuPosition == 'scrollable' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="switcher-style-head">Header Positions:</p>
                        <div class="row switcher-style gx-0">
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-header-fixed">
                                        Fixed
                                    </label>
                                    <input @click="headerPositionFn('fixed')" class="form-check-input" type="radio" name="header-positions"
                                        id="switcher-header-fixed" :checked="switcher.headerPosition == 'fixed' ? true : false">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-check switch-select">
                                    <label class="form-check-label" for="switcher-header-scroll">
                                        Scrollable
                                    </label>
                                    <input @click="headerPositionFn('scrollable')" class="form-check-input" type="radio" name="header-positions"
                                        id="switcher-header-scroll" :checked="switcher.headerPosition == 'scrollable' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade border-0" id="switcher-profile" role="tabpanel" aria-labelledby="switcher-profile-tab" tabindex="0">
                    <div>
                        <div class="theme-colors">
                            <p class="switcher-style-head">Menu Colors:</p>
                            <div class="d-flex switcher-style pb-2">
                                <div class="form-check switch-select me-3">
                                    <input @click="menuColorFn('light')" class="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Light Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-light" :checked="switcher.menuColor == 'light' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="menuColorFn('dark')" class="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-dark" :checked="switcher.menuColor == 'dark' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="menuColorFn('color')" class="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Color Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-primary" :checked="switcher.menuColor == 'color' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="menuColorFn('gradient')" class="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Gradient Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-gradient" :checked="switcher.menuColor == 'gradient' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="menuColorFn('transparent')" class="form-check-input color-input color-transparent"
                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Transparent Menu"
                                        type="radio" name="menu-colors" id="switcher-menu-transparent" :checked="switcher.menuColor == 'transparent' ? true : false">
                                </div>
                            </div>
                            <div class="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div class="theme-colors">
                            <p class="switcher-style-head">Header Colors:</p>
                            <div class="d-flex switcher-style pb-2">
                                <div class="form-check switch-select me-3">
                                    <input @click="headerColorFn('light')" class="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Light Header" type="radio" name="header-colors"
                                        id="switcher-header-light" :checked="switcher.headerColor == 'light' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="headerColorFn('dark')" class="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Dark Header" type="radio" name="header-colors"
                                        id="switcher-header-dark" :checked="switcher.headerColor == 'dark' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="headerColorFn('color')" class="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Color Header" type="radio" name="header-colors"
                                        id="switcher-header-primary" :checked="switcher.headerColor == 'color' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="headerColorFn('gradient')" class="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Gradient Header" type="radio" name="header-colors"
                                        id="switcher-header-gradient" :checked="switcher.headerColor == 'gradient' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="headerColorFn('transparent')" class="form-check-input color-input color-transparent" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Transparent Header" type="radio" name="header-colors"
                                        id="switcher-header-transparent" :checked="switcher.headerColor == 'transparent' ? true : false">
                                </div>
                            </div>
                            <div class="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div class="theme-colors">
                            <p class="switcher-style-head">Theme Primary:</p>
                            <div class="d-flex flex-wrap align-items-center switcher-style">
                                <div class="form-check switch-select me-3">
                                    <input @click="themePrimaryFn('58, 88, 146')" class="form-check-input color-input color-primary-1" type="radio"
                                        name="theme-primary" id="switcher-primary" :checked="switcher.themePrimary == '58, 88, 146' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themePrimaryFn('92, 144, 163')" class="form-check-input color-input color-primary-2" type="radio"
                                        name="theme-primary" id="switcher-primary1" :checked="switcher.themePrimary == '92, 144, 163' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themePrimaryFn('161, 90, 223')" class="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                        id="switcher-primary2" :checked="switcher.themePrimary == '161, 90, 223' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themePrimaryFn('78, 172, 76')" class="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                        id="switcher-primary3" :checked="switcher.themePrimary == '78, 172, 76' ? true : false">
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themePrimaryFn('223, 90, 90')" class="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                        id="switcher-primary4" :checked="switcher.themePrimary == '223, 90, 90' ? true : false">
                                </div>
                                <div class="form-check switch-select ps-0 mt-1 color-primary-light">
                                    <color-picker @update:pureColor="primaryColorFn" v-model:dynamicPrimaryColor="dynamicPrimaryColor" shape="circle" format="rgb" pickerType="chrome"
                                        useType="pure" :disableAlpha="true" />
                                </div>
                            </div>
                        </div>
                        <div class="theme-colors">
                            <p class="switcher-style-head">Theme Background:</p>
                            <div class="d-flex flex-wrap align-items-center switcher-style">
                                <div class="form-check switch-select me-3">
                                    <input @click="themeBackgroundFn('20, 30, 96', '25, 38, 101')" class="form-check-input color-input color-bg-1" type="radio"
                                        name="theme-background" id="switcher-background" >
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themeBackgroundFn('8, 78, 115', '13, 86, 120')" class="form-check-input color-input color-bg-2" type="radio"
                                        name="theme-background" id="switcher-background1" >
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themeBackgroundFn('90, 37, 135', '95, 45, 140')" class="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                        id="switcher-background2" >
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themeBackgroundFn('24, 101, 51', '29, 109, 56')" class="form-check-input color-input color-bg-4" type="radio"
                                        name="theme-background" id="switcher-background3" >
                                </div>
                                <div class="form-check switch-select me-3">
                                    <input @click="themeBackgroundFn('120, 66, 20', '125, 74, 25')" class="form-check-input color-input color-bg-5" type="radio"
                                        name="theme-background" id="switcher-background4" >
                                </div>
                                <div class="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                    <color-picker @update:pureColor="dynamicBackgroundColorFn" v-model="dynamicBackgroundColor" shape="circle" format="rgb" pickerType="chrome"
                                        useType="pure" :disableAlpha="true" ><i class="icon">ICON_HERE</i></color-picker>
                                </div>
                            </div>
                        </div>
                        <div class="menu-image mb-3">
                            <p class="switcher-style-head">Menu With Background Image:</p>
                            <div class="d-flex flex-wrap align-items-center switcher-style">
                                <div class="form-check switch-select m-2">
                                    <input @click="backgroundImageFn('bgimg1')" class="form-check-input bgimage-input bg-img1" type="radio"
                                        name="theme-background" id="switcher-bg-img" :checked="switcher.backgroundImage == 'bgimg1' ? true : false">
                                </div>
                                <div class="form-check switch-select m-2">
                                    <input @click="backgroundImageFn('bgimg2')" class="form-check-input bgimage-input bg-img2" type="radio"
                                        name="theme-background" id="switcher-bg-img1" :checked="switcher.backgroundImage == 'bgimg2' ? true : false">
                                </div>
                                <div class="form-check switch-select m-2">
                                    <input @click="backgroundImageFn('bgimg3')" class="form-check-input bgimage-input bg-img3" type="radio" name="theme-background"
                                        id="switcher-bg-img2" :checked="switcher.backgroundImage == 'bgimg3' ? true : false">
                                </div>
                                <div class="form-check switch-select m-2">
                                    <input @click="backgroundImageFn('bgimg4')" class="form-check-input bgimage-input bg-img4" type="radio"
                                        name="theme-background" id="switcher-bg-img3" :checked="switcher.backgroundImage == 'bgimg4' ? true : false">
                                </div>
                                <div class="form-check switch-select m-2">
                                    <input @click="backgroundImageFn('bgimg5')" class="form-check-input bgimage-input bg-img5" type="radio"
                                        name="theme-background" id="switcher-bg-img4" :checked="switcher.backgroundImage == 'bgimg5' ? true : false">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-grid canvas-footer"> 
                    <a href="javascript:void(0);"  @click="reset()" id="reset-all" class="btn btn-danger m-1">Reset</a> 
                </div>
            </div>
        </div>
    </div>
    <!-- End Switcher -->
</template>
<script>
import { reactive } from 'vue';
import { menuData } from '@/data/menuData.js';
import { switcherStore } from '@/stores/switcher';
export default {
    data() {
        return {
            menuData,
            switcher: reactive(switcherStore()),
            dynamicPrimaryColor: ref("black"),
            dynamicBackgroundColor: ref("black"),
        }
    },
    methods: {
        primaryColorFn(color) {
            let primaryRgb = this.convertRgbToIndividual(color);
            this.themePrimaryFn(primaryRgb);
        },
        dynamicBackgroundColorFn(color) {
            let bgRgb = this.convertRgbToIndividual(color);
            let bgRgb2 = this.convertRgbToIndividual(color);
            let bg1Update = bgRgb.split(' ').join(', ');
            let bg2Update = bgRgb2.split(' ');
            bg2Update[0] = Number(bg2Update[0]) + 14;
            bg2Update[1] = Number(bg2Update[1]) + 14;
            bg2Update[2] = Number(bg2Update[2]) + 14;
            this.themeBackgroundFn(bg1Update, bg2Update.join(', '));
        },
        convertRgbToIndividual(value) {
            // Use a regular expression to extract the numeric values
            const numericValues = value.match(/\d+/g);
            // Join the numeric values with spaces to get the desired format
            return numericValues.join(' ');
        },
        colorthemeFn(value) {
            this.switcher.colorthemeFn(value);
            localStorage.setItem("ynexcolortheme", value);
            if (value == 'dark') {
                localStorage.setItem("ynexHeader", 'dark');
                localStorage.setItem("ynexMenu", 'dark');
            } else {
                localStorage.removeItem("ynexHeader");
                localStorage.removeItem("ynexMenu");
            }
        },
        directionFn(value) {
            this.switcher.directionFn(value);
            localStorage.setItem('ynexdirection', value);
        },
        navigationStylesFn(value) {
            this.switcher.navigationStylesFn(value);
            localStorage.setItem('ynexnavstyles', value);
        },
        closeMenuFn() {
            const closeMenuRecursively = (items) => {
                items?.forEach((item) => {
                    item.active = false;
                    closeMenuRecursively(item.children);
                });
            };
            closeMenuRecursively(this.menuData);
        },
        menuStylesFn(value) {
            this.switcher.menuStylesFn(value);
            localStorage.setItem('ynexmenuStyles', value);
            if (value == 'menu-hover' || value == 'icon-hover') {
                this.closeMenuFn();
            }
        },
        layoutStylesFn(value) {
            this.switcher.layoutStylesFn(value);
            localStorage.setItem("ynexverticalstyles", value);
            if (value == 'horizontal') {
                this.closeMenuFn();
            }
        },
        pageStylesFn(value) {
            this.switcher.pageStylesFn(value);
            localStorage.setItem("ynexpageStyle", value);
        },
        widthStylesFn(value) {
            this.switcher.widthStylesFn(value);
            localStorage.setItem("ynexwidthStyles", value);
        },
        menuPositionFn(value) {
            this.switcher.menuPositionFn(value);
            localStorage.setItem("ynexmenuposition", value);
        },
        headerPositionFn(value) {
            this.switcher.headerPositionFn(value);
            localStorage.setItem("ynexheaderposition", value);
        },
        menuColorFn(value) {
            this.switcher.menuColorFn(value);
            localStorage.setItem("ynexMenu", value);
        },
        headerColorFn(value) {
            this.switcher.headerColorFn(value);
            localStorage.setItem("ynexHeader", value);
        },
        themePrimaryFn(value) { this.switcher.themePrimaryFn(value); },
        themeBackgroundFn(val1, val2) { this.switcher.themeBackgroundFn(val1, val2); },
        backgroundImageFn(value) {
            this.switcher.backgroundImageFn(value);
            localStorage.setItem("ynexbgimg", value);
        },
        reset() {
            this.switcher.$reset();
            this.switcher.reset();
        },

        retrieveFromLocalStorage() {
            this.switcher.retrieveFromLocalStorage();
        },
    },
    mounted() {
        this.retrieveFromLocalStorage();
    },
}
</script>
<style lang="">
    
</style>