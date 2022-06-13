import EntryList from "./EntryList.js";
import data from "./data.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <EntryList fruit="Apple" />
      <EntryList fruit="Banana" />
      <EntryList fruit="Orange" />
    </div>
  );

}
const items = data.map(function (item) {
  return
  <EntryList
    fruit={item.fruit}
  />
  return (
    <div>
      {items}
    </div>
  )
});

export default App;

