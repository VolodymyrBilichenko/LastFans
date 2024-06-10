import React, { useState } from 'react'
import { MessagesItem } from './MessagesItem'
import { IUser } from '../../../../models'
import UserPhoto from '../../../../assets/img/user/01.png'

interface IMessagesProps {

}

interface IMessage {
    user: IUser,
    message: string,
    isRead: boolean
}

export const Messages: React.FC<IMessagesProps> = () => {

    const [mockMessages, setMockMessages] = useState<IMessage[]>([
        {
            user: {
                username: "Lily",
                usertag: "@lil",
                photo: UserPhoto
            },
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.",
            isRead: false
        },
        {
            user: {
                username: "Lily",
                usertag: "@lil",
                photo: UserPhoto
            },
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.",
            isRead: false
        },
        {
            user: {
                username: "Lily",
                usertag: "@lil",
                photo: UserPhoto
            },
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.",
            isRead: false
        },
    ])

    const handleReadAll = () => {
        setMockMessages(prev => prev.map(item => ({...item, isRead: true})))
    }

    const isHaveUnreadMessages = !!mockMessages.filter(item => !item.isRead).length

    return (
        <div className="messages-header__popup popup-messages-header popup-main">
            <div className="popup-main__wrapper">
                <div className="popup-main__content">

                    <div className="popup-messages-header__top popup-main__top top-popup-main">
                        <p className="top-popup-main__text">Messages</p>
                        {isHaveUnreadMessages && <button onClick={handleReadAll} className="top-popup-main__read"><span>Mark as read</span></button>}
                    </div>
                    <div className="popup-messages-header__body body-popup-messages-header">
                        <div className="page-messages__body body-messages">
                            <div className="body-messages__content">
                                <div className="body-messages__items">
                                    
                                    {
                                        mockMessages.map(item => (
                                            <MessagesItem
                                                user={item.user}
                                                isRead={item.isRead}
                                                message={item.message}
                                            />
                                        ))
                                    }

                                </div>

                            </div>
                            <button className="body-messages__button button button--transparent button--fw"><span>View all messages</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
