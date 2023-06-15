const express = require ("express");
const mongoose = require ("mongoose");      // installed and imported mongoose in the project
const route = require ("./route/index");
const cors = require ("cors");
const dotenv =require("dotenv");
const passport= require('passport');

const cookieSession = require('cookie-session');
const paymentRoutes = require("./controller/payment");
const authRoutes = require("./controller/auth");
const passportsetup= require("./controller/passport");
const formRoutes = require('./route/index');
dotenv.config();

const app = express();

const Port = process.env.PORT || 5500;
const hostname = "localhost";
const localDbUrl = '****************************';   // Local Mongo DB url 
const corsOption ={
    origin:'http://localhost:3000',
    credentials: true,
    optionsuccessstate:200
}

app.use(cors(corsOption));

app.use(express.json());
app.use(cookieSession({name:"session",keys:["doopy"],maxAge:24*60*60*1000}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', route);
app.use("/api/payment/",paymentRoutes);
app.use("/auth", authRoutes);
app.use('/api', formRoutes);

mongoose.connect(localDbUrl, {                          // Create a Mongo DB connection
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then( res => {
        app.listen(Port, hostname, () => {
            console.log(`Server is running at ${hostname}: ${Port}`)
        });
    })
    .catch(err => console.log(err));

