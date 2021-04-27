import React from "react";
import { MyMessage, MessageForm, TheirMessage } from "../";

interface PropTypes {
  chatFeed: any;
}

const ChatFeed: React.FC<PropTypes> = ({ chatFeed }) => {
  const { chats, activeChat, userName, messages } = chatFeed;

  const chat: any = chats && chats[activeChat];

  const renderReadReceipts = (message: any, isMyMessage: any) => {
    return chat.people.map(
      (person: any, index: number) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url${person?.person?.avatar}`,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key: any, index: number) => {
      const message = messages[key];
      const lastMessageKey: any = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`mes_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  //useEffect(renderMessages, []);

  if (!chat) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person: any) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm props={chatFeed} activeChat={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
