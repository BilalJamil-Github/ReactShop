import React from 'react';
import './About.css';
import img1 from '../images2/ourMission.jpg';
import img2 from '../images2/news-letter.png';
import img3 from '../images2/cart-banner.jpg';
import img4 from '../images2/products-banner.jpg';
import testiimg1 from '../images2/person-1.png'
import { useEffect } from 'react';

function About() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  } , [])
  return (
    
    <div id='about_main_container'>
      <h1 id='about_main_headings'>About Us</h1>
      <div id='about_uppercontainer'>
        <div className='about_content-container'>
          <div className='about_content_div'>
            <h1>Our Mission</h1>
            <div className='about_image_holder'>
              <img className='about_images' src={img1} alt="" />
            </div>
            <div className='about_para'>
              At Weave, we are committed to providing high-quality, fashionable shalwar kameez and jewelry for modern Pakistani women. Our mission is to celebrate the beauty of tradition while embracing contemporary styles.
            </div>
          </div>
          <div className='about_content_div'>
            <h1>Our Stories</h1>
            <div className='about_image_holder'>
              <img className='about_images' src={img2} alt="" />
            </div>
            <div className='about_para'>
              Our brand was founded with the vision to empower women through fashion. From handpicked fabrics to unique designs, each piece tells a story of heritage, craftsmanship, and empowerment.
            </div>
          </div>
        </div>

        <div className='about_content-container'>
          <div className='about_content_div'>
            <h1>Our Vision</h1>
            <div className='about_image_holder'>
              <img className='about_images' src={img3} alt="" />
            </div>
            <div className='about_para'>
              We envision a world where fashion is inclusive, accessible, and empowering for women everywhere. Our designs aim to inspire confidence and showcase the strength and beauty of every woman.
            </div>
          </div>
          <div className='about_content_div'>
            <h1>Our Philosophy</h1>
            <div className='about_image_holder'>
              <img className='about_images' src={img4} alt="" />
            </div>
            <div className='about_para'>
              Fashion is more than just clothing. It’s an expression of identity, culture, and creativity. We believe in offering products that reflect the essence of Pakistani culture while keeping up with the latest trends.
            </div>
          </div>
        </div>
      </div>
      

      <div id='about_lower_container'>
            <h1 id='about_testimonial_headings'>Testimonials</h1>   
            <div id='testi_div'>
               <div className='card'>
                 <img className='testiImg' src={testiimg1} alt="" />
                  <div className='card_content'>
                  <span className='quote'>❛❛</span>
                 <span className='testiText'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</span>
                  <span className='quote'>❜❜</span>
                  </div>
                 </div>
                 <div className='card'>
                 <img className='testiImg' src={testiimg1} alt="" />
                 <div className='card_content'>
                 <span className='quote'>❛❛</span>
                  <span className='testiText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus aliquam, </span>
                  <span className='quote'>❜❜</span>
                  </div>
                 </div>
                 <div className='card'>
                 <img className='testiImg' src={testiimg1} alt="" />
                 <div className='card_content'>
                 <span className='quote'>❛❛</span>
                 <span className='testiText'> Lorem ipsum dolor sit amet consectetur . Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
                  <span className='quote'>❜❜</span>
                  </div>
                 </div>
                 
            
            </div>     
      </div>

    </div>
  );
}

export default About;
