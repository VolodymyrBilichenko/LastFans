// import React, { useState } from 'react'
// import PostPh from './../../../../assets/img/post/01.jpg'
// import UserPh from './../../../../assets/img/user/01.png'
// import UserPh2 from './../../../../assets/img/user/02.jpg'
// import UserBgPh from './../../../../assets/img/user/bg.jpg'
// import LogoWhiteIc from './../../../../assets/img/icons/logo-white.svg'
// import MessageIc from './../../../../assets/img/icons/user-menu/message.svg'
// import ImageIc from './../../../../assets/img/icons/image.svg'
// import VideoIc from './../../../../assets/img/icons/video.svg'
// import AudioIc from './../../../../assets/img/icons/audio.svg'
// import SendIc from './../../../../assets/img/icons/send.svg'
// import MicroIc from './../../../../assets/img/icons/micro.svg'
// import ProfileIc from './../../../../assets/img/icons/user.svg'
// import StatsIc from './../../../../assets/img/icons/stats.svg'
// import RenameIc from './../../../../assets/img/icons/user-menu/edit.svg'
// import AudioMuteIc from './../../../../assets/img/icons/audio-mute.svg'
// import PinIc from './../../../../assets/img/icons/pin-green.svg'
// import BlockedUserIc from './../../../../assets/img/icons/blocked-user.svg'
import { createContext, useState } from 'react'
import { ChatBottom } from './ChatBottom'
import { ChatHeader } from './ChatHeader'
import { ChatMain } from './ChatMain'

interface IChatProps {
    chatTheme: string
}

export const ChangeMessageId: any = createContext(null)

export const Chat: React.FC<IChatProps> = ({ chatTheme }) => {

    return (
        <div className="chat">
            <div className="chat__container">
                <div className="chat__body">

                    <ChatHeader />

                    <ChatMain
                        chatTheme={chatTheme}
                    />

                    <ChatBottom />

                </div>
            </div>
        </div>
    )
}
