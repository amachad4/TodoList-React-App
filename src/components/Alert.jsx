import React from "react";

function Alert(){
  return(
    <div className="alert alert-warning" role="alert">
      <p>
        To-do List input field cannot be left blank! Please, enter a to-do item.
      </p>
    </div>
  )
};

export default Alert;
