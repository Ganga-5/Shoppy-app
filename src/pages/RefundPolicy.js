import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';

export const RefundPolicy = () => {
  return (
    <>
        <Meta title={'Refund Policy'} />
        <BreadCrumb title="Refund Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='privacy-policy'>
                    <h2 className='d-flex align-items-center'>REFUND POLICY</h2>
                    <h5>Eligibility for Refunds and Exchanges</h5>
                    <p className='d-flex align-items-center'>
                      Disclaimer: Be sure, this article is not a substitute for professional legal advice. Also, it does not create an attorney 
                      and client relationship. This article acts as a guide for users.<br /><br /> Having a Refund Policy can be a great asset to win over 
                      customers from your competition, it gives them security and increases trust in your brand. However, it should be a balanced policy, 
                      as you do not want your customers to take advantage of you.<br /><br /> To help you get started, we have created a sample Refund Policy that you 
                      can use by inserting your relevant details and publishing it on your Website.(Store Name) Refund Policy Thank you for shopping at (Store Name)!
                      We offer refund and/or exchange within the first 30 days of your purchase, if 30 days have passed since your purchase, you will not be offered a
                      refund and/or exchange of any kind.
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
