import { useState } from "react";

function ShoppingList() {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const addItem = () => {
    if (!input) return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem();
            }
          }}
          placeholder="Nouvel Article"
        />
        <button onClick={addItem}>Ajoutez</button>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShoppingList;
