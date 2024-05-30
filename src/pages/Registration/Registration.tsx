import MainDecor from '../../assets/img/registration/01.svg'
import LogoIc from '../../assets/img/icons/logo.svg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'

import { SocialAuth } from '../../components/SocialAuth/SocialAuth'
import { useState } from 'react'

export const Registration = () => {
    const [isModelState, setIsModelState] = useState(true)

    const handleSwitchChange = () => {
        setIsModelState(!isModelState);
    };

    return (
        <div className="registration model">
            <div className="registration__block block-registration">
                <div className="block-registration__body">
                    <div className="block-registration__logo logo">
                        <div className="logo__block">

                            <p className="logo__text">l</p>
                            <img className="logo__image" src={LogoIc} alt="ph"/>
                            <p className="logo__text">st</p>
                        </div>

                        <span className="logo__text">fans</span>
                    </div>
                </div>
                <div className="block-registration__decor">
                    <img src={MainDecor} alt="Decor"/>
                </div>
            </div>
            <div className="registration__main main-registration">
                <div className="main-registration__body">
                    <div className="main-registration__header header-main-registration">
                        <h1 className="header-main-registration__title title">Registration</h1>

                        <div className="header-main-registration__switch switch-registration">
                            <p className="switch-registration__text">Model</p>
                            <div className="switch-registration__body">
                                <input type="checkbox" id="switch" className="switch-registration__input"
                                    checked={!isModelState}
                                    onChange={handleSwitchChange}
                                />
                                <label htmlFor="switch" className="switch-registration__button"></label>
                            </div>
                            <p className="switch-registration__text">Man</p>
                        </div>
                    </div>

                    { isModelState ? (
                        <form action="" className="main-registration__form form-main-registration">
                            <div className="form-main-registration__body">
                                <input type="text" name="form[]" placeholder="Full name *" className="form-main-registration__input form-main-registration-email input input-main"/>
                                <input type="text" name="form[]" placeholder="Passport number *" className="form-main-registration__input form-main-registration-nickname input input-main"/>
                                <input type="text" name="form[]" placeholder="Passport series *" className="form-main-registration__input form-main-registration-nickname input input-main"/>
                                <input type="text" name="form[]" placeholder="Identification number *" className="form-main-registration__input form-main-registration-nickname input input-main"/>
                                <input type="email" name="form[]" placeholder="Email adress *" className="form-main-registration__input form-main-registration-nickname input input-main"/>
                                <input type="password" name="form[]" placeholder="Password *" className="form-main-registration__input form-main-registration-password input input-main"/>
                            </div>

                            <div className="form-block">
                                <label>
                                    <input type="checkbox" name="conditions" className="real-checkbox"/>
                                    <span className="custom-checkbox"></span>
                                    <p className="form-block__text">By clicking on Create Free Account , I acknowledge that I am 18+ years old and I accept the <a href="some">Terms & Conditions</a></p>
                                </label>
                            </div>
                            <button className="form-main-registration__button button button--fw"><span>Create account</span></button>
                            
                        </form>

                    ) : (

                        <>
                            <form action="" className="main-registration__form form-main-registration">
                                <div className="form-main-registration__body">
                                    <input type="email" name="form[]" placeholder="Email adress *" className="form-main-registration__input form-main-registration-email input input-main"/>
                                    <input type="text" name="form[]" placeholder="Nickname *" className="form-main-registration__input form-main-registration-nickname input input-main"/>
                                    <input type="password" name="form[]" placeholder="Password *" className="form-main-registration__input form-main-registration-password input input-main"/>
                                </div>
                                <div className="form-block">
                                    <label>
                                        <input type="checkbox" name="conditions" className="real-checkbox"/>
                                        <span className="custom-checkbox"></span>
                                        <p className="form-block__text">By clicking on Create Free Account , I acknowledge that I am 18+ years old and I accept the <a href="some">Terms & Conditions</a></p>
                                    </label>
                                </div>
                                <button className="form-main-registration__button button button--fw"><span>Create account</span></button>
                                
                            </form>

                            <SocialAuth/>
                        </>
                    )}

                    <div className="main-registration__footer footer-main-registration">
                        <p className="footer-main-registration__text">Already have an account? <a href="some">Sign in</a></p>
                    </div>
                </div>
                <div className="main-registration__decor">
                    <img src={LogoWhiteIc} alt="Decor"/>
                </div>
            </div>
        </div>
    )
}
