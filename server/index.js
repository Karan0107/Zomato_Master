require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import googleAuthConfig from "./config/google.config";

import routeConfig from "./config/route.config"

//API
import Auth from "./API/auth/index.js";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Review from "./API/reviews";
import User from "./API/User";

//Database connection
import ConnectDB from "./database/connection.js";

const zomato =express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//For Application Router
//ROUTE: localhost:8000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/reviews",Review);
zomato.use("/orders",Order);
zomato.use("/user",User);

zomato.get("/",(req,res)=>{
  res.json({message:"Setup Success"});
});

zomato.listen(8000, () => {
  ConnectDB().then(()=>{
    console.log("Connection with database is successfull and the server is working at the port 8000");
  }).catch(()=>{
    console.log("Connection with database is not possible");
  });
});
