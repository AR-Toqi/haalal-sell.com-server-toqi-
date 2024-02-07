const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        cus_name: {
            type: String,
            required:true
        },
        cus_add: {
            type: String,
            required:true
        },
        cus_city: {
            type: String,
            default:"Dhaka"
        },
        cus_state: {
            type: String,
            default:"Bangladesh"
        },
        cus_postcode: {
            type: String,
            default:"0000"
        },
        cus_phone: {
            type: String,
            required:true
        },
        cus_fax: {
            type: String,
            default:"123456"
        },


        ship_name: {
            type: String,
            required:true
        },
        ship_add: {
            type: String,
            required:true
        },
        ship_city: {
            type: String,
            default:"Dhaka"
        },
        ship_state: {
            type: String,
            default:"Bangladesh"
        },
        ship_postcode: {
            type: String,
            default:"0000"
        },
        ship_phone: {
            type: String,
            required:true
        },
        user_id:{
            type : mongoose.Schema.Types.ObjectId
        }
    },
    {timestamps:true,versionKey:false}
);

const CustomerProfileModel = mongoose.model("customerProfile", DataSchema);
module.exports = CustomerProfileModel;
