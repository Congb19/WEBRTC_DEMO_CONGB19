$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('yesterday2'), 'macarons');
// 指定图表的配置项和数据
    var option = {
        title: {
            // text: '未来一周气温变化',
            // subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['地铁','小学','医院']
        },
        grid:{
            x:39,
            x2:40,
            y2:24
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'地铁',
                type:'line',
                smooth: true,
                data:[3, 5, 5, 4, 2, 13, 14],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'小学',
                type:'line',
                smooth: true,
                data:[1, 1, 0, 3, 7, 8, 4],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'医院',
                type:'line',
                smooth: true,
                data:[1, 0, 2, 5, 3, 0, 0],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
