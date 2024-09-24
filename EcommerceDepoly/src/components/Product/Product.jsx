import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { renderStars } from '../Home/Home';
import { NavLink } from 'react-router-dom';

import './Product.css';

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [item, setItem] = useState(data || []);
  const [itemCount, setItemCount] = useState(4);

  const itemCountIncreament = () => {
    if (itemCount < 12) {
      setItemCount(itemCount + 4);
    }
  };

  return (
    <>
      <div id='upper'>
        <h1 id='heading'>Products</h1>
        <div id='main_box'>
          {item && item.length > 0 && item != null ?  (
            item.slice(0, itemCount).map((element, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/product/${element.name}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className='image_box'>
                    <img
                      className='images'
                      style={{ marginTop: '100px' }}
                      src={`${element.image1}`}
                      alt={element.name}
                    />
                    <span className='name'>{element.name}</span>
                    <span className='name'>Price: {element.price}</span>
                    <span className='rating'>Rating : {renderStars(element.rating)}</span>
                  </div>
                </NavLink>
              );
            })
          ) : (
            <p>No products available</p> 
          )}
        </div>
        <div style={{ textAlign: 'center' }}>
          {itemCount < item.length ? (
            <button className='loadbtn' onClick={itemCountIncreament}>Load More</button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Product;
