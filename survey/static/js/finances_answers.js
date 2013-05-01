var drawFinancesCharts = function() {
    //question 1
    drawPieChart(
        [['Scholarship', 'Number'],
          ['Yes', 173],
          ['No', 37],
        ],
        'financial_question1_chart');

    drawPieChart(
        [['Source of Funding', 'Number'],
          ['Yes, for all of it', 120],
          ['Yes, for part of it', 58],
          ['Not at all', 30],
        ],
        'financial_question2_chart');

    drawPieChart(
        [['Scholarship', 'Number'],
          ['Yes', 116],
          ['No', 93],
        ],
        'financial_question3_chart');

    drawPieChart(
        [['Scholarship', 'Number'],
          ['Yes', 35],
          ['No', 173],
        ],
        'financial_question4_chart');

    drawPieChart(
        [['Work', 'Number'],
          ['Yes', 121],
          ['No', 88],
        ],
        'financial_question5_chart');

    drawPieChart(
        [['Work', 'Number'],
          ['1', 106],
          ['2', 27],
          ['3', 12],
          ['4', 0],
          ['more than 4', 2],
        ],
        'financial_question6_chart');
} 
      
var drawVisualization = function() {
  drawFinancesCharts();
}

google.setOnLoadCallback(drawVisualization);
