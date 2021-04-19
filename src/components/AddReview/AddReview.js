import React, {  useState } from 'react';

import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
     const [reviewInfo, setReviewInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...reviewInfo };
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo);
    }

    const handleSubmit = () => {  
        console.log("info",reviewInfo);

        fetch('http://localhost:5500/addReview', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <main>
           <div className="col-md-2 col-sm-4 col-12">
                    <Sidebar></Sidebar>
            </div>
       
        <div className="col-md-10 col-sm-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Submit your Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Location</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Enter your location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Review Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter a review title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="write in details" />
                    </div><br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        </main>
    );
};

export default AddReview;