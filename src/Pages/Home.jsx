import React from 'react';
import Layout from '../Components/Layout/Layout';
import './Home.css';
import { Link } from 'react-router-dom';
import More from './More';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CustomArrows';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  return (
    <Layout>
      <div className="home">
        <div className="backgroundImg">
          <Slider {...settings}>
            <div>
              <img src="../food.jpg" alt="food"  height={"570px"}/>
            </div>
            <div>
              <img src="../food1.jpg" alt="food1"  height={"570px"} />
            </div>
            <div>
              <img src="../food2.jpg" alt="food2" height={"570px"}/>
            </div>
          </Slider>
        </div>
        <div className="container">
          <h4 className='mainHeading'>Top Menu</h4>
          <div className="mainContent">
            <div className="foodOne">
              <img src="../foodOne.jpg" className="imageContainer" />
              <div className='mainContentPara'>Pasta  a culinary masterpiece, combining tender, golden strands with rich, savory sauces and a dash of fresh herbs for an irresistible, mouthwatering experience with herbal taste.</div>
              <Link to="/menu">
                <button className='orderButton'>Order Now</button>
              </Link>
            </div>
            <div className="foodTwo">
              <img src="../foodTwo.jpg"  className="imageContainer" />
              <div className='mainContentPara'>Delightful creation that embodies the artistry and passion of baking. From flaky pastries to rich cakes, each item is crafted with precision and care to achieve perfect textures and flavors.</div>
              <Link to="/menu">
                <button className='orderButton'>Order Now</button>
              </Link>
            </div>
            <div className="foodThree">
              <img src="../foodThree.jpg" className="imageContainer" />
              <div className='mainContentPara'>From traditional confections like creamy fudge and delicate macarons to modern treats like gourmet chocolates and artisanal candies, sweets bring joy and comfort to those who indulge.</div>
              <Link to="/menu">
                <button className='orderButton'>Order Now</button>
              </Link>
            </div>
          </div>
          <More />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
