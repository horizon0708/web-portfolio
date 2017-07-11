//https://codepen.io/danbuda/post/a-react-navbar-component
//https://hackernoon.com/using-sass-with-create-react-app-without-ejecting-b5f4f827ed9e

import React from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends React.Component{

    render(){
        return(
            <navbar>
                <nav>
                    <div>
                    <div className="wideDiv">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    </div>
                    <div className="navNarrow">
                    <i className="fa fa-bars fa-2x"></i>
                    <div className="narrowLinks">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    </div>
                </nav>
            </navbar>
        );
    }
}