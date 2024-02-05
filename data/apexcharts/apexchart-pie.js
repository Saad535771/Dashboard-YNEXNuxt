import imge21 from '/images/media/media-21.jpg';

/* basic pie chart */
export let
    basicseries = [44, 55, 13, 43, 22],
    basicoptions = {
        chart: {
            height: 300,
            type: "pie",
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        legend: {
            position: "bottom",
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            },
        },
    },

    /* simple donut chart */

    simpleseries = [44, 55, 41, 17, 15],
    simpleoptions = {
        chart: {
            type: "donut",
            height: 290,
        },
        legend: {
            position: "bottom",
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        dataLabels: {
            dropShadow: {
                enabled: false,
            },
        },
    },

    /* monochrome pie chart */

    monochromeseries = [25, 15, 44, 55, 41, 17],
    monochromeoptions = {
        chart: {
            height: "280",
            type: "pie",
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
            monochrome: {
                enabled: true,
                color: "#845adf",
            },
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5,
                },
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 240
                }
            }
        }],
        title: {
            text: "Monochrome Pie",
            align: "left",
            style: {
                fontSize: "13px",
                fontWeight: "bold",
                color: "#8c9097",
            },
        },
        dataLabels: {
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex];
                return [name, val.toFixed(1) + "%"];
            },
            dropShadow: {
                enabled: false,
            },
        },
        legend: {
            show: false,
        },
    },

    /* graidnet donut chart */

    graidnetseries = [44, 55, 41, 17, 15],
    graidnetoptions = {
        chart: {
            height: 300,
            type: "donut",
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
        },
        legend: {
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            },
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        title: {
            text: "Gradient Donut with custom Start-angle",
            align: "left",
            style: {
                fontSize: "13px",
                fontWeight: "bold",
                color: "#8c9097",
            },
        },
        legend: {
            position: "bottom",
        },
    },

    /* patterned donut chart */

    patternedseries = [44, 55, 41, 17, 15],
    patternedoptions = {
        chart: {
            height: 250,
            type: "donut",
            dropShadow: {
                enabled: true,
                color: "#111",
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2,
            },
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                        },
                    },
                },
            },
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#111"],
            },
            background: {
                enabled: true,
                foreColor: "#fff",
                borderWidth: 0,
            },
        },
        fill: {
            type: "pattern",
            opacity: 1,
            pattern: {
                enabled: true,
                style: [
                    "verticalLines",
                    "squares",
                    "horizontalLines",
                    "circles",
                    "slantedLines",
                ],
            },
        },
        states: {
            hover: {
                filter: "none",
            },
        },
        theme: {
            palette: "palette2",
        },
        title: {
            text: "Favourite Movie Type",
            align: "left",
            style: {
                fontSize: "13px",
                fontWeight: "bold",
                color: "#8c9097",
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    },
    /* pie chart with image fill */

    imageseries = [44, 33, 54, 45],
    imageoptions = {
        chart: {
            height: 300,
            type: "pie",
        },
        colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],
        fill: {
            type: "image",
            opacity: 0.85,
            image: {
                src: [
                    imge21,
                    imge21,
                    imge21,
                    imge21,
                ],
                width: 25,
                imagedHeight: 25,
            },
        },
        stroke: {
            width: 4,
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#111"],
            },
            background: {
                enabled: true,
                foreColor: "#fff",
                borderWidth: 0,
            },
        },
        legend: {
            position: "bottom",
        },
    },

    /* updating donut chart */
    updatingseries = [44, 55, 13, 33],
    updatingoptions = {
        chart: {
            height: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 280
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'bottom',
            offsetY: 0,
        }
    }


