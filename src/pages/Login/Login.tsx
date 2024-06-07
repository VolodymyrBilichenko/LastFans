import MainDecor from '../../assets/img/registration/01.svg'
import LogoIc from '../../assets/img/icons/logo.svg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'
import GoogleIc from '../../assets/img/icons/google.svg'
import AppleIc from '../../assets/img/icons/apple.svg'
import FacebookIc from '../../assets/img/icons/facebook.svg'
import { NavLink } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="registration">
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
                        <h1 className="header-main-registration__title title">Log in</h1>
                    </div>
                    <form action="" className="main-registration__form form-main-registration">
                        <div className="form-main-registration__body">
                            <input type="email" name="form[]" placeholder="Email adress *" className="form-main-registration__input input input-main"/>
                            <input type="password" name="form[]" placeholder="Password *" className="form-main-registration__input input input-main"/>
                        </div>
                        <button className="form-main-registration__button button button--fw"><span>Log in</span></button>
                        
                    </form>

                    <NavLink to={'/forgot'} className="main-registration__forgot">Forgot your password?</NavLink>

                    <div className="main-registration__socials socials-main-registration">
                        <a href="some" className="socials-main-registration__item item-socials-main-registration">
                            <div className="item-socials-main-registration__image">
                                <img src={GoogleIc} alt="Icon"/>
                            </div>
                            <p className="item-socials-main-registration__text">Google</p>
                        </a>
                        <a href="some" className="socials-main-registration__item item-socials-main-registration">
                            <div className="item-socials-main-registration__image">
                                <img src={AppleIc} alt="Icon"/>
                            </div>
                            <p className="item-socials-main-registration__text">Apple</p>
                        </a>
                        <a href="some" className="socials-main-registration__item item-socials-main-registration">
                            <div className="item-socials-main-registration__image">
                                <img src={FacebookIc} alt="Icon"/>
                            </div>
                            <p className="item-socials-main-registration__text">Facebook</p>
                        </a>
                    </div>
                    <div className="main-registration__footer footer-main-registration">
                        <p className="footer-main-registration__text">
                            Already have an account? 
                            <NavLink to={'/registration'}>Sign in</NavLink>
                        </p>
                    </div>
                </div>
                <div className="main-registration__decor">
                    <img src={LogoWhiteIc} alt="Decor"/>
                </div>
            </div>
        </div>
    )
}
