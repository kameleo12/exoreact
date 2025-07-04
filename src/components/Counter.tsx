import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <>
      <button onClick={() => setcount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setcount(count + 1)}>+</button>
      {count >= 9 && <p>Arrete de cliquer pélo</p>}
    </>
  );
}

export default Counter;
