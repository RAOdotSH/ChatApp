const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

require("dotenv").config();

const CHAT_ENGINE_PROJECT_ID = "";
const CHAT_ENGINE_PRIVATE_KEY = "";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  // Calling the chat engine to create user
  try{
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: "123", first_name: username  },
      { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } } 
    );

    return res.status(r.status).json(r.data);

  } catch(e){
    console.log(e);

    return res.status(e.response.status).json(e.response.data);
  }

  // return res.json({ username: username, secret: "sha256..." });
});

// app.post("/signup", async (req, res) => {
//   const { username, secret, email, first_name, last_name } = req.body;

//   // Store a user-copy on Chat Engine!
//   // Docs at rest.chatengine.io
//   try {
//     const r = await axios.post(
//       "https://api.chatengine.io/users/",
//       { username, secret, email, first_name, last_name },
//       { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
//     );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, secret } = req.body;

//   // Fetch this user from Chat Engine in this project!
//   // Docs at rest.chatengine.io
//   try {
//     const r = await axios.get("https://api.chatengine.io/users/me/", {
//       headers: {
//         "Project-ID": CHAT_ENGINE_PROJECT_ID,
//         "User-Name": username,
//         "User-Secret": secret,
//       },
//     });
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

app.listen(3001);