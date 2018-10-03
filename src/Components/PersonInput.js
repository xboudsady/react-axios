import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
    // Initial State
    // Set it to an empty string
    state = {
        id: 0,
    };

    handleChange = event => {
        // Any value we type in the input will change the state above
        this.setState({ id: event.target.value });
    };


    // Create a form to handle a submission
    handleSubmit = event => {
        // Prevents page from loading
        event.preventDefault();

        // Pass in the same URL along with with 'payload' 
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                // log our response
                console.log(res);
                // log our response data
                console.log(res.data);
            })
    }

    render() {
        return (
            // Handles the submisssion
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person ID:
                    <input type="number" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">Delete</button>
            </form>
        )
    }
}