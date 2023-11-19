import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';

export const ShippingPolicy = () => {
  return (
    <>
        <Meta title={'Shipping Policy'} />
        <BreadCrumb title="Shipping Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='privacy-policy'>
                    <h2 className='d-flex align-items-center'>Shipping Policy</h2>
                    <h5>Eligibility for Refunds and Exchanges</h5>
                    <br />
                    <p className='d-flex align-items-center'>
                      <ul>
                        <li>
                          Please do not send the product back to the manufacturer. It must be sent to the 
                          following Address (Relevant Address).
                        </li>
                        <br />
                        <li>
                          You will be responsible for paying for your own shipping costs for returning your item.
                        </li>
                        <br />
                        <li>
                          Shipping costs are non-refundable! If you receive a refund, the cost of return shipping will
                          be deducted from your refund.
                        </li>
                        <br />
                        <li>
                          Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
                        </li>
                        <br />
                        <li>
                          Please see, we cannot guarantee that we will receive your returned item.
                        </li>
                      </ul>
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
