import { useState } from "react";

function Toggletext({ children }: { children: string }) {
  const [Visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!Visible)}>
        {Visible ? "Cacher" : "Afficher"}{" "}
      </button>
      {Visible && <p>{children}</p>}
    </>
  );
}

export default Toggletext;
