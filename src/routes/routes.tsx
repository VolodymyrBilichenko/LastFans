import { AutoMessage } from '../pages/AutoMessage/AutoMessage'
import { BlockedUsers } from '../pages/BlockedUsers/BlockedUsers'
import { ForgotPass } from '../pages/ForgotPass/ForgotPass'
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
        path: '/blocked-users',
        element: <BlockedUsers/>
    },
    {
        path: '*',
        element: <NotFound/>
    },

]