import React from 'react';
import Footer from './Footer/Footer';

import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function Layout() {
    return (
        <>
            <Header />
       
            <Outlet />

            <Footer />
    
        </>
    );
}

export default Layout;