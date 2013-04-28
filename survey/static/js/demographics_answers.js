var drawDemographicsCharts = function() {
    //question 1
    drawPieChart(
        [['Gender', 'Number'],
          ['Male', 102],
          ['Female', 110],
          ['Other', 0],
        ],
        'demographics_question1_chart');

        drawPieChart(
        [['Year', 'Number'],
          ['First-year', 48],
          ['Second-year', 47],
          ['Third-year', 29],
          ['Fourth-year', 21],
          ['Fifth-year or later', 5],
          ['Graduate Student (Masters)', 20],
          ['Graduate Student (PhD)', 36],
        ],
        'demographics_question2_chart');

        drawPieChart(
        [['International', 'Number'],
          ['Yes', 204],
          ['No', 6],
        ],
        'demographics_question3_chart');

        drawPieChart(
        [['Family', 'Number'],
          ['Yes', 50],
          ['No', 159],
        ],
        'demographics_question4_chart');

        drawPieChart(
        [['Frequency', 'Number'],
          ['Everyday', 32],
          ['Every couple of days', 60],
          ['Once a week', 83],
          ['Once a month', 25],
          ['Less than once a month', 11],
        ],
        'demographics_question5_chart');

        drawPieChart(
        [['First School', 'Number'],
          ['Yes', 159],
          ['No', 50],
        ],
        'demographics_question6_chart');
} 
      
var drawVisualization = function() {
  drawDemographicsCharts();
}

google.setOnLoadCallback(drawVisualization);
