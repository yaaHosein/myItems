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
            const json = JSON.stringify(newItems);
            localStorage.setItem("foo", json);
          }}
        />
    </div>
  );
}
export default App;




function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
  return result

}