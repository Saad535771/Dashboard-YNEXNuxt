<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Project Overview",
                list: [
                    'Apps', 'Projects', 'Project Overview'
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
                    <div class="card-title">
                        Project Details
                    </div>
                    <div>
                        <NuxtLink to="/apps/projects/create-project" class="btn btn-sm btn-secondary btn-wave"><i
                                class="ri-add-line align-middle me-1 fw-semibold"></i>Create Project</NuxtLink>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="fw-semibold mb-4 task-title">
                        Ynex new angular project.
                    </h5>
                    <div class="fs-15 fw-semibold mb-2">Project Description :</div>
                    <p class="text-muted task-description">The current website design needs a refresh to improve user
                        experience and enhance visual appeal. The goal is to create a modern and responsive design that
                        aligns with the latest web design trends. The updated design should ensure seamless navigation, easy
                        readability, and a cohesive visual identity.</p>
                    <div class="fs-15 fw-semibold mb-2">Key tasks :</div>
                    <div class="mb-3">
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
                    <div class="fs-15 fw-semibold mb-2">Skills :</div>
                    <div>
                        <span class="badge bg-light text-default me-2">UI/Ux</span>
                        <span class="badge bg-light text-default me-2">JavaScript</span>
                        <span class="badge bg-light text-default me-2">Responsive Design</span>
                        <span class="badge bg-light text-default me-2">Web Accessibility</span>
                        <span class="badge bg-light text-default me-2">Front-End Build Tools</span>
                        <span class="badge bg-light text-default me-2">RESTful APIs</span>
                        <span class="badge bg-light text-default me-2">Performance Testing</span>
                        <span class="badge bg-light text-default me-2">Angular</span>
                        <span class="badge bg-light text-default">Vue.js</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div>
                            <span class="d-block text-muted fs-12">Project Manager</span>
                            <div class="d-flex align-items-center">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-xs avatar-rounded">
                                        <img src="/images/faces/13.jpg" alt="">
                                    </span>
                                </div>
                                <span class="d-block fs-14 fw-semibold">S.K.Jacob</span>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Start Date</span>
                            <span class="d-block fs-14 fw-semibold">22,June 2023</span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">End Date</span>
                            <span class="d-block fs-14 fw-semibold">10,July 2023</span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Assigned To</span>
                            <div class="avatar-list-stacked">
                                <span class="avatar avatar-sm avatar-rounded" >
                                    <v-tooltip activator="parent" location="top" content-class="tooltip-primary">Simon</v-tooltip>
                                    <img src="/images/faces/2.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-sm avatar-rounded" >
                                    <v-tooltip activator="parent" location="top" content-class="tooltip-primary">Sasha</v-tooltip>
                                    <img src="/images/faces/8.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-sm avatar-rounded" >
                                    <v-tooltip activator="parent" location="top" content-class="tooltip-primary">Anagha</v-tooltip>
                                    <img src="/images/faces/5.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-sm avatar-rounded" >
                                    <v-tooltip activator="parent" location="top" content-class="tooltip-primary">Hishen</v-tooltip>
                                    <img src="/images/faces/10.jpg" alt="img">
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Status</span>
                            <span class="d-block"><span class="badge bg-primary-transparent">In Progress</span></span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Priority</span>
                            <span class="d-block fs-14 fw-semibold"><span
                                    class="badge bg-success-transparent">Low</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Project Discussions</div>
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
                                    <b>You</b> Commented on <b>Work Process</b> in this project <a class="text-secondary"
                                        href="javascript:void(0);"><u>#New Project</u></a>.<span
                                        class="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                </p>
                                <p class="text-muted mb-0">
                                    Project is important and need to be completed on time to meet company work flow.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                    <img src="/images/faces/11.jpg" alt="">
                                </span>
                                <p class="text-muted mb-2">
                                    <span class="text-default"><b>Json Smith</b> reacted to the project
                                        &#128077;</span>.<span class="float-end fs-11 text-muted">18,Dec 2023 - 12:16</span>
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
                                            <img src="/images/faces/5.jpg" alt="img">
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
                                    <b>Json</b> Commented on Project <a class="text-secondary"
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
                            <img src="/images/faces/9.jpg" alt="" class="avatar avatar-md avatar-rounded">
                        </div>
                        <div class="flex-fill me-sm-2">
                            <div class="input-group">
                                <input type="text" class="form-control w-sm-50" placeholder="Post Anything"
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
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Project Team
                    </div>
                    <div>
                        <button class="btn btn-light btn-sm btn-wave"><i
                                class="ri-add-line align-middle me-1 fw-semibold"></i>Add Member</button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/2.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Simon Conway</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">UI Developer</span>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <button
                                                class="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></button>
                                            <button
                                                class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/8.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Sasha Banks</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-pink-transparent">Ui Designer</span>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <button
                                                class="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></button>
                                            <button
                                                class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/5.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Anagha May</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">UI Tester</span>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <button
                                                class="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></button>
                                            <button
                                                class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/10.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Hishen Stuart</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Angular Developer</span>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <button
                                                class="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></button>
                                            <button
                                                class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">Project Goals</div>
                    <div class="btn btn-sm btn-light btn-wave"><i class="ri-add-line align-middle me-1 fw-semibold"></i>Add
                        Goal</div>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked1" checked></div>
                                <div class="fw-semibold">Increase Efficiency</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked2"></div>
                                <div class="fw-semibold">Enhance Customer Satisfaction</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked3"></div>
                                <div class="fw-semibold">Expand Market Reach</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked4"></div>
                                <div class="fw-semibold">Improve Profitability</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked5" checked></div>
                                <div class="fw-semibold">Enhance Product/Service Quality</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked6" checked></div>
                                <div class="fw-semibold">Develop Innovative Solutions</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked7" checked></div>
                                <div class="fw-semibold">Increase Employee Engagement</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" id="successChecked77"></div>
                                <div class="fw-semibold">Enhance Brand Reputation</div>
                            </div>
                        </li>
                    </ul>
                    <div class="mt-3 text-center">
                        <button class="btn btn-success btn-wave">View All</button>
                    </div>
                </div>
            </div>
            <div class="card custom-card overflow-hidden">
                <div class="card-header">
                    <div class="card-title">
                        Project Documents
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
<!--End::row-1 --></template>

<style scoped></style>

