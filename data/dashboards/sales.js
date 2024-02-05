export let

    /*  sales overview chart */

    overviewSeries = [
        {
            name: "Sales",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
            name: "OPEX Ratio",
            data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        },
        {
            name: "General & Admin",
            data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        },
        {
            name: "Marketing",
            data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
        },
    ], overviewOptions = {
        chart: {
            stacked: true,
            type: "bar",
            height: 325,
        },
        grid: {
            borderColor: "#f5f4f4",
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true, // Ensure y-axis grids are shown
                },
            },
        },
        colors: [
            "var(--primary-color)",
            "rgba(var(--primary-rgb), 0.6)",
            "rgba(var(--primary-rgb), 0.3)",
            "#ebeff5",
        ],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        {
                            from: -100,
                            to: -46,
                            color: "#ebeff5",
                        },
                        {
                            from: -45,
                            to: 0,
                            color: "#ebeff5",
                        },
                    ],
                },
                columnWidth: "20%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
        },
        yaxis: {
            title: {
                text: "Growth",
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
            axisBorder: {
                show: true,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            type: "month",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "sep",
                "oct",
                "nov",
                "dec",
            ],
            axisBorder: {
                show: false,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
            },
        },
    },
    /* sale value chart */
    saleValueseries = [60],
    saleValueOptions = {
        chart: {
            height: 250,
            type: "radialBar",
        },

        colors: ["var(--primary-color)"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#fff",
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 2,
                        opacity: 0.15,
                    },
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "var(--primary-color)",
                        fontSize: "16px",
                        show: false,
                    },
                    value: {
                        color: "var(--primary-color)",
                        fontSize: "30px",
                        show: true,
                    },
                },
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Cart"],
    };