const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId
        },
    },
    {timestamps:true,versionKey:false}
);

const ProductWish = mongoose.model("productWishes", DataSchema);
module.exports = ProductWish;
