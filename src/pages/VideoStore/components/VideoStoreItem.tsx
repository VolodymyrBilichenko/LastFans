import React, { useState } from 'react'
import PostPh from './../../../assets/img/post/01.jpg'
import UserPh from './../../../assets/img/user/01.png'
import { IUser } from '../../../models'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

interface IVideoStoreItemProps {
    title: string
    user: IUser
    date: string
    isNew: boolean
    isDownload: boolean
    price: number
    poster: string
}

export const VideoStoreItem: React.FC<IVideoStoreItemProps> = ({ title, date, isNew, isDownload, price, poster, ...props }) => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <div className="content-video-store__item item-video-store">
            <div className="item-video-store__wrapper">
                <div className="item-video-store__image">
                    <img src={poster} alt="ph" />
                    {user.sex === "man" && <div className="item-video-store__price">
                        <p>$<span>
                            {price}
                        </span></p>
                    </div>}
                </div>
                <div className="item-video-store__body">
                    <NavLink to={`/profile/${user.usertag}`} className="user-item__image">
                        <img className="user-photo" src={user.photo} alt="User ph" />
                    </NavLink>
                    <div className="item-video-store__content">
                        <p className="item-video-store__text">
                            {title}
                        </p>
                        <div className="item-video-store__block">
                            <div className="item-video-store__info">
                                <div className="item-video-store__user">
                                    <p className="item-video-store__name">
                                        {user.username}
                                    </p>
                                    <p className="item-video-store__username">
                                        {user.usertag}
                                    </p>
                                </div>
                                <span className="item-video-store__date">
                                    {date}
                                </span>
                            </div>
                            {user.sex === "man" && <button className="item-video-store__button button button--transparent"><span>Buy</span></button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-video-store__tags">
                {user.sex === "woman" && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--orange">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text"><span>25</span>$</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
                {user.sex === "man" && isNew && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--purple">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">New</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
                {user.sex === "man" && isDownload && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--green">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">Download</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
            </div>
        </div>
    )
}
