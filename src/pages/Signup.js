import react from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';
import { CustomInput } from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';


const signUpSchema = yup.object({
    email: yup.string()
        .min(15,'Minimum 15 characters required')
        .email("Invalid Email address")
        .required("Email should be valid"),
    name: yup.string().required("Name is required"),
    role: yup.string()
        .oneOf(['customer','admin','seller'],'Invalid role')
        .required("Role is required"),
    password: yup.string()
        .max(20,'Maximum 20 characters')
        .required('Password is required'),
    phoneNumber: yup.string()
        .min(10,'Enter a valid Mobile number')
        .max(10,'Enter a valid mobile number')
        .required("Mobile Number is required")
})

export const Signup = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email:"",
            name:"",
            role:"",
            password:"",
            phoneNumber:""
        },
        validationSchema: signUpSchema,
        onSubmit:(values) => {
            dispatch(registerUser(values));
        },
    });
  return (
    <>
        <Meta title={'Signup'} />
        <BreadCrumb title="Signup" />

        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Sign Up</h3>
                        <form 
                            action='' 
                            onSubmit={formik.handleSubmit}
                            className='d-flex flex-column gap-15'
                        >
                            <CustomInput 
                                type='email' 
                                name='email' 
                                placeholder='Email'
                                val={formik.values.email}
                                onCh={formik.handleChange("email")}
                            />
                            <div className='error'>
                                {formik.touched.email && formik.errors.email}
                            </div>
                            <CustomInput 
                                type='text'
                                name='name' 
                                placeholder='Name' 
                                val={formik.values.name}
                                onCh={formik.handleChange("name")}
                            />
                            <div className='error'>
                                {formik.touched.name && formik.errors.name}
                            </div>
                            <select 
                                name='role' 
                                className='form-control form-select' 
                                id='role'
                                value={formik.values.role}
                                onChange={formik.handleChange("role")}
                                onBlur={formik.handleChange('role')}

                            >
                                <option value={'select-role'} disabled>Select User Role</option>
                                <option value={'customer'} >Customer</option>
                                <option value={'admin'}>Admin</option>
                                <option value={'seller'} >Seller</option>
                            </select>
                            <div className='error'>
                                {formik.touched.role && formik.errors.role}
                            </div>
                            <CustomInput 
                                type='tel' 
                                name='phoneNumber' 
                                placeholder='Mobile Number'
                                val={formik.values.phoneNumber}
                                onCh={formik.handleChange("phoneNumber")}
                            />
                            <div className='error'>
                                {formik.touched.phoneNumber && formik.errors.phoneNumber}
                            </div>
                            <CustomInput 
                                type='password' 
                                name='password' 
                                placeholder='Password'
                                val={formik.values.password}
                                onCh={formik.handleChange("password")}
                            />
                            <div className='error'>
                                {formik.touched.password && formik.errors.password}
                            </div>
                            <div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Sign Up</button>
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