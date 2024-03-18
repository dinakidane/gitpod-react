import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
    }

 
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)

    }

    render() {
        return (
        <div>
            <h2>Please fill out the form:</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input 
                        id='id-name' 
                        name='name' 
                        type='text'
                        ref={this.inputName} />
                </div>

                <div>
                    <label htmlFor = 'id-category'>Query Category:</label>
                    <select 
                        id='id-category' 
                        name='category'>

                        <option value='website'>Website Issue</option> 
                        <option value='order'>Order Issue</option>
                        <option value='general'>General Inquiry</option>                   
                    </select>
                    <input type='submit' value='Submit' />
                </div>

                <div>
                <label htmlFor = 'id-comments'>Comments:</label>
                <textarea 
                    id='id-comments' 
                    name='comments'
                />
                </div>
            </form>
        </div>
        )
    }
}

export default ControlledForm