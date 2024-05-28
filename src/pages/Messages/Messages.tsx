import { AsideMenu } from '../../components/AsideMenu/AsideMenu'

import PostPh from '../../assets/img/post/01.jpg'
import UserPh from '../../assets/img/user/01.png'
import UserPh2 from '../../assets/img/user/02.jpg'
import UserBgPh from '../../assets/img/user/bg.jpg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'
import MessageIc from '../../assets/img/icons/user-menu/message.svg'
import ImageIc from '../../assets/img/icons/image.svg'
import VideoIc from '../../assets/img/icons/video.svg'
import AudioIc from '../../assets/img/icons/audio.svg'
import SendIc from '../../assets/img/icons/send.svg'
import MicroIc from '../../assets/img/icons/micro.svg'
import ProfileIc from '../../assets/img/icons/user.svg'
import StatsIc from '../../assets/img/icons/stats.svg'
import RenameIc from '../../assets/img/icons/user-menu/edit.svg'
import AudioMuteIc from '../../assets/img/icons/audio-mute.svg'
import PinIc from '../../assets/img/icons/pin-green.svg'
import BlockedUserIc from '../../assets/img/icons/blocked-user.svg'

export const Messages = () => {
    return (
        <main className="page messages-page">
            <AsideMenu/>

            <div className="main-block">
                <div className="main-messages">
                    <div className="main-messages__body">
                        <div className="main-messages__wrapper">
                            <div className="body-messages__top top-body-messages">
                                <h3 className="top-body-messages__title title title--small">Messages</h3>
                                <div className="top-body-messages__actions actions field">
                                    <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                    </svg>
                                    <div className="actions__popup popup-actions">
                                        <div className="popup-actions__wrapper">
                                            <div className="popup-actions__content">
                                                <div className="popup-actions__body body-popup-actions">
                                                    <a href="#popup-mass-message" data-popup="#popup-mass-message"  className="body-popup-actions__item mass">Mass message</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body-messages__search search">
                                <input  type="text" name="form[]" placeholder="Search by nickname" className="search__input input"/>
                            </div>
                            <div className="groups__slider swiper">
                                <div className="groups__wrapper swiper-wrapper">
                                    <div className="groups__item item-groups groups__slide swiper-slide active">
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
                                                    
                                                <span>16</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="groups__item item-groups groups__slide swiper-slide">
                                        <div className="item-groups__body">
                                            <p className="item-groups__name">Нищие</p>
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
                                                    
                                                <span>16</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="groups__item item-groups groups__slide swiper-slide">
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
                                                    
                                                <span>16</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="some" data-popup="#popup-add-group" className="groups__add button button--fw button--transparent"><span>Add new group</span></a>
                        </div>
                        <div className="body-messages__content">

                            <div className="body-messages__items">
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" data-popup="#popup-mass-message" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-messages__item item-message"> 
                                    <p className="user-item__value">$<span>3121.2</span></p>
                                    <div className="item-message__block">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={UserPh2} alt="User ph"/>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoWhiteIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <a href="some" className="user-item__name">Boob007</a>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                                    </svg>
                                                        
                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="top-body-messages__actions actions field">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                            </svg>
                                            <div className="actions__popup popup-actions">
                                                <div className="popup-actions__wrapper">
                                                    <div className="popup-actions__content">
                                                        <div className="popup-actions__body body-popup-actions">
                                                            <a href="some" className="body-popup-actions__item mass">Mass message</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="chat">
                    <div className="chat__container">
                        <div className="chat__body">
                            <div className="chat__top top-chat">
                                <div className="top-chat__block">
                                    <div className="top-chat__user user-item online">
                                        <a href="some" data-popup="#popup-messages-user" className="user-item__image">
                                            <img className="user-photo" src={UserPh} alt="User ph"/>
                                            <div className="user-item__image-status">
                                                <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4" cy="4.5" r="4" fill="#3DD598" ></circle>
                                                </svg>
                                            </div>
                                        </a>
                                        <div className="user-item__body">
                                            <a href="some" className="user-item__name">Boob007</a>
                                            <a href="some" className="user-item__username">@Boob007</a>
                                        </div>
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
                                            <img src={MessageIc} alt="Icon"/>
                                        </div>
                                        <p className="chat-price-list__value">$<span>5</span></p>
                                    </div>
                                    <div className="chat-price-list__item image">
                                        <div className="chat-price-list__icon">
                                            <img src={ImageIc} alt="Icon"/>
                                        </div>
                                        <p className="chat-price-list__value">$<span>5</span></p>
                                    </div>
                                    <div className="chat-price-list__item video">
                                        <div className="chat-price-list__icon">
                                            <img src={VideoIc} alt="Icon"/>
                                        </div>
                                        <p className="chat-price-list__value">$<span>5</span></p>
                                    </div>
                                    <div className="chat-price-list__item audio">
                                        <div className="chat-price-list__icon">
                                            <img src={AudioIc} alt="Icon"/>
                                        </div>
                                        <p className="chat-price-list__value">$<span>5</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat__content content-chat">
                                <div className="content-chat__body theme">
                                    <div className="content-chat__message chat-message">
                                        <div className="chat-message__block">
                                            <div className="chat-message__user user-item">
                                                <div className="user-item__image">
                                                    <img className="user-photo" src={UserPh} alt="User ph"/>
                                                </div>
                                            </div>
                                            <div className="chat-message__content">
                                                <div className="chat-message__body">
                                                    <div  className="chat-message__text">
                                                        <div data-gallery className="content-post__images gallery">
                                                        
                                                            
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                        </div>
                                                        <span className="chat-message__time-send">11:22</span>
                                                    </div>
                                                    <div className="chat-message__actions actions-chat-message">
                                                        <button className="actions-chat-message__button reply">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0303 6.47001C10.1708 6.61064 10.2497 6.80126 10.2497 7.00001C10.2497 7.19876 10.1708 7.38939 10.0303 7.53001L6.31032 11.25H14.5003C15.4533 11.25 16.8673 11.53 18.0633 12.391C19.2983 13.281 20.2503 14.756 20.2503 17C20.2503 17.1989 20.1713 17.3897 20.0306 17.5303C19.89 17.671 19.6992 17.75 19.5003 17.75C19.3014 17.75 19.1106 17.671 18.97 17.5303C18.8293 17.3897 18.7503 17.1989 18.7503 17C18.7503 15.244 18.0353 14.22 17.1873 13.609C16.3003 12.97 15.2133 12.75 14.5003 12.75H6.31032L10.0303 16.47C10.104 16.5387 10.1631 16.6215 10.2041 16.7135C10.2451 16.8055 10.2671 16.9048 10.2689 17.0055C10.2707 17.1062 10.2522 17.2062 10.2144 17.2996C10.1767 17.393 10.1206 17.4778 10.0494 17.549C9.97814 17.6203 9.8933 17.6764 9.79991 17.7141C9.70653 17.7519 9.6065 17.7704 9.50579 17.7686C9.40509 17.7668 9.30578 17.7448 9.21378 17.7038C9.12178 17.6628 9.03898 17.6037 8.97032 17.53L3.97032 12.53C3.82987 12.3894 3.75098 12.1988 3.75098 12C3.75098 11.8013 3.82987 11.6106 3.97032 11.47L8.97032 6.47001C9.11094 6.32956 9.30157 6.25067 9.50032 6.25067C9.69907 6.25067 9.88969 6.32956 10.0303 6.47001Z" fill="#A3A3A3" />
                                                            </svg>
                                                            
                                                        </button>
                                                        {/* onclick="toggleActive(this)" */}
                                                        <button  className="actions-chat-message__button like">
                                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383"></path>
                                                            </svg>
                                                        </button>
        
                                                    </div>
                                                </div>
                                                <div className="chat-message__bottom">
                                                    <p className="chat-message__edited">Edited</p>
                                                    <div className="chat-message__status status-message done">
                                                        <div className="status-message__icon status-message__icon--done">
                                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 1.19592L4.68837 8.07092C4.57147 8.1859 4.41407 8.25034 4.25009 8.25034C4.08612 8.25034 3.92871 8.1859 3.81181 8.07092L0.811812 5.12482C0.753282 5.06727 0.706661 4.99875 0.674611 4.92317C0.642562 4.8476 0.625711 4.76645 0.625022 4.68437C0.624333 4.60228 0.639818 4.52086 0.670594 4.44476C0.70137 4.36866 0.746834 4.29937 0.80439 4.24084C0.861946 4.18231 0.930467 4.13569 1.00604 4.10364C1.08161 4.07159 1.16276 4.05474 1.24485 4.05405C1.32693 4.05336 1.40835 4.06884 1.48445 4.09962C1.56055 4.1304 1.62984 4.17586 1.68837 4.23342L4.25009 6.74904L10.8126 0.303729C10.9309 0.18749 11.0905 0.12301 11.2564 0.124475C11.3385 0.125201 11.4197 0.142094 11.4953 0.174191C11.5709 0.206288 11.6394 0.252959 11.697 0.311541C11.7545 0.370123 11.8 0.439468 11.8307 0.515616C11.8615 0.591765 11.8769 0.673225 11.8762 0.755347C11.8755 0.837469 11.8586 0.918643 11.8265 0.994236C11.7944 1.06983 11.747 1.13836 11.6884 1.19592Z" fill="#6F767E" />
                                                            </svg>
                                                        </div>
                                                        <div className="status-message__icon status-message__icon--read">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 6.69613L4.68837 13.5711C4.57147 13.6861 4.41407 13.7506 4.25009 13.7506C4.08612 13.7506 3.92871 13.6861 3.81181 13.5711L0.811812 10.625C0.753282 10.5675 0.706661 10.499 0.674611 10.4234C0.642562 10.3478 0.625711 10.2667 0.625022 10.1846C0.624333 10.1025 0.639818 10.0211 0.670594 9.94498C0.70137 9.86888 0.746834 9.79958 0.80439 9.74105C0.861946 9.68252 0.930467 9.6359 1.00604 9.60385C1.08161 9.5718 1.16276 9.55495 1.24485 9.55426C1.32693 9.55357 1.40835 9.56906 1.48445 9.59984C1.56055 9.63061 1.62984 9.67608 1.68837 9.73363L4.25009 12.2493L10.8126 5.80394C10.9309 5.6877 11.0905 5.62323 11.2564 5.62469C11.3385 5.62542 11.4197 5.64231 11.4953 5.67441C11.5709 5.7065 11.6394 5.75317 11.697 5.81176C11.7545 5.87034 11.8 5.93968 11.8307 6.01583C11.8615 6.09198 11.8769 6.17344 11.8762 6.25556C11.8755 6.33768 11.8586 6.41886 11.8265 6.49445C11.7944 6.57004 11.7477 6.63858 11.6892 6.69613H11.6884ZM19.1962 5.81176C19.1387 5.75313 19.0701 5.70642 18.9945 5.6743C18.9189 5.64217 18.8378 5.62526 18.7556 5.62454C18.6735 5.62381 18.592 5.63928 18.5159 5.67007C18.4397 5.70085 18.3704 5.74634 18.3118 5.80394L11.7493 12.2493L10.2782 10.8039C10.1599 10.6878 10.0003 10.6234 9.83453 10.625C9.66875 10.6265 9.51037 10.6938 9.39423 10.8121C9.2781 10.9305 9.21372 11.0901 9.21526 11.2558C9.21679 11.4216 9.28413 11.58 9.40244 11.6961L11.311 13.5711C11.4279 13.6861 11.5853 13.7506 11.7493 13.7506C11.9133 13.7506 12.0707 13.6861 12.1876 13.5711L19.1876 6.69613C19.2463 6.63865 19.293 6.57017 19.3252 6.4946C19.3574 6.41903 19.3744 6.33786 19.3752 6.25573C19.376 6.17359 19.3606 6.0921 19.3299 6.01592C19.2992 5.93974 19.2537 5.87037 19.1962 5.81176Z" fill="#329993" />
                                                                </svg>
                                                                
                                                                
                                                                
                                                        </div>  
                                                    </div>
                                                    <p className="chat-message__time"><span>11:22</span>AM</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="content-chat__message chat-message">
                                        <div className="chat-message__block">
                                            <div className="chat-message__user user-item">
                                                <div className="user-item__image">
                                                    <img className="user-photo" src={UserPh} alt="User ph"/>
                                                </div>
                                            </div>
                                            <div className="chat-message__content">
                                                <div className="chat-message__body">
                                                    <div className="chat-message__text">
                                                        <div data-gallery className="content-post__images gallery">
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                        </div>
                                                        <span className="chat-message__time-send">11:22</span>
                                                        
                                                    </div>
                                                    <div className="chat-message__actions actions-chat-message">
                                                        <button className="actions-chat-message__button reply">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0303 6.47001C10.1708 6.61064 10.2497 6.80126 10.2497 7.00001C10.2497 7.19876 10.1708 7.38939 10.0303 7.53001L6.31032 11.25H14.5003C15.4533 11.25 16.8673 11.53 18.0633 12.391C19.2983 13.281 20.2503 14.756 20.2503 17C20.2503 17.1989 20.1713 17.3897 20.0306 17.5303C19.89 17.671 19.6992 17.75 19.5003 17.75C19.3014 17.75 19.1106 17.671 18.97 17.5303C18.8293 17.3897 18.7503 17.1989 18.7503 17C18.7503 15.244 18.0353 14.22 17.1873 13.609C16.3003 12.97 15.2133 12.75 14.5003 12.75H6.31032L10.0303 16.47C10.104 16.5387 10.1631 16.6215 10.2041 16.7135C10.2451 16.8055 10.2671 16.9048 10.2689 17.0055C10.2707 17.1062 10.2522 17.2062 10.2144 17.2996C10.1767 17.393 10.1206 17.4778 10.0494 17.549C9.97814 17.6203 9.8933 17.6764 9.79991 17.7141C9.70653 17.7519 9.6065 17.7704 9.50579 17.7686C9.40509 17.7668 9.30578 17.7448 9.21378 17.7038C9.12178 17.6628 9.03898 17.6037 8.97032 17.53L3.97032 12.53C3.82987 12.3894 3.75098 12.1988 3.75098 12C3.75098 11.8013 3.82987 11.6106 3.97032 11.47L8.97032 6.47001C9.11094 6.32956 9.30157 6.25067 9.50032 6.25067C9.69907 6.25067 9.88969 6.32956 10.0303 6.47001Z" fill="#A3A3A3" />
                                                            </svg>
                                                            
                                                        </button>
                                                        {/* onclick="toggleActive(this)"  */}
                                                        <button className="actions-chat-message__button like">
                                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383"></path>
                                                            </svg>
                                                        </button>
        
                                                    </div>
                                                </div>
                                                <div className="chat-message__bottom">
                                                    <p className="chat-message__edited">Edited</p>
                                                    <div className="chat-message__status status-message done">
                                                        <div className="status-message__icon status-message__icon--done">
                                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 1.19592L4.68837 8.07092C4.57147 8.1859 4.41407 8.25034 4.25009 8.25034C4.08612 8.25034 3.92871 8.1859 3.81181 8.07092L0.811812 5.12482C0.753282 5.06727 0.706661 4.99875 0.674611 4.92317C0.642562 4.8476 0.625711 4.76645 0.625022 4.68437C0.624333 4.60228 0.639818 4.52086 0.670594 4.44476C0.70137 4.36866 0.746834 4.29937 0.80439 4.24084C0.861946 4.18231 0.930467 4.13569 1.00604 4.10364C1.08161 4.07159 1.16276 4.05474 1.24485 4.05405C1.32693 4.05336 1.40835 4.06884 1.48445 4.09962C1.56055 4.1304 1.62984 4.17586 1.68837 4.23342L4.25009 6.74904L10.8126 0.303729C10.9309 0.18749 11.0905 0.12301 11.2564 0.124475C11.3385 0.125201 11.4197 0.142094 11.4953 0.174191C11.5709 0.206288 11.6394 0.252959 11.697 0.311541C11.7545 0.370123 11.8 0.439468 11.8307 0.515616C11.8615 0.591765 11.8769 0.673225 11.8762 0.755347C11.8755 0.837469 11.8586 0.918643 11.8265 0.994236C11.7944 1.06983 11.747 1.13836 11.6884 1.19592Z" fill="#6F767E" />
                                                            </svg>
                                                        </div>
                                                        <div className="status-message__icon status-message__icon--read">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 6.69613L4.68837 13.5711C4.57147 13.6861 4.41407 13.7506 4.25009 13.7506C4.08612 13.7506 3.92871 13.6861 3.81181 13.5711L0.811812 10.625C0.753282 10.5675 0.706661 10.499 0.674611 10.4234C0.642562 10.3478 0.625711 10.2667 0.625022 10.1846C0.624333 10.1025 0.639818 10.0211 0.670594 9.94498C0.70137 9.86888 0.746834 9.79958 0.80439 9.74105C0.861946 9.68252 0.930467 9.6359 1.00604 9.60385C1.08161 9.5718 1.16276 9.55495 1.24485 9.55426C1.32693 9.55357 1.40835 9.56906 1.48445 9.59984C1.56055 9.63061 1.62984 9.67608 1.68837 9.73363L4.25009 12.2493L10.8126 5.80394C10.9309 5.6877 11.0905 5.62323 11.2564 5.62469C11.3385 5.62542 11.4197 5.64231 11.4953 5.67441C11.5709 5.7065 11.6394 5.75317 11.697 5.81176C11.7545 5.87034 11.8 5.93968 11.8307 6.01583C11.8615 6.09198 11.8769 6.17344 11.8762 6.25556C11.8755 6.33768 11.8586 6.41886 11.8265 6.49445C11.7944 6.57004 11.7477 6.63858 11.6892 6.69613H11.6884ZM19.1962 5.81176C19.1387 5.75313 19.0701 5.70642 18.9945 5.6743C18.9189 5.64217 18.8378 5.62526 18.7556 5.62454C18.6735 5.62381 18.592 5.63928 18.5159 5.67007C18.4397 5.70085 18.3704 5.74634 18.3118 5.80394L11.7493 12.2493L10.2782 10.8039C10.1599 10.6878 10.0003 10.6234 9.83453 10.625C9.66875 10.6265 9.51037 10.6938 9.39423 10.8121C9.2781 10.9305 9.21372 11.0901 9.21526 11.2558C9.21679 11.4216 9.28413 11.58 9.40244 11.6961L11.311 13.5711C11.4279 13.6861 11.5853 13.7506 11.7493 13.7506C11.9133 13.7506 12.0707 13.6861 12.1876 13.5711L19.1876 6.69613C19.2463 6.63865 19.293 6.57017 19.3252 6.4946C19.3574 6.41903 19.3744 6.33786 19.3752 6.25573C19.376 6.17359 19.3606 6.0921 19.3299 6.01592C19.2992 5.93974 19.2537 5.87037 19.1962 5.81176Z" fill="#329993" />
                                                                </svg>
                                                                
                                                                
                                                                
                                                        </div>  
                                                    </div>
                                                    <p className="chat-message__time"><span>11:22</span>AM</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="content-chat__message chat-message chat-message--main">
                                        <div className="chat-message__block">
                                            <div className="chat-message__user user-item">
                                                <div className="user-item__image">
                                                    <img className="user-photo" src={UserPh} alt="User ph"/>
                                                </div>
                                            </div>
                                            <div className="chat-message__content">
                                                <div className="chat-message__body">
                                                    <div className="chat-message__text">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis distinctio, recusandae animi hic est.</p>
                                                        <span className="chat-message__time-send">11:22</span>

                                                    </div>
                                                    <div className="chat-message__actions actions-chat-message">
                                                        <button className="actions-chat-message__button reply">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_360_6133)">
                                                                <path d="M2.16397 14.3489C1.97197 14.3489 1.78034 14.2758 1.63372 14.1291C1.34084 13.8363 1.34084 13.3615 1.63372 13.0686L13.354 1.34838C13.6465 1.0555 14.1216 1.0555 14.4145 1.34838C14.7073 1.64125 14.7073 2.116 14.4145 2.40888L2.69422 14.1291C2.54797 14.2754 2.35597 14.3489 2.16397 14.3489Z" fill="#838383" />
                                                                <path d="M1.00661 19.75C0.954484 19.75 0.901609 19.7443 0.848734 19.7331C0.443734 19.6461 0.185734 19.2475 0.272734 18.8425L1.43148 13.4413C1.51848 13.0363 1.91898 12.7791 2.32211 12.8653C2.72711 12.9523 2.98511 13.351 2.89811 13.756L1.73936 19.1571C1.66398 19.5092 1.35273 19.75 1.00661 19.75Z" fill="#838383" />
                                                                <path d="M6.40713 18.5912C6.21513 18.5912 6.02351 18.5181 5.87688 18.3715C5.58401 18.0786 5.58401 17.6039 5.87688 17.311L17.5971 5.59112C17.8896 5.29824 18.3648 5.29824 18.6576 5.59112C18.9505 5.88399 18.9505 6.35874 18.6576 6.65162L6.93776 18.3715C6.79113 18.5181 6.59913 18.5912 6.40713 18.5912Z" fill="#838383" />
                                                                <path d="M1.0044 19.75C0.658271 19.75 0.347396 19.5093 0.271646 19.1571C0.185021 18.7521 0.442646 18.3535 0.847646 18.2665L6.24877 17.1078C6.65415 17.0219 7.05277 17.2791 7.1394 17.6838C7.22602 18.0888 6.9684 18.4874 6.5634 18.5744L1.16227 19.7331C1.1094 19.7448 1.05652 19.75 1.0044 19.75Z" fill="#838383" />
                                                                <path d="M16.006 8.9924C15.814 8.9924 15.622 8.91928 15.4757 8.77265L11.2333 4.53028C10.9405 4.2374 10.9405 3.76265 11.2333 3.46978C11.5258 3.1769 12.0013 3.1769 12.2938 3.46978L16.5362 7.71215C16.8291 8.00503 16.8291 8.47978 16.5362 8.77265C16.39 8.91928 16.198 8.9924 16.006 8.9924Z" fill="#838383" />
                                                                <path d="M18.1268 6.87135C17.9348 6.87135 17.7428 6.79822 17.5962 6.6516C17.3033 6.35872 17.3033 5.88397 17.5962 5.59072C18.0136 5.17335 18.2434 4.60822 18.2434 3.99997C18.2434 3.39172 18.0136 2.8266 17.5962 2.40922C17.1784 1.99147 16.6133 1.7616 16.0051 1.7616C15.3968 1.7616 14.8317 1.99147 14.4143 2.40922C14.1218 2.7021 13.6471 2.70247 13.3534 2.40922C13.0606 2.11635 13.0606 1.6416 13.3534 1.34835C14.0539 0.647472 14.9956 0.261597 16.0051 0.261597C17.0142 0.261597 17.9562 0.647472 18.6567 1.34835C19.3576 2.04885 19.7434 2.99047 19.7434 3.99997C19.7434 5.00947 19.3576 5.9511 18.6567 6.6516C18.5108 6.79785 18.3188 6.87135 18.1268 6.87135Z" fill="#838383" />
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_360_6133">
                                                                <rect width="20" height="20" fill="white" />
                                                                </clipPath>
                                                                </defs>
                                                            </svg>
                                                                
                                                            
                                                        </button>
                                                        {/* onclick="toggleActive(this)"  */}
                                                        <button className="actions-chat-message__button like">
                                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383"></path>
                                                            </svg>
                                                        </button>
                                                        <button className="actions-chat-message__button reply">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.0312 2.34375H14.1016V1.75781C14.1016 0.788555 13.313 0 12.3438 0H7.65625C6.68699 0 5.89844 0.788555 5.89844 1.75781V2.34375H2.96875C1.99949 2.34375 1.21094 3.1323 1.21094 4.10156C1.21094 4.88 1.71973 5.54145 2.42207 5.77191L3.46719 18.3881C3.54246 19.292 4.31191 20 5.21891 20H14.7811C15.6881 20 16.4576 19.292 16.5329 18.3879L17.5779 5.77187C18.2803 5.54145 18.7891 4.88 18.7891 4.10156C18.7891 3.1323 18.0005 2.34375 17.0312 2.34375ZM7.07031 1.75781C7.07031 1.43473 7.33316 1.17188 7.65625 1.17188H12.3438C12.6668 1.17188 12.9297 1.43473 12.9297 1.75781V2.34375H7.07031V1.75781ZM15.365 18.2909C15.3399 18.5921 15.0834 18.8281 14.7811 18.8281H5.21891C4.9166 18.8281 4.66012 18.5921 4.63508 18.2911L3.60523 5.85938H16.3948L15.365 18.2909ZM17.0312 4.6875H2.96875C2.64566 4.6875 2.38281 4.42465 2.38281 4.10156C2.38281 3.77848 2.64566 3.51562 2.96875 3.51562H17.0312C17.3543 3.51562 17.6172 3.77848 17.6172 4.10156C17.6172 4.42465 17.3543 4.6875 17.0312 4.6875Z" fill="#838383" />
                                                                <path d="M7.65516 17.034L7.06923 7.5809C7.04919 7.25789 6.76962 7.01222 6.44817 7.03234C6.12516 7.05238 5.87958 7.33043 5.89958 7.6534L6.48551 17.1066C6.50477 17.4172 6.76274 17.6562 7.06977 17.6562C7.40911 17.6562 7.67598 17.3705 7.65516 17.034Z" fill="#838383" />
                                                                <path d="M10 7.03125C9.67641 7.03125 9.41406 7.29359 9.41406 7.61719V17.0703C9.41406 17.3939 9.67641 17.6562 10 17.6562C10.3236 17.6562 10.5859 17.3939 10.5859 17.0703V7.61719C10.5859 7.29359 10.3236 7.03125 10 7.03125Z" fill="#838383" />
                                                                <path d="M13.5519 7.03239C13.2296 7.01236 12.9508 7.25794 12.9308 7.58095L12.3449 17.0341C12.3249 17.357 12.5705 17.6351 12.8935 17.6551C13.2166 17.6751 13.4945 17.4294 13.5145 17.1066L14.1005 7.65345C14.1205 7.33044 13.8749 7.05239 13.5519 7.03239Z" fill="#838383" />
                                                            </svg>
                                                                
                                                                
                                                            
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="chat-message__bottom">
                                                    <p className="chat-message__edited">Edited</p>
                                                    <div className="chat-message__status status-message read">
                                                        <div className="status-message__icon status-message__icon--done">
                                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 1.19592L4.68837 8.07092C4.57147 8.1859 4.41407 8.25034 4.25009 8.25034C4.08612 8.25034 3.92871 8.1859 3.81181 8.07092L0.811812 5.12482C0.753282 5.06727 0.706661 4.99875 0.674611 4.92317C0.642562 4.8476 0.625711 4.76645 0.625022 4.68437C0.624333 4.60228 0.639818 4.52086 0.670594 4.44476C0.70137 4.36866 0.746834 4.29937 0.80439 4.24084C0.861946 4.18231 0.930467 4.13569 1.00604 4.10364C1.08161 4.07159 1.16276 4.05474 1.24485 4.05405C1.32693 4.05336 1.40835 4.06884 1.48445 4.09962C1.56055 4.1304 1.62984 4.17586 1.68837 4.23342L4.25009 6.74904L10.8126 0.303729C10.9309 0.18749 11.0905 0.12301 11.2564 0.124475C11.3385 0.125201 11.4197 0.142094 11.4953 0.174191C11.5709 0.206288 11.6394 0.252959 11.697 0.311541C11.7545 0.370123 11.8 0.439468 11.8307 0.515616C11.8615 0.591765 11.8769 0.673225 11.8762 0.755347C11.8755 0.837469 11.8586 0.918643 11.8265 0.994236C11.7944 1.06983 11.747 1.13836 11.6884 1.19592Z" fill="#6F767E" />
                                                            </svg>
                                                        </div>
                                                        <div className="status-message__icon status-message__icon--read">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 6.69613L4.68837 13.5711C4.57147 13.6861 4.41407 13.7506 4.25009 13.7506C4.08612 13.7506 3.92871 13.6861 3.81181 13.5711L0.811812 10.625C0.753282 10.5675 0.706661 10.499 0.674611 10.4234C0.642562 10.3478 0.625711 10.2667 0.625022 10.1846C0.624333 10.1025 0.639818 10.0211 0.670594 9.94498C0.70137 9.86888 0.746834 9.79958 0.80439 9.74105C0.861946 9.68252 0.930467 9.6359 1.00604 9.60385C1.08161 9.5718 1.16276 9.55495 1.24485 9.55426C1.32693 9.55357 1.40835 9.56906 1.48445 9.59984C1.56055 9.63061 1.62984 9.67608 1.68837 9.73363L4.25009 12.2493L10.8126 5.80394C10.9309 5.6877 11.0905 5.62323 11.2564 5.62469C11.3385 5.62542 11.4197 5.64231 11.4953 5.67441C11.5709 5.7065 11.6394 5.75317 11.697 5.81176C11.7545 5.87034 11.8 5.93968 11.8307 6.01583C11.8615 6.09198 11.8769 6.17344 11.8762 6.25556C11.8755 6.33768 11.8586 6.41886 11.8265 6.49445C11.7944 6.57004 11.7477 6.63858 11.6892 6.69613H11.6884ZM19.1962 5.81176C19.1387 5.75313 19.0701 5.70642 18.9945 5.6743C18.9189 5.64217 18.8378 5.62526 18.7556 5.62454C18.6735 5.62381 18.592 5.63928 18.5159 5.67007C18.4397 5.70085 18.3704 5.74634 18.3118 5.80394L11.7493 12.2493L10.2782 10.8039C10.1599 10.6878 10.0003 10.6234 9.83453 10.625C9.66875 10.6265 9.51037 10.6938 9.39423 10.8121C9.2781 10.9305 9.21372 11.0901 9.21526 11.2558C9.21679 11.4216 9.28413 11.58 9.40244 11.6961L11.311 13.5711C11.4279 13.6861 11.5853 13.7506 11.7493 13.7506C11.9133 13.7506 12.0707 13.6861 12.1876 13.5711L19.1876 6.69613C19.2463 6.63865 19.293 6.57017 19.3252 6.4946C19.3574 6.41903 19.3744 6.33786 19.3752 6.25573C19.376 6.17359 19.3606 6.0921 19.3299 6.01592C19.2992 5.93974 19.2537 5.87037 19.1962 5.81176Z" fill="#329993" />
                                                                </svg>
                                                                
                                                                
                                                                
                                                        </div>  
                                                    </div>
                                                    <p className="chat-message__time"><span>11:22</span>AM</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="content-chat__message chat-message">
                                        <div className="chat-message__block">
                                            <div className="chat-message__user user-item">
                                                <div className="user-item__image">
                                                    <img className="user-photo" src={UserPh} alt="User ph"/>
                                                </div>
                                            </div>
                                            <div className="chat-message__content">
                                                <div className="chat-message__body">
                                                    <div className="chat-message__text locked">
                                                        <div data-gallery className="content-post__images gallery">
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                            <a href="@img/post/01.jpg" className="content-post__image gallery__image">
                                                                <img src={PostPh} alt="ph" className="ibg gallery__preview"/>
                                                            </a>
                                                        </div>
                                                        <div className="content-post__image-unlock unlock">
                                                            <div className="unlock__body">
                                                                <a href="some" className="unlock__button button button--fw"><span>Follow to unlock</span></a>
                                                            </div>
                                                        </div>
                                                        <span className="chat-message__time-send">11:22</span>
                                                        
                                                    </div>
                                                    <div className="chat-message__actions actions-chat-message">
                                                        <button className='actions-chat-message__button reply'>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0303 6.47001C10.1708 6.61064 10.2497 6.80126 10.2497 7.00001C10.2497 7.19876 10.1708 7.38939 10.0303 7.53001L6.31032 11.25H14.5003C15.4533 11.25 16.8673 11.53 18.0633 12.391C19.2983 13.281 20.2503 14.756 20.2503 17C20.2503 17.1989 20.1713 17.3897 20.0306 17.5303C19.89 17.671 19.6992 17.75 19.5003 17.75C19.3014 17.75 19.1106 17.671 18.97 17.5303C18.8293 17.3897 18.7503 17.1989 18.7503 17C18.7503 15.244 18.0353 14.22 17.1873 13.609C16.3003 12.97 15.2133 12.75 14.5003 12.75H6.31032L10.0303 16.47C10.104 16.5387 10.1631 16.6215 10.2041 16.7135C10.2451 16.8055 10.2671 16.9048 10.2689 17.0055C10.2707 17.1062 10.2522 17.2062 10.2144 17.2996C10.1767 17.393 10.1206 17.4778 10.0494 17.549C9.97814 17.6203 9.8933 17.6764 9.79991 17.7141C9.70653 17.7519 9.6065 17.7704 9.50579 17.7686C9.40509 17.7668 9.30578 17.7448 9.21378 17.7038C9.12178 17.6628 9.03898 17.6037 8.97032 17.53L3.97032 12.53C3.82987 12.3894 3.75098 12.1988 3.75098 12C3.75098 11.8013 3.82987 11.6106 3.97032 11.47L8.97032 6.47001C9.11094 6.32956 9.30157 6.25067 9.50032 6.25067C9.69907 6.25067 9.88969 6.32956 10.0303 6.47001Z" fill="#A3A3A3" />
                                                            </svg>
                                                        </button>
                                                        {/* onclick="toggleActive(this)" */}
                                                        <button  className="actions-chat-message__button like">
                                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383"></path>
                                                            </svg>
                                                        </button>
        
                                                    </div>
                                                </div>
                                                <div className="chat-message__bottom">
                                                    <p className="chat-message__edited">Edited</p>
                                                    <div className="chat-message__status status-message done">
                                                        <div className="status-message__icon status-message__icon--done">
                                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 1.19592L4.68837 8.07092C4.57147 8.1859 4.41407 8.25034 4.25009 8.25034C4.08612 8.25034 3.92871 8.1859 3.81181 8.07092L0.811812 5.12482C0.753282 5.06727 0.706661 4.99875 0.674611 4.92317C0.642562 4.8476 0.625711 4.76645 0.625022 4.68437C0.624333 4.60228 0.639818 4.52086 0.670594 4.44476C0.70137 4.36866 0.746834 4.29937 0.80439 4.24084C0.861946 4.18231 0.930467 4.13569 1.00604 4.10364C1.08161 4.07159 1.16276 4.05474 1.24485 4.05405C1.32693 4.05336 1.40835 4.06884 1.48445 4.09962C1.56055 4.1304 1.62984 4.17586 1.68837 4.23342L4.25009 6.74904L10.8126 0.303729C10.9309 0.18749 11.0905 0.12301 11.2564 0.124475C11.3385 0.125201 11.4197 0.142094 11.4953 0.174191C11.5709 0.206288 11.6394 0.252959 11.697 0.311541C11.7545 0.370123 11.8 0.439468 11.8307 0.515616C11.8615 0.591765 11.8769 0.673225 11.8762 0.755347C11.8755 0.837469 11.8586 0.918643 11.8265 0.994236C11.7944 1.06983 11.747 1.13836 11.6884 1.19592Z" fill="#6F767E" />
                                                            </svg>
                                                        </div>
                                                        <div className="status-message__icon status-message__icon--read">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 6.69613L4.68837 13.5711C4.57147 13.6861 4.41407 13.7506 4.25009 13.7506C4.08612 13.7506 3.92871 13.6861 3.81181 13.5711L0.811812 10.625C0.753282 10.5675 0.706661 10.499 0.674611 10.4234C0.642562 10.3478 0.625711 10.2667 0.625022 10.1846C0.624333 10.1025 0.639818 10.0211 0.670594 9.94498C0.70137 9.86888 0.746834 9.79958 0.80439 9.74105C0.861946 9.68252 0.930467 9.6359 1.00604 9.60385C1.08161 9.5718 1.16276 9.55495 1.24485 9.55426C1.32693 9.55357 1.40835 9.56906 1.48445 9.59984C1.56055 9.63061 1.62984 9.67608 1.68837 9.73363L4.25009 12.2493L10.8126 5.80394C10.9309 5.6877 11.0905 5.62323 11.2564 5.62469C11.3385 5.62542 11.4197 5.64231 11.4953 5.67441C11.5709 5.7065 11.6394 5.75317 11.697 5.81176C11.7545 5.87034 11.8 5.93968 11.8307 6.01583C11.8615 6.09198 11.8769 6.17344 11.8762 6.25556C11.8755 6.33768 11.8586 6.41886 11.8265 6.49445C11.7944 6.57004 11.7477 6.63858 11.6892 6.69613H11.6884ZM19.1962 5.81176C19.1387 5.75313 19.0701 5.70642 18.9945 5.6743C18.9189 5.64217 18.8378 5.62526 18.7556 5.62454C18.6735 5.62381 18.592 5.63928 18.5159 5.67007C18.4397 5.70085 18.3704 5.74634 18.3118 5.80394L11.7493 12.2493L10.2782 10.8039C10.1599 10.6878 10.0003 10.6234 9.83453 10.625C9.66875 10.6265 9.51037 10.6938 9.39423 10.8121C9.2781 10.9305 9.21372 11.0901 9.21526 11.2558C9.21679 11.4216 9.28413 11.58 9.40244 11.6961L11.311 13.5711C11.4279 13.6861 11.5853 13.7506 11.7493 13.7506C11.9133 13.7506 12.0707 13.6861 12.1876 13.5711L19.1876 6.69613C19.2463 6.63865 19.293 6.57017 19.3252 6.4946C19.3574 6.41903 19.3744 6.33786 19.3752 6.25573C19.376 6.17359 19.3606 6.0921 19.3299 6.01592C19.2992 5.93974 19.2537 5.87037 19.1962 5.81176Z" fill="#329993" />
                                                                </svg>
                                                                
                                                                
                                                                
                                                        </div>  
                                                    </div>
                                                    <p className="chat-message__time"><span>11:22</span>AM</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="content-chat__message chat-message chat-message--main">
                                        <div className="chat-message__block">
                                            <div className="chat-message__user user-item">
                                                <div className="user-item__image">
                                                    <img className="user-photo" src={UserPh} alt="User ph"/>
                                                </div>
                                            </div>
                                            <div className="chat-message__content">
                                                <div className="chat-message__body">
                                                    <div className="chat-message__text">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis distinctio, recusandae animi hic est.</p>
                                                        <span className="chat-message__time-send">11:22</span>
                                                    </div>
                                                    <div className="chat-message__actions actions-chat-message">
                                                        <button className="actions-chat-message__button reply">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_360_6133)">
                                                                <path d="M2.16397 14.3489C1.97197 14.3489 1.78034 14.2758 1.63372 14.1291C1.34084 13.8363 1.34084 13.3615 1.63372 13.0686L13.354 1.34838C13.6465 1.0555 14.1216 1.0555 14.4145 1.34838C14.7073 1.64125 14.7073 2.116 14.4145 2.40888L2.69422 14.1291C2.54797 14.2754 2.35597 14.3489 2.16397 14.3489Z" fill="#838383" />
                                                                <path d="M1.00661 19.75C0.954484 19.75 0.901609 19.7443 0.848734 19.7331C0.443734 19.6461 0.185734 19.2475 0.272734 18.8425L1.43148 13.4413C1.51848 13.0363 1.91898 12.7791 2.32211 12.8653C2.72711 12.9523 2.98511 13.351 2.89811 13.756L1.73936 19.1571C1.66398 19.5092 1.35273 19.75 1.00661 19.75Z" fill="#838383" />
                                                                <path d="M6.40713 18.5912C6.21513 18.5912 6.02351 18.5181 5.87688 18.3715C5.58401 18.0786 5.58401 17.6039 5.87688 17.311L17.5971 5.59112C17.8896 5.29824 18.3648 5.29824 18.6576 5.59112C18.9505 5.88399 18.9505 6.35874 18.6576 6.65162L6.93776 18.3715C6.79113 18.5181 6.59913 18.5912 6.40713 18.5912Z" fill="#838383" />
                                                                <path d="M1.0044 19.75C0.658271 19.75 0.347396 19.5093 0.271646 19.1571C0.185021 18.7521 0.442646 18.3535 0.847646 18.2665L6.24877 17.1078C6.65415 17.0219 7.05277 17.2791 7.1394 17.6838C7.22602 18.0888 6.9684 18.4874 6.5634 18.5744L1.16227 19.7331C1.1094 19.7448 1.05652 19.75 1.0044 19.75Z" fill="#838383" />
                                                                <path d="M16.006 8.9924C15.814 8.9924 15.622 8.91928 15.4757 8.77265L11.2333 4.53028C10.9405 4.2374 10.9405 3.76265 11.2333 3.46978C11.5258 3.1769 12.0013 3.1769 12.2938 3.46978L16.5362 7.71215C16.8291 8.00503 16.8291 8.47978 16.5362 8.77265C16.39 8.91928 16.198 8.9924 16.006 8.9924Z" fill="#838383" />
                                                                <path d="M18.1268 6.87135C17.9348 6.87135 17.7428 6.79822 17.5962 6.6516C17.3033 6.35872 17.3033 5.88397 17.5962 5.59072C18.0136 5.17335 18.2434 4.60822 18.2434 3.99997C18.2434 3.39172 18.0136 2.8266 17.5962 2.40922C17.1784 1.99147 16.6133 1.7616 16.0051 1.7616C15.3968 1.7616 14.8317 1.99147 14.4143 2.40922C14.1218 2.7021 13.6471 2.70247 13.3534 2.40922C13.0606 2.11635 13.0606 1.6416 13.3534 1.34835C14.0539 0.647472 14.9956 0.261597 16.0051 0.261597C17.0142 0.261597 17.9562 0.647472 18.6567 1.34835C19.3576 2.04885 19.7434 2.99047 19.7434 3.99997C19.7434 5.00947 19.3576 5.9511 18.6567 6.6516C18.5108 6.79785 18.3188 6.87135 18.1268 6.87135Z" fill="#838383" />
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_360_6133">
                                                                <rect width="20" height="20" fill="white" />
                                                                </clipPath>
                                                                </defs>
                                                            </svg>
                                                                
                                                            
                                                        </button>
                                                        {/* onclick="toggleActive(this)" */}
                                                        <button  className="actions-chat-message__button like">
                                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383"></path>
                                                            </svg>
                                                        </button>
                                                        <button className="actions-chat-message__button reply">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.0312 2.34375H14.1016V1.75781C14.1016 0.788555 13.313 0 12.3438 0H7.65625C6.68699 0 5.89844 0.788555 5.89844 1.75781V2.34375H2.96875C1.99949 2.34375 1.21094 3.1323 1.21094 4.10156C1.21094 4.88 1.71973 5.54145 2.42207 5.77191L3.46719 18.3881C3.54246 19.292 4.31191 20 5.21891 20H14.7811C15.6881 20 16.4576 19.292 16.5329 18.3879L17.5779 5.77187C18.2803 5.54145 18.7891 4.88 18.7891 4.10156C18.7891 3.1323 18.0005 2.34375 17.0312 2.34375ZM7.07031 1.75781C7.07031 1.43473 7.33316 1.17188 7.65625 1.17188H12.3438C12.6668 1.17188 12.9297 1.43473 12.9297 1.75781V2.34375H7.07031V1.75781ZM15.365 18.2909C15.3399 18.5921 15.0834 18.8281 14.7811 18.8281H5.21891C4.9166 18.8281 4.66012 18.5921 4.63508 18.2911L3.60523 5.85938H16.3948L15.365 18.2909ZM17.0312 4.6875H2.96875C2.64566 4.6875 2.38281 4.42465 2.38281 4.10156C2.38281 3.77848 2.64566 3.51562 2.96875 3.51562H17.0312C17.3543 3.51562 17.6172 3.77848 17.6172 4.10156C17.6172 4.42465 17.3543 4.6875 17.0312 4.6875Z" fill="#838383" />
                                                                <path d="M7.65516 17.034L7.06923 7.5809C7.04919 7.25789 6.76962 7.01222 6.44817 7.03234C6.12516 7.05238 5.87958 7.33043 5.89958 7.6534L6.48551 17.1066C6.50477 17.4172 6.76274 17.6562 7.06977 17.6562C7.40911 17.6562 7.67598 17.3705 7.65516 17.034Z" fill="#838383" />
                                                                <path d="M10 7.03125C9.67641 7.03125 9.41406 7.29359 9.41406 7.61719V17.0703C9.41406 17.3939 9.67641 17.6562 10 17.6562C10.3236 17.6562 10.5859 17.3939 10.5859 17.0703V7.61719C10.5859 7.29359 10.3236 7.03125 10 7.03125Z" fill="#838383" />
                                                                <path d="M13.5519 7.03239C13.2296 7.01236 12.9508 7.25794 12.9308 7.58095L12.3449 17.0341C12.3249 17.357 12.5705 17.6351 12.8935 17.6551C13.2166 17.6751 13.4945 17.4294 13.5145 17.1066L14.1005 7.65345C14.1205 7.33044 13.8749 7.05239 13.5519 7.03239Z" fill="#838383" />
                                                            </svg>
                                                                
                                                                
                                                            
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="chat-message__bottom">
                                                    <p className="chat-message__edited">Edited</p>
                                                    <div className="chat-message__status status-message read">
                                                        <div className="status-message__icon status-message__icon--done">
                                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 1.19592L4.68837 8.07092C4.57147 8.1859 4.41407 8.25034 4.25009 8.25034C4.08612 8.25034 3.92871 8.1859 3.81181 8.07092L0.811812 5.12482C0.753282 5.06727 0.706661 4.99875 0.674611 4.92317C0.642562 4.8476 0.625711 4.76645 0.625022 4.68437C0.624333 4.60228 0.639818 4.52086 0.670594 4.44476C0.70137 4.36866 0.746834 4.29937 0.80439 4.24084C0.861946 4.18231 0.930467 4.13569 1.00604 4.10364C1.08161 4.07159 1.16276 4.05474 1.24485 4.05405C1.32693 4.05336 1.40835 4.06884 1.48445 4.09962C1.56055 4.1304 1.62984 4.17586 1.68837 4.23342L4.25009 6.74904L10.8126 0.303729C10.9309 0.18749 11.0905 0.12301 11.2564 0.124475C11.3385 0.125201 11.4197 0.142094 11.4953 0.174191C11.5709 0.206288 11.6394 0.252959 11.697 0.311541C11.7545 0.370123 11.8 0.439468 11.8307 0.515616C11.8615 0.591765 11.8769 0.673225 11.8762 0.755347C11.8755 0.837469 11.8586 0.918643 11.8265 0.994236C11.7944 1.06983 11.747 1.13836 11.6884 1.19592Z" fill="#6F767E" />
                                                            </svg>
                                                        </div>
                                                        <div className="status-message__icon status-message__icon--read">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.6884 6.69613L4.68837 13.5711C4.57147 13.6861 4.41407 13.7506 4.25009 13.7506C4.08612 13.7506 3.92871 13.6861 3.81181 13.5711L0.811812 10.625C0.753282 10.5675 0.706661 10.499 0.674611 10.4234C0.642562 10.3478 0.625711 10.2667 0.625022 10.1846C0.624333 10.1025 0.639818 10.0211 0.670594 9.94498C0.70137 9.86888 0.746834 9.79958 0.80439 9.74105C0.861946 9.68252 0.930467 9.6359 1.00604 9.60385C1.08161 9.5718 1.16276 9.55495 1.24485 9.55426C1.32693 9.55357 1.40835 9.56906 1.48445 9.59984C1.56055 9.63061 1.62984 9.67608 1.68837 9.73363L4.25009 12.2493L10.8126 5.80394C10.9309 5.6877 11.0905 5.62323 11.2564 5.62469C11.3385 5.62542 11.4197 5.64231 11.4953 5.67441C11.5709 5.7065 11.6394 5.75317 11.697 5.81176C11.7545 5.87034 11.8 5.93968 11.8307 6.01583C11.8615 6.09198 11.8769 6.17344 11.8762 6.25556C11.8755 6.33768 11.8586 6.41886 11.8265 6.49445C11.7944 6.57004 11.7477 6.63858 11.6892 6.69613H11.6884ZM19.1962 5.81176C19.1387 5.75313 19.0701 5.70642 18.9945 5.6743C18.9189 5.64217 18.8378 5.62526 18.7556 5.62454C18.6735 5.62381 18.592 5.63928 18.5159 5.67007C18.4397 5.70085 18.3704 5.74634 18.3118 5.80394L11.7493 12.2493L10.2782 10.8039C10.1599 10.6878 10.0003 10.6234 9.83453 10.625C9.66875 10.6265 9.51037 10.6938 9.39423 10.8121C9.2781 10.9305 9.21372 11.0901 9.21526 11.2558C9.21679 11.4216 9.28413 11.58 9.40244 11.6961L11.311 13.5711C11.4279 13.6861 11.5853 13.7506 11.7493 13.7506C11.9133 13.7506 12.0707 13.6861 12.1876 13.5711L19.1876 6.69613C19.2463 6.63865 19.293 6.57017 19.3252 6.4946C19.3574 6.41903 19.3744 6.33786 19.3752 6.25573C19.376 6.17359 19.3606 6.0921 19.3299 6.01592C19.2992 5.93974 19.2537 5.87037 19.1962 5.81176Z" fill="#329993" />
                                                                </svg>
                                                                
                                                                
                                                                
                                                        </div>  
                                                    </div>
                                                    <p className="chat-message__time"><span>11:22</span>AM</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat__footer footer-chat">
                                <div className="footer-chat__input input-chat">
                                    <div className="input-chat__box">
                                        <div className="input-chat__icon">
                                            <img src={MicroIc} alt="Icon"/>
                                        </div>
                                        <input  type="text" placeholder="Enter message..." className="input-chat__input input"/>
                                    </div>
                                    <div className="input-chat__block">
                                        <div className="input-chat__actions actions-input-chat">
                                            <button className="actions-input-chat__item actions-input-chat__item--image">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.9996 9.25C21.8015 9.25259 21.6123 9.33244 21.4722 9.47254C21.3321 9.61263 21.2522 9.80189 21.2496 10V16L17.0696 11.22C16.8041 10.9373 16.4834 10.7119 16.1274 10.5579C15.7713 10.4039 15.3875 10.3244 14.9996 10.3244C14.6117 10.3244 14.2279 10.4039 13.8719 10.5579C13.5159 10.7119 13.1952 10.9373 12.9296 11.22L10.0596 14.5L9.11964 13.36C8.86061 13.0493 8.53645 12.7993 8.1701 12.6277C7.80375 12.4562 7.40416 12.3673 6.99964 12.3673C6.59511 12.3673 6.19552 12.4562 5.82917 12.6277C5.46282 12.7993 5.13866 13.0493 4.87964 13.36L2.74964 15.93V6C2.75227 5.13886 3.09553 4.31374 3.70445 3.70482C4.31337 3.09589 5.13849 2.75264 5.99964 2.75H13.9996C14.1985 2.75 14.3893 2.67098 14.53 2.53033C14.6706 2.38968 14.7496 2.19891 14.7496 2C14.7496 1.80109 14.6706 1.61032 14.53 1.46967C14.3893 1.32902 14.1985 1.25 13.9996 1.25H5.99964C4.73986 1.25 3.53168 1.75045 2.64088 2.64124C1.75008 3.53204 1.24964 4.74022 1.24964 6V18C1.24491 18.0163 1.24491 18.0337 1.24964 18.05C1.26281 19.3011 1.76906 20.4965 2.65843 21.3765C3.54781 22.2565 4.74847 22.7501 5.99964 22.75H17.9996C19.2456 22.7475 20.4408 22.2555 21.3274 21.3801C22.2141 20.5047 22.7213 19.3159 22.7396 18.07V10C22.7371 9.80359 22.6587 9.61578 22.5207 9.47596C22.3827 9.33613 22.196 9.25515 21.9996 9.25ZM17.9996 21.25H5.99964C5.18275 21.2474 4.3968 20.9373 3.79826 20.3813C3.19971 19.8254 2.83247 19.0645 2.76964 18.25L5.99964 14.32C6.12062 14.1852 6.26863 14.0774 6.43403 14.0036C6.59943 13.9298 6.77852 13.8917 6.95964 13.8917C7.14075 13.8917 7.31984 13.9298 7.48524 14.0036C7.65065 14.0774 7.79865 14.1852 7.91964 14.32L9.42964 16.14C9.49889 16.2242 9.58589 16.2921 9.68443 16.3388C9.78297 16.3854 9.8906 16.4098 9.99964 16.41C10.2156 16.3981 10.4191 16.3053 10.5696 16.15L14.0096 12.21C14.132 12.0811 14.2794 11.9785 14.4427 11.9083C14.606 11.8382 14.7819 11.802 14.9596 11.802C15.1374 11.802 15.3133 11.8382 15.4766 11.9083C15.6399 11.9785 15.7872 12.0811 15.9096 12.21L21.1796 18.21C21.1294 19.0239 20.7741 19.789 20.1847 20.3524C19.5952 20.9159 18.815 21.2365 17.9996 21.25Z" fill="#B5CBED" />
                                                    <path d="M4.25 7C4.25 7.5439 4.41128 8.07558 4.71346 8.52782C5.01563 8.98005 5.44512 9.33253 5.94762 9.54067C6.45012 9.74881 7.00305 9.80327 7.5365 9.69716C8.06995 9.59105 8.55995 9.32914 8.94454 8.94454C9.32914 8.55995 9.59105 8.06995 9.69716 7.5365C9.80327 7.00305 9.74881 6.45012 9.54067 5.94762C9.33253 5.44512 8.98005 5.01563 8.52782 4.71346C8.07558 4.41128 7.5439 4.25 7 4.25C6.27065 4.25 5.57118 4.53973 5.05546 5.05546C4.53973 5.57118 4.25 6.27065 4.25 7ZM8.25 7C8.25 7.24723 8.17669 7.4889 8.03934 7.69446C7.90199 7.90002 7.70676 8.06024 7.47835 8.15485C7.24995 8.24946 6.99861 8.27421 6.75614 8.22598C6.51366 8.17775 6.29093 8.0587 6.11612 7.88388C5.9413 7.70907 5.82225 7.48634 5.77402 7.24386C5.72579 7.00139 5.75054 6.75005 5.84515 6.52165C5.93976 6.29324 6.09998 6.09801 6.30554 5.96066C6.5111 5.82331 6.75277 5.75 7 5.75C7.33152 5.75 7.64946 5.8817 7.88388 6.11612C8.1183 6.35054 8.25 6.66848 8.25 7Z" fill="#B5CBED" />
                                                    <path d="M16 5.75H18.25V8C18.25 8.19891 18.329 8.38968 18.4697 8.53033C18.6103 8.67098 18.8011 8.75 19 8.75C19.1989 8.75 19.3897 8.67098 19.5303 8.53033C19.671 8.38968 19.75 8.19891 19.75 8V5.75H22C22.1989 5.75 22.3897 5.67098 22.5303 5.53033C22.671 5.38968 22.75 5.19891 22.75 5C22.75 4.80109 22.671 4.61032 22.5303 4.46967C22.3897 4.32902 22.1989 4.25 22 4.25H19.75V2C19.75 1.80109 19.671 1.61032 19.5303 1.46967C19.3897 1.32902 19.1989 1.25 19 1.25C18.8011 1.25 18.6103 1.32902 18.4697 1.46967C18.329 1.61032 18.25 1.80109 18.25 2V4.25H16C15.8011 4.25 15.6103 4.32902 15.4697 4.46967C15.329 4.61032 15.25 4.80109 15.25 5C15.25 5.19891 15.329 5.38968 15.4697 5.53033C15.6103 5.67098 15.8011 5.75 16 5.75Z" fill="#B5CBED" />
                                                </svg>
                                                    
                                            </button>
                                            <button className="actions-input-chat__item actions-input-chat__item--audio">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 16.5C13.1931 16.4988 14.337 16.0243 15.1806 15.1806C16.0243 14.337 16.4988 13.1931 16.5 12V6C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6V12C7.50124 13.1931 7.97575 14.337 8.81939 15.1806C9.66303 16.0243 10.8069 16.4988 12 16.5ZM9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V6ZM12.75 19.4625V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V19.4625C9.40091 19.2743 7.68728 18.4072 6.44048 17.0288C5.19368 15.6504 4.50228 13.8586 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25C5.44891 11.25 5.63968 11.329 5.78033 11.4697C5.92098 11.6103 6 11.8011 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 11.8011 18.079 11.6103 18.2197 11.4697C18.3603 11.329 18.5511 11.25 18.75 11.25C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.4977 13.8586 18.8063 15.6504 17.5595 17.0288C16.3127 18.4072 14.5991 19.2743 12.75 19.4625Z" fill="#B5CBED" />
                                                </svg>
                                                    
                                                    
                                            </button>
                                            <button className="actions-input-chat__item actions-input-chat__item--sticker">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#B5CBED"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke="#B5CBED"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke="#B5CBED"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke="#B5CBED"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    
                                                    
                                            </button>
                                            <button className="actions-input-chat__item actions-input-chat__item--emoji">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.7783 4.22187C17.7006 2.14422 14.9382 1 12 1C9.06178 1 6.29947 2.14422 4.22182 4.22187C2.14418 6.29951 1 9.06186 1 12.0001C1 14.9383 2.14418 17.7007 4.22182 19.7783C6.29947 21.856 9.06182 23.0002 12 23.0002C14.9382 23.0002 17.7006 21.856 19.7783 19.7783C21.8559 17.7007 23.0001 14.9383 23.0001 12.0001C23.0001 9.06186 21.8559 6.29951 19.7783 4.22187ZM12 21.7111C6.64537 21.7111 2.28907 17.3548 2.28907 12.0001C2.28907 6.64541 6.64537 2.28907 12 2.28907C17.3547 2.28907 21.711 6.64541 21.711 12.0001C21.711 17.3548 17.3547 21.7111 12 21.7111Z" fill="#B5CBED" />
                                                    <path d="M7.85818 7.21326C6.3608 7.21326 5.14258 8.43152 5.14258 9.92895C5.14258 10.2849 5.43116 10.5735 5.78711 10.5735C6.14307 10.5735 6.43165 10.2849 6.43165 9.92895C6.43165 9.14231 7.07159 8.50233 7.85818 8.50233C8.64477 8.50233 9.28471 9.14231 9.28471 9.92895C9.28471 10.2849 9.57329 10.5735 9.92925 10.5735C10.2852 10.5735 10.5738 10.2849 10.5738 9.92895C10.5738 8.43152 9.35557 7.21326 7.85818 7.21326Z" fill="#B5CBED" />
                                                    <path d="M16.1414 7.21326C14.644 7.21326 13.4258 8.43152 13.4258 9.92895C13.4258 10.2849 13.7144 10.5735 14.0703 10.5735C14.4263 10.5735 14.7149 10.2849 14.7149 9.92895C14.7149 9.14231 15.3548 8.50233 16.1414 8.50233C16.928 8.50233 17.5679 9.14231 17.5679 9.92895C17.5679 10.2849 17.8565 10.5735 18.2125 10.5735C18.5684 10.5735 18.857 10.2849 18.857 9.92895C18.857 8.43152 17.6388 7.21326 16.1414 7.21326Z" fill="#B5CBED" />
                                                    <path d="M18.072 13.4633C17.7365 13.3447 17.3682 13.5206 17.2496 13.8562C16.4647 16.0768 14.3543 17.5687 11.9981 17.5687C9.6418 17.5687 7.53138 16.0768 6.74655 13.8562C6.62795 13.5206 6.25962 13.3447 5.92407 13.4633C5.58844 13.5819 5.41253 13.9502 5.53116 14.2858C6.49771 17.0204 9.09657 18.8578 11.9981 18.8578C14.8995 18.8578 17.4984 17.0204 18.4649 14.2858C18.5836 13.9502 18.4077 13.5819 18.072 13.4633Z" fill="#B5CBED" />
                                                    </svg>
                                                    
                                                    
                                            </button>
                                            <button className="actions-input-chat__item actions-input-chat__item--file">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.7391 4.26097C18.4513 2.97328 16.7048 2.24988 14.8836 2.24988C13.0625 2.24988 11.3159 2.97328 10.0281 4.26097L9.30813 4.98197C9.17565 5.12415 9.10353 5.31219 9.10696 5.5065C9.11038 5.7008 9.1891 5.88618 9.32651 6.0236C9.46392 6.16101 9.64931 6.23972 9.84361 6.24315C10.0379 6.24658 10.226 6.17445 10.3681 6.04197L11.0881 5.32197C11.5856 4.81975 12.1775 4.42076 12.8296 4.14792C13.4818 3.87509 14.1814 3.73378 14.8884 3.73211C15.5953 3.73045 16.2956 3.86846 16.949 4.13822C17.6025 4.40798 18.1962 4.80418 18.696 5.30406C19.1959 5.80393 19.5921 6.39764 19.8619 7.05108C20.1316 7.70451 20.2697 8.40481 20.268 9.11174C20.2663 9.81867 20.125 10.5183 19.8522 11.1705C19.5793 11.8226 19.1804 12.4145 18.6781 12.912L17.9581 13.632C17.8257 13.7741 17.7535 13.9622 17.757 14.1565C17.7604 14.3508 17.8391 14.5362 17.9765 14.6736C18.1139 14.811 18.2993 14.8897 18.4936 14.8931C18.6879 14.8966 18.876 14.8245 19.0181 14.692L19.7381 13.972C21.0255 12.6842 21.7487 10.9379 21.7487 9.11697C21.7487 7.29608 21.0255 5.54973 19.7381 4.26197L19.7391 4.26097ZM6.04313 9.30697C6.18358 9.4476 6.26247 9.63822 6.26247 9.83697C6.26247 10.0357 6.18358 10.2263 6.04313 10.367L5.32213 11.089C4.81991 11.5865 4.42092 12.1783 4.14808 12.8305C3.87525 13.4826 3.73394 14.1823 3.73227 14.8892C3.73061 15.5961 3.86862 16.2964 4.13838 16.9499C4.40814 17.6033 4.80434 18.197 5.30421 18.6969C5.80409 19.1968 6.3978 19.593 7.05124 19.8627C7.70467 20.1325 8.40497 20.2705 9.1119 20.2688C9.81883 20.2672 10.5185 20.1259 11.1706 19.853C11.8228 19.5802 12.4146 19.1812 12.9121 18.679L13.6321 17.957C13.7743 17.8245 13.9624 17.7524 14.1567 17.7558C14.351 17.7592 14.5363 17.8379 14.6738 17.9754C14.8112 18.1128 14.8899 18.2981 14.8933 18.4925C14.8967 18.6868 14.8246 18.8748 14.6921 19.017L13.9721 19.739C12.6784 20.9977 10.9412 21.6965 9.13619 21.684C7.33122 21.6716 5.60372 20.9491 4.32745 19.6727C3.05119 18.3963 2.32879 16.6687 2.31656 14.8637C2.30434 13.0587 3.00327 11.3215 4.26213 10.028L4.98213 9.30797C5.12276 9.16752 5.31338 9.08863 5.51213 9.08863C5.71088 9.08863 5.90151 9.16752 6.04213 9.30797L6.04313 9.30697Z" fill="#B5CBED" />
                                                    <path d="M14.694 9.30699C14.8345 9.44761 14.9134 9.63824 14.9134 9.83699C14.9134 10.0357 14.8345 10.2264 14.694 10.367L10.369 14.693C10.3004 14.7667 10.2176 14.8258 10.1256 14.8668C10.0336 14.9078 9.93425 14.9298 9.83354 14.9316C9.73284 14.9334 9.63281 14.9148 9.53942 14.8771C9.44604 14.8394 9.3612 14.7832 9.28998 14.712C9.21876 14.6408 9.16262 14.556 9.1249 14.4626C9.08718 14.3692 9.06865 14.2692 9.07043 14.1685C9.07221 14.0678 9.09425 13.9684 9.13524 13.8764C9.17623 13.7844 9.23533 13.7016 9.30902 13.633L13.633 9.30699C13.7736 9.16654 13.9643 9.08765 14.163 9.08765C14.3618 9.08765 14.5534 9.16654 14.694 9.30699Z" fill="#B5CBED" />
                                                </svg>
                                                    
                                                    
                                            </button>
                                        </div>
                                        <button className="input-chat__send">
                                            <img src={SendIc} alt="Icon"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="footer-chat__actions actions-input-chat">
                                    <button className="actions-input-chat__item actions-input-chat__item--image">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.9996 9.25C21.8015 9.25259 21.6123 9.33244 21.4722 9.47254C21.3321 9.61263 21.2522 9.80189 21.2496 10V16L17.0696 11.22C16.8041 10.9373 16.4834 10.7119 16.1274 10.5579C15.7713 10.4039 15.3875 10.3244 14.9996 10.3244C14.6117 10.3244 14.2279 10.4039 13.8719 10.5579C13.5159 10.7119 13.1952 10.9373 12.9296 11.22L10.0596 14.5L9.11964 13.36C8.86061 13.0493 8.53645 12.7993 8.1701 12.6277C7.80375 12.4562 7.40416 12.3673 6.99964 12.3673C6.59511 12.3673 6.19552 12.4562 5.82917 12.6277C5.46282 12.7993 5.13866 13.0493 4.87964 13.36L2.74964 15.93V6C2.75227 5.13886 3.09553 4.31374 3.70445 3.70482C4.31337 3.09589 5.13849 2.75264 5.99964 2.75H13.9996C14.1985 2.75 14.3893 2.67098 14.53 2.53033C14.6706 2.38968 14.7496 2.19891 14.7496 2C14.7496 1.80109 14.6706 1.61032 14.53 1.46967C14.3893 1.32902 14.1985 1.25 13.9996 1.25H5.99964C4.73986 1.25 3.53168 1.75045 2.64088 2.64124C1.75008 3.53204 1.24964 4.74022 1.24964 6V18C1.24491 18.0163 1.24491 18.0337 1.24964 18.05C1.26281 19.3011 1.76906 20.4965 2.65843 21.3765C3.54781 22.2565 4.74847 22.7501 5.99964 22.75H17.9996C19.2456 22.7475 20.4408 22.2555 21.3274 21.3801C22.2141 20.5047 22.7213 19.3159 22.7396 18.07V10C22.7371 9.80359 22.6587 9.61578 22.5207 9.47596C22.3827 9.33613 22.196 9.25515 21.9996 9.25ZM17.9996 21.25H5.99964C5.18275 21.2474 4.3968 20.9373 3.79826 20.3813C3.19971 19.8254 2.83247 19.0645 2.76964 18.25L5.99964 14.32C6.12062 14.1852 6.26863 14.0774 6.43403 14.0036C6.59943 13.9298 6.77852 13.8917 6.95964 13.8917C7.14075 13.8917 7.31984 13.9298 7.48524 14.0036C7.65065 14.0774 7.79865 14.1852 7.91964 14.32L9.42964 16.14C9.49889 16.2242 9.58589 16.2921 9.68443 16.3388C9.78297 16.3854 9.8906 16.4098 9.99964 16.41C10.2156 16.3981 10.4191 16.3053 10.5696 16.15L14.0096 12.21C14.132 12.0811 14.2794 11.9785 14.4427 11.9083C14.606 11.8382 14.7819 11.802 14.9596 11.802C15.1374 11.802 15.3133 11.8382 15.4766 11.9083C15.6399 11.9785 15.7872 12.0811 15.9096 12.21L21.1796 18.21C21.1294 19.0239 20.7741 19.789 20.1847 20.3524C19.5952 20.9159 18.815 21.2365 17.9996 21.25Z" fill="#B5CBED" />
                                            <path d="M4.25 7C4.25 7.5439 4.41128 8.07558 4.71346 8.52782C5.01563 8.98005 5.44512 9.33253 5.94762 9.54067C6.45012 9.74881 7.00305 9.80327 7.5365 9.69716C8.06995 9.59105 8.55995 9.32914 8.94454 8.94454C9.32914 8.55995 9.59105 8.06995 9.69716 7.5365C9.80327 7.00305 9.74881 6.45012 9.54067 5.94762C9.33253 5.44512 8.98005 5.01563 8.52782 4.71346C8.07558 4.41128 7.5439 4.25 7 4.25C6.27065 4.25 5.57118 4.53973 5.05546 5.05546C4.53973 5.57118 4.25 6.27065 4.25 7ZM8.25 7C8.25 7.24723 8.17669 7.4889 8.03934 7.69446C7.90199 7.90002 7.70676 8.06024 7.47835 8.15485C7.24995 8.24946 6.99861 8.27421 6.75614 8.22598C6.51366 8.17775 6.29093 8.0587 6.11612 7.88388C5.9413 7.70907 5.82225 7.48634 5.77402 7.24386C5.72579 7.00139 5.75054 6.75005 5.84515 6.52165C5.93976 6.29324 6.09998 6.09801 6.30554 5.96066C6.5111 5.82331 6.75277 5.75 7 5.75C7.33152 5.75 7.64946 5.8817 7.88388 6.11612C8.1183 6.35054 8.25 6.66848 8.25 7Z" fill="#B5CBED" />
                                            <path d="M16 5.75H18.25V8C18.25 8.19891 18.329 8.38968 18.4697 8.53033C18.6103 8.67098 18.8011 8.75 19 8.75C19.1989 8.75 19.3897 8.67098 19.5303 8.53033C19.671 8.38968 19.75 8.19891 19.75 8V5.75H22C22.1989 5.75 22.3897 5.67098 22.5303 5.53033C22.671 5.38968 22.75 5.19891 22.75 5C22.75 4.80109 22.671 4.61032 22.5303 4.46967C22.3897 4.32902 22.1989 4.25 22 4.25H19.75V2C19.75 1.80109 19.671 1.61032 19.5303 1.46967C19.3897 1.32902 19.1989 1.25 19 1.25C18.8011 1.25 18.6103 1.32902 18.4697 1.46967C18.329 1.61032 18.25 1.80109 18.25 2V4.25H16C15.8011 4.25 15.6103 4.32902 15.4697 4.46967C15.329 4.61032 15.25 4.80109 15.25 5C15.25 5.19891 15.329 5.38968 15.4697 5.53033C15.6103 5.67098 15.8011 5.75 16 5.75Z" fill="#B5CBED" />
                                        </svg>
                                            
                                    </button>
                                    <button className="actions-input-chat__item actions-input-chat__item--audio">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 16.5C13.1931 16.4988 14.337 16.0243 15.1806 15.1806C16.0243 14.337 16.4988 13.1931 16.5 12V6C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6V12C7.50124 13.1931 7.97575 14.337 8.81939 15.1806C9.66303 16.0243 10.8069 16.4988 12 16.5ZM9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V6ZM12.75 19.4625V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V19.4625C9.40091 19.2743 7.68728 18.4072 6.44048 17.0288C5.19368 15.6504 4.50228 13.8586 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25C5.44891 11.25 5.63968 11.329 5.78033 11.4697C5.92098 11.6103 6 11.8011 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 11.8011 18.079 11.6103 18.2197 11.4697C18.3603 11.329 18.5511 11.25 18.75 11.25C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.4977 13.8586 18.8063 15.6504 17.5595 17.0288C16.3127 18.4072 14.5991 19.2743 12.75 19.4625Z" fill="#B5CBED" />
                                        </svg>
                                            
                                            
                                    </button>
                                    <button className="actions-input-chat__item actions-input-chat__item--sticker">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#B5CBED"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke="#B5CBED"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke="#B5CBED"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke="#B5CBED"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            
                                            
                                    </button>
                                    <button className="actions-input-chat__item actions-input-chat__item--emoji">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7783 4.22187C17.7006 2.14422 14.9382 1 12 1C9.06178 1 6.29947 2.14422 4.22182 4.22187C2.14418 6.29951 1 9.06186 1 12.0001C1 14.9383 2.14418 17.7007 4.22182 19.7783C6.29947 21.856 9.06182 23.0002 12 23.0002C14.9382 23.0002 17.7006 21.856 19.7783 19.7783C21.8559 17.7007 23.0001 14.9383 23.0001 12.0001C23.0001 9.06186 21.8559 6.29951 19.7783 4.22187ZM12 21.7111C6.64537 21.7111 2.28907 17.3548 2.28907 12.0001C2.28907 6.64541 6.64537 2.28907 12 2.28907C17.3547 2.28907 21.711 6.64541 21.711 12.0001C21.711 17.3548 17.3547 21.7111 12 21.7111Z" fill="#B5CBED" />
                                            <path d="M7.85818 7.21326C6.3608 7.21326 5.14258 8.43152 5.14258 9.92895C5.14258 10.2849 5.43116 10.5735 5.78711 10.5735C6.14307 10.5735 6.43165 10.2849 6.43165 9.92895C6.43165 9.14231 7.07159 8.50233 7.85818 8.50233C8.64477 8.50233 9.28471 9.14231 9.28471 9.92895C9.28471 10.2849 9.57329 10.5735 9.92925 10.5735C10.2852 10.5735 10.5738 10.2849 10.5738 9.92895C10.5738 8.43152 9.35557 7.21326 7.85818 7.21326Z" fill="#B5CBED" />
                                            <path d="M16.1414 7.21326C14.644 7.21326 13.4258 8.43152 13.4258 9.92895C13.4258 10.2849 13.7144 10.5735 14.0703 10.5735C14.4263 10.5735 14.7149 10.2849 14.7149 9.92895C14.7149 9.14231 15.3548 8.50233 16.1414 8.50233C16.928 8.50233 17.5679 9.14231 17.5679 9.92895C17.5679 10.2849 17.8565 10.5735 18.2125 10.5735C18.5684 10.5735 18.857 10.2849 18.857 9.92895C18.857 8.43152 17.6388 7.21326 16.1414 7.21326Z" fill="#B5CBED" />
                                            <path d="M18.072 13.4633C17.7365 13.3447 17.3682 13.5206 17.2496 13.8562C16.4647 16.0768 14.3543 17.5687 11.9981 17.5687C9.6418 17.5687 7.53138 16.0768 6.74655 13.8562C6.62795 13.5206 6.25962 13.3447 5.92407 13.4633C5.58844 13.5819 5.41253 13.9502 5.53116 14.2858C6.49771 17.0204 9.09657 18.8578 11.9981 18.8578C14.8995 18.8578 17.4984 17.0204 18.4649 14.2858C18.5836 13.9502 18.4077 13.5819 18.072 13.4633Z" fill="#B5CBED" />
                                            </svg>
                                            
                                            
                                    </button>
                                    <button className="actions-input-chat__item actions-input-chat__item--file">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7391 4.26097C18.4513 2.97328 16.7048 2.24988 14.8836 2.24988C13.0625 2.24988 11.3159 2.97328 10.0281 4.26097L9.30813 4.98197C9.17565 5.12415 9.10353 5.31219 9.10696 5.5065C9.11038 5.7008 9.1891 5.88618 9.32651 6.0236C9.46392 6.16101 9.64931 6.23972 9.84361 6.24315C10.0379 6.24658 10.226 6.17445 10.3681 6.04197L11.0881 5.32197C11.5856 4.81975 12.1775 4.42076 12.8296 4.14792C13.4818 3.87509 14.1814 3.73378 14.8884 3.73211C15.5953 3.73045 16.2956 3.86846 16.949 4.13822C17.6025 4.40798 18.1962 4.80418 18.696 5.30406C19.1959 5.80393 19.5921 6.39764 19.8619 7.05108C20.1316 7.70451 20.2697 8.40481 20.268 9.11174C20.2663 9.81867 20.125 10.5183 19.8522 11.1705C19.5793 11.8226 19.1804 12.4145 18.6781 12.912L17.9581 13.632C17.8257 13.7741 17.7535 13.9622 17.757 14.1565C17.7604 14.3508 17.8391 14.5362 17.9765 14.6736C18.1139 14.811 18.2993 14.8897 18.4936 14.8931C18.6879 14.8966 18.876 14.8245 19.0181 14.692L19.7381 13.972C21.0255 12.6842 21.7487 10.9379 21.7487 9.11697C21.7487 7.29608 21.0255 5.54973 19.7381 4.26197L19.7391 4.26097ZM6.04313 9.30697C6.18358 9.4476 6.26247 9.63822 6.26247 9.83697C6.26247 10.0357 6.18358 10.2263 6.04313 10.367L5.32213 11.089C4.81991 11.5865 4.42092 12.1783 4.14808 12.8305C3.87525 13.4826 3.73394 14.1823 3.73227 14.8892C3.73061 15.5961 3.86862 16.2964 4.13838 16.9499C4.40814 17.6033 4.80434 18.197 5.30421 18.6969C5.80409 19.1968 6.3978 19.593 7.05124 19.8627C7.70467 20.1325 8.40497 20.2705 9.1119 20.2688C9.81883 20.2672 10.5185 20.1259 11.1706 19.853C11.8228 19.5802 12.4146 19.1812 12.9121 18.679L13.6321 17.957C13.7743 17.8245 13.9624 17.7524 14.1567 17.7558C14.351 17.7592 14.5363 17.8379 14.6738 17.9754C14.8112 18.1128 14.8899 18.2981 14.8933 18.4925C14.8967 18.6868 14.8246 18.8748 14.6921 19.017L13.9721 19.739C12.6784 20.9977 10.9412 21.6965 9.13619 21.684C7.33122 21.6716 5.60372 20.9491 4.32745 19.6727C3.05119 18.3963 2.32879 16.6687 2.31656 14.8637C2.30434 13.0587 3.00327 11.3215 4.26213 10.028L4.98213 9.30797C5.12276 9.16752 5.31338 9.08863 5.51213 9.08863C5.71088 9.08863 5.90151 9.16752 6.04213 9.30797L6.04313 9.30697Z" fill="#B5CBED" />
                                            <path d="M14.694 9.30699C14.8345 9.44761 14.9134 9.63824 14.9134 9.83699C14.9134 10.0357 14.8345 10.2264 14.694 10.367L10.369 14.693C10.3004 14.7667 10.2176 14.8258 10.1256 14.8668C10.0336 14.9078 9.93425 14.9298 9.83354 14.9316C9.73284 14.9334 9.63281 14.9148 9.53942 14.8771C9.44604 14.8394 9.3612 14.7832 9.28998 14.712C9.21876 14.6408 9.16262 14.556 9.1249 14.4626C9.08718 14.3692 9.06865 14.2692 9.07043 14.1685C9.07221 14.0678 9.09425 13.9684 9.13524 13.8764C9.17623 13.7844 9.23533 13.7016 9.30902 13.633L13.633 9.30699C13.7736 9.16654 13.9643 9.08765 14.163 9.08765C14.3618 9.08765 14.5534 9.16654 14.694 9.30699Z" fill="#B5CBED" />
                                        </svg>
                                            
                                            
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messages-user">
                    <div className="messages-user__body">
                        <div className="messages-user__top top-messages-user">
                            <div className="user-item">
                                <div className="user-item__image">
                                    <img className="user-photo" src={UserPh} alt="User ph"/>
                                </div>
                                <div className="user-item__body">
                                    <a href="some" className="user-item__name">Boob007</a>
                                    <a href="some" className="user-item__username">@Boob007</a>

                                </div>
                            </div>
                        </div>
                        <div className="messages-user__block">
                            <div className="messages-user__actions actions-messages-user">
                                <button className="actions-messages-user__item item-actions-messages-user">
                                    <div className="item-actions-messages-user__icon">
                                        <img src={ProfileIc} alt="Icon"/>
                                    </div>
                                    <p className="item-actions-messages-user__text">Profile</p>
                                </button>
                                <button className="actions-messages-user__item item-actions-messages-user">
                                    <div className="item-actions-messages-user__icon">
                                        <img src={StatsIc} alt="Icon"/>
                                    </div>
                                    <p className="item-actions-messages-user__text">Stats</p>
                                </button>
                                <button className="actions-messages-user__item item-actions-messages-user">
                                    <div className="item-actions-messages-user__icon">
                                        <img src={RenameIc} alt="Icon"/>
                                    </div>
                                    <p className="item-actions-messages-user__text">Rename</p>
                                </button>
                                <button className="actions-messages-user__item item-actions-messages-user">
                                    <div className="item-actions-messages-user__icon">
                                        <img src={AudioMuteIc} alt="Icon"/>
                                    </div>
                                    <p className="item-actions-messages-user__text">Mute</p>
                                </button>
                                <button className="actions-messages-user__item item-actions-messages-user">
                                    <div className="item-actions-messages-user__icon">
                                        <img src={PinIc} alt="Icon"/>
                                    </div>
                                    <p className="item-actions-messages-user__text">Pin</p>
                                </button>
                                <button data-popup="#popup-block-user" className="actions-messages-user__item item-actions-messages-user block">
                                    <div className="item-actions-messages-user__icon">
                                        <img src={BlockedUserIc} alt="Icon"/>
                                    </div>
                                    <p className="item-actions-messages-user__text">Block</p>
                                </button>
                            </div>
                            <a href="some" data-popup="#popup-user-group" className="messages-user__add button button--fw"><span>Add to group</span></a>
                            <div className="messages-user__themes themes-messages-user">
                                <div className="themes-messages-user__title">Themes</div>
                                <div className="themes-messages-user__items">
                                    <div style={{background: 'linear-gradient(90deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)'}} className="themes-messages-user__item"></div>
                                    <div style={{background: 'linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)'}} className="themes-messages-user__item"></div>

                                </div>
                                
                            </div>
                            <div className="messages-user__notes notes-messages-user">
                                <div className="notes-messages-user__title">Private notes</div>
                                <p className="notes-messages-user__text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                                <p className="notes-messages-user__text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                            <a href="some" className="messages-user__media button button--fw button--transparent">
                                <img src={ImageIc} alt="Icon"/>
                                <span>Media files</span>
                            </a>

                            <div className="messages-user__media-files media-files">
                                <div className="media-files__header">
                                    <a href="some" className="media-files__back"><span>Media Files</span></a>
                                </div>
                                <div className="media-files__tabs">
                                    <div className="tabs-content-profile__item all active">
        
                                        <p className="tabs-content-profile__name">All</p>
                                    </div>
                                    <div className="tabs-content-profile__item images ">
                                        <p className="tabs-content-profile__name">Images</p>
                            
                                    </div>
                                    <div className="tabs-content-profile__item videos">
                                        <p className="tabs-content-profile__name">Videos</p>
                                    </div>
                                    <div className="tabs-content-profile__item gifs">
        
                                        <p className="tabs-content-profile__name">GIFs</p>
                                    </div>
                                </div>
                                <div className="media-files__items">
                                    <div className="media-files__item item-media-files blocked">
                                        <div className="item-video-store__wrapper">
                                            <div className="item-video-store__image">
                                                <img src={UserBgPh} alt="ph"/>
                                            </div>
                                        </div>
                                        <div className="item-video-store__tags">
                                            <div className="item-video-store__tag tag-item-video-store tag-item-video-store--orange price">
                                                <div className="tag-item-video-store__body">
                                                    <p className="tag-item-video-store__text">18$</p>
                                                </div>
                                                <div className="tag-item-video-store__decor"></div>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="media-files__item item-media-files">
                                        <div className="item-video-store__wrapper">
                                            <div className="item-video-store__image">
                                                <img src={UserBgPh} alt="ph"/>
                                            </div>
                                        </div>
                                        <div className="item-video-store__tags">
                                            <div className="item-video-store__tag tag-item-video-store tag-item-video-store--orange price">
                                                <div className="tag-item-video-store__body">
                                                    <p className="tag-item-video-store__text">18$</p>
                                                </div>
                                                <div className="tag-item-video-store__decor"></div>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
