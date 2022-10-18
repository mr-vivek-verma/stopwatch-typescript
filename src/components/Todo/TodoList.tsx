import React from "react";
import { TodoListItem } from './TodoListItem';

type RemoveTodo = (todoToRemove: Todo) => void;
type EditTodo = (todoToEdit: Todo) => void;
type ToggleComplete = (selectedTodo: Todo) => void;
type Todo = {
  text: string;
  complete: boolean;
}

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo, editTodo }) => {
  return (
    <ul>
     {todos.map(todo => (
       <TodoListItem                                                                        
          key={todo.text}                                                  
          todo={todo}                                                        
          toggleComplete={toggleComplete}                                                                                           
          onRemoveTodo={onRemoveTodo}                                   
          editTodo={editTodo}                        
        />                                                          
     ))}
    </ul>
  );                                                                   
};