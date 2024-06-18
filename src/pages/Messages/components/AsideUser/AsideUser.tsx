import React, { SetStateAction, useEffect, useState } from 'react'
import UserPh from '../../../../assets/img/user/01.png'
import UserBgPh from '../../../../assets/img/user/bg.jpg'
import ImageIc from '../../../../assets/img/icons/image.svg'
import ProfileIc from '../../../../assets/img/icons/user.svg'
import StatsIc from '../../../../assets/img/icons/stats.svg'
import RenameIc from '../../../../assets/img/icons/user-menu/edit.svg'
import AudioMuteIc from '../../../../assets/img/icons/audio-mute.svg'
import PinIc from '../../../../assets/img/icons/pin-green.svg'
import BlockedUserIc from '../../../../assets/img/icons/blocked-user.svg'
import { NavLink } from 'react-router-dom'
import { IUser } from '../../../../models'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addModal } from '../../../../redux/toolkitSlice'
import { MediaFiles } from '../MediaFiles/MediaFiles'

interface IAsideUserProps {
    // setChatTheme: React.Dispatch<SetStateAction<string>>
}

export const AsideUser: React.FC<IAsideUserProps> = ({ ...props }) => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)
    const dispatch = useDispatch()

    const [chatTheme, setChatTheme] = useState<string>('green');
    const [showMediaFiles, setShowMediaFiles] = useState<boolean>(false);

    useEffect(() => {
        // props.setChatTheme(chatTheme)
    }, [chatTheme])

    const handleChooseTheme = (theme: string) => {
        if (!theme) toast.error('Unfortunately, we do not have this color')

        setChatTheme(theme)
    }

    const handleModalOpen = (modalName: string) => {
        dispatch(addModal(`${modalName}`))
    }

    const handleMediaFilesClick = () => {
        setShowMediaFiles(!showMediaFiles);
    };

    return (
        // className="messages-user"
        <div>
            <div className="messages-user__body">
                <div className="messages-user__body-wrapper">

                    <div className="messages-user__top top-messages-user">
                        <div className="user-item">
                            <div className="user-item__image">
                                <img className="user-photo" src={UserPh} alt="User ph" />
                            </div>
                            <NavLink to={`/profile/${'123'}`} className="user-item__body">
                                <button className="user-item__name">Boob007</button>
                                <button className="user-item__username">@Boob007</button>

                            </NavLink>
                        </div>
                    </div>

                    <div className="messages-user__block">
                        {!showMediaFiles &&
                            <>
                                <div className="messages-user__actions actions-messages-user">
                                    {user.sex === "man" && <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={ProfileIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Timeline</p>
                                    </button>}
                                    {user.sex === "woman" && <NavLink to={`/profile/${'123'}`} className="actions-messages-user__item item-actions-messages-user">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={ProfileIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Profile</p>
                                    </NavLink>}
                                    {user.sex === "woman" && <NavLink to={`/statistic`} className="actions-messages-user__item item-actions-messages-user">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={StatsIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Stats</p>
                                    </NavLink>}
                                    {user.sex === "woman" && <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={RenameIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Rename</p>
                                    </button>}
                                    <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={AudioMuteIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Mute</p>
                                    </button>
                                    {user.sex === "woman" && <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={PinIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Pin</p>
                                    </button>}
                                    <button onClick={() => handleModalOpen('blockUser')} data-popup="#popup-block-user" className="actions-messages-user__item item-actions-messages-user block">
                                        <div className="item-actions-messages-user__icon">
                                            <img src={BlockedUserIc} alt="Icon" />
                                        </div>
                                        <p className="item-actions-messages-user__text">Block</p>
                                    </button>
                                </div>
                                {user.sex === "woman" && <button onClick={() => handleModalOpen('addUserGroup')} data-popup="#popup-user-group" className="messages-user__add button button--fw"><span>Add to group</span></button>}
                                <div className="messages-user__themes themes-messages-user">
                                    <div className="themes-messages-user__title">Themes</div>
                                    <div className="themes-messages-user__items">
                                        <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('purple')} style={{ background: 'linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%)' }} className={`themes-messages-user__item ${chatTheme === "purple" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('red')} style={{ background: 'linear-gradient(90deg, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)' }} className={`themes-messages-user__item ${chatTheme === "red" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('blue')} style={{ background: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)' }} className={`themes-messages-user__item ${chatTheme === "blue" ? "active" : ""}`}></div>
                                        <div onClick={_ => handleChooseTheme('green')} style={{ background: 'linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)' }} className={`themes-messages-user__item ${chatTheme === "green" ? "active" : ""}`}></div>

                                    </div>

                                </div>
                                {user.sex === "woman" && <div className="messages-user__notes notes-messages-user">
                                    <div className="notes-messages-user__title">Private notes</div>
                                    <p className="notes-messages-user__text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </p>
                                    <p className="notes-messages-user__text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </p>
                                </div>}
                            </>
                        }

                        {user.sex === "woman" &&
                            <>
                                {!showMediaFiles &&
                                    <button onClick={handleMediaFilesClick} className="messages-user__media button button--fw button--transparent">
                                        <img src={ImageIc} alt="Icon" />
                                        <span>Media files</span>
                                    </button>
                                }

                                {showMediaFiles && <MediaFiles handleClose={handleMediaFilesClick} />}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
