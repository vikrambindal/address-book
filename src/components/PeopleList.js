import React, { Component } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";

var PersonStore = require('../stores/personStore');

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: "Chander Bing" },
        { id: 2, name: "Ross Gellar" },
        { id: 3, name: "Tyrion Lanister" },
      ],
    };

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    console.log("PeopleList: componentWillMount");
    PersonStore.addChangeListener(this._onChange);
  }

  _onChange() {
    console.log('PeopleList: something changed in PersonStore');
    this.setState({persons: PersonStore.getAllPeople()});
  }

  render() {
    return (
      <div>
        <h2>List of People</h2>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person => (
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>
                  <ButtonGroup bsSize="small">
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PeopleList;
