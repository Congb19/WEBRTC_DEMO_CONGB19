module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    }
}
// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert: 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
    update: 'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = user;
