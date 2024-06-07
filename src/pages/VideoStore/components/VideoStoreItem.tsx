import React from 'react'
import PostPh from './../../../assets/img/post/01.jpg'
import UserPh from './../../../assets/img/user/01.png'

interface IVideoStoreItemProps {
    title: string
    user: {
        userName: string
        userTag: string
    }
    date: string
    isNew: boolean
    isDownload: boolean
    price: number
}

export const VideoStoreItem: React.FC<IVideoStoreItemProps> = ({ title, user, date, isNew, isDownload, price }) => {

    return (
        <div className="content-video-store__item item-video-store">
            <div className="item-video-store__wrapper">
                <div className="item-video-store__image">
                    <img src={PostPh} alt="ph" />
                    <div className="item-video-store__price">
                        <p>$<span>
                            {price}
                        </span></p>
                    </div>
                </div>
                <div className="item-video-store__body">
                    <div className="user-item__image">
                        <img className="user-photo" src={UserPh} alt="User ph" />
                    </div>
                    <div className="item-video-store__content">
                        <p className="item-video-store__text">
                            {title}
                        </p>
                        <div className="item-video-store__block">
                            <div className="item-video-store__info">
                                <div className="item-video-store__user">
                                    <p className="item-video-store__name">
                                        {user.userName}
                                    </p>
                                    <p className="item-video-store__username">
                                        {user.userTag}
                                    </p>
                                </div>
                                <span className="item-video-store__date">
                                    {date}
                                </span>
                            </div>
                            <button className="item-video-store__button button button--transparent"><span>Buy</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-video-store__tags">
                {isNew && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--purple">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">New</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
                {isDownload && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--green">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">Download</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
            </div>
        </div>
    )
}
