import React from 'react';
import '../../App.css';
import Hero from '../Hero/Hero';
import Cards from '../CardItems/cards';
import Footer from '../Footer/Footer';


function Home() {
    return (
        <>
            <Hero/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;