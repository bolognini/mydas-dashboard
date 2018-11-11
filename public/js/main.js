(function(){
  'use strict';

  let points = [];
  let pointsRam = [];
  let cnt = 0;

  (function getData() {
    $.ajax({
      cache: false,
      method: "GET",
      url: "/data",
    }).done(function(data) {
      points = data;
    });

    $.ajax({
      cache: false,
      method: "GET",
      url: "/ram",
    }).done(function(data) {
      pointsRam = data;
    });
  }())
  
  Plotly.plot('chart', [{
    y: [0],
    type: 'line'
  }]);

  Plotly.plot('chart2', [{
    y: [0],
    type: 'line'
  }]);
  
  setInterval(function() {
    if(points.length == 0){
      return;
    }
    
    Plotly.extendTraces('chart', { y: [[points.shift()]] }, [0]);
    cnt++;
    
    if(cnt > 30) {
      Plotly.relayout('chart', {
        xaxis: {
          range: [cnt-30,cnt]
        }
      })
    }
  }, 100);

  setInterval(function() {
    if(pointsRam.length == 0) {
      return;
    }

    Plotly.extendTraces('chart2', { y: [[pointsRam.shift()]] }, [0]);
    cnt++;

    if(cnt > 30) {
      Plotly.relayout('chart2', {
        xaxis: {
          range: [cnt-30,cnt]
        }
      })
    }
  }, 100)

})();