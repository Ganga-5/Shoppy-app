import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';

export const AboutUs = () => {
  return (
    <>
        <Meta title={'Privacy Policy'} />
        <BreadCrumb title="Privacy Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
                <div className='about-us'>
                    <h2 className='d-flex align-items-center'>Who We Are and What We Do</h2>
                    <p className='d-flex align-items-center'>
                        BigCommerce’s mission is to help merchants sell more at every stage of growth, from small startups, to mid
                        -market businesses, to large enterprises. As a leading Open SaaS solution, BigCommerce empowers merchants to
                        build, innovate and grow their businesses online. Simply put, we focus on being the best commerce platform so
                        our customers can focus on what matters most: growing their businesses.
                    </p>
                </div>
                <div className='about-us'>
                    <img 
                        alt='img'
                        className='img-fluid'  
                        src='https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <img 
                        className='img-fluid'
                        src='https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <img 
                        className='img-fluid'
                        src='https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <img 
                        className='img-fluid'
                        src='https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                </div>
            </div>
          </div>
        </Container>
    </>
  )
}
