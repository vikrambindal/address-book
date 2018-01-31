import React, {Component} from 'react';
import { Label, Button } from 'react-bootstrap';
var AddPersonAcion = require("../actions/addPeopleAction");

class AddPeople extends React.Component {

    savePerson(event) {
        event.preventDefault(); 
        AddPersonAcion.createPerson({id:30, name: "Work"});
    }

    render() { 
        return (  
            <div className="container">
                <Label>Name</Label>
                <input />
                <Label>Contact</Label>
                <input />
                <Button onClick={this.savePerson}>Add</Button>
            </div>
        )
    }
}
 
export default AddPeople;