const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth") ;
const connectDB = require('./configs/connectdb');


dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5f7tq.mongodb.net/Blog?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser :true,
    useUnifiedTopology :true
})
.then(console.log("connected to mongodb"))
.catch((err)=>console.log(err));

app.use("/api/auth", authRoute);

app.use("/",(req,res)=>{
    res.send("Creative talks server");
})
app.get("/", (req, res) => {
    res.send("Authzee Server Is Running");
  });
app.listen(PORT,()=>{
    console.log("Backend is connected");
});