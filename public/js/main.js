(function(){
  'use strict';

  let pointsCpu = [];
  let pointsRam = [];
  let pointsGpu = [];
  let pointsHd = [];
  let pointsCorrelation =[];
  let cpuChart;
  let ramChart;
  let gpuChart;
  let hdChart;
  let correlationChart;

  const initCpuChart = function() {
    var ctx = document.getElementById("cpuChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)')
    cpuChart = new Chart(ctx, {
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
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        },
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

  const initRamChart = function() {
    var ctx = document.getElementById("ramChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)')
    ramChart = new Chart(ctx, {
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
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        },
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
  
  const initGpuChart = function() {
    var ctx = document.getElementById("gpuChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)')
    gpuChart = new Chart(ctx, {
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
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        },
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

  const initHdChart = function() {
    var ctx = document.getElementById("hdChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)')
    hdChart = new Chart(ctx, {
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
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        },
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

  const initCorrelationChart = function() {
    var ctx = document.getElementById("correlationChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)')
    correlationChart = new Chart(ctx, {
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
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        },
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
  
  axios.get('/cpu')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsCpu = data.map((item) => {
        return item.currentuse
      })
      console.log(pointsCpu);
      
      initCpuChart()
    })
    .catch(error => console.log(error))

  axios.get('/ram')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsRam = data.map(function(item) {
        return item.memoryuse
      })
      initRamChart()
    })
    .catch(error => console.log(error))
  
  axios.get('/gpu')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsGpu = data.map(function(item) {
        return item.bytesread
      })
      initGpuChart()
    })
    .catch(error => console.log(error))
  
  axios.get('/hd')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsHd = data.map(function(item) {
        return item.bytesread
      })
      initHdChart()
    })
    .catch(error => console.log(error))

  axios.get('/correlation')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsCorrelation = data.map(function(item) {
        return item.bytesread
      })
      initCorrelationChart()
    })
    .catch(error => console.log(error))

  // Bitcoin Quotation

  axios.get('https://www.bitstamp.net/api/v2/ticker_hour/btcusd/')
    .then(response => {
      return response.data.last
    })
    .then(data => {
      quotationBtc(data)
    })
    .catch(error => console.log(error))

  
  function quotationBtc(data) {
    document.getElementById("btc").innerHTML = data; 
  }

  // Ripple Quotation

  axios.get('https://www.bitstamp.net/api/v2/ticker_hour/xrpusd/')
    .then(response => {
      return response.data.last
    })
    .then(data => {
      quotationXrp(data)
    })
    .catch(error => console.log(error))

  
  function quotationXrp(data) {
    document.getElementById("xrp").innerHTML = data; 
  }

  // Litecoin Quotation

  axios.get('https://www.bitstamp.net/api/v2/ticker_hour/ltcusd/')
  .then(response => {
    return response.data.last
  })
  .then(data => {
    quotationLtc(data)
  })
  .catch(error => console.log(error))


function quotationLtc(data) {
  document.getElementById("ltc").innerHTML = data; 
}

// Ethereum Quotation

axios.get('https://www.bitstamp.net/api/v2/ticker_hour/ethusd/')
.then(response => {
  return response.data.last
})
.then(data => {
  quotationEth(data)
})
.catch(error => console.log(error))


function quotationEth(data) {
document.getElementById("eth").innerHTML = data; 
}

// BitcoinCash Quotation

axios.get('https://www.bitstamp.net/api/v2/ticker_hour/bchusd/')
.then(response => {
  return response.data.last
})
.then(data => {
  quotationBch(data)
})
.catch(error => console.log(error))


function quotationBch(data) {
document.getElementById("bch").innerHTML = data; 
}

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
    if(pointsCpu.length == 0) {
      return;
    }

    if(cpuChart.data.datasets[0].data.length > 40 ) {
      shiftData(cpuChart)
    }

    addData(cpuChart, '', pointsCpu.shift())

  }, 100)

  setInterval(function() {
    if(pointsRam.length == 0) {
      return;
    }

    if(ramChart.data.datasets[0].data.length > 40 ) {
      shiftData(ramChart)
    }

    addData(ramChart, '', pointsRam.shift())

  }, 100)
  
  setInterval(function() {
    if(pointsGpu.length == 0) {
      return;
    }

    if(gpuChart.data.datasets[0].data.length > 40 ) {
      shiftData(gpuChart)
    }

    addData(gpuChart, '', pointsGpu.shift())

  }, 100)

  setInterval(function() {
    if(pointsHd.length == 0) {
      return;
    }

    if(hdChart.data.datasets[0].data.length > 40 ) {
      shiftData(hdChart)
    }

    addData(hdChart, '', pointsHd.shift())

  }, 100)

  setInterval(function() {
    if(pointsCorrelation.length == 0) {
      return;
    }

    if(correlationChart.data.datasets[0].data.length > 40 ) {
      shiftData(correlationChart)
    }

    addData(correlationChart, '', pointsCorrelation.shift())

  }, 100)


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