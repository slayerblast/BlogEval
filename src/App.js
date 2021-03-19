import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./views/Todos/Tasklist";
import Taskadd from "./views/Todos/Taskadd";
import TaskDetails from "./views/Todos/Taskdetails";
import TaskUpdate from "./views/Todos/Taskupdate";
import UserList from "./views/Users/UserList";


//import UserDetails from "./views/Users/UserDetails";
//import UserAdd from "./views/Users/UserAdd";


export default class App extends Component{

    render() {
        return <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/utilisateurs" component={UserList}/>
            <Route exact path="/taches" component={Taskadd} />
            <Route exact path="/taches/:id" component={TaskDetails} />
            <Route exact path="/taches/:id/modifier" component={TaskUpdate} />
          </Switch>
          <Footer/>
        </BrowserRouter>
    }
}
