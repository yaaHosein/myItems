import React from 'react';

import './App.css';
function MyList(props) {
  const items = props.items;
  const listItems = numbers.map((item) =>
    <li>{item}</li>
  );
  function App() {
    return (
      <ul>{listItems}</ul>
    );
  }
  const items = [item1, item2, item3, item4, item5];
  ReactDOM.render(
    <MyList items={items} />,
    document.getElementById('root')
  );
}

export default App;
