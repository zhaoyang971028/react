//登录数据库，获得数据库内容
class sqlBase {
    constructor() {
        let mysql = require("mysql");

        this.connection = mysql.createConnection({
            host: "cdb-lvi2iymg.cd.tencentcdb.com", //主机 ip
            user: "root", //MySQL认证用户名
            password: "zy971028", //MySQL认证用户密码
            port: "10023", //端口号
            database: "zy" //数据库里面的数据
          });

          this.connection.connect();
    }
}

module.exports = sqlBase;