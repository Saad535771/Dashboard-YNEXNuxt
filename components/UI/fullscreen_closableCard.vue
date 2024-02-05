<template>
    <div class="card custom-card" v-if="showCard" :class="customCardClass">
        <div class="card-header justify-content-between" :class="customCardHeaderClass">
            <div class="card-title" v-html="title">
            </div>
            <a href="javascript:void(0);" v-if="hasClose" @click="closeCard">
                <i class="ri-close-line fs-18"></i>
            </a>
            <a href="javascript:void(0);" v-if="hasFullScreen" @click="toggleFullscreen">
                <i class="ri-fullscreen-line"></i>
            </a>
        </div>
        <div class="card-body" :class="customCardBodyClass">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots.footer || closeCard" :class="customCardFooterClass">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
  
<script>

export default {
    props: {
        title: String,
        showCardVal: Boolean,
        customCardClass: String,
        customCardHeaderClass: String,
        customCardBodyClass: String,
        customCardFooterClass: String,
        hasClose: Boolean,
        hasFullScreen: Boolean,
    },
    data() {
        return {
            showCard: true
        };
    },
    methods: {
        closeCard() {
            this.showCard = !this.showCard;
        },
        toggleFullscreen(event) {
            let $this = event.currentTarget;
            let card = $this.closest('.card');
            card?.classList.toggle("card-fullscreen");
            card?.classList.remove("card-collapsed");
            event.preventDefault();
            return false;
        }
    },
    mounted() {
        this.showCard = this.showCardVal;
    },
};
</script>
  