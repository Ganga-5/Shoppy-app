import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';

export const PrivacyPolicy = () => {
  return (
    <>
        <Meta title={'Privacy Policy'} />
        <BreadCrumb title="Privacy Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='privacy-policy'>
                    <h2 className='d-flex align-items-center'>PRIVACY POLICY</h2>
                    <h5>Updated March 3rd, 2020.</h5>
                    <p className='d-flex align-items-center'>
                      A Starting Point LLC (“A Starting Point”) respects the sensitive nature of any personal information you provide to us.  We have created this Privacy Policy in order to demonstrate 
                      our commitment to the privacy of those who visit our website https://www.astartingpoint.com/ (the “Site”).  This Privacy Policy describes our online information 
                      collection, storage and disclosure practices and the choices you have regarding how your personal information is collected and used by us and our service providers.<br /><br />  By accessing 
                      and using the Site, you consent to the collection, use and disclosure of information through the Site as described in this Privacy Policy. Residents of the European Economic Area (“EEA”), 
                      which includes the member states of the European Union (“EU”), should consult the sections of this policy relating to the “Rights of EEA Residents” and “International Data Transfers” for 
                      provisions that may apply to them.California residents should consult the section titled “Your California Privacy Rights” for rights that apply to them. <br /><br />We reserve the right to change this 
                      Privacy Policy at any time.  In the event we make changes to this Privacy Policy, such policy will be re-posted in the “Privacy” section of our Site with the date such modifications were made 
                      indicated on the top of the page or we may contact you to inform you about the revisions with a link to the revised Privacy Policy.<br /> <br /> All changes are effective on the date listed at the top of this 
                      page and will apply to all information that we have about you.  Your continued use of the Site or the services that we provide (“Services”) after any change is posted indicates your acceptance of 
                      the changes and your continued consent to our processing of your personal data.  If at any point you do not agree to any portion of this Privacy Policy then in effect you should immediately stop 
                      using the Site and the Services. Because this Privacy Policy contains legal obligations we encourage you to review this Privacy Policy carefully.<br /> <br /> If you have any questions concerning this Privacy 
                      Policy or our information collection, storage and disclosure practices, please contact us at info@astartingpoint.com or mail us at A Starting Point, 1626 Wilcox Avenue, Suite 104, Los Angeles, California 90028-6206.
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
