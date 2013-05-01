var drawSocialCharts = function() {
    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 10, 19, 17, 61, 103, 0]],
    'social_question7_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 17, 26, 26, 50, 86, 2]],
    'social_question1_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 32, 60, 38, 50, 26, 1]],
    'social_question2_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 18, 41, 55, 47, 25, 22]],
    'social_question3_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 21, 49, 40, 67, 30, 1]],
    'social_question4_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 6, 11, 37, 57, 91, 6]],
    'social_question5_chart'
    );

    draw_chart_wrapper(
    [['', 'Other international students', 'Other MIT students', 'The International Students Office (ISO)', 'My faculty advisor', 'MIT Administration', 'Other'],
                    ['', 163, 94, 66, 34, 16, 21]],
    'social_question6_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 20, 20, 40, 66, 56, 6]],
    'social_question8_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 19, 20, 45, 52, 55, 16]],
    'social_question9_chart'
    );
} 
      
var drawVisualization = function() {
  drawSocialCharts();
}

google.setOnLoadCallback(drawVisualization);
