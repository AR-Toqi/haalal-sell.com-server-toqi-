const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        short_des: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        productID:{
            type:mongoose.Schema.Types.ObjectId
        }
    },
    {timestamps:true,versionKey:false}
);

const ProductSlider = mongoose.model("productSlider", DataSchema);
module.exports = ProductSlider;
