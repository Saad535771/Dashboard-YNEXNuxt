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
                current: "Task Details",
                list: [
                    'Task', 'Task Details'
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
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">Task Summary</div>
                    <div class="btn-list">
                        <button class="btn btn-success btn-sm btn-wave me-0"><i
                                class="ri-edit-line me-1 align-middle"></i>Edit Task</button>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="fw-semibold mb-4 task-title">
                        Update ynex new project design.
                    </h5>
                    <div class="fs-15 fw-semibold mb-2">Task Description :</div>
                    <p class="text-muted task-description">The current website design needs a refresh to improve user
                        experience and enhance visual appeal. The goal is to create a modern and responsive design that
                        aligns with the latest web design trends. The updated design should ensure seamless navigation, easy
                        readability, and a cohesive visual identity.</p>
                    <div class="fs-15 fw-semibold mb-2">Key tasks :</div>
                    <div>
                        <ul class="task-details-key-tasks mb-0">
                            <li>Conducting a comprehensive analysis of the existing website design.</li>
                            <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                            <li>Iteratively refining the design based on feedback.</li>
                            <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                            <li>Testing the website across different devices and browsers.</li>
                            <li>Conducting a final review to ensure all design elements are consistent and visually
                                appealing.</li>
                        </ul>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div>
                            <span class="d-block text-muted fs-12">Assigned By</span>
                            <div class="d-flex align-items-center">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-xs avatar-rounded">
                                        <img src="/images/faces/15.jpg" alt="">
                                    </span>
                                </div>
                                <span class="d-block fs-14 fw-semibold">H.J.Taylor</span>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Assigned Date</span>
                            <span class="d-block fs-14 fw-semibold">24,June 2023</span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Due Date</span>
                            <span class="d-block fs-14 fw-semibold">05,July 2023</span>
                        </div>
                        <div class="task-details-progress">
                            <span class="d-block text-muted fs-12 mb-1">Progress</span>
                            <div class="d-flex align-items-center">
                                <div class="progress progress-xs progress-animate flex-fill me-2" role="progressbar"
                                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-primary" style="width: 70%"></div>
                                </div>
                                <div class="text-muted fs-11">70%</div>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Efforts</span>
                            <span class="d-block fs-14 fw-semibold">45H : 35M : 45S</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Task Discussions</div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled profile-timeline">
                        <li>
                            <div>
                                <span
                                    class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                    E
                                </span>
                                <p class="mb-2">
                                    <b>You</b> Commented on <b>Work Process</b> in this task <a class="text-secondary"
                                        href="javascript:void(0);"><u>#New Task</u></a>.<span
                                        class="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                </p>
                                <p class="text-muted mb-0">
                                    Task is important and need to be completed on time to meet company work flow.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                    <img src="/images/faces/11.jpg" alt="">
                                </span>
                                <p class="text-muted mb-2">
                                    <span class="text-default"><b>Json Smith</b> reacted to the task &#128077;</span>.<span
                                        class="float-end fs-11 text-muted">18,Dec 2023 - 12:16</span>
                                </p>
                                <p class="text-muted mb-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem
                                    rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi
                                    dignissimos cumque, et a sint tenetur consequatur omnis!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                    <img src="/images/faces/4.jpg" alt="">
                                </span>
                                <p class="text-muted mb-2">
                                    <span class="text-default"><b>Alicia Keys</b> shared a document with
                                        <b>you</b></span>.<span class="float-end fs-11 text-muted">21,Dec 2023 -
                                        15:32</span>
                                </p>
                                <p class="profile-activity-media mb-0">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/file-manager/3.png" alt="">
                                    </a>
                                    <span class="fs-11 text-muted">432.87KB</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span
                                    class="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                    P
                                </span>
                                <p class="text-muted mb-2">
                                    <span class="text-default"><b>You</b> shared a post with 4 people
                                        <b>Simon,Sasha,Anagha,Hishen</b></span>.<span
                                        class="float-end fs-11 text-muted">28,Dec 2023 - 18:46</span>
                                </p>
                                <p class="profile-activity-media mb-2">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-18.jpg" alt="">
                                    </a>
                                </p>
                                <div>
                                    <div class="avatar-list-stacked">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                    <img src="/images/media/media-39.jpg" alt="">
                                </span>
                                <p class="mb-1">
                                    <b>Json</b> Commented on Task post <a class="text-secondary"
                                        href="javascript:void(0);"><u>#UI Technologies</u></a>.<span
                                        class="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                </p>
                                <p class="text-muted">Technology id developing rapidly keep up your work &#128076;</p>
                                <p class="profile-activity-media mb-0">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-26.jpg" alt="">
                                    </a>
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-29.jpg" alt="">
                                    </a>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="card-footer">
                    <div class="d-sm-flex align-items-center lh-1">
                        <div class="me-sm-3 mb-2 mb-sm-0">
                            <span class="avatar avatar-md avatar-rounded">
                                <img src="/images/faces/9.jpg" alt="">
                            </span>
                        </div>
                        <div class="flex-fill me-sm-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Post Anything"
                                    aria-label="Recipient's username with two button addons">
                                <button class="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i
                                        class="bi bi-emoji-smile"></i></button>
                                <button class="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i
                                        class="bi bi-paperclip"></i></button>
                                <button class="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i
                                        class="bi bi-camera"></i></button>
                                <button class="btn btn-primary btn-wave waves-effect waves-light"
                                    type="button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Additional Details
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <tbody>
                                <tr>
                                    <td><span class="fw-semibold">Task ID :</span></td>
                                    <td>SPK - 123</td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Task Tags :</span></td>
                                    <td>
                                        <span class="badge bg-primary-transparent me-1">UI/Ux</span>
                                        <span class="badge bg-primary-transparent  me-1">Designing</span>
                                        <span class="badge bg-primary-transparent">Development</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Project Name :</span></td>
                                    <td>
                                        Ynex admin & dashboard template
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Project Status :</span></td>
                                    <td>
                                        <span class="fw-semibold text-secondary">Inprogress</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Project Priority :</span></td>
                                    <td>
                                        <span class="badge bg-danger-transparent">High</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Assigned To :</span></td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Simon</v-tooltip>
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Sasha</v-tooltip>
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Anagha</v-tooltip>
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Hishen</v-tooltip>
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">Sub Tasks</div>
                    <div>
                        <button class="btn btn-secondary-light btn-sm btn-wave"><i
                                class="ri-add-line me-1 align-middle"></i>Sub Task</button>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked1" checked=""></div>
                                <div class="fw-semibold">Conduct Website Design Analysis</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked2"></div>
                                <div class="fw-semibold">Collaborate with UI/UX Team</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked3"></div>
                                <div class="fw-semibold">Refine Design Iteratively</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked4"></div>
                                <div class="fw-semibold">Implement Design Changes</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked5" checked=""></div>
                                <div class="fw-semibold">Test Responsive and Cross-Browser Compatibility</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked6" checked=""></div>
                                <div class="fw-semibold">Review and Polish Design Elements</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked77" checked=""></div>
                                <div class="fw-semibold">Incorporate Branding Elements</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked7"></div>
                                <div class="fw-semibold">Documentation and Handover</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card custom-card overflow-hidden">
                <div class="card-header">
                    <div class="card-title">
                        Attachments
                    </div>
                </div>
                <div class="card-body p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="d-flex align-items-center flex-wrap gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded p-2 bg-light">
                                        <img src="/images/media/file-manager/1.png" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);"><span class="d-block fw-semibold">Full Project</span></a>
                                    <span class="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                </div>
                                <div class="btn-list">
                                    <button class="btn btn-sm btn-icon btn-info-light btn-wave"><i
                                            class="ri-edit-line"></i></button>
                                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave"><i
                                            class="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center flex-wrap gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded bg-light">
                                        <img src="/images/media/file-manager/3.png" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);"><span class="d-block fw-semibold">assets.zip</span></a>
                                    <span class="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                </div>
                                <div class="btn-list">
                                    <button class="btn btn-sm btn-icon btn-info-light btn-wave"><i
                                            class="ri-edit-line"></i></button>
                                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave"><i
                                            class="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center flex-wrap gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded p-2 bg-light">
                                        <img src="/images/media/file-manager/1.png" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);"><span class="d-block fw-semibold">image-1.png</span></a>
                                    <span class="d-block text-muted fs-12 fw-normal">245KB</span>
                                </div>
                                <div class="btn-list">
                                    <button class="btn btn-sm btn-icon btn-info-light btn-wave"><i
                                            class="ri-edit-line"></i></button>
                                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave"><i
                                            class="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center flex-wrap gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded bg-light">
                                        <img src="/images/media/file-manager/3.png" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);"><span
                                            class="d-block fw-semibold">documentation.zip</span></a>
                                    <span class="d-block text-muted fs-12 fw-normal">2MB</span>
                                </div>
                                <div class="btn-list">
                                    <button class="btn btn-sm btn-icon btn-info-light btn-wave"><i
                                            class="ri-edit-line"></i></button>
                                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave"><i
                                            class="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center flex-wrap gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded bg-light">
                                        <img src="/images/media/file-manager/3.png" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);"><span class="d-block fw-semibold">landing.zip</span></a>
                                    <span class="d-block text-muted fs-12 fw-normal">3.46MB</span>
                                </div>
                                <div class="btn-list">
                                    <button class="btn btn-sm btn-icon btn-info-light btn-wave"><i
                                            class="ri-edit-line"></i></button>
                                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave"><i
                                            class="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

