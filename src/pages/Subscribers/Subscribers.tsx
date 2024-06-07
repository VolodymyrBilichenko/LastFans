// import UserBgPh from '../../assets/img/user/bg.jpg'
// import UserPh from '../../assets/img/user/01.png'

import { SubscribersButtons } from './components/SubscribersButtons'
import { Followers } from '../Followers/Followers'
import { SubscribersItems } from './components/SubscribersItems/SubscribersItems'
import { Groups } from '../Groups/Groups'

export const Subscribers = () => {
    return (
        <div className="page-subscribers">
            <div className="page-subscribers__container">
                <div className="page-subscribers__body">

                    
                    <SubscribersButtons/>

                    <Followers/>

                    <Groups/>

                    <div className="page-subscribers__content">

                        <SubscribersItems/>

                    </div>
                </div>
            </div>
        </div> 
    )
}
