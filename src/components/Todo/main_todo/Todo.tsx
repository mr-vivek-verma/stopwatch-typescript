import React, { FC, useState } from "react";
import { ITodo } from "../../../utils/interfaces";
import TodoForm from "../TodoForm/index";
import TodoList from "../TodoList/index";
import "../main_todo/Todo.css"


const Todo: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([
  
  ]);

  const addTodo = (todo: string): void => {
    if (!todo) {
      alert("please add todo!");
      return;
    }
    const data: ITodo = {
      id: todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      completed: false,
    };
    setTodoList([...todoList, data]);
    alert("Todo added successfully!");
  };

  const completeTodo = (id: number): void => {
    setTodoList(
      todoList.map(
        (todo: ITodo): ITodo =>
          todo.id === id
            ? Object.assign(todo, { completed: true }) && todo
            : todo
      )
    );
    alert("Nice job!");
  };

  const deleteTodo = (id: number): void => {
    setTodoList(
      todoList.filter((todo: ITodo): ITodo | null =>
        todo.id !== id ? todo : null
      )
    );
    alert("Todo deleted successfully!");
  };

  return (
    <div className="app">
      <div className="container">
        <TodoForm addTodo={addTodo} />
        {/* <AddBtn addTask={addTodo}/> */}
        <div className="todoList">
          {todoList.map((todo: ITodo, key: number) => (
            <TodoList
              key={key}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;