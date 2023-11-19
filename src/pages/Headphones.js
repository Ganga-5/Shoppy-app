import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { Color } from '../components/Color';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';

export const Headphones = () => {
    const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store / Headphones" />
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
                      <Link to={'/headphones'} className='text-secondary'>Headphone</Link>
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      <Link to={'/laptop'} className='text-secondary'>Laptop</Link>
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      <Link to={'/mobile'} className='text-secondary'>Mobile</Link>
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      <Link to={'/speaker'} className='text-secondary'>Speaker</Link>
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      <Link to={'/camera'} className='text-secondary'>Camera</Link>
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
                Headphones
              </div>
              <div className='row'>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>BOAT</h6>
                        <h5 className='product-title'>
                            boAt Rockerz 450 Bluetooth On<br /> Ear Headphones with Mic, Upto 15<br /> Hours Playback
                        </h5>
                        <ReactStars 
                            count={5} 
                            size={24} 
                            value={4} 
                            edit={false} 
                            activeColor='#ffd700' 
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                            Playback- It provides a massive battery backup of upto 15 hours for 
                            a superior playback time.
                        </p>
                        <p className='price'>$452</p>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image m-0'>
                        <img src='https://m.media-amazon.com/images/I/61C66qTqnwL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>SONY</h6>
                        <h5 className='product-title'>
                            Sony WH-CH520, Wireless On-Ear<br /> Bluetooth Headphones with Mic,<br /> Upto 50 Hours
                        </h5>
                        <ReactStars 
                            count={5} 
                            size={24} 
                            value={2} 
                            edit={false} 
                            activeColor='#ffd700' 
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate none
                        provident, similique sunt...
                        </p>
                        <p className='price'>$350.0</p>
                    </div>
                </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/51UgWAwUllL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>NOISE</h6>
                        <h5 className='product-title'>
                            Noise Buds VS106 Truly Wireless <br />in-Ear Earbuds with 50H <br />Playtime
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
                        <p className='price'>$290.0</p>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/5154Num4eEL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>BOAT</h6>
                        <h5 className='product-title'>
                            boAt Airdopes 170 TWS Earbuds with<br /> 50H Playtime, Quad Mics ENx™ <br /> Tech, Low
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
                        <p className='price'>$1600.0</p>
                    </div>
                </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image'>
                        <img src='https://m.media-amazon.com/images/I/71YIuhXKkeL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>TOZO</h6>
                        <h5 className='product-title'>
                            TOZO T10 Bluetooth 5.3 Wireless <br />Earbuds with Wireless Charging<br /> Case IPX8
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
                        <p className='price'>$220.0</p>
                    </div>
                </div>
                </div>
                <div className='col-6'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image m-0'>
                        <img src='https://m.media-amazon.com/images/I/61FgU7NpeFL._SY879_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>iClever</h6>
                        <h5 className='product-title'>
                            iClever BTH13 Bluetooth Kids <br />Headphones with Mic, Over <br />Ear Headphone
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
                        <p className='price'>$2500.0</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                  <div className='d-flex gap-10 flex-wrap'>
                      <div className='product-image'>
                          <img src='https://m.media-amazon.com/images/I/615Nba6dy4L._SY879_.jpg' 
                              className='img-fluid w-50' 
                              alt='product image' 
                          />
                      </div>
                      <div className='product-details'>
                          <h6 className='brand'>Sennheiser</h6>
                          <h5 className='product-title'>
                            Sennheiser Professional Audio HD <br />280 PRO Wired Over Ear <br />Headphones
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
                          <p className='price'>$1800.0</p>
                      </div>
                  </div>
              </div>
              <div className='col-4'>
                  <div className='d-flex gap-10 flex-wrap'>
                      <div className='product-image'>
                          <img src='https://m.media-amazon.com/images/I/41eSRlqPu+L._SY300_SX300_.jpg' 
                              className='img-fluid w-100' 
                              alt='product image' 
                          />
                      </div>
                      <div className='product-details'>
                          <h6 className='brand'>Sennheiser</h6>
                          <h5 className='product-title'>
                            Sennheiser Professional Audio HD <br />280 PRO Wired Over Ear <br />Headphones
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
                          <p className='price'>$1800.0</p>
                      </div>
                  </div>
              </div>
              <div className='col-4'>
                <div className='d-flex gap-10 flex-wrap'>
                    <div className='product-image m-0'>
                        <img src='https://m.media-amazon.com/images/I/71ZbsXKaAkL._SX679_.jpg' 
                            className='img-fluid w-75' 
                            alt='product image' 
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Boult</h6>
                        <h5 className='product-title'>
                            Boult Audio Newly Launched<br /> Z20 Pro Bluetooth Truly <br />Wireless 
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
                        <p className='price'>$1850.0</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
        
    </>
  )
}
