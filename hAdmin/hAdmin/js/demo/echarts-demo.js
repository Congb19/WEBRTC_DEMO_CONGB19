
$(function () {
    // 1
    var lineChart = echarts.init(document.getElementById("echarts-line-chart"), 'macarons');
    var lineoption = {
        title : {
            text: '投诉类别占比'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['上月','本月']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['生态环境', '城市管理', '教育', '市场监管', '卫生计生', '移动通信', '住房与城乡建设', '交通运输', '公安执法', '民政', '人力资源与社会保障', '水利', '电力', '交通执法', '税务']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'上月',
                type:'bar',
                data:[51,320,324,461,88,23,334,40,311,40,233,33,49,371,61],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'本月',
                type:'bar',
                data:[51,360,376,520,87,16,290,30,270,39,230,26,55,380,66],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    lineChart.setOption(lineoption);
    $(window).resize(lineChart.resize);
// 2
    var barChart = echarts.init(document.getElementById("echarts-bar-chart"), 'macarons');
    var baroption = {
        title : {
            text: '投诉类型占比',
            subtext: '数据来自FLY',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['投诉','建议','询问','无效信息']
        },
        calculable : true,
        series : [
            {
                name:'投诉类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:1633, name:'投诉'},
                    {value:366, name:'建议'},
                    {value:151, name:'询问'},
                    {value:135, name:'无效信息'}
                ]
            }
        ]
    };
    barChart.setOption(baroption);

    window.onresize = barChart.resize;
// 3
    var scatterChart = echarts.init(document.getElementById("echarts-scatter-chart"), 'macarons');
    var scatteroption = {
        title : {
            text: '部门投诉量TOP10'
        },
        tooltip : {
            trigger: 'axis'
        },
        // legend: {
        //     data:['本月','上月']
        // },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['余杭住建局','余杭公安局','上城金融办公室','萧山人社局','江干公安局','公安交警局','江干交警','上城人社局','建德人社局','拱墅教育局']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : [
            {
                name:'本月',
                type:'line',
                data:[109,102,94,83,68,55,54,49,48,45],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    scatterChart.setOption(scatteroption);
    $(window).resize(scatterChart.resize);

// 4
    var kChart = echarts.init(document.getElementById("echarts-k-chart"), 'macarons');
    var koption = {
        title : {
            text: '近7天总投诉量 与上月对比'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['上月','本月']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data :['4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'上月',
                type:'bar',
                data:[116,121,96,1,45,40,26],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'本月',
                type:'bar',
                data:[136,131,94,2,79,41,29],
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    kChart.setOption(koption);
    $(window).resize(kChart.resize);
// 5
    var pieChart = echarts.init(document.getElementById("echarts-pie-chart"), 'macarons');
    var pieoption = {
        title : {
            text: '投诉来源',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['网上大厅','手机APP','政务服务网','微信','国家信访局','政府门户网']
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
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
    pieChart.setOption(pieoption);
    $(window).resize(pieChart.resize);

    // 6
    var radarChart = echarts.init(document.getElementById("echarts-radar-chart"), 'macarons');
    var radaroption = {
        title : {
            text: '近一个月各区域投诉量'
        },
        tooltip : {
            trigger: 'axis'
        },
        // legend: {
        //     data:['上月','本月']
        // },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data: ['上城区','下城区','滨江区','富阳区','临安区','拱墅区','开发区','建德市','桐庐县','余杭区','江干区','萧山区','西湖区','产业集聚区']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'本月',
                type:'bar',
                data:[406, 211, 351, 327, 217, 358, 182, 232, 278, 507, 504, 410, 38, 235],
                markPoint : {
                    data : [
                        {name : '最高', value : 507, xAxis: 7, yAxis: 183, symbolSize:18},
                        {name : '最低', value : 38, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };

    radarChart.setOption(radaroption);
    $(window).resize(radarChart.resize);

    // map
    // var mapChart = echarts.init(document.getElementById("echarts-map-chart"));
    // var mapoption = {
    //     title : {
    //         text: 'iphone销量',
    //         subtext: '纯属虚构',
    //         x:'center'
    //     },
    //     tooltip : {
    //         trigger: 'item'
    //     },
    //     legend: {
    //         orient: 'vertical',
    //         x:'left',
    //         data:['iphone3','iphone4','iphone5']
    //     },
    //     dataRange: {
    //         min: 0,
    //         max: 2500,
    //         x: 'left',
    //         y: 'bottom',
    //         text:['高','低'],           // 文本，默认为数值文本
    //         calculable : true
    //     },
    //     toolbox: {
    //         show: true,
    //         orient : 'vertical',
    //         x: 'right',
    //         y: 'center',
    //         feature : {
    //             mark : {show: true},
    //             dataView : {show: true, readOnly: false},
    //             restore : {show: true},
    //             saveAsImage : {show: true}
    //         }
    //     },
    //     roamController: {
    //         show: true,
    //         x: 'right',
    //         mapTypeControl: {
    //             'china': true
    //         }
    //     },
    //     series : [
    //         {
    //             name: 'iphone3',
    //             type: 'map',
    //             mapType: 'china',
    //             roam: false,
    //             itemStyle:{
    //                 normal:{label:{show:true}},
    //                 emphasis:{label:{show:true}}
    //             },
    //             data:[
    //                 {name: '北京',value: Math.round(Math.random()*1000)},
    //                 {name: '天津',value: Math.round(Math.random()*1000)},
    //                 {name: '上海',value: Math.round(Math.random()*1000)},
    //                 {name: '重庆',value: Math.round(Math.random()*1000)},
    //                 {name: '河北',value: Math.round(Math.random()*1000)},
    //                 {name: '河南',value: Math.round(Math.random()*1000)},
    //                 {name: '云南',value: Math.round(Math.random()*1000)},
    //                 {name: '辽宁',value: Math.round(Math.random()*1000)},
    //                 {name: '黑龙江',value: Math.round(Math.random()*1000)},
    //                 {name: '湖南',value: Math.round(Math.random()*1000)},
    //                 {name: '安徽',value: Math.round(Math.random()*1000)},
    //                 {name: '山东',value: Math.round(Math.random()*1000)},
    //                 {name: '新疆',value: Math.round(Math.random()*1000)},
    //                 {name: '江苏',value: Math.round(Math.random()*1000)},
    //                 {name: '浙江',value: Math.round(Math.random()*1000)},
    //                 {name: '江西',value: Math.round(Math.random()*1000)},
    //                 {name: '湖北',value: Math.round(Math.random()*1000)},
    //                 {name: '广西',value: Math.round(Math.random()*1000)},
    //                 {name: '甘肃',value: Math.round(Math.random()*1000)},
    //                 {name: '山西',value: Math.round(Math.random()*1000)},
    //                 {name: '内蒙古',value: Math.round(Math.random()*1000)},
    //                 {name: '陕西',value: Math.round(Math.random()*1000)},
    //                 {name: '吉林',value: Math.round(Math.random()*1000)},
    //                 {name: '福建',value: Math.round(Math.random()*1000)},
    //                 {name: '贵州',value: Math.round(Math.random()*1000)},
    //                 {name: '广东',value: Math.round(Math.random()*1000)},
    //                 {name: '青海',value: Math.round(Math.random()*1000)},
    //                 {name: '西藏',value: Math.round(Math.random()*1000)},
    //                 {name: '四川',value: Math.round(Math.random()*1000)},
    //                 {name: '宁夏',value: Math.round(Math.random()*1000)},
    //                 {name: '海南',value: Math.round(Math.random()*1000)},
    //                 {name: '台湾',value: Math.round(Math.random()*1000)},
    //                 {name: '香港',value: Math.round(Math.random()*1000)},
    //                 {name: '澳门',value: Math.round(Math.random()*1000)}
    //             ]
    //         },
    //         {
    //             name: 'iphone4',
    //             type: 'map',
    //             mapType: 'china',
    //             itemStyle:{
    //                 normal:{label:{show:true}},
    //                 emphasis:{label:{show:true}}
    //             },
    //             data:[
    //                 {name: '北京',value: Math.round(Math.random()*1000)},
    //                 {name: '天津',value: Math.round(Math.random()*1000)},
    //                 {name: '上海',value: Math.round(Math.random()*1000)},
    //                 {name: '重庆',value: Math.round(Math.random()*1000)},
    //                 {name: '河北',value: Math.round(Math.random()*1000)},
    //                 {name: '安徽',value: Math.round(Math.random()*1000)},
    //                 {name: '新疆',value: Math.round(Math.random()*1000)},
    //                 {name: '浙江',value: Math.round(Math.random()*1000)},
    //                 {name: '江西',value: Math.round(Math.random()*1000)},
    //                 {name: '山西',value: Math.round(Math.random()*1000)},
    //                 {name: '内蒙古',value: Math.round(Math.random()*1000)},
    //                 {name: '吉林',value: Math.round(Math.random()*1000)},
    //                 {name: '福建',value: Math.round(Math.random()*1000)},
    //                 {name: '广东',value: Math.round(Math.random()*1000)},
    //                 {name: '西藏',value: Math.round(Math.random()*1000)},
    //                 {name: '四川',value: Math.round(Math.random()*1000)},
    //                 {name: '宁夏',value: Math.round(Math.random()*1000)},
    //                 {name: '香港',value: Math.round(Math.random()*1000)},
    //                 {name: '澳门',value: Math.round(Math.random()*1000)}
    //             ]
    //         },
    //         {
    //             name: 'iphone5',
    //             type: 'map',
    //             mapType: 'china',
    //             itemStyle:{
    //                 normal:{label:{show:true}},
    //                 emphasis:{label:{show:true}}
    //             },
    //             data:[
    //                 {name: '北京',value: Math.round(Math.random()*1000)},
    //                 {name: '天津',value: Math.round(Math.random()*1000)},
    //                 {name: '上海',value: Math.round(Math.random()*1000)},
    //                 {name: '广东',value: Math.round(Math.random()*1000)},
    //                 {name: '台湾',value: Math.round(Math.random()*1000)},
    //                 {name: '香港',value: Math.round(Math.random()*1000)},
    //                 {name: '澳门',value: Math.round(Math.random()*1000)}
    //             ]
    //         }
    //     ]
    // };
    // mapChart.setOption(mapoption);
    // $(window).resize(mapChart.resize);

    // 7
    var chordChart = echarts.init(document.getElementById("echarts-chord-chart"), 'macarons');
    var chordoption = {
        title : {
            text: '本月与上月的情感分析对比',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     x : 'center',
        //     y : 'bottom',
        //     data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
        // },
        // toolbox: {
        //     show : true,
        //     feature : {
        //         mark : {show: true},
        //         dataView : {show: true, readOnly: false},
        //         magicType : {
        //             show: true,
        //             type: ['pie', 'funnel']
        //         },
        //         restore : {show: true},
        //         saveAsImage : {show: true}
        //     }
        // },
        calculable : true,
        series : [
            {
                name:'上个月',
                type:'pie',
                radius : [20, 90],
                center : ['25%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:270, name:'正向'},
                    {value:1181, name:'中性'},
                    {value:1443, name:'负向'}
                ]
            },
            {
                name:'本月',
                type:'pie',
                radius : [30, 90],
                center : ['75%', '50%'],
                roseType : 'area',
                data:[
                    {value:270, name:'正向'},
                    {value:108, name:'中行'},
                    {value:1772, name:'负向'}
                ]
            }
        ]
    };

    chordChart.setOption(chordoption);
    $(window).resize(chordChart.resize);

    // var forceChart = echarts.init(document.getElementById("echarts-force-chart"), 'macarons');
    // var forceoption ={
    //     title : {
    //         text: '人物关系：乔布斯',
    //         subtext: '数据来自人立方',
    //         x:'right',
    //         y:'bottom'
    //     },
    //     tooltip : {
    //         trigger: 'item',
    //         formatter: '{a} : {b}'
    //     },
    //     toolbox: {
    //         show : true,
    //         feature : {
    //             restore : {show: true},
    //             magicType: {show: true, type: ['force', 'chord']},
    //             saveAsImage : {show: true}
    //         }
    //     },
    //     legend: {
    //         x: 'left',
    //         data:['家人','朋友']
    //     },
    //     series : [
    //         {
    //             type:'force',
    //             name : "人物关系",
    //             ribbonType: false,
    //             categories : [
    //                 {
    //                     name: '人物'
    //                 },
    //                 {
    //                     name: '家人'
    //                 },
    //                 {
    //                     name:'朋友'
    //                 }
    //             ],
    //             itemStyle: {
    //                 normal: {
    //                     label: {
    //                         show: true,
    //                         textStyle: {
    //                             color: '#333'
    //                         }
    //                     },
    //                     nodeStyle : {
    //                         brushType : 'both',
    //                         borderColor : 'rgba(255,215,0,0.4)',
    //                         borderWidth : 1
    //                     },
    //                     linkStyle: {
    //                         type: 'curve'
    //                     }
    //                 },
    //                 emphasis: {
    //                     label: {
    //                         show: false
    //                         // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
    //                     },
    //                     nodeStyle : {
    //                         //r: 30
    //                     },
    //                     linkStyle : {}
    //                 }
    //             },
    //             useWorker: false,
    //             minRadius : 15,
    //             maxRadius : 25,
    //             gravity: 1.1,
    //             scaling: 1.1,
    //             roam: 'move',
    //             nodes:[
    //                 {category:0, name: '乔布斯', value : 10},
    //                 {category:1, name: '丽萨-乔布斯',value : 2},
    //                 {category:1, name: '保罗-乔布斯',value : 3},
    //                 {category:1, name: '克拉拉-乔布斯',value : 3},
    //                 {category:1, name: '劳伦-鲍威尔',value : 7},
    //                 {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
    //                 {category:2, name: '奥巴马',value : 8},
    //                 {category:2, name: '比尔-盖茨',value : 9},
    //                 {category:2, name: '乔纳森-艾夫',value : 4},
    //                 {category:2, name: '蒂姆-库克',value : 4},
    //                 {category:2, name: '龙-韦恩',value : 1},
    //             ],
    //             links : [
    //                 {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
    //                 {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
    //                 {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
    //                 {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
    //                 {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
    //                 {source : '奥巴马', target : '乔布斯', weight : 1},
    //                 {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
    //                 {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
    //                 {source : '蒂姆-库克', target : '乔布斯', weight : 1},
    //                 {source : '龙-韦恩', target : '乔布斯', weight : 1},
    //                 {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
    //                 {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
    //                 {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
    //                 {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
    //                 {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
    //                 {source : '比尔-盖茨', target : '奥巴马', weight : 6},
    //                 {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
    //                 {source : '蒂姆-库克', target : '奥巴马', weight : 1}
    //             ]
    //         }
    //     ]
    // };
    // forceChart.setOption(forceoption);
    // $(window).resize(forceChart.resize);
// 8
    var gaugeChart = echarts.init(document.getElementById("echarts-gauge-chart"), 'macarons');
    var gaugeoption = {
        title : {
            text: '近一周办理时效'
        },
        tooltip : {
            trigger: 'axis'
        },
        // legend: {
        //     data:['本月','上月']
        // },
        grid:{
            x:40,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        series : [
            {
                name:'时效：',
                type:'line',
                data:[6.422,6.787,6.025,0.833,1.256,7.124,6.121],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    gaugeChart.setOption(gaugeoption);
    $(window).resize(gaugeChart.resize);

    var funnelChart = echarts.init(document.getElementById("echarts-funnel-chart"), 'macarons');
    var funneloption = {
        title : {
            text: '漏斗图',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            data : ['展现','点击','访问','咨询','订单']
        },
        calculable : true,
        series : [
            {
                name:'漏斗图',
                type:'funnel',
                width: '40%',
                data:[
                    {value:60, name:'访问'},
                    {value:40, name:'咨询'},
                    {value:20, name:'订单'},
                    {value:80, name:'点击'},
                    {value:100, name:'展现'}
                ]
            },
            {
                name:'金字塔',
                type:'funnel',
                x : '50%',
                sort : 'ascending',
                itemStyle: {
                    normal: {
                        // color: 各异,
                        label: {
                            position: 'left'
                        }
                    }
                },
                data:[
                    {value:60, name:'访问'},
                    {value:40, name:'咨询'},
                    {value:20, name:'订单'},
                    {value:80, name:'点击'},
                    {value:100, name:'展现'}
                ]
            }
        ]
    };

    funnelChart.setOption(funneloption);
    $(window).resize(funnelChart.resize);

});
