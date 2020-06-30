import React, {Component} from 'react';
import TaskList from './TaskList';

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

   delete = index => {
      const filteredItems = this.state.todos.filter((el, idx) => {
        return idx !== index;
      });
      
      this.setState({
         todos: filteredItems,
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
          <TaskList todos={this.state.todos} deleteItems = {this.delete}/>
        </div>
      );
   }
}

export default ToDo;
