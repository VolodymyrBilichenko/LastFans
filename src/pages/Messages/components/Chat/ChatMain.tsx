import React, { useEffect, useRef, useState } from 'react'
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
// import { Transition } from 'react-transition-group'
import { ChatItem } from './ChatItem'
import { useSelector } from 'react-redux'

interface IChatMainProps {
    chatTheme: string
}

export const ChatMain: React.FC<IChatMainProps> = ({ chatTheme }) => {

    const chatWindow: any = useRef(null)

    useEffect(() => {
        chatWindow.current?.scrollTo(0, 9999)
    }, [])

    const themeColors: { [key: string]: any } = {
        // 'blue': {background: "linear-gradient(90deg, rgb(161, 196, 253) 0%, rgb(194, 233, 251) 100%)"},
        // 'green': {background: "linear-gradient(90deg, rgb(212, 252, 121) 0%, rgb(150, 230, 161) 100%)"},
        // 'red': {background: "linear-gradient(90deg, rgb(255, 129, 119) 0%, rgb(255, 134, 122) 0%, rgb(255, 140, 127) 21%, rgb(249, 145, 133) 52%, rgb(207, 85, 108) 78%, rgb(177, 42, 91) 100%)"},
        // 'purple': {background: "linear-gradient(90deg, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)"},
        'blue': { background: "#9f9fff" },
        'green': { background: "#a4e0a4" },
        'red': { background: "#ffb7b7" },
        'purple': { background: "#c98dc9" },
    }

    const chatMessages = useSelector((state: any) => state.toolkit.chatMessages)

    useEffect(() => {
        chatWindow.current?.scrollTo(0, 9999)
    }, [chatMessages])

    return (
        <div className="chat__content content-chat" ref={chatWindow}>
            <div data-gallery className="content-chat__body theme" style={{ ...themeColors[chatTheme], transition: "all .3s ease" }}>

                {
                    chatMessages.map((item: any) => (
                        <ChatItem
                            id={item.id}
                            message={item.message}
                            user={item.user}
                            date={item.date}
                            isOwner={item.isOwner}
                            images={item.images}
                            isEdited={item.isEdited}
                            replyTo={item.replyTo}
                            isLocked={item.isLocked}
                        />
                    ))
                }

            </div>
        </div>
    )
}
