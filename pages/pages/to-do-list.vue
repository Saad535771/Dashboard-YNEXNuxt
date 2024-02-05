<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
        const picked = ref(null);
        const picked1 = ref(null);
        return { picked, picked1 }
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "To Do List",
                list: [
                    'Pages', 'To Do List'
                ]
            },
            priorityOptions: ['Low', 'Medium', 'High', 'Critical'],
            prioritySelect: null,
            assignedToOptions: ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim'],
            assignedToSelect: null,
        };
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <div class="p-3 d-grid border-bottom border-block-end-dashed">
                        <button class="btn btn-primary d-flex align-items-center justify-content-center"
                            data-bs-toggle="modal" data-bs-target="#addtask">
                            <i class="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                        </button>
                        <div class="modal fade" id="addtask" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h6 class="modal-title" id="mail-ComposeLabel">Create Task</h6>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-4">
                                        <div class="row gy-2">
                                            <div class="col-xl-12">
                                                <label for="task-name" class="form-label">Task Name</label>
                                                <input type="text" class="form-control" id="task-name"
                                                    placeholder="Task Name">
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Assigned To</label>

                                                <VueMultiselect :show-labels="false" :options="assignedToOptions"
                                                    :multiple="false" v-model="assignedToSelect">
                                                </VueMultiselect>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Assigned Date</label>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <Datepicker1 placeholder="Choose date" v-model="picked" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Target Date</label>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <Datepicker1 placeholder="Choose date" v-model="picked1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Priority</label>
                                                <VueMultiselect :show-labels="false" :options="priorityOptions"
                                                    :multiple="false" v-model="prioritySelect">
                                                </VueMultiselect>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0" placeholder="Search Task Here"
                                aria-describedby="button-addon2">
                            <button class="btn btn-light" type="button" id="button-addon2"><i
                                    class="ri-search-line text-muted"></i></button>
                        </div>
                    </div>
                    <div class="p-3 task-navigation border-bottom border-block-end-dashed">
                        <ul class="list-unstyled task-main-nav mb-0">
                            <li class="px-0 pt-0">
                                <span class="fs-11 text-muted op-7 fw-semibold">TASKS</span>
                            </li>
                            <li class="active">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-task-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            All Tasks
                                        </span>
                                        <span class="badge bg-success-transparent rounded-pill">167</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-star-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Starred
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-delete-bin-5-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Trash
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li class="px-0 pt-2">
                                <span class="fs-11 text-muted op-7 fw-semibold">CATEGORIES</span>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-primary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Personal
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Work
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-warning"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Health & Fitness
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Daily Goals
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Financial Management
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-3 text-center">
                        <img src="/images/media/media-66.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="d-flex p-3 align-items-center justify-content-between">
                                <div>
                                    <h6 class="fw-semibold mb-0">Tasks</h6>
                                </div>
                                <div>
                                    <ul class="nav nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                        <li class="nav-item m-1">
                                            <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#all-tasks" aria-selected="true">All Tasks</a>
                                        </li>
                                        <li class="nav-item m-1">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#pending" aria-selected="true">Pending</a>
                                        </li>
                                        <li class="nav-item m-1">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#in-progress" aria-selected="true">In Progress</a>
                                        </li>
                                        <li class="nav-item m-1">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#completed" aria-selected="true">Completed</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-icon btn-sm btn-light btn-wave waves-light waves-effect"
                                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="ti ti-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Select All</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Share All</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content task-tabs-container">
                    <div class="tab-pane show active p-0" id="all-tasks" role="tabpanel">
                        <div class="row" id="tasks-container">
                            <div class="col-xl-4 task-card">
                                <div class="card custom-card task-pending-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>New
                                                    Project Blueprint</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">13,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">20,Nov
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/2.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/2.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/10.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-warning-transparent d-block">High</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card custom-card task-inprogress-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Designing
                                                    New Authentication Pages</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">26,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">12,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/6.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/15.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-success-transparent d-block">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center">
                                                    <a href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>Developing
                                                    New Events in Plugin
                                                </p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">5,Dec
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">10,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/5.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/11.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-primary-transparent d-block">Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 task-card">
                                <div class="card custom-card task-inprogress-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Design
                                                    New Landing Pages </p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">21,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">28,Nov
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/1.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/5.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/12.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-primary-transparent d-block">Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>New
                                                    Plugin Development</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">28,Oct
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">28,Nov
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/3.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/9.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-success-transparent d-block">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>Documentation
                                                    For New Template</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">25,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">10,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/10.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/11.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-danger-transparent d-block">Critical</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 task-card">
                                <div class="card custom-card task-pending-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center">
                                                    <a href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Updating
                                                    Old Ui
                                                </p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">30,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">05,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/14.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/13.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/21.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/16.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-warning-transparent d-block">High</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>Designing
                                                    Of New Ecommerce Pages</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">1,Dec
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">15,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/1.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/3.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/6.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-success-transparent d-block">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card custom-card task-inprogress-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Improving
                                                    Ui Of Updated Templates</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">4,Dec
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">20,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/9.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/13.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-primary-transparent d-block">Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-0" id="pending" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card custom-card task-pending-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>New
                                                    Project Blueprint</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">13,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">20,Nov
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/2.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/2.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/10.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-warning-transparent d-block">High</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card custom-card task-pending-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center">
                                                    <a href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Updating
                                                    Old Ui
                                                </p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">30,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">05,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/14.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/13.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/21.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/16.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-warning-transparent d-block">High</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-0" id="in-progress" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card custom-card task-inprogress-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Design
                                                    New Landing Pages </p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">21,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">28,Nov
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/1.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/5.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/12.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-primary-transparent d-block">Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card custom-card task-inprogress-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Designing
                                                    New Authentication Pages</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">26,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">12,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/6.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/15.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-success-transparent d-block">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card custom-card task-inprogress-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 me-1 text-warning"></i></a>Improving
                                                    Ui Of Updated Templates</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">4,Dec
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">20,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/9.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/13.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-primary-transparent d-block">Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-0" id="completed" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>New
                                                    Plugin Development</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">28,Oct
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">28,Nov
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/3.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/9.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-success-transparent d-block">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>Documentation
                                                    For New Template</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">25,Nov
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">10,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/10.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/11.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-danger-transparent d-block">Critical</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center">
                                                    <a href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>Developing
                                                    New Events in Plugin
                                                </p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">5,Dec
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">10,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/5.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/11.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-primary-transparent d-block">Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card custom-card task-completed-card">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between flex-wrap gap-2">
                                            <div>
                                                <p class="fw-semibold mb-3 d-flex align-items-center"><a
                                                        href="javascript:void(0);"><i
                                                            class="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></a>Designing
                                                    Of New Ecommerce Pages</p>
                                                <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">1,Dec
                                                        2022</span></p>
                                                <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">15,Dec
                                                        2022</span></p>
                                                <p class="mb-0">Assigned To :
                                                    <span class="avatar-list-stacked ms-1">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/1.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/3.jpg" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/6.jpg" alt="img">
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <div class="btn-list">
                                                    <button class="btn btn-sm btn-icon btn-wave btn-primary-light"><i
                                                            class="ri-edit-line"></i></button>
                                                    <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i
                                                            class="ri-delete-bin-line"></i></button>
                                                </div>
                                                <span class="badge bg-success-transparent d-block">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">Next</a>
                </li>
            </ul>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

