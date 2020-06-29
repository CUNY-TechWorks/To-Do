import React, {Component} from 'react';

class ToDo extends Component {
   constructor() {
     super();
     
     this.state = {
       todos: [],
       currentToDo: "",
     }
   }
   
   handleChange = event => {
      this.setState({
        currentToDo: event.target.value,
      });
   }

   addItem = event => {
     event.preventDefault(); 

     let {todos} = this.state;
     
     let list = todos.slice();
     list.push(this.state.currentToDo);

     this.setState({
       todos: list,
     });
     
     // reset text field
     document.getElementsByTagName("input")[0].value = "";
   }

   render() {
      let {todos} = this.state;
      
      return (
        <div className='container'>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName"> Task Name: </label>
            <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here!"/>
            <button type="submit"> Add Task </button>
            <ol>
              {todos.map(todo =>
                <li> {todo} </li> 
              )}
            </ol>
          </form>
        </div>
      );
   }
}

export default ToDo;
