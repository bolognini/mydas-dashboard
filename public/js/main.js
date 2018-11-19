(function(){
  'use strict';

  let points = [];
  let pointsRam = [];
  let myChart;
  let myChart2;

  const initChart = function() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)')
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# of Votes',
          data: [],
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          fill: true,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  // const initChart2 = function() {
  //   var ctx = document.getElementById("myChart2").getContext('2d');
  //   myChart2 = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: [],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //               beginAtZero:true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

  axios.get('/data')
    .then(response => {
      return response.data
    })
    .then(data => {
      points = data.map((item) => {
        return item.memoryuse
      })
      console.log(points);
      
      initChart()
    })
    .catch(error => console.log(error))

  // axios.get('/ram')
  //   .then(response => {
  //     return response.data
  //   })
  //   .then(data => {
  //     pointsRam = data.map(function(item) {
  //       return item.memoryuse
  //     })
  //     initChart2()
  //   })
  //   .catch(error => console.log(error))

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update(0);
  }

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update(0);
  }

  function shiftData(chart) {
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    chart.update(0);
  }

  setInterval(function() {
    if(points.length == 0) {
      return;
    }

    if(myChart.data.datasets[0].data.length > 40 ) {
      shiftData(myChart)
    }

    addData(myChart, '', points.shift())

  }, 100)

  // setInterval(function() {
  //   if(pointsRam.length == 0) {
  //     return;
  //   }

  //   if(myChart2.data.datasets[0].data.length > 40 ) {
  //     shiftData(myChart2)
  //   }

  //   addData(myChart2, '', pointsRam.shift())

  // }, 100)


  const showDropdownMenu = () => {
    var element = document.getElementById('icon-menu');
    element.classList.add("show-dropdown-content");
  }

  const removeDropdownMenu = () => {
    var element = document.getElementById('icon-menu');
    element.classList.remove("show-dropdown-content");
  }

  document.getElementById('dropdown-trigger').addEventListener('mouseover', showDropdownMenu)
  document.getElementById('dropdown-trigger').addEventListener('mouseout', removeDropdownMenu)
})();