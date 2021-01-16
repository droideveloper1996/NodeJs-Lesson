const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const { TodosSchema } = require("./schema/todos");

//mongoose
//Middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

/**
 * GET, POST, PATCH, PUT, DELETE
 */
//Route /abc

mongoose.connect(
  "mongodb+srv://todo:aGpb1hoqu5x5zrrc@cluster0.99x8m.mongodb.net/Todo?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    else console.log("Connected to Database");
  }
);

app.get("/getList", async (req, res) => {
  try {
    const result = await TodosSchema.findOne({ title: "this is some detail" });
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({ message: "Failed Fetching data" });
  }
});

app.get("/abc/:id", function (req, res) {
  const id = req.params.id;
  return res.send(`Id ki value ${id} `);
});

//Route /test
app.get("/test", (req, res) => {
  return res.send("Server ka response dusra tarika");
});

// app.post("/post", (req, res) => {
//   const body = req.body;
//   console.log(body.sid.length);
//   /** Validation  */
//   if (
//     body.name.length === 0 ||
//     body.branch.length === 0 ||
//     body.sid.length === 0
//   ) {
//     console.log("Invalid Data");
//     //Status Code
//     return res.status(400).json({ message: "Kam data bheja hai yrr!!" });
//   } else {
//     //** We can save on server */
//     console.log("Valid Data");
//     return res.status(200).json({ message: "Data a gya mere pas from server" });
//   }

//   //body
// });

app.post("/post", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const todo = new TodosSchema({
    title: title,
    description: description,
  });

  try {
    const result = await todo.save();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({ message: "Error has occured" });
  }
});

app.get("/testingApiKey/key/:apikey", async (req, res) => {
  const apiKey = req.params.apikey;
  console.log(apiKey);

  //Suppose this as MOngoDb  (users) ka data
  const users = [
    {
      uid: "uid1",
      name: "John Snow",
      accessCount: 500,
    },
    {
      uid: "uid2",
      name: "John Snow",
      accessCount: 500,
    },
  ];

  accessCount = accessCount - 1;

  const freeUser = 5;
  //Filter kara, search kiya aur apna user finsd kiya
  const myUser = await users.filter((user) => user.uid === apiKey);
  console.log(myUser);
  return res.status(200).json(myUser);
});

app.listen(PORT, () => {
  console.log("My server is running successfully on port " + PORT);
});

//  nodemon ----> npm i  nodemon -g
// -g global

/**
 * {
 * name:"xyz",
 * class:'3rd',
 * school:'Random School'
 *
 * }
 */
