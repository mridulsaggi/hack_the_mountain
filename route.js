import express from "express"
import { sendquery } from "./sendquery.js";
const route=express.Router();
route.post("/query",sendquery)
export default route;