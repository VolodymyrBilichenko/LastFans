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
import { NavLink } from 'react-router-dom'
import { PostItem } from './components/PostItem'

export const Main = () => {
	
	return (
		<div className="main">
			<div className="main__container">
				<div className="main__new-post new-post-main main__item">
					<div className="new-post-main__body">
						<div className="new-post-main__content">
							<a href="some" className="new-post-main__image user-image user-image--40">
								<img src={UserPhoto} alt="ph" />
							</a>
							<div className="new-post-main__input input-main">
								<input type="text" name="form[]" placeholder="Create new post" className="input" />
							</div>
						</div>
						<div className="new-post-main__actions">
							<button className="new-post-main__item">
								<img src={Icon} alt="Icon" />
							</button>
							<button className="new-post-main__item">
								<img src={VideoIc} alt="Icon" />
							</button>
							<button className="new-post-main__item">
								<img src={MoneyIc} alt="Icon" />
							</button>
							<button className="new-post-main__item">
								<img src={AudioIc} alt="Icon" />
							</button>
							<button className="new-post-main__item">
								<img src={FileIc} alt="Icon" />
							</button>
							<button className="new-post-main__item">
								<img src={MoneyIc2} alt="Icon" />
							</button>
						</div>
					</div>
				</div>
				<div className="main__stories stories-main">
					<div className="stories-main__content">
						<div className="stories-main__item add-story">
							<div className="add-story__image">
								<img src={StoryPh} alt="ph" />
							</div>
							<div className="add-story__text">
								<img src={PlusIc} alt="Icon" />
								<p>Add story</p>
							</div>
						</div>
						<NavLink to={'/live'} className="stories-main__item live-stories-main">
							<div className="live-stories-main__text">
								<img src={LiveIc} alt="Icon" />
								<p>Go Live</p>
							</div>
						</NavLink>

					</div>
				</div>

				<Highlights />

				<div className="main__content content-main">

					<PostItem
						user={{
							username: "Kolya",
							usertag: "@kolik",
							photo: UserPhoto
						}}
						date={new Date('Sun Jun 09 2024 11:55:54 GMT+0300 (Восточная Европа, летнее время)')}
						isPinned={false}
						message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque accusantium et, autem perferendis deleniti ducimus temporibus eum ratione cupiditate a molestias odio aliquam enim quidem repellat optio fuga id?'}
						images={['https://www.popsci.com/wp-content/uploads/2019/01/07/UQL4MLA6MXE6ECSZHOSXA3LA4E.jpg', ]}
					/>
					<PostItem
						user={{
							username: "Kolya",
							usertag: "@kolik",
							photo: UserPhoto
						}}
						date={new Date('Sun Jun 09 2024 11:55:54 GMT+0300 (Восточная Европа, летнее время)')}
						isPinned={false}
						message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque accusantium et, autem perferendis deleniti ducimus temporibus eum ratione cupiditate a molestias odio aliquam enim quidem repellat optio fuga id?'}
						images={['https://img.freepik.com/premium-photo/autumn-mountains-autumn-mountains-beautiful-autumn-landscape-mountains_912214-54541.jpg', 'https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/w_2560%2Cc_limit/Gear-Photos-597589287.jpg']}
					/>
					<PostItem
						user={{
							username: "Kolya",
							usertag: "@kolik",
							photo: UserPhoto
						}}
						date={new Date('Sun Jun 09 2024 11:55:54 GMT+0300 (Восточная Европа, летнее время)')}
						isPinned={false}
						message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque accusantium et, autem perferendis deleniti ducimus temporibus eum ratione cupiditate a molestias odio aliquam enim quidem repellat optio fuga id?'}
						images={['https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg', 'https://static.toiimg.com/thumb/msid-101699570,width-748,height-499,resizemode=4,imgsize-230446/.jpg', 'https://i.insider.com/5fbe98c550e71a0011557672?width=700']}
					/>

				</div>
			</div>
		</div>
	)
}
