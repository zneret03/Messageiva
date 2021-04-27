import React from "react";

interface PropTypes {
  message: any;
  lastMessage: any;
}

const TheirMessage: React.FC<PropTypes> = ({ message, lastMessage }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachment?.length > 0 ? (
        <img
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
          src={message.attachment[0].file}
          alt="message-attachment"
        />
      ) : (
        <div
          className="message"
          style={{
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            float: "left",
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
