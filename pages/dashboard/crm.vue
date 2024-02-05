<script lang="ts">
import * as crmData from '@/data/dashboards/crm.js';
import { DoughnutChart } from 'vue-chart-3';
import auth from '@/middleware/auth';

export default {
  components: {
    DoughnutChart
  },
  data() {
    return {
      crmData,

    }
  },
  setup() {
    definePageMeta({
      layout: 'maindashboard',
      middleware: [auth],
    })
  }
}
</script>

<template>
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9 col-xl-12">
      <div class="row">
        <div class="col-xl-4">
          <div class="row">
            <div class="col-xl-12">
              <div class="card custom-card crm-highlight-card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="me-1">
                      <div class="fw-semibold fs-18 text-fixed-white mb-2">Your target is incomplete</div>
                      <span class="d-block fs-12 text-fixed-white"><span class="op-7">You have completed</span> <span
                          class="fw-semibold text-warning">48%</span> <span class="op-7">of the given target, you can also
                          check your status</span>.</span>
                      <span class="d-block fw-semibold mt-1"><a class="text-fixed-white"
                          href="javascript:void(0);"><u>Click here</u></a></span>
                    </div>
                    <div style="height:100px; width:170px">
                      <apexchart height="127px" type="radialBar" :options="crmData.targetOptions"
                        :series="crmData.targetSeries"></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-header  justify-content-between">
                <div class="card-title">
                  Top Deals
                </div>
                <div class="dropdown">
                  <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fe fe-more-vertical"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <ul class="list-unstyled crm-top-deals mb-0">
                  <li>
                    <div class="d-flex align-items-top flex-wrap">
                      <div class="me-2">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/10.jpg" alt="">
                        </span>
                      </div>
                      <div class="flex-fill">
                        <p class="fw-semibold mb-0">Michael Jordan</p>
                        <span class="text-muted fs-12">michael.jordan@example.com</span>
                      </div>
                      <div class="fw-semibold fs-15">$2,893</div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-top flex-wrap">
                      <div class="me-2">
                        <span class="avatar avatar-sm avatar-rounded bg-warning-transparent fw-semibold">
                          EK
                        </span>
                      </div>
                      <div class="flex-fill">
                        <p class="fw-semibold mb-0">Emigo Kiaren</p>
                        <span class="text-muted fs-12">emigo.kiaren@gmail.com</span>
                      </div>
                      <div class="fw-semibold fs-15">$4,289</div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-top flex-wrap">
                      <div class="me-2">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/12.jpg" alt="">
                        </span>
                      </div>
                      <div class="flex-fill">
                        <p class="fw-semibold mb-0">Randy Origoan</p>
                        <span class="text-muted fs-12">randy.origoan@gmail.com</span>
                      </div>
                      <div class="fw-semibold fs-15">$6,347</div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-top flex-wrap">
                      <div class="me-2">
                        <span class="avatar avatar-sm avatar-rounded bg-success-transparent fw-semibold">
                          GP
                        </span>
                      </div>
                      <div class="flex-fill">
                        <p class="fw-semibold mb-0">George Pieterson</p>
                        <span class="text-muted fs-12">george.pieterson@gmail.com</span>
                      </div>
                      <div class="fw-semibold fs-15">$3,894</div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-top flex-wrap">
                      <div class="me-2">
                        <span class="avatar avatar-sm avatar-rounded bg-primary-transparent fw-semibold">
                          KA
                        </span>
                      </div>
                      <div class="flex-fill">
                        <p class="fw-semibold mb-0">Kiara Advain</p>
                        <span class="text-muted fs-12">kiaraadvain214@gmail.com</span>
                      </div>
                      <div class="fw-semibold fs-15">$2,679</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="card custom-card">
              <div class="card-header justify-content-between">
                <div class="card-title">Profit Earned</div>
                <div class="dropdown">
                  <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body py-0 ps-0">
                <apexchart height="180px" type="bar" :options="crmData.earnedOptions" :series="crmData.earnedSeries">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="row">
            <div class="col-xxl-6 col-lg-6 col-md-6">
              <div class="card custom-card overflow-hidden">
                <div class="card-body">
                  <div class="d-flex align-items-top justify-content-between">
                    <div>
                      <span class="avatar avatar-md avatar-rounded bg-primary">
                        <i class="ti ti-users fs-16"></i>
                      </span>
                    </div>
                    <div class="flex-fill ms-3">
                      <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                          <p class="text-muted mb-0">Total Customers</p>
                          <h4 class="fw-semibold mt-1">1,02,890</h4>
                        </div>
                        <div style="width:100px" class="sparkline">
                          <apexchart width="100px" height="40px" type="line" :options="crmData.customersOptions"
                            :series="crmData.customersseries"></apexchart>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-1">
                        <div>
                          <a class="text-primary" href="javascript:void(0);">View All<i
                              class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                        </div>
                        <div class="text-end">
                          <p class="mb-0 text-success fw-semibold">+40%</p>
                          <span class="text-muted op-7 fs-11">this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-lg-6 col-md-6">
              <div class="card custom-card overflow-hidden">
                <div class="card-body">
                  <div class="d-flex align-items-top justify-content-between">
                    <div>
                      <span class="avatar avatar-md avatar-rounded bg-secondary">
                        <i class="ti ti-wallet fs-16"></i>
                      </span>
                    </div>
                    <div class="flex-fill ms-3">
                      <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                          <p class="text-muted mb-0">Total Revenue</p>
                          <h4 class="fw-semibold mt-1">$56,562</h4>
                        </div>
                        <div style="width:100px" class="sparkline">
                          <apexchart width="100px" height="40px" type="line" :options="crmData.revenueOptions"
                            :series="crmData.revenueSeries"></apexchart>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-1">
                        <div>
                          <a class="text-secondary" href="javascript:void(0);">View All<i
                              class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                        </div>
                        <div class="text-end">
                          <p class="mb-0 text-success fw-semibold">+25%</p>
                          <span class="text-muted op-7 fs-11">this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-lg-6 col-md-6">
              <div class="card custom-card overflow-hidden">
                <div class="card-body">
                  <div class="d-flex align-items-top justify-content-between">
                    <div>
                      <span class="avatar avatar-md avatar-rounded bg-success">
                        <i class="ti ti-wave-square fs-16"></i>
                      </span>
                    </div>
                    <div class="flex-fill ms-3">
                      <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                          <p class="text-muted mb-0">Conversion Ratio</p>
                          <h4 class="fw-semibold mt-1">12.08%</h4>
                        </div>
                        <div style="width:100px" class="sparkline">
                          <apexchart width="100px" height="40px" type="line" :options="crmData.conversionOptions"
                            :series="crmData.conversionSeries"></apexchart>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-1">
                        <div>
                          <a class="text-success" href="javascript:void(0);">View All<i
                              class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                        </div>
                        <div class="text-end">
                          <p class="mb-0 text-danger fw-semibold">-12%</p>
                          <span class="text-muted op-7 fs-11">this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-lg-6 col-md-6">
              <div class="card custom-card overflow-hidden">
                <div class="card-body">
                  <div class="d-flex align-items-top justify-content-between">
                    <div>
                      <span class="avatar avatar-md avatar-rounded bg-warning">
                        <i class="ti ti-briefcase fs-16"></i>
                      </span>
                    </div>
                    <div class="flex-fill ms-3">
                      <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                          <p class="text-muted mb-0">Total Deals</p>
                          <h4 class="fw-semibold mt-1">2,543</h4>
                        </div>
                        <div style="width:100px" class="sparkline">
                          <apexchart width="100px" height="40px" type="line" :options="crmData.dealsOptions"
                            :series="crmData.dealsSeries"></apexchart>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-1">
                        <div>
                          <a class="text-warning" href="javascript:void(0);">View All<i
                              class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                        </div>
                        <div class="text-end">
                          <p class="mb-0 text-success fw-semibold">+19%</p>
                          <span class="text-muted op-7 fs-11">this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="card custom-card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                    Revenue Analytics
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="content-wrapper" id="crm-revenue-analytics">
                    <apexchart height="345px" type="line" :options="crmData.analyticsOptions"
                      :series="crmData.analyticsSeries"></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Deals Statistics
              </div>
              <div class="d-flex flex-wrap gap-2">
                <div>
                  <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                    aria-label=".form-control-sm example">
                </div>
                <div class="dropdown">
                  <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-nowrap table-hover border table-bordered">
                  <thead>
                    <tr>
                      <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox" id="checkboxNoLabel1"
                          value="" aria-label="..."></th>
                      <th scope="col">Sales Rep</th>
                      <th scope="col">Category</th>
                      <th scope="col">Mail</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox" id="checkboxNoLabel2"
                          value="" aria-label="..."></th>
                      <td>
                        <div class="d-flex align-items-center fw-semibold">
                          <span class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="/images/faces/4.jpg" alt="img">
                          </span>Mayor Kelly
                        </div>
                      </td>
                      <td>Manufacture</td>
                      <td>mayorkelly@gmail.com</td>
                      <td>
                        <span class="badge bg-info-transparent">Germany</span>
                      </td>
                      <td>Sep 15 - Oct 12, 2023</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light"><i
                              class="ri-download-2-line"></i></a>
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"><i
                              class="ri-edit-line"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox" id="checkboxNoLabel13"
                          value="" aria-label="..." checked></th>
                      <td>
                        <div class="d-flex align-items-center fw-semibold">
                          <span class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="/images/faces/15.jpg" alt="img">
                          </span>Andrew Garfield
                        </div>
                      </td>
                      <td>Development</td>
                      <td>andrewgarfield@gmail.com</td>
                      <td>
                        <span class="badge bg-primary-transparent">Canada</span>
                      </td>
                      <td>Apr 10 - Dec 12, 2023</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                              class="ri-download-2-line"></i></a>
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                              class="ri-edit-line"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox" id="checkboxNoLabel4"
                          value="" aria-label="..."></th>
                      <td>
                        <div class="d-flex align-items-center fw-semibold">
                          <span class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="/images/faces/11.jpg" alt="img">
                          </span>Simon Cowel
                        </div>
                      </td>
                      <td>Service</td>
                      <td>simoncowel234@gmail.com</td>
                      <td>
                        <span class="badge bg-danger-transparent">Europe</span>
                      </td>
                      <td>Sep 15 - Oct 12, 2023</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                              class="ri-download-2-line"></i></a>
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                              class="ri-edit-line"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox" id="checkboxNoLabel5"
                          value="" aria-label="..." checked></th>
                      <td>
                        <div class="d-flex align-items-center fw-semibold">
                          <span class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="/images/faces/8.jpg" alt="img">
                          </span>Mirinda Hers
                        </div>
                      </td>
                      <td>Marketing</td>
                      <td>mirindahers@gmail.com</td>
                      <td>
                        <span class="badge bg-warning-transparent">USA</span>
                      </td>
                      <td>Apr 14 - Dec 14, 2023</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                              class="ri-download-2-line"></i></a>
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                              class="ri-edit-line"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox" id="checkboxNoLabel3"
                          value="" aria-label="..." checked></th>
                      <td>
                        <div class="d-flex align-items-center fw-semibold">
                          <span class="avatar avatar-sm me-2 avatar-rounded">
                            <img src="/images/faces/9.jpg" alt="img">
                          </span>Jacob Smith
                        </div>
                      </td>
                      <td>Social Plataform</td>
                      <td>jacobsmith@gmail.com</td>
                      <td>
                        <span class="badge bg-success-transparent">Singapore</span>
                      </td>
                      <td>Feb 25 - Nov 25, 2023</td>
                      <td>
                        <div class="hstack gap-2 fs-15">
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                              class="ri-download-2-line"></i></a>
                          <a aria-label="anchor" href="javascript:void(0);"
                            class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                              class="ri-edit-line"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center">
                <div>
                  Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
                </div>
                <div class="ms-auto">
                  <nav aria-label="Page navigation" class="pagination-style-4">
                    <ul class="pagination mb-0">
                      <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);">
                          Prev
                        </a>
                      </li>
                      <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                      <li class="page-item">
                        <a class="page-link text-primary" href="javascript:void(0);">
                          next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-12">
      <div class="row">
        <div class="col-xxl-12 col-xl-12">
          <div class="row">
            <div class="col-xl-12 col-xl-6">
              <div class="card custom-card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                    Leads By Source
                  </div>
                  <div class="dropdown">
                    <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                      data-bs-toggle="dropdown">
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body p-0 overflow-hidden">
                  <div class="leads-source-chart d-flex align-items-center justify-content-center">
                    <DoughnutChart class="chartjs-chart p-4" :width="240" :height="240"
                      :chartData="crmData.SourceChartData" :options="crmData.SourceOptions" />
                    <div class="lead-source-value">
                      <span class="d-block fs-14">Total</span>
                      <span class="d-block fs-25 fw-bold">4,145</span>
                    </div>
                  </div>
                  <div class="row row-cols-12 border-top border-block-start-dashed">
                    <div class="col p-0">
                      <div class="ps-4 py-3 pe-3 text-center border-end border-inline-end-dashed">
                        <span class="text-muted fs-12 mb-1 crm-lead-legend mobile d-inline-block">Mobile
                        </span>
                        <div><span class="fs-16 fw-semibold">1,624</span>
                        </div>
                      </div>
                    </div>
                    <div class="col p-0">
                      <div class="p-3 text-center border-end border-inline-end-dashed">
                        <span class="text-muted fs-12 mb-1 crm-lead-legend desktop d-inline-block">Desktop
                        </span>
                        <div><span class="fs-16 fw-semibold">1,267</span></div>
                      </div>
                    </div>
                    <div class="col p-0">
                      <div class="p-3 text-center border-end border-inline-end-dashed">
                        <span class="text-muted fs-12 mb-1 crm-lead-legend laptop d-inline-block">Laptop
                        </span>
                        <div><span class="fs-16 fw-semibold">1,153</span>
                        </div>
                      </div>
                    </div>
                    <div class="col p-0">
                      <div class="p-3 text-center">
                        <span class="text-muted fs-12 mb-1 crm-lead-legend tablet d-inline-block">Tablet
                        </span>
                        <div><span class="fs-16 fw-semibold">679</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-12 col-xl-6">
              <div class="card custom-card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                    Deals Status
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <h4 class="fw-bold mb-0">4,289</h4>
                    <div class="ms-2">
                      <span class="badge bg-success-transparent">1.02<i
                          class="ri-arrow-up-s-fill align-mmiddle ms-1"></i></span>
                      <span class="text-muted ms-1">compared to last week</span>
                    </div>
                  </div>
                  <div class="progress-stacked progress-animate progress-xs mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 21%" aria-valuenow="21" aria-valuemin="0"
                      aria-valuemax="100"></div>
                    <div class="progress-bar bg-info" role="progressbar" style="width: 26%" aria-valuenow="26"
                      aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35"
                      aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-success" role="progressbar" style="width: 18%" aria-valuenow="18"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <ul class="list-unstyled mb-0 pt-2 crm-deals-status">
                    <li class="primary">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>Successful Deals</div>
                        <div class="fs-12 text-muted">987 deals</div>
                      </div>
                    </li>
                    <li class="info">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>Pending Deals</div>
                        <div class="fs-12 text-muted">1,073 deals</div>
                      </div>
                    </li>
                    <li class="warning">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>Rejected Deals</div>
                        <div class="fs-12 text-muted">1,674 deals</div>
                      </div>
                    </li>
                    <li class="success">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>Upcoming Deals</div>
                        <div class="fs-12 text-muted">921 deals</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-12 col-xl-6">
              <div class="card custom-card">
                <div class="card-header justify-content-between">
                  <div class="card-title">
                    Recent Activity
                  </div>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div>
                    <ul class="list-unstyled mb-0 crm-recent-activity">
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-primary-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span class="fw-semibold">Update of calendar events &amp;</span><span><a
                                href="javascript:void(0);" class="text-primary fw-semibold"> Added new events in next
                                week.</a></span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">4:45PM</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-secondary-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>New theme for <span class="fw-semibold">Spruko Website</span> completed</span>
                            <span class="d-block fs-12 text-muted">Lorem ipsum, dolor sit amet.</span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">3 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-success-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>Created a <span class="text-success fw-semibold">New Task</span> today <span
                                class="avatar avatar-xs bg-purple-transparent avatar-rounded ms-1"><i
                                  class="ri-add-fill text-purple fs-12"></i></span></span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">22 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-pink-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>New member <span class="badge bg-pink-transparent">@andreas gurrero</span> added today
                              to AI Summit.</span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">Today</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-warning-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>32 New people joined summit.</span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">22 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-info-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>Neon Tarly added <span class="text-info fw-semibold">Robert Bright</span> to AI summit
                              project.</span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">12 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-dark-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>Replied to new support request <i
                                class="ri-checkbox-circle-line text-success fs-16 align-middle"></i></span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">4 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li class="crm-recent-activity-content">
                        <div class="d-flex align-items-top">
                          <div class="me-3">
                            <span class="avatar avatar-xs bg-purple-transparent avatar-rounded">
                              <i class="bi bi-circle-fill fs-8"></i>
                            </span>
                          </div>
                          <div class="crm-timeline-content">
                            <span>Completed documentation of <a href="javascript:void(0);"
                                class="text-purple text-decoration-underline fw-semibold">AI Summit.</a></span>
                          </div>
                          <div class="flex-fill text-end">
                            <span class="d-block text-muted fs-11 op-7">4 hrs</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style>
.apexcharts-radialbar-hollow {
  fill: transparent !important;
}
</style>
