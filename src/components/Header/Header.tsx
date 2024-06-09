import UserPhoto from '../../assets/img/user/01.png'
import LogoPh from '../../assets/img/icons/logo.svg'
import VideoIc from '../../assets/img/icons/video.svg'
import TimelineIc from '../../assets/img/icons/user-menu/timeline.svg'
import MessageIc from '../../assets/img/icons/user-menu/message.svg'
import SettingsIc from '../../assets/img/icons/user-menu/settings.svg'
import LogoutIc from '../../assets/img/icons/user-menu/logout.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Messages } from './components/Messages/Messages'
import { Notifications } from './components/Notifications/Notifications'

interface IOpenMenu {
    handleOpenMenu?: any
} 

export const Header = ({handleOpenMenu}: IOpenMenu) => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const handleOpenModal = (modalName: string) => {
        setOpenModal(openModal === modalName ? null : modalName);
    };
    
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__menu-button button-menu-header" onClick={_ => handleOpenMenu()}>
                    <div className="button-menu-header__body">
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.99935 0.5H25.9993C26.7993 0.5 27.3327 1.03333 27.3327 1.83333V23.1667C27.3327 23.9667 26.7993 24.5 25.9993 24.5H1.99935C1.19935 24.5 0.666016 23.9667 0.666016 23.1667V1.83333C0.666016 1.03333 1.19935 0.5 1.99935 0.5ZM13.9056 3.16667V21.8333H24.666V3.16667H13.9056Z" fill="#3F79CF" style={{fill:'#3F79CF', fillOpacity:'1'}} />
                        </svg>
                    </div>
                </div>

                <NavLink to={'/'} className="header__logo logo">
                    <div className="logo__block">

                        <p className="logo__text">l</p>
                        <img className="logo__image" src={LogoPh} alt="ph"/>
                        <p className="logo__text">st</p>
                    </div>

                    <span className="logo__text">fans</span>

                </NavLink>

                <div className="header__actions">
                    <div className="header__search">
                        <input type="text" name="form[]" placeholder="Search by nickname or hashtags " className="header__input input"/>
                    </div>
                    <div className="header__content">

                        <div className="header__value">$ 268.80</div>

                        <div className={`header__messages messages-header field notification ${openModal === 'messages' ? 'field-active' : ''}`}>
                            <div onClick={() => handleOpenModal('messages')} className="messages-header__icon header-icon">
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.25 0.859375H0.75C0.56352 0.859375 0.384677 0.933454 0.252815 1.06532C0.120954 1.19718 0.046875 1.37602 0.046875 1.5625V17.5C0.046875 17.9351 0.219726 18.3524 0.527403 18.6601C0.83508 18.9678 1.25238 19.1406 1.6875 19.1406H22.3125C22.7476 19.1406 23.1649 18.9678 23.4726 18.6601C23.7803 18.3524 23.9531 17.9351 23.9531 17.5V1.5625C23.9531 1.37602 23.879 1.19718 23.7472 1.06532C23.6153 0.933454 23.4365 0.859375 23.25 0.859375ZM21.443 2.26562L12 10.9211L2.55703 2.26562H21.443ZM22.3125 17.7344H1.6875C1.62534 17.7344 1.56573 17.7097 1.52177 17.6657C1.47782 17.6218 1.45312 17.5622 1.45312 17.5V3.16094L11.5312 12.393C11.6609 12.5116 11.8302 12.5773 12.0059 12.5773C12.1815 12.5773 12.3509 12.5116 12.4805 12.393L22.5469 3.16094V17.5C22.5469 17.5622 22.5222 17.6218 22.4782 17.6657C22.4343 17.7097 22.3747 17.7344 22.3125 17.7344Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                </svg>
                            </div>
                            <div className="messages-header__notification header-icon-notification">
                                <span>100</span>
                            </div>
                            <Messages/>
                        </div>

                        <div className={`header__sub sub-header field notification ${openModal === 'request' ? 'field-active' : ''}`}>
                            <div onClick={() => handleOpenModal('request')} className="sub-header__icon header-icon">
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3508 17.9595C12.9161 17.9825 12.4654 17.9896 11.9988 17.9896C10.0955 17.9896 8.16496 17.8079 6.26483 17.4477C6.03151 17.4017 5.86211 17.1962 5.86211 16.9581V16.1813C5.86211 13.5738 7.99876 11.452 10.6244 11.452C11.5433 11.4528 12.455 11.4528 13.3731 11.452C14.5238 11.452 15.632 11.867 16.4926 12.6224C16.7915 12.8843 17.2453 12.8549 17.5082 12.5598C17.7711 12.2638 17.7423 11.8131 17.4451 11.5512C16.8266 11.0093 16.1091 10.607 15.3404 10.3491C16.7179 9.33181 17.6153 7.70831 17.6153 5.87613C17.6153 2.80054 15.0959 0.297852 11.9988 0.297852C8.90168 0.297852 6.38229 2.80054 6.38229 5.87613C6.38229 7.70673 7.27882 9.32864 8.65398 10.3467C6.19851 11.1672 4.42383 13.4699 4.42383 16.1805V16.9573C4.42383 17.8762 5.08144 18.6713 5.99076 18.849C7.98358 19.2267 10.0044 19.4179 11.9988 19.4179C12.4918 19.4179 12.968 19.4092 13.4283 19.3846C13.8254 19.364 14.129 19.0275 14.1083 18.6332C14.0859 18.2404 13.7351 17.9365 13.3508 17.9595ZM7.82057 5.87613C7.82057 3.58769 9.69513 1.72694 11.9988 1.72694C14.3024 1.72694 16.177 3.58848 16.177 5.87613C16.177 8.15585 14.3152 10.0102 12.022 10.0229H11.9756C9.68235 10.0102 7.82057 8.15585 7.82057 5.87613Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                    <path d="M18.8922 9.63493C18.5854 9.75158 18.3976 10.061 18.4368 10.3856C18.4751 10.7093 18.7308 10.9664 19.0568 11.0093C19.9398 11.1243 20.8211 11.6345 21.4755 12.4106C21.6178 12.5788 21.8215 12.6661 22.0269 12.6661C22.1899 12.6661 22.3537 12.6113 22.4879 12.4995C22.7924 12.2463 22.8331 11.7956 22.5774 11.4925C22.082 10.9053 21.4811 10.4284 20.8307 10.096C21.7776 9.24374 22.3537 8.01461 22.3537 6.70614C22.3537 4.82079 21.2119 3.15524 19.4452 2.46331C19.076 2.31731 18.6581 2.49823 18.5127 2.86561C18.3673 3.23221 18.5486 3.64721 18.9178 3.79163C20.1316 4.26772 20.9154 5.41115 20.9154 6.70614C20.9162 7.99478 20.1028 9.17232 18.8922 9.63493Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                    <path d="M2.47393 15.8512L2.18627 15.8013C2.02966 15.7743 1.87624 15.7489 1.72682 15.7187C1.61495 15.6965 1.53106 15.5926 1.53106 15.4751V14.8633C1.53106 13.0796 3.15631 11.2426 4.94138 11.0093C5.26739 10.9665 5.52309 10.7094 5.56144 10.3856C5.60059 10.0611 5.41282 9.75164 5.10598 9.635C3.89543 9.17239 3.082 7.99563 3.082 6.70699C3.082 5.41201 3.86587 4.26858 5.07962 3.79248C5.44877 3.64806 5.63016 3.23306 5.48473 2.86647C5.33851 2.49908 4.92061 2.31816 4.55145 2.46417C2.78476 3.1561 1.64292 4.82165 1.64292 6.70699C1.64292 8.01309 2.21744 9.24063 3.16191 10.0936C1.39202 10.9911 0.0927734 12.8931 0.0927734 14.8641V15.4759C0.0927734 16.275 0.662493 16.9669 1.44476 17.1193C1.60457 17.1518 1.77077 17.1804 1.94256 17.2089L2.21903 17.2573C2.26218 17.2653 2.30453 17.2692 2.34768 17.2692C2.68887 17.2692 2.99171 17.0264 3.05483 16.682C3.12435 16.2924 2.86466 15.9211 2.47393 15.8512Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                    <path d="M22.6587 14.7903C21.0007 13.1446 18.3031 13.1446 16.6451 14.7903C15.8421 15.5878 15.3994 16.6487 15.3994 17.7762C15.3994 18.9046 15.8413 19.9655 16.6443 20.763C17.4474 21.5604 18.5157 22 19.6519 22C20.7882 22 21.8557 21.5604 22.6587 20.763C23.4618 19.9655 23.9045 18.9046 23.9045 17.7762C23.9045 16.6487 23.4626 15.5878 22.6587 14.7903ZM21.6416 19.752C20.5788 20.809 18.725 20.809 17.6623 19.752C16.5652 18.6626 16.5652 16.8907 17.6623 15.8012C18.2113 15.2561 18.932 14.9839 19.6527 14.9839C20.3735 14.9839 21.0942 15.2569 21.6432 15.8012C22.7394 16.8899 22.7394 18.6626 21.6416 19.752Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                    <path d="M20.8613 17.0621H20.3707V16.5757C20.3707 16.1814 20.0487 15.8616 19.6516 15.8616C19.2544 15.8616 18.9324 16.1814 18.9324 16.5757V17.0621H18.4418C18.0447 17.0621 17.7227 17.3819 17.7227 17.7763C17.7227 18.1706 18.0447 18.4904 18.4418 18.4904H18.9324V18.9768C18.9324 19.3712 19.2544 19.691 19.6516 19.691C20.0487 19.691 20.3707 19.3712 20.3707 18.9768V18.4904H20.8613C21.2584 18.4904 21.5804 18.1706 21.5804 17.7763C21.5804 17.3819 21.2584 17.0621 20.8613 17.0621Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                </svg>
                            </div>
                            <div className="sub-header__notification header-icon-notification">
                                <span>100</span>
                            </div>

                            <div className="sub-header__popup popup-sub-header popup-main">
                                <div className="popup-main__wrapper">
                                    <div className="popup-main__content">

                                        <div className="popup-sub-header__top popup-main__top top-popup-main">
                                            <p className="top-popup-main__text">Requests</p>
                                            {/* <button className="top-popup-notifications-header__read"><span>Mark as read</span></button> */}
                                        </div>
                                        <div className="popup-sub-header__body body-popup-sub-header">
                                            <div className="body-popup-sub-header__item item-sub">
                                                <div className="item-sub__user user-item user-item--stories">
                                                    <div className="user-item__image user-item__image--decoration">
                                                        <img className="user-photo" src={UserPhoto} alt="ph"/>
                                                        <div className="user-item__image-icon">
                                                            <img src="img/icons/logo-white.svg" alt="ph"/>
                                                        </div>
                                                    </div>
                                                    <div className="user-item__body">
                                                        <a href="some" className="user-item__name">Boob007</a>
                                                        <span className="user-item__status online">
                                                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{fill:'#3DD598', fillOpacity:'1'}} />
                                                            </svg>

                                                            Online
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="item-sub__block">
                                                    <span className="item-sub__time">21 min</span>
                                                    <button className="item-sub__button button button--transparent"><span>Reject</span></button>
                                                </div>
                                            </div>
                                            <div className="body-popup-sub-header__item item-sub">
                                                <div className="item-sub__user user-item user-item--stories">
                                                    <div className="user-item__image user-item__image--decoration">
                                                        <img className="user-photo" src={UserPhoto} alt="ph"/>
                                                        <div className="user-item__image-icon">
                                                            <img src="img/icons/logo-white.svg" alt="ph"/>
                                                        </div>
                                                    </div>
                                                    <div className="user-item__body">
                                                        <a href="some" className="user-item__name">Boob007</a>
                                                        <span className="user-item__status online">
                                                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{fill:'#3DD598', fillOpacity:'1'}} />
                                                            </svg>

                                                            Online
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="item-sub__block">
                                                    <span className="item-sub__time">21 min</span>
                                                    <button className="item-sub__button button button--transparent"><span>Reject</span></button>
                                                </div>
                                            </div>
                                            <div className="body-popup-sub-header__item item-sub">
                                                <div className="item-sub__user user-item user-item--stories">
                                                    <div className="user-item__image user-item__image--decoration">
                                                        <img className="user-photo" src={UserPhoto} alt="ph"/>
                                                        <div className="user-item__image-icon">
                                                            <img src="img/icons/logo-white.svg" alt="ph"/>
                                                        </div>
                                                    </div>
                                                    <div className="user-item__body">
                                                        <a href="some" className="user-item__name">Boob007</a>
                                                        <span className="user-item__status online">
                                                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{fill:'#3DD598', fillOpacity:'1'}} />
                                                            </svg>

                                                            Online
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="item-sub__block">
                                                    <span className="item-sub__time">21 min</span>
                                                    <button className="item-sub__button button button--transparent"><span>Reject</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`header__notifications notifications-header field notification ${openModal === 'notification' ? 'field-active' : ''}`}>
                            <div onClick={() => handleOpenModal('notification')} className="notifications-header__icon header-icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.0959C2.07459e-06 14.7151 0.154705 14.3506 0.428635 14.086L1.45759 13.0922C1.84928 12.7139 2.06977 12.1922 2.06814 11.6476L2.05867 8.4946C2.04543 4.08319 5.61789 0.5 10.0293 0.5C14.4314 0.5 18 4.06859 18 8.47067L18 11.6716C18 12.202 18.2107 12.7107 18.5858 13.0858L19.5858 14.0858C19.851 14.351 20 14.7107 20 15.0858C20 15.8668 19.3668 16.5 18.5858 16.5H14C14 18.7091 12.2091 20.5 10 20.5C7.79086 20.5 6 18.7091 6 16.5H1.40408C0.628628 16.5 0 15.8714 0 15.0959ZM8 16.5C8 17.6046 8.89543 18.5 10 18.5C11.1046 18.5 12 17.6046 12 16.5H8ZM16 11.6716C16 12.7324 16.4214 13.7499 17.1716 14.5L2.87851 14.5C3.64222 13.746 4.07136 12.7161 4.06813 11.6416L4.05867 8.4886C4.04875 5.1841 6.7248 2.5 10.0293 2.5C13.3268 2.5 16 5.17316 16 8.47067L16 11.6716Z" fill="#6F767E" style={{fill:'#6F767E', fillOpacity:'1'}} />
                                </svg>
                            </div>
                            <div className="notifications-header__notification header-icon-notification">
                                <span></span>
                            </div>

                            <Notifications/>
                        </div>

                        <div className={`header__user user-header field ${openModal === 'user' ? 'field-active' : ''}`}
                            onClick={() => handleOpenModal('user')}
                        >
                            <button type="button" className="user-header__button">
                                <div className="user-header__button-body">
                                    <span></span>
                                </div>
                            </button>
                            <img className="user-header__image" src={UserPhoto} alt="ph"/>
                            <div className="user-header__popup popup-user-header popup-main">
                                <div className="popup-main__wrapper">
                                    <div className="popup-main__content">

                                        <div className="popup-user-header__top top-popup-user-header">
                                            <div className="top-popup-user-header__image">
                                                <img src={UserPhoto} alt="ph"/>
                                            </div>
                                            <p className="top-popup-user-header__name">darkangeel</p>
                                            <p className="top-popup-user-header__username">@darkangeel</p>
                                        </div>
                                        <div className="popup-user-header__body body-popup-user-header">
                                            <div className="body-popup-user-header__rating rating-body-popup-user-header">
                                                <div className="rating-body-popup-user-header__image">

                                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_168_8467)">
                                                            <path d="M27.9598 10.7875C27.8633 10.4904 27.6066 10.274 27.2976 10.2292L18.6176 8.96779L14.7356 1.10226C14.5974 0.822207 14.3123 0.64502 14 0.64502C13.6878 0.64502 13.4026 0.822207 13.2644 1.10226L9.38227 8.96773L0.702344 10.2292C0.393415 10.274 0.136603 10.4904 0.0401892 10.7874C-0.056334 11.0845 0.0241658 11.4105 0.247728 11.6283L6.52847 17.7509L5.046 26.3959C4.99323 26.7038 5.11977 27.0147 5.37237 27.1983C5.62498 27.3818 5.95977 27.4061 6.23627 27.2607L14 23.179L21.7634 27.2607C21.8835 27.3238 22.0145 27.3549 22.1451 27.3549C22.3152 27.3549 22.4845 27.3021 22.6273 27.1983C22.8799 27.0147 23.0065 26.7037 22.9537 26.3959L21.4708 17.7509L27.7522 11.6283C27.9758 11.4104 28.0563 11.0844 27.9598 10.7875Z" fill="#FED42D"  />
                                                            <path d="M27.9598 10.7875C27.8633 10.4904 27.6066 10.274 27.2976 10.2292L18.6175 8.96778L14.7356 1.10226C14.5974 0.822207 14.3123 0.64502 14 0.64502V23.179L21.7635 27.2607C21.8835 27.3238 22.0145 27.3549 22.1451 27.3549C22.3152 27.3549 22.4845 27.3022 22.6274 27.1984C22.88 27.0148 23.0065 26.7037 22.9537 26.396L21.4708 17.7509L27.7522 11.6283C27.9758 11.4104 28.0563 11.0844 27.9598 10.7875Z" fill="#FCBF29"  />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_168_8467">
                                                                <rect width="28" height="28" fill="white" style={{fill:'white', fillOpacity:'1'}} />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className="rating-body-popup-user-header__text">You are in the <span>top 5.61%</span> of all creators!</p>
                                            </div>
                                            <div className="body-popup-user-header__content">
                                                <NavLink to={'/subscribers'} className="body-popup-user-header__subscribers subscribers">
                                                    <div className="subscribers__value">26</div>
                                                    <div className="subscribers__text">Subscibers</div>
                                                </NavLink>
                                                <div className="body-popup-user-header__fans subscribers">
                                                    <div className="subscribers__value">1389</div>
                                                    <div className="subscribers__text">Fans</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popup-user-header__menu menu-popup-user-header">
                                            <a href="some" className="menu-popup-user-header__link link-menu-popup-user-header">
                                                <div className="link-menu-popup-user-header__image">
                                                    <img src={TimelineIc} alt="ph"/>
                                                </div>
                                                <p className="link-menu-popup-user-header__text">Timeline</p>
                                            </a>
                                            <NavLink to={'/video-store'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                                <div className="link-menu-popup-user-header__image">
                                                    <img src={VideoIc} alt="ph"/>

                                                </div>
                                                <p className="link-menu-popup-user-header__text">Video Store</p>
                                            </NavLink>
                                            <NavLink to={'/messages'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                                <div className="link-menu-popup-user-header__image">
                                                    <img src={MessageIc} alt="ph"/>

                                                </div>
                                                <p className="link-menu-popup-user-header__text">Messages</p>
                                            </NavLink>
                                            <NavLink to={'/my-profile'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                                <div className="link-menu-popup-user-header__image">
                                                    <img src={SettingsIc} alt="ph"/>

                                                </div>
                                                <p className="link-menu-popup-user-header__text">Settings</p>
                                            </NavLink>
                                            <NavLink to={'/login'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                                <div className="link-menu-popup-user-header__image">
                                                    <img src={LogoutIc} alt="ph"/>

                                                </div>
                                                <p className="link-menu-popup-user-header__text">Logout</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
