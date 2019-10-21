let WxDataModel = require("../model/wxDataModel");

//引入wxDataModel数据库，循环数据库
class wxDataService {
    constructor() {}
    getwxData(callback) {
        let wxDataModel = new WxDataModel();
        wxDataModel.getwxDataById(function(vuedata) {
            for (let i=0;i<vuedata.length; i++) {
                if (i == vuedata.length - 1) {
                    callback(vuedata);
                }
            }
        })
    }
}
module.exports = wxDataService;