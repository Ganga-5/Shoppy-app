import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

export const SpecialProduct = () => {
  return (
    <>
    <div className='col-6 mb-3'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src='https://m.media-amazon.com/images/I/71bDJ9wxxWL._SL1500_.jpg' className='img-fluid' alt='laptop' />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>Lenovo</h5>
            <h6 className='title'>
              Lenovo Yoga Slim 6 Intel Core i5 1240P 14"(35.5cm) 2.2K 300Nit Laptop
            </h6>
            <ReactStars 
              count={5} 
              size={24} 
              value={4} 
              edit={false} 
              activeColor='#ffd700' 
            />
            <p className='price'>
              <span className='red-p'>$3200</span> &nbsp;
              <strike>$5520</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0'>
                <b>2 days</b>
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-danger'>48</span>:
                <span className='badge rounded-circle p-2 bg-danger'>30</span>:
                <span className='badge rounded-circle p-2 bg-danger'>20</span>
              </div>
            </div>
            <div className='prod-count my-3'>
                <p>Product: 2</p>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progresbar'
                    style={{'width' : '53%'}}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                  </div>
                </div>
            </div>
            <Link to={'/cart'} className='button'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
    <div className='col-6 mb-3'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src='https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg' className='img-fluid w-75' alt='camera' />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>Canon</h5>
            <h6 className='title'>
              Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens
            </h6>
            <ReactStars 
              count={5} 
              size={24} 
              value={4} 
              edit={false} 
              activeColor='#ffd700' 
            />
            <p className='price'>
              <span className='red-p'>$2299</span> &nbsp;
              <strike>$5000</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0'>
                <b>2 days</b>
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-danger'>48</span>:
                <span className='badge rounded-circle p-2 bg-danger'>30</span>:
                <span className='badge rounded-circle p-2 bg-danger'>20</span>
              </div>
            </div>
            <div className='prod-count my-3'>
                <p>Product: 5</p>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progresbar'
                    style={{'width' : '30%'}}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                  </div>
                </div>
            </div>
            <Link to={'/cart'} className='button'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
