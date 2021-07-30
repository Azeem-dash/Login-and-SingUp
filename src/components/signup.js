import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export default function SingUp() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(Email, Password);
      window.M.toast({ html: `Welcome ${result.user.email}` });
      history.push("/");
      console.log(Email, Password);
    } catch (error) {
      window.M.toast({ html: error.message });
    }
  };
  return (
    <div className="center container">
      <h3>Please SingUp </h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-field">
          <input
            placeholder="Enter your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="validate"
          />
          <input
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="validate"
          />
          <button type="submit" className="btn bule">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
