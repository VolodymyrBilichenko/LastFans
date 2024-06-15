
export const AutoMessage = () => {
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__header">
                        <h2 className="body-profile__title title title--medium">Automated messages</h2>
                    </div>
                    <div className="automated">
                        <div className="automated__body">
                            <div className="automated__block">
                                <label className="automated__label">Fan type</label>
                                <div data-spollers className="automated__body">
                                    <details className="automated__spoller spoller-automated spollers__item-main spollers__item input-main">
                                        <summary data-spoller-close className="spoller-automated__title spollers__title">Non Follower</summary>
                                        <div className="spoller-automated__body spollers__body">
                                            <p>option 1</p>
                                            <p>option 2</p>
                                            <p>option 3</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div className="automated__block">
                                <label className="automated__label">Action</label>
                                <div data-spollers className="automated__body">
                                    <details className="automated__spoller spoller-automated spollers__item-main spollers__item input-main">
                                        <summary data-spoller-close className="spoller-automated__title spollers__title">Follows</summary>
                                        <div className="spoller-automated__body spollers__body">
                                            <p>option 1</p>
                                            <p>option 2</p>
                                            <p>option 3</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div className="automated__block">
                                <label className="automated__label">Your message</label>
                                <div className="automated__textarea-body">
                                    <textarea id="editor" className="automated__textarea textarea"></textarea>
                                </div>
                            </div>
                            <div className="automated__bottom">
                                <div className="automated__delay delay-automated">
                                    <div className="automated__block">
                                        <label className="automated__label">Add delay</label>
                                        <div className="delay-automated__body">
                                            <p className="delay-automated__text">Send after</p>
                                            <input min="0" type="number" className="delay-automated__input input input-main"/>
                                            <p className="delay-automated__text">sec</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="automated__button button"><span>Save changes</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
