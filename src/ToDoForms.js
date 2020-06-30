import React from 'react';

const ToDoForms = props => {
  let {addItem, handleChange, clear, currentToDo} = props;

  return (
    <form onSubmit={event => addItem(event)}>
       <label htmlFor="taskName"> Task Name: </label>
       <input onChange={event => handleChange(event)} value={currentToDo} name="taskName" type="text" placeholder="Add todo here!"/>
       <button type="submit"> Add Task </button>
       <button type="clear" onClick={clear}> Clear List </button>
    </form>
  );
}

export default ToDoForms;