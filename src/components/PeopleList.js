import React, { Component } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";

var PersonStore = require('../stores/personStore');

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {};

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    console.log("PeopleList: componentWillMount");
    PersonStore.addChangeListener(this._onChange);
    this.setState({persons: PersonStore.getAllPeople()});
  }

  componentWillUnmount() {
    console.log("PeopleList: componentWillUnmount");
    PersonStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    console.log('PeopleList: something changed in PersonStore');
    this.setState({persons: PersonStore.getAllPeople()});
  }

  render() {

    var contentDisplay = null;
    if (!this.state.hasOwnProperty('persons') || this.state.persons.length == 0 ){
        contentDisplay =  <p>You currently do not have any contacts</p>;
    } else {
        contentDisplay =  <Table striped bordered condensed hover>
                            <thead>
                              <tr>
                                <th>Contact</th>
                                <th>Name</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.persons.map(person => (
                                <tr>
                                  <td>{person.contact}</td>
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
                        </Table>;
    }  

    return (
      <div>
        <h2>List of People</h2>
        {contentDisplay}
      </div>
    );
  }
}

export default PeopleList;
