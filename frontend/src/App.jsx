import { useState } from "react";
import "./App_old.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import dotenv from "dotenv";

// dotenv.config();

function App() {
  const [user, setUser] = useState();

  if (!user){
    return <AuthPage onAuth={(user) => setUser(user)} />;
  }
  else{
    return <ChatsPage user={user}/>;
  }
}

export default App;