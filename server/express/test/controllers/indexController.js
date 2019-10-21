//将数据库整个对象转成json对象返回给index
let IndexService = require("../services/indexService");
module.exports.index = function(req, res) {
    let indexService = new IndexService();
    indexService.getData(function(ob) {
        res.json(ob);
    });
};