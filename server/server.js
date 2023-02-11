const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const path = require("path");
require("dotenv").config({ path: "./.env" });
const bcrypt = require("bcrypt");


MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(
  MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  uname: String,
  skills: String,
  phonenumber:String,
  passwd: String,
 
});

const User = new mongoose.model("User", userSchema);

const getUsers = async () => {
  var users =  await User.find({}).exec();

  return users
}


//console.log(chats);
//Routes
app.post("/login", async (req, res) => {
  const { uname, passwd } = req.body;

  //check username
  const user = await User.findOne({ uname: uname });
  if (!user) {
    return res.status(400).send("user not found");
  }

  // verify password with encrypted password
  if (await bcrypt.compare(passwd, user.passwd)) {
    res.send(uname);
  } else {
    res.status(400).send("password is incorrect");
  }
});

app.post("/register", async (req, res) => {
  const { fname, lname, uname, skills, phonenumber,Rating, passwd  } = req.body;

  // Ecrypt password using bcrypt
  const encryptedPassword = await bcrypt.hash(passwd, 10);

  //check username
  User.findOne({ uname: uname }, (err, user) => {
    if (user) {
      res.status(400).send("username_exist");
    } else {
      const user = new User({
        fname,
        lname,
        uname,
        skills,
        phonenumber,
        Rating,
        passwd: encryptedPassword,
        

      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ status: "Account has been created" });
        }
      });
    }
  });
});

app.get("/profiles", async (req, res) => {
  const users = await getUsers()
  res.send(users);
});
app.listen("8000", () => {
  console.log(`Server listening on 8000`);
});