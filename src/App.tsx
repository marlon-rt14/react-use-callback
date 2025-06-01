import { useCallback, useEffect, useState } from "react";
import { Counter } from "./components/Counter";

// class Person {
//   constructor(public name: string) {}
// }

// const person = new Person("John");
// const person2 = new Person("John");

// const increment = new App();
// const increment2 = new App();

function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  console.log("Rendering App");

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, [increment]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <h1>Count: {count}</h1>
      <Counter increment={increment} />
    </div>
  );
}

export default App;
