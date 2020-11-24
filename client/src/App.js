import React from "react";
import "./App.css";
import Form from "./Form";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Container, AppBar, Button, Toolbar } from "@material-ui/core";
import Stats from "./Stats";

function App() {
  return (
    <Container>
      <Router>
        <AppBar position="static">
          <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', margin: "5px" }}>
            <Button variant="contained" color="inherit">Создать новую</Button>
          </Link>
          <Link to="/stats" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="inherit">Статистика</Button>
          </Link >
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
