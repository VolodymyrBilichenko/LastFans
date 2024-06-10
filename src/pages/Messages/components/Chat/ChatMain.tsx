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

interface IChatMainProps {
    chatTheme: string
}

export const ChatMain: React.FC<IChatMainProps> = ({ chatTheme }) => {

    // const [isLiked, setIsLiked] = useState(false);

    // const handleLiked = () => {
    //     setIsLiked(!isLiked)
    // }

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


    const [mockMessages,setMockMessages] = useState([
        {
            id: 1,
            message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
            user: {
                username: 'Eeeee',
                usertag: '@eeee',
                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
            },
            date: new Date(),
            isOwner: true
        },
        {
            id: 2,
            message: 'ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
            user: {
                username: 'Eeeee',
                usertag: '@eeee',
                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
            },
            date: new Date(),
        },
        {
            id: 3,
            message: 'ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
            user: {
                username: 'Eeeee',
                usertag: '@eeee',
                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
            },
            images: [
                'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            ],
            date: new Date(),
        },
        {
            id: 4,
            message: 'ipsam cupiditate iste amet repellendus nulla minus omnis ullam quas voluptas reprehenderit numquam, unde, necessitatibus mollitia aliquid! Saepe nam non voluptatem?',
            user: {
                username: 'Eeeee',
                usertag: '@eeee',
                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
            },
            images: [
                'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
                'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            ],
            isOwner: true,
            date: new Date(),
        },
    ])


    const handleDeleteMessage = (messageId: number | string) => {
        setMockMessages(prev => prev.filter(item => item.id !== messageId))
    }


    // TODO Взять текст сообщения и вставить его в редактор, дальше при отправке, найти уже существующий id и заменить текст в сообщении
    const handleEditMessage = (messageId: number | string, newMessage: string) => {
        setMockMessages(prev => prev.map(item => {
            if(item.id === messageId) {
                return {
                    ...item,
                    message: newMessage
                }
            } else return item
        }))
    }


    return (
        <div className="chat__content content-chat" ref={chatWindow}>
            <div data-gallery className="content-chat__body theme" style={{ ...themeColors[chatTheme], transition: "all .3s ease" }}>

                {
                    mockMessages.map(item => (
                        <ChatItem
                            id={item.id}
                            message={item.message}
                            user={item.user}
                            date={item.date}
                            isOwner={item.isOwner}
                            images={item.images}
                            handleDeleteMessage={handleDeleteMessage}
                            handleEditMessage={handleEditMessage}
                        />
                    ))
                }

            </div>
        </div>
    )
}
