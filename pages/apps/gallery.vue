<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import auth from '@/middleware/auth';

definePageMeta({
  middleware: [auth],
})
export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Gallery",
                list: [
                    'Apps', 'Gallery'
                ]
            },
            lightbox: null,
            items: [
                { src: `${import.meta.env.BASE_URL}/images/media/media-40.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-40.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-41.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-41.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-42.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-42.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-43.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-43.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-44.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-44.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-45.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-45.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-46.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-46.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-60.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-60.jpg`, alt: 'alt' },
            ],
        };
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#RandomUniqueId',
                children: 'a',
                pswpModule: () => import('photoswipe'),
                bgOpacity: 0.8,
                wheelToZoom: true,
                zoomTitle: 'Zoom',
            });
            this.lightbox.init();
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!--Start::row-1-->
    <div class="row" id="RandomUniqueId">
        <div class="col-lg-3 col-md-3 col-sm-6 col-12" v-for="(image, key) in items" :key="key">
            <a class="card" :href="image.src" :data-pswp-width="image.w" :data-pswp-height="image.h" target="_blank" rel="noreferrer">
                <img :src="image.thumbnail" alt="" style="width:100%; border-radius:0.25rem;overflow:hidden" />
            </a>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

