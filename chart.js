(function() {
  'use strict';
  var type = 'radar';
  // 値
  var data = {
    labels: ['HTML CSS', 'JavaScript', 'jQuery', 'Sass', 'PHP'],
    datasets: [{
      label: '@me',
      data: [30, 30, 25, 20, 5],
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      borderColor: 'red',
      borderWidth: 1,
      // fill: false,
      // lineTension: 0,
      pointStyle: 'rect',
    }, 
    {
      label: '@yoji',
      data: [100, 100, 90, 100, 80],
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      borderColor: 'blue',
      borderWidth: 1,
      pointStyle: 'triangle',
    }
  ]
  };
  // 設定
  var options = {
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
      // position: 'left'
    },
    animation: {
      // duration: 0
    },
    legend: { // 判例
      position: 'bottom', // 右側      
      // display: false // なくす
    },
    // responsive: true, // グラフサイズ用（理解できん、、
    // maintainAspectRatio: false, // （理解できん、、
  };
  var ctx = document.getElementById('my_chart').getContext('2d');


  var myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  });




})();
