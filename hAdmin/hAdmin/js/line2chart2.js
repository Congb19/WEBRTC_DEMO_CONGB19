const wordChart= echarts.init(document.getElementById("wordChart"), 'macarons');
const wordOpt = {
    series: [{
        type: 'wordCloud',
        shape: 'circle', //circle cardioid diamond triangle-forward triangle
        left: 0,
        right: 0,
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        gridSize: 15, //值越大，word间的距离越大，单位像素
        sizeRange: [10, 40], //word的字体大小区间，单位像素
        rotationRange: [-90, 90], //word的可旋转角度区间
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 2,
                shadowColor: 'rgba(0,0,0,0)'
            }
        },
        data: [{
            name: '地铁',
            value: 3000,
            textStyle: {
                normal: {color: '#f52f55'},
                emphasis: {}
            }
        }, {
            name: '物业管理',
            value: 2181
        }, {
            name: '房子',
            value: 1386
        }, {
            name: '社区',
            value: 2055
        }, {
            name: '开发商',
            value: 2467
        }, {
            name: '医院',
            value: 2244
        }, {
            name: '平台',
            value: 200
        }, {
            name: '管理',
            value: 1484
        }, {
            name: '小学',
            value: 3865
        }, {
            name: '垃圾',
            value: 897
        }, {
            name: '建设',
            value: 1247
        }, {
            name: '金融',
            value: 1366
        }, {
            name: '单位',
            value: 455
        }, {
            name: '拆迁',
            value: 550
        }, {
            name: '浙江',
            value: 2222
        }, {
            name: '咨询',
            value: 366
        }, {
            name: '孩子',
            value: 460
        }, {
            name: '车辆',
            value: 982
        }, {
            name: '出借',
            value: 273
        }, {
            name: '幼儿园',
            value: 2265
        }]
    }],
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
};
wordChart.setOption(wordOpt);