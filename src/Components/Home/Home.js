import React, { useEffect, useState } from 'react';
import MainHeader from '../MainHeader/MainHeader';

const Home = () => {
          const [posts ,setPost] = useState([]);
          useEffect(() =>{
                    const url = 'https://jsonplaceholder.typicode.com/posts';
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setPost(data))
          },[])
          return (
                    <div>
                              <h2>Total Post : {posts.length}</h2>
                              {
                                        posts.map(post => <MainHeader post={post}></MainHeader>)
                              }
                    </div>
          );
};

export default Home;