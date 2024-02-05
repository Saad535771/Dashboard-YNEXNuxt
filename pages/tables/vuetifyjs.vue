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
            themeColor: localStorage.getItem('ynexcolortheme') === 'dark' ? 'dark' : 'light',
            dataToPass: {
                current: "Vuetify",
                list: [
                    'Tables', 'Vuetify'
                ]
            },
            columns: ['Date', 'Name', 'Email', 'ID', 'Price', 'Quantity', 'Total'],
            rows: [
                { date: "24-10-2022 12:47", name: "john", email: "john123@gmail.com", id: "#12012", price: "$1799", quantity: "1", total: "$1799" },
                { date: "12-09-2022 04:24", name: "mark", email: "markzenner23@gmail.com", id: "#12013", price: "$2479", quantity: "2", total: "$4958" },
                { date: "18-11-2022 18:43", name: "eoin", email: "eoin1992@gmail.com", id: "#12014", price: "$769", quantity: "1", total: "$769" },
                { date: "10-09-2022 10:35", name: "sarahcdd", email: "sarahcdd129@gmail.com", id: "#12015", price: "$1299", quantity: "3", total: "$3997" },
                { date: "27-10-2022 09:55", name: "afshin", email: "afshin@example.com", id: "#12016", price: "$1449", quantity: "1", total: "$1449" },
                { date: "24-10-2022 12:47", name: "john", email: "john123@gmail.com", id: "#12012", price: "$1799", quantity: "1", total: "$1799" },
                { date: "12-09-2022 04:24", name: "mark", email: "markzenner23@gmail.com", id: "#12013", price: "$2479", quantity: "2", total: "$4958" },
                { date: "18-11-2022 18:43", name: "eoin", email: "eoin1992@gmail.com", id: "#12014", price: "$769", quantity: "1", total: "$769" },
                { date: "10-09-2022 10:35", name: "sarahcdd", email: "sarahcdd129@gmail.com", id: "#12015", price: "$1299", quantity: "3", total: "$3997" },
                { date: "27-10-2022 09:55", name: "afshin", email: "afshin@example.com", id: "#12016", price: "$1449", quantity: "1", total: "$1449" }
            ]
        };
    },
    methods: {
        updateTheme() {
            this.themeColor = localStorage.getItem('ynexcolortheme') === 'dark' ? 'dark' : 'light';
        }
    },
    mounted() {
        window.addEventListener('storage', this.updateTheme);

        // Check for updates every second (adjust the interval as needed)
        const intervalId = setInterval(this.updateTheme, 1000);

        // Save the intervalId for cleanup on component unmount
        window['__themeUpdateIntervalId'] = intervalId;
    },

    // Remove the event listener and clearInterval on component unmount
    onUnmounted() {
        window.removeEventListener('storage', this.updateTheme);

        if (window['__themeUpdateIntervalId']) {
            clearInterval(window['__themeUpdateIntervalId']);
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Table
                    </div>
                </div>
                <div class="card-body">
                    <v-table :theme="themeColor">
                        <thead>
                            <tr>
                                <th v-for="item of columns" :key="item" class="text-left">
                                    {{ item }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in rows" :key="item.name">
                                <td>{{ item.date }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.id }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.total }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Table With Density
                    </div>
                </div>
                <div class="card-body">
                    <v-table :theme="themeColor" density="compact">
                        <thead>
                            <tr>
                                <th v-for="item of columns" :key="item" class="text-left">
                                    {{ item }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in rows" :key="item.name">
                                <td>{{ item.date }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.id }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.total }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Fixed Header
                    </div>
                </div>
                <div class="card-body">
                    <v-table :theme="themeColor" fixed-header height="300px">
                        <thead>
                            <tr>
                                <th v-for="item of columns" :key="item" class="text-left">
                                    {{ item }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in rows" :key="item.name">
                                <td>{{ item.date }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.id }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.total }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>

<style scoped></style>

