import React from 'react';
import * as ProjectActions from  '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';
import '../style/Main.css';

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
        const imageUrl = require('../data/mockthumb-2.png');
        return(
            <div className="row">
                <div className="col-md-12 main-placeholder">
                    <img src={imageUrl}></img>
                </div>
            </div>
        );
    }
}