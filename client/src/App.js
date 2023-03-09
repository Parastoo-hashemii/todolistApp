import { useEffect, useState } from "react";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./Api/HandellApi";
import ToDo from "./components/ToDo";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, settext] = useState("");
  const [isupdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState("");
  console.log(toDo.data);
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    settext(text);
    setToDoId(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add To DoList "
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button
            className="add"
            onClick={
              isupdate
                ? () => updateToDo(toDoId, text, setToDo, settext, setIsUpdate)
                : () => addToDo(text, settext, setToDo)
            }
          >
            {isupdate ? "update" : "Add"}
          </button>
        </div>
        <div className="list">
          {toDo.data ? (
            toDo.data.map(
              (item) => (
                <ToDo
                  key={item._id}
                  text={item.text}
                  updateMode={() => {
                    updateMode(item._id, item.text);
                  }}
                  deleteToDo={() => deleteToDo(item._id, setToDo)}
                />
              )
              // console.log(toDo);
            )
          ) : (
            <h1>looodding</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
