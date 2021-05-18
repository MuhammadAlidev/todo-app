import { useState } from 'react';
import './App.css';
import ToDos from './components/ToDos'

const App = () => {
  const [inpList, setInpList] = useState("")
  const [items, setItems] = useState([])
  let inpFunction = (event) => {
    setInpList(event.target.value);
  }
  const listOfItems = () => {
    setItems((previousItems) => {
      return [...previousItems, inpList];
    });
    setInpList('');
  }
  const deleteItem = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((arrElem, index) => {
        return index !== id;
      })
    });
  }
  return (
    <div className="mainBox">
      <h1>ToDo List</h1>
      <input className="inpToDo" onChange={inpFunction} value={inpList} type="text" placeholder="Enter Item" />
      <button onClick={listOfItems} className="addToDo">Add ToDo</button>
      <ol>
        {
          items.map((value, indexValue) => {
            return <ToDos
              key={indexValue}
              id={indexValue}
              item={value}
              onSelect={deleteItem}
            />
          })}
      </ol>
    </div>
  )
}

export default App;
