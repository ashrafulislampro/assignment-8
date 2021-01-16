import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';
const Post = () => {
          const{detailId} = useParams();
          const [postItems, setPostItem] = useState({});
          useEffect(() =>{
                    const url = `https://jsonplaceholder.typicode.com/posts/${detailId}`;
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setPostItem(data))
          },[])
          return (
                    <div className="post-item">
                              <h2>POST ID : {postItems.id}</h2>
                              <h2>TITLE : {postItems.title}</h2>
                              <p>BODY : {postItems.body}</p>
                             
                    </div>
          );
};

export default Post;