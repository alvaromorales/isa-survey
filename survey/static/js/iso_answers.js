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

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 12, 20, 43, 75, 57]],
    'ISO_question5_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 47, 64, 44, 34, 19]],
    'ISO_question6_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 34, 36, 81, 34, 22]],
    'ISO_question7_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 5, 8, 42, 71, 80]],
    'ISO_question8_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 98, 65, 28, 9, 6]],
    'ISO_question9_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 7, 9, 49, 67, 74]],
    'ISO_question10_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 30, 44, 82, 34, 17]],
    'ISO_question11_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 9, 23, 40, 59, 77]],
    'ISO_question12_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 8, 14, 56, 62, 67]],
    'ISO_question13_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 8, 19, 43, 84, 50]],
    'ISO_question14_chart'
    );
} 
      
var drawVisualization = function() {
  drawISOCharts();
}

google.setOnLoadCallback(drawVisualization);