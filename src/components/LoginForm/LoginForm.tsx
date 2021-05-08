import React, { useState } from "react";
//import httpRequest from "../../api/httpRequest";
import axios from "axios";

interface InitialTypes {
  username: any;
  password: any;
}

const initialState: InitialTypes = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const [{ username, password }, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "753471a8-c2cf-4ff3-aea0-ba1263b3dbdc",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Opps, incorrect credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            required
            type="text"
            className="input"
            value={username}
            name="username"
            onChange={(event) => handleOnChange(event)}
            placeholder="Username"
          />
          <input
            required
            type="password"
            className="input"
            value={password}
            name="password"
            onChange={(event) => handleOnChange(event)}
            placeholder="password"
          />
          <div style={{ textAlign: "center" }}>
            <button className="button" type="submit">
              Login
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
