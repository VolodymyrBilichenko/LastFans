// import PostPh from '../../assets/img/post/01.jpg' 
// import UserPh from '../../assets/img/user/01.png' 
import { useState } from 'react'
import { Pagination } from '../../components/Pagination/Pagination'
import { ModelItem } from './components/ModelItem'

export const Models = () => {

    const [countPerPage, setCountPerPage] = useState(8)
    const [paginatePage, setPaginatePage] = useState(1)

    return (
        <div className="models">
            <div className="models__container">
                <div className="models__body main__item">
                    <div className="models__content">

                        {
                            Array(50).fill('')
                                ?.slice(countPerPage * paginatePage - countPerPage, countPerPage * paginatePage)
                                ?.map((item, index: number) => (
                                    <ModelItem
                                        key={index}
                                        userName={'Natasha'}
                                        userTag={'@natasha123'}
                                        userId={'natasha123'}
                                    />
                                ))
                        }

                    </div>

                    <Pagination setCountPerPage={setCountPerPage} setPaginatePage={setPaginatePage} />
                </div>
            </div>
        </div>
    )
}
