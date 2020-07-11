import React, { Component } from "react";
import TaskList from "./TaskList";
import ToDoForms from "./ToDoForms";

class ToDo extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      currentToDo: "",
      isUpdating: false,
      indexBeingUpdated: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      currentToDo: event.target.value,
    });
  };

  addItem = (event) => {
    event.preventDefault();

    if (document.getElementsByTagName("input")[0].value !== "") {
      let { todos, currentToDo } = this.state;

      let list = todos.slice();
      list.push(currentToDo);

      // assign list to todo and reset text field after submitting form
      this.setState({
        todos: list,
        currentToDo: "",
      });
    }
  };

  clear = () => {
    this.setState({
      todos: [],
      currentToDo: "",
    });
  };

  delete = (index) => {
    const filteredItems = this.state.todos.filter((el, idx) => {
      return idx !== index;
    });

    this.setState({
      todos: filteredItems,
    });
  };

  update = (index) => {
    this.setState({
      isUpdating: true,
      indexBeingUpdated: index,
    });
  };

  updateFinished = index => {
    const { todos } = this.state;

    const inputField = document.getElementsByTagName("li")[index].firstElementChild;
    
    let list = todos.map((item, idx) => {
      if(idx === index) {
        if(inputField.value !== "") {
          let updatedItem = inputField.value;
          return updatedItem;
        }
      }
      return item;
    });

    this.setState({
      todos: list,
      isUpdating: false,
      indexBeingUpdated: null,
    });
  }

  render() {
    return (
      <div className="container">
        <ToDoForms
          addItem={this.addItem}
          clear={this.clear}
          currentToDo={this.state.currentToDo}
          handleChange={this.handleChange}
        />
        <TaskList
          todos={this.state.todos}
          isUpdating={this.state.isUpdating}
          indexBeingUpdated={this.state.indexBeingUpdated}
          updateFinished={this.updateFinished}
          deleteItems={this.delete}
          updateItems={this.update}
        />
      </div>
    );
  }
}

export default ToDo;
