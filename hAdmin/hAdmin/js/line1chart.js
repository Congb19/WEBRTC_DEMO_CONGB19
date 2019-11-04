$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('flot-line-chart-moving1'), 'macarons');
// 指定图表的配置项和数据
    var option = {
        grid:{
            x:39,
            x2:40,
            y2:24
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [136, 131, 94, 2, 79, 41, 29],
            type: 'line',
            smooth: false,
            areaStyle: {}
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
