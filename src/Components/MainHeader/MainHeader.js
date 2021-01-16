import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';


import './MainHeader.css';
const MainHeader = (props) => {

          const {title,body,id} = props.post;

          const history = useHistory();
          const handleClick = (detailId) =>{
              history.push(`/details/${detailId}`);
          }
          return (
                    <div className="main-header">
                            <h2><span>POST ID</span> : {id}</h2>  
                            <h3><span>TITLE</span> : {title}</h3>  
                            <p><span>BODY</span> : {body}</p>
                            <br/>
                            <Button onClick={ () => handleClick(id)} variant="contained" color="primary">See more</Button>
                            
                    </div>
          );
};

export default MainHeader;