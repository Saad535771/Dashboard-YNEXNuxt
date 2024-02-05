export let
    invoiceStatusSeries = [{
        name: 'Total',
        data: [76, 85, 101, 98, 87, 105]
    }, {
        name: 'Paid',
        data: [35, 41, 36, 26, 45, 48]
    }, {
        name: 'Pending',
        data: [44, 55, 57, 56, 61, 58]
    }, {
        name: 'Overdue',
        data: [13, 27, 31, 29, 35, 25]
    }], invoiceStatusOptions = {
        chart: {
            type: 'bar',
            height: 210,
            stacked: true
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded',
            },
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#4b9bfa", "#28d193", "#ffbe14", "#f3f6f8"],
        stroke: {
            show: true,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            title: {
                style: {
                    color: "#8c9097",
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
    manageInvoices = [
        { id: 1, name: 'Json Taylor', email: 'jsontaylor2416@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/11.jpg`, invoiceId: '#SPK12032901', issedDate: '25,Nov 2022', amount: '212.45', status: 'Paid', statusClass: 'success', dueDate: '25,Dec 2022' },
        { id: 2, name: 'Suzika Stallone', email: 'suzikastallone3214@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/7.jpg`, invoiceId: '#SPK12032912', issedDate: '13,Nov 2022', amount: '512.99', status: 'Pending', statusClass: 'warning', dueDate: '	13,Dec 2022' },
        { id: 3, name: 'Roman Killon', email: 'romankillon143@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, invoiceId: '#SPK12032945', issedDate: '30,Nov 2022', amount: '2199.49', status: 'Overdue', dueDate: 'Overdue', statusClass: 'danger' },
        { id: 4, name: 'Charlie Davieson', email: 'charliedavieson@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/15.jpg`, invoiceId: '#SPK12032922', issedDate: '18,Nov 2022', amount: '1569.99', status: 'Paid', dueDate: '18,Dec 2022', statusClass: 'success' },
        { id: 5, name: 'Selena Deoyl', email: 'selenadeoyl114@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/4.jpg`, invoiceId: '#SPK12032932', issedDate: '18,Nov 2022', amount: '4,873.99', status: 'Due By 1 Day', dueDate: '18,Dec 2022', statusClass: 'primary' },
        { id: 6, name: 'Kiara Advensh', email: 'kiaraadvensh87@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/7.jpg`, invoiceId: '#SPK12032978', issedDate: '02,Nov 2022', amount: '1923.99', status: 'Paid', dueDate: '18,Dec 2022', statusClass: 'success' },
        { id: 7, name: 'Joseph Samurai', email: 'josephsamurai@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/9.jpg`, invoiceId: '#SPK12032919', issedDate: '15,Nov 2022', amount: '1,623.99', status: 'Paid', dueDate: '15,Dec 2022', statusClass: 'success' },
        { id: 8, name: 'Kevin Powell', email: 'kevinpowell@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, invoiceId: '#SPK12032931', issedDate: '21,Nov 2022', amount: '3,423.99', status: 'Pending', dueDate: '15,Dec 2022', statusClass: 'warning' },
        { id: 9, name: 'Darla Jung', email: 'darlajung555@gmail.com', photo: `${import.meta.env.BASE_URL}/images/faces/8.jpg`, invoiceId: '#SPK12032958', issedDate: '15,Oct 2022', amount: '2,982.99', status: 'Paid', dueDate: '15,Nov 2022', statusClass: 'success' },
    ];
