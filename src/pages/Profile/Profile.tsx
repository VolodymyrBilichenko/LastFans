import UserPh from '../../assets/img/user/01.png'
import ProfilePh from '../../assets/img/user/profile-top.jpg'
import StoryPh from '../../assets/img/story/story.jpg'
import PinIc from '../../assets/img/icons/pin.svg'
import MessageIc from '../../assets/img/icons/user-menu/message.svg'
import VideoIc from '../../assets/img/icons/video.svg'
import FolderIc from '../../assets/img/icons/folder.svg'
import { NavLink } from 'react-router-dom'
// import { IUser } from '../../models'
// import { useSelector } from 'react-redux'
import { Highlights } from '../../components/Highlights/Highlights'


export const Profile = () => {

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__block">
                        <div className="body-profile__top-image">
                            <img className="ibg" src={ProfilePh} alt="ph" />
                        </div>
                        <div className="body-profile__wrapper">
                            <div className="body-profile__top top-body-profile">
                                <div className="top-body-profile__user">
                                    <div className="top-body-profile__image">
                                        <img className="ibg" src={UserPh} alt="ph" />
                                    </div>
                                    <div className="top-body-profile__user-info">
                                        <p className="top-body-profile__name">darkangeel</p>
                                        <p className="top-body-profile__username">@darkangeel</p>
                                    </div>
                                </div>
                                <div className="top-body-profile__actions">
                                    <NavLink to={"/messages"} className="top-body-profile__button top-body-profile__button--message button">
                                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.25 0.296875H0.75C0.613248 0.296875 0.482096 0.3512 0.385398 0.447898C0.2887 0.544596 0.234375 0.675748 0.234375 0.8125V12.5C0.234375 12.8191 0.361133 13.1251 0.586762 13.3507C0.812392 13.5764 1.11841 13.7031 1.4375 13.7031H16.5625C16.8816 13.7031 17.1876 13.5764 17.4132 13.3507C17.6389 13.1251 17.7656 12.8191 17.7656 12.5V0.8125C17.7656 0.675748 17.7113 0.544596 17.6146 0.447898C17.5179 0.3512 17.3868 0.296875 17.25 0.296875ZM15.9248 1.32812L9 7.67547L2.07516 1.32812H15.9248ZM16.5625 12.6719H1.4375C1.39192 12.6719 1.3482 12.6538 1.31597 12.6215C1.28373 12.5893 1.26562 12.5456 1.26562 12.5V1.98469L8.65625 8.75484C8.7513 8.8418 8.87547 8.89003 9.0043 8.89003C9.13313 8.89003 9.25729 8.8418 9.35234 8.75484L16.7344 1.98469V12.5C16.7344 12.5456 16.7163 12.5893 16.684 12.6215C16.6518 12.6538 16.6081 12.6719 16.5625 12.6719Z" fill="white" />
                                        </svg>

                                        <span>Message</span>
                                    </NavLink>
                                    <NavLink to={"/messages"} className="top-body-profile__button top-body-profile__button--gift button button--transparent">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.875009 7.63114V17.1624C0.875008 17.4395 0.929694 17.7139 1.03593 17.9699C1.14217 18.2258 1.29788 18.4583 1.49412 18.6539C1.69037 18.8496 1.9233 19.0046 2.17956 19.1101C2.43583 19.2156 2.71039 19.2695 2.98751 19.2686H15.0188C15.5774 19.2686 16.1131 19.0467 16.5081 18.6517C16.9031 18.2567 17.125 17.721 17.125 17.1624V7.63114C17.125 7.07195 16.9033 6.53557 16.5085 6.13958C16.1137 5.74359 15.5779 5.52029 15.0188 5.51864H13.6813C13.8657 5.32839 14.0291 5.11885 14.1688 4.89364C14.436 4.44606 14.5833 3.93711 14.5965 3.41598C14.6096 2.89484 14.4881 2.37912 14.2438 1.91864C14.0312 1.54743 13.7218 1.2409 13.3487 1.03176C12.9755 0.822622 12.5526 0.718718 12.125 0.731139C11.6567 0.716213 11.1908 0.8029 10.7592 0.985237C10.3277 1.16757 9.94072 1.44123 9.62501 1.78739C9.37528 2.05179 9.1648 2.35067 9.00001 2.67489C8.84485 2.35258 8.64496 2.0538 8.40626 1.78739C8.09055 1.44123 7.7036 1.16757 7.27204 0.985237C6.84047 0.8029 6.37453 0.716213 5.90626 0.731139C5.47849 0.718311 5.0552 0.821306 4.68115 1.02924C4.30709 1.23717 3.99617 1.5423 3.78126 1.91239C3.53689 2.37287 3.41541 2.88859 3.42854 3.40973C3.44168 3.93086 3.589 4.43981 3.85626 4.88739C3.99587 5.11261 4.15931 5.32214 4.34376 5.51239H2.98751C2.70957 5.51239 2.43435 5.56724 2.17764 5.67379C1.92094 5.78034 1.68778 5.93651 1.49153 6.13333C1.29529 6.33016 1.13981 6.56378 1.03402 6.8208C0.928222 7.07782 0.874187 7.3532 0.875009 7.63114ZM15.875 7.63114V17.1624C15.875 17.2748 15.8529 17.3862 15.8098 17.4901C15.7668 17.5939 15.7037 17.6883 15.6242 17.7678C15.5447 17.8474 15.4503 17.9104 15.3464 17.9535C15.2425 17.9965 15.1312 18.0186 15.0188 18.0186H9.62501L9.66876 6.76864H15.0375C15.2619 6.77515 15.4749 6.86888 15.6313 7.02993C15.7877 7.19098 15.8751 7.40666 15.875 7.63114ZM12.125 2.00614C12.3336 1.99208 12.5419 2.03674 12.7264 2.13506C12.9109 2.23338 13.0641 2.38142 13.1688 2.56239C13.3062 2.83222 13.3709 3.13319 13.3567 3.43565C13.3424 3.73812 13.2497 4.03166 13.0875 4.28739C12.8188 4.75614 12.1125 5.53739 10.4125 5.53739H9.62501C9.62501 4.78114 9.76876 3.43739 10.4938 2.64364C10.6991 2.41862 10.9521 2.24235 11.2344 2.12772C11.5166 2.0131 11.8209 1.96301 12.125 1.98114V2.00614ZM4.91876 4.26239C4.75661 4.00666 4.66385 3.71312 4.6496 3.41065C4.63535 3.10819 4.70011 2.80722 4.83751 2.53739C4.94166 2.35741 5.09392 2.21002 5.27718 2.11177C5.46044 2.01351 5.66747 1.96828 5.87501 1.98114C6.17108 1.96296 6.46756 2.00945 6.74386 2.11738C7.02016 2.22531 7.26965 2.39209 7.47501 2.60614C8.20626 3.41864 8.33751 4.76239 8.37501 5.51864H7.59376C5.87501 5.51864 5.18751 4.73114 4.91876 4.26239ZM2.12501 7.63114C2.12501 7.40239 2.21588 7.18301 2.37763 7.02126C2.53938 6.85951 2.75876 6.76864 2.98751 6.76864H8.37501L8.33126 18.0186H2.98751C2.87454 18.0195 2.76252 17.9979 2.65792 17.9553C2.55331 17.9126 2.45818 17.8497 2.378 17.7701C2.29783 17.6905 2.2342 17.5958 2.19078 17.4915C2.14736 17.3872 2.12501 17.2754 2.12501 17.1624V7.63114Z" fill="#3F79CF" />
                                        </svg>

                                        <span>Send a gift</span>
                                    </NavLink>
                                    {/* <a href="" className="top-body-profile__button top-body-profile__button--vid button button--transparent">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_380_6883)">
                                            <path d="M19.7718 2.7392C19.7726 2.48234 19.7104 2.22946 19.5912 2.00487C19.4719 1.78026 19.2994 1.59137 19.0901 1.45657L19.09 1.45649L19.7218 2.73904M19.7718 2.7392L19.7218 2.73904M19.7718 2.7392V2.73904H19.7218M19.7718 2.7392V11.2598C19.7717 11.5164 19.7092 11.7688 19.5901 11.9932C19.4709 12.2175 19.299 12.4065 19.0904 12.5419C18.8817 12.6773 18.6434 12.7547 18.398 12.7663C18.1526 12.778 17.9085 12.7237 17.6889 12.6086L17.6817 12.6047L17.6821 12.6042L14.2162 9.99203M19.7218 2.73904V11.2598C19.7217 11.5083 19.6612 11.7526 19.5459 11.9697C19.4306 12.1868 19.2645 12.3693 19.0631 12.5C18.8618 12.6306 18.632 12.7051 18.3956 12.7164C18.1592 12.7277 17.9239 12.6753 17.7121 12.5643L14.2162 9.92942V9.99203M14.2162 9.99203L14.1662 9.95434M14.2162 9.99203L14.1662 9.95434M14.1662 9.95434V10.889C14.1655 11.5334 13.9214 12.1512 13.4874 12.6068C13.0535 13.0625 12.4651 13.3188 11.8514 13.3196L14.1662 9.95434ZM12.7969 11.8852C13.0482 11.6214 13.1899 11.2631 13.1903 10.8889V3.11127C13.1899 2.7371 13.0482 2.37884 12.7969 2.11497C12.5456 1.85118 12.2055 1.70329 11.8514 1.70289H2.59222C2.23803 1.70329 1.89794 1.85118 1.64672 2.11497C1.39542 2.37883 1.25367 2.73707 1.25327 3.11122C1.25327 3.11124 1.25327 3.11125 1.25327 3.11127M12.7969 11.8852L1.20327 3.11122L1.25327 3.11127M12.7969 11.8852C12.5456 12.149 12.2055 12.2969 11.8514 12.2973H2.59222C2.23803 12.2969 1.89794 12.149 1.64672 11.8852C1.39542 11.6214 1.25367 11.2631 1.25327 10.889M12.7969 11.8852L1.25327 10.889M1.25327 3.11127V10.8889M1.25327 3.11127V10.8889M1.25327 10.8889L1.25327 10.889M1.25327 10.8889L1.25327 10.889M14.2162 4.06909L14.1662 4.10688V4.04421L14.2162 4.00641V4.06909ZM18.7459 11.2592C18.7446 11.3286 18.7283 11.3967 18.6983 11.4582C18.6682 11.5198 18.6252 11.5731 18.5727 11.6143C18.5202 11.6553 18.4596 11.6832 18.3957 11.6957C18.3346 11.7077 18.2719 11.7055 18.2117 11.6894L14.2162 8.67044V5.32926L18.1526 2.34663C18.2145 2.31497 18.2828 2.30016 18.3513 2.30342C18.4212 2.30674 18.4892 2.32874 18.549 2.36755C18.6088 2.40638 18.6585 2.46078 18.693 2.52583C18.7276 2.59088 18.7458 2.66429 18.7459 2.73906V11.2592Z" fill="#3F79CF" stroke="#3F79CF" style="fill:#3F79CF;fill:color(display-p3 0.2471 0.4733 0.8125);fill-opacity:1;stroke:#3F79CF;stroke:color(display-p3 0.2471 0.4733 0.8125);stroke-opacity:1;" stroke-width="0.1"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_380_6883">
                                            <rect width="20" height="14" fill="white" />
                                            </clipPath>
                                            </defs>
                                        </svg>
                                            
                                            
                                        <span>Custom vids</span>
                                    </a> */}
                                </div>
                            </div>
                            <div className="body-profile__info info-body-profile">
                                <div className="info-body-profile__item">
                                    <p className="info-body-profile__text">Type</p>
                                    <a href="some">Model/Producer</a>
                                </div>
                                <div className="info-body-profile__item">
                                    <p className="info-body-profile__text">Location</p>
                                    <a href="some">Florida Beaches</a>
                                </div>
                                <div className="info-body-profile__item">
                                    <p className="info-body-profile__text">FANS</p>
                                    <span>9K</span>
                                </div>
                            </div>
                            <div data-showmore="size" className="body-profile__about about-body-profile">
                                <div data-showmore-content="24" className="about-body-profile__content">
                                    <p>Glad to have you as my new kinky friend! Now that I've got you where I want you, let's have a little fun!Glad to have you as my new kinky friend! Now that I've got you where I want you, let's have a little fun!Glad to have you as my new kinky friend! Now that I've got you where I want you, let's have a little fun!</p>
                                </div>
                                <button hidden data-showmore-button type="button" className="about-body-profile__more">
                                    <span>View more</span>
                                    <span>View less</span>
                                </button>
                            </div>
                            <div className="main__highlights highlights-main">


                                {/* TODO Сделать слайдер */}
                                <Highlights />
                                {/* <div className="highlights-main__body body-highlights-main swiper">
                                    <div className="highlights-main__content swiper-wrapper">
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>
                                        <a href="some" className="highlights-main__item item-highlights-main swiper-slide">
                                            <div className="item-highlights-main__image">
                                                <img src={StoryPh} alt="ph" />
                                            </div>
                                            <p className="item-highlights-main__text">New</p>
                                        </a>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__tabs tabs-profile">
                    <div className="tabs-profile__item active timeline">
                        <div className="tabs-profile__image">
                            <img src={MessageIc} alt="Icon" />
                        </div>
                        <p className="tabs-profile__name">Timeline</p>
                    </div>
                    <div className="tabs-profile__item video-store">
                        <div className="tabs-profile__image">
                            <img src={VideoIc} alt="Icon" />
                        </div>
                        <p className="tabs-profile__name">Video Store</p>
                    </div>
                    <div className="tabs-profile__item folders">
                        <div className="tabs-profile__image">
                            <img src={FolderIc} alt="Icon" />
                        </div>
                        <p className="tabs-profile__name">Folders</p>
                    </div>
                </div>
                <div className="profile__block">
                    <div className="profile__promotional promotional-profile">
                        <div className="promotional-profile__title title title--medium">PROMOTIONAL CAMPAIGN</div>
                        <p className="promotional-profile__text">Welcome, I hope you enjoy your stay and extend it! LOYALFANS is the ONLY platform I'm on!! Can't wait to connect with you in my DMs! XXX & OH! Nyssa</p>
                        <a href="some" data-popup="#popup-successfull" className="promotional-profile__button button-subscribe button">
                            <div className="button-subscribe__block">
                                <p>Subscribe (<span>60%</span>off)</p>
                            </div>
                            <div className="button-subscribe__price">
                                <p>
                                    <span className="button-subscribe__value">$10</span>
                                    <span className="button-subscribe__discount">$25.00</span>(per month)</p>
                            </div>
                        </a>
                    </div>
                    <div className="profile__folders folders-profile">
                        <div className="folders-profile__item active">
                            <p>Тело</p>
                        </div>
                        <div className="folders-profile__item">
                            <p>Попа</p>
                        </div>
                        <div className="folders-profile__item">
                            <p>Сиськи</p>
                        </div>
                        <div className="folders-profile__item">
                            <p>Тело</p>
                        </div>
                        <div className="folders-profile__item">
                            <p>Попа</p>
                        </div>
                        <div className="folders-profile__item">
                            <p>Сиськи</p>
                        </div>
                    </div>
                </div>
                <div className="profile__content content-profile">
                    <div className="content-profile__tabs tabs-content-profile">
                        <div className="tabs-content-profile__item">
                            <p className="tabs-content-profile__name">
                                <span>2379</span> Posts</p>
                        </div>
                        <div className="tabs-content-profile__item">
                            <p className="tabs-content-profile__name">
                                <span>6419</span> MEDIA</p>
                        </div>

                    </div>
                    <div className="main__content content-main">
                        <div className="content-main__post post pin main__item locked">
                            <div className="post__top top-post">
                                <div className="top-post__user user-item user-item--stories online">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src={UserPh} alt="User ph" />
                                        <div className="user-item__image-status">
                                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="user-item__body">
                                        <a href="some" className="user-item__name">Boob007</a>
                                        <div className="user-item__block">
                                            <div className="user-item__post-time">
                                                <span>02.03.20</span>14:15<span>
                                                </span>
                                            </div>
                                            <div className="user-item__post-pin pin-icon">
                                                <img src={PinIc} alt="Icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-post__actions actions field">
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
                            <div className="post__body">
                                <div data-showmore="size" className="post-text text-post">
                                    <div data-showmore-content="24" className="text-post__content">
                                        <p>Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with...Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with..</p>
                                    </div>
                                    <button hidden data-showmore-button type="button" className="text-post__more">
                                        <span>See more</span>
                                        <span>See less</span>
                                    </button>
                                </div>
                                <div className="post__content content-post">
                                    <div className="content-post__images gallery">
                                        <div className="content-post__image gallery__image">
                                            <img src="@img/post/01.jpg" alt="ph" className="ibg gallery__preview" />

                                            <div className="content-post__image-unlock unlock">
                                                <div className="unlock__body">
                                                    <div className="unlock__image">
                                                        <img src="@img/icons/logo.svg" alt="Icon" />
                                                    </div>
                                                    <a href="some" className="unlock__button button button--fw">
                                                        <span>Unlock for $ <span className="unlock__button-price">12</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="post__footer footer-post">
                                <div className="footer-post__block">
                                    <div className="footer-post__reactions reactions">
                                        <div className="reactions__item">🚀 <span>3</span>
                                        </div>
                                        <div className="reactions__item">🤣 <span>3</span>
                                        </div>
                                        <div className="reactions__item">💪 <span>3</span>
                                        </div>
                                        <div className="reactions__item">😘 <span>3</span>
                                        </div>
                                        <div className="reactions__item">🤘 <span>3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-post__body">
                                    <div className="footer-post__content">
                                        {/* onclick="toggleActive(this)" */}
                                        <button className="footer-post__like like-footer-post">
                                            <div className="like-footer-post__body">
                                                <div className="like-footer-post__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383" />
                                                    </svg>
                                                </div>
                                                <span>99</span>
                                            </div>
                                            <div className="reactions-popup">
                                                <div className="reactions-popup__body">
                                                    <div className="reactions-popup__item">🚀</div>
                                                    <div className="reactions-popup__item">🤣</div>
                                                    <div className="reactions-popup__item">💪</div>
                                                    <div className="reactions-popup__item">😘</div>
                                                    <div className="reactions-popup__item">🤘</div>

                                                </div>
                                            </div>
                                        </button>
                                        <a href="some" className="footer-post__comments comments-footer-post">
                                            <div className="comments-footer-post__body">
                                                <div className="comments-footer-post__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" />
                                                    </svg>
                                                </div>
                                                <span>99</span>
                                            </div>

                                        </a>
                                        <div className="footer-post__reactions reactions">
                                            <div className="reactions__item">🚀 <span>3</span>
                                            </div>
                                            <div className="reactions__item">🤣 <span>3</span>
                                            </div>
                                            <div className="reactions__item">💪 <span>3</span>
                                            </div>
                                            <div className="reactions__item">😘 <span>3</span>
                                            </div>
                                            <div className="reactions__item">🤘 <span>3</span>
                                            </div>



                                        </div>

                                    </div>
                                    <a href="some" className="footer-post__share">
                                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="content-main__post post pin main__item locked">
                            <div className="post__top top-post">
                                <div className="top-post__user user-item user-item--stories online">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src={UserPh} alt="User ph" />
                                        <div className="user-item__image-status">
                                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="user-item__body">
                                        <a href="some" className="user-item__name">Boob007</a>
                                        <div className="user-item__block">
                                            <div className="user-item__post-time">
                                                <span>02.03.20</span>14:15<span>
                                                </span>
                                            </div>
                                            <div className="user-item__post-pin pin-icon">
                                                <img src={PinIc} alt="Icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-post__actions actions field">
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
                            <div className="post__body">
                                <div data-showmore="size" className="post-text text-post">
                                    <div data-showmore-content="24" className="text-post__content">
                                        <p>Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with...Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with..</p>
                                    </div>
                                    <button hidden data-showmore-button type="button" className="text-post__more">
                                        <span>See more</span>
                                        <span>See less</span>
                                    </button>
                                </div>
                                <div className="post__content content-post">
                                    <div className="content-post__images gallery two-photo">
                                        <div className="content-post__image gallery__image">
                                            <img src="@img/post/01.jpg" alt="ph" className="ibg gallery__preview" />

                                            <div className="content-post__image-unlock unlock">
                                                <div className="unlock__body">
                                                    <div className="unlock__image">
                                                        <img src="@img/icons/logo.svg" alt="Icon" />
                                                    </div>
                                                    <a href="some" className="unlock__button button button--fw">
                                                        <span>Follow to unlock</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-post__image gallery__image">
                                            <img src="@img/post/01.jpg" alt="ph" className="ibg gallery__preview" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post__footer footer-post">
                                <div className="footer-post__block">
                                    <div className="footer-post__reactions reactions">
                                        <div className="reactions__item">🚀 <span>3</span>
                                        </div>
                                        <div className="reactions__item">🤣 <span>3</span>
                                        </div>
                                        <div className="reactions__item">💪 <span>3</span>
                                        </div>
                                        <div className="reactions__item">😘 <span>3</span>
                                        </div>
                                        <div className="reactions__item">🤘 <span>3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-post__body">
                                    <div className="footer-post__content">
                                        {/* onclick="toggleActive(this)" */}
                                        <button className="footer-post__like like-footer-post">
                                            <div className="like-footer-post__body">
                                                <div className="like-footer-post__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383" />
                                                    </svg>
                                                </div>
                                                <span>99</span>
                                            </div>
                                            <div className="reactions-popup">
                                                <div className="reactions-popup__body">
                                                    <div className="reactions-popup__item">🚀</div>
                                                    <div className="reactions-popup__item">🤣</div>
                                                    <div className="reactions-popup__item">💪</div>
                                                    <div className="reactions-popup__item">😘</div>
                                                    <div className="reactions-popup__item">🤘</div>

                                                </div>
                                            </div>
                                        </button>
                                        <a href="some" className="footer-post__comments comments-footer-post">
                                            <div className="comments-footer-post__body">
                                                <div className="comments-footer-post__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" />
                                                    </svg>
                                                </div>
                                                <span>99</span>
                                            </div>

                                        </a>
                                        <div className="footer-post__reactions reactions">
                                            <div className="reactions__item">🚀 <span>3</span>
                                            </div>
                                            <div className="reactions__item">🤣 <span>3</span>
                                            </div>
                                            <div className="reactions__item">💪 <span>3</span>
                                            </div>
                                            <div className="reactions__item">😘 <span>3</span>
                                            </div>
                                            <div className="reactions__item">🤘 <span>3</span>
                                            </div>



                                        </div>

                                    </div>
                                    <a href="some" className="footer-post__share">
                                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="content-main__post post pin main__item locked">
                            <div className="post__top top-post">
                                <div className="top-post__user user-item user-item--stories online">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src={UserPh} alt="User ph" />
                                        <div className="user-item__image-status">
                                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="user-item__body">
                                        <a href="some" className="user-item__name">Boob007</a>
                                        <div className="user-item__block">
                                            <div className="user-item__post-time">
                                                <span>02.03.20</span>14:15<span>
                                                </span>
                                            </div>
                                            <div className="user-item__post-pin pin-icon">
                                                <img src={PinIc} alt="Icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-post__actions actions field">
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
                            <div className="post__body">
                                <div data-showmore="size" className="post-text text-post">
                                    <div data-showmore-content="24" className="text-post__content">
                                        <p>Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with...Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with..</p>
                                    </div>
                                    <button hidden data-showmore-button type="button" className="text-post__more">
                                        <span>See more</span>
                                        <span>See less</span>
                                    </button>
                                </div>
                                <div className="post__content content-post">
                                    <div className="content-post__images gallery three-photo">
                                        <div className="content-post__image gallery__image">
                                            <img src="@img/post/01.jpg" alt="ph" className="ibg gallery__preview" />

                                            <div className="content-post__image-unlock unlock">
                                                <div className="unlock__body">
                                                    <div className="unlock__image">
                                                        <img src="@img/icons/logo.svg" alt="Icon" />
                                                    </div>
                                                    <a href="some" className="unlock__button button button--fw">
                                                        <span>Subscribe</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-post__image gallery__image">
                                            <img src="@img/post/01.jpg" alt="ph" className="ibg gallery__preview" />
                                        </div>
                                        <div className="content-post__image gallery__image">
                                            <img src="@img/post/01.jpg" alt="ph" className="ibg gallery__preview" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post__footer footer-post">
                                <div className="footer-post__block">
                                    <div className="footer-post__reactions reactions">
                                        <div className="reactions__item">🚀 <span>3</span>
                                        </div>
                                        <div className="reactions__item">🤣 <span>3</span>
                                        </div>
                                        <div className="reactions__item">💪 <span>3</span>
                                        </div>
                                        <div className="reactions__item">😘 <span>3</span>
                                        </div>
                                        <div className="reactions__item">🤘 <span>3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-post__body">
                                    <div className="footer-post__content">
                                        {/* onclick="toggleActive(this)" */}
                                        <button className="footer-post__like like-footer-post">
                                            <div className="like-footer-post__body">
                                                <div className="like-footer-post__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383" />
                                                    </svg>
                                                </div>
                                                <span>99</span>
                                            </div>
                                            <div className="reactions-popup">
                                                <div className="reactions-popup__body">
                                                    <div className="reactions-popup__item">🚀</div>
                                                    <div className="reactions-popup__item">🤣</div>
                                                    <div className="reactions-popup__item">💪</div>
                                                    <div className="reactions-popup__item">😘</div>
                                                    <div className="reactions-popup__item">🤘</div>

                                                </div>
                                            </div>
                                        </button>
                                        <a href="some" className="footer-post__comments comments-footer-post">
                                            <div className="comments-footer-post__body">
                                                <div className="comments-footer-post__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" />
                                                    </svg>
                                                </div>
                                                <span>99</span>
                                            </div>

                                        </a>
                                        <div className="footer-post__reactions reactions">
                                            <div className="reactions__item">🚀 <span>3</span>
                                            </div>
                                            <div className="reactions__item">🤣 <span>3</span>
                                            </div>
                                            <div className="reactions__item">💪 <span>3</span>
                                            </div>
                                            <div className="reactions__item">😘 <span>3</span>
                                            </div>
                                            <div className="reactions__item">🤘 <span>3</span>
                                            </div>
                                        </div>

                                    </div>
                                    <a href="some" className="footer-post__share">
                                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
