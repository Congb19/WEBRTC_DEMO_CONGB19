$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('emotionchart'), 'macarons');
// 指定图表的配置项和数据

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['正向', '中性', '负向']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30']
        },
        series: [
            {
                name: '正向',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [9, 8, 8, 12, 13, 7, 10]
            },
            {
                name: '中性',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [3, 6, 5, 5, 4, 5, 4]
            },
            {
                name: '负向',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [60, 73, 59, 88, 92, 71, 72]
            },
        ]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
