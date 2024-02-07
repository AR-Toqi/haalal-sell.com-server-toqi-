const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        invoice_id: {
            type : mongoose.Schema.Types.ObjectId
        },
        product_id: {
            type : mongoose.Schema.Types.ObjectId
        },
        qty: {
            type: String,
            required: true,
        },
        sale_price: {
            type: String,
            required: true,
        },
    },
    {timestamps:true,versionKey:false}
);

const InvoiceProduct = mongoose.model("invoiceProduct", DataSchema);
module.exports = InvoiceProduct;
