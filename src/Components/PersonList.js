import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    // Initial State
    state = {
        persons: [],
    };

    // Get request using component mounting via axios
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            // Since axios is promised base, we use .then() to pass a function
            .then(res => {
                console.log(res);
                // We set the state to the response data being returned
                this.setState({ persons: res.data });
            });
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => 
                    <li key={person.id}>
                        {person.name}
                    </li>
                )}
            </ul>
        )
    }
}