import ProfilePh from '../../assets/img/user/profile-top.jpg'
import UserPh from '../../assets/img/user/01.png'
import MoneyIc from '../../assets/img/icons/money-white.svg'
import SaleIc from '../../assets/img/icons/sale.svg'
import EditIc from '../../assets/img/icons/edit.svg'
import { IUser } from '../../models'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { MyProfileVid } from './components/MyProfileVid'



export const MyProfile = () => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const [usernameValue, setUsernameValue] = useState<string>(user.username)
    const [usertagValue, setUsertagValue] = useState<string>(user.usertag)
    const [userPhoto, setUserPhoto] = useState<string>(UserPh)
    const [coverPhoto, setCoverPhoto] = useState<string>(ProfilePh)

    const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setUserPhoto(e.target.result as string);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setCoverPhoto(e.target.result as string);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__header">
                        <h2 className="body-profile__title title title--medium">My profile</h2>
                    </div>
                    <div className="body-profile__block">
                        {user.sex === "woman" && <div className="body-profile__top-image">
                            <img src={coverPhoto} alt="ph"/>
                            <button className="edit" onClick={() => document.getElementById('coverPhotoInput')?.click()}>
                                <img className="ibg" src={EditIc} alt="Icon"/>
                            </button>
                            <input
                                type="file"
                                id="coverPhotoInput"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleCoverPhotoChange}
                            />
                        </div>}
                        <div className="body-profile__wrapper">
                            <div className="body-profile__top top-body-profile">
                                <div className="top-body-profile__image">
                                    <img className="ibg" src={userPhoto} alt="ph"/>
                                    <button className="edit" onClick={() => document.getElementById('profilePhotoInput')?.click()}>
                                        <img src={EditIc} alt="Icon"/>
                                    </button>
                                    <input type="file" 
                                        style={{display: 'none'}}
                                        id='profilePhotoInput'
                                        accept='image/*'
                                        onChange={handleProfilePhotoChange}
                                    />
                                </div>
                                <div className="top-body-profile__actions">
                                    <button className="top-body-profile__button button button--transparent" onClick={() => document.getElementById('profilePhotoInput')?.click()}><span>Edit profile photo</span></button>

                                    {user.sex === "woman" && <button className="top-body-profile__button button button--transparent" onClick={() => document.getElementById('coverPhotoInput')?.click()}><span>Edit cover photo</span></button>}
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
