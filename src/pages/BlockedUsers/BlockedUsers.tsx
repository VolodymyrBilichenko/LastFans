import { AsideMessages } from '../../components/AsideMessages/AsideMessages'
import { AsideMenu } from '../../components/AsideMenu/AsideMenu'

import UserBgPh from '../../assets/img/user/bg.jpg'
import UserPh from '../../assets/img/user/01.png'
import BlockedUserIc from '../../assets/img/icons/blocked-user.svg'

export const BlockedUsers = () => {
    return (
        <main className="page page-main">

            <AsideMenu/>

            <div className="page-subscribers">
                <div className="page-subscribers__container">
                    <div className="page-subscribers__body">
                        <div className="page-subscribers__tabs tabs-subscribers">
                            <div className="tabs-content-profile__item subscribers-tab">
                            
                                <p className="tabs-content-profile__name">Subscribers</p>
                            </div>
                            <div className="tabs-content-profile__item followers-tab ">
                                <div className="followers-tab__body field"> 
                                    <p className="tabs-content-profile__name">Followers</p>
                                    <button className="followers-tab__sort ">
                                        <img src="@img/icons/sort.svg" alt="Icon"/>
                                    </button>
                                    <div className="followers-tab__popup popup-followers-tab popup-main">
                                        <div className="popup-main__wrapper">
                                            <div className="popup-main__content">
        
                                                <div className="popup-followers-tab__top popup-main__top top-popup-main">
                                                    <p className="top-popup-main__text">Sort by</p>
                                                </div>
                                                <div className="popup-followers-tab__body body-popup-followers-tab">
                                                    <div className="body-popup-followers-tab__sort">
                                                        <div className="body-popup-followers-tab__item">
                                                            <div className="radio">
                                                                <label>
                                                                    <input type="radio" name="followers-sort" id="balance-high" className="real-radio"/>
                                                                    <span className="custom-radio"></span>
                                                                    Balance (from high to low)
                        
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="body-popup-followers-tab__item">
                                                            <div className="radio">
                                                                <label>
                                                                    <input type="radio" name="followers-sort" id="balance-low" className="real-radio"/>
                                                                    <span className="custom-radio"></span>
                                                                    Balance (from low to high)
                        
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="body-popup-followers-tab__item">
                                                            <div className="radio">
                                                                <label>
                                                                    <input type="radio" name="followers-sort" id="date-high" className="real-radio"/>
                                                                    <span className="custom-radio"></span>
                                                                    Follow date (from high to low)
                        
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="body-popup-followers-tab__item">
                                                            <div className="radio">
                                                                <label>
                                                                    <input type="radio" name="followers-sort" id="date-low" className="real-radio"/>
                                                                    <span className="custom-radio"></span>
                                                                    Follow date (from low to high)
                        
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs-content-profile__item groups-tab">
                                <p className="tabs-content-profile__name">Groups</p>
                            </div>
                            <div className="tabs-content-profile__item blocked-tab active">

                                <p className="tabs-content-profile__name">Blocked users</p>
                            </div>

                        </div>
                        <div className="page-subscribers__content">
                            <div className="page-subscribers__items blocked-users">
                                <div className="page-subscribers__item item-video-store blocked">
                                    <div className="item-video-store__wrapper">
                                        <div className="item-video-store__image">
                                            <img src={UserBgPh} alt="ph"/>
                                        </div>
                                        <div className="item-video-store__body">
                                            <div className="user-item__image">
                                                <img className="user-photo" src={UserPh} alt="User ph"/>
                                                <div className="user-item__image-blocked">
                                                    <div className="user-item__image-blocked-body">
                                                        <img src={BlockedUserIc} alt="Icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-video-store__content">
                                                <div className="item-video-store__top">
                                                    <div className="item-video-store__user">
                                                        <p className="item-video-store__name">Boob007</p>
                                                        <p className="item-video-store__username">@boob007</p>
                                                    </div>
                                                </div>
                                                <div className="item-video-store__block">
                                                    <div className="item-video-store__info">
                                                        <p>Joined since</p>
                                                        <span className="item-video-store__date">08.03.2024</span>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-subscribers__item item-video-store blocked">
                                    <div className="item-video-store__wrapper">
                                        <div className="item-video-store__image">
                                            <img src={UserBgPh} alt="ph"/>
                                        </div>
                                        <div className="item-video-store__body">
                                            <div className="user-item__image">
                                                <img className="user-photo" src={UserPh} alt="User ph"/>
                                                <div className="user-item__image-blocked">
                                                    <div className="user-item__image-blocked-body">
                                                        <img src={BlockedUserIc} alt="Icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-video-store__content">
                                                <div className="item-video-store__top">
                                                    <div className="item-video-store__user">
                                                        <p className="item-video-store__name">Boob007</p>
                                                        <p className="item-video-store__username">@boob007</p>
                                                    </div>
                                                </div>
                                                <div className="item-video-store__block">
                                                    <div className="item-video-store__info">
                                                        <p>Joined since</p>
                                                        <span className="item-video-store__date">08.03.2024</span>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-subscribers__item item-video-store blocked">
                                    <div className="item-video-store__wrapper">
                                        <div className="item-video-store__image">
                                            <img src={UserBgPh} alt="ph"/>
                                        </div>
                                        <div className="item-video-store__body">
                                            <div className="user-item__image">
                                                <img className="user-photo" src={UserPh} alt="User ph"/>
                                                <div className="user-item__image-blocked">
                                                    <div className="user-item__image-blocked-body">
                                                        <img src={BlockedUserIc} alt="Icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-video-store__content">
                                                <div className="item-video-store__top">
                                                    <div className="item-video-store__user">
                                                        <p className="item-video-store__name">Boob007</p>
                                                        <p className="item-video-store__username">@boob007</p>
                                                    </div>
                                                </div>
                                                <div className="item-video-store__block">
                                                    <div className="item-video-store__info">
                                                        <p>Joined since</p>
                                                        <span className="item-video-store__date">08.03.2024</span>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-subscribers__item item-video-store blocked">
                                    <div className="item-video-store__wrapper">
                                        <div className="item-video-store__image">
                                            <img src={UserBgPh} alt="ph"/>
                                        </div>
                                        <div className="item-video-store__body">
                                            <div className="user-item__image">
                                                <img className="user-photo" src={UserPh} alt="User ph"/>
                                                <div className="user-item__image-blocked">
                                                    <div className="user-item__image-blocked-body">
                                                        <img src={BlockedUserIc} alt="Icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-video-store__content">
                                                <div className="item-video-store__top">
                                                    <div className="item-video-store__user">
                                                        <p className="item-video-store__name">Boob007</p>
                                                        <p className="item-video-store__username">@boob007</p>
                                                    </div>
                                                </div>
                                                <div className="item-video-store__block">
                                                    <div className="item-video-store__info">
                                                        <p>Joined since</p>
                                                        <span className="item-video-store__date">08.03.2024</span>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-subscribers__item item-video-store blocked">
                                    <div className="item-video-store__wrapper">
                                        <div className="item-video-store__image">
                                            <img src={UserBgPh} alt="ph"/>
                                        </div>
                                        <div className="item-video-store__body">
                                            <div className="user-item__image">
                                                <img className="user-photo" src={UserPh} alt="User ph"/>
                                                <div className="user-item__image-blocked">
                                                    <div className="user-item__image-blocked-body">
                                                        <img src={BlockedUserIc} alt="Icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-video-store__content">
                                                <div className="item-video-store__top">
                                                    <div className="item-video-store__user">
                                                        <p className="item-video-store__name">Boob007</p>
                                                        <p className="item-video-store__username">@boob007</p>
                                                    </div>
                                                </div>
                                                <div className="item-video-store__block">
                                                    <div className="item-video-store__info">
                                                        <p>Joined since</p>
                                                        <span className="item-video-store__date">08.03.2024</span>
                                                    </div>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-subscribers__item item-video-store blocked">
                                    <div className="item-video-store__wrapper">
                                        <div className="item-video-store__image">
                                            <img src={UserBgPh} alt="ph"/>
                                        </div>
                                        <div className="item-video-store__body">
                                            <div className="user-item__image">
                                                <img className="user-photo" src={UserPh} alt="User ph"/>
                                                <div className="user-item__image-blocked">
                                                    <div className="user-item__image-blocked-body">
                                                        <img src={BlockedUserIc} alt="Icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-video-store__content">
                                                <div className="item-video-store__top">
                                                    <div className="item-video-store__user">
                                                        <p className="item-video-store__name">Boob007</p>
                                                        <p className="item-video-store__username">@boob007</p>
                                                    </div>
                                                </div>
                                                <div className="item-video-store__block">
                                                    <div className="item-video-store__info">
                                                        <p>Joined since</p>
                                                        <span className="item-video-store__date">08.03.2024</span>
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

            <AsideMessages/>
        </main>
    )
}
