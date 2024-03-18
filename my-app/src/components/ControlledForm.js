import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
        <div>
            <h2>Please fill out the form:</h2>
            <form>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input 
                        value = {this.state.name} 
                        onChange={this.handleNameChange}
                        id='id-name' 
                        name='name' 
                        type='text' />
                </div>

                <div>
                    <label htmlFor = 'id-category'>Query Category:</label>
                    <select id='id-category' name='category'>
                        <option value='website'>Website Issue</option> 
                        <option value='order'>Order Issue</option>
                        <option value='general'>General Inquiry</option>                   
                    </select>
                    <input type='submit' value='Submit' />
                </div>

                <div>
                <label htmlFor = 'id-comments'>Comments:</label>
                <textarea id='id-comments' name='comments' />
                </div>
            </form>
        </div>
        )
    }
}

export default ControlledForm