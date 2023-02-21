import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
  };
  const deleteBtn = (index) => {
    setToDos(toDos.filter((_, todoIndex) => index !== todoIndex));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text"></input>
        <button>add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((i, index) => (
          <li key={index}>
            {i}
            <button onClick={() => deleteBtn(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
