import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import {ProductCard} from '../components/ProductCard'
import { useState } from 'react';
import { Color } from '../components/Color';
import { Container } from '../components/Container';
import { Link } from 'react-router-dom';
import { Watches } from './Watches';

export const OurStore = () => {

  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store" />
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
                      <img src='../../images/laptop.jpg' className='img-fluid' alt='watch' />
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
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p 
                      className='mb-0 d-block' 
                      style={{'width':'100px'}}
                    >
                    Sort By:
                    </p>
                    <select name='' defaultValue={'best-selling'} className='form-control form-select' id=''>
                      <option value={'manual'}>Featured</option>
                      <option value={'best-selling'} disabled >Best selling</option>
                      <option value={'title-ascending'}>Alphabetically, A-Z</option>
                      <option value={'title-descending'}>Alphabetically, Z-A</option>
                      <option value={'price-ascending'}>Price, low to high</option>
                      <option value={'price-descending'}>Price, high to low</option>
                      <option value={'created-ascending'}>Date, old to new</option>
                      <option value={'created-descending'}>Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img 
                        onClick={ () => {
                          setGrid(3);
                        }}
                        src='../../images/gr4.svg' 
                        className='d-block img-fluid' 
                        alt='grid4' 
                      />
                      <img 
                        onClick={ () => {
                          setGrid(4);
                        }}
                        src='../../images/gr3.svg' 
                        className='d-block img-fluid' 
                        alt='grid3' 
                      />
                      <img 
                        onClick={ () => {
                          setGrid(6);
                        }}
                        src='../../images/gr2.svg' 
                        className='d-block img-fluid' 
                        alt='grid2' 
                      />
                      <img 
                        onClick={ () => {
                          setGrid(12);
                        }}
                        src='../../images/gr.svg' 
                        className='d-block img-fluid' 
                        alt='grid1' 
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}
