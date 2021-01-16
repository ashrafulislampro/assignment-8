import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComponentDetail from './ComponentDetail/ComponentDetail';
import Post from './Posts/Post';

const Component = () => {
          const {detailId} = useParams();
          const [comments, setComments] = useState([]);
          useEffect(() =>{
                    const url = `https://jsonplaceholder.typicode.com/comments?postId=${detailId}`;
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setComments(data))
          },[])
          return (
                    <div>
                              <h1>POST ID-{detailId}</h1>
                              <div>
                                      <Post></Post> 
                              </div>
                              <h1>COMMENTS</h1>
                              <div>
                                        {
                                                  comments.map(comment => <ComponentDetail comment={comment}></ComponentDetail>)
                                        }
                              </div>
                             
                    </div>
          );
};

export default Component;