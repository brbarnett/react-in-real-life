import React from 'react';
import peopleService from '../services/peopleService';

class PeopleTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { people: [] };
    }

    componentDidMount() {
        peopleService.getPeople()
            .then((data) => {
                this.setState({ people: data });
            });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th width="50">ID</th>
                        <th width="100">Name</th>
                        <th width="150">Hometown</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.people.map((person) => {
                            return (
                                <tr key={ person.id }>
                                    <td>{ person.id }</td>
                                    <td>{ person.name }</td>
                                    <td>{ person.hometown }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

module.exports = PeopleTable;