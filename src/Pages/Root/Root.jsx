import React from 'react';
import Header from '../../Componenst/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Componenst/Footer/Footer';

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
        </div>
    );
};

export default Root;