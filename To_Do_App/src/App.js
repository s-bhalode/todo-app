import React, { useState } from "react";
import "./App.css";
import ItemList from "./ItemList";

const App = () =>{

  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (event) => {
    setUserInput(event.target.value);
  };

  const itemList = () => {
    setItems((oldItems) => {
      return [...oldItems, userInput];
    });
    setUserInput("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
};
  return(
    <>
        <div className="container">
            <div className="title">
              <span>ToDo List</span>
            </div>
            <input type="text" placeholder="Add item to List" value={userInput} onChange={addItem} />
              <button onClick={itemList}>+</button>

            <ul className="enteredList">
                {items.map( (itemValue, index) => {
                  return <ItemList key={index} id={index} onSelect={deleteItems} text={itemValue} />
                })}
            </ul>
        </div>
    </>
  );
}

export default App;