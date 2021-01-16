import React from 'react';

const NoMatch = () => {
          const styles ={
                    color: 'red',
                    textAlign: 'center',
                    marginTop: '200px'
          }
          return (
                    <div style={styles}>
                              <h1>Route not found</h1>
                              <h1>error !!!</h1>
                    </div>
          );
};

export default NoMatch;