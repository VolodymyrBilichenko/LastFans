import { AutoMessage } from '../pages/AutoMessage/AutoMessage'
import { BlockedUsers } from '../pages/BlockedUsers/BlockedUsers'
import { Followers } from '../pages/Followers/Followers'
import { ForgotPass } from '../pages/ForgotPass/ForgotPass'
import { Groups } from '../pages/Groups/Groups'
import { History } from '../pages/History/History'
import { LiveStream } from '../pages/LiveStream/LiveStream'
import { Login } from '../pages/Login/Login'
import { Main } from '../pages/Main/Main'
import { Messages } from '../pages/Messages/Messages'
import { Models } from '../pages/Models/Models'
import { NotFound } from '../pages/NotFound/NotFound'
import { Payment } from '../pages/Payment/Payment'
import { PaymentAdd } from '../pages/PaymentAdd/PaymentAdd'
import { MyProfile } from '../pages/MyProfile/MyProfile'
import { Registration } from '../pages/Registration/Registration'
import { Subscribers } from '../pages/Subscribers/Subscribers'

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
        path: '/messages',
        element: <Messages/>
    },
    {
        path: '/models',
        element: <Models/>
    },
    {
        path: '/payment',
        element: <Payment/>
    },
    {
        path: '/payment-add',
        element: <PaymentAdd/>
    },
    {
        path: '/my-profile',
        element: <MyProfile/>
    },
    
    
    {
        path: '/subscribers',
        element: <Subscribers/>
    },
    {
        path: '/groups',
        element: <Groups/>
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