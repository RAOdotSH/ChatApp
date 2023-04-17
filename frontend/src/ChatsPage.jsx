import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";


const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={"2a9f3f19-b7d8-4d43-9c7f-f92bbbb80a23"}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;