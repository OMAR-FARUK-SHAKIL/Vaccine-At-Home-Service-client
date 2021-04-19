import React from 'react';

const BlogPost = (props) => {
    const {title, description, author, authorImg , date,blogLink} = props.blog;
    return (
        <div className="card shadow-sm mt-5">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3 rounded-circle" src={authorImg} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}<a target="_blank" href={blogLink}> ...see Details</a></p>
            </div>
            
       </div>
    );
};

export default BlogPost;