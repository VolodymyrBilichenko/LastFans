import React from 'react'

export const ModalTimeLinePost = () => {
    return (
        <div className="popup-timeline-post__body popup__body">
            <h4 className="popup-timeline-post__title">Create timeline post</h4>
            <div className="popup-timeline-post__top top-popup-timeline-post">
                <div className="top-post__user user-item">
                    <div className="user-item__image">
                        <picture><source srcSet="img/user/01.webp" type="image/webp"/><img className="user-photo" src="img/user/01.png" alt="User image"/></picture>
                    </div>
                    <div data-spollers className="user-item__body">
                        <a href="#" className="user-item__name">Boob007</a>
                        <details className="field-block-add-vid__item spollers__item input input-main">
                            <summary data-spoller-close className="field-block-add-vid__title spollers__title">Subscribers</summary>
                            <div className="field-block-add-vid__body spollers__body">
                                <div className="field-block-add-vid__value">Subscribers</div>
                                <div className="field-block-add-vid__value">Fans</div>
                                <div className="field-block-add-vid__value">All</div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div className="popup-timeline-post__body body-popup-timeline-post">
                <div className="body-popup-timeline-post__title input-box">
                    <label>Title</label>
                    <textarea placeholder="Add title of your post" className="input-box__input input input-main"></textarea>
                </div>
                <div className="body-popup-timeline-post__description input-box">
                    <label>Description</label>
                    <textarea placeholder="Video description" className="input-box__input input input-main"></textarea>
                </div>
                <div data-spollers className="body-popup-timeline-post__folder input-box">
                    <label>Add post to folder</label>
                    <details className="field-block-add-vid__item spollers__item input input-main">
                        <summary data-spoller-close className="field-block-add-vid__title spollers__title">Choose folder</summary>
                        <div className="field-block-add-vid__body spollers__body">
                            <div className="field-block-add-vid__value">1</div>
                            <div className="field-block-add-vid__value">2</div>
                            <div className="field-block-add-vid__value">3</div>
                        </div>
                    </details>
                </div>
            </div>
            <div className="popup-timeline-post__actions actions-popup-timeline-post">
                <p className="actions-popup-timeline-post__text">Add to your post</p>
                <div className="actions-popup-timeline-post__content">
                    <div className="new-post-main__actions">
                        <button className="new-post-main__item">
                            <img src="img/icons/image.svg" alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src="img/icons/video.svg" alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src="img/icons/monney.svg" alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src="img/icons/audio.svg" alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src="img/icons/file.svg" alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src="img/icons/money-02.svg" alt="Icon"/>
                        </button>
                    </div>
                </div>
            </div>
            <button className="popup-timeline-post__post button button--fw"><span>Post</span></button>
        </div>
    )
}
