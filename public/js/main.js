(function(){
  'use strict';

  let pointsCpu = [];
  let pointsRam = [];
  let pointsGpu = [];
  let cpuChart;
  let ramChart;
  let gpuChart;
  let real;

  let deviceId = window.location.pathname.split('/')[1]

  const initCpuChart = function() {
    var ctx = document.getElementById("cpuChart").getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(255, 69, 135,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(188, 82, 126, 0)');
    gradientStroke.addColorStop(0, 'rgba(226, 99, 152, 0)')
    cpuChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# of Votes',
          data: [],
          backgroundColor: gradientStroke,
          borderColor: '#ff4587',
          borderWidth: 2,
          fill: true,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ff4587',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ff4587',
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

    gradientStroke.addColorStop(1, 'rgba(255, 69, 135,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(188, 82, 126, 0)');
    gradientStroke.addColorStop(0, 'rgba(226, 99, 152, 0)')
    ramChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# of Votes',
          data: [],
          backgroundColor: gradientStroke,
          borderColor: '#ff4587',
          borderWidth: 2,
          fill: true,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ff4587',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ff4587',
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

    gradientStroke.addColorStop(1, 'rgba(255, 69, 135,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(188, 82, 126, 0)');
    gradientStroke.addColorStop(0, 'rgba(226, 99, 152, 0)')
    gpuChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# of Votes',
          data: [],
          backgroundColor: gradientStroke,
          borderColor: '#ff4587',
          borderWidth: 2,
          fill: true,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ff4587',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ff4587',
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
  
  axios.get(`/cpu?deviceId=${deviceId}`)
    .then(response => {
      return response.data
    })
    .then(data => {
      modelCPU(data[0].model)
      pointsCpu = data.map((item) => {
        return item.currentuse
      })
      
      initCpuChart()
    })
    .catch(error => console.log(error))

  function modelCPU(data) {
    document.getElementById("model-cpu").innerHTML = data;
  }

  axios.get(`/ram?deviceId=${deviceId}`)
    .then(response => {
      return response.data
    })
    .then(data => {
      console.log(data)
      totalMemoryRam(data[0].totalmemory)
      pointsRam = data.map(function(item) {
        return item.currentuse
      })
      initRamChart()
    })
    .catch(error => console.log(error))

  function totalMemoryRam(data) {
    document.getElementById("ram-totalmemory").innerHTML = data;
  }
  
  axios.get(`/gpu?deviceId=${deviceId}`)
    .then(response => {
      return response.data
    })
    .then(data => {
      nameGPU(data[0].name)
      pointsGpu = data.map(function(item) {
        return item.temperature
      })
      initGpuChart()
    })
    .catch(error => console.log(error))

  function nameGPU(data) {
    document.getElementById("name-gpu").innerHTML = data;
  }

  //Exchange

  axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=BRL&apikey=QOBJWGFELVZ99647')
    .then(response => {
    return response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
    })
    .then(data => {
    real = data

    // Bitcoin Quotation
    axios.get('https://www.bitstamp.net/api/v2/ticker_hour/btcusd/')
      .then(response => {
        return response.data.last
      })
      .then(data => {
        quotationBtc(data)
      })
      .catch(error => console.log(error)) 

    // Ripple Quotation
    axios.get('https://www.bitstamp.net/api/v2/ticker_hour/xrpusd/')
      .then(response => {
        return response.data.last
      })
      .then(data => {
        quotationXrp(data)
      })
      .catch(error => console.log(error))

    // Litecoin Quotation
    axios.get('https://www.bitstamp.net/api/v2/ticker_hour/ltcusd/')
      .then(response => {
        return response.data.last
      })
      .then(data => {
        quotationLtc(data)
      })
      .catch(error => console.log(error))

    // Ethereum Quotation
    axios.get('https://www.bitstamp.net/api/v2/ticker_hour/ethusd/')
      .then(response => {
        return response.data.last
      })
      .then(data => {
        quotationEth(data)
      })
      .catch(error => console.log(error))
      
      // Bitcoin Cash Quotation
    axios.get('https://www.bitstamp.net/api/v2/ticker_hour/bchusd/')
      .then(response => {
        return response.data.last
      })
      .then(data => {
        quotationBch(data)
      })
      .catch(error => console.log(error))

    })
    .catch(error => console.log(error))

  function quotationBtc(data) {
    data = data * real
    document.getElementById("btc").innerHTML = data.toFixed(2); 
  }
  
  function quotationXrp(data) {
    data = data * real
    document.getElementById("xrp").innerHTML = data.toFixed(2);
  }

  function quotationLtc(data) {
    data = data * real
    document.getElementById("ltc").innerHTML = data.toFixed(2);
  }

  function quotationEth(data) {
    data = data * real
    document.getElementById("eth").innerHTML = data.toFixed(2);
  }

  function quotationBch(data) {
    data = data * real
    document.getElementById("bch").innerHTML = data.toFixed(2);
  }

  axios.get('/so')
  .then(response => {
    return response.data[0].namesystem
    // console.log(response.data[0].namesystem)
  })
  .then(data => {
    nameSystem(data)
  })
  .catch(error => console.log(error))

  function nameSystem(data) {
    document.getElementById("name-system").innerHTML = data; 
    document.getElementById("name-system-again").innerHTML = data; 
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

  }, 500)

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

  }, 500)
  
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

  }, 500)

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