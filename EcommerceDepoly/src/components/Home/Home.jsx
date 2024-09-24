import React, { useState, useEffect } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import data from '../data.json';

export const renderStars = (num) => {
  const Stars = 5;
  return [...Array(Stars)].map((_, index) => (
    <span key={index} className={`star ${index < num ? 'filled' : 'unfilled'}`}>
      ★
    </span>
  ));
};

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    "https://cdn.shopify.com/s/files/1/0587/3080/7460/files/whatmore_tn_6cfebf49-336f-4f8c-9e7b-a10a06649277.mp4?v=1717572591",
    "https://cdn.shopify.com/s/files/1/0587/3080/7460/files/whatmore_tn_4f5793bd-06f7-40fd-b67c-e0e6a5403d80.mp4?v=1717572592",
    "https://cdn.shopify.com/s/files/1/0587/3080/7460/files/whatmore_tn_bddd16b0-d0d4-46dd-88c6-ca6f47fa03d7.mp4?v=1717485438",
    "https://cdn.shopify.com/s/files/1/0587/3080/7460/files/whatmore_tn_b08ae0ec-55d7-4262-8a2c-a4964383fa27.mp4?v=1717485447",
    "https://cdn.shopify.com/s/files/1/0587/3080/7460/files/whatmore_tn_d6f51688-1e67-44b9-858b-0245ee2b538c.mp4?v=1717485448",
    "https://cdn.shopify.com/s/files/1/0587/3080/7460/files/whatmore_tn_e8480c0c-0b0b-46d2-afbb-b42245903acf.mp4?v=1723030625"
  ];

  return (
    <div id="main_div">
      <div id="image_holder">
        <div id="content">
          <span id="small">-SUMMER-</span>
          <span id="large">SALE</span>
          <div id="box">
            <span id="boxwork">UPTO 70% OFF</span>
          </div>
        </div>
        <NavLink to={`/product`}>
          <img id="myimg" src="https://faisalfabrics.pk/cdn/shop/files/charizma_baner_Main_Banner.jpg?v=1725349762" alt="" />
        </NavLink>
      </div>

      <div id="lower_div">
        <div id="heading_holder">
          <h1 className='headingss'>TRENDING PRODUCTS</h1>
        </div>
        <div id="upper_product_holder">
          <div id="product_holder">
            {data.map((element) => {
              if (element.rating === 5) {
                const [currentImage, setCurrentImage] = useState(element.image1);
                return (
                  <NavLink key={element.name} to={`/product/${element.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="image_box">
                      <img
                        className="images"
                        onMouseOver={() => setCurrentImage(element.image2)}
                        onMouseLeave={() => setCurrentImage(element.image1)}
                        src={currentImage}
                        alt={element.name}
                      />
                      <div className="info">
                        <span className="name">{element.name}</span><br/>
                        <span className="price">Price: {element.price}</span><br/>
                        <span className="rating">Rating: {renderStars(element.rating)}</span>
                      </div>
                    </div>
                  </NavLink>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div id="videoholder">
          {videos.map((element, index) => (
            <video key={index} autoPlay loop muted>
              <source src={element} type="video/mp4" />
            </video>
          ))}
        </div>

        <div id="new_arrivals">
          
          <div id="upper_product_holder">
          <div id="heading_holder">
            <h1 className='headingss'>NEW ARRIVALS</h1>
          </div>
            <div id="product_holder">
              {data.map((element) => {
                if (element.newArrival) {
                  const [currentImage, setCurrentImage] = useState(element.image1);
                  return (
                    <NavLink key={element.name} to={`/product/${element.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="image_box">
                        <img
                          className="images"
                          onMouseOver={() => setCurrentImage(element.image2)}
                          onMouseLeave={() => setCurrentImage(element.image1)}
                          src={currentImage}
                          alt={element.name}
                        />
                        <div className="info">
                          <span className="name">{element.name}</span><br/>
                          <span className="price">Price: {element.price}</span><br/>
                          <span className="rating">Rating: {renderStars(element.rating)}</span>
                        </div>
                      </div>
                    </NavLink>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
