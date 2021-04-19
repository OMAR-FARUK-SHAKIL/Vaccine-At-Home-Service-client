import React from 'react';

const Review = (props) => {
    const {name,title,location,description} = props.review;
    return (
        <div className="card col-md-3 col-sm-6 col-xs-12 text-center border border-info ms-5 p-2">
            <h4>{name}</h4>
            <h5 className="mt-3 mb-3">From-{location}</h5>
            <br/><br/>
            <h3>{title}</h3>
            <p className="text-secondary"> {description}</p>
        </div>
    );
};

export default Review;