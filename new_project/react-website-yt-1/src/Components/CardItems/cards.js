import React from "react";
import CardItem from "./card/oneCard";
import './cards.css'
import imgFirst from '../../images/img-9.jpg'
import imgSecond from '../../images/img-2.jpg'
import imgThird from '../../images/img-3.jpg'
import lastImg from '../../images/img-5.jpg'
import lastest from '../../images/img-7.jpg'




const photo = imgFirst
const photoSecond= imgSecond
const photoThird = imgThird
const lastPhoto = lastImg
const reallyLast = lastest

function  Cards(){
    return(
        <div className={'cards'}>
    <h1>Check out these EPIC Destination!</h1>
            <div className="cards_container">
                <div className="cards wrapper">
                    <ul className="cards_item">
                        <CardItem
                        src={photo}
                        text={'Adventures times! Traveling is a style of life!'}
                        label={'Adventure'}
                        path={'/services'}
                        />
                        <CardItem
                            src={photoSecond}
                            text={'New text'}
                            label={'Luxury'}
                            path={'/services'}
                        />
                    </ul>
                    <ul className="cards_item">
                        <CardItem
                            src={reallyLast}
                            text={'Adventures times! Traveling is a style of life!'}
                            label={'Mountains'}
                            path={'/services'}
                        />
                        <CardItem
                            src={photoThird}
                            text={'Adventures times! Traveling is a style of life!'}
                            label={'Ocean'}
                            path={'/services'}
                        />
                        <CardItem
                            src={lastPhoto}
                            text={'New text'}
                            label={'Free'}
                            path={'/services'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards