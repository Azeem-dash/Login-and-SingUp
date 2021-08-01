import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Todo({ user }) {
  const [Text, setText] = useState();
  const [Todos, setTodos] = useState([]);
  const historty = useHistory();

  useEffect(() => {
    if (user) {
      var docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          console.log(docSnap.data().todos);
          setTodos(docSnap.data().todos);
        } else {
          console.log("No Docs");
        }
      });
    } else {
      historty.push("/login");
    }
  }, []);

  const AddText = () => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...Todos, Text],
      });
    window.M.toast({ html: `Added` });
  };

  const DeleteText = (DeleteText) => {
    var data = db.collection("todos").doc(user.uid);
    data.get().then((docSnap) => {
      const result = docSnap.data().todos.filter((todo) => todo != DeleteText);
      data.update({
        todos: result,
      });
    });
  };
  return (
    <div className="container">
      <h1>TODO</h1>
      <div className="input-field">
        <input
          value={Text}
          placeholder="Enter Any Text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="Text"
        />

        <button onClick={() => AddText()} className="btn bule">
          Add
        </button>
        <ul className="collection">
          {Todos.map((todo) => {
            return (
              <li className="collection-item" key={todo}>
                {todo}
                <i
                  className="material-icons right"
                  onClick={() => DeleteText(todo)}
                >
                  delete
                </i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
