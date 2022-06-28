import EntryList from "./EntryList";
import './App.css';
const items = ["carrot ", "Orange ", "Banana "];
function App() {
  return (
    <>
      <div className="App">
        <EntryList items={items} />
    </div>
    </>
  )
}
export default App;

