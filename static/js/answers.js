/**
 * Draw pie chart
 */
var drawPieChart = function(data,containerId) {
  // Create and populate the data table.
      var dataTable = google.visualization.arrayToDataTable(data);
        // Create and draw the visualization.

      var options = {
              backgroundColor: { 
                fill:'transparent' 
              },
            };

      var chart = new google.visualization.PieChart(document.getElementById(containerId));
      chart.draw(dataTable, options); 
}

var draw_chart_wrapper = function(data,containerId) {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'ColumnChart',
    dataTable: data,
    options: {
      backgroundColor: { 
        fill:'transparent' 
      }
    },
    containerId: containerId
  });
  wrapper.draw();
}     

