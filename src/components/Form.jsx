import React, { useState } from 'react';

function Form(props){
  const { inputText, setInputText, setItems } = props;

  {/*set input text to user input*/}
  function handleChange(event){
    const { value } = event.target;
    setInputText(value);
  }

  {/*adds new item to previous items in array*/}
  function addItem(){
    setItems(prevValue => {
      return [...prevValue, inputText];
    })
    {/*Resets input*/}
    setInputText('');
  }

  {/*Prevents the page from refershing and clearing the array*/}
  function handleSubmit(event){
    event.preventDefault();
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group input-group">
          <input className="form-control" type="text" placeholder="Add an item" value={inputText} onChange={handleChange} />
          { inputText ? <div className="input-group-append"><button className="btn btn-outline-secondary" type="submit" onClick={addItem}>Add
          </button></div> : null }
        </div>
      </form>
    </div>
)
}

export default Form;
