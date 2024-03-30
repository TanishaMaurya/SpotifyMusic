const express=require("express");
const mongoose =require("mongoose");
require("dotenv").config();
const app=express();
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport");
const User=require("./models/User");
const authRoutes= require("./routes/auth");
const songRoutes =require("./routes/song");
const playlistRoutes=require("./routes/playlist");
const cors=require("cors");


  // node index.js\





app.use(cors());//. CORS is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original webpage.
app.use(express.json()); //to convert into json whatever thing come in body

mongoose.connect(process.env.MONGO_URL,{
 useNewUrlParser:true,
 useUnifiedTopology:true,
})
.then((x)=>{
 console.log("Connected to mongo!");
})
.catch((e)=>{
 console.log("Error while connecting to mongo",+e);
});


//setup passport-jwt
//opts is an options object used for configuring the behavior of the JSON Web Token (JWT) authentication 
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWTKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload.identifier });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);


app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);

app.listen(process.env.PORT,()=>{
 console.log("App is running at ");
})

app.get("/",(req,res)=>{
  res.send("Hello world");
});