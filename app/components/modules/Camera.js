import React from 'react';

const Camera = ({data}) => {
    
    return (
    <>
    {
        data ? 
        data.map((product)=>(
          <div key={product.id}>
            <img
          src={product.files}
          alt={product.name}
          className="object-fill "
        />
          </div>
        ))
        : []
       }
    </>
    );
};

export default Camera;