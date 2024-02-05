export let
    /* Total Users Chart */
    totalUsersSeries = [{
        name: 'Value',
        data: [0, 21, 54, 38, 56, 24, 65]
    }],
    totalUsersOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 120,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            show: false,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['var(--primary-color)'],

    },

    /* Bounce rate Chart */
    bouncerateSeries = [{
        name: 'Value',
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48]
    }],
    bouncerateOptions = {
        chart: {
            type: 'line',
            height: 45,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: '#fff',
                opacity: 0.05
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ["rgba(var(--primary-rgb), 0.1)"],
        tooltip: {
            enabled: false,
        }
    },
    /* Sessions By Device Chart */
    SessionsSeries = [1754, 1234, 878, 270],
    SessionsOptions = {
        labels: ["Mobile", "Tablet", "Desktop", "Others"],
        chart: {
            height: 257,
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
                    size: '80%',
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
        colors: ["var(--primary-color)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
    },
    /* Audience report Chart */
    AudienceSeries = [
        {
            name: 'Views',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
        },
        {
            name: 'Followers',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
        },
    ],
    AudienceOptions = {
        chart: {
            toolbar: {
                show: false
            },
            type: 'line',
            height: 250,
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1.1],
            curve: ['straight', 'smooth'],
        },
        legend: {
            show: true,
            position: 'top',
        },
        xaxis: {
            axisBorder: {
                color: '#e9e9e9',
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
                borderRadius: 2
            }
        },
        colors: ["var(--primary-color)", '#23b7e5'],
    },
    /* Country Sessions vs Bounce Rate Chart */
    CountrySeries = [
        {
            name: 'Session',
            data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
            type: 'line',
        },
        {
            name: 'Bounce Rate',
            data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
            type: 'bar',
        },
    ],
    CountryOptions = {
        chart: {
            height: 308,
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
            show: true,
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        legend: {
            show: true,
            position: 'top',
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: "40%",
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        colors: ["var(--primary-color)", "#ededed"],
        stroke: {
            curve: ['smooth', 'stepline'],
            width: [2, 0],
            columnWidth: '10%'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                color: '#e9e9e9',
            },
        }
    },
    /* Session Duration By New Users Chart */
    newUsersSeries = [{
        name: 'New Users',
        data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
    }, {
        name: 'Sessions',
        data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136]
    }, {
        name: 'Avg Session Duration',
        data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
    }],
    newUsersOptions = {
        chart: {
            height: 387,
            type: 'line',
            toolbar: {
                show: false,
            },
            background: 'none',
            fill: "#fff",
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["var(--primary-color)", "#23b7e5", "#f5b849"],
        background: 'transparent',
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 3
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'top',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            show: false,
            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90,
            }
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
    /* Impressions Chart */
    impressionsSeries = [48],
    impressionsOptions = {
        chart: {
            height: 120,
            width: 100,
            type: "radialBar",
        },

        colors: ["rgba(var(--secondary-rgb))"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "50%",
                    background: "#fff"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "rgba(var(--secondary-rgb))",
                        fontSize: "10px",
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        color: "rgba(var(--secondary-rgb))",
                        fontSize: "12px",
                        show: true,
                        fontWeight: 800
                    }
                }
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Followers"]
    },
    /* Clicks Chart */
    clicksSeries = [65],
    clicksOptions = {
        chart: {
            height: 120,
            width: 100,
            type: "radialBar",
        },

        colors: ["rgba(var(--warning-rgb))"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "50%",
                    background: "#fff"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "rgba(var(--secondary-rgb))",
                        fontSize: "10px",
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        color: "rgba(var(--secondary-rgb))",
                        fontSize: "12px",
                        show: true,
                        fontWeight: 800
                    }
                }
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Views"]
    };