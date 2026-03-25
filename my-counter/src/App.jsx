import {  useState } from "react";

export default  function App() {
  const increment = () => {
    setCount(count + 1);
    console.log("count is: ", count);
  };
  const [count, setCount] = useState(0);


  return (
  <div>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
  </div>);
}