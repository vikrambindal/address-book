import React, {Component} from 'react';
import { Label, Button } from 'react-bootstrap';
var AddPersonAcion = require("../actions/addPeopleAction");

class AddPeople extends React.Component {

    savePerson(event) {
        event.preventDefault(); 
        AddPersonAcion.createPerson({id:30, name: 'Vikram'});
    }

    render() { 
        return (  
            <div className="container">
                <Label>Name</Label>
                <input type="text"/>
                <Label>Contact</Label>
                <input type="text"/>
                <Button onClick={this.savePerson}>Add</Button>
            </div>
        )
    }
}
 
export default AddPeople;