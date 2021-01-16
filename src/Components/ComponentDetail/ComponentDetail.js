import React from 'react';

import './ComponentDetail.css';
const ComponentDetail = (props) => {
          // console.log(props);
          const {name,email,body,postId} = props.comment;
          return (
                    <div>
                             
                              <div className="comment-body">
                                        <h3>POST ID : {postId}</h3>
                                        <h4>NAME : {name}</h4>
                                        <p>EMAIL : {email}</p>
                                        <p>BODY : {body}</p>     
                              </div>
                    </div>
          );
};

export default ComponentDetail;