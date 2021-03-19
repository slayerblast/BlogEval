import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TaskService from "../../services/task.service";
import Task from "../../components/Task";
import {UserService} from "../../services/user.service";

export default class TaskList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    async componentDidMount() {
        let todos = await TaskService.list();
        this.setState({todos: todos});
    }

    render() {
        let {todos} = this.state;
        return <div className="container">
            <h1>Liste des taches</h1>
            <Link className="btn btn-primary" to="/articles/ajouter">Ajouter une tache</Link>
            <div className="row">
                {todos.map(task => {
                    return <div className="col-md-4">
                        <Task task={task}/>
                    </div>
                })}
            </div>
        </div>
    }
}
