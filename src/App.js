import React, { Component } from "react";
import "./App.css";
import PeopleList from "./components/PeopleList";
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import AddPeople from "./components/AddPeople";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">My Address Book</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron/>
        <AddPeople/>
        <PeopleList/>
      </div>
    );
  }
}

export default App;
