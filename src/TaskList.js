import React from 'react';

const TaskList = props => {
  const {todos, isUpdating, updateFinished, indexBeingUpdated, deleteItems, updateItems} = props;

  return (
    <ul> 
    {todos.map((todo,index) => { 
       if(isUpdating && indexBeingUpdated === index) {
         return <li key={index}> <input type="text" defaultValue={todo}/> <button type="update" onClick={() => { updateFinished(index) }}> update </button> </li>
       }
       return <li key={index}> {todo} <button type="delete" onClick={() => deleteItems(index)}> delete </button> <button type="update" onClick={() => updateItems(index)}> update </button> </li>
      })}
   </ul>
  );
}

export default TaskList;