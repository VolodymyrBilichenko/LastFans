import { AsideMenu } from '../../components/AsideMenu/AsideMenu'
import { AsideMessages } from '../../components/AsideMessages/AsideMessages'
import { Highlights } from '../../components/Highlights/Highlights'

import UserPhoto from '../../assets/img/user/01.png'
import UserPost from '../../assets/img/post/01.jpg'
import Icon from '../../assets/img/icons/image.svg'
import PlusIc from '../../assets/img/icons/plus.svg'
import PinIc from '../../assets/img/icons/pin.svg'
import VideoIc from '../../assets/img/icons/video.svg'
import MoneyIc from '../../assets/img/icons/monney.svg'
import MoneyIc2 from '../../assets/img/icons/money-02.svg'
import AudioIc from '../../assets/img/icons/audio.svg'
import FileIc from '../../assets/img/icons/file.svg'
import StoryPh from '../../assets/img/story/story.jpg'
import LiveIc from '../../assets/img/icons/live.svg'

export const Main = () => {
  return (
    <div>
        <main className="page page-main">

			<AsideMenu/>

			<div className="main">
				<div className="main__container">
					<div className="main__new-post new-post-main main__item">
						<div className="new-post-main__body">
							<div className="new-post-main__content">
								<a href="some" className="new-post-main__image user-image user-image--40">
                                    <img src={UserPhoto} alt="ph"/>
								</a>
								<div className="new-post-main__input input-main">
									<input type="text" name="form[]" placeholder="Create new post" className="input"/>
								</div>
							</div>
							<div className="new-post-main__actions">
								<button className="new-post-main__item">
									<img src={Icon} alt="Icon"/>
								</button>
								<button className="new-post-main__item">
									<img src={VideoIc} alt="Icon"/>
								</button>
								<button className="new-post-main__item">
									<img src={MoneyIc} alt="Icon"/>
								</button>
								<button className="new-post-main__item">
									<img src={AudioIc} alt="Icon"/>
								</button>
								<button className="new-post-main__item">
									<img src={FileIc} alt="Icon"/>
								</button>
								<button className="new-post-main__item">
									<img src={MoneyIc2} alt="Icon"/>
								</button>
							</div>
						</div>
					</div>
					<div className="main__stories stories-main">
						<div className="stories-main__content">
							<div className="stories-main__item add-story">
								<div className="add-story__image">
                                        <img src={StoryPh} alt="ph"/>
								</div>
								<div className="add-story__text">
									<img src={PlusIc} alt="Icon"/>
									<p>Add story</p>
								</div>
							</div>
							<a href="some" className="stories-main__item live-stories-main">
								<div className="live-stories-main__text">
									<img src={LiveIc} alt="Icon"/>
									<p>Go Live</p>
								</div>
							</a>

						</div>
					</div>

					<Highlights/>

					<div className="main__content content-main">
						<div className="content-main__post post pin main__item">
							<div className="post__top top-post">
								<div className="top-post__user user-item user-item--stories online">
									<div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src={UserPhoto} alt="ph"/>
										<div className="user-item__image-status">
											<svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{fill:'#3DD598', fillOpacity:'1'}} />
											</svg>
										</div>
									</div>
									<div className="user-item__body">
										<a href="some" className="user-item__name">Boob007</a>
										<div className="user-item__block">
											<div className="user-item__post-time"><span>02.03.20</span>14:15<span></span></div>
											<div className="user-item__post-pin pin-icon">
												<img src={PinIc} alt="Icon"/>
											</div>
										</div>
									</div>
								</div>
								<div className="top-post__actions actions field">
									<svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
										<path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
										<path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
									</svg>
									<div className="actions__popup popup-actions">
										<div className="popup-actions__wrapper">
											<div className="popup-actions__content">
												<div className="popup-actions__body body-popup-actions">
													<a href="some" className="body-popup-actions__item mass">Mass message</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="post__body">
								<div data-showmore="size" className="post-text text-post">
									<div data-showmore-content="24" className="text-post__content">
										<p>Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with...Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with..</p>
									</div>
									<button hidden data-showmore-button type="button" className="text-post__more">
										<span>See more</span>
										<span>See less</span>
									</button>
								</div>
								<div className="post__content content-post">
									<div data-gallery className="content-post__images gallery">
										<a href="img/post/01.jpg" className="content-post__image gallery__image">
                                            <img src={UserPost} alt="" className="ibg gallery__preview"/>
										</a>
									</div>
								</div>
							</div>
							<div className="post__footer footer-post">
								<div className="footer-post__block">
									<div className="footer-post__reactions reactions">
										<div className="reactions__item">🚀 <span>3</span></div>
										<div className="reactions__item">🤣 <span>3</span></div>
										<div className="reactions__item">💪 <span>3</span></div>
										<div className="reactions__item">😘 <span>3</span></div>
										<div className="reactions__item">🤘 <span>3</span></div>
									</div>
								</div>
								<div className="footer-post__body">
									<div className="footer-post__content">
									{/* onclick="toggleActive(this)" */}
										<button className="footer-post__like like-footer-post">
											<div className="like-footer-post__body">
												<div className="like-footer-post__icon">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383" />
													</svg>
												</div>
												<span>99</span>
											</div>
											<div className="reactions-popup">
												<div className="reactions-popup__body">
													<div className="reactions-popup__item">🚀</div>
													<div className="reactions-popup__item">🤣</div>
													<div className="reactions-popup__item">💪</div>
													<div className="reactions-popup__item">😘</div>
													<div className="reactions-popup__item">🤘</div>

												</div>
											</div>
										</button>
										<a href="some" className="footer-post__comments comments-footer-post">
											<div className="comments-footer-post__body">
												<div className="comments-footer-post__icon">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" style={{fill:'#838383', fillOpacity:'1'}} />
													</svg>
												</div>
												<span>99</span>
											</div>

										</a>
										<div className="footer-post__reactions reactions">
											<div className="reactions__item">🚀 <span>3</span></div>
											<div className="reactions__item">🤣 <span>3</span></div>
											<div className="reactions__item">💪 <span>3</span></div>
											<div className="reactions__item">😘 <span>3</span></div>
											<div className="reactions__item">🤘 <span>3</span></div>



										</div>

									</div>
									<a href="some" className="footer-post__share">
										<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" style={{fill:'#838383', fillOpacity:'1'}} />
										</svg>
									</a>
								</div>

							</div>
						</div>
						<div className="content-main__post post pin main__item">
							<div className="post__top top-post">
								<div className="top-post__user user-item user-item--stories online">
									<div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src={UserPhoto} alt="ph"/>
										<div className="user-item__image-status">
											<svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{fill:'#3DD598', fillOpacity:'1'}} />
											</svg>
										</div>
									</div>
									<div className="user-item__body">
										<a href="some" className="user-item__name">Boob007</a>
										<div className="user-item__block">
											<div className="user-item__post-time"><span>02.03.20</span>14:15<span></span></div>
											<div className="user-item__post-pin pin-icon">
												<img src={PinIc} alt="Icon"/>
											</div>
										</div>
									</div>
								</div>
								<div className="top-post__actions actions field">
									<svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
										<path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
										<path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
									</svg>
									<div className="actions__popup popup-actions">
										<div className="popup-actions__wrapper">
											<div className="popup-actions__content">
												<div className="popup-actions__body body-popup-actions">
													<a href="some" className="body-popup-actions__item mass">Mass message</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="post__body">
								<div data-showmore="size" className="post-text text-post">
									<div data-showmore-content="24" className="text-post__content">
										<p>Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with...Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with..</p>
									</div>
									<button hidden data-showmore-button type="button" className="text-post__more">
										<span>See more</span>
										<span>See less</span>
									</button>
								</div>
								<div className="post__content content-post">
									<div data-gallery className="content-post__images gallery two-photo">
										<a href="img/post/01.jpg" className="content-post__image gallery__image">
                                            <img src={UserPost} alt="" className="ibg gallery__preview"/>
										</a>
										<a href="img/post/01.jpg" className="content-post__image gallery__image">
                                            <img src={UserPost} alt="" className="ibg gallery__preview"/>
										</a>
									</div>
								</div>
							</div>
							<div className="post__footer footer-post">
								<div className="footer-post__block">
									<div className="footer-post__reactions reactions">
										<div className="reactions__item">🚀 <span>3</span></div>
										<div className="reactions__item">🤣 <span>3</span></div>
										<div className="reactions__item">💪 <span>3</span></div>
										<div className="reactions__item">😘 <span>3</span></div>
										<div className="reactions__item">🤘 <span>3</span></div>
									</div>
								</div>
								<div className="footer-post__body">
									<div className="footer-post__content">
									{/* onclick="toggleActive(this)" */}
										<button className="footer-post__like like-footer-post">
											<div className="like-footer-post__body">
												<div className="like-footer-post__icon">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383" />
													</svg>
												</div>
												<span>99</span>
											</div>
											<div className="reactions-popup">
												<div className="reactions-popup__body">
													<div className="reactions-popup__item">🚀</div>
													<div className="reactions-popup__item">🤣</div>
													<div className="reactions-popup__item">💪</div>
													<div className="reactions-popup__item">😘</div>
													<div className="reactions-popup__item">🤘</div>

												</div>
											</div>
										</button>
										<a href="some" className="footer-post__comments comments-footer-post">
											<div className="comments-footer-post__body">
												<div className="comments-footer-post__icon">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" style={{fill:'#838383', fillOpacity:'1'}} />
													</svg>
												</div>
												<span>99</span>
											</div>

										</a>
										<div className="footer-post__reactions reactions">
											<div className="reactions__item">🚀 <span>3</span></div>
											<div className="reactions__item">🤣 <span>3</span></div>
											<div className="reactions__item">💪 <span>3</span></div>
											<div className="reactions__item">😘 <span>3</span></div>
											<div className="reactions__item">🤘 <span>3</span></div>



										</div>

									</div>
									<a href="some" className="footer-post__share">
										<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" style={{fill:'#838383', fillOpacity:'1'}} />
										</svg>
									</a>
								</div>

							</div>
						</div>
						<div className="content-main__post post pin main__item">
							<div className="post__top top-post">
								<div className="top-post__user user-item user-item--stories online">
									<div className="user-item__image user-item__image--decoration">
                                        <img className="user-photo" src={UserPhoto} alt="ph"/>
										<div className="user-item__image-status">
											<svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{fill:'#3DD598', fillOpacity:'1'}} />
											</svg>
										</div>
									</div>
									<div className="user-item__body">
										<a href="some" className="user-item__name">Boob007</a>
										<div className="user-item__block">
											<div className="user-item__post-time"><span>02.03.20</span>14:15<span></span></div>
											<div className="user-item__post-pin pin-icon">
												<img src={PinIc} alt="Icon"/>
											</div>
										</div>
									</div>
								</div>
								<div className="top-post__actions actions field">
									<svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
										<path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
										<path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" style={{fill:'#93989A', fillOpacity:'1'}} />
									</svg>
									<div className="actions__popup popup-actions">
										<div className="popup-actions__wrapper">
											<div className="popup-actions__content">
												<div className="popup-actions__body body-popup-actions">
													<a href="some" className="body-popup-actions__item mass">Mass message</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="post__body">
								<div data-showmore="size" className="post-text text-post">
									<div data-showmore-content="24" className="text-post__content">
										<p>Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with...Enter the email associated with your account and we’ll send an email with code to reset account and we’ll send an email with..</p>
									</div>
									<button hidden data-showmore-button type="button" className="text-post__more">
										<span>See more</span>
										<span>See less</span>
									</button>
								</div>
								<div className="post__content content-post">
									<div data-gallery className="content-post__images gallery three-photo">
										<a href="img/post/01.jpg" className="content-post__image gallery__image">
                                            <img src={UserPost} alt="" className="ibg gallery__preview"/>
										</a>
										<a href="img/post/01.jpg" className="content-post__image gallery__image">
                                            <img src={UserPost} alt="" className="ibg gallery__preview"/>
										</a>
										<a href="img/post/01.jpg" className="content-post__image gallery__image">
                                            <img src={UserPost} alt="" className="ibg gallery__preview"/>
										</a>
									</div>
								</div>
							</div>
							<div className="post__footer footer-post">
								<div className="footer-post__block">
									<div className="footer-post__reactions reactions">
										<div className="reactions__item">🚀 <span>3</span></div>
										<div className="reactions__item">🤣 <span>3</span></div>
										<div className="reactions__item">💪 <span>3</span></div>
										<div className="reactions__item">😘 <span>3</span></div>
										<div className="reactions__item">🤘 <span>3</span></div>
									</div>
								</div>
								<div className="footer-post__body">
									<div className="footer-post__content">
									{/* onclick="toggleActive(this)" */}
										<button className="footer-post__like like-footer-post">
											<div className="like-footer-post__body">
												<div className="like-footer-post__icon">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M13.0003 22.7227L11.8899 21.7206C9.98021 19.967 8.4014 18.4543 7.15347 17.1825C5.90554 15.9107 4.91144 14.7737 4.17116 13.7716C3.43088 12.7696 2.91178 11.8623 2.61387 11.0498C2.31595 10.2373 2.16699 9.41574 2.16699 8.58519C2.16699 6.95739 2.71317 5.59801 3.80553 4.50706C4.8979 3.41609 6.24755 2.87061 7.85449 2.87061C8.88366 2.87061 9.83609 3.11436 10.7118 3.60186C11.5875 4.08936 12.3503 4.79352 13.0003 5.71436C13.7587 4.73936 14.5621 4.02165 15.4107 3.56123C16.2594 3.10081 17.1712 2.87061 18.1462 2.87061C19.7531 2.87061 21.1028 3.41609 22.1951 4.50706C23.2875 5.59801 23.8337 6.95739 23.8337 8.58519C23.8337 9.41574 23.6847 10.2373 23.3868 11.0498C23.0889 11.8623 22.5698 12.7696 21.8295 13.7716C21.0892 14.7737 20.0951 15.9107 18.8472 17.1825C17.5993 18.4543 16.0204 19.967 14.1107 21.7206L13.0003 22.7227ZM13.0003 20.5831C14.8282 18.904 16.3324 17.4641 17.5129 16.2634C18.6934 15.0626 19.6312 14.0109 20.3264 13.1081C21.0215 12.2053 21.509 11.4006 21.7889 10.694C22.0687 9.98741 22.2087 9.28577 22.2087 8.58912C22.2087 7.39483 21.8295 6.41401 21.0712 5.64665C20.3128 4.87929 19.3399 4.49561 18.1523 4.49561C17.222 4.49561 16.3609 4.77998 15.5692 5.34873C14.7774 5.91748 14.1378 6.71644 13.6503 7.74561H12.3232C11.8538 6.73449 11.2232 5.94005 10.4315 5.36227C9.63972 4.78449 8.77869 4.49561 7.8484 4.49561C6.66079 4.49561 5.68783 4.87929 4.92949 5.64665C4.17116 6.41401 3.79199 7.39637 3.79199 8.59375C3.79199 9.29221 3.93192 9.99804 4.21178 10.7112C4.49165 11.4244 4.97915 12.2369 5.67428 13.1487C6.36942 14.0605 7.31283 15.1123 8.50449 16.3039C9.69616 17.4956 11.1948 18.922 13.0003 20.5831Z" fill="#838383" />
													</svg>
												</div>
												<span>99</span>
											</div>
											<div className="reactions-popup">
												<div className="reactions-popup__body">
													<div className="reactions-popup__item">🚀</div>
													<div className="reactions-popup__item">🤣</div>
													<div className="reactions-popup__item">💪</div>
													<div className="reactions-popup__item">😘</div>
													<div className="reactions-popup__item">🤘</div>

												</div>
											</div>
										</button>
										<a href="some" className="footer-post__comments comments-footer-post">
											<div className="comments-footer-post__body">
												<div className="comments-footer-post__icon">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" style={{fill:'#838383', fillOpacity:'1'}} />
													</svg>
												</div>
												<span>99</span>
											</div>

										</a>
										<div className="footer-post__reactions reactions">
											<div className="reactions__item">🚀 <span>3</span></div>
											<div className="reactions__item">🤣 <span>3</span></div>
											<div className="reactions__item">💪 <span>3</span></div>
											<div className="reactions__item">😘 <span>3</span></div>
											<div className="reactions__item">🤘 <span>3</span></div>



										</div>

									</div>
									<a href="some" className="footer-post__share">
										<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" style={{fill:'#838383', fillOpacity:'1'}} />
										</svg>
									</a>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<AsideMessages/>
		</main>
    </div>
  )
}
