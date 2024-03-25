const express = require("express");

const mongoose = require("mongoose");


const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

const PORT = 3000;

const app = express();

const DB = "mongodb+srv://abbashyder2001:abbas123@cluster0.vbwa8wx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);







app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
} );

mongoose.connect(DB).then(() => {
    console.log("Connections successfull");
}).catch(e => {
    console.log(e);

});




