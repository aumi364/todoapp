import React, { Component } from 'react'
import uuid from 'uuid/v4'


export default class TodoForm extends Component {
       constructor(props) {
              super(props);
              this.state = {
                     task: ""
              }
              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
       }
       handleChange(evt) {
              this.setState({
                     [evt.target.name]: evt.target.value
              })
       }
       handleSubmit(evt) {
              evt.preventDefault();
              if (this.state.task !== "") {
                     const newState = { ...this.state, id: uuid(), completed: false }
                     this.props.addTodo(newState)
              }

              this.setState({
                     task: ""
              })
       }

       render() {
              return (
                     <div>

                            <form className="Todo-edit-form" onSubmit={this.handleSubmit}>
                                 
                                   <input id="task"
                                          name="task"
                                          value={this.state.task}
                                          placeholder="New Todo"
                                          onChange={this.handleChange}
                                   />
                                   <button>submit</button>
                            </form>
                     </div>
              )
       }
}
