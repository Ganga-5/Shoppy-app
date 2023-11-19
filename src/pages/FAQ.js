import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';

export const FAQ = () => {
  return (
    <>
        <Meta title={'Refund Policy'} />
        <BreadCrumb title="Refund Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='privacy-policy'>
                    <h2 className='d-flex align-items-center'>FAQ</h2>
                    <br />
                    <p>
                        In the business of E-Commerce, taking care of your customers is a big priority. This is a 
                        highly competitive landscape, and it doesn’t take a lot to be outpaced by the competition and find 
                        yourself trying to scramble to get back on track. The best thing that you can do is focus on what 
                        matters to your customers.<br /><br />Today’s customers want self-service options. They want as much information 
                        at their fingertips as they can possibly get. If they can’t get it, they want an explanation as to why. 
                        One of the biggest parts of your sales process, whether you realize it or not, is to gain the trust of your 
                        audience. Part of that comes in providing them with answers to their questions, perhaps even before they think 
                        of them in some cases.
                    </p>
                    <h5>FAQ: What countries do you ship to? </h5>
                    <p className='d-flex align-items-center'>
                        Too often, people take it for granted that websites and E-Commerce stores will ship to them. 
                        After all, if you can find it online, it would make sense that you should be able to buy it, right? 
                        Unfortunately, that’s not always the case. If you’re only shipping domestic orders, or perhaps you only 
                        ship to certain countries, make sure that you spell that out for visitors ahead of time. The last thing 
                        you want is someone getting to the checkout before realizing they can’t get shipping to their country of residence.
                    </p>
                    <h5>FAQ: What is your return/exchange policy? </h5>
                    <p className='d-flex align-items-center'>
                        Another pressing question that every retail brand is tired of answering: how do you handle returns and exchanges? 
                        In addition to having a dedicated section or page regarding the return and exchange process on your website (do 
                        you have one yet?), you should have a question and answer on your FAQ page that explains it to your shoppers.
                    </p>
                    <h5>FAQ: How long will it take to get my order?</h5>
                    <p className='d-flex align-items-center'>
                        Everyone’s in a hurry these days. Thanks to giants like Amazon offering next-day (and even same-day) shipping, no one wants
                        to wait. If you charge for shipping, consider offering people a few different delivery options. Regardless, make sure that you 
                        use this question to provide people with the specific details of how long delivery takes based on the type of order, as well as 
                        whether there is any order processing time. <br /><br />While people love free, quick shipping, they are willing to pay and wait, 
                        if the reasoning is solid. Once you explain that you’re doing your best to ship things quickly and efficiently, but without costing 
                        your business (and in turn, the customer) a small fortune, you’ll get a much better response, even if the answer is that they have to wait. 
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
