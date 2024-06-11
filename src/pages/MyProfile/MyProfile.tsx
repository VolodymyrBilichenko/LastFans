import ProfilePh from '../../assets/img/user/profile-top.jpg'
import UserPh from '../../assets/img/user/01.png'
import MoneyIc from '../../assets/img/icons/money-white.svg'
import SaleIc from '../../assets/img/icons/sale.svg'
import { IUser } from '../../models'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { MyProfileVid } from './components/MyProfileVid'



export const MyProfile = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const [usernameValue, setUsernameValue] = useState<string>(user.username)
    const [usertagValue, setUsertagValue] = useState<string>(user.usertag)

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__header">
                        <h2 className="body-profile__title title title--medium">My profile</h2>
                    </div>
                    <div className="body-profile__block">
                        {user.sex === "woman" && <div className="body-profile__top-image">
                            <img src={ProfilePh} alt="ph"/>
                            <button className="edit">
                                <img className="ibg" src="@img/icons/edit.svg" alt="Icon"/>
                            </button>
                        </div>}
                        <div className="body-profile__wrapper">
                            <div style={{paddingTop: "1.4375rem"}} className="body-profile__top top-body-profile">
                                <div className="top-body-profile__image">
                                    <img className="ibg" src={UserPh} alt="ph"/>
                                    <button className="edit">
                                        <img src="@img/icons/edit.svg" alt="Icon"/>
                                    </button>
                                </div>
                                <div className="top-body-profile__actions">
                                    <button className="top-body-profile__button button button--transparent"><span>Edit profile photo</span></button>
                                    {user.sex === "woman" && <button className="top-body-profile__button button button--transparent"><span>Edit cover photo</span></button>}
                                </div>
                            </div>
                            <div className="body-profile__content content-body-profile">
                                <input type="text" value={usernameValue} onChange={e => setUsernameValue(e.target.value)} placeholder="Display name" className="content-body-profile__input input input-main"/>
                                <input type="text" value={usertagValue} onChange={e => setUsertagValue(e.target.value)} placeholder="Username" className="content-body-profile__input input input-main"/>
                                <textarea placeholder="About me" className="content-body-profile__about textarea"></textarea>
                            </div>
                            {user.sex === "woman" && <div className="body-profile__subscription subscription-body-profile">
                                <div className="subscription-body-profile__price">
                                    <p className="subscription-body-profile__text">Subscription price</p>
                                    <div className="subscription-body-profile__field">
                                        <div className="subscription-body-profile__image-input">
                                            <img src={MoneyIc} alt="Icon"/>
                                        </div>
                                        <input min="0" type="number" placeholder="" className="subscription-body-profile__input input input-main"/>
                                    </div>
                                </div>
                                <div className="subscription-body-profile__sale">
                                    <p className="subscription-body-profile__text">Sale</p>
                                    <div className="subscription-body-profile__field">
                                        <div className="subscription-body-profile__image-input">
                                            <img src={SaleIc} alt="Icon"/>
                                        </div>
                                        <input min="0" type="number" placeholder="" className="subscription-body-profile__input input input-main"/>
                                    </div>
                                </div>
                            </div>}
                            <button className="body-profile__button button"><span>Save changes</span></button>
                        </div>
                        
                    </div>
                </div>

                {user.sex === "woman" && <MyProfileVid/>}
                
            </div>
        </div>
    )
}
