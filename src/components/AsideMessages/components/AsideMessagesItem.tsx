import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserPhoto2 from './../../../assets/img/user/02.jpg'
import LogoWhiteIc from './../../../assets/img/icons/logo-white.svg'

interface IAsideMessagesItemProps {
    userName: string
    isOnline: boolean
    id: string
}

export const AsideMessagesItem: React.FC<IAsideMessagesItemProps> = ({userName, isOnline, id}) => {

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    return (
        <div className="body-messages__item item-message">
            <div onClick={_ => navigate(`/messages/${id}`)} style={{width: "100%"}} className="item-message__user user-item user-item--stories">
                <div className="user-item__image user-item__image--decoration">
                    <img className="user-photo" src={UserPhoto2} alt="ph" />
                    <div className="user-item__image-icon">
                        <img src={LogoWhiteIc} alt="ph" />
                    </div>
                </div>
                <div className="user-item__body">
                    <button style={{textAlign: "left"}} className="user-item__name">
                        {userName}
                    </button>
                    <span className="user-item__status online">
                        <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4.5" r="4" fill={isOnline ? "#3DD598" : "grey"} />
                        </svg>

                        {isOnline ? "Online" : "Offline"}
                    </span>
                </div>
            </div>
            <div className={`top-body-messages__actions actions field ${isOpen ? 'field-active' : ''}`}>
                <svg onClick={_ => setIsOpen(prev => !prev)} width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                    <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                    <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
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
    )
}
