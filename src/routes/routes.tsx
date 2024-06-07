import { AutoMessage } from '../pages/AutoMessage/AutoMessage'
import { ForgotPass } from '../pages/ForgotPass/ForgotPass'
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
import { Profile } from '../pages/Profile/Profile'
import { Statistic } from '../pages/Statistic/Statistic'
import { VideoStore } from '../pages/VideoStore/VideoStore'
import { AddStore } from '../pages/AddStore/AddStore'
import { Rules } from '../pages/Rules/Rules'

export const routes: any[] = [
    
    {
        path: '/LastFans',
        element: <Main/>,
        additionalClass: 'page-main'
    },
    {
        path: '/',
        element: <Main/>,
        additionalClass: 'page-main'
    },
    {
        path: '/registration',
        element: <Registration/>,
        isNotNeedHeader: true,
        isNotNeedMessage: true,
        isNotNeedMenu: true,
        additionalClass: 'page-registration'
    },
    {
        path: '/login',
        element: <Login/>,
        isNotNeedHeader: true,
        isNotNeedMessage: true,
        isNotNeedMenu: true,
        additionalClass: 'page-login'
    },
    {
        path: '/forgot',
        element: <ForgotPass/>,
        isNotNeedHeader: true,
        isNotNeedMessage: true,
        isNotNeedMenu: true,
        additionalClass: 'page-login'
    },
    {
        path: '/live',
        element: <LiveStream/>,
        isNotNeedMessage: true
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
        element: <Messages/>,
        isNotNeedMessage: true,
        additionalClass: 'messages-page'
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
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/my-profile',
        element: <MyProfile/>
    },
    {
        path: '/statistic',
        element: <Statistic/>
    },
    {
        path: '/video-store',
        element: <VideoStore/>
    },
    {
        path: '/add-store',
        element: <AddStore/>
    },
    {
        path: '/subscribers',
        element: <Subscribers/>
    },
    {
        path: '/rules/:title',
        element: <Rules/>,
    },
    {
        path: '*',
        element: <NotFound/>,
        isNotNeedHeader: true,
        isNotNeedMessage: true,
        isNotNeedMenu: true,
        additionalClass: 'page-registration'
    },
]