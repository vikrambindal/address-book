import React, {Component} from 'react';
import { Label, Button } from 'react-bootstrap';
var AddPersonAcion = require("../actions/addPeopleAction");

class AddPeople extends React.Component {

    savePerson(event) {
        event.preventDefault(); 
        AddPersonAcion.createPerson({contact:30, name: 'Vikram'});
    }

    render() { 
        return (  
            <div className="container">
                <form class="form-inline">
                    <div class="form-group">
                        <label for="personName">Name</label>
                        <input type="text" className="form-control-plaintext" id="personNameTxt"/>
                    </div>
                    <div class="form-group">
                        <label for="personContact">Contact</label>
                        <input type="text" className="form-control" id="personContactTxt"/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.savePerson}>Add</button>
                </form>
            </div>
        )
    }
}
 
export default AddPeople;