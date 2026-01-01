import express from 'express';
import { createServer } from 'node:http';

import { Server } from "socket.io";

import mongoose from 'mongoose';
import connectToSocket from './controllers/socketManager.js';

import cors from 'cors';


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000));


app.get("/home", (req, res) => {
    return res.json ({"hello": "world"});
});

const start = async () => {
app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://vibhutevidyankshini8:lbsnaadream8@cluster0.ot54md2.mongodb.net/?appName=Cluster0")

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    server.listen(app.get ("port"),() => {
        console.log("LISTENIN ON PORT 8000");
    });



}

start();







