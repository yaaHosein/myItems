import EntryList from "./EntryList";
import './App.css';
const fruits = ["carrot"]
function App(props) {
  return
  (
    <div className="App">
      <EntryList fruits={props.fruits} />

    </div>
  )
}

export default App;

