import React from 'react'
// import PostPh from './../../../../assets/img/post/01.jpg'
import UserPh from './../../../../assets/img/user/01.png'
// import UserPh2 from './../../../../assets/img/user/02.jpg'
// import UserBgPh from './../../../../assets/img/user/bg.jpg'
// import LogoWhiteIc from './../../../../assets/img/icons/logo-white.svg'
import MessageIc from './../../../../assets/img/icons/user-menu/message.svg'
import ImageIc from './../../../../assets/img/icons/image.svg'
import VideoIc from './../../../../assets/img/icons/video.svg'
import AudioIc from './../../../../assets/img/icons/audio.svg'
import { NavLink } from 'react-router-dom'
// import SendIc from './../../../../assets/img/icons/send.svg'
// import MicroIc from './../../../../assets/img/icons/micro.svg'
// import ProfileIc from './../../../../assets/img/icons/user.svg'
// import StatsIc from './../../../../assets/img/icons/stats.svg'
// import RenameIc from './../../../../assets/img/icons/user-menu/edit.svg'
// import AudioMuteIc from './../../../../assets/img/icons/audio-mute.svg'
// import PinIc from './../../../../assets/img/icons/pin-green.svg'
// import BlockedUserIc from './../../../../assets/img/icons/blocked-user.svg'

interface IChatHeaderProps {

}

export const ChatHeader: React.FC<IChatHeaderProps> = () => {

    return (
        <div className="chat__top top-chat">
            <div className="top-chat__block">
                <div className="top-chat__user user-item online">
                    <a href="some" data-popup="#popup-messages-user" className="user-item__image">
                        <img className="user-photo" src={UserPh} alt="User ph" />
                        <div className="user-item__image-status">
                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" ></circle>
                            </svg>
                        </div>
                    </a>
                    <NavLink to={'/profile'} className="user-item__body">
                        <a href="some" className="user-item__name">Boob007</a>
                        <a href="some" className="user-item__username">@Boob007</a>
                    </NavLink>
                </div>
                <div className="top-chat__group">
                    <div className="groups__item item-groups">
                        <div className="item-groups__body">
                            <p className="item-groups__name">Адекваты</p>
                            <div className="item-groups__people">
                                <div className="item-groups__people-icon">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_239_14180)">
                                            <path d="M10.6943 0.974121C9.71709 0.974121 8.88427 1.60179 8.57726 2.47463C8.11463 2.20178 7.57569 2.04494 7.00067 2.04494C6.42216 2.04494 5.88013 2.2037 5.41565 2.47963C5.10173 1.61968 4.27504 1.00401 3.30707 1.00401C2.06995 1.00401 1.06348 2.00955 1.06348 3.2455C1.06348 4.48145 2.06995 5.487 3.30707 5.487C3.5101 5.487 3.70891 5.45995 3.90009 5.40784C4.01805 6.85388 5.13096 8.02291 6.55199 8.22893V10.5752H7.44942V8.22893C8.88002 8.02154 9.99838 6.83809 10.1036 5.37856C10.294 5.43028 10.492 5.45714 10.6943 5.45714C11.9315 5.45714 12.9379 4.4516 12.9379 3.21565C12.9379 1.9797 11.9314 0.974121 10.6943 0.974121ZM1.96088 3.2455C1.96088 2.50392 2.56477 1.9006 3.30704 1.9006C4.00772 1.9006 4.58481 2.43829 4.6473 3.12234C4.33098 3.48772 4.09848 3.92728 3.97943 4.41094C3.77592 4.52872 3.54632 4.59043 3.30704 4.59043C2.56477 4.5904 1.96088 3.98708 1.96088 3.2455ZM7.00067 7.36479C5.78004 7.36479 4.787 6.37268 4.787 5.15318C4.787 3.93369 5.78004 2.94157 7.00067 2.94157C8.22131 2.94157 9.21435 3.93369 9.21435 5.15318C9.21435 6.37268 8.22131 7.36479 7.00067 7.36479ZM10.6943 4.56054C10.4516 4.56054 10.2189 4.49701 10.0133 4.37585C9.89146 3.90491 9.66166 3.47692 9.35192 3.11989C9.40128 2.42288 9.98429 1.87075 10.6943 1.87075C11.4365 1.87075 12.0404 2.47407 12.0404 3.21565C12.0404 3.95723 11.4366 4.56054 10.6943 4.56054Z" fill="#3F79CF" />
                                            <path d="M10.1393 9.13323C9.97957 8.88964 9.79111 8.66432 9.5791 8.46354L10.1965 7.81287C10.4589 8.0614 10.6923 8.34035 10.89 8.64195L10.1393 9.13323Z" fill="#3F79CF" />
                                            <path d="M11.1996 13.026H2.80051C2.5527 13.026 2.36328 12.814 2.36328 12.5665V11.1832C2.36328 9.89591 2.87273 8.699 3.80815 7.81299L4.42846 8.46366C3.6736 9.17862 3.26072 10.1445 3.26072 11.1832V12.1294H10.7394V11.1832C10.7394 10.778 10.6808 10.3796 10.5541 9.9992L11.4028 9.71609C11.56 10.188 11.6368 10.6816 11.6368 11.1832V12.5664C11.6368 12.814 11.4474 13.026 11.1996 13.026Z" fill="#3F79CF" />
                                            <path d="M2.45299 8.72225H0.448718C0.200906 8.72225 0 8.53402 0 8.28645V7.34519C0 6.58835 0.262769 5.84869 0.739906 5.26245L1.4362 5.8281C1.08374 6.26115 0.897436 6.78573 0.897436 7.34516V7.82565H2.45299V8.72225Z" fill="#3F79CF" />
                                            <path d="M13.5518 8.69239H11.5176V7.79576H13.103V7.31534C13.103 6.76766 12.9237 6.25179 12.5845 5.82344L13.2883 5.26709C13.7542 5.85542 14.0005 6.56367 14.0005 7.31534V8.2566C14.0005 8.5042 13.7996 8.69239 13.5518 8.69239Z" fill="#3F79CF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_239_14180">
                                                <rect width="14" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-chat__price-list chat-price-list">
                <div className="chat-price-list__item message">
                    <div className="chat-price-list__icon">
                        <img src={MessageIc} alt="Icon" />
                    </div>
                    <p className="chat-price-list__value">$<span>5</span></p>
                </div>
                <div className="chat-price-list__item image">
                    <div className="chat-price-list__icon">
                        <img src={ImageIc} alt="Icon" />
                    </div>
                    <p className="chat-price-list__value">$<span>5</span></p>
                </div>
                <div className="chat-price-list__item video">
                    <div className="chat-price-list__icon">
                        <img src={VideoIc} alt="Icon" />
                    </div>
                    <p className="chat-price-list__value">$<span>5</span></p>
                </div>
                <div className="chat-price-list__item audio">
                    <div className="chat-price-list__icon">
                        <img src={AudioIc} alt="Icon" />
                    </div>
                    <p className="chat-price-list__value">$<span>5</span></p>
                </div>
            </div>
        </div>
    )
}
