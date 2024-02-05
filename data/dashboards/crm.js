export
    /* Target Incomplete Chart */
    let targetSeries = [48],
    targetOptions = {
        chart: {
            height: 127,
            width: 100,
            type: "radialBar",
        },
        colors: ["rgba(255,255,255,0.9)"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "55%",
                    background: 'transparent',
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                track: {
                    show: true,
                    startAngle: 48,
                    endAngle: 360,
                    background: "rgba(0,0,0,.2)",
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        color: "#ffffff",
                        fontSize: ".875rem",
                        show: true,
                        fontWeight: 600
                    }
                }
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Status"]
    },

    /* Total Customers chart */
    customersseries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    customersOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98]
            }
        },
        yaxis: {
            min: 0,
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        xaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(132, 90, 223)"],
    },


    /* Total revenue chart */
    revenueSeries = [{
        name: 'Value',
        data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
    }],
    revenueOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(35, 183, 229)"],

    },
    /* Conversion ratio Chart */
    conversionSeries = [{
        name: 'Value',
        data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
    }],
    conversionOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],

    },

    /* Total Deals Chart */
    dealsSeries = [{
        name: 'Value',
        data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
    }],
    dealsOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(245, 184, 73)"],

    },

    /* Revenue Analytics Chart */
    analyticsSeries = [
        {
            type: 'line',
            name: 'Profit',
            data: [
                {
                    x: 'Jan',
                    y: 100
                },
                {
                    x: 'Feb',
                    y: 210
                },
                {
                    x: 'Mar',
                    y: 180
                },
                {
                    x: 'Apr',
                    y: 454
                },
                {
                    x: 'May',
                    y: 230
                },
                {
                    x: 'Jun',
                    y: 320
                },
                {
                    x: 'Jul',
                    y: 656
                },
                {
                    x: 'Aug',
                    y: 830
                },
                {
                    x: 'Sep',
                    y: 350
                },
                {
                    x: 'Oct',
                    y: 350
                },
                {
                    x: 'Nov',
                    y: 210
                },
                {
                    x: 'Dec',
                    y: 410
                }
            ]
        },
        {
            type: 'line',
            name: 'Revenue',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 180
                },
                {
                    x: 'Feb',
                    y: 620
                },
                {
                    x: 'Mar',
                    y: 476
                },
                {
                    x: 'Apr',
                    y: 220
                },
                {
                    x: 'May',
                    y: 520
                },
                {
                    x: 'Jun',
                    y: 780
                },
                {
                    x: 'Jul',
                    y: 435
                },
                {
                    x: 'Aug',
                    y: 515
                },
                {
                    x: 'Sep',
                    y: 738
                },
                {
                    x: 'Oct',
                    y: 454
                },
                {
                    x: 'Nov',
                    y: 525
                },
                {
                    x: 'Dec',
                    y: 230
                }
            ]
        },
        {
            type: 'area',
            name: 'Sales',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 200
                },
                {
                    x: 'Feb',
                    y: 530
                },
                {
                    x: 'Mar',
                    y: 110
                },
                {
                    x: 'Apr',
                    y: 130
                },
                {
                    x: 'May',
                    y: 480
                },
                {
                    x: 'Jun',
                    y: 520
                },
                {
                    x: 'Jul',
                    y: 780
                },
                {
                    x: 'Aug',
                    y: 435
                },
                {
                    x: 'Sep',
                    y: 475
                },
                {
                    x: 'Oct',
                    y: 738
                },
                {
                    x: 'Nov',
                    y: 454
                },
                {
                    x: 'Dec',
                    y: 480
                }
            ]
        }
    ],
    analyticsOptions = {
        chart: {
            animations: {
                speed: 500
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 8,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        colors: ["var(--primary-color)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        stroke: {
            curve: 'smooth',
            width: [2, 2, 0],
            dashArray: [0, 5, 0],
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value;
                }
            },
        },
        tooltip: {
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(0) : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(0) : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) : e
                }
            }]
        },
        legend: {
            show: true,
            customLegendItems: ['Profit', 'Revenue', 'Sales'],
            inverseOrder: true
        },
        toolbar: {
            show: false,
        },
        title: {
            text: 'Revenue Analytics with sales & profit (USD)',
            offsetX: 0,
            offsetY: 15,
            margin: 15,
            style: {
                fontSize: '.8125rem',
                fontWeight: 'semibold',
                color: '#8c9097'
            },
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        }
    },

    /* Profits Earned Chart */
    earnedSeries = [{
        name: 'Profit Earned',
        data: [44, 42, 57, 86, 58, 55, 70],
    }, {
        name: 'Total Sales',
        data: [34, 22, 37, 56, 21, 35, 60],
    }],
    earnedOptions = {

        chart: {
            type: 'bar',
            height: 180,
            toolbar: {
                show: false,
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        colors: ["var(--primary-color)", "#e4e7ed"],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: '#ebeff5'
                    }, {
                        from: -45,
                        to: 0,
                        color: '#ebeff5'
                    }]
                },
                columnWidth: '60%',
                borderRadius: 5,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: undefined,
        },
        legend: {
            show: false,
            position: 'top',
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '13px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            }
        },
        xaxis: {
            type: 'week',
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    },
    SourceChartData = {
        datasets: [{
            label: 'My First Dataset',
            data: [32, 27, 25, 16],
            backgroundColor: [
                'rgb(132, 90, 223)',
                'rgb(35, 183, 229)',
                'rgb(38, 191, 148)',
                'rgb(245, 184, 73)',
            ],
        }
        ],
    },
    SourceOptions = {
        borderWidth: 0,
        cutout: '85%', // Set the cutout percentage here
        plugins: {
            legend: {
                display: false, // You can customize other options here
            },
        },
        plugins: [{
            afterUpdate: function (chart) {
                const arcs = chart.getDatasetMeta(0).data;
                arcs.forEach(function (arc) {
                    arc.round = {
                        x: (chart.chartArea.left + chart.chartArea.right) / 2,
                        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                        radius: (arc.outerRadius + arc.innerRadius) / 2,
                        thickness: (arc.outerRadius - arc.innerRadius) / 2,
                        backgroundColor: arc.options.backgroundColor
                    }
                });
            },
            afterDraw: (chart) => {
                const {
                    ctx,
                    canvas
                } = chart;

                chart.getDatasetMeta(0).data.forEach(arc => {
                    const startAngle = Math.PI / 2 - arc.startAngle;
                    const endAngle = Math.PI / 2 - arc.endAngle;

                    ctx.save();
                    ctx.translate(arc.round.x, arc.round.y);
                    ctx.fillStyle = arc.options.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                });
            }
        }]

    }
