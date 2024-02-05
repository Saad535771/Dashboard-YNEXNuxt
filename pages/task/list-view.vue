<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { listViewOptions, listViewSeries, totalTasks } from '@/data/list-view.js';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
        const picked = ref(new Date()); const picked1 = ref(new Date()); return { picked, picked1 }

    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "List View",
                list: [
                    'Task', 'List View'
                ]
            },
            totalTasks,
            listViewSeries, listViewOptions,
            priorityValue: null,
            priorityOptions: ['Low', 'Medium', 'High'],


            statusValue: null,
            statusOptions: ['New', 'Completed', 'Inprogress', 'Pending'],


            assignToValue: null,
            assignToOptions: ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim'],

        };
    },
    methods: {

        selectAllProducts(event: Event) {
            if (event.currentTarget) {
                let element = event.currentTarget as HTMLInputElement;
                const elements = this.$refs['checkOption'];
                console.log(elements, this.$refs)
                if (elements) {
                    const elementsArray = Array.isArray(elements) ? elements : [elements];
                    if (element.checked) {
                        elementsArray?.forEach((e) => {
                            e.checked = true;
                        });
                    } else {
                        elementsArray?.forEach((e) => {
                            e.checked = false;
                        });
                    }
                }
            }
        },
        checkFn(event: Event) {
            let element = event.currentTarget as HTMLInputElement;
            let allChecked = true;
            const elements = this.$refs['checkOption'];
            if (elements) {
                const elementsArray = Array.isArray(elements) ? elements : [elements];
                if (element.checked) {
                    elementsArray?.forEach((e) => {
                        if (!e.checked) {
                            allChecked = false;
                        }
                    });
                } else {
                    elementsArray?.forEach((e) => {
                        if (!e.checked) {
                            allChecked = false;
                        }
                    });
                }
                let checkAll = this.$refs['checkall'] as HTMLInputElement;
                if (allChecked) {
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }
            }
        },
        deleteProducts(item: any) {
            this.totalTasks = this.totalTasks.filter(itm => itm.id != item.id);

        }

    },

};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-8">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Total Tasks
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-sm btn-primary btn-wave waves-light" data-bs-toggle="modal"
                            data-bs-target="#create-task"><i class="ri-add-line fw-semibold align-middle me-1"></i> Create
                            Task</button>
                        <!-- Start::add task modal -->
                        <div class="modal fade" id="create-task" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h6 class="modal-title">Add Task</h6>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-4">
                                        <div class="row gy-2">
                                            <div class="col-xl-6">
                                                <label for="task-name" class="form-label">Task Name</label>
                                                <input type="text" class="form-control" id="task-name"
                                                    placeholder="Task Name">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="task-id" class="form-label">Task ID</label>
                                                <input type="text" class="form-control" id="task-id" placeholder="Task ID">
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Assigned Date</label>
                                                <div class="form-group">
                                                    <div class="input-group">

                                                        <Datepicker1 placeholder="Date Time" class="datepicker-here"
                                                            autoApply v-model="picked" time-picker-inline></Datepicker1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Due Date</label>
                                                <div class="form-group">
                                                    <div class="input-group">

                                                        <Datepicker1 placeholder="Date Time" class="datepicker-here"
                                                            autoApply v-model="picked1" time-picker-inline></Datepicker1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Status</label>
                                                <VueMultiselect :show-labels="false" v-model="statusValue"
                                                    :options="statusOptions" placeholder="Status">
                                                </VueMultiselect>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Priority</label>
                                                <VueMultiselect :show-labels="false" v-model="priorityValue"
                                                    :options="priorityOptions" placeholder="Priority">
                                                </VueMultiselect>
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Assign To</label>
                                                <VueMultiselect :show-labels="false" v-model="assignToValue"
                                                    :options="assignToOptions" placeholder="Assign">
                                                </VueMultiselect>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Add Task</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End::add task modal -->
                        <div class="dropdown ms-2">
                            <button class="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="ti ti-dots-vertical"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New Tasks</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Pending Tasks</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Completed Tasks</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Inprogress Tasks</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        <input ref="checkall" @click="selectAllProducts" class="form-check-input check-all"
                                            type="checkbox" id="all-tasks" value="" aria-label="...">
                                    </th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Task ID</th>
                                    <th scope="col">Assigned Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Assigned To</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, key) in totalTasks" :key="key" class="task-list">
                                    <td class="task-checkbox"><input @click="checkFn" ref="checkOption"
                                            class="form-check-input" type="checkbox" value="" aria-label="..."></td>
                                    <td>
                                        <span class="fw-semibold">{{ item.task }}</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">{{ item.taskId }}</span>
                                    </td>
                                    <td>
                                        {{ item.assignedDate }}
                                    </td>
                                    <td>
                                        <span class="fw-semibold " :class="item.statusClass">{{ item.status }}</span>
                                    </td>
                                    <td>
                                        {{ item.dueDate }}
                                    </td>
                                    <td>
                                        <span class="badge" :class="item.priorityClass">{{ item.priority }}</span>
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span v-for="(img, index) in item.assignedTo.slice(0, 3)" :key="'img' + index"
                                                class="avatar avatar-sm avatar-rounded">
                                                <img :src="img.img" alt="img" />
                                            </span>
                                            <a v-if="item.assignedTo?.length - 3 >= 1"
                                                class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                href="javascript:void(0);">
                                                +{{ item.assignedTo?.length - 3 }}
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm">
                                            <v-tooltip activator="parent" location="top">Edit</v-tooltip><i
                                                class="ri-edit-line"></i></button>
                                        <button @click="deleteProducts(item)"
                                            class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <nav aria-label="Page navigation">
                        <ul class="pagination mb-0 float-end">
                            <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="javascript:void(0);">2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                        <div class="svg-icon-background bg-primary-transparent me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                                class="svg-primary">
                                <path
                                    d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">New Tasks
                                <span class="badge bg-primary fw-semibold float-end">
                                    12,345
                                </span>
                            </h6>
                            <div class="pb-0 mt-0">
                                <div>
                                    <h4 class="fs-18 fw-semibold mb-2"><span class="count-up" data-count="42">42</span><span
                                            class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                    <p class="text-muted fs-11 mb-0 lh-1">
                                        <span class="text-success me-1 fw-semibold">
                                            <i class="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                        </span>
                                        <span>this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                        <div class="svg-icon-background bg-success-transparent me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-success">
                                <path
                                    d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Completed Tasks
                                <span class="badge bg-success fw-semibold float-end">
                                    4,176
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2"><span class="count-up" data-count="319">320</span><span
                                        class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-danger me-1 fw-semibold">
                                        <i class="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
                        <div class="svg-icon-background bg-warning-transparent me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                                class="svg-warning">
                                <path
                                    d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Pending Tasks
                                <span class="badge bg-warning fw-semibold float-end">
                                    7,064
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2"><span class="count-up" data-count="81">82</span><span
                                        class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-success me-1 fw-semibold">
                                        <i class="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
                        <div class="svg-icon-background bg-secondary-transparent me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                                class="svg-secondary">
                                <path
                                    d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Inprogress Tasks
                                <span class="badge bg-secondary fw-semibold float-end">
                                    1,105
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2"><span class="count-up" data-count="32">33</span><span
                                        class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-success me-1 fw-semibFold">
                                        <i class="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 pb-2">
                        <p class="fs-15 fw-semibold">Tasks Statistics <span class="text-muted fw-normal">(Last 6 months)
                                :</span></p>
                        <apexchart height="210" type="bar" :options="listViewOptions" :series="listViewSeries">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

