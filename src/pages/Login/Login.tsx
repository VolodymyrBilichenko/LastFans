import MainDecor from '../../assets/img/registration/01.svg';
import LogoIc from '../../assets/img/icons/logo.svg';
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg';
import GoogleIc from '../../assets/img/icons/google.svg';
import AppleIc from '../../assets/img/icons/apple.svg';
import FacebookIc from '../../assets/img/icons/facebook.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import setCookie from '../../functions/setCookie';
import { IUser } from '../../models';
import getCookies from '../../functions/getCookie';
import { setUser } from '../../redux/toolkitSlice';
import { useDispatch } from 'react-redux';

export const Login = () => {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const validateForm = () => {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[a-zA-Z0-9\-_.]+\.[a-z]{2,6}$/;
        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail) {
            setEmailError("Введіть дійсні значення для електронної пошти");
            isValid = false;
        } else {
            setEmailError(null);
        }

        if (password === '') {
            setPasswordError("Пароль не може бути порожнім");
            isValid = false;
        } else {
            setPasswordError(null);
        }

        return isValid;
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    const submitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (validateForm()) {
            resetForm();
            navigate('/');

            const user: IUser = {
                username: "Angelina",
                usertag: "@angel",
                photo: "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg",
                sex: getCookies('access_token') ?? ""
            }

            if (email === 'man@test.test') {
                setCookie('access_token', 'man')
            } else if (email === 'woman@test.test') {
                setCookie('access_token', 'woman')
            }

            dispatch(setUser(user))
        }
    };

    return (
        <div className="registration">
            <div className="registration__block block-registration">
                <div className="block-registration__body">
                    <div className="block-registration__logo logo">
                        <div className="logo__block">
                            <p className="logo__text">l</p>
                            <img className="logo__image" src={LogoIc} alt="ph" />
                            <p className="logo__text">st</p>
                        </div>
                        <span className="logo__text">fans</span>
                    </div>
                </div>
                <div className="block-registration__decor">
                    <img src={MainDecor} alt="Decor" />
                </div>
            </div>
            <div className="registration__main main-registration">
                <div className="main-registration__body">
                    <div className="main-registration__header header-main-registration">
                        <h1 className="header-main-registration__title title">Log in</h1>
                    </div>
                    <form className="main-registration__form form-main-registration" onSubmit={submitForm}>
                        <div className="form-main-registration__body">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address *"
                                className="form-main-registration__input input input-main"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <span className="error__message" style={{ color: '#CB0000' }}>{emailError}</span>}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password *"
                                className="form-main-registration__input input input-main"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <span className="error__message" style={{ color: '#CB0000' }}>{passwordError}</span>}
                        </div>
                        <button className="form-main-registration__button button button--fw" type="submit">
                            <span>Log in</span>
                        </button>
                    </form>

                    <NavLink to={'/forgot'} className="main-registration__forgot">Forgot your password?</NavLink>

                    <div className="main-registration__socials socials-main-registration">
                        <a href="some" className="socials-main-registration__item item-socials-main-registration">
                            <div className="item-socials-main-registration__image">
                                <img src={GoogleIc} alt="Icon" />
                            </div>
                            <p className="item-socials-main-registration__text">Google</p>
                        </a>
                        <a href="some" className="socials-main-registration__item item-socials-main-registration">
                            <div className="item-socials-main-registration__image">
                                <img src={AppleIc} alt="Icon" />
                            </div>
                            <p className="item-socials-main-registration__text">Apple</p>
                        </a>
                        <a href="some" className="socials-main-registration__item item-socials-main-registration">
                            <div className="item-socials-main-registration__image">
                                <img src={FacebookIc} alt="Icon" />
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
                    <img src={LogoWhiteIc} alt="Decor" />
                </div>
            </div>
        </div>
    );
};
