import React, {Component} from 'react';
import TaskList from './TaskList';
import ToDoForms from './ToDoForms';

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
     this.state.currentToDo = "";
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

   update = () => {
      
   }

   render() {
      return (
        <div className='container'>
          <ToDoForms addItem={this.addItem} clear={this.clear} currentToDo={this.state.currentToDo} handleChange={this.handleChange}/>
          <TaskList todos={this.state.todos} deleteItems = {this.delete}/>
        </div>
      );
   }
}

export default ToDo;
