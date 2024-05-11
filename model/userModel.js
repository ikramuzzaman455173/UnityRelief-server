// import mongoose from 'mongoose';
// const userSchema = new mongoose.Schema({
//   name: {
//     type:String,
//     required:true
//   },
//   email: {
//     type: String,
//     require:true
//   },
//   password: {
//     type: String,
//     required:true
//   }
// })

// export default mongoose.model("user",userSchema)


//init code
const mongoose = require("mongoose");

//user schema
const dataSchema = new mongoose.Schema(
  {
    pin_name: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    response_from_iot: {
      type: Boolean,
    },
  },
  { timestamps: true }
);


//module exports
// module.exports = mongoose.model("data",dataSchema);
export default mongoose.model("data",dataSchema)
