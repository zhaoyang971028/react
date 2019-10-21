let SqlBase = require("./SqlBase");
class wxDataModel extends SqlBase {
    constructor() {
        super();
    }
    getwxDataById(callback) {
        let sql = "select * from user";

        this.connection.query(sql, function(err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ",err.message);
                return;
            }
            console.log(result)
            callback(result);
        });
    }
    
}
module.exports = wxDataModel;