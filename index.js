const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth") ;
const userRoute = require("./routes/users") ;
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
// const multer = require("multer");
const path = require("path");

dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
// app.use("/images",express.static(path.join(__dirname,"/images")));

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5f7tq.mongodb.net/Blog?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser :true,
    useUnifiedTopology :true,
    // useCreateIndex : true,
})
.then(console.log("connected to mongodb"))
.catch((err)=>console.log(err));

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"images")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,req.body.name);
//     }
// });

// const upload = multer({storage:storage});
// app.post("/api/upload",upload.single("file"),(req,res)=>{
//     res.status(200).json("File has been uploaded");
// })

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.use("/",(req,res)=>{
    res.send("Creative talks server");
})
app.get("/", (req, res) => {
    res.send("Auth Server Is Running");
  });
app.listen(PORT,()=>{
    console.log("Backend is connected");
});