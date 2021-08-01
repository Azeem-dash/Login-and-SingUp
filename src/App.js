import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Todo from "./components/todo";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/">
          <Todo user={user} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/singup">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
