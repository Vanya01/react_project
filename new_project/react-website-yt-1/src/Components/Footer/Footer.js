import React from 'react';
import {ButtonNav} from '../NavBar/ButtonForNav/buttonNav';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className={'footer-container'}>
            <section className={'footer-subscription'}>
                <p className={'footer-subscription-heading'}>
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className={'footer-subscription-text'}>
                    You can unsubscribe at any time.
                </p>
                <div className={'input-areas'}>
                    <form>
                        <input className={'footer-input'} type={'email'} name={'email'} placeholder={'Your email'}/>
                        <ButtonNav buttonStyle={'btn-outline'}>Subscribe</ButtonNav>
                    </form>
                </div>
            </section>
            <div className={'footer-links'}>
                <div className={'footer-link-wrapper'}>
                    <div className={'footer-link-item'}>

                        <h2>About Us</h2>

                        <Link to={'/sign-up'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>
                    </div>
                </div>
                <div className={'footer-link-wrapper'}>
                    <div className={'footer-link-item'}>

                        <h2>Contact Us</h2>

                        <Link to={'/sign-up'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>
                    </div>
                </div>
                <div className={'footer-link-wrapper'}>
                    <div className={'footer-link-item'}>

                        <h2>Videos</h2>

                        <Link to={'/sign-up'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>
                    </div>
                </div>
                <div className={'footer-link-wrapper'}>
                    <div className={'footer-link-item'}>

                        <h2>Social media</h2>

                        <Link to={'/sign-up'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>

                        <Link to={'/'}>
                            How it works
                        </Link>
                    </div>
                </div>
            </div>

            <section className={'social-media'}>
                <div className={'social-media-wrap'}>
                    <div className={'footer-logo'}>
                        <Link to={'/'} className={'social-logo'}>
                            TRVL <i className={'fab fa-typo3'}/>
                        </Link>
                    </div>
                    <small className={'website-rights'}> TRVL </small>
                    <div className={'social-icons'}>
                        <Link to={'/'} aria-label={'Facebook'} class={'social-icon-link facebook'} target={'_blank'}>
                            TRVL <i className={'fab fa-facebook-f'}/>
                        </Link>
                        <Link to={'/'} aria-label={'Instagram'} class={'social-icon-link instagram'} target={'_blank'}>
                            TRVL <i className={'fab fa-instagram'}/>
                        </Link>
                        <Link to={'/'} aria-label={'Youtube'} class={'social-icon-link youtube'} target={'_blank'}>
                            TRVL <i className={'fab fa-youtube'}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;