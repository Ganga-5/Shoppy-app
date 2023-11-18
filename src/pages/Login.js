import React, { useEffect } from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../components/Container';
import { CustomInput } from '../components/CustomInput';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../features/auth/authSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let schema = Yup.object().shape({
        email: Yup.string()
        .email("Email Should be valid")
        .required("Email is Required"),
        password: Yup.string().required("Password is Required"),
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(login(values))
            alert(JSON.stringify(values, null, 2));
        },
    });
    const {user,isLoading,isError,isSuccess,message} = useSelector(
        (state) => state.auth
    );
    useEffect(() => {
        if (!user==null || isSuccess===true){
            navigate("..", {relative:'/login'});
        }

        // else if(isError===false){
        //     alert("Incorrect email or password");
        //     console.log('wrong');
        // }
        // else{
        //     alert("To Login please enter correct details")
        // }


        // else if(!message==null || isError=='Login failed: User not found'){
        //     alert("User not found");
        // }
        // else if(isError=='Incorrect password'){
        //     alert('Incorrect Password');
        // }
    }, [user,isLoading,isError,isSuccess,message]);
  return (
    <>
        <Meta title={'Login'} />
        <BreadCrumb title="Login" />
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form 
                            action=''
                            onSubmit={formik.handleSubmit}
                            className='d-flex flex-column gap-15'
                        >
                            <CustomInput 
                                type='email' 
                                name='email' 
                                placeholder='Email'
                                id='email'
                                val={formik.values.email}
                                onCh={formik.handleChange('email')}
                            />
                            <div className='error'>
                                {formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>
                                ) : null }
                            </div>
                            <CustomInput 
                                type='password' 
                                name='password' 
                                placeholder='Password' 
                                id='pass' 
                                val={formik.values.password}
                                onCh={formik.handleChange('password')}
                            />
                            <div className='error'>
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null }
                            </div>
                            <div>
                                <Link to='/forgot-password'>Forgot Password?</Link>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to='/signup' className='button signup'>SignUp</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
