var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");

var AddPeopleActions = {

    createPerson: function(person) {
        person = { id: 10, name: "Test10", number: "3424242"};

        console.log('Dispatching action for person create ' + person);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_PERSON,
            data: person
        });
    }
};

module.exports = AddPeopleActions;