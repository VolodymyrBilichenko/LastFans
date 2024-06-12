import React from 'react'

export const ModalCreateGroup = () => {
    return (
        <div className="popup-add-group__body popup__body">
            <h4 className="popup-add-group__title">CREATE NEW GROUP</h4>
            <div className="popup-add-group__block">
                <div className="input-box">
                    <label>Group name</label>
                    <input type="text" placeholder="Enter group name" className="input-box__input input input-main"/>
                </div>

            </div>
            <button className="popup-add-group__post button button--fw">
                <span>Create</span>
            </button>
        </div>
    )
}
