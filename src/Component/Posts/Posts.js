import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const {userId,title,id} = props.post;
    const postStyle = {
        border:'1px solid red',
        boxShadow:'3px 5px 10px',
        margin:'20px',
        padding:'10px',
        textAlign:'center'
    }
    const linkStyle = {
        textDecoration:'none'
    }
    return (
        <div style={postStyle}>
            <div style={{
                border:'1px solid blue',
                borderRadius:'100px'
            }}>
                <p>UserId: {userId}</p>
                <p>ID: {id}</p>
            </div>
            <h3>Title: {title} </h3>
            <Link style={linkStyle} to={`/post/${id}`}>
            <Button style={{fontWeight:'bold'}} variant="contained">See More</Button>
            </Link>
            
        </div>
    );
};

export default Posts;