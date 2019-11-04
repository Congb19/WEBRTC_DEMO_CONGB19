$(function () {
    var lineChart = echarts.init(document.getElementById("echarts-line-chart"), 'macarons');
    var lineoption = {
        title : {
            text: '各区域投诉量/处理时效'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['投诉量','办理时效']
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
                data : ['上城区','下城区','滨江区','富阳区','临安区','拱墅区','开发区','建德市','桐庐县','余杭区','江干区','萧山区','西湖区','产业集聚区']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投诉量',
                type:'bar',
                data:[322, 249, 380, 222, 275, 376, 235, 162, 332, 201, 206, 253,245,364],
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
                name:'办理时效',
                type:'line',
                data:[7.6, 5.9, 6.5, 6.4, 8.7, 7.7, 7.6, 7.2, 8.7, 6.8, 6.0, 5.3, 6.2, 6.667],
                // markPoint : {
                //     data : [
                //         {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                //         {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                //     ]
                // },
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
            text: '各区域投诉主要类别',
            // subtext: '来自FLY',
            // x:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['生态环境', '城市管理', '教育', '市场监管', '卫生计生']
        },
        grid:{
            x:50,
            x2:40,
            y2:24
        },
        yAxis:  {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data:  ['上城区','下城区','滨江区','富阳区','临安区','拱墅区','开发区','建德市','桐庐县','余杭区','江干区','萧山区','西湖区','产业集聚区']
        },
        series: [
            {
                name: '生态环境',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [20, 32, 31, 34, 30, 30, 30, 32, 41, 34, 22, 31, 34, 41]
            },
            {
                name: '城市管理',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [20, 12, 10, 9, 20, 20, 14, 10, 50, 10, 34, 10, 23, 40]
            },
            {
                name: '教育',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [22, 72, 81, 34, 60, 30, 30, 40, 60, 41,21,32,71,51,42,64]
            },
            {
                name: '市场监管',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [15, 22, 45, 15, 19, 33, 31, 19, 33, 41, 29, 20, 41]
            },
            {
                name: '卫生计生',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [82, 83, 70, 74, 60, 70, 70, 60, 82, 71, 74, 70, 32, 86]
            }
        ]
    };
    barChart.setOption(baroption);
    window.onresize = barChart.resize;

    var scatterChart = echarts.init(document.getElementById("echarts-scatter-chart"), 'macarons');
    var scatteroption = {
        title : {
            text: '各区域投诉来源',
            // subtext: '来自FLY',
            // x:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['网上大厅','手机APP','政务服务网','微信','国家信访局','政府门户网']
        },
        grid:{
            x:50,
            x2:40,
            y2:24
        },
        yAxis:  {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data:  ['上城区','下城区','滨江区','富阳区','临安区','拱墅区','开发区','建德市','桐庐县','余杭区','江干区','萧山区','西湖区','产业集聚区']
        },
        series: [
            {
                name: '网上大厅',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 520,321,251,326,398,341,302,335]
            },
            {
                name: '手机APP',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 232,252,234,201, 334, 290, 230, 210,121,111,139,174,154]
            },
            {
                name: '政务服务网',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [50, 62, 41, 34, 40, 30, 70, 20, 82, 91, 34, 53, 30, 20]
            },
            {
                name: '微信',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [10, 22, 20, 12, 11, 34, 20, 33, 31, 21, 15, 19, 30, 41]
            },
            {
                name: '国家信访局',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [12, 22, 21, 14, 40, 10, 20, 12, 21, 22, 14, 10, 10, 20]
            },
            {
                name: '政府门户网',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [20, 32, 9, 24, 10, 30, 22, 12, 22, 21, 14, 10, 12, 10,]
            }
        ]
    };
    scatterChart.setOption(scatteroption);
    $(window).resize(scatterChart.resize);

// 4
    var kChart = echarts.init(document.getElementById("echarts-k-chart"), 'macarons');
    var koption = {
        title : {
            text: '各区域投诉类型'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['无效信息','投诉','建议','咨询']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid:{
            x:50,
            x2:40,
            y2:24
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['上城区','下城区','滨江区','富阳区','临安区','拱墅区','开发区','建德市','桐庐县','余杭区','江干区','萧山区','西湖区','产业集聚区']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'无效信息',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[120, 132, 101, 134, 90, 230, 210,234, 290, 330, 310,120, 132, 101]
            },
            {
                name:'投诉',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'建议',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320,350, 322, 321, 334, 390, 334, 321]
            },
            {
                name:'咨询',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 920,820, 932, 931, 934, 1190, 1312, 1129]
            }
        ]
    };
    kChart.setOption(koption);
    $(window).resize(kChart.resize);

    var pieChart = echarts.init(document.getElementById("echarts-pie-chart"), 'macarons');
    var pieoption = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
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
            text: '近7天各区域投诉量'
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
                data : ['上城区','下城区','治安','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
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
    var chordChart = echarts.init(document.getElementById("echarts-chord-chart"));
    var chordoption = {
        title : {
            text: '南丁格尔玫瑰图',
            subtext: '纯属虚构',
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
                name:'半径模式',
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
                    {value:10, name:'rose1'},
                    {value:5, name:'rose2'},
                    {value:15, name:'rose3'},
                    {value:25, name:'rose4'},
                    {value:20, name:'rose5'},
                    {value:35, name:'rose6'},
                    {value:30, name:'rose7'},
                    {value:40, name:'rose8'}
                ]
            },
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 90],
                center : ['75%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'rose1'},
                    {value:5, name:'rose2'},
                    {value:15, name:'rose3'},
                    {value:25, name:'rose4'},
                    {value:20, name:'rose5'},
                    {value:35, name:'rose6'},
                    {value:30, name:'rose7'},
                    {value:40, name:'rose8'}
                ]
            }
        ]
    };

    chordChart.setOption(chordoption);
    $(window).resize(chordChart.resize);

    var forceChart = echarts.init(document.getElementById("echarts-force-chart"));
    var forceoption ={
        title : {
            text: '人物关系：乔布斯',
            subtext: '数据来自人立方',
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage : {show: true}
            }
        },
        legend: {
            x: 'left',
            data:['家人','朋友']
        },
        series : [
            {
                type:'force',
                name : "人物关系",
                ribbonType: false,
                categories : [
                    {
                        name: '人物'
                    },
                    {
                        name: '家人'
                    },
                    {
                        name:'朋友'
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        },
                        nodeStyle : {
                            brushType : 'both',
                            borderColor : 'rgba(255,215,0,0.4)',
                            borderWidth : 1
                        },
                        linkStyle: {
                            type: 'curve'
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle : {
                            //r: 30
                        },
                        linkStyle : {}
                    }
                },
                useWorker: false,
                minRadius : 15,
                maxRadius : 25,
                gravity: 1.1,
                scaling: 1.1,
                roam: 'move',
                nodes:[
                    {category:0, name: '乔布斯', value : 10},
                    {category:1, name: '丽萨-乔布斯',value : 2},
                    {category:1, name: '保罗-乔布斯',value : 3},
                    {category:1, name: '克拉拉-乔布斯',value : 3},
                    {category:1, name: '劳伦-鲍威尔',value : 7},
                    {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
                    {category:2, name: '奥巴马',value : 8},
                    {category:2, name: '比尔-盖茨',value : 9},
                    {category:2, name: '乔纳森-艾夫',value : 4},
                    {category:2, name: '蒂姆-库克',value : 4},
                    {category:2, name: '龙-韦恩',value : 1},
                ],
                links : [
                    {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
                    {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
                    {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
                    {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
                    {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
                    {source : '奥巴马', target : '乔布斯', weight : 1},
                    {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
                    {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
                    {source : '蒂姆-库克', target : '乔布斯', weight : 1},
                    {source : '龙-韦恩', target : '乔布斯', weight : 1},
                    {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
                    {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
                    {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
                    {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
                    {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
                    {source : '比尔-盖茨', target : '奥巴马', weight : 6},
                    {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
                    {source : '蒂姆-库克', target : '奥巴马', weight : 1}
                ]
            }
        ]
    };
    forceChart.setOption(forceoption);
    $(window).resize(forceChart.resize);

    var gaugeChart = echarts.init(document.getElementById("echarts-gauge-chart"));
    var gaugeoption = {
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'速度',
                type:'gauge',
                min:0,
                max:220,
                splitNumber:11,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 40, name: 'km/h'}]
            },
            {
                name:'转速',
                type:'gauge',
                center : ['25%', '55%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:7,
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:5
                },
                title : {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 1.5, name: 'x1000 r/min'}]
            },
            {
                name:'油表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:2,
                startAngle:135,
                endAngle:45,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber:5,
                    length :10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'E';
                            case '1' : return 'Gas';
                            case '2' : return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:2
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            },
            {
                name:'水表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:2,
                startAngle:315,
                endAngle:225,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'H';
                            case '1' : return 'Water';
                            case '2' : return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:2
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            }
        ]
    };
    gaugeChart.setOption(gaugeoption);
    $(window).resize(gaugeChart.resize);

    var funnelChart = echarts.init(document.getElementById("echarts-funnel-chart"));
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

    // map
    var mapChart = echarts.init(document.getElementById("echarts-map-chart"));
    var mapoption = {
        title : {
            text: 'iphone销量',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['iphone3','iphone4','iphone5']
        },
        dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: 'iphone3',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '河南',value: Math.round(Math.random()*1000)},
                    {name: '云南',value: Math.round(Math.random()*1000)},
                    {name: '辽宁',value: Math.round(Math.random()*1000)},
                    {name: '黑龙江',value: Math.round(Math.random()*1000)},
                    {name: '湖南',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '山东',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '江苏',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '湖北',value: Math.round(Math.random()*1000)},
                    {name: '广西',value: Math.round(Math.random()*1000)},
                    {name: '甘肃',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '陕西',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '贵州',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '青海',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '海南',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: 'iphone4',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: 'iphone5',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            }
        ]
    };
    mapChart.setOption(mapoption);
    $(window).resize(mapChart.resize);

});
