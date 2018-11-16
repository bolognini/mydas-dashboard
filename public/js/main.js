(function(){
  'use strict';

  let points = [];
  let pointsRam = [];
  let cnt = 0;
  let myChart;

  // (function getData() {
  //   $.ajax({
  //     cache: false,
  //     method: "GET",
  //     url: "/data",
  //   }).done(function(data) {
  //     data.forEach(x => {
  //       points.push(x.value)
  //       pointsRam.push(x.memoryuse)
  //     })
  //   });
  // }())

  const initChart = function() {
    // console.log(pointsRam);
    var ctx = document.getElementById("myChart").getContext('2d');
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# of Votes',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
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

  axios.get('/data')
    .then(response => {
      return response.data
    })
    .then(data => {
      // data.forEach(i => {
      //   points.push(i.id)
      // })
      points = data.map((item) => {
        return item.value
      })
      console.log(points);
      
      initChart()
    })
    .catch(error => console.log(error))

    // axios.get('/ram')
    // .then(response => {
    //   return response.data
    // })
    // .then(data => {
    //   // pointsRam = data.map(function(item) {
    //   //   return item.memoryuse
    //   // })
    //   // // initChart()
    // })
    // .catch(error => console.log(error))

  
  // Plotly.plot('chart', [{
  //   y: [0],
  //   type: 'line'
  // }]);

  // Plotly.plot('chart2', [{
  //   y: [0],
  //   type: 'line'
  // }]);
  
  // setInterval(function() {
  //   if(points.length == 0){
  //     return;
  //   }
    
  //   Plotly.extendTraces('chart', { y: [[points.shift()]] }, [0]);
  //   cnt++;
    
  //   if(cnt > 30) {
  //     Plotly.relayout('chart', {
  //       xaxis: {
  //         range: [cnt-30,cnt]
  //       }
  //     })
  //   }
  // }, 100);

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

    // Plotly.extendTraces('chart2', { y: [[pointsRam.shift()]] }, [0]);
    // cnt++;

    // if(cnt > 30) {
    //   Plotly.relayout('chart2', {
    //     xaxis: {
    //       range: [cnt-30,cnt]
    //     }
    //   })
    // }
    
    if(myChart.data.datasets[0].data.length > 40 ) {
      shiftData(myChart)
    }

    addData(myChart, '', points.shift())

  }, 100)

})();