import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './TodoList.css'


export default class TodoList extends Component {
       constructor(props) {
              super(props);
              this.state = {
                     todos: JSON.parse(window.localStorage.getItem("todos") || "[]")
              }
              this.addTodo = this.addTodo.bind(this)
              this.removeTodo = this.removeTodo.bind(this)
              this.updateTodo = this.updateTodo.bind(this)
              this.toggleCompletion = this.toggleCompletion.bind(this)
       }
       addTodo(todo) {
              this.setState({
                     todos: [...this.state.todos, todo]
              }, () => window.localStorage.setItem("todos", JSON.stringify(this.state.todos)));

       }
       removeTodo(id) {
              this.setState({
                     todos: this.state.todos.filter(todo => (todo.id !== id))
              }, () => window.localStorage.setItem("todos", JSON.stringify(this.state.todos)))

       }
       updateTodo(id, updatedTask) {
              const updatedTodos = this.state.todos.map(todo => {
                     if (todo.id === id) {
                            return { ...todo, task: updatedTask }
                     }
                     return todo;
              })
              this.setState({ todos: updatedTodos }, () => window.localStorage.setItem("todos", JSON.stringify(this.state.todos)))


       }
       toggleCompletion(id) {
              const updatedTodos = this.state.todos.map(todo => {
                     if (todo.id === id) {
                            return { ...todo, completed: !todo.completed }
                     }
                     return todo;
              })
              this.setState({ todos: updatedTodos })
       }

       render() {
              const todos = this.state.todos.map(todo => (
                     <Todo id={todo.id}
                            key={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            remove={this.removeTodo}
                            update={this.updateTodo}
                            toggleCompletion={this.toggleCompletion}
                     />
              ))
              return (
                     <div className="TodoList">

                            <h1>Todo List! <span>A simple React Todo List App</span></h1>

                            <ul>
                                   {todos}
                            </ul>
                            <TodoForm addTodo={this.addTodo} />

                     </div>
              )
       }
}
