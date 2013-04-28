var drawInternationalCharts = function() {

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 20, 42, 45, 67, 34, 3]],
    'international_question2_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 6, 17, 20, 72, 93, 0]],
    'international_question3_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 14, 36, 57, 64, 24, 13]],
    'international_question4_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 52, 61, 37, 40, 13, 7]],
    'international_question5_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 26, 49, 50, 48, 29, 9]],
    'international_question6_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 57, 44, 24, 52, 28, 5]],
    'international_question7_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree','N/A'],
                    ['', 80, 51, 42, 12, 6, 18]],
    'international_question8_chart'
    );

} 
      
var drawVisualization = function() {
  drawInternationalCharts();
}

google.setOnLoadCallback(drawVisualization);
