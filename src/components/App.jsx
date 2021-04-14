import React, { useState } from "react";
import TodoItem from './TodoItem.jsx';
import Form from './Form.jsx';
import Alert from './Alert.jsx';
import ClearListButton from './ClearListButton.jsx';

function App() {
  {/*tracks user input*/}
  const [inputText, setInputText] = useState('');
  {/*tracks to-do list array*/}
  const [items, setItems] = useState([]);
  {/*handles error boolean*/}
  const [error, handleError] = useState(false)

  {/*takes index of array as an id and filters the item from the array*/}
  function deleteItem(id){
    setItems(prevValue=>{
      return prevValue.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  {/*if the input field is empty and enter is pressed, set error to true*/}
  function handleKeyDown(event){
    const {key: keyPress} = event;
    if(keyPress === "Enter" && inputText ===''){
      handleError(true);
    } else{
      handleError(false);
    }
  }

  return (
    <div onKeyDown={handleKeyDown}>
    {error && <Alert />} {/*display alert if there are errors*/}
    <div className="list-container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <hr />
      <Form
      setItems={setItems}
      inputText={inputText}
      setInputText = {setInputText}
      />
      <div>
        <ul>
          {items.map((item, index) => {
            return <TodoItem
            key = {index}
            id = {index}
            items= {item}
            onChecked ={deleteItem}
            />
          })}
        </ul>
      </div>
      <ClearListButton
      items = {items}
      setItems = {setItems}
      />
    </div>

    </div>
  );
}

export default App;
