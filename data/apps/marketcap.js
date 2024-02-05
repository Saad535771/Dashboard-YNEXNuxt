export
    /* Bitcoin Chart */
    let
    spark1series= [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
                65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark1Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },
        series: [
            {
                name: "Value",
                data: [
                    0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                    61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                    35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
                    65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
                    46,
                ],
            },
        ],
        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    }, /* Etherium Chart */
    spark2series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark2Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    }, /*Golem Chart */
    spark3series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark3Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Dash Chart */
    spark4series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark4Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Litecoin Chart */
    spark5series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark5Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    },
    /* Ripple Chart */
    spark6series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark6Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Eos Chart */
    spark7series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark7Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Bytecoin Chart */
    spark8series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark8Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    },
    /* IOTA Chart */
    spark9series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark9Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    },
    /* Monero Chart */
    spark10series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark10Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },

    /* Start:: Main cards charts */
    maincardspark1series = [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    maincardspark1Options = {
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
        stroke: {
            show: true,
            curve: 'smooth',
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#26bf94'],

    },
    maincardspark2series = [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    maincardspark2Options = {
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
        stroke: {
            show: true,
            curve: 'smooth',
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#26bf94'],

    },
    maincardspark3series = [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    maincardspark3Options = {
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
        stroke: {
            show: true,
            curve: 'smooth',
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#e6533c'],

    };
/* End:: Main cards charts */
