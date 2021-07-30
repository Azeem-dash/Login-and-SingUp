import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Todo from "./components/todo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Todo />
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
