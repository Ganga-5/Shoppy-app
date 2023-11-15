import React, { useState } from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { ProductCard } from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import {Color} from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart} from 'react-icons/ai';
import { Container } from '../components/Container';

export const SingleProduct = () => {

  const props = { 
    // width: 400, 
    // height: 500,
    // zoomwidth: 500, 
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg',
    scale: 1,
    offset: {vertical: 0, horizontal: 20},
    zoomStyle: 'opacity: 1; background-color: white',
    zoomLensStyle: 'opacity: 1',
    };

  const [orderedProduct , setOrderredProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
      <>
        <Meta title={'Product Name'} />
        <BreadCrumb title="Product Name" />
        <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                      <div className='main-product-image'>
                        <div>
                          <ReactImageZoom {...props} />
                        </div>
                      </div>
                      <div className='other-product-images d-flex flex-wrap gap-15'>
                        <div>
                          <img 
                            src='../../images/famous-1.webp' 
                            alt='watch' 
                            className='img-fluid' 
                          />
                        </div>
                        <div>
                          <img 
                            src='../../images/famous-1.webp' 
                            alt='watch' 
                            className='img-fluid' 
                          />
                        </div>
                        <div>
                          <img 
                            src='../../images/famous-1.webp' 
                            alt='watch' 
                            className='img-fluid' 
                          />
                        </div>
                        <div>
                          <img 
                            src='../../images/famous-1.webp' 
                            alt='watch' 
                            className='img-fluid' 
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='main-product-details'>
                        <div className='border-bottom'>
                          <h3 className='title'>
                            Kids head phones bulk 10pack multi colored for students
                          </h3>
                        </div>
                        <div className='border-bottom py-3'>
                          <p className='price'>$ 100</p>
                          <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                              count={5}
                              size={24}
                              value={4}
                              edit={false}
                              activeColor={"#ffd700"}
                            />
                            <p className='mb-0 t-review'>( 2 Reviews )</p>
                          </div>
                          <a className='review-btn' href='#review'>Write a review</a>
                        </div>
                        <div className='py-3'>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Type :</h3>
                            <p className='product-data'>Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Brand :</h3>
                            <p className='product-data'>Havells</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Category :</h3>
                            <p className='product-data'>
                              airpods, camera's Computers & Laptop, headphones, 
                              mini speaker, our store, Portable Speakers, 
                              smart phones, Smart Television, Smartwatches
                            </p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Tags :</h3>
                            <p className='product-data'>Head phonees laptop mobile oppo speaker</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Availability :</h3>
                            <p className='product-data'>In Stock</p>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Size :</h3>
                            <div className='d-flex flex-wrap gap-15'>
                              <span className='badge border border-1 bg-white text-dark border-secodary'>
                                S
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secodary'>
                                M
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secodary'>
                                X
                              L</span>
                              <span className='badge border border-1 bg-white text-dark border-secodary'>
                                X
                              XL</span>
                            </div>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Color :</h3>
                            <Color />
                          </div>
                          <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                            <h3 className='product-heading'>Quantity :</h3>
                            <div className=''>
                              <input 
                                type='number' 
                                name='' 
                                min={1}
                                max={10}
                                className='form-control'
                                style={ { width: '70px'}} 
                                id='' />
                            </div>
                            <div className='d-flex align-items-center gap-30 ms-5'>
                              <button className='button border-0' type='submit'>
                                Add to Cart
                              </button>
                              <button className='button signup'>Buy it Now</button>
                            </div>
                          </div>
                          <div className='d-flex align-items-center gap-15'>
                            <div>
                              <a href=''>
                                <TbGitCompare className='fs-5 me-2' />
                                Add to Compare
                              </a>
                            </div>
                            <div>
                              <a href=''>
                                <AiOutlineHeart className='fs-5 me-2' />
                                Add to Wishlist
                              </a>
                            </div>
                          </div>
                          <div className='d-flex gap-10 flex-column my-3'>
                            <h3 className='product-heading'>Shipping & Returns :</h3>
                            <p className='product-data'>
                              Free shipping and returns available on all orders! <br />
                              We ship all US domestic orders within <b>5-10 business days!</b>
                            </p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading'>Product Link :</h3>
                            <a 
                              href='javascript:void(0);' 
                              onClick={ () => {
                                copyToClipboard(
                                  'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                );
                              }}
                            >
                              Copy Product Link
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
        </Container>
        <Container class1='description-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>
                  You're only as good as your last collection, which
                  enormous pressure. I think there is something about luxury -
                  it's not something people need, but it's what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money. Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestiblum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a 
                  accumsan nisl ante vestiblum.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container class1='reviews-wrapper home-wrapper-2'>
            <div className='row'>
              <div className='col-12'>
                <h3 id='review'>Reviews</h3>
                <div className='review-inner-wrapper'>
                  <div className='review-head d-flex justify-content-between align-items-end'>
                    <div>
                      <h4 className='mb-2'>Customer Review</h4>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activieColor='#ffd700'
                        />
                        <p className='mt-3'>Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a 
                          className='text-dark text-decoration-underline' 
                          href=''
                        >
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className='review-form py-4'>
                    <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activieColor='#ffd700'
                        />
                      </div>
                      <div>
                        <textarea 
                          name='' 
                          className='w-100 form-control' 
                          id='' 
                          cols={'30'} 
                          rows={'4'} 
                          placeholder='Comments'
                        />
                      </div>
                      <div className='d-flex justify-content-end'>
                        <button className='button border-0'>Submit Review</button>
                      </div>
                    </form>
                  </div>
                  <div className='reviews mt-3'>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-cemter'>
                        <h6 className='mt-2'>User Name</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activieColor='#ffd700'
                        />
                      </div>
                      <p className='mt-3'>
                        You're only as good as your last collection, which
                        enormous pressure. I think there is something about luxury -
                        it's not something people need, but it's what they want. It
                        really pulls at their heart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
        <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </Container>
      </>
  )
}
