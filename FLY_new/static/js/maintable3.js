$('#mytab').bootstrapTable({
    url: "../static/js/tableconfig3.json",
    queryParams: "queryParams",
    toolbar: "#toolbar",
    sidePagination: "true",
    striped: true, // 是否显示行间隔色
    // search : "true",
    // searchOnEnterKey: "true",
    // customSearch: "customSearch",
    // showColumns: "true",
    uniqueId: "ID",
    pageSize: "8",
    pagination: false, // 是否分页
    // pageList: [5, 8, 11, 14],        //可供选择的每页的行数（*）
    sortable: true, // 是否启用排序
    cardView: false,                    //是否显示详细视图
    showColumns: true,                  //是否显示所有的列
    showRefresh: true,                  //是否显示刷新按钮
    columns: [{
        field: 'id',
        title: '编号'
    },
        {
            field: 'time',
            title: '时间'
        },
        {
            field: 'type',
            title: '类型',
            // formatter: setSelect
        },
        {
            field: 'content',
            title: '信件内容'
        },
        {
            field: 'elevel',
            title: '紧急程度'
        },
        {
            field: 'keyword',
            title: '关键词',
            // formatter: actionFormatter2,
        },
        {
            field: 'price',
            title: '操作',
            width: 150,
            align: 'center',
            valign: 'middle',
            formatter: actionFormatter,
        },

    ]
});
//操作栏的格式化
function actionFormatter(value, row, index) {
    var id = value;
    var result = "";
    result += "<a href='javascript:;' class='btn btn-xs btn-danger' onclick=findsimilar() title='删除事件'  data-toggle=\"modal\" data-target=\".bs-similar-modal-lg\"><span class='glyphicon glyphicon-search'></span>删除事件</a>&nbsp;";
    result += "<a href='javascript:;' class='btn btn-xs btn-warning' onclick=chakanxiangqing() title='查看详情'  data-toggle=\"modal\" data-target=\".bs-example-modal-lg\"><span class='glyphicon glyphicon-pencil'></span>查看详情</a>&nbsp;";
    // result += "<a href='javascript:;' class='btn btn-xs btn-danger' onclick=\"DeleteByIds('" + id + "')\" title='退回'><span class='glyphicon glyphicon-remove'></span></a>";
    return result;
}
//关键词栏的样式
function actionFormatter2(value, row, index) {
    var id = value;
    var result = "";
    result += "<a href='javascript:;' class='btn btn-xs btn-info' onclick=findsimilar() title='查看相似事件'  data-toggle=\"modal\" data-target=\".bs-similar-modal-lg\"><span class='glyphicon glyphicon-search'></span></a>&nbsp;";
    result += "<a href='javascript:;' class='btn btn-xs btn-warning' onclick=chakanxiangqing() title='查看详情/回复'  data-toggle=\"modal\" data-target=\".bs-example-modal-lg\"><span class='glyphicon glyphicon-pencil'></span></a>&nbsp;";
    // result += "<a href='javascript:;' class='btn btn-xs btn-danger' onclick=\"DeleteByIds('" + id + "')\" title='退回'><span class='glyphicon glyphicon-remove'></span></a>";
    return result;
}

function setSelect(value, row, index)
{
    var strHtml = "";
    if (value == "Item 1")
    {
        strHtml = "<select class='ss'><option value='Item 1' selected='selected'>Item 1</option><option value='Item 2'>Item 2</option></select>";
    }
    else
    {
        strHtml = "<select class='ss'><option value='Item 1' >Item 1</option><option value='Item 2' selected='selected'>Item 2</option></select>";
    }
    return strHtml;
}
function queryParams(params) {
    var param = {};
    $('#query-form').find('[name]').each(function () {
        var value = $(this).val();
        if (value != '') {
            param[$(this).attr('name')] = value;
        }
    });

    param['pageSize'] = params.limit;   //页面大小
    param['pageNumber'] = params.offset;   //页码

    return param;
}
function customSearch(text) {
    $table.bootstrapTable('refresh');//刷新Table，Bootstrap Table 会自动执行重新查询
}
function resetSearch() {
    $('#query-form').find('[name]').each(function () {
        $(this).val('');
    });
}