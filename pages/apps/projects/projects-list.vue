<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import projectslist from "@/components/UI/projectslist.vue";
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        projectslist
    },
    data() {
        return {
            dataToPass: {
                current: "Projects List",
                list: [
                    'Apps', 'Projects', 'Projects List'
                ]
            },
            sortBySelecteValue: null,
            sortBySelecteOptions: ['Newest', 'Date Added', 'Type', 'A - Z'],
            projectListData: [
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/1.png`, title: 'Design & Developing New Project', CompletedTasks: '18', TotalTasks: '22', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/8.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/9.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: '' },
                    ], priority: 'low', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: '', status: '80', assignedDate: '24,May 2023', dueDate: '12,Jul 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/2.png`, title: 'Content Management System (CMS) Integration', CompletedTasks: '26', TotalTasks: '28', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: '' },
                    ], priority: 'Medium', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-info-transparent', status: '45', assignedDate: '20,May 2023', dueDate: '10,Jun 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/3.png`, title: 'Task Scheduler and Automation', CompletedTasks: '21', TotalTasks: '45', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/5.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/6.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/7.jpg`, name: '' },
                    ], priority: 'low', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore', statusClass: 'text-primary', status: '60', assignedDate: '31,May 2023', dueDate: '10,Jul 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/5.png`, title: 'Advanced Search and Filtering', CompletedTasks: '45', TotalTasks: '54', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/3.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/9.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/14.jpg`, name: '' },
                    ], priority: 'High', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-danger-transparent', status: '89', assignedDate: '02,Jun 2023', dueDate: '15,Jun 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/8.png`, title: 'Data Export and Reporting', CompletedTasks: '14', TotalTasks: '26', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/1.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: '' },
                    ], priority: 'Medium', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-info-transparent', status: '60', assignedDate: '29,May 2023', dueDate: '08,Jun 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/10.png`, title: 'Activity Log and Audit Trail', CompletedTasks: '28', TotalTasks: '64', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/7.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: '' },
                    ], priority: 'Low', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-success-transparent', status: '45', assignedDate: '04,Jun 2023', dueDate: '15,Jun 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/9.png`, title: 'Role-Based Access Control (RBAC) Implementation', CompletedTasks: '86', TotalTasks: '122', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/14.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/15.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: '' },
                    ], priority: 'High', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-danger-transparent', status: '65', assignedDate: '24,Jun 2023', dueDate: '05,Jul 2023'
                },
                {
                    logo: `${import.meta.env.BASE_URL}/images/company-logos/6.png`, title: 'Customizable Themes and Layouts', CompletedTasks: '20', TotalTasks: '26', members: [
                        { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/16.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/8.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: '' },
                        { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: '' },
                    ], priority: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-info-transparent', status: '75', assignedDate: '20,Jun 2023', dueDate: '18,Jul 2023'
                },
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="d-flex flex-wrap gap-1 project-list-main">
                            <NuxtLink to="/apps/projects/create-project" class="btn btn-primary me-2"><i
                                    class="ri-add-line me-1 fw-semibold align-middle"></i>New Project</NuxtLink>
                            <VueMultiselect class="w-150p" :show-labels="false" name="sortBy" id="sortBy"
                                placeholder="Sort By" v-model="sortBySelecteValue" :multiple="false"
                                :options="sortBySelecteOptions">
                            </VueMultiselect>
                        </div>
                        <div class="avatar-list-stacked">
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/1.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/8.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/12.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/10.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/4.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/5.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/13.jpg" alt="img">
                            </span>
                            <a class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                href="javascript:void(0);">
                                +8
                            </a>
                        </div>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search Project" aria-label="Search">
                            <button class="btn btn-light" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <projectslist :projectListData=projectListData></projectslist>
    </div>
    <!--End::row-2 -->
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
</template>

<style scoped></style>

