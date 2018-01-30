import React, { Component } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: "Chander Bing" },
        { id: 2, name: "Ross Gellar" },
        { id: 3, name: "Tyrion Lanister" },
      ],
    };
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
