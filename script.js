Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: '台灣本島與大陸外島每年入境人數'
  },
  subtitle: {
    text: '台灣與中國旅遊人數差'
  },
  xAxis: {
    categories: ['2015', '2016', '2017','2018','2019']
  },
  yAxis: {
    title: {
      text: '每年旅遊入境人數'
    },
    labels: {
      formatter: function () {
        return this.value + '百萬人';
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: [{
    name: '台灣',
    marker: {
      symbol: 'square'
    },
    data: [10.4, 10.6, 10.7,11,11.8]

  }, {
    name: '中國',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 133,
     
    }, 141, 153,158,162]
  }]
});

