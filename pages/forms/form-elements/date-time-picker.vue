<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import Datepicker from 'vue3-datepicker'
import { startOfQuarter } from "date-fns";

import { ref } from 'vue'
import auth from '@/middleware/auth';

export default {
    setup() {

        definePageMeta({
            middleware: [auth],
        })
        const picked = ref(new Date());
        const picked2 = ref(new Date());
        const lowerpicked = new Date(picked2.value);
        const picked3 = ref(new Date());
        const picked4 = ref(new Date());
        const date = ref();
        const date1 = ref();

        const quarter = ref(startOfQuarter(new Date()));
        // Get the day of the month
        const currentDay = picked.value.getDate();

        const time = ref({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        })
        const month = ref({
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });
        // Calculate the date of the next 5th day
        const picked1 = new Date(picked.value);
        picked1.setDate(currentDay + 5);
        lowerpicked.setDate(currentDay - 5);
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        date.value = [startDate, endDate];
        date1.value = [startDate, endDate];


        const weekPicker = ref();
        const inlinedate = ref(new Date());

        return { lowerpicked, picked, picked1, picked2, picked3, picked4, date, date1, time, month, quarter, weekPicker, inlinedate }
    },
    components: {
        PageHeader,
        Datepicker,
    },
    data() {
        return {
            dataToPass: {
                current: "Data & Time Picker",
                list: [
                    'Forms', 'Form Elements', 'Data & Time Picker'
                ]
            },
        };
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Date picker
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group flex-nowrap">
                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            <!-- <input type="text" class="form-control" id="date" > -->
                            <Datepicker class="form-control" placeholder="Choose date" v-model="picked" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Lower Limit Date
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group flex-nowrap">
                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            <Datepicker class="form-control" placeholder="Choose date" :lowerLimit="picked"
                                v-model="picked2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Upper Limit picker
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group flex-nowrap">
                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            <Datepicker class="form-control" placeholder="Choose date" :upperLimit="picked1"
                                v-model="picked3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        input Format dates
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group flex-nowrap">
                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            <Datepicker class="form-control" placeholder="Choose date" v-model="picked4"
                                inputFormat="dd-MM-yyyy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Date and Time picker
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group">
                            <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply v-model="picked"
                                time-picker-inline>
                                <template #input-icon>
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                </template>
                            </Datepicker1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Range Picker
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group">
                            <Datepicker1 placeholder="Date Time" class="datepicker-here" v-model="date" range>
                                <template #input-icon>
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                </template>
                            </Datepicker1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Time Picker
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group">
                            <Datepicker1 placeholder="Date Time" class="datepicker-here" time-picker v-model="time">
                                <template #input-icon>
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                </template>
                            </Datepicker1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Month Picker
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <div class="input-group">
                            <Datepicker1 placeholder="Date Time" class="datepicker-here" v-model="month" month-picker>
                                <template #input-icon>
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                </template>
                            </Datepicker1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Week Picker
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group mb-0">
                                <div class="input-group">
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" v-model="weekPicker"
                                        week-picker> <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template></Datepicker1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Quarter Picker
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group mb-0">
                                <Datepicker1 v-model="quarter" quarter-picker> <template #input-icon>
                                        <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    </template></Datepicker1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Multi Calendars
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group mb-0">
                                <div class="input-group">
                                    <Datepicker1 v-model="date1" range multi-calendars> <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template>
                                    </Datepicker1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Inline Calendar
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group overflow-auto">
                        <Datepicker1 class="datepicker-here" inline autoApply v-model="inlinedate"> <template #input-icon>
                                <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            </template></Datepicker1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>
<style scoped></style>
