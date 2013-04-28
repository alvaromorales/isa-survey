var drawHealthCharts = function() {

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 25, 44, 22, 87, 30]],
    'health_question1_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 21, 35, 27, 82, 40]],
    'health_question2_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 31, 23, 17, 98, 38]],
    'health_question3_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 9, 23, 19, 77, 79]],
    'health_question4_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 23, 34, 36, 58, 58]],
    'health_question5_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 21, 54, 34, 57, 42]],
    'health_question6_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 27, 26, 41, 70, 42]],
    'health_question7_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 34, 40, 39, 43, 49]],
    'health_question8_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 82, 46, 25, 28, 25]],
    'health_question9_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 61, 52, 41, 28, 23]],
    'health_question10_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 29, 24, 38, 68, 46]],
    'health_question11_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 84, 46, 24, 35, 16]],
    'health_question12_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 141, 22, 14, 19, 9]],
    'health_question13_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 17, 27, 40, 72, 51]],
    'health_question14_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 19, 42, 49, 52, 45]],
    'health_question15_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 42, 40, 69, 41, 13]],
    'health_question16_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 32, 41, 92, 28, 10]],
    'health_question17_chart'
    );

    draw_chart_wrapper(
    [['', 'Strongly Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Strongly Agree'],
                    ['', 69, 61, 41, 29, 4]],
    'health_question18_chart'
    );

    drawPieChart(
        [['Resource', 'Number'],
          ['Another international student', 94],
          ['Another MIT student', 62],
          ['ISO', 3],
          ['S^3', 12],
          ['MIT Medical/MIT Mental Health', 5],
          ['GRTs/Housemasters', 5],
          ['Other MIT administration', 1],
          ['Other', 21],
        ],
        'health_question19_chart');

    drawPieChart(
        [['Response', 'Number'],
          ['Yes', 12],
          ['No', 190],
        ],
        'health_question20_chart');

    drawPieChart(
        [['Response', 'Number'],
          ['Yes', 3],
          ['No', 199],
        ],
        'health_question21_chart');

} 
      
var drawVisualization = function() {
  drawHealthCharts();
}

google.setOnLoadCallback(drawVisualization);




