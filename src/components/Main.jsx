import React from 'react';
import * as ProjectActions from  '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';
import '../style/Main.css';

import Featured from './Featured';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state ={
            projects: "",
            featured: ""
        }
    }

    componentWillMount(){
        ProjectStore.on("change", ()=>{
            this.setState({
                projects: ProjectStore.getAll(),
                featured: ProjectStore.getFeatured()
            });
        })

        ProjectActions.loadData();
    }

    render(){
        const imageUrl = require('../data/mockthumb-2.png');
        return(
            <div className="row">
                <div className="col-md-8 col-sm-11 main-placeholder main-col-centered">
                    <Featured featured={this.state.featured} />
                </div>
            </div>
        );
    }
}