import React, { useState } from 'react';

function TodoItem(props){
  const {items, onChecked, id } = props;


  const [hover, setHover] = useState(false);

  {/*Border appears around to-do list item when moused over*/}
  function handleMouseOver(){
    setHover(true);
  }

  {/*Border disappears after cursor has moved away*/}
  function handleMouseOut(){
    setHover(false);
  }

  return(
  <div
  onMouseOver={handleMouseOver}
  onMouseOut={handleMouseOut}
  style={{border: hover ? '1px solid gray' : 'none', borderRadius: hover ? '10px' : 'none'}}
  className="todo-item"
  >
    <li>
      {items}
    <button onClick={()=>{
      {/*Delete item from to-do list when clicked on*/}
      onChecked(id);
    }}
    type="button"
    className="close">
      <span>&times;</span>
    </button>
    </li>
  </div>
  )
}

export default TodoItem;
