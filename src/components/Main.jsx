import React from 'react';
import * as ProjectActions from  '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';
import Projects from '../data/Projects.json';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state ={
            projects: ""
        }
    }

    componentWillMount(){
        ProjectActions.loadData();
    }

    render(){
        return(
            <div></div>
        );
    }
}