import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const {title, body} = post;

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setPost(data))
  },[])

  const PostDetailStyle = {
    border:'1px solid red',
    boxShadow:'3px 5px 10px',
    margin:'20px',
    padding:'10px',
    textAlign:'center'
  }
    return (
        <div style={PostDetailStyle}>
            <h1>Id: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetail;