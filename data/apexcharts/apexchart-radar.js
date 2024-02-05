
/* basic radar chart */
export let
    basicseries = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    basicoptions = {
        chart: {
            height: 320,
            type: 'radar',
        },
        title: {
            text: 'Basic Radar Chart',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ["#845adf"],
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
    },

    /* radar chart with multiple series */
    multipleseries = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    multipleoptions = {
        chart: {
            height: 320,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        title: {
            text: 'Radar Chart - Multi Series',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
    },

    /* radar chart polygn fill */

    polygnseries = [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    polygnoptions = {
        chart: {
            height: 320,
            type: 'radar',
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 80,
                polygons: {
                    strokeColors: '#e9e9e9',
                }
            }
        },
        title: {
            text: 'Radar with Polygon Fill',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#23b7e5'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#23b7e5',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val, i) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        }
    };