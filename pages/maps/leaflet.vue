<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';

import "leaflet/dist/leaflet.css";
import {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
} from "@vue-leaflet/vue-leaflet";
export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        LMap,
        LIcon,
        LTileLayer,
        LMarker,
        LTooltip,
        LPopup,
        LPolyline,
        LPolygon,
        LRectangle,
    },
    data() {
        return {
            dataToPass: {
                current: "Leaflet",
                list: [
                    'Maps', 'Leaflet'
                ]
            },
            zoom: 2,
            iconWidth: 50,
            iconHeight: 50,
        };
    },
    computed: {
        iconUrl() {
            return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
        },
        iconSize() {
            return [this.iconWidth, this.iconHeight];
        },
    },
    methods: {
        log(a: any) {
            console.log(a);
        }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Leaflet Map</div>
                </div>
                <div class="card-body">
                    <div style="height:500px; width:100%">
                        <l-map :use-global-leaflet="false" ref="map" :zoom="zoom" :center="[47.41322, -1.219482]">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                                name="OpenStreetMap"></l-tile-layer>
                        </l-map>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Markers,circles and Polygons</div>
                </div>
                <div class="card-body">
                    <div style="height: 500px; width: 100%;">
                        <l-map :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                            <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
                                hover-popup
                            </l-marker>

                            <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
                                click-popup
                            </l-marker>

                            <l-polyline :lat-lngs="[
                                [47.334852, -1.509485],
                                [47.342596, -1.328731],
                                [47.241487, -1.190568],
                                [47.234787, -1.358337],
                            ]" color="green"></l-polyline>
                            <l-polygon :lat-lngs="[
                                [46.334852, -1.509485],
                                [46.342596, -1.328731],
                                [46.241487, -1.190568],
                                [46.234787, -1.358337],
                            ]" color="#41b782" :fill="true" :fillOpacity="0.5" fillColor="#41b782" />
                            <l-rectangle :lat-lngs="[
                                [46.334852, -1.509485],
                                [46.342596, -1.328731],
                                [46.241487, -1.190568],
                                [46.234787, -1.358337],
                            ]" :fill="true" color="#35495d" />
                            <l-rectangle :bounds="[
                                [46.334852, -1.190568],
                                [46.241487, -1.090357],
                            ]">
                                <l-popup>
                                    Rectangle popup
                                </l-popup>
                            </l-rectangle>
                        </l-map>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Popup</div>
                </div>
                <div class="card-body">
                    <div style="height: 500px; width: 100%;">
                        <l-map :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                            <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
                                <l-tooltip>
                                    hover-popup
                                </l-tooltip>
                            </l-marker>

                            <l-marker :draggable="false" :lat-lng="[50, 50]" @moveend="log('moveend')">
                                <l-popup>
                                    click-popup
                                </l-popup>
                            </l-marker>
                        </l-map>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Custom Icon</div>
                </div>
                <div class="card-body">
                    <div style="height: 500px; width: 100%;">
                        <l-map :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                            <l-marker :lat-lng="[47.41322, -1.219482]">
                                <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
                            </l-marker>
                        </l-map>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

