import React from 'react';
import Layout from '../Components/Layout/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="backgroundImg">
         <img src="../food.jpg" alt="food" />
        </div>
        <div className="container">
          <h4 className='mainHeading'>Our Top Menu</h4>
          <div className="mainContent">
            <div className="foodOne">
              <img src="../foodOne.jpg" className="imageContainer"/>
              <div className='mainContentPara'>Pasta  a culinary masterpiece, combining tender, golden strands with rich, savory sauces and a dash of fresh herbs for an irresistible, mouthwatering experience.</div>
              <button className='orderButton'>Order Now</button>
            </div>
            <div className="foodTwo">
              <img src="../foodTwo.jpg"  className="imageContainer" />
              <div className='mainContentPara'>Delightful creation that embodies the artistry and passion of baking. From flaky pastries to rich cakes, each item is crafted with precision and care to achieve perfect textures and flavors.</div>
              <button className='orderButton'>Order Now</button>
            </div>
            <div className="foodThree">
              <img src="../foodThree.jpg" className="imageContainer"/>
              <div className='mainContentPara'>From traditional confections like creamy fudge and delicate macarons to modern treats like gourmet chocolates and artisanal candies, sweets bring joy and comfort to those who indulge.</div>
              <button className='orderButton'>Order Now</button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Home;
