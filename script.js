Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})

var chart = Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Fund Management Platform '
    },

    subtitle: {
        text: 'As at 31 Dec 2022'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: ['YTD Dec 2022', ' YTD Dec 2021'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Asset-light'
        }
    },

    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            type: 'bar', 
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
    },

    /* plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
    }, */

    series: [{
        name: 'Managed and franchised',
        data: [129100, 105800],
        color: '#71AE2E',
        marker: {
            fillColor: '#71AE2E'
        }
    }, {
        name: 'Leased',
        data: [6300, 4700],
        color: '#0D85FF',
        marker: {
            fillColor: '#0D85FF'
        }
    }, {
        name: 'REIT',
        data: [18800, 17800],
        color: '#023365',
        marker: {
            fillColor: '#023365'
        }
    }, {
        name: 'Fund',
        data: [2800, 1700]
    }, {
        name: 'Owned',
        data: [2200, 3000],
        color: '#058002',
        marker: {
            fillColor: '#058002'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});

document.getElementById('small').addEventListener('click', function () {
    chart.setSize(400);
});

document.getElementById('large').addEventListener('click', function () {
    chart.setSize(600);
});

document.getElementById('auto').addEventListener('click', function () {
    chart.setSize(null);
});