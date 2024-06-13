import MainDecor from '../../assets/img/registration/01.svg'
import LogoIc from '../../assets/img/icons/logo.svg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'
import { NavLink } from 'react-router-dom'

export const ForgotPass = () => {
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
                        <h1 className="header-main-registration__title title">Forgot password</h1>
                    </div>
                    <form action="" className="main-registration__form form-main-registration">
                        <div className="form-main-registration__body">
                            <input type="email" name="form[]" placeholder="Email adress *" className="form-main-registration__input input input-main"/>
                        </div>
                        <button className="form-main-registration__button button button--fw"><span>Send recovery link</span></button>
                        
                    </form>
                    <div className="main-registration__footer footer-main-registration">
                        <p className="footer-main-registration__text">
                            Do you remember the password?
                            <NavLink to={'/login'}>Sign up</NavLink>
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
