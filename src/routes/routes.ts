import { Main } from '../'

export const routes = () => {
    return [
        {
            path: '/LastFans',
            element: <Main/>
        },
        {
            path: '/',
            element: <Main/>
        },
    ]
}