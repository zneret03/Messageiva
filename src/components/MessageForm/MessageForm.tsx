import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

interface PropTypes {
  props: any;
  activeChat: any;
}

const MessageForm: React.FC<PropTypes> = ({ props, activeChat }) => {
  const [value, setValue] = useState("");
  const { creds } = props;

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, activeChat, { text });
      setValue("");
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);

    isTyping(props, activeChat);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    sendMessage(creds, activeChat, { files: event.target.files, text: "" });
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="message-form">
      <input
        type="text"
        className="message-input"
        value={value}
        name="value"
        placeholder="Send a message..."
        onSubmit={(event) => handleSubmit(event)}
        onChange={(event) => handleOnChange(event)}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={(event) => handleUpload(event)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
