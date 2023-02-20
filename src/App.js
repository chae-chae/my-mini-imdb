import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("run all time");
  const iRunOnlyOnce = () => {
    console.log("run only once");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
