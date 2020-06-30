import React from 'react';

const TaskList = props => {
  let {todos, deleteItems} = props;

  return (
    <ul> 
    {todos.map((todo,index) => 
     <li key={index}> {todo} <button type="delete" onClick={() => deleteItems(index)}> delete </button> </li>
    )}
   </ul>
  );
}

export default TaskList;