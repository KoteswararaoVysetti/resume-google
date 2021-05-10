google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['LeetCode', 33],
    ['CodeChef', 107],
    ['CodeForces', 78],
    ['Vjudge', 83],
    ['MentorPick', 117],
    ['InterviewBit',1601]
  ]);

 

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);