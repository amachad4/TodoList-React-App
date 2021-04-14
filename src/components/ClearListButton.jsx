import React from "react";

function ClearListButton(props){
  const { items, setItems } = props;

  {/*resets to-do list array*/}
  function handleClick(){
    setItems([]);
  }

  return(
    <div className="clear-list-btn">
    {/*if there are items in the array, button is shown*/}
    {items.length !== 0 && <button onClick={handleClick} className="btn btn-outline-secondary">Clear To-Do List</button>}
    </div>
  )
}

export default ClearListButton;
