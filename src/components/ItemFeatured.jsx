import React from 'react';
import '../style/Featured.css';

export default class ItemFeatured extends React.Component{


    render (){
        return (
            <div className="col-sm-4 col-xs-8 col-centered">
                <div className="block-wrapper">
                    <div className="featured-block">
                        <span>{this.props.data.name}</span>
                    </div>
                </div>
            </div>
        );
    }
}

//