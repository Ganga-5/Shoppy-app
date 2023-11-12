import React from 'react';

export const Checkout = () => {
  return (
    <>
        <div className='checkout-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Shoppy</h3>
                            <nav
                                style={ {'--bs-breadcrump-divider': '>'} }
                                aria-label='breadcrumb'
                            >
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li className='breadcrumb-item active' aria-current='page'>
                                        Library
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title'>Contact Information</h4>
                            <p className='user-details'>
                                Nancy Folk (nancyfolk@gmail.com)
                            </p>
                            <form 
                                action='' 
                                className='d-flex gap-15 justify-content-between'
                            >
                                <div>
                                    <select 
                                        name='' 
                                        className='form-control form-select'
                                    >
                                    </select>
                                </div>
                                <div>
                                    <input type='text' className='form-control' />
                                </div>
                                <div>
                                    <input type='text' className='form-control' />
                                </div>
                                <div></div>
                                <div></div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'></div>
                </div>
            </div>
        </div>
    </>
  )
}
