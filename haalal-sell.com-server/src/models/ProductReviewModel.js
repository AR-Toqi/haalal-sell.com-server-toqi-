const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        description: {
            type: String,
        },
        rating: {
            type: String,
        },
        customer_id: {
            type:mongoose.Schema.Types.ObjectId
        },
        product_id:{
            type:mongoose.Schema.Types.ObjectId
        }
    },
    {timestamps:true,versionKey:false}
);

const ProductReview = mongoose.model("productReview", DataSchema);
module.exports = ProductReview;
