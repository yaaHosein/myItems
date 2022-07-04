import EntryList from "./EntryList";
import "./App.css";
let items = ["carrot ", "Orange ", "Banana "];
if (localStorage.getItem("foo")) {
  items = JSON.parse(localStorage.getItem("foo"));
}
function App() {
  return (
    <>
      <div className="App">
        <EntryList
          items={items}
          onChange={function (newItems) {
            const StringedItems = JSON.stringify(newItems);
            localStorage.setItem("foo", StringedItems);
          }}
        />
      </div>
    </>
  );
}
export default App;
