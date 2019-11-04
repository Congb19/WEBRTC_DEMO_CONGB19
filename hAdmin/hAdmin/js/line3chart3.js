$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('fromchart'), 'macarons');
// 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['网上大厅','手机APP','政务服务网','微信','国家信访局','政府门户网']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1100, name:'网上大厅'},
                    {value:772, name:'手机APP'},
                    {value:214, name:'政务服务网'},
                    {value:46, name:'微信'},
                    {value:13, name:'国家信访局'},
                    {value:5, name:'政府门户网'}
                ]
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
