(function(){
  'use strict';

  let points = [];
  let cnt = 0;

  (function getData() {
    $.ajax({
      cache: false,
      method: "get",
      url: "/data",
    }).done(function(data) {
      points = data;
      
    });
  }())
  
  Plotly.plot('chart', [{
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

})();