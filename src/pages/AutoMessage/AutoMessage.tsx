import React from 'react'
import { AsideMenu } from '../../components/AsideMenu/AsideMenu'

export const AutoMessage = () => {
    return (
        <main className="page page-profile">
            <AsideMenu/>
            <div className="profile">
                <div className="profile__container">
                    <div className="profile__body body-profile">
                        <div className="body-profile__header">
                            <h2 className="body-profile__title title title--medium">Automated messages</h2>
                        </div>
                        <div className="automated">
                            <div className="automated__body">
                                <div className="automated__block">
                                    <label className="automated__label">Fan type</label>
                                    <div data-spollers className="automated__body">
                                        <details className="automated__spoller spoller-automated spollers__item input-main">
                                            <summary data-spoller-close className="spoller-automated__title spollers__title">Non Follower</summary>
                                            <div className="spoller-automated__body spollers__body">
                                                <p>1</p>
                                                <p>1</p>
                                                <p>1</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                                <div className="automated__block">
                                    <label className="automated__label">Action</label>
                                    <div data-spollers className="automated__body">
                                        <details className="automated__spoller spoller-automated spollers__item input-main">
                                            <summary data-spoller-close className="spoller-automated__title spollers__title">Follows</summary>
                                            <div className="spoller-automated__body spollers__body">
                                                <p>1</p>
                                                <p>1</p>
                                                <p>1</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                                <div className="automated__block">
                                    <label className="automated__label">Your message</label>
                                    <div className="automated__textarea-body">
                                        <textarea id="editor" className="automated__textarea textarea"></textarea>
                                    </div>
                                </div>
                                <div className="automated__bottom">
                                    <div className="automated__delay delay-automated">
                                        <div className="automated__block">
                                            <label className="automated__label">Add delay</label>
                                            <div className="delay-automated__body">
                                                <p className="delay-automated__text">Send after</p>
                                                <input min="0" type="number" className="delay-automated__input input input-main"/>
                                                <p className="delay-automated__text">sec</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="automated__button button"><span>Save changes</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className="page-messages">
                <div className="page-messages__body body-messages">
                    <div className="body-messages__top top-body-messages">
                        <h3 className="top-body-messages__title title title--small">Messages</h3>
                        <div className="top-body-messages__actions actions field">
                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                    <div className="body-messages__content">
                        <div className="body-messages__search search">
                            <input type="text" name="form[]" placeholder="Search by nickname or hashtags " className="search__input input"/>
                        </div>
                        <div className="body-messages__items">
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                            <div className="body-messages__item item-message">
                                <div className="item-message__user user-item user-item--stories">
                                    <div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src="@img/user/02.jpg" alt="ph"/>
                                        <div className="user-item__image-icon">
                                            <img src="@img/icons/logo-white.svg"  alt="ph"/>
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
                                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A"  />
                                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A"  />
                                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A"  />
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
                    <button className="body-messages__button button button--transparent button--fw"><span>Read all messages</span></button>
                </div>
            </aside>
        </main>
    )
}
