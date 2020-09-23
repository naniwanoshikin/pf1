(function() {
  'use strict';

  let type = 'radar';
  // 値
  let data = {
    labels: ['HTML CSS', 'Sass', 'JScript', 'jQuery', 'React', 'Vue', 'PHP'],
    datasets: [{
      label: '@ 2020.9',
      data: [45, 30, 40, 30, 30, 10, 5],
      backgroundColor: 'rgba(255, 0, 0, 0.6)',
      borderColor: 'red',
      borderWidth: 1,
      // fill: false,
      // lineTension: 0,
      // pointStyle: 'rect',
      pointRadius: 0,
    }, 
    {
      label: '@2021.9(est.)',
      data: [90, 85, 90, 80, 70, 30, 40],
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      borderColor: 'blue',
      borderWidth: 1,
      // pointStyle: 'triangle',
      pointRadius: 0,
    }
  ]
  };
  // 設定
  let options = {
    scale: {
      pointLabels: { // １つ１つのラベル
        fontSize: 16,
        fontColor: 'purple',
      },
      // yAxes: [{
      ticks: {
        beginAtZero: true, // 自動最小
        max: 100, // 最大
        // suggestedmax: 100, // 自動最大
        stepSize: 20, // 刻み
        // fontSize: 30,
        callback: function(value, index, values) {
          return value + '-';
        }
      }
      // }]
    }, 
    title: {
      display: false,
      text: '言語',
      fontSize: 18,
    },
    animation: {
      // duration: 0
    },
    legend: { // 判例
      // display: false // なくす
      position: 'bottom',
      labels: {
        fontSize: 16,
      }
    },
    // responsive: true, // グラフサイズ用（理解できん、、
    // maintainAspectRatio: false, // （理解できん、、
  };
  let ctx = document.getElementById('my_chart').getContext('2d');

  let myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  });

})();
