// import PostPh from '../../assets/img/post/01.jpg' 
// import UserPh from '../../assets/img/user/01.png' 
import { ModelItem } from './components/ModelItem'

export const Models = () => {
    return (
        <div className="models">
            <div className="models__container">
                <div className="models__body main__item">
                    <div className="models__content">
                        
                        {
                            // TODO Change key index to ID
                            Array(5).fill('').map((item, index: number) => (
                                <ModelItem
                                    key={index}
                                    userName={'Natasha'}
                                    userTag={'@natasha123'}
                                    userId={'natasha123'}
                                />
                            ))
                        }
                        
                    </div>
                    <div className="video-store__footer footer-video-store">
                        <div className="footer-video-store__pages">
                            <a className='active' href="some"><span>1</span></a>
                            <a className='' href="some"><span>2</span></a>
                            <a className='' href="some"><span>3</span></a>
                            <a className='' href="some"><span>4</span></a>
                            <a className='' href="some"><span>5</span></a>
                        </div>
                        <div data-spollers className="header-video-store__per-page per-page">
                            <p className="per-page__text">Per page</p>
                            <button className="field-block-add-vid__item spollers__item-main spollers__item input input-main">
                                <div data-spoller-close className="field-block-add-vid__title spollers__title">36</div>
                                <div className="spollers__wrapper">

                                    <div className="field-block-add-vid__body spollers__body">
                                        <div className="field-block-add-vid__value">18</div>
                                        <div className="field-block-add-vid__value">36</div>
                                    </div>
                                </div>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
