import React from 'react';
import * as ProjectActions from  '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';
import '../style/Featured.css';
import ItemFeatured from './ItemFeatured';

export default class Featured extends React.Component {

    render(){
        const featuredItem = this.props.featured.map(x => {
            return (
                <ItemFeatured data={x}/>
            );
        })
        return (
            <div>{featuredItem}</div>
        );
    }

}