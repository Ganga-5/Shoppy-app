import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';

export const TermAndConditions = () => {
  return (
    <>
        <Meta title={'Terms And Conditions'} />
        <BreadCrumb title="Terms And Conditions" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='privacy-policy'>
                    <h2 className='d-flex align-items-center'>Terms and Conditions</h2>
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
                    <h5>Notifications and Communications from Our Site</h5>
                    <br />
                    <h6 className='text-underline'>
                      Communications Regarding Our Services
                    </h6>
                    <br />
                    <p className='d-flex align-items-center'>
                      We will send you email notifications and free newsletters from time to time with suggestions
                      and other information.  Some notifications are communications relating to us and our Services. 
                      You may “opt-out” from receiving such communications by following the “Unsubscribe” instructions 
                      provided in the email.
                    </p>
                    <h6 className='text-underline'>
                      Legal or Security Communications
                    </h6>
                    <br />
                    <p className='d-flex align-items-center'>
                      We also send out notices that are required for legal or security purposes.  For example, certain 
                      notifications are sent for your own protection.  In other cases, these notifications involve changes
                      to various legal agreements, such as this Privacy Policy or the Terms of Service.  Generally, you may
                      not opt out of such emails.
                    </p>
                    <h6 className='text-underline'>
                      Account Communications
                    </h6>
                    <br />
                    <p className='d-flex align-items-center'>
                      We may also send communications providing customer support or responses to questions regarding the operation
                      of the Services. Generally, you may not opt out of such emails.
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
