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
     
     if(document.getElementsByTagName("input")[0].value !== "") {
        let {todos, currentToDo} = this.state;
     
        let list = todos.slice();
        list.push(currentToDo);
     
        this.setState({
        todos: list,
        });
      }
      
     // reset text field after submitting form
     document.getElementsByTagName("input")[0].value = "";
   }
   
   clear = () => {
     this.setState({
       todos: [],
       currentToDo: "",
     });
   }

   delete = event => {
      let {todos} = this.state;
      
      let array = Array.from(document.getElementsByName("delete_btn"));

      let index = array.indexOf(event.target);
      
      let list = todos.slice();
      
      list.splice(index, 1);

      this.setState({
        todos: list,
      });
   }

   render() {
      let {todos} = this.state;
      
      return (
        <div className='container'>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName"> Task Name: </label>
            <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here!"/>
            <button type="submit"> Add Task </button>
            <button type="clear" onClick={this.clear}> Clear List </button>
          </form>
             <ul> 
              {todos.map(todo => 
               <li> {todo}  <button name="delete_btn" type="delete" onClick={this.delete} item={todo}> delete </button> </li>
              )}
            </ul>
        </div>
      );
   }
}

export default ToDo;
