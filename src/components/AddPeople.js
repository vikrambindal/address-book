import React from 'react';
var PersonAction = require("../actions/peopleAction");

class AddPeople extends React.Component {

    savePerson(event) {
        event.preventDefault(); 
        
        var personName = document.getElementById('personNameTxt').value;
        var contact = document.getElementById('personContactTxt').value;
        PersonAction.createPerson({contact: contact, name: personName});
    }

    render() { 
        return (  
            <div className="container">
                <form className="form-inline">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control-plaintext" id="personNameTxt"/>
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="personContactTxt"/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.savePerson}>Add</button>
                </form>
            </div>
        )
    }
}
 
export default AddPeople;