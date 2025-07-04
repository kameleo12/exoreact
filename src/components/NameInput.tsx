import { useState } from "react";

function NameInput() {
  const [name, setname] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Entrez votre nom"
        />

        {name.length === 0 ? <p>T'es qui mec</p> : <p>Bonjour {name}</p>}
      </div>
    </>
  );
}

export default NameInput;
