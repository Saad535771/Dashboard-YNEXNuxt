export let
    /* Performance by category chart */
    categorySeries = [{
        name: 'Designing',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    }, {
        name: 'Development',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    }, {
        name: 'SEO',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
    }],
    categoryOptions = {
        chart: {
            type: 'bar',
            height: 310,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        colors: ["rgba(var(--primary-rgb), 1)", "rgba(var(--primary-rgb), 0.5)", "rgba(var(--primary-rgb), 0.2)"],
        legend: {
            show: false,
            position: 'top'
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            opacity: 1
        }
    },
    /* Jobs Summary chart */
    jobsSummaryseries = [1754, 544, 682, 263],
    jobsSummaryOptions = {
        labels: ["Published", "Private", "Closed", "On Hold"],
        chart: {
            height: 250,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '70%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: -4
                        },
                        value: {
                            show: true,
                            fontSize: '18px',
                            color: undefined,
                            offsetY: 8,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#495057',
                        }

                    }
                }
            }
        },
        colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.8)", "rgba(var(--primary-rgb),0.5)", "rgba(var(--primary-rgb),0.2)"],
    };