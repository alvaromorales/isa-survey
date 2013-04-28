var drawResourcesCharts = function() {

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 42, 83, 33, 21, 27]],
    'resources_question1_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 32, 87, 64, 14, 5]],
    'resources_question2_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 9, 61, 47, 11, 77]],
    'resources_question3_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 4, 35, 33, 5, 126]],
    'resources_question4_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 94, 81, 14, 14, 2]],
    'resources_question5_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 22, 45, 73, 15, 50]],
    'resources_question6_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 11, 45, 63, 8, 79]],
    'resources_question7_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 10, 35, 76, 20, 63]],
    'resources_question8_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 8, 40, 47, 16, 91]],
    'resources_question9_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 3, 32, 99, 9, 60]],
    'resources_question10_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 20, 39, 84, 17, 45]],
    'resources_question11_chart'
    );

    draw_chart_wrapper(
    [['', 'I use it', 'I would use it if I need it', 'I don\'t use it or plan to use it, no need', 'I don\'t plan to use it, I don\'t feel welcome', 'Not aware of resource'],
                    ['', 24, 60, 47, 22, 52]],
    'resources_question12_chart'
    );

} 
      
var drawVisualization = function() {
  drawResourcesCharts();
}

google.setOnLoadCallback(drawVisualization);




