import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({user}) => {
    return (
        <div>
            <Navbar user={user} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
