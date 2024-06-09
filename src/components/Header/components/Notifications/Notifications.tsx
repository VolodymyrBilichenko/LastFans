import React, { useState } from 'react'
import { NotificationsItem } from './NotificationsItem'
import UserPhoto from './../../../../assets/img/user/01.png'

interface INotificationsProps {

}

export const Notifications: React.FC<INotificationsProps> = () => {

    const [mockNotify, setMockNotify] = useState([
        {
            user: {
                username: 'Asd',
                usertag: '@asd',
                photo: UserPhoto
            },
            isRead: false,
            time: "24 min",
            message: "has sent you an tip in value of <span>$0.80</span>"
        },
        {
            user: {
                username: 'Asd12',
                usertag: '@asd321',
                photo: UserPhoto
            },
            isRead: false,
            time: "26 min",
            message: "has sent you an tip in value of <span>$0.20</span>"
        },
    ])

    const handleReadAll = () => {
        setMockNotify(prev => prev.map(item => ({...item, isRead: true})))
    }

    const isHaveUnreadNotifies = !!mockNotify.filter(item => !item.isRead).length

    return (
        <div className="notifications-header__popup popup-notifications-header popup-main">
            <div className="popup-main__wrapper">
                <div className="popup-main__content">

                    <div className="popup-notifications-header__top popup-main__top top-popup-main">
                        <p className="top-popup-main__text">Notification</p>
                        {isHaveUnreadNotifies && <button onClick={handleReadAll} className="top-popup-main__read"><span>Mark as read</span></button>}
                    </div>
                    <div className="popup-notifications-header__body body-popup-notifications-header">

                        {
                            mockNotify.map(item => (
                                <NotificationsItem
                                    user={item.user}
                                    isRead={item.isRead}
                                    time={item.time}
                                    message={item.message}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
