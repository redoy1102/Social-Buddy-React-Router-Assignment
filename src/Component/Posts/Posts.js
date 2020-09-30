import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const {title,id} = props.post;
    return (
        <div>
            <h3>Title: {title} </h3>
            <p>ID: {id} </p>
            <Link to="/about">
            <Button variant="contained">Show Detail</Button>
            </Link>
            
        </div>
    );
};

export default Posts;