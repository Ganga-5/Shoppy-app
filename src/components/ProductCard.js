import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation} from 'react-router-dom';

export const ProductCard = (props) => {

  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === '/product' ? `gr-${grid}` : "col-3"}`}>
        <Link 
          to={`${
            location.pathname == '/' 
              ? '/product/:id' 
              : location.pathname == '/product/:id'
              ? '/product/1'
              : ':id' 
          }`}
          className='product-card position-relative'
        >
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>  
              <img src='../../images/wish.svg' alt='whishlist' />
            </button>
          </div>
          <div className='product-image'>
            <img src='https://m.media-amazon.com/images/I/510qoHTnc7L._SX300_SY300_QL70_FMwebp_.jpg' className='img-fluid' alt='product image' />
            <img src='https://m.media-amazon.com/images/I/71IGcfyUfRL._SL1500_.jpg' className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>CROSSBEATS</h6>
            <h5 className='product-title'>
              CrossBeats Monarch 1.43” UHD Infinite Round Display Smart Watch for Men and Women
            </h5>
            <ReactStars 
              count={5} 
              size={24} 
              value={4} 
              edit={false} 
              activeColor='#ffd700' 
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Vivid Round Display- Immerse yourself in a vivid visual experience 
              with Solace's 1.32” TFT colour display. The full touch and full-round 
              screen with a resolution of 360 x 360 pixels ensure crystal-clear visuals...
            </p>
            <p className='price'>$340.0</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src='../../images/prodcompare.svg' alt='compare' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/view.svg' alt='view' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/add-cart.svg' alt='addcart' />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === '/product' ? `gr-${grid}` : "col-3"}`}>
        <Link 
          to={`${
            location.pathname == '/' 
              ? '/product/:id' 
              : location.pathname == '/product/:id'
              ? '/product/1'
              : ':id' 
          }`}
          className='product-card position-relative'
        >
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>  
              <img src='../../images/wish.svg' alt='whishlist' />
            </button>
          </div>
          <div className='product-image'>
            <img src='https://m.media-amazon.com/images/I/61vvmibZy8L._SX679_.jpg' className='img-fluid' alt='product image' />
            <img src='https://m.media-amazon.com/images/I/61UIk++gmwL._SX679_.jpg' className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>ZEBRONICS</h6>
            <h5 className='product-title'>
              ZEBRONICS Thunder 60 hrs Playback time Bluetooth Wireless Headphone with FM, mSD, Playback with Mic (Teal Green)
            </h5>
            <ReactStars 
              count={5} 
              size={24} 
              value={3} 
              edit={false} 
              activeColor='#ffd700' 
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Comfortable Design: Beat the workday blues with music on Zeb-Thunder 
              wireless headphone that comes in an ergonomic design a perfect fit and 
              design for long hours use. Microphone sensitivity -40dB ±1dB
            </p>
            <p className='price'>$450.0</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src='../../images/prodcompare.svg' alt='compare' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/view.svg' alt='view' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/add-cart.svg' alt='addcart' />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === '/product' ? `gr-${grid}` : "col-3"}`}>
        <Link  
          to={`${
            location.pathname == '/' 
              ? '/product/:id' 
              : location.pathname == '/product/:id'
              ? '/product/1'
              : ':id' 
          }`}
          className='product-card position-relative'
        >
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>  
              <img src='../../images/wish.svg' alt='whishlist' />
            </button>
          </div>
          <div className='product-image'>
            <img 
              src='https://m.media-amazon.com/images/I/41r-zmaSvrL._SX300_SY300_QL70_FMwebp_.jpg' 
              className='img-fluid' 
              alt='product image' 
            />
            <img src='https://m.media-amazon.com/images/I/71QWIHflrML._SX679_.jpg' className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>beatXP</h6>
            <h5 className='product-title'>
              beatXP Unbound 1.78" Super AMOLED Display Bluetooth Calling Smart Watch, Metal Body
            </h5>
            <ReactStars 
              count={5} 
              size={24} 
              value={3} 
              edit={false} 
              activeColor='#ffd700' 
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate none
              provident, similique sunt...
            </p>
            <p className='price'>$532.0</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src='../../images/prodcompare.svg' alt='compare' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/view.svg' alt='view' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/add-cart.svg' alt='addcart' />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === '/product' ? `gr-${grid}` : "col-3"}`}>
        <Link 
          to={`${
            location.pathname == '/' 
              ? '/product/:id' 
              : location.pathname == '/product/:id'
              ? '/product/1'
              : ':id' 
          }`}
          className='product-card position-relative'
        >
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>  
              <img src='../../images/wish.svg' alt='whishlist' />
            </button>
          </div>
          <div className='product-image'>
            <img src='https://m.media-amazon.com/images/I/71KkKkxNAbL._SX679_.jpg' className='img-fluid' alt='product image' />
            <img src='https://m.media-amazon.com/images/I/71xASotEtsL._SX679_.jpg' className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>INFINITY</h6>
            <h5 className='product-title'>
              Infinity JBL Fuze Pint, Wireless Ultra Portable Mini Speaker with Mic, 
              Deep Bass, Bluetooth 5.0 with Voice Assistant Support for Mobiles (Red)
            </h5>
            <ReactStars 
              count={5} 
              size={24} 
              value={3} 
              edit={false} 
              activeColor='#ffd700' 
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Pocket Size Portable Bluetooth Speakers 5 hours Music Playtime Under Optimum 
              Audio Settings and please ensure speaker is 100% charged before usage Dual Equalizer
              Modes for Normal & Deep Bass Output Wireless Bluetooth Streaming Speakerphone Voice Assistant
              Integration Compact 480mAH battery with 2.5 Hrs charging time, Signal to noise Ratio : 70dB (Aux)
            </p>
            <p className='price'>$425.0</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src='../../images/prodcompare.svg' alt='compare' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/view.svg' alt='view' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src='../../images/add-cart.svg' alt='addcart' />
              </button>
            </div>
          </div>
        </Link>
      </div>
      
    </>
  )
}
