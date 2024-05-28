import { AutoMessage } from '../pages/AutoMessage/AutoMessage'
import { BlockedUsers } from '../pages/BlockedUsers/BlockedUsers'
import { Followers } from '../pages/Followers/Followers'
import { ForgotPass } from '../pages/ForgotPass/ForgotPass'
import { History } from '../pages/History/History'
import { LiveStream } from '../pages/LiveStream/LiveStream'
import { Login } from '../pages/Login/Login'
import { Main } from '../pages/Main/Main'
import { NotFound } from '../pages/NotFound/NotFound'
import { Registration } from '../pages/Registration/Registration'

export const routes: any[] = [
    
    {
        path: '/LastFans',
        element: <Main/>,
        
    },
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/forgot',
        element: <ForgotPass/>
    },
    {
        path: '/live',
        element: <LiveStream/>
    },
    {
        path: '/auto-message',
        element: <AutoMessage/>
    },
    {
        path: '/history',
        element: <History/>
    },

    
    {
        path: '/blocked-users',
        element: <BlockedUsers/>
    },
    {
        path: '/followers',
        element: <Followers/>
    },
    {
        path: '*',
        element: <NotFound/>
    },

]