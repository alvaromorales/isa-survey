var drawISOCharts = function() {
    //question 1
    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 4, 11, 11, 61, 122]],
    'ISO_question1_chart'
    );

    //question 2
    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 2, 14, 17, 71, 100]],
    'ISO_question2_chart'
    );

    //question 3
    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 106, 50, 29, 12, 10]],
    'ISO_question3_chart'
    );

    //question 4
    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 7, 21, 54, 72, 54]],
    'ISO_question4_chart'
    );
} 
      
var drawVisualization = function() {
  drawISOCharts();
}

google.setOnLoadCallback(drawVisualization);