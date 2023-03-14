function draw(){
    var sample = [
        {x:times[0], y:id[0]},
        {x:times[1], y:id[1]},
        {x:times[2], y:id[2]},
        {x:times[3], y:id[3]},
        {x:times[04], y:id[4]}
      ];
      var sx = 0;
      var sy = 0;
      var sxy = 0;
      var sxsq = 0;
      var xmean;
      var ymean;
      var alpha;
      var beta;
      var n;
      sample.forEach(function(val) {
        sx += val.x;
        sy += val.y;
        sxy += val.x * val.y;
        sxsq += Math.pow(val.x,2);
      });
      n = sample.length;
      xmean = sx/n;
      ymean = sy/n;
      beta  = ((n*sxy) - (sx*sy))/((n*sxsq)-(Math.pow(sx,2))); 
      alpha = ymean - (beta * xmean); 
 
      var regressionLinePlot = [];
      sample.forEach(function(val) {
        regressionLinePlot.push({'x': val.x, 'y': alpha + beta*val.x});
      });

      window.onclick = function() {
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myChart = new Chart(ctx, {
          type: 'scatter',
          data: plotData,
        });
      };
      
      var plotData = {
        datasets: [
          { 
            type: 'scatter',
            label: 'scatter',
            data: sample,
            borderColor : 'rgba(100,120,255,1)',            
            backgroundColor: 'rgba(130,160,255,1)',         
            pointBackgroundColor: 'rgba(100,120,255,1)',    
            fill: false                                    
          },
          { 
            type: 'scatter',
            label: 'Regression line',
            data: regressionLinePlot,             
            borderColor : 'rgba(20,100,20,1)',     
            backgroundColor: 'rgba(70,100,70,1)', 
            borderWidth : 2,                       
            pointRadius: 0.5,                      
            tension: 0,                            
            showLine: true,                        
            fill: false                            
          }
        ],
      };
}

var index=0;
var times = [0,0,0,0,0];
var id = [0,0,0,0,0];

function calculate_Id(){
    d1=2*Math.sqrt((730-250)*(730-250)+(300-50)*(300-50))/400;
    d2=2*Math.sqrt((730-350)*(730-350)+(300-350)*(300-350))/250;
    d3=2*Math.sqrt((1000-730)*(1000-730)+(520-300)*(520-300))/200;
    d4=2*Math.sqrt((1200-730)*(1200-730)+(300-50)*(300-50))/100;
    d5=2*Math.sqrt((730-0)*(730-0)+(300-150)*(300-150))/50;
    id[0] = Math.log(d1);
    id[1] = Math.log(d2);
    id[2] = Math.log(d3);
    id[3] = Math.log(d4);
    id[4] = Math.log(d5);
    return id;
}
 function calculate_Time(showTime , clickTime){
       times[index]=(showTime - clickTime)/1000;
       index++;
}
var showTime,clickTime;
document.getElementById("button2").addEventListener("click", hideTheButtom1);
function hideTheButtom1() {
clickTime = Date.now();
document.getElementById("button2").style.display='none';
showTheButtom2();
}
function showTheButtom2(){
    
    document.getElementById("img1").style.display='block';
    document.getElementById("img1").addEventListener("click", hideTheButtom2);
}
function hideTheButtom2(){
   document.getElementById("img1").style.display='none';
   showTime = Date.now();
   calculate_Time(showTime,clickTime);
   showTheButtom3();
}
function showTheButtom3(){
    document.getElementById("button4").style.display='block';
    document.getElementById("button4").addEventListener("click", hideTheButtom3);
}
function hideTheButtom3(){
    
   clickTime = Date.now();
   document.getElementById("button4").style.display='none';
   showTheButtom4();
}
function showTheButtom4(){
    document.getElementById("img2").style.display='block';
    document.getElementById("img2").addEventListener("click", hideTheButtom4);
}
function hideTheButtom4(){
   document.getElementById("img2").style.display='none';
   showTime = Date.now();
   calculate_Time(showTime,clickTime);
   showTheButtom5();
}
function showTheButtom5(){
    document.getElementById("button6").style.display='block';
    document.getElementById("button6").addEventListener("click", hideTheButtom5);
}
function hideTheButtom5(){
   clickTime = Date.now();
   document.getElementById("button6").style.display='none';
   showTheButtom6();
}
function showTheButtom6(){
    
    document.getElementById("img3").style.display='block';
    document.getElementById("img3").addEventListener("click", hideTheButtom6);
}
function hideTheButtom6(){
   document.getElementById("img3").style.display='none';
   showTime = Date.now();
   calculate_Time(showTime,clickTime);
   showTheButtom7();
}
function showTheButtom7(){
    document.getElementById("button8").style.display='block';
    document.getElementById("button8").addEventListener("click", hideTheButtom7);
}
function hideTheButtom7(){
   clickTime = Date.now();
   document.getElementById("button8").style.display='none';
   showTheButtom8();
}
function showTheButtom8(){
    document.getElementById("img4").style.display='block';
    document.getElementById("img4").addEventListener("click", hideTheButtom8);
}
function hideTheButtom8(){
   document.getElementById("img4").style.display='none';
   showTime = Date.now();
   calculate_Time(showTime,clickTime);
   showTheButtom9();
}
function showTheButtom9(){
    document.getElementById("button10").style.display='block';
    document.getElementById("button10").addEventListener("click", hideTheButtom9);
}
function hideTheButtom9(){
   clickTime = Date.now();
   document.getElementById("button10").style.display='none';
   showTheButtom10();
}
function showTheButtom10(){
    
    document.getElementById("img5").style.display='block';
    document.getElementById("img5").addEventListener("click", hideTheButtom10);
}
function hideTheButtom10(){
    
   document.getElementById("img5").style.display='none';
   showTime = Date.now();
   calculate_Time(showTime,clickTime);
   calculate_Id();
   console.log(times);
   console.log(id);
   draw();
   
}