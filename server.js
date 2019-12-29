
//服务器及页面部分
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
users=[];//保存所有在线用户的昵称
var router = express.Router();
var db = require("./FLY_new/conf/db");
var bodyParser = require("body-parser");//获取post请求参数
app.use('/', express.static(__dirname));
app.use(bodyParser.json());//处理以json格式的提交
app.use(bodyParser.urlencoded({//处理以form表单的提交
    extended: true
}));
// router.get('/', function (req, res, next) {
//     //查询users表
//     db.query("SELECT * FROM STUDENT",[],function(results, fields){
//         console.log(results);
//
//         res.render('index', { title: 'Express11' });
//     })
// });
// module.exports = router;

//connect test
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'qwer1234',
//     database : 'mysql',
//     port       : 3307
// });
// connection.connect();
// connection.query('SELECT * from student', function(err, data, fields) {
//     if (err) {
//         console.log("error! "+err);
//         return;
//     };
//     console.log(data);
// });
// connection.end();

function Result ({data={}}){
    this.data=data;
}

//路由
app.get("/index", function(req, res){//这里res和req对象是由express封装过的了
    console.log(req.body);
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'qwer1234',
        database : 'mysql',
        port     : 3307
    });
    let name1, renqi1, head1;
    connection.connect();
    let que = "SELECT * from lives";
    connection.query('SELECT * from lives', function(err, results, fields) {
        if (err) {
            console.log("error! "+err);
            return;
        };
        console.log(results);
        console.log(typeof (results));
        console.log(JSON.stringify(results));

        console.log(name1);

        res.json(//给前端返回json格式的数据
            new Result({data: results})
        );
    });
    connection.end();

});
app.post("/main2", function(req, res){
    //alert(req.body);//请求的参数对象
    console.log(req.body);
    res.json({//给前端返回json格式的数据
        code: 0,
        msg: "登录成功"
    })
});

























var SkyRTC = require('skyrtc').listen(server);
var path = require("path");

server.listen(8080);

//socket部分
io.on('connection', function(socket) {
    //昵称设置
    socket.on('login', function(nickname) {
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted');
        } else {
            socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system', nickname, users.length, 'login');
        };
    });
    //断开连接的事件
    socket.on('disconnect', function() {
        //将断开连接的用户从users中删除
        users.splice(socket.userIndex, 1);
        //通知除自己以外的所有人
        socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
    });



    //接收用户发来的图片
    socket.on('img', function(imgData) {
        //通过一个newImg事件分发到除自己外的每个用户
        socket.broadcast.emit('newImg', socket.nickname, imgData);
    });
});

io.on('connection', function(socket) {
    //其他代码。。。

    //接收新消息
    socket.on('postMsg', function(msg) {
        //将消息发送到除自己外的所有用户
        socket.broadcast.emit('newMsg', socket.nickname, msg);
    });
});






SkyRTC.rtc.on('new_connect', function(socket) {
    console.log('创建新连接');
});

SkyRTC.rtc.on('remove_peer', function(socketId) {
    console.log(socketId + "用户离开");
});

SkyRTC.rtc.on('new_peer', function(socket, room) {
    console.log("新用户" + socket.id + "加入房间" + room);
});

SkyRTC.rtc.on('socket_message', function(socket, msg) {
    console.log("接收到来自" + socket.id + "的新消息：" + msg);
});

SkyRTC.rtc.on('ice_candidate', function(socket, ice_candidate) {
    console.log("接收到来自" + socket.id + "的ICE Candidate");
});

SkyRTC.rtc.on('offer', function(socket, offer) {
    console.log("接收到来自" + socket.id + "的Offer");
});

SkyRTC.rtc.on('answer', function(socket, answer) {
    console.log("接收到来自" + socket.id + "的Answer");
});

SkyRTC.rtc.on('error', function(error) {
    console.log("发生错误：" + error.message);
});

console.log('server started');