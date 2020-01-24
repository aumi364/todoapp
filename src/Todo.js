import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
       constructor(props) {
              super(props);

              this.state = {
                     isEditing: false,
                     task: this.props.task,

              }
              this.handleRemove = this.handleRemove.bind(this)
              this.handleUpdate = this.handleUpdate.bind(this)
              this.handleChange = this.handleChange.bind(this)
              this.handleToggle = this.handleToggle.bind(this)
              this.handleCompletion = this.handleCompletion.bind(this)
       }
       handleRemove() {
              this.props.remove(this.props.id)
       }
       handleChange(evt) {
              this.setState({
                     [evt.target.name]: evt.target.value
              })

       }
       handleUpdate(evt) {
              evt.preventDefault();
              this.props.update(this.props.id, this.state.task)
              this.setState({
                     isEditing: false
              })
       }
       handleToggle() {
              this.setState({
                     isEditing: true
              })
       }
       handleCompletion(evt) {
              this.props.toggleCompletion(this.props.id)
       }
       handleRender() {
              let renderView;
              if (this.state.isEditing === false) {
                     renderView = (
                            < div className="Todo">
                                   <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                                          onClick={this.handleCompletion}
                                   >
                                          {this.props.task}
                                   </li>
                                   <div className="Todo-buttons">
                                          <button onClick={this.handleToggle}><i className="fas fa-pen" /></button>
                                          <button onClick={this.handleRemove}><i className="fas fa-trash" /></button>
                                   </div>


                            </div >
                     )
              }
              else {
                     renderView = (
                            <div className="Todo">
                                   <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                                          <input type="text"
                                                 name="task"
                                                 value={this.state.task}
                                                 onChange={this.handleChange}
                                          />
                                          <button>update</button>
                                   </form>
                            </div>
                     )
              }
              return renderView;
       }

       render() {

              return this.handleRender();

       }
}
