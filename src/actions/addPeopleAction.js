var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");

var AddPeopleActions = {

    createPerson: function(person) {
        person = { contact: 10, name: "Test10"};

        console.log('Dispatching action for person create ' + JSON.stringify(person));

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_PERSON,
            data: person
        });
    }
};

module.exports = AddPeopleActions;