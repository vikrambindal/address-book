var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = "change";

var _persons = [];

var PersonStore = assign({}, EventEmitter.prototype, {

        addChangeListener: function(callback) {
            console.log('PersonStore: addChangeListener');
            this.on(CHANGE_EVENT, callback);
        },

        removeChangeListener: function(callback) {
            console.log('PersonStore: removeChangeListener');
            this.removeListener(CHANGE_EVENT, callback);
        },

        emitChange: function() {
            console.log('PersonStore: emitChange');
            this.emit(CHANGE_EVENT); 
        },

        getAllPeople: function() {
            return _persons;
        },
        
        getPersonById(id) {
            return _.find(_persons, {contact: id});
        }
});

Dispatcher.register(function(action){

    //Get called whenever any action is dispatched
    switch(action.actionType) {
        case ActionTypes.CREATE_PERSON:
            console.log('PersonStore handling ' + action.actionType + ' , data' + JSON.stringify(action.data));
            _persons.push(action.data);
            PersonStore.emitChange();
            break;
        default:
            console.log('PersonStore rcvd action ' + action.actionType);
            break;
    }

});

module.exports = PersonStore;