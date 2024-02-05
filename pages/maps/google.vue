<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import googleMarker from "@/components/common/maps/google-maps/googleMarker.vue";
import googleRectangle from "@/components/common/maps/google-maps/googleRectangle.vue";
import googlePolyline from "@/components/common/maps/google-maps/googlePolyline.vue";
import googlePolygon from "@/components/common/maps/google-maps/googlePolygon.vue";
import markerCluster from "@/components/common/maps/google-maps/markerCluster.vue";
import custommarker from "@/components/common/maps/google-maps/custommarker.vue";
import customControl from "@/components/common/maps/google-maps/customControl.vue";
import googleCircle from "@/components/common/maps/google-maps/googleCircle.vue";
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
        googleMarker,
        googleRectangle,
        googlePolyline, googlePolygon, markerCluster, custommarker, customControl, googleCircle
    },
    data() {
        return {
            dataToPass: {
                current: "Google",
                list: [
                    'Maps', 'Google'
                ]
            },
        };
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
                    <div class="card-title">Map With Marker</div>
                </div>
                <div class="card-body">
                    <googleMarker></googleMarker>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map with rectangle</div>
                </div>
                <div class="card-body">
                    <googleRectangle></googleRectangle>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map with Ploygon</div>
                </div>
                <div class="card-body">
                    <googlePolygon></googlePolygon>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Plyline</div>
                </div>
                <div class="card-body">
                    <googlePolyline></googlePolyline>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With markerCluster</div>
                </div>
                <div class="card-body">
                    <markerCluster></markerCluster>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Custom Marker</div>
                </div>
                <div class="card-body">
                    <custommarker></custommarker>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Circles</div>
                </div>
                <div class="card-body">
                    <googleCircle></googleCircle>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With custom Control</div>
                </div>
                <div class="card-body">
                    <customControl></customControl>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

