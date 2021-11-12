import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (props) => {
    const { name, title, location, description } = props.review;
    return (
        // <div className="card col-md-3 col-sm-6 col-xs-12 text-center border border-info ms-5 p-2">
        //     <h4>{name}</h4>
        //     <h5 className="mt-3 mb-3">From-{location}</h5>
        //     <br/><br/>
        //     <h3>{title}</h3>
        //     <p className="text-secondary"> {description}</p>
        // </div>
        <Card style={{ width: '18rem' }} border="info">
        {/* <Card className="card col-md-3 col-sm-6 col-xs-12 text-center border border-info ms-5 p-2"> */}
            <Card.Body>
                <Card.Title className="text-brand bold fw-bold text-info mb-4">{title}</Card.Title>
                {/* <Card.subtitle>{name}</Card.subtitle> */}
                <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">From-{location}</Card.Subtitle>
                <Card.Text className="mt-3 mb-3">
                {description}
                </Card.Text>
                <Card.Link href="#">Details</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Review;