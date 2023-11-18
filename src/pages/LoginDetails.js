import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';
import axios, { Axios } from 'axios';
import { useEffect } from 'react';
import { base_url } from '../Utils/base_url';

export const LoginDetails = () => {
    useEffect(() => {
        axios.get(`${base_url}user/all`)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }, [] )
  return (
    <>
        <Meta title={'User Details'} />
        <BreadCrumb title="Signup User Details" />
        <Container class1='login-details py-5 home-wrapper-2'>
            <div className='row'>
                <div>
                </div>
            </div>
        </Container>
    </>
  )
}
