import React from 'react';
import '../style/Featured.css';

class ItemFeatured extends React.Component{


    render (){
        return (
            <div className="col-md-3">
                <div className="featured-block">
                    {this.props.data.name}
                </div>
            </div>
        );
    }
}