const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.route");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const db_uri=process.env.MONGODB_URI;

mongoose.connect(db_uri,{
   
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/todo",todoRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});