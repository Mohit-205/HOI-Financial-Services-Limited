const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.v82xxrv.mongodb.net/?retryWrites=true&w=majority"
    );
}

module.exports=connect