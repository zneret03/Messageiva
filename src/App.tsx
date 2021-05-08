import React from "react";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm/LoginForm";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import "./App.css";

const App: React.FC = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="753471a8-c2cf-4ff3-aea0-ba1263b3dbdc"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps: any) => (
        <ChatFeed chatFeed={chatAppProps} />
      )}
    />
  );
};

export default App;
