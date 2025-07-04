import Counter from "./components/Counter";
import Title from "./components/Title";
import Toggletext from "./components/Toggletext";
import NameInput from "./components/NameInput";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div>
      <Counter></Counter>
      <Title text="Bienvenu !"></Title>
      <Title text="Teste pour voir si ca marche"></Title>
      <Toggletext>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Toggletext>
      <NameInput></NameInput>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
