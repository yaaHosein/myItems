import EntryList from "./EntryList";
import "./App.css";

let items = ["carrot ", "Orange ", "Banana "];
if (localStorage.getItem("foo")) {
  items = JSON.parse(localStorage.getItem("foo"));
}
function App() {
  return (
    <div className="App">
      <EntryList
        items={items}
        onChange={function (newItems) {
          if (Array.isArray(newItems)) {
            const json = JSON.stringify(newItems);
            localStorage.setItem("foo", json);
            // save new items in local storage
          }
        }}
      />
    </div>
  );
}
export default App;
