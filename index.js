import express from "express"
import cors from "cors"
import connection from "./connection.js";
import route from "./route.js";
const app=express();
// implementing cors
const corsoptions={
    origin:"*",
    methods:"*",
    credentials:true
}
app.use(cors(corsoptions))
app.use(express.json());
// app.use((express.urlencoded({extended:true})))

// routes
app.use(route);

// listening the server.
app.listen(3000,()=>{
    connection();
    console.log(`server is running on port ${process.env.port}`);
})