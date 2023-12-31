import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { BlogCard } from '../components/BlogCard'
import { ProductCard } from '../components/ProductCard'
import { SpecialProduct } from '../components/SpecialProduct'
import { Meta } from '../components/Meta'
import { Container } from '../components/Container'
import { services } from '../Utils/Data'
export const Home = () => {
  return (
    <>
      <Meta title={'Shoppy e-commerce App'} />
      <Container class1='home-wraper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img 
                src='../../images/main-banner-1.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner' 
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link to={'/checkout'} className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
              <div className='small-banner position-relative'>
                <img 
                  src='../../images/catbanner-01.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $999.00 or <br />$41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img 
                  src='../../images/catbanner-02.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Smart watch</h5>
                  <p>From $1699.00 or <br />$64.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img 
                  src='../../images/catbanner-03.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $999.00 or <br />$41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img 
                  src='../../images/catbanner-04.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Head Phones</h5>
                  <p>From $999.00 or <br />$41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items center justify-content-between'>
              {services ?.map((i,j) => {
                return (
                  <div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt='services' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-3 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Laptop</h6>
                  <p>8 Items</p>
                </div>
                <Link to={'/laptop'}>
                  <img src='../../images/laptop.jpg' className='img-fluid w-100' alt='laptop' />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Camera</h6>
                  <p>12 Items</p>
                </div>
                <Link to={'/camera'}>
                  <img 
                    src='https://m.media-amazon.com/images/I/41x9HGBS7FL._SY300_SX300_QL70_FMwebp_.jpg' 
                    className='img-fluid w-100' 
                    alt='camera' 
                  />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <Link to={'/smart-tv'}>
                  <img 
                    src='https://m.media-amazon.com/images/I/51xz0+Y1oUL._SX300_SY300_.jpg' 
                    className='img-fluid w-100' 
                    alt='tv' />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Headphones</h6>
                  <p>5 Items</p>
                </div>
                <Link to={'/headphones'}>
                  <img src='../../images/headphone.jpg' className='img-fluid w-100' alt='headphone' />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Mobile</h6>
                  <p>3 Items</p>
                </div>
                <Link to={'/mobile'}>
                  <img src='https://m.media-amazon.com/images/I/418PZ2AjVKL._SX300_SY300_QL70_FMwebp_.jpg' className='img-fluid w-75' alt='mobile' />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Watch</h6>
                  <p>12 Items</p>
                </div>
                <Link to={'/watch'}>
                  <img src='https://m.media-amazon.com/images/I/41ySRhErmUL._SX300_SY300_QL70_FMwebp_.jpg' className='img-fluid w-75' alt='watch' />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Laptop</h6>
                  <p>7 Items</p>
                </div>
                <Link to={'/laptop'}>
                  <img src='https://m.media-amazon.com/images/I/41cUw9G6-uL._SY300_SX300_QL70_FMwebp_.jpg' className='w-100' alt='laptop' />
                </Link>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Speakers</h6>
                  <p>3 Items</p>
                </div>
                <Link to={'/speaker'}>
                  <img src='https://m.media-amazon.com/images/I/51KsXpjCTCS._SX300_SY300_QL70_FMwebp_.jpg' className='img-fluid w-75' alt='speakers' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='../../images/famous-1.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='../../images/famous-2.webp' 
                className='img-fluid' 
                alt='famous' 
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5K retina display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='../../images/famous-3.webp' 
                className='img-fluid' 
                alt='famous' 
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Smartphones</h5>
                <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                <p className='text-dark'>Now in Green From $999.00 or $41.62/mo. 
                  for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src='../../images/famous-4.webp' 
                className='img-fluid' 
                alt='famous' 
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home speakers</h5>
                <h6 className='text-dark'>Room-filling sound</h6>
                <p className='text-dark'>From $699 or $116.58/mo. for 12mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3>Special Products</h3>
          </div>
          <div className='row'>
            <SpecialProduct />
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
      <Container class1='marque-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='../../images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}
