<script lang="ts">
export default {
  props: {
    projectListData: Object,
  },
  created() {
    // Access and check propData in the created hook
  }
}
</script>

<template>
  <div class="col-xxl-3" v-for="(value, key) in projectListData" :key="key">
    <div class="card custom-card">
      <div class="card-header align-items-center">
        <div class="me-2">
          <span class="avatar avatar-rounded p-1 bg-danger-transparent">
            <img :src="value.logo" alt="Task Logo" />
          </span>
        </div>
        <div class="flex-fill">
          <a href="javascript:void(0);" class="fw-semibold fs-14 d-block text-truncate project-list-title">{{
            value.title }}</a>
          <span class="text-muted d-block fs-12">Total <strong class="text-default">{{ value.CompletedTasks
          }}/{{
  value.TotalTasks }}</strong> tasks
            completed</span>
        </div>

        <div class="dropdown">
          <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light show"
            data-bs-toggle="dropdown" aria-expanded="true">
            <i class="fe fe-more-vertical"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);"><i
                  class="ri-eye-line align-middle me-1 d-inline-block"></i>View</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);"><i
                  class="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);"><i
                  class="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</a></li>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div>
            <div class="fw-semibold mb-1">Team :</div>
            <div class="avatar-list-stacked">
              <span class="avatar avatar-sm avatar-rounded" v-for="(imgs, key) in value.members.slice(0, 4)" :key="key">
                <img :src="imgs.img" alt="img">
              </span>

              <a v-if="value.members?.length > 4" class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                href="javascript:void(0);">
                +{{ value.members.length - 4 }}
              </a>
            </div>
          </div>
          <div class="text-end">
            <div class="fw-semibold mb-1">Priority :</div>
            <span class="badge bg-success-transparent">{{ value.priority }}</span>
          </div>
        </div>
        <div class="fw-semibold mb-1">Description :</div>
        <p class="text-muted mb-3">{{ value.description }}
        </p>
        <div class="fw-semibold mb-1">Status :</div>
        <div>
          <div></div>
          <div class="progress progress-xs progress-animate" role="progressbar" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-primary" :style="{ width: value.status + '%' }"></div>
          </div>
          <div class="mt-1"><span class="text-primary fw-semibold">{{ value.status }}%</span> Completed</div>
        </div>
      </div>
      <div class="card-footer d-flex align-items-center justify-content-between">
        <div>
          <span class="text-muted fs-11 d-block">Assigned Date :</span>
          <span class="fw-semibold d-block">{{ value.assignedDate }}</span>
        </div>
        <div class="text-end">
          <span class="text-muted fs-11 d-block">Due Date :</span>
          <span class="fw-semibold d-block">{{ value.dueDate }}</span>
        </div>
      </div>
    </div>
</div></template>

<style scoped></style>
