import React, { useState } from 'react';
import './App.css';
import { TodoForm } from '.././Todo/TodoForm';
import { TodoList } from '.././Todo/TodoList';
// import  interfaces  from '../../utils/interfaces';

type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type EditTodo = (todoToEdit: Todo) => void;

type Todo = {
  text: string;
  complete: boolean;
}

type ToggleComplete = (selectedTodo: Todo) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
}

function Todo() {
  const [todos, setTodos] = useState<Array<typeof Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {                                               
        return { ...todo, complete: !todo.complete };
      }                                                                              
      return todo;                                                                                        
    });                                                                                
                                                                                                           
    setTodos(updatedTodos);                                                                
  };

  const addTodo: AddTodo = newTodo => {                 
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }                                                                        
  };

  const removeTodo: RemoveTodo = todoToRemove => {
    let updatedTodos: Array<Todo> = todos.filter(todo => todo.text != todoToRemove.text);
    setTodos(updatedTodos);
  }
                                                                                    
  const editTodo: EditTodo = todoToEdit => {
    let todoToUpdateIndex: number = todos.findIndex(todo => todo.text == todoToEdit.text);
    console.log(todoToUpdateIndex);
  }
                                                                                             
  return (
    <div className="todo-app">                                                                             
      <header>                       
        <h1>                                                                                                           
        Todo App                                              
        </h1>                      
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo} editTodo={editTodo}/>
    </div>
  );
};

export default Todo;