<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as widgetsData from '@/data/widgets.js';
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
        current: "Widgets",
        list: [
          'Widgets', 'Widgets'
        ]
      },
      widgetsData: widgetsData,
    };
  },
  mounted() {

    // Users by country map
    var markers = [{
      name: 'Russia',
      coords: [61, 105],
      style: {
        fill: '#28d193'
      }
    },
    {
      name: 'Geenland',
      coords: [72, -42],
      style: {
        fill: '#ff8c33'
      }
    },
    {
      name: 'Canada',
      coords: [56, -106],
      style: {
        fill: '#ff534d'
      }
    },
    {
      name: 'Palestine',
      coords: [31.5, 34.8],
      style: {
        fill: '#ffbe14'
      }
    },
    {
      name: 'Brazil',
      coords: [-14.2350, -51.9253],
      style: {
        fill: '#4b9bfa'
      }
    },
    ];
    var map = new jsVectorMap({
      map: 'world_merc',
      selector: '#users-map',
      markersSelectable: true,

      onMarkerSelected(index, isSelected, selectedMarkers) {
        console.log(index, isSelected, selectedMarkers);
      },

      // -------- Labels --------
      labels: {
        markers: {
          render: function (marker) {
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
  }
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top">
            <div class="me-3">
              <span class="avatar avatar-sm shadow-sm avatar-rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-info" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" />
                  <path fill="#fff"
                    d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z" />
                </svg>
              </span>
            </div>
            <div class="flex-fill">
              <div class="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                <span class="flex-fill">Bitcoin</span>
                <span class="ms-1 text-muted">BTC</span>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <h5 class="fw-semibold mb-0">$12,800</h5>
                <div class="flex-fill">
                  <span class="ms-2 badge bg-success-transparent rounded-pill">+25.8%</span>
                </div>
                <div style="min-height:20px;width:100px">
                  <apexchart type="line" :options="widgetsData.Bitcoinoptions" height="20px" width="100px"
                    :series="widgetsData.Bitcoinseries"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top">
            <div class="me-3">
              <span class="avatar avatar-sm shadow-sm avatar-rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-success" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" />
                  <path fill="#fff"
                    d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z" />
                </svg>
              </span>
            </div>
            <div class="flex-fill">
              <div class="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                <span class="flex-fill">Ethereum</span>
                <span class="ms-1 text-muted">ETH</span>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <h5 class="fw-semibold mb-0">$18,600</h5>
                <div class="flex-fill">
                  <span class="ms-2 badge bg-success-transparent rounded-pill">+12.9%</span>
                </div>
                <div style="min-height:20px;width:100px">
                  <apexchart type="line" height="20px" width="100px" :options="widgetsData.Ethereumoptions"
                    :series="widgetsData.Ethereumseries"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top">
            <div class="me-3">
              <span class="avatar avatar-sm shadow-sm avatar-rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-danger" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" />
                  <path fill="#fff"
                    d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z" />
                  <path fill="#fff"
                    d="M55.9 58.1c-1.4 4-2.8 7.7-4.2 11.4-.1.3-.7.5-1 .5H19.2c-.1 0-.3-.1-.6-.2 1.3-3.7 2.6-7.3 4-10.9.1-.3.7-.7 1-.7 10.7-.1 21.4-.1 32.3-.1z" />
                </svg>
              </span>
            </div>
            <div class="flex-fill">
              <div class="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                <span class="flex-fill">Dash</span>
                <span class="ms-1 text-muted">DSH</span>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <h5 class="fw-semibold mb-0">$16,580</h5>
                <div class="flex-fill">
                  <span class="ms-2 badge bg-success-transparent rounded-pill">+15.7%</span>
                </div>
                <div style="min-height:20px;width:100px">
                  <apexchart type="line" height="20px" width="100px" :options="widgetsData.Dashoptions"
                    :series="widgetsData.Dashseries"></apexchart>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top">
            <div class="me-3">
              <span class="avatar avatar-sm shadow-sm avatar-rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-warning" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" />
                  <path fill="#fff"
                    d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z" />
                </svg>
              </span>
            </div>
            <div class="flex-fill">
              <div class="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                <span class="flex-fill">Golem</span>
                <span class="ms-1 text-muted">GLM</span>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <h5 class="fw-semibold mb-0">$12,545</h5>
                <div class="flex-fill">
                  <span class="ms-2 badge bg-success-transparent rounded-pill">+12.1%</span>
                </div>
                <div style="min-height:20px;width:100px">
                  <apexchart type="line" height="20px" width="100px" :options="widgetsData.Golemoptions"
                    :series="widgetsData.Golemseries"></apexchart>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xxl-2 col-xl-4 col-lg-12">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-top justify-content-between">
                <div class="flex-fill">
                  <p class="mb-0 text-muted">Total Candidates</p>
                  <div class="d-flex align-items-center">
                    <span class="fs-5 fw-semibold">9,231</span>
                    <span class="fs-12 text-success ms-2"><i class="ti ti-trending-up me-1"></i>0.5%</span>
                  </div>
                </div>
                <div>
                  <span class="avatar avatar-md avatar-rounded bg-primary-transparent text-primary fs-18">
                    <i class="bi bi-people-fill fs-16"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-top justify-content-between">
                <div class="flex-fill">
                  <p class="mb-0 text-muted">Total Subscriptions</p>
                  <div class="d-flex align-items-center">
                    <span class="fs-5 fw-semibold">3,571</span>
                    <span class="fs-12 text-success ms-2"><i
                        class="ti ti-trending-up me-1"></i>0.42%</span>
                  </div>
                </div>
                <div>
                  <span class="avatar avatar-md avatar-rounded bg-secondary-transparent text-secondary fs-18">
                    <i class="bi bi-person-lines-fill fs-16"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-top justify-content-between">
                <div class="flex-fill">
                  <p class="mb-0 text-muted">Page Views</p>
                  <div class="d-flex align-items-center">
                    <span class="fs-5 fw-semibold">1,986</span>
                    <span class="fs-12 text-success ms-2"><i class="ti ti-trending-up me-1"></i>5.1%</span>
                  </div>
                </div>
                <div>
                  <span class="avatar avatar-md avatar-rounded bg-success-transparent text-success fs-18">
                    <i class="bi bi-eye-fill fs-16"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-top justify-content-between">
                <div class="flex-fill">
                  <p class="mb-0 text-muted">New Registrations</p>
                  <div class="d-flex align-items-center">
                    <span class="fs-5 fw-semibold">773</span>
                    <span class="fs-12 text-success ms-2"><i class="ti ti-trending-up me-1"></i>3.5%</span>
                  </div>
                </div>
                <div>
                  <span class="avatar avatar-md avatar-rounded bg-info-transparent text-info fs-18">
                    <i class="bi bi-file-earmark-text-fill fs-16"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xl-8 col-lg-12">
      <div class="row">
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-top mb-2">
                <div class="flex-fill">
                  <p class="mb-0 text-muted">Total Recruiters</p>
                </div>
                <div class="ms-2">
                  <span class="avatar avatar-md bg-info fs-18">
                    <i class="bi bi-person-square"></i>
                  </span>
                </div>
              </div>
              <span class="fs-5 fw-semibold">9,231</span>
              <span class="fs-12 text-success ms-1"><i class="ti ti-trending-up me-1"></i>0.5%</span>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card card-bg-primary text-fixed-white">
            <div class="card-body">
              <div class="d-flex align-items-top mb-2">
                <div class="flex-fill">
                  <p class="mb-0 op-7">Premium Recruiters</p>
                </div>
                <div class="ms-2">
                  <span class="avatar avatar-md bg-secondary shadow-sm fs-18">
                    <i class="bi bi-person-square"></i>
                  </span>
                </div>
              </div>
              <span class="fs-5 fw-semibold">9,231</span>
              <span class="fs-12 op-7 ms-1"><i class="ti ti-trending-up me-1"></i>0.5%</span>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card overflow-hidden">
            <div class="card-body p-0">
              <div class="p-3">
                <div class="d-flex align-items-center mb-2">
                  <span class="avatar avatar-md avatar-rounded bg-secondary me-2">
                    <i class="bi bi-receipt fs-16"></i>
                  </span>
                  <p class="mb-0 flex-fill text-muted">Total Revenue</p>
                </div>
                <span class="fs-5 fw-semibold">$12,897</span>
                <span class="fs-12 text-success ms-1"><i class="ti ti-trending-up me-1"></i>3.5%</span>
              </div>
              <apexchart type="area" height="180px" :options="widgetsData.revenueoptions"
                :series="widgetsData.revenueseries"></apexchart>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <span class="avatar avatar-md avatar-rounded bg-success me-2">
                  <i class="bi bi-people fs-16"></i>
                </span>
                <p class="mb-0 flex-fill text-muted">Active Members</p>
              </div>
              <span class="fs-5 fw-semibold">$12,897</span>
              <span class="fs-12 text-success ms-1"><i class="ti ti-trending-up me-1"></i>3.5%</span>
              <div class="fw-normal d-flex align-items-center mb-2 mt-3">
                <p class="mb-0 flex-fill">Active Candidates</p>
                <span>3,274</span>
              </div>
              <div class="progress progress-xs mb-4">
                <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="fw-normal d-flex align-items-center mb-2">
                <p class="mb-0 flex-fill">Active Recruiters</p>
                <span>8,726</span>
              </div>
              <div class="progress progress-xs mb-2">
                <div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="card-footer text-center">
              <div class="d-grid">
                <a href="javascript:void(0);" class="text-primary">View Details <i class="ti ti-external-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-7 col-lg-7">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-fill d-flex align-items-center">
                  <div class="me-2">
                    <span class="avatar rounded-2 text-bg-primary fs-20"><i class="bi bi-people"></i></span>
                  </div>
                  <div class="flex-fill">
                    <p class="mb-0 ">Premium Recruiters</p>
                    <span class="text-success fs-12">7 New</span>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0);"
                    class="btn btn-icon btn-primary-light rounded-pill btn-wave transform-arrow"><v-tooltip
                      activator="parent" location="top">View All</v-tooltip><i
                      class="bi bi-chevron-right transform-arrow"></i></a>
                </div>
              </div>
              <p class="mb-3 fs-5 fw-semibold">386</p>
              <p class="mb-2 text-muted fw-normal">Recents</p>
              <div class="d-flex align-items-center justify-content-between">
                <div class="avatar-list-stacked">
                  <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle overflow-hidden"><v-tooltip
                      activator="parent" location="top">Mis x matched</v-tooltip><img src="/images/faces/2.jpg" alt="img"
                      class="w-100"></a>
                  <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle overflow-hidden"><v-tooltip
                      activator="parent" location="top">Barbel Bob</v-tooltip><img src="/images/faces/12.jpg" alt="img"
                      class="w-100"></a>
                  <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle overflow-hidden"><v-tooltip
                      activator="parent" location="top">Phan Rel</v-tooltip><img src="/images/faces/20.jpg" alt="img"
                      class="w-100"></a>
                  <a href="javascript:void(0);"
                    class="avatar avatar-sm rounded-circle overflow-hidden bg-primary text-fixed-white">+4</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="flex-fill">
                  <p class="mb-1 fs-5 fw-semibold text-default">1,773</p>
                  <p class="mb-0 text-muted">Active Members</p>
                  <p class="mb-0 fs-11"><a href="javascript:void(0);" class="text-success text-decoration-underline">View
                      All</a></p>
                </div>
                <div class="ms-2">
                  <span class="avatar text-bg-info rounded-circle fs-20"><i class="bi bi-people-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="flex-fill">
                  <p class="mb-1 fs-5 fw-semibold text-default">116</p>
                  <p class="mb-0 text-muted">Registrations</p>
                  <p class="mb-0 fs-11"><a href="javascript:void(0);" class="text-success text-decoration-underline">View
                      All</a></p>
                </div>
                <div class="ms-2">
                  <span class="avatar text-bg-success rounded-circle fs-20"><i class="bi bi-file-earmark-text"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-2 col-xl-5 col-lg-5">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card card-bg-primary">
            <div class="card-header justify-content-between border-bottom-0">
              <div class="card-title">
                Premium Recruiters
              </div>
              <div>
                <button class="btn btn-sm btn-icon text-bg-primary transform-arrow border-0"><i
                    class="ti ti-chevron-right"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-top">
                <div class="flex-fill overflow-hidden">
                  <p class="mb-2 lh-1 fs-5 fw-semibold">9,231</p>
                  <p class="mb-0 fs-12 text-fixed-white op-7">
                    <span><i class="bi bi-caret-up-fill"></i> 2.3%</span>
                    <span class="op-7 ms-1">From Last Month</span>
                  </p>
                </div>
                <div>
                  <span class="avatar avatar-sm bg-success avatar-rounded"><i class="bi bi-people-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body p-0">
              <div class="p-3">
                <div class="d-flex flex-wrap mb-1">
                  <a href="javascript:void(0);" class="pe-2">
                    <span class="avatar border text-muted text-primary"><i class="ri-apple-fill fs-18"></i></span>
                  </a>
                  <div class="flex-fill">
                    <div class="d-flex flex-wrap align-items-center justify-content-between mb-1">
                      <span class="fw-semibold">Apple</span>
                      <span class="text-success text-end"><i
                          class="ti ti-trending-up fs-11 me-1"></i>0.14%</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center justify-content-between fs-12 mb-3">
                      <span class="text-muted">$12,289.44</span>
                      <span class="text-success text-end">+$1,780.80</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="flex-fill btn btn-sm btn-light me-2">Short</a>
                  <a href="javascript:void(0);" class="flex-fill btn btn-sm btn-primary-light">Buy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body p-0">
              <div class="p-3">
                <div class="d-flex flex-wrap mb-1">
                  <a href="javascript:void(0);" class="pe-2">
                    <span class="avatar border text-muted text-primary"><i class="ri-bit-coin-fill fs-18"></i></span>
                  </a>
                  <div class="flex-fill">
                    <div class="d-flex flex-wrap align-items-center justify-content-between mb-1">
                      <span class="fw-semibold">Bitcoin</span>
                      <span class="text-success text-end"><i
                          class="ti ti-trending-up fs-11 me-1"></i>2.14%</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center justify-content-between fs-12 mb-3">
                      <span class="text-muted">$58,151.02</span>
                      <span class="text-success text-end">+$5,745.62</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="flex-fill btn btn-sm btn-light me-2">Short</a>
                  <a href="javascript:void(0);" class="flex-fill btn btn-sm btn-primary-light">Buy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->

  <!-- Start::row-3 -->
  <div class="row">
    <div class="col-xxl-3 col-sm-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top justify-content-between mb-4">
            <div class="flex-fill d-flex align-items-top">
              <div class="me-2">
                <span class="avatar avatar-md text-primary border bg-light"><i class="ti ti-users fs-18"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fw-semibold fs-14 mb-0">Total Candidates</p>
                <p class="mb-0 text-muted fs-12 op-7">Magna sit elitr kasd consetetur.</p>
              </div>
            </div>
            <div>
              <a href="javascript:void(0);" data-bs-toggle="dropdown" class="btn btn-icon btn-sm btn-light"><i
                  class="ti ti-dots"></i></a>
              <ul class="dropdown-menu">
                <li><a href="javascript:void(0);" class="dropdown-item">Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Another Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Something Else Here</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center mb-0">
            <p class="mb-0 fs-20 fw-semibold">2,460</p>
            <span class="text-muted ms-2"><i
                class="ti ti-trending-up align-middle text-success me-1"></i>2.5%</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-fill">
              <div class="progress progress-xs">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 14%" aria-valuenow="15"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="ms-3">
              <span class="fs-12 text-muted">14% Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top justify-content-between mb-4">
            <div class="flex-fill d-flex align-items-top">
              <div class="me-2">
                <span class="avatar avatar-md text-secondary border bg-light"><i
                    class="ti ti-user-circle fs-18"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fw-semibold fs-14 mb-0">Recruiters</p>
                <p class="mb-0 text-muted fs-12 op-7">Elitr at gubergren sit sed.</p>
              </div>
            </div>
            <div>
              <a href="javascript:void(0);" data-bs-toggle="dropdown" class="btn btn-icon btn-sm btn-light"><i
                  class="ti ti-dots"></i></a>
              <ul class="dropdown-menu">
                <li><a href="javascript:void(0);" class="dropdown-item">Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Another Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Something Else Here</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center mb-0">
            <p class="mb-0 fs-20 fw-semibold">7,539</p>
            <span class="text-muted ms-2"><i
                class="ti ti-trending-up align-middle text-success me-1"></i>3.1%</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-fill">
              <div class="progress progress-xs">
                <div class="progress-bar bg-secondary" role="progressbar" style="width: 55%" aria-valuenow="55"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="ms-3">
              <span class="fs-12 text-muted">55% Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top justify-content-between mb-4">
            <div class="flex-fill d-flex align-items-top">
              <div class="me-2">
                <span class="avatar avatar-md text-success border bg-light"><i class="ti ti-view-360 fs-18"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fw-semibold fs-14 mb-0">Page Views</p>
                <p class="mb-0 text-muted fs-12 op-7">Sed duo ut sanctus gubergren.</p>
              </div>
            </div>
            <div>
              <a href="javascript:void(0);" data-bs-toggle="dropdown" class="btn btn-icon btn-sm btn-light"><i
                  class="ti ti-dots"></i></a>
              <ul class="dropdown-menu">
                <li><a href="javascript:void(0);" class="dropdown-item">Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Another Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Something Else Here</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center mb-0">
            <p class="mb-0 fs-20 fw-semibold">13,693</p>
            <span class="text-muted ms-2"><i
                class="ti ti-trending-up align-middle text-success me-1"></i>5.4%</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-fill">
              <div class="progress progress-xs">
                <div class="progress-bar bg-success" role="progressbar" style="width: 24%" aria-valuenow="24"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="ms-3">
              <span class="fs-12 text-muted">24% Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-top justify-content-between mb-4">
            <div class="flex-fill d-flex align-items-top">
              <div class="me-2">
                <span class="avatar avatar-md text-indigo border bg-light"><i class="ti ti-view-360 fs-18"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fw-semibold fs-14 mb-0">Total Subscriptions</p>
                <p class="mb-0 text-muted fs-12 op-7">Invidunt magna voluptua.</p>
              </div>
            </div>
            <div>
              <a href="javascript:void(0);" data-bs-toggle="dropdown" class="btn btn-icon btn-sm btn-light"><i
                  class="ti ti-dots"></i></a>
              <ul class="dropdown-menu">
                <li><a href="javascript:void(0);" class="dropdown-item">Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Another Action</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Something Else Here</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center mb-0">
            <p class="mb-0 fs-20 fw-semibold">1,116</p>
            <span class="text-muted ms-2"><i
                class="ti ti-trending-down align-middle text-danger me-1"></i>3.2%</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-fill">
              <div class="progress progress-xs">
                <div class="progress-bar bg-indigo" role="progressbar" style="width: 67%" aria-valuenow="67"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="ms-3">
              <span class="fs-12 text-muted">67% Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-3 -->

  <!-- Start::row-4 -->
  <div class="row">
    <div class="col-xl-9">
      <div class="card custom-card">
        <div class="card-body p-0">
          <div class="row g-0">
            <div class="col-xl-3 border-end border-inline-end-dashed">
              <div class="d-flex flex-wrap align-items-top p-4">
                <div class="me-3 lh-1">
                  <span class="avatar avatar-md avatar-rounded bg-primary shadow-sm">
                    <i class="ti ti-package fs-18"></i>
                  </span>
                </div>
                <div class="flex-fill">
                  <h5 class="fw-semibold mb-1">45,280</h5>
                  <p class="text-muted mb-0 fs-12">Total Products</p>
                </div>
                <div>
                  <span class="badge bg-success-transparent"><i
                      class="ri-arrow-up-s-line align-middle me-1"></i>1.31%</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 border-end border-inline-end-dashed">
              <div class="d-flex flex-wrap align-items-top p-4">
                <div class="me-3 lh-1">
                  <span class="avatar avatar-md avatar-rounded bg-secondary shadow-sm">
                    <i class="ti ti-rocket fs-18"></i>
                  </span>
                </div>
                <div class="flex-fill">
                  <h5 class="fw-semibold mb-1">10,500</h5>
                  <p class="text-muted mb-0 fs-12">Total Sales</p>
                </div>
                <div>
                  <span class="badge bg-danger-transparent"><i
                      class="ri-arrow-down-s-line align-middle me-1"></i>1.14%</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 border-end border-inline-end-dashed">
              <div class="d-flex flex-wrap align-items-top p-4">
                <div class="me-3 lh-1">
                  <span class="avatar avatar-md avatar-rounded bg-success shadow-sm">
                    <i class="ti ti-wallet fs-18"></i>
                  </span>
                </div>
                <div class="flex-fill">
                  <h5 class="fw-semibold mb-1">$69,270</h5>
                  <p class="text-muted mb-0 fs-12">Income</p>
                </div>
                <div>
                  <span class="badge bg-success-transparent"><i
                      class="ri-arrow-up-s-line align-middle me-1"></i>2.58%</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="d-flex flex-wrap align-items-top p-4">
                <div class="me-3 lh-1">
                  <span class="avatar avatar-md avatar-rounded bg-warning shadow-sm">
                    <i class="ti ti-packge-import fs-18"></i>
                  </span>
                </div>
                <div class="flex-fill">
                  <h5 class="fw-semibold mb-1">12,088</h5>
                  <p class="text-muted mb-0 fs-12">Total Orders</p>
                </div>
                <div>
                  <span class="badge bg-success-transparent"><i
                      class="ri-arrow-up-s-line align-middle me-1"></i>12.05%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card card-bg-primary text-fixed-white">
        <div class="card-body p-0">
          <div class="d-flex align-items-top p-4 flex-wrap">
            <div class="me-3 lh-1">
              <span class="avatar avatar-md avatar-rounded bg-white text-primary shadow-sm">
                <i class="ti ti-coin fs-18"></i>
              </span>
            </div>
            <div class="flex-fill">
              <h5 class="fw-semibold mb-1 text-fixed-white">$21,520</h5>
              <p class="op-7 mb-0 fs-12">Expenses</p>
            </div>
            <div>
              <span class="badge bg-success"><i
                  class="ri-arrow-up-s-line align-middle me-1"></i>14.69%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-4 -->

  <!-- Start::row-5 -->
  <div class="row">
    <div class="col-xl-2">
      <div class="card custom-card border-top-card border-top-primary rounded-0">
        <div class="card-body">
          <div class="text-center">
            <span class="avatar avatar-md bg-primary shadow-sm avatar-rounded mb-2">
              <i class="ri-briefcase-2-line fs-16"></i>
            </span>
            <p class="fs-14 fw-semibold mb-2">Total Sales</p>
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <h5 class="mb-0 fw-semibold">15,800</h5>
              <span class="badge bg-success-transparent rounded-pill ms-1">+25.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-2">
      <div class="card custom-card border-top-card border-top-secondary rounded-0">
        <div class="card-body">
          <div class="text-center">
            <span class="avatar avatar-md bg-secondary shadow-sm avatar-rounded mb-2">
              <i class="ri-bill-line fs-16"></i>
            </span>
            <p class="fs-14 fw-semibold mb-2">Total Tax</p>
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <h5 class="mb-0 fw-semibold">$12,650</h5>
              <span class="badge bg-success-transparent rounded-pill ms-1">+12.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-2">
      <div class="card custom-card border-top-card border-top-success rounded-0">
        <div class="card-body">
          <div class="text-center">
            <span class="avatar avatar-md bg-success shadow-sm avatar-rounded mb-2">
              <i class="ri-wallet-2-line fs-16"></i>
            </span>
            <p class="fs-14 fw-semibold mb-2">Total Income</p>
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <h5 class="mb-0 fw-semibold">$14,800</h5>
              <span class="badge bg-success-transparent rounded-pill ms-1">+7.45%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-2">
      <div class="card custom-card border-top-card border-top-info rounded-0">
        <div class="card-body">
          <div class="text-center">
            <span class="avatar avatar-md bg-info shadow-sm avatar-rounded mb-2">
              <i class="ri-line-chart-line fs-16"></i>
            </span>
            <p class="fs-14 fw-semibold mb-2">Total Expenses</p>
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <h5 class="mb-0 fw-semibold">$7,566</h5>
              <span class="badge bg-danger-transparent rounded-pill ms-1">-3.21%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-2">
      <div class="card custom-card border-top-card border-top-warning rounded-0">
        <div class="card-body">
          <div class="text-center">
            <span class="avatar avatar-md bg-warning shadow-sm avatar-rounded mb-2">
              <i class="ri-money-dollar-box-line fs-16"></i>
            </span>
            <p class="fs-14 fw-semibold mb-2">Sales Profit</p>
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <h5 class="mb-0 fw-semibold">$7,474</h5>
              <span class="badge bg-success-transparent rounded-pill ms-1">+36.03%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-2">
      <div class="card custom-card border-top-card border-top-danger rounded-0">
        <div class="card-body">
          <div class="text-center">
            <span class="avatar avatar-md bg-danger shadow-sm avatar-rounded mb-2">
              <i class="ri-profile-line fs-16"></i>
            </span>
            <p class="fs-14 fw-semibold mb-2">Opex Ratio</p>
            <div class="d-flex align-items-center justify-content-center flex-wrap">
              <h5 class="mb-0 fw-semibold">32%</h5>
              <span class="badge bg-success-transparent rounded-pill ms-1">+0.89%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-5 -->

  <!-- Start::row-6 -->
  <div class="row">
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Upcoming Events
          </div>
          <div>
            <button class="btn btn-sm btn-primary-light">View All</button>
          </div>
        </div>
        <div class="card-body">
          <nav class="nav nav-style-1 nav-pills mb-4 nav-justified" role="tablist">
            <a class="nav-link px-2 active" data-bs-toggle="tab" role="tab" aria-current="page" href="#mon"
              aria-selected="false" tabindex="-1">
              <span class="d-block mb-1">09</span>
              <span class="d-block mb-0 op-7 fs-12">Mon</span>
            </a>
            <a class="nav-link px-2" data-bs-toggle="tab" role="tab" href="#tue" aria-selected="false" tabindex="-1">
              <span class="d-block mb-1">10</span>
              <span class="d-block mb-0 op-7 fs-12">Tue</span>
            </a>
            <a class="nav-link px-2" data-bs-toggle="tab" role="tab" href="#wed">
              <span class="d-block mb-1">11</span>
              <span class="d-block mb-0 op-7 fs-12">Wed</span>
            </a>
            <a class="nav-link px-2" data-bs-toggle="tab" role="tab" href="#thu" aria-selected="true">
              <span class="d-block mb-1">12</span>
              <span class="d-block mb-0 op-7 fs-12">Thu</span>
            </a>
            <a class="nav-link px-2" data-bs-toggle="tab" role="tab" href="#fri" aria-selected="true">
              <span class="d-block mb-1">13</span>
              <span class="d-block mb-0 op-7 fs-12">Fri</span>
            </a>
            <a class="nav-link px-2" data-bs-toggle="tab" role="tab" href="#sat" aria-selected="true">
              <span class="d-block mb-1">14</span>
              <span class="d-block mb-0 op-7 fs-12">Sat</span>
            </a>
            <a class="nav-link px-2" data-bs-toggle="tab" role="tab" href="#sun" aria-selected="true">
              <span class="d-block mb-1">15</span>
              <span class="d-block mb-0 op-7 fs-12">Sun</span>
            </a>
          </nav>
          <div class="tab-content pt-3 my-3">
            <div class="tab-pane show active border-0 p-0" id="mon" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1 "></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane border-0 p-0" id="tue" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane border-0 p-0" id="wed" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane border-0 p-0" id="thu" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane border-0 p-0" id="fri" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane border-0 p-0" id="sat" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane border-0 p-0" id="sun" role="tabpanel">
              <ul class="list-unstyled mb-0 upcoming-events-list">
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Meeting with client</p>
                      <p class="mb-0 text-muted">Video Conference</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>9:00am -
                        10:00am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Lunch with team members</p>
                      <p class="mb-0 text-muted">Dolores Ait Labore Sit</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>12:00pm -
                        12:45am</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">General board meeting</p>
                      <p class="mb-0 text-muted">Golden PArk</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>4:00pm -
                        5:30pm</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-top justify-conent-between">
                    <div class="flex-fill">
                      <p class="mb-0 fs-14">Create New Registration Page</p>
                      <p class="mb-0 text-muted">2UA Project</p>
                    </div>
                    <div>
                      <span class="text-muted"><i class="ri-time-line align-middle me-1"></i>5:00pm -
                        5:45pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Timeline
          </div>
          <div>
            <button class="btn btn-sm btn-primary-light btn-wave">View All</button>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled timeline-widget mb-0 my-3">
            <li class="timeline-widget-list">
              <div class="d-flex align-items-top">
                <div class="me-5 text-center">
                  <span class="d-block fs-20 fw-semibold">02</span>
                  <span class="d-block fs-12 text-muted">Mon</span>
                </div>
                <div class="d-flex flex-fill align-items-center justify-content-between">
                  <div>
                    <p class="mb-1 timeline-widget-content text-wrap">You have an announcement - Ipsum Est
                      Diam Eirmod</p>
                    <p class="mb-0 fs-12 lh-1 text-muted">10:00AM<span
                        class="badge bg-primary-transparent ms-2">Announcement</span></p>
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-16 text-muted" data-bs-toggle="dropdown">
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="timeline-widget-list">
              <div class="d-flex align-items-top">
                <div class="me-5 text-center">
                  <span class="d-block fs-20 fw-semibold">15</span>
                  <span class="d-block fs-12 text-muted">Sun</span>
                </div>
                <div class="d-flex flex-fill align-items-center justify-content-between">
                  <div>
                    <p class="mb-1 timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                    <p class="mb-0 fs-12 lh-1 text-muted"><span class="badge bg-warning-transparent">Holiday</span></p>
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-16 text-muted" data-bs-toggle="dropdown">
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="timeline-widget-list">
              <div class="d-flex align-items-top">
                <div class="me-5 text-center">
                  <span class="d-block fs-20 fw-semibold">23</span>
                  <span class="d-block fs-12 text-muted">Mon</span>
                </div>
                <div class="d-flex flex-fill align-items-center justify-content-between">
                  <div>
                    <p class="mb-1 timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                    <p class="mb-4 fs-12 lh-1 text-muted">09:00AM<span
                        class="badge bg-success-transparent ms-2">Birthday</span></p>
                    <p class="mb-1 timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores
                      Tempor Erat</p>
                    <p class="mb-0 fs-12 lh-1 text-muted">04:00PM<span
                        class="badge bg-primary-transparent ms-2">Announcement</span></p>
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-16 text-muted" data-bs-toggle="dropdown">
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="timeline-widget-list">
              <div class="d-flex align-items-top">
                <div class="me-5 text-center">
                  <span class="d-block fs-20 fw-semibold">31</span>
                  <span class="d-block fs-12 text-muted">Tue</span>
                </div>
                <div class="d-flex flex-fill align-items-center justify-content-between">
                  <div>
                    <p class="mb-1 timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                    <p class="mb-0 fs-12 lh-1 text-muted"><span class="badge bg-warning-transparent">Holiday</span></p>
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-16 text-muted" data-bs-toggle="dropdown">
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Traffic Sources
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hover text-nowrap">
              <thead>
                <tr>
                  <th>Browser</th>
                  <th>Sessions</th>
                  <th>Views</th>
                  <th>Traffic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                        <i class="ri-google-fill fs-18 text-fixed-white"></i>
                      </span>
                      <div class="fw-semibold">Google</div>
                    </div>
                  </td>
                  <td>
                    <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>23,379</span>
                  </td>
                  <td>
                    <span>16,890</span>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 34%" aria-valuenow="34"
                        aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                        <i class="ri-safari-line fs-18 text-fixed-white"></i>
                      </span>
                      <div class="fw-semibold">Safari</div>
                    </div>

                  </td>
                  <td>
                    <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>78,973</span>
                  </td>
                  <td>
                    <span>29,906</span>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 58%" aria-valuenow="58"
                        aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                        <i class="ri-opera-fill fs-18 text-fixed-white"></i>
                      </span>
                      <div class="fw-semibold">Opera</div>
                    </div>

                  </td>
                  <td>
                    <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>12,457</span>
                  </td>
                  <td>
                    <span>8,674</span>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 62%" aria-valuenow="62"
                        aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                        <i class="ri-edge-fill fs-18 text-fixed-white"></i>
                      </span>
                      <div class="fw-semibold">Edge</div>
                    </div>

                  </td>
                  <td>
                    <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>8,570</span>
                  </td>
                  <td>
                    <span>4,980</span>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 71%" aria-valuenow="71"
                        aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                        <i class="ri-firefox-fill fs-18 text-fixed-white"></i>
                      </span>
                      <div class="fw-semibold">Firefox</div>
                    </div>

                  </td>
                  <td>
                    <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>6,135</span>
                  </td>
                  <td>
                    <span>4,436</span>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 48%" aria-valuenow="48"
                        aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                        <i class="ri-ubuntu-fill fs-18 text-fixed-white"></i>
                      </span>
                      <div class="fw-semibold">Ubuntu</div>
                    </div>

                  </td>
                  <td>
                    <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>4,789</span>
                  </td>
                  <td>
                    <span>2,447</span>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 28%" aria-valuenow="28"
                        aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-6 -->

  <!-- Start:: row-7 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Users By Country
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex flex-wrap justify-content-between mb-5">
            <div class="me-5 d-flex align-items-center">
              <div class="me-2">
                <span class="avatar avatar-rounded bg-primary-transparent text-primary"><i
                    class="ri-user-3-line fs-16"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fs-18 mb-0 text-primary fw-semibold">25,350</p>
                <span class="text-muted fs-12">This month</span>
              </div>
            </div>
            <div class="me-3 d-flex align-items-center">
              <div class="me-2">
                <span class="avatar avatar-rounded bg-light text-default"><i class="ri-user-3-line fs-16"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fs-18 mb-0 fw-semibold">19,200</p>
                <span class="text-muted fs-12">Last month</span>
              </div>
            </div>
            <div class="me-3 d-flex align-items-center">
              <div class="me-2">
                <span class="avatar avatar-rounded bg-success-transparent"><i class="ri-user-3-line fs-16"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fs-18 mb-0 text-success fw-semibold">1,24,890</p>
                <span class="text-muted fs-12">This Year</span>
              </div>
            </div>
            <div class="me-3 d-flex align-items-center">
              <div class="me-2">
                <span class="avatar avatar-rounded bg-secondary-transparent"><i class="ri-user-3-line fs-16"></i></span>
              </div>
              <div class="flex-fill">
                <p class="fs-18 mb-0 text-secondary fw-semibold">97,799</p>
                <span class="text-muted fs-12">Last Year</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-5">
              <div class="h-100 my-auto">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                      <div><i
                          class="ri-checkbox-blank-circle-fill text-primary fs-8 me-1 align-middle"></i>Brazil
                      </div>
                      <div>1,290</div>
                      <div class="text-success"><i class="ri-arrow-up-s-line align-middle me-1"></i>2.90%
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                      <div><i
                          class="ri-checkbox-blank-circle-fill text-secondary fs-8 me-1 align-middle"></i>Greenland
                      </div>
                      <div>2,596</div>
                      <div class="text-danger"><i class="ri-arrow-down-s-line align-middle me-1"></i>1.1%
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                      <div><i
                          class="ri-checkbox-blank-circle-fill text-success fs-8 me-1 align-middle"></i>Russia
                      </div>
                      <div>3,710</div>
                      <div class="text-success"><i class="ri-arrow-up-s-line align-middle me-1"></i>0.8%
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                      <div><i
                          class="ri-checkbox-blank-circle-fill text-warning fs-8 me-1 align-middle"></i>Palestine
                      </div>
                      <div>1,116</div>
                      <div class="text-danger"><i class="ri-arrow-up-s-line align-middle me-1"></i>10.06%
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                      <div><i
                          class="ri-checkbox-blank-circle-fill text-danger fs-8 me-1 align-middle"></i>Canada
                      </div>
                      <div>12,150</div>
                      <div class="text-success"><i class="ri-arrow-up-s-line align-middle me-1"></i>9.05%
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-7">
              <div id="users-map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Recent Tasks
          </div>
          <div class="dropdown">
            <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
              View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table text-nowrap table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Assigned To</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Server Side Validation</td>
                  <td>
                    <div class="avatar-list-stacked">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/2.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/8.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/2.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/10.jpg" alt="img">
                      </span>
                      <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                        +2
                      </a>
                    </div>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-primary-transparent">In Progress</span>
                  </td>
                  <td>
                    17-04-2023
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Multipurpose Dashboard Template</td>
                  <td>
                    <div class="avatar-list-stacked">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/6.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/8.jpg" alt="img">
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-warning-transparent">Pending</span>
                  </td>
                  <td>
                    14-05-2023
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Documentation Project</td>
                  <td>
                    <div class="avatar-list-stacked">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/4.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/15.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/11.jpg" alt="img">
                      </span>
                      <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                        +1
                      </a>
                    </div>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-success-transparent">Completed</span>
                  </td>
                  <td>
                    20-04-2023
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>HR Management Template Design</td>
                  <td>
                    <div class="avatar-list-stacked">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/5.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/12.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/13.jpg" alt="img">
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-primary-transparent">In Progress</span>
                  </td>
                  <td>
                    29-05-2023
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Developing Backend</td>
                  <td>
                    <div class="avatar-list-stacked">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/1.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/8.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/9.jpg" alt="img">
                      </span>
                      <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                        +3
                      </a>
                    </div>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-primary-transparent">In Progress</span>
                  </td>
                  <td>
                    25-05-2023
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td> Design New Dashboard Template</td>
                  <td>
                    <div class="avatar-list-stacked">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/4.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/12.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/faces/16.jpg" alt="img">
                      </span>
                      <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                        +3
                      </a>
                    </div>
                  </td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-success-transparent">Completed</span>
                  </td>
                  <td>
                    04-05-2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-7 -->

  <!-- Start::row-8 -->
  <div class="row">
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Recent Applicants</div>
        </div>
        <div class="card-body">
          <apexchart type="line" height="348px" :options="widgetsData.pageviewsoptions"
            :series="widgetsData.pageviewsseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Sessions By Device</div>
        </div>
        <div class="card-body">
          <apexchart type="bubble" height="350px" :options="widgetsData.Sessionsoptions"
            :series="widgetsData.Sessionsseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Target Report</div>
          <div class="ms-auto">
            <a href="javascript:void(0);" class="btn btn-sm btn-primary-light dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
              Details
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body pb-3">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="float-end text-primary" fill="currentColor" width="36px"
              height="36px" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
            </svg>
            <p class="text-primary fw-500 mb-2">Revenue by week</p>
            <h4 class="mb-2 fw-semibold">$54,125.03</h4>
            <span class="text-danger me-1 fs-14"> - 1.3%<i class="ri-arrow-down-s-fill align-middle ms-1"></i> </span>
            <span class="text-muted fs-12">33% of target reached</span>
          </div>
          <apexchart type="bar" :options="widgetsData.reportoptions" :series="widgetsData.reportseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-8 -->
</template>

<style scoped></style>

