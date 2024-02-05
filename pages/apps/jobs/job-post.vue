<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Job Post",
                list: [
                    'Apps', 'Jobs', 'Job Post'
                ]
            },
            categorySelecteValue : null,
            categorySelecteOptions : ['Development', 'Marketing', 'IT Software'],
            workingExperienceValue : null,
            workingExperienceOptions : ['0 - 1 Years', '1 - 3 Years', '3 - 5 Years'],
            jobTypeValue : null,
            jobTypeOptions : ['Contract', 'Freelance', 'Full Time', 'Part Time', 'Internship'],
            priorityValue : null,
            priorityOptions : ['Normal', 'Urgent'],
            vacanciesValue : null,
            vacanciesOptions : ['10', '20', '30', '40'],
            salaryValue : null,
            salaryOptions : ['0 - $1,00,000 / Year', '$1,00,000 - $3,00,000 / Year', '$3,00,000 - $5,00,000 / Year'],
            genderRequirementValue : null,
            genderRequirementOptions : ['No Preferences', 'Male Only', 'Female Only'],
            employerNameValue : null,
            employerNameOptions : ['Obligation Pvt.Ltd', 'Voluptatem Pvt.Ltd', 'BloomTech.Inc', 'Spotech Technical Solutions'],
            countryValue : null,
            countryOptions : ['India', 'USA', 'Germany', 'Spain', 'Urgentina'],
            skillsSelecteValue : null,
            skillsSelecteOptions : ['React', 'JavaScript', 'CSS', 'HTML'],
            languagesSelecteValue : null,
            languagesSelecteOptions : ['English', 'French', 'Arabic', 'Hindi'],
            qualificationSelecteValue : null,
            qualificationSelecteOptions : ['Diploma', 'MBA','MCA'],
        };
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
                        Post New Job
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-4 mb-4">
                        <div class="col-xl-6">
                            <label for="job-title" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="job-title" placeholder="Job Title"
                                value="Web Developer">
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Job Category</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="categorySelecteValue" :multiple="false" :options="categorySelecteOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Working Experience</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="workingExperienceValue" :multiple="false" :options="workingExperienceOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Job Type</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="jobTypeValue" :multiple="false" :options="jobTypeOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Priority</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="priorityValue" :multiple="false" :options="priorityOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Vacancies</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="vacanciesValue" :multiple="false" :options="vacanciesOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Salary</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="salaryValue" :multiple="false" :options="salaryOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label for="skills" class="form-label">Skills :</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="skillsSelecteValue" :multiple="true" :options="skillsSelecteOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label for="job-deadline" class="form-label">Job Deadline</label>
                            <input type="text" class="form-control" id="job-deadline" placeholder="Job Deadline">
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label"></label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="genderRequirementValue" :multiple="false" :options="genderRequirementOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label for="language" class="form-label">Languages :</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="languagesSelecteValue" :multiple="true" :options="languagesSelecteOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label for="qualification" class="form-label">Qualification :</label>
                            
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="qualificationSelecteValue" :multiple="true" :options="qualificationSelecteOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-12">
                            <label for="job-description" class="form-label">Job Description :</label>
                            <textarea class="form-control" id="job-description"
                                rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!</textarea>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <a href="javascript:void(0);" class="btn btn-primary btn-wave waves-effect waves-light">
                        <i class="bi bi-plus-circle"></i> Post Job
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Assign To Employer</div>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <label class="form-label">Employer Name</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="employerNameValue" :multiple="false" :options="employerNameOptions">
                            </VueMultiselect>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Company Details</div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <label for="Company-Name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="Company-Name" placeholder="Company Name"
                                value="Obligation Pvt.Ltd">
                        </div>
                        <div class="col-xl-12">
                            <label for="Company-Website" class="form-label">Company Website</label>
                            <input type="text" class="form-control" id="Company-Website" placeholder="Company Website"
                                value="http//www.obligationpvtltd.com">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Country</label>
                            <VueMultiselect :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="countryValue" :multiple="false" :options="countryOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-12">
                            <label for="Company-Address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="Company-Address" placeholder="Company Address"
                                value="USA">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

