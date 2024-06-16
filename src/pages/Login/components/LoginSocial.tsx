
import GoogleIc from '../../../assets/img/icons/google.svg';
import AppleIc from '../../../assets/img/icons/apple.svg';
import FacebookIc from '../../../assets/img/icons/facebook.svg';

import { GoogleLogin } from '@react-oauth/google'
import FacebookLogin from 'react-facebook-login';


export const LoginSocial = () => {

    const responseGoogle = (credentialResponse: any) => {
        console.log('Google Login Successful:', credentialResponse);
    }

    const responseFacebook = (response: any) => {
        console.log('facebook', response.accessToken);
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
            <button className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={AppleIc} alt="Icon" />
                </div>
                <p className="item-socials-main-registration__text">Apple</p>
                
            </button>
            <button className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={FacebookIc} alt="Icon" />
                </div>
                <p className="item-socials-main-registration__text">Facebook</p>
                <div className="auth">
                    <FacebookLogin
                    appId="YOUR_FACEBOOK_APP_ID"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        icon="fa-facebook"
                    />,
                </div>
            </button>
        </div>
    )
}
