import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("run all time");
  const iRunOnlyOnce = () => {
    console.log("run only once");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("SEARCH ", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("run when keyword|counter changes");
  }, [keyword, counter]);
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
