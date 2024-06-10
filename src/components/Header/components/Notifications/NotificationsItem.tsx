import React from 'react'
// import UserPhoto from './../../../../assets/img/user/01.png'
import dollar from './../../../../assets/img/icons/dollar.svg'
import clock from './../../../../assets/img/icons/clock.svg'
import { IUser } from '../../../../models'
import HTMLReactParser from 'html-react-parser'

interface INotificationsItemProps {
    user: IUser
    isRead: boolean
    time: string
    message: string
}

export const NotificationsItem: React.FC<INotificationsItemProps> = ({ user, isRead, time, message }) => {

    return (
        <div className={`body-popup-notifications-header__item item-notifications ${!isRead ? "item-notifications--unread" : ""} item-notifications--tip`}>
            <a href="some" className="item-notifications__image">
                <img className="user-photo" src={user.photo} alt="ph" />
                <div className="item-notifications__image-icon">
                    <img src={dollar} alt="ph" />
                </div>
            </a>
            <div className="item-notifications__body body-item-notifications">
                <div className="body-item-notifications__top">
                    <a href="some" className="body-item-notifications__name">
                        {user.username}
                    </a>
                    <p className="body-item-notifications__username">
                        {user.usertag}
                    </p>
                </div>
                <div className="body-item-notifications__content content-body-item-notifications">
                    <p className="content-body-item-notifications__text">
                        {HTMLReactParser(message ?? "")}
                    </p>
                </div>
                <span className="body-item-notifications__time">
                    <div className="body-item-notifications__time-icon time">
                        <img src={clock} alt="Icon" />
                    </div>
                    <p>
                        {time}
                    </p>
                </span>
            </div>
        </div>
    )
}
