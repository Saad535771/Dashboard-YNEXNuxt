export let
    // for your balance card
    balanceCardSeries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
    }],
    balanceCardOptions = {
        chart: {
            type: 'line',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false
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
        colors: ["var(--primary-color)"],

    },

    // for NFTs Statistics
    NFTsStatisticsSeries = [{
        name: "Price",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
    }, {
        name: "Volume",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
    }],
    NFTsStatisticsOptions = {
        chart: {
            height: 336,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",
        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [0, 5],
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.3)"],
        yaxis: {
            title: {
                text: 'Statistics',
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    };