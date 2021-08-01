import { db } from "../firebase";

const [Text, setText] = useState();
const [Todos, setTodos] = useState([]);
useEffect(() => {
	
	var docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          console.log(docSnap.data().todos);
          setTodos(docSnap.data().todos);
        } else {
          console.log("No Docs");
        }
}, [])
const AddText = () => {
  db.collection("todos")
    .doc(user.uid)
    .set({
      todos: [...Todos, Text],
    });
  window.M.toast({ html: `Added` });
};

export default AddText;
