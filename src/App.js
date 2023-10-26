import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import imgBtn from "./assets/add-30.png";
import msgBtn from "./assets/message.svg";
import home from "./assets/home.svg";
import Saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import send from "./assets/send.svg";
import gpticon from "./assets/chatgptLogo.svg";
import usericon from "./assets/user-icon.png";
import { sendmsg } from "./openai";
import { useState } from "react";

function App() {
  const [input, setinput] = useState("");
  const [message, setmessage] = useState([{
    text:"Hi I am chat GPT",
    isBot:true,
  }]);
  const oko = async () => {
    const res = await sendmsg(input);
    // console.log(res);
    sendmsg([
      ...message,
      {text:input,isBot:false},
      {text:res,isBot:true}
    ]);
  };


  return (
    <div className="App">
      <div className="sideBar">
        <div className="uppersidebar">
          <div className="uppersidetop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn">
            <img src={imgBtn} alt="" className="addButton" />
            New Chat
          </button>
          <div className="uppersidebottom">
            <button className="query">
              <img src={msgBtn} alt="" />
              What is Progarmming
            </button>
            <button className="query">
              <img src={msgBtn} alt="" />
              How to use API
            </button>
          </div>
        </div>
        <div className="lowersidebar">
          <div className="listitem">
            <img src={home} alt="" className="listitemimg" />
            Home
          </div>
          <div className="listitem">
            <img src={Saved} alt="" className="listitemimg" />
            Saved
          </div>
          <div className="listitem">
            <img src={rocket} alt="" className="listitemimg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={usericon} alt="" />
            <p className="text">
              Hello
            </p>
          </div>
          <div className="chat bot">
            <img src={gpticon} alt="" />
            <p className="text">
              Hi I am Chat GPT an artificial intelligence (AI) chatbot that uses natural language processing to create humanlike conversational dialogue
            </p>
          </div>
          {message.map((msg,i)=>{
            <div className={message.isBot?"chat bot":"chat"}>
            <img src={message.isBot?gpticon:usericon} alt="" />
            <p className="text">
              {msg.text}
            </p>
          </div>
          })}
          
        </div>
        <div className="chatfotter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message. . ."
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
              }}
            />
            <button className="Send" onClick={oko}>
              <img src={send} alt="" />
            </button>
          </div>
          <p>
            Chat GPT may produce incorrect result .GPT version 10.9 Aug 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
