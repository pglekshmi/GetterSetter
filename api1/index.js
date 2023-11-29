import express, { json, urlencoded } from "express";
import cors from "cors";
import apiroutes from "./api-router.js";
import cookieParser from "cookie-parser";
import logger from "morgan";

const listen_port = 8000;
const app = express();
app.use(cors({origin:"*"}))
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',apiroutes);

app.listen(listen_port,()=>{
    console.log(`Listening to ${listen_port}`);
})