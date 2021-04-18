import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
     const [reviewInfo, setReviewInfo] = useState({});
   
    const handleBlur = e => {
        const newInfo = { ...reviewInfo };
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo);
    }

    const handleSubmit = () => {
        // const formData = new FormData()
        console.log("info",reviewInfo);
        
        // formData.append('file', file);
        // formData.append('name', info.name);
        // formData.append('email', info.email);
        // console.log("formdata=",formData);

        fetch('http://localhost:5500/addAdmin', {
            method: 'POST',
            // body: formData
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
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Submit your Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Review Title</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

export default AddReview;