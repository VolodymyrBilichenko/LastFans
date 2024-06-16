
import GoogleIc from '../../../assets/img/icons/google.svg';
import AppleIc from '../../../assets/img/icons/apple.svg';
import FacebookIc from '../../../assets/img/icons/facebook.svg';

import { GoogleLogin } from '@react-oauth/google';

export const LoginSocial = () => {

    const responseGoogle = (credentialResponse: any) => {
        console.log('Google Login Successful:', credentialResponse);
        // SubmitAuth('google', credentialResponse.credential);
    }

    return (
        <div className="main-registration__socials socials-main-registration">
            <button className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={GoogleIc} alt="Icon" />
                </div>
                <p className="item-socials-main-registration__text">Google</p>
                <div className='auth'>
                    <GoogleLogin
                        onSuccess={responseGoogle}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </div>
            </button>
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
    )
}
