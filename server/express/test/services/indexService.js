//获得wxDataService里得到的数据库内容
let WxDataService = require("./wxDataService");

class IndexService {
    constructor() {}
    getData(callback) {
        let wxDataService = new WxDataService();
        wxDataService.getwxData(function(vuedata) {
            callback(vuedata);
        })
    }
}
module.exports = IndexService;