import React from 'react';
import Header from '../../Componenst/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Componenst/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
        <div>
            <Footer></Footer>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;