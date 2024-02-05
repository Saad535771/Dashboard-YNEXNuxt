export let listViewSeries = [{
    name: 'New',
    data: [76, 85, 101, 98, 87, 105]
}, {
    name: 'Pending',
    data: [35, 41, 36, 26, 45, 48]
}, {
    name: 'Completed',
    data: [44, 55, 57, 56, 61, 58]
}, {
    name: 'Inprogress',
    data: [13, 27, 31, 29, 35, 25]
}],
    listViewOptions = {
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
        colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
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
    }, totalTasks = [
        {
            id: 1, task: 'Design New Landing Page', taskId: 'SPK - 01', assignedDate: '02-06-2023', status: "New", statusClass: 'text-primary', dueDate: '10-06-2023', priority: 'Medium', priorityClass: 'bg-secondary-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/8.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/5.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/3.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg` }
            ]
        },
        {
            id: 2, task: 'New Project Buleprint', taskId: 'SPK - 04', assignedDate: '05-06-2023', status: "Inprogress", statusClass: 'text-secondary', dueDate: '15-06-2023', priority: 'High', priorityClass: 'bg-danger-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/9.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/8.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/7.jpg` },
            ]
        },
        {
            id: 3, task: 'Server Side Validation', taskId: 'SPK - 11', assignedDate: '12-06-2023', status: "Pending", statusClass: 'text-warning', dueDate: '16-06-2023', priority: 'Low', priorityClass: 'bg-success-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/5.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/9.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/13.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/9.jpg` },
            ]
        },
        {
            id: 4, task: 'New Plugin Development', taskId: 'SPK - 24', assignedDate: '08-06-2023', status: "Completed", statusClass: 'text-success', dueDate: '17-06-2023', priority: 'Low', priorityClass: 'bg-success-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/8.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/5.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/1.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg` },
            ]
        },
        {
            id: 5, task: 'Designing New Authentication Page', taskId: 'SPK - 16', assignedDate: '03-06-2023', status: "Inprogress", statusClass: 'text-secondary', dueDate: '08-06-2023', priority: 'Medium', priorityClass: 'bg-secondary-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/15.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/8.jpg` },
            ]
        },
        {
            id: 6, task: 'Documentation For New Template', taskId: 'SPK - 07', assignedDate: '12-06-2023', status: "New", statusClass: 'text-primary', dueDate: '25-06-2023', priority: 'High', priorityClass: 'bg-danger-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` }
            ]
        },
        {
            id: 7, task: 'Updating Old UI', taskId: 'SPK - 13', assignedDate: '06-06-2023', status: "Completed", statusClass: 'text-success', dueDate: '12-06-2023', priority: 'Low', priorityClass: 'bg-success-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/11.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/1.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/10.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
            ]
        },
        {
            id: 8, task: 'Developing New Events In Plugins', taskId: 'SPK - 20', assignedDate: '14-06-2023', status: "Pending", statusClass: 'text-warning', dueDate: '19-06-2023', priority: 'High', priorityClass: 'bg-danger-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/3.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/9.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
            ]
        },
        {
            id: 9, task: 'Fixing Minor Ui Issues', taskId: 'SPK - 26', assignedDate: '11-06-2023', status: "Completed", statusClass: 'text-success', dueDate: '18-06-2023', priority: 'Medium', priorityClass: 'bg-secondary-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/5.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/14.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/3.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/2.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/1.jpg` },
            ]
        },
        {
            id: 10, task: 'Designing Of New Ecommerce Website', taskId: 'SPK - 32', assignedDate: '03-06-2023', status: "Inprogress", statusClass: 'text-secondary', dueDate: '09-06-2023', priority: 'Low', priorityClass: 'bg-success-transparent', assignedTo: [
                { img: `${import.meta.env.BASE_URL}/images/faces/12.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/6.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/5.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/3.jpg` },
                { img: `${import.meta.env.BASE_URL}/images/faces/1.jpg` },
            ]
        },
    ];