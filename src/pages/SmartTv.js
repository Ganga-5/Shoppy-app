import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { Color } from '../components/Color';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';

export const SmartTv = () => {
    const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store / Smart TV" />
      <Container class1='store-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li><Link className='text-dark' to={'/watch'}>Watch</Link></li>
                    <li><Link className='text-dark' to={'/laptop'}>Laptop</Link></li>
                    <li><Link className='text-dark' to={'/camera'}>Camera</Link></li>
                    <li><Link className='text-dark' to={'/smart-tv'}>Smart TV</Link></li>
                    <li><Link className='text-dark' to={'/mobile'}>Mobile</Link></li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={''}
                        id=''
                      />
                      <label className='form-check-label'>
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={''}
                        id=''
                      />
                      <label className='form-check-label'>
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingInput'
                        placeholder='From'
                      />
                      <label htmlFor='floatingInput'>From</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingInput1'
                        placeholder='To'
                      />
                      <label htmlFor='floatingInput1'>To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={'color-1'}
                        id='color-1'
                      />
                      <label className='form-check-label' htmlFor='color-1'>
                        S (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={'color-2'}
                        id='color-2'
                      />
                      <label className='form-check-label' htmlFor='color-2'>
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Headphone
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Laptop
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Mobile
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Speaker
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Products</h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img src='../../images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kids headphones bulk 10pack multi colored for students
                      </h5>
                      <ReactStars 
                        count={5} 
                        size={24} 
                        value={4} 
                        edit={false} 
                        activeColor='#ffd700' 
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src='../../images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kids watches bulk 10pack multi colored for students
                      </h5>
                      <ReactStars 
                        count={5} 
                        size={24} 
                        value={4} 
                        edit={false} 
                        activeColor='#ffd700' 
                      />
                      <b>$ 500</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                Smart TV
              </div>
              <div className='row'>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=600' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Samsung</h6>
                        <h5 className='product-title'>
                            1m 08cm (43") CUE60 Crystal 4K<br /> UHD Smart TV
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
                        <p className='price'>$520</p>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image m-0'>
                        <img src='https://m.media-amazon.com/images/I/81MRU+3RJLL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Sony</h6>
                        <h5 className='product-title'>
                            Sony Bravia 164 cm (65 inches)<br /> 4K Ultra HD Smart LED Google<br /> TV KD-65X74L (Black)
                        </h5>
                        <ReactStars 
                            count={5} 
                            size={24} 
                            value={4} 
                            edit={false} 
                            activeColor='#ffd700' 
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate none
                        provident, similique sunt...
                        </p>
                        <p className='price'>$630.0</p>
                    </div>
                </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/51xz0+Y1oUL._SX300_SY300_.jpg' 
                            className='img-fluid w-100' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Redmi</h6>
                        <h5 className='product-title'>
                            Redmi 80 cm (32 inches) F Series<br /> HD Ready Smart LED Fire<br /> TV L32R8-FVIN (Black)
                        </h5>
                        <ReactStars 
                            count={5} 
                            size={24} 
                            value={5} 
                            edit={false} 
                            activeColor='#ffd700' 
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate none
                            provident, similique sunt...
                        </p>
                        <p className='price'>$725.0</p>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/71DQI0c+NeL._SL1500_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>nu</h6>
                        <h5 className='product-title'>
                            Nu 80 cm (32 inch) WebOS Series<br /> HD Ready Smart LED TV LED32HWA1<br /> (Black) 2023 Model
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
                        <p className='price'>$600.0</p>
                    </div>
                </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/91DQFbiYpuL._SL1500_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>nu</h6>
                        <h5 className='product-title'>
                            Nu 139 cm (55 inch) Google 4K Ultra<br /> HD QLED Smart TV LED55QUGNX <br/>(Black) 2023 Model
                        </h5>
                        <ReactStars 
                            count={5} 
                            size={24} 
                            value={4} 
                            edit={false} 
                            activeColor='#ffd700' 
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate none
                            provident, similique sunt...
                        </p>
                        <p className='price'>$890.0</p>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image m-0'>
                        <img src='https://m.media-amazon.com/images/I/81PHerjG6BL._SL1500_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>ALT</h6>
                        <h5 className='product-title'>
                            ALT 139 cm (55 inch) Premium Series<br /> 4K Ultra HD QLED Google Smart TV 55QUGA1 (Black) 2023 Model
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
                        <p className='price'>$450.0</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                  <div className='d-flex gap-10 flex-wrap'>
                      <div className='product-image m-0'>
                          <img src='https://m.media-amazon.com/images/I/81MRU+3RJLL._SX679_.jpg' 
                              className='img-fluid w-75' 
                              alt='product image' 
                          />
                      </div>
                      <div className='product-details'>
                          <h6 className='brand'>Sony</h6>
                          <h5 className='product-title'>
                              Sony Bravia 164 cm (65 inches)<br /> 4K Ultra HD Smart LED Google<br /> TV KD-65X74L (Black)
                          </h5>
                          <ReactStars 
                              count={5} 
                              size={24} 
                              value={4} 
                              edit={false} 
                              activeColor='#ffd700' 
                          />
                          <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui
                          blanditis praesentium voluptatum deleniti atque corrupti quos
                          dolores et quas molestias excepturi sint occaecati cupiditate none
                          provident, similique sunt...
                          </p>
                          <p className='price'>$630.0</p>
                      </div>
                  </div>
              </div>
              <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/71DQI0c+NeL._SL1500_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>nu</h6>
                        <h5 className='product-title'>
                            Nu 80 cm (32 inch) WebOS Series<br /> HD Ready Smart LED TV LED32HWA1<br /> (Black) 2023 Model
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
                        <p className='price'>$600.0</p>
                    </div>
                </div>
                </div>
                
              </div>
            </div>
      </Container>
        
    </>
  )
}
