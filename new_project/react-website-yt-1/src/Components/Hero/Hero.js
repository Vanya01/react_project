import React from 'react';
import {ButtonNav} from '../NavBar/ButtonForNav/buttonNav';
import './Hero.css';
import '../../App.css';

function Hero() {
    return (
        <div className={'hero-container'}>
            <h1>GoYMandry</h1>
            <p>Adventures time,let's go!</p>
            <div className={'hero-btns'}>
                <ButtonNav className={'btns'} buttonStyle={'btn--outline'} buttonSize={'btn--large'}> GET
                    STARTED </ButtonNav>
                <ButtonNav className={'btns'} buttonStyle={'btn--primary'} buttonSize={'btn--large'}> WATCH PROMO<i
                    className={'far fa-play-circle'}/> </ButtonNav>
            </div>
        </div>
    )
}

export default Hero;