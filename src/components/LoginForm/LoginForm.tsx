import React, { useState } from "react";

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

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            value={username}
            name="username"
            onChange={(event) => handleOnChange(event)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            name="password"
            onChange={(event) => handleOnChange(event)}
            placeholder="password"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
