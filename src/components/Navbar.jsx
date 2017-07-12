//https://codepen.io/danbuda/post/a-react-navbar-component
//https://hackernoon.com/using-sass-with-create-react-app-without-ejecting-b5f4f827ed9e

import React from 'react';
import '../style/Navbar.css';
import ReactDOM from 'react-dom';

export default class Navbar extends React.Component{

    render(){
        return(
            <navbar>
                <nav>
                    <div className="wide-div">
                        <a className="nav-link">Works</a>
                        <a className="nav-link">About</a>
                        <a className="nav-link">Contact me</a>
                    </div>
                </nav>
            </navbar>
        );
    }
}