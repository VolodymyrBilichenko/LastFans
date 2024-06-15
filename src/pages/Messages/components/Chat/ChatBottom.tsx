// import React from 'react'
// import PostPh from './../../../../assets/img/post/01.jpg'
// import UserPh from './../../../../assets/img/user/01.png'
// import UserPh2 from './../../../../assets/img/user/02.jpg'
// import UserBgPh from './../../../../assets/img/user/bg.jpg'
// import LogoWhiteIc from './../../../../assets/img/icons/logo-white.svg'
// import MessageIc from './../../../../assets/img/icons/user-menu/message.svg'
// import ImageIc from './../../../../assets/img/icons/image.svg'
// import VideoIc from './../../../../assets/img/icons/video.svg'
// import AudioIc from './../../../../assets/img/icons/audio.svg'
import SendIc from './../../../../assets/img/icons/send.svg'
import MicroIc from './../../../../assets/img/icons/micro.svg'
import { toast } from 'react-toastify'
import { IUser } from '../../../../models'
import { useSelector } from 'react-redux'
// import ProfileIc from './../../../../assets/img/icons/user.svg'
// import StatsIc from './../../../../assets/img/icons/stats.svg'
// import RenameIc from './../../../../assets/img/icons/user-menu/edit.svg'
// import AudioMuteIc from './../../../../assets/img/icons/audio-mute.svg'
// import PinIc from './../../../../assets/img/icons/pin-green.svg'
// import BlockedUserIc from './../../../../assets/img/icons/blocked-user.svg'

interface IChatBottomProps {

}

export const ChatBottom: React.FC<IChatBottomProps> = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <div className="chat__footer footer-chat">
            <div className="footer-chat__input input-chat">
                <div className="input-chat__box">
                    <div className="input-chat__icon">
                        <img src={MicroIc} alt="Icon" />
                    </div>
                    <input type="text" placeholder="Enter message..." className="input-chat__input input" />
                </div>
                <div className="input-chat__block">
                    <div className="input-chat__actions actions-input-chat">

                        {user.sex === "man" && <button onClick={_ => toast.error('This function is developing')} className="actions-input-chat__item actions-input-chat__item--tip">
                            <span>Tip</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#29CE69"></circle>
                                <g clip-path="url(#clip0_369_11387)">
                                    <path d="M10.401 9.63986V7.26306C10.8677 7.42855 11.2028 7.87417 11.2028 8.39682H12.0047C12.0047 7.42879 11.3149 6.61889 10.401 6.43263V5.72412H9.59922V6.43263C8.68538 6.61886 7.99561 7.42877 7.99561 8.39682C7.99561 9.36487 8.68538 10.1747 9.59922 10.361V12.7378C9.1326 12.5723 8.79741 12.1267 8.79741 11.6041H7.99561C7.99561 12.5721 8.68538 13.382 9.59922 13.5682V14.2768H10.401V13.5682C11.3149 13.382 12.0047 12.5721 12.0047 11.6041C12.0047 10.636 11.3149 9.82612 10.401 9.63986ZM9.59922 9.53058C9.1326 9.36508 8.79741 8.91946 8.79741 8.39682C8.79741 7.87417 9.1326 7.42855 9.59922 7.26306V9.53058ZM10.401 12.7378V10.4703C10.8677 10.6358 11.2028 11.0814 11.2028 11.6041C11.2028 12.1267 10.8677 12.5723 10.401 12.7378Z" fill="white"></path>
                                    <path d="M10.0003 3.1582C6.22152 3.1582 3.1582 6.22152 3.1582 10.0003C3.1582 13.7791 6.22152 16.8424 10.0003 16.8424C13.7791 16.8424 16.8424 13.7791 16.8424 10.0003C16.8424 6.22152 13.7791 3.1582 10.0003 3.1582ZM10.0003 16.0406C6.66435 16.0406 3.96001 13.3363 3.96001 10.0003C3.96001 6.66435 6.66435 3.96001 10.0003 3.96001C13.3363 3.96001 16.0406 6.66435 16.0406 10.0003C16.0406 13.3363 13.3363 16.0406 10.0003 16.0406Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_369_11387">
                                        <rect width="13.6842" height="13.6842" fill="white" transform="translate(3.1582 3.1582)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>}

                        {user.sex === "man" && <button onClick={_ => toast.error('This function is developing')} className="actions-input-chat__item actions-input-chat__item--present">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.250011 9.15746V20.595C0.25001 20.9275 0.315633 21.2568 0.44312 21.5639C0.570608 21.8711 0.757453 22.15 0.992948 22.3848C1.22844 22.6196 1.50796 22.8056 1.81548 22.9322C2.12299 23.0588 2.45246 23.1235 2.78501 23.1225H17.2225C17.8928 23.1225 18.5357 22.8562 19.0097 22.3822C19.4837 21.9082 19.75 21.2653 19.75 20.595V9.15746C19.75 8.48644 19.484 7.84278 19.0102 7.36759C18.5364 6.89241 17.8935 6.62445 17.2225 6.62246H15.6175C15.8388 6.39417 16.035 6.14272 16.2025 5.87246C16.5232 5.33537 16.7 4.72464 16.7158 4.09927C16.7315 3.4739 16.5858 2.85504 16.2925 2.30246C16.0374 1.85702 15.6662 1.48918 15.2184 1.23821C14.7706 0.987244 14.2631 0.86256 13.75 0.877464C13.1881 0.859553 12.629 0.963577 12.1111 1.18238C11.5932 1.40119 11.1289 1.72958 10.75 2.14496C10.4503 2.46224 10.1978 2.8209 10 3.20996C9.81382 2.8232 9.57395 2.46466 9.28751 2.14496C8.90866 1.72958 8.44432 1.40119 7.92644 1.18238C7.40856 0.963577 6.84943 0.859553 6.28751 0.877464C5.77419 0.862071 5.26624 0.985665 4.81738 1.23518C4.36851 1.4847 3.99541 1.85086 3.73751 2.29496C3.44427 2.84754 3.29849 3.4664 3.31425 4.09177C3.33002 4.71714 3.5068 5.32787 3.82751 5.86496C3.99505 6.13522 4.19117 6.38667 4.41251 6.61496H2.78501C2.45148 6.61496 2.12122 6.68078 1.81317 6.80864C1.50512 6.93651 1.22533 7.12391 0.989839 7.3601C0.754344 7.59629 0.567773 7.87663 0.44082 8.18506C0.313866 8.49348 0.249024 8.82393 0.250011 9.15746ZM18.25 9.15746V20.595C18.25 20.7299 18.2234 20.8635 18.1718 20.9882C18.1202 21.1128 18.0445 21.2261 17.9491 21.3215C17.8537 21.4169 17.7404 21.4926 17.6157 21.5443C17.4911 21.5959 17.3574 21.6225 17.2225 21.6225H10.75L10.8025 8.12246H17.245C17.5143 8.13027 17.7699 8.24275 17.9576 8.43601C18.1452 8.62927 18.2501 8.88809 18.25 9.15746ZM13.75 2.40746C14.0003 2.3906 14.2503 2.44419 14.4717 2.56217C14.6931 2.68015 14.877 2.8578 15.0025 3.07496C15.1674 3.39877 15.2451 3.75992 15.228 4.12288C15.2109 4.48584 15.0996 4.83809 14.905 5.14496C14.5825 5.70746 13.735 6.64496 11.695 6.64496H10.75C10.75 5.73746 10.9225 4.12496 11.7925 3.17246C12.0389 2.90244 12.3426 2.69092 12.6813 2.55337C13.02 2.41581 13.3851 2.35572 13.75 2.37746V2.40746ZM5.10251 5.11496C4.90793 4.80809 4.79661 4.45584 4.77952 4.09288C4.76242 3.72992 4.84014 3.36877 5.00501 3.04496C5.13 2.82899 5.3127 2.65213 5.53262 2.53422C5.75253 2.41631 6.00096 2.36203 6.25001 2.37746C6.6053 2.35565 6.96107 2.41144 7.29263 2.54096C7.62419 2.67047 7.92358 2.87061 8.17001 3.12746C9.04751 4.10246 9.20501 5.71496 9.25001 6.62246H8.31251C6.25001 6.62246 5.42501 5.67746 5.10251 5.11496ZM1.75001 9.15746C1.75001 8.88297 1.85906 8.61971 2.05316 8.42561C2.24726 8.23151 2.51051 8.12246 2.78501 8.12246H9.25001L9.19751 21.6225H2.78501C2.64945 21.6235 2.51503 21.5976 2.3895 21.5464C2.26397 21.4952 2.14981 21.4197 2.05361 21.3242C1.9574 21.2287 1.88104 21.1151 1.82894 20.9899C1.77683 20.8648 1.75001 20.7305 1.75001 20.595V9.15746Z" fill="#B5CBED" />
                            </svg>
                        </button>}

                        <button onClick={_ => toast.error('This function is developing')} className="actions-input-chat__item actions-input-chat__item--image">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9996 9.25C21.8015 9.25259 21.6123 9.33244 21.4722 9.47254C21.3321 9.61263 21.2522 9.80189 21.2496 10V16L17.0696 11.22C16.8041 10.9373 16.4834 10.7119 16.1274 10.5579C15.7713 10.4039 15.3875 10.3244 14.9996 10.3244C14.6117 10.3244 14.2279 10.4039 13.8719 10.5579C13.5159 10.7119 13.1952 10.9373 12.9296 11.22L10.0596 14.5L9.11964 13.36C8.86061 13.0493 8.53645 12.7993 8.1701 12.6277C7.80375 12.4562 7.40416 12.3673 6.99964 12.3673C6.59511 12.3673 6.19552 12.4562 5.82917 12.6277C5.46282 12.7993 5.13866 13.0493 4.87964 13.36L2.74964 15.93V6C2.75227 5.13886 3.09553 4.31374 3.70445 3.70482C4.31337 3.09589 5.13849 2.75264 5.99964 2.75H13.9996C14.1985 2.75 14.3893 2.67098 14.53 2.53033C14.6706 2.38968 14.7496 2.19891 14.7496 2C14.7496 1.80109 14.6706 1.61032 14.53 1.46967C14.3893 1.32902 14.1985 1.25 13.9996 1.25H5.99964C4.73986 1.25 3.53168 1.75045 2.64088 2.64124C1.75008 3.53204 1.24964 4.74022 1.24964 6V18C1.24491 18.0163 1.24491 18.0337 1.24964 18.05C1.26281 19.3011 1.76906 20.4965 2.65843 21.3765C3.54781 22.2565 4.74847 22.7501 5.99964 22.75H17.9996C19.2456 22.7475 20.4408 22.2555 21.3274 21.3801C22.2141 20.5047 22.7213 19.3159 22.7396 18.07V10C22.7371 9.80359 22.6587 9.61578 22.5207 9.47596C22.3827 9.33613 22.196 9.25515 21.9996 9.25ZM17.9996 21.25H5.99964C5.18275 21.2474 4.3968 20.9373 3.79826 20.3813C3.19971 19.8254 2.83247 19.0645 2.76964 18.25L5.99964 14.32C6.12062 14.1852 6.26863 14.0774 6.43403 14.0036C6.59943 13.9298 6.77852 13.8917 6.95964 13.8917C7.14075 13.8917 7.31984 13.9298 7.48524 14.0036C7.65065 14.0774 7.79865 14.1852 7.91964 14.32L9.42964 16.14C9.49889 16.2242 9.58589 16.2921 9.68443 16.3388C9.78297 16.3854 9.8906 16.4098 9.99964 16.41C10.2156 16.3981 10.4191 16.3053 10.5696 16.15L14.0096 12.21C14.132 12.0811 14.2794 11.9785 14.4427 11.9083C14.606 11.8382 14.7819 11.802 14.9596 11.802C15.1374 11.802 15.3133 11.8382 15.4766 11.9083C15.6399 11.9785 15.7872 12.0811 15.9096 12.21L21.1796 18.21C21.1294 19.0239 20.7741 19.789 20.1847 20.3524C19.5952 20.9159 18.815 21.2365 17.9996 21.25Z" fill="#B5CBED" />
                                <path d="M4.25 7C4.25 7.5439 4.41128 8.07558 4.71346 8.52782C5.01563 8.98005 5.44512 9.33253 5.94762 9.54067C6.45012 9.74881 7.00305 9.80327 7.5365 9.69716C8.06995 9.59105 8.55995 9.32914 8.94454 8.94454C9.32914 8.55995 9.59105 8.06995 9.69716 7.5365C9.80327 7.00305 9.74881 6.45012 9.54067 5.94762C9.33253 5.44512 8.98005 5.01563 8.52782 4.71346C8.07558 4.41128 7.5439 4.25 7 4.25C6.27065 4.25 5.57118 4.53973 5.05546 5.05546C4.53973 5.57118 4.25 6.27065 4.25 7ZM8.25 7C8.25 7.24723 8.17669 7.4889 8.03934 7.69446C7.90199 7.90002 7.70676 8.06024 7.47835 8.15485C7.24995 8.24946 6.99861 8.27421 6.75614 8.22598C6.51366 8.17775 6.29093 8.0587 6.11612 7.88388C5.9413 7.70907 5.82225 7.48634 5.77402 7.24386C5.72579 7.00139 5.75054 6.75005 5.84515 6.52165C5.93976 6.29324 6.09998 6.09801 6.30554 5.96066C6.5111 5.82331 6.75277 5.75 7 5.75C7.33152 5.75 7.64946 5.8817 7.88388 6.11612C8.1183 6.35054 8.25 6.66848 8.25 7Z" fill="#B5CBED" />
                                <path d="M16 5.75H18.25V8C18.25 8.19891 18.329 8.38968 18.4697 8.53033C18.6103 8.67098 18.8011 8.75 19 8.75C19.1989 8.75 19.3897 8.67098 19.5303 8.53033C19.671 8.38968 19.75 8.19891 19.75 8V5.75H22C22.1989 5.75 22.3897 5.67098 22.5303 5.53033C22.671 5.38968 22.75 5.19891 22.75 5C22.75 4.80109 22.671 4.61032 22.5303 4.46967C22.3897 4.32902 22.1989 4.25 22 4.25H19.75V2C19.75 1.80109 19.671 1.61032 19.5303 1.46967C19.3897 1.32902 19.1989 1.25 19 1.25C18.8011 1.25 18.6103 1.32902 18.4697 1.46967C18.329 1.61032 18.25 1.80109 18.25 2V4.25H16C15.8011 4.25 15.6103 4.32902 15.4697 4.46967C15.329 4.61032 15.25 4.80109 15.25 5C15.25 5.19891 15.329 5.38968 15.4697 5.53033C15.6103 5.67098 15.8011 5.75 16 5.75Z" fill="#B5CBED" />
                            </svg>

                        </button>
                        <button onClick={_ => toast.error('This function is developing')} className="actions-input-chat__item actions-input-chat__item--audio">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16.5C13.1931 16.4988 14.337 16.0243 15.1806 15.1806C16.0243 14.337 16.4988 13.1931 16.5 12V6C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6V12C7.50124 13.1931 7.97575 14.337 8.81939 15.1806C9.66303 16.0243 10.8069 16.4988 12 16.5ZM9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V6ZM12.75 19.4625V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V19.4625C9.40091 19.2743 7.68728 18.4072 6.44048 17.0288C5.19368 15.6504 4.50228 13.8586 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25C5.44891 11.25 5.63968 11.329 5.78033 11.4697C5.92098 11.6103 6 11.8011 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 11.8011 18.079 11.6103 18.2197 11.4697C18.3603 11.329 18.5511 11.25 18.75 11.25C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.4977 13.8586 18.8063 15.6504 17.5595 17.0288C16.3127 18.4072 14.5991 19.2743 12.75 19.4625Z" fill="#B5CBED" />
                            </svg>


                        </button>
                        <button onClick={_ => toast.error('This function is developing')} className="actions-input-chat__item actions-input-chat__item--sticker">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#B5CBED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke="#B5CBED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke="#B5CBED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke="#B5CBED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </button>
                        <button onClick={_ => toast.error('This function is developing')} className="actions-input-chat__item actions-input-chat__item--emoji">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7783 4.22187C17.7006 2.14422 14.9382 1 12 1C9.06178 1 6.29947 2.14422 4.22182 4.22187C2.14418 6.29951 1 9.06186 1 12.0001C1 14.9383 2.14418 17.7007 4.22182 19.7783C6.29947 21.856 9.06182 23.0002 12 23.0002C14.9382 23.0002 17.7006 21.856 19.7783 19.7783C21.8559 17.7007 23.0001 14.9383 23.0001 12.0001C23.0001 9.06186 21.8559 6.29951 19.7783 4.22187ZM12 21.7111C6.64537 21.7111 2.28907 17.3548 2.28907 12.0001C2.28907 6.64541 6.64537 2.28907 12 2.28907C17.3547 2.28907 21.711 6.64541 21.711 12.0001C21.711 17.3548 17.3547 21.7111 12 21.7111Z" fill="#B5CBED" />
                                <path d="M7.85818 7.21326C6.3608 7.21326 5.14258 8.43152 5.14258 9.92895C5.14258 10.2849 5.43116 10.5735 5.78711 10.5735C6.14307 10.5735 6.43165 10.2849 6.43165 9.92895C6.43165 9.14231 7.07159 8.50233 7.85818 8.50233C8.64477 8.50233 9.28471 9.14231 9.28471 9.92895C9.28471 10.2849 9.57329 10.5735 9.92925 10.5735C10.2852 10.5735 10.5738 10.2849 10.5738 9.92895C10.5738 8.43152 9.35557 7.21326 7.85818 7.21326Z" fill="#B5CBED" />
                                <path d="M16.1414 7.21326C14.644 7.21326 13.4258 8.43152 13.4258 9.92895C13.4258 10.2849 13.7144 10.5735 14.0703 10.5735C14.4263 10.5735 14.7149 10.2849 14.7149 9.92895C14.7149 9.14231 15.3548 8.50233 16.1414 8.50233C16.928 8.50233 17.5679 9.14231 17.5679 9.92895C17.5679 10.2849 17.8565 10.5735 18.2125 10.5735C18.5684 10.5735 18.857 10.2849 18.857 9.92895C18.857 8.43152 17.6388 7.21326 16.1414 7.21326Z" fill="#B5CBED" />
                                <path d="M18.072 13.4633C17.7365 13.3447 17.3682 13.5206 17.2496 13.8562C16.4647 16.0768 14.3543 17.5687 11.9981 17.5687C9.6418 17.5687 7.53138 16.0768 6.74655 13.8562C6.62795 13.5206 6.25962 13.3447 5.92407 13.4633C5.58844 13.5819 5.41253 13.9502 5.53116 14.2858C6.49771 17.0204 9.09657 18.8578 11.9981 18.8578C14.8995 18.8578 17.4984 17.0204 18.4649 14.2858C18.5836 13.9502 18.4077 13.5819 18.072 13.4633Z" fill="#B5CBED" />
                            </svg>


                        </button>
                        <button className="actions-input-chat__item actions-input-chat__item--file" style={{ position: 'relative', cursor: 'pointer' }}>
                            <svg style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7391 4.26097C18.4513 2.97328 16.7048 2.24988 14.8836 2.24988C13.0625 2.24988 11.3159 2.97328 10.0281 4.26097L9.30813 4.98197C9.17565 5.12415 9.10353 5.31219 9.10696 5.5065C9.11038 5.7008 9.1891 5.88618 9.32651 6.0236C9.46392 6.16101 9.64931 6.23972 9.84361 6.24315C10.0379 6.24658 10.226 6.17445 10.3681 6.04197L11.0881 5.32197C11.5856 4.81975 12.1775 4.42076 12.8296 4.14792C13.4818 3.87509 14.1814 3.73378 14.8884 3.73211C15.5953 3.73045 16.2956 3.86846 16.949 4.13822C17.6025 4.40798 18.1962 4.80418 18.696 5.30406C19.1959 5.80393 19.5921 6.39764 19.8619 7.05108C20.1316 7.70451 20.2697 8.40481 20.268 9.11174C20.2663 9.81867 20.125 10.5183 19.8522 11.1705C19.5793 11.8226 19.1804 12.4145 18.6781 12.912L17.9581 13.632C17.8257 13.7741 17.7535 13.9622 17.757 14.1565C17.7604 14.3508 17.8391 14.5362 17.9765 14.6736C18.1139 14.811 18.2993 14.8897 18.4936 14.8931C18.6879 14.8966 18.876 14.8245 19.0181 14.692L19.7381 13.972C21.0255 12.6842 21.7487 10.9379 21.7487 9.11697C21.7487 7.29608 21.0255 5.54973 19.7381 4.26197L19.7391 4.26097ZM6.04313 9.30697C6.18358 9.4476 6.26247 9.63822 6.26247 9.83697C6.26247 10.0357 6.18358 10.2263 6.04313 10.367L5.32213 11.089C4.81991 11.5865 4.42092 12.1783 4.14808 12.8305C3.87525 13.4826 3.73394 14.1823 3.73227 14.8892C3.73061 15.5961 3.86862 16.2964 4.13838 16.9499C4.40814 17.6033 4.80434 18.197 5.30421 18.6969C5.80409 19.1968 6.3978 19.593 7.05124 19.8627C7.70467 20.1325 8.40497 20.2705 9.1119 20.2688C9.81883 20.2672 10.5185 20.1259 11.1706 19.853C11.8228 19.5802 12.4146 19.1812 12.9121 18.679L13.6321 17.957C13.7743 17.8245 13.9624 17.7524 14.1567 17.7558C14.351 17.7592 14.5363 17.8379 14.6738 17.9754C14.8112 18.1128 14.8899 18.2981 14.8933 18.4925C14.8967 18.6868 14.8246 18.8748 14.6921 19.017L13.9721 19.739C12.6784 20.9977 10.9412 21.6965 9.13619 21.684C7.33122 21.6716 5.60372 20.9491 4.32745 19.6727C3.05119 18.3963 2.32879 16.6687 2.31656 14.8637C2.30434 13.0587 3.00327 11.3215 4.26213 10.028L4.98213 9.30797C5.12276 9.16752 5.31338 9.08863 5.51213 9.08863C5.71088 9.08863 5.90151 9.16752 6.04213 9.30797L6.04313 9.30697Z" fill="#B5CBED" />
                                <path d="M14.694 9.30699C14.8345 9.44761 14.9134 9.63824 14.9134 9.83699C14.9134 10.0357 14.8345 10.2264 14.694 10.367L10.369 14.693C10.3004 14.7667 10.2176 14.8258 10.1256 14.8668C10.0336 14.9078 9.93425 14.9298 9.83354 14.9316C9.73284 14.9334 9.63281 14.9148 9.53942 14.8771C9.44604 14.8394 9.3612 14.7832 9.28998 14.712C9.21876 14.6408 9.16262 14.556 9.1249 14.4626C9.08718 14.3692 9.06865 14.2692 9.07043 14.1685C9.07221 14.0678 9.09425 13.9684 9.13524 13.8764C9.17623 13.7844 9.23533 13.7016 9.30902 13.633L13.633 9.30699C13.7736 9.16654 13.9643 9.08765 14.163 9.08765C14.3618 9.08765 14.5534 9.16654 14.694 9.30699Z" fill="#B5CBED" />
                            </svg>
                            <input
                                type="file"
                                style={{
                                    opacity: '0',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '22px',
                                    cursor: 'pointer'
                                }}
                            />

                        </button>
                    </div>
                    <button className="input-chat__send">
                        <img src={SendIc} alt="Icon" />
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
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#B5CBED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke="#B5CBED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke="#B5CBED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke="#B5CBED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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
    )
}
