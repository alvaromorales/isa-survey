var drawAcademicCharts = function() {
    //question 1
    draw_chart_wrapper(
    [['', 'Very dissatisfied', 'Somewhat dissatisfied', 'Neither satisfied nor dissatisfied', 'Somewhat satisfied', 'Very satisfied'],
                    ['', 3, 15, 11, 89, 92]],
    'academic_question1_chart'
    );

    draw_chart_wrapper(
    [['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
                    ['', 5, 12, 38, 73, 77]],
    'academic_question2_chart'
    );

    draw_chart_wrapper(
    [['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
                    ['', 21, 29, 64, 51, 39]],
    'academic_question3_chart'
    );

    draw_chart_wrapper(
    [['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
                    ['', 10, 18, 47, 79, 51]],
    'academic_question4_chart'
    );

    draw_chart_wrapper(
    [['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'],
                    ['', 7, 12, 37, 91, 56]],
    'academic_question5_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 14, 25, 18, 82, 63, 2]],
    'academic_question6_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 13, 23, 26, 84, 55, 1]],
    'academic_question7_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 34, 32, 34, 49, 23, 31]],
    'academic_question8_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree', 'N/A'],
                    ['', 9, 12, 15, 98, 71, 0]],
    'academic_question9_chart'
    );
} 
      
var drawVisualization = function() {
  drawAcademicCharts();
}

google.setOnLoadCallback(drawVisualization);
