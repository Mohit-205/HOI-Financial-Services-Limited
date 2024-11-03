const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
      // "mongodb+srv://caddycool:caddycool@cluster0.xarvi.mongodb.net/acko?retryWrites=true&w=majority"
      "mongodb+srv://admin:admin123@cluster0.v82xxrv.mongodb.net/?retryWrites=true&w=majority"
    );
}
//mongodb+srv://caddycool:caddycool@cluster0.xarvi.mongodb.net/acko?retryWrites=true&w=majority
//mongodb://localhost:27017/acko
module.exports=connect