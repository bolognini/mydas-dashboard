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
          pointRadius: 3
        }]
      },
      responsive: true,
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
          pointRadius: 3
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
          pointRadius: 3
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
          pointRadius: 3
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
          pointRadius: 3
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
  
  axios.get('/cpu')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsCpu = data.map((item) => {
        return item.currentuse
      })
      
      initCpuChart()
    })
    .catch(error => console.log(error))

  axios.get('/ram')
    .then(response => {
      return response.data
    })
    .then(data => {
      pointsRam = data.map(function(item) {
        return item.freememory
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
        return item.temperature
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
        return item.value
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

axios.get('/so')
.then(response => {
  // return response.data.last
  console.log(response.data.last[0])
})
.then(data => {
  nameSystem(data)
})
.catch(error => console.log(error))

function nameSystem(data) {
  document.getElementById("name-system").innerHTML = data; 
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

    if(cpuChart.data.datasets[0].data.length > 15 ) {
      shiftData(cpuChart)
    }

    const date = new Date;
    const minutes = date.getMinutes();
    const hour = date.getHours();

    addData(cpuChart, `${hour}:${( minutes < 10 ? '0' : '' ) + minutes}`, pointsCpu.shift())

  }, 100)

  setInterval(function() {
    if(pointsRam.length == 0) {
      return;
    }

    if(ramChart.data.datasets[0].data.length > 15 ) {
      shiftData(ramChart)
    }

    const date = new Date;
    const minutes = date.getMinutes();
    const hour = date.getHours();

    addData(ramChart, `${hour}:${( minutes < 10 ? '0' : '' ) + minutes}`, pointsRam.shift())

  }, 100)
  
  setInterval(function() {
    if(pointsGpu.length == 0) {
      return;
    }

    if(gpuChart.data.datasets[0].data.length > 15 ) {
      shiftData(gpuChart)
    }

    const date = new Date;
    const minutes = date.getMinutes();
    const hour = date.getHours();

    addData(gpuChart, `${hour}:${( minutes < 10 ? '0' : '' ) + minutes}`, pointsGpu.shift())

  }, 100)

  setInterval(function() {
    if(pointsHd.length == 0) {
      return;
    }

    if(hdChart.data.datasets[0].data.length > 15 ) {
      shiftData(hdChart)
    }

    const date = new Date;
    const minutes = date.getMinutes();
    const hour = date.getHours();

    addData(hdChart, `${hour}:${( minutes < 10 ? '0' : '' ) + minutes}`, pointsHd.shift())

  }, 100)

  setInterval(function() {
    if(pointsCorrelation.length == 0) {
      return;
    }

    if(correlationChart.data.datasets[0].data.length > 15 ) {
      shiftData(correlationChart)
    }

    const date = new Date;
    const minutes = date.getMinutes();
    const hour = date.getHours();

    addData(correlationChart, `${hour}:${( minutes < 10 ? '0' : '' ) + minutes}`, pointsCorrelation.shift())

  }, 100)

  const toggleMenu = () => {
    var element = document.getElementById('icon-menu');

    if(element.classList.contains("show-dropdown-content")) {
      element.classList.remove("show-dropdown-content");
      return
    }

    element.classList.add("show-dropdown-content");
  }

  const toggleSideBar = () => {
    var element = document.getElementById('sidebar');
    var body = document.getElementsByTagName('body')[0];

    if(element.classList.contains("show-sidebar")) {
      element.classList.remove("show-sidebar");
      body.classList.remove("sidebar-open");
      return
    }

    element.classList.add("show-sidebar");
    body.classList.add("sidebar-open");
  }

  document.getElementById('dropdown-trigger').addEventListener('click', toggleMenu)
  document.getElementById('menu-hamburguer').addEventListener('click', toggleSideBar)
})();