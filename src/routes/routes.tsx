import { Main } from '../pages/Main/Main'
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

]