Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})

// // Data retrieved from: https://www.uefa.com/uefachampionsleague/history/
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'By Lodging Type'
    },
    xAxis: {
        categories: ['YTD Dec 2022', 'YTD Dec 2021']
    },
    /* yAxis: {
        min: 0,
        title: {
            text: 'Assists'
        }
    }, */
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        },
        series: {
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Serviced residences',
        data: [114900, 94600]
    }, {
        name: 'Hotels',
        data: [29700, 30200]
    }, {
        name: 'Rental housing(4)',
        data: [12500, 6600]
    }, {
        name: 'Student accommodation(5)',
        data: [2100, 1500]
    }]
});
