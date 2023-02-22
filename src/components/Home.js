import React from "react";
import "./Home.css";
import Product from "./Product";
import logo from '../assets/cover.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={logo}
          alt="home-page"
        ></img>
        <div className="home__row">
          <Product
            id="1232141"
            title="The lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for
          Baking,Stylish Kitchen Mixer with
          K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={99.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          {/* <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          /> */}
          {/* <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          /> */}
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch,Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="92123224"
            title="Sandisk Cruzer Blade CZ50 USB 2.0 Pendrive (16 GB) - Pack of 5"
            price={99.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41r9HAJFJaL.jpg"
          />
          <Product
            id="9274225"
            title="Pigeon by Stovekraft Kessel 1.2-Litre Multi-Purpose Kettle (Silver) 600W, Black"
            price={799}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Y21By5TzL._SL1000_.jpg"
          />
          <Product
            id="92839933"
            title="Netgear R6120-100INS AC1200 Dual-Band Wi-Fi Router (Black, Not a Modem)"
            price={1991.92}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6106bDIN3VL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12327780"
            title="Amazon Brand - Solimo Water Resistant Cotton Mattress Protector 78x72 - King Size, Grey"
            price={839.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71B0vbMooUL._SL1500_.jpg"
          />
          <Product
            id="12800780"
            title="OPPO F19 Pro (Crystal Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={300.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71KlQWpei4L._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1361780"
            title="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
            price={1099}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
          />
          <Product
            id="99944422"
            title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers"
            price={299}
            rating={4}
            image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"
          />
          <Product
            id="99996763"
            title="New Apple AirPods Pro with MagSafe Charging Case"
            price={199}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="95829208"
            title="Stylum Women's Floral Print Rayon A-Line Kurta"
            price={20}
            rating={3}
            image="https://m.media-amazon.com/images/I/71lkKHXJyOL._UY879_.jpg"
          />
          <Product
            id="98682525"
            title="GIGLICK 4XL Bean Bag with Footrest Ready to Use Filled with Beans Color Navy Blue(Faux Leather)"
            price={150}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ROdHOc6+L._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="83830793"
            title="Green Soul® Jupiter Superb Office Chair, Armrests & Lumbar Support, Smart Synchro MultiHigh (Black)"
            price={200}
            rating={5}
            image="https://m.media-amazon.com/images/I/71tiVjTiRUL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
