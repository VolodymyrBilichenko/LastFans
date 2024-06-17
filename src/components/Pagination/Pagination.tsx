import React, { SetStateAction, useEffect, useState } from 'react'

interface IPaginationProps {
    setCountPerPage: React.Dispatch<SetStateAction<number>>
    setPaginatePage: React.Dispatch<SetStateAction<number>>
}

export const Pagination: React.FC<IPaginationProps> = ({ ...props }) => {

    const [modelsLength] = useState(50)
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    const [countPerPage, setCountPerPage] = useState<number>(8)
    const [paginatePage, setPaginatePage] = useState(1)

    useEffect(() => {
        props.setCountPerPage(countPerPage)
        setPaginatePage(1)
    }, [countPerPage])

    useEffect(() => {
        props.setPaginatePage(paginatePage)
    }, [paginatePage])

    return (
        <div className="video-store__footer footer-video-store">
            <div className="footer-video-store__pages">

                {
                    Array(Math.ceil(modelsLength / countPerPage)).fill('').map((item: string, index: number) => (
                        <button onClick={_ => setPaginatePage(index + 1)} key={index + 1} className={paginatePage === index + 1 ? 'active' : ''}>
                            <span>
                                {index + 1}
                            </span>
                        </button>
                    ))
                }

            </div>
            <div data-spollers className="header-video-store__per-page per-page">
                <p className="per-page__text">Per page</p>
                <button onClick={_ => setIsOpenSelect(prev => !prev)} className={`field-block-add-vid__item spollers__item-main spollers__item input input-main ${isOpenSelect ? 'active' : ''}`}>
                    <div data-spoller-close className="field-block-add-vid__title spollers__title">
                        {countPerPage}
                    </div>
                    <div className="spollers__wrapper">

                        <div className="field-block-add-vid__body spollers__body">
                            <div onClick={_ => setCountPerPage(8)} className="field-block-add-vid__value">8</div>
                            <div onClick={_ => setCountPerPage(36)} className="field-block-add-vid__value">36</div>
                        </div>
                    </div>

                </button>
            </div>
        </div>
    )
}
