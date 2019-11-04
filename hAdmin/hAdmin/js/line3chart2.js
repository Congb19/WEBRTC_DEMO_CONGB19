$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('typechart'), 'macarons');
// 指定图表的配置项和数据
    var option = {
        title : {
            text: '投诉类别分布',
            subtext: '数据来自FLY',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['生态环境', '城市管理', '教育', '市场监管', '卫生计生', '移动通信', '住房与城乡建设', '交通运输', '公安执法', '民政', '人力资源与社会保障', '水利', '电力', '交通执法', '税务','其他']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [

            {
                name:'面积模式',
                type:'pie',
                radius : [40, 180],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                    {value:51, name:'生态环境'},
                    {value:310, name:'城市管理'},
                    {value:326, name:'教育'},
                    {value:420, name:'市场监管'},
                    {value:87, name:'卫生计生'},
                    {value:16, name:'移动通信'},
                    {value:250, name:'住房与城乡建设'},
                    {value:30, name:'交通运输'},
                    {value:222, name:'公安执法'},
                    {value:39, name:'民政'},
                    {value:238, name:'人力资源与社会保障'},
                    {value:26, name:'水利'},
                    {value:55, name:'电力'},
                    {value:380, name:'交通执法'},
                    {value:66, name:'税务'},
                    {value:674, name:'其他'},
                ]
            }
        ]
    };


// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
