const mongoose = require("mongoose");
require("colors");
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
        });
        console.log(`Mongodb Is Connected ${connect.connection.host}`.bgYellow);
    } catch (error) {
        console.log(`Error:${error.message}`.bgRed);
        process.exit(1);
    }
};
module.exports = connectDB;