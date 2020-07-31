//@ts-check
import React, { useState } from "react";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ email, password });
  };
  return (
    <div className="row">
      <form className="col s6" onSubmit={onSubmit}>
        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="errors">
          {props.errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
