import EntryList from "./EntryList";
import './App.css';
const items = ["carrot ", "Orange ", "Banana "];
function App() {
  return (
    <>
      <div className="App">
        <EntryList items={items} onChange={function (newItems) {
          const StringedItems = JSON.stringify(newItems);
          localStorage.setItem("foo", StringedItems)
        }} />
    </div>
    </>
  )
}
export default App;
