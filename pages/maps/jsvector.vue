<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "JsVector",
                list: [
                    'Maps', 'JsVector'
                ]
            },
            basicmap: null,
            markersmap: null,
            imagemap: null,
            lineMap: null,
            worldmap: null,
        };
    },
    methods: {
        handleResize() {
            // Check if the map is initialized
            if (this.basicmap) {
                // Update the basicmap map size
                this.basicmap.updateSize();
            }
            if (this.markersmap) {
                // Update the markersmap map size
                this.markersmap.updateSize();
            }
            if (this.imagemap) {
                // Update the imagemap map size
                this.imagemap.updateSize();
            }
            if (this.lineMap) {
                // Update the lineMap map size
                this.lineMap.updateSize();
            }
            if (this.worldmap) {
                // Update the worldmap map size
                this.worldmap.updateSize();
            }
        },
    },
    mounted() {
        /* basic vector map */
        this.basicmap = new jsVectorMap({
            selector: "#vector-map",
            map: "world_merc"
        });

        /* map with markers */
        var markers = [{
            name: 'Russia',
            coords: [61, 105],
            style: {
                fill: '#5c5cff'
            }
        },
        {
            name: 'Greenland',
            coords: [72, -42],
            style: {
                fill: '#ff9251'
            }
        },
        {
            name: 'Canada',
            coords: [56, -106],
            style: {
                fill: '#56de80'
            }
        },
        {
            name: 'Palestine',
            coords: [31.5, 34.8],
            style: {
                fill: 'yellow'
            }
        },
        {
            name: 'Brazil',
            coords: [-14.2350, -51.9253],
            style: {
                fill: '#000'
            }
        },
        ];

        this.markersmap = new jsVectorMap({
            map: 'world_merc',
            selector: '#marker-map',
            markersSelectable: true,
            // markersSelectableOne: true,

            onMarkerSelected(index:number, isSelected:boolean, selectedMarkers:any) {
                console.log(index, isSelected, selectedMarkers);
            },

            // -------- Labels --------
            labels: {
                markers: {
                    render: function (marker:any) {
                        return marker.name
                    },
                },
            },

            // -------- Marker and label style --------
            markers: markers,
            markerStyle: {
                hover: {
                    stroke: "#DDD",
                    strokeWidth: 3,
                    fill: '#FFF'
                },
                selected: {
                    fill: '#ff525d'
                }
            },
            markerLabelStyle: {
                initial: {
                    fontFamily: 'Poppins',
                    fontSize: 13,
                    fontWeight: 500,
                    fill: '#35373e',
                },
            },
        })

        /* map with image markers */
        var imagemarkers = [
            {
                name: 'Palestine',
                coords: [31.5, 34.8],
            },
            {
                name: 'Russia',
                coords: [61, 105],
            },
            {
                name: 'greenland',
                coords: [72, -42],
            },
            {
                name: 'Canada',
                coords: [56, -106],
            },
        ];
        this.imagemap = new jsVectorMap({
            map: 'world_merc',
            selector: '#marker-image-map',

            labels: {
                markers: {
                    render: function (marker:any) {
                        return marker.name
                    }
                }
            },
            markers: imagemarkers,
            markerStyle: {
                initial: {
                    image: true
                }
            },
            series: {
                markers: [{
                    attribute: 'image',
                    scale: {
                        marker1title: {
                            url: `${import.meta.env.BASE_URL}/images/brand-logos/toggle-logo.png`,
                            offset: [10, 0]
                        },
                        marker2title: {
                            url: `${import.meta.env.BASE_URL}/images/brand-logos/toggle-logo.png`,
                            offset: [10, 0]
                        }
                    },
                    values: {
                        0: 'marker1title',
                        1: 'marker2title',
                        2: 'marker2title',
                        3: 'marker1title',
                    }
                }],
            }
        })

        /* maps with lines */
        var linesmarkers = [
            { name: 'Russia', coords: [61.5240, 105.3188] },
            { name: 'Egypt', coords: [26.8206, 30.8025] },
            { name: 'Greenland', coords: [71.7069, -42.6043], offsets: [2, 10] },
            { name: 'Canada', coords: [56, -106], offsets: [-7, 12] },
        ]

        var lines = [
            { from: 'Russia', to: 'Egypt', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
            { from: 'Canada', to: 'Russia', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
        ]
        this.lineMap = new jsVectorMap({
            map: 'world_merc',
            selector: document.querySelector('#lines-map'),
            // -------- Labels --------
            labels: {
                markers: {
                    render: function (marker:any) {
                        return marker.name
                    },
                    offsets: function (index:number) {
                        return markers[index].offsets || [0, 0]
                    }
                },
            },
            // -------- Marker and label style --------
            markers: linesmarkers,
            lines: lines,
            lineStyle: {
                animation: true,
                strokeDasharray: "6 3 6",
            },
            markerStyle: {
                initial: {
                    r: 6,
                    fill: '#1266f1',
                    stroke: '#fff',
                    strokeWidth: 3,
                }
            },
            markerLabelStyle: {
                initial: {
                    fontSize: 13,
                    fontWeight: 500,
                    fill: '#35373e',
                },
            },
        })

        /* world vector map */
        this.worldmap = new jsVectorMap({
            selector: "#world-map",
            map: "world",
            regionStyle: {
                initial: {
                    stroke: "#e9e9e9",
                    strokeWidth: .15,
                    fill: "#845adf",
                    fillOpacity: 1
                }
            },
        });
        window.addEventListener('resize', this.handleResize);
    },
    unmounted() {
        // Remove the event listener when the component is destroyed
        window.removeEventListener('resize', this.handleResize);
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
                    <div class="card-title">Basic Vector Map</div>
                </div>
                <div class="card-body">
                    <div id="vector-map" style="width: 100%; height:350px"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Markers</div>
                </div>
                <div class="card-body">
                    <div id="marker-map" style="height:350px"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Image Markers</div>
                </div>
                <div class="card-body">
                    <div id="marker-image-map" style="height:350px"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Map With Lines</div>
                </div>
                <div class="card-body">
                    <div id="lines-map" style="height:350px"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">world-map Vector Map</div>
                </div>
                <div class="card-body">
                    <div id="world-map" style="height:350px"></div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style></style>

