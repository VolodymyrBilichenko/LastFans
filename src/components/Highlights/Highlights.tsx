import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import StoryPh from '../../assets/img/story/story.jpg'
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export const Highlights = () => {
    const handleInDevelop = () => {
		toast.error('This element in the development')
	}

    return (
        <div className="main__highlights highlights-main main__item">
            <div className="highlights-main__header">
                <h3 className="highlights-main__title title title--small">Highlights</h3>
            </div>

            <Swiper className="highlights-main__body body-highlights-main mySwiper"
                slidesPerView={'auto'}
                spaceBetween={22}

                breakpoints={{

                    479.98: {
                        spaceBetween: 10,
                        
                    },
                    // 991.98: {
                    //     slidesPerView: 6,
                    // },

                    
                }}
            >
                <SwiperSlide >
                    <NavLink to={''} onClick={handleInDevelop} data-popup="#popup-timeline-post" className="highlights-main__item item-highlights-main item-highlights-main--new">
                        <div className="item-highlights-main__image">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 0C9.5868 0 10.0625 0.475697 10.0625 1.0625V7.4375H16.4375C17.0243 7.4375 17.5 7.9132 17.5 8.5C17.5 9.0868 17.0243 9.5625 16.4375 9.5625H10.0625V15.9375C10.0625 16.5243 9.5868 17 9 17C8.4132 17 7.9375 16.5243 7.9375 15.9375V9.5625H1.5625C0.975697 9.5625 0.5 9.0868 0.5 8.5C0.5 7.9132 0.975697 7.4375 1.5625 7.4375H7.9375V1.0625C7.9375 0.475697 8.4132 0 9 0Z" fill="#3F79CF" style={{fill:'#3F79CF', fillOpacity:'1'}} />
                            </svg>
                        </div>
                        <p className="item-highlights-main__text">New</p>
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">boobs</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide >
                    <NavLink to={'/profile'} className="highlights-main__item item-highlights-main">
                        <div className="item-highlights-main__image">
                                <img src={StoryPh} alt="ph"/>
                        </div>
                        <p className="item-highlights-main__text">NewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNewNew</p>
                    </NavLink>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
