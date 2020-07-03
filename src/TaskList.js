import React from 'react';

const TaskList = props => {
  let {todos, deleteItems, updateItems} = props;

  return (
    <ul> 
    {todos.map((todo,index) => 
     <li key={index}> {todo} <button type="delete" onClick={() => deleteItems(index)}> delete </button> <button type="button" onClick={updateItems()}> update </button> </li>
    )}
   </ul>
  );
}

export default TaskList;