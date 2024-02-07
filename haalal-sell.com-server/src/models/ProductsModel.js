const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        shortDes: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        discount: {
            type: String,
        },
        discountPrice: {
            type: String
        },
        image: {
            type: String,
            required: true,
        },
        stock: {
            type: Boolean,
        },
        star: {
            type: String,
            required: true,
        },
        remark: {
            type: String,
            enum:['popular','new','top','special','trending','regular']
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        brandID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    {timestamps:true,versionKey:false}
);

const Product = mongoose.model("products", DataSchema);
module.exports = Product;
