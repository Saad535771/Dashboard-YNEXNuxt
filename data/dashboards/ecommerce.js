
export let
    ecommerceseries = [{
        name: 'Total Orders',
        data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
    }],
    ecommerceOptions1 = {
        chart: {
            type: 'bar',
            height: 200
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.3)", "var(--primary-color)", "rgba(var(--primary-rgb), 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"],
        plotOptions: {
            bar: {
                columnWidth: '25%',
                distributed: true,
                borderRadius: 7,
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
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
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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