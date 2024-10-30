// src/components/home/home.jsx
import React from 'react';
import Header from '../../components/header/header.jsx';
import ProductList from '../productList/productList.jsx';
import { Dialog, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import Footer from '../footer/footer.jsx';
import AboutUs from '../aboutUs/aboutUs.jsx';




const Home = () => {
    return (
        <>
    

        <Header />
        {/*  <ProductList></ProductList>   */}
       <AboutUs></AboutUs>
        <Footer></Footer>
        <div>
        
        </div>
        
        </>
    );
};

export default Home; // Verifique se esta linha está presente