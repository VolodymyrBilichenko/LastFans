import { useEffect, useState } from 'react'
import CalendarIc from '../../assets/img/icons/calendar.svg'
import { StatisticItem } from './components/StatisticItem'
import { StatisticStyled } from './Statistic.styled'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { StatisticTable } from './components/StatisticTable'
import { useClickOutside } from '../../hooks/ClickOutside'
import { TransitionGroup, CSSTransition } from "react-transition-group";



export const Statistic = () => {

    const [isActiveCalendar, setIsActiveCalendar] = useState<boolean>(false)
    const [selectType, setSelectType] = useState<string>('')
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<string>('March 2024');

    const months = [
        'March 2024',
        'February 2024',
        'January 2024',
        'December 2023',
        'November 2023',
        'October 2023',
        'September 2023',
        'August 2023',
    ];

    const showZeroSymbol = (number: number | string) => {
        return +number < 10 ? '0' + +number : +number
    }

    const [date, setDate] = useState<string>('')

    useEffect(() => {

        const start = `${showZeroSymbol(String(startDate?.getDate()))}.${showZeroSymbol(String(startDate?.getMonth() && startDate?.getMonth() + 1))}.${String(startDate?.getFullYear()).slice(2, 4)}`
        const end = `${showZeroSymbol(String(endDate?.getDate()))}.${showZeroSymbol(String(endDate?.getMonth() && endDate?.getMonth() + 1))}.${String(endDate?.getFullYear())?.slice(2, 4)}`

        setDate(`${start} – ${end}`)

    }, [startDate, endDate])


    const getToday = () => {
        setStartDate(new Date())
        setEndDate(new Date())

        setSelectType('TODAY')
    }
    const getYesterday = () => {
        const today = new Date()
        const newDate = new Date(today)

        setStartDate(new Date(newDate.setDate(today.getDate() - 1)))
        setEndDate(new Date())

        setSelectType('YESTERDAY')
    }
    const getWeekLater = () => {
        const today = new Date()
        const newDate = new Date(today)

        setStartDate(new Date(newDate.setDate(today.getDate() - 7)))
        setEndDate(new Date())

        setSelectType('WEEK_LATER')
    }
    const getMonthLater = () => {
        const today = new Date()
        const newDate = new Date(today)

        setStartDate(new Date(newDate.setDate(today.getDate() - 30)))
        setEndDate(new Date())

        setSelectType('MONTH_LATER')
    }
    const getThisMonth = () => {
        const today = new Date()

        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1))
        setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 0))

        setSelectType('THIS_MONTH')
    }
    const getLastMonth = () => {
        const today = new Date()

        setStartDate(new Date(today.getFullYear(), today.getMonth() - 1, 1))
        setEndDate(new Date(today.getFullYear(), today.getMonth(), 0))

        setSelectType('LAST_MONTH')
    }


    const handleChangeStart = (date: any) => {
        setStartDate(date)

        setSelectType('CUSTOM')
    }
    const handleChangeEnd = (date: any) => {
        setEndDate(date)

        setSelectType('CUSTOM')
    }

    const handleMonthClick = (month: string) => {
        setSelectedMonth(month);
    };

    const handleClickCalendar = () => {
        setIsActiveCalendar(prev => !prev);
        setSelectedMonth('');
    }

    const { rootEl } = useClickOutside(setIsActiveCalendar)

    return (
        <StatisticStyled className="statistics">
            <div className="statistics__container">
                <div className="statistics__header">
                    <h2 className="statistics__title title title--medium">Summary</h2>
                </div>
                <div className="statistics__wrapper">
                    <div className="statistics__months months-statistics">
                        <div className="months-statistics__header">
                            <div className="months-statistics__current">Current Month</div>
                            <span className="months-statistics__date">March 2024</span>
                        </div>

                        <div className="months-statistics__items">
                            <div ref={rootEl} className={`months-statistics__item months-statistics-range ${isActiveCalendar ? 'active' : ''}`}>
                                <div className="months-statistics__head" onClick={handleClickCalendar}>
                                    <input readOnly value={startDate && endDate ? date : ""} type="text" id="dateRange" placeholder="Select a custom range" className="months-statistics-range__input" />
                                    <div className="months-statistics-range__icon">
                                        <img src={CalendarIc} alt="Icon" />
                                    </div>
                                </div>
                                <div className="months-statistics-range__popup popup-months-statistics-range">
                                    <div className="popup-months-statistics-range__body">
                                        <div className="popup-months-statistics-range__items">
                                            <div onClick={getToday} className={`popup-months-statistics-range__item ${selectType === "TODAY" ? "active" : ""}`}>Today</div>
                                            <div onClick={getYesterday} className={`popup-months-statistics-range__item ${selectType === "YESTERDAY" ? "active" : ""}`}>Yesterday</div>
                                            <div onClick={getWeekLater} className={`popup-months-statistics-range__item ${selectType === "WEEK_LATER" ? "active" : ""}`}>Last 7 days</div>
                                            <div onClick={getMonthLater} className={`popup-months-statistics-range__item ${selectType === "MONTH_LATER" ? "active" : ""}`}>Last 30 days</div>
                                            <div onClick={getThisMonth} className={`popup-months-statistics-range__item ${selectType === "THIS_MONTH" ? "active" : ""}`}>This month</div>
                                            <div onClick={getLastMonth} className={`popup-months-statistics-range__item ${selectType === "LAST_MONTH" ? "active" : ""}`}>Last month</div>
                                            <div style={{ cursor: "default" }} className={`popup-months-statistics-range__item ${selectType === "CUSTOM" ? "active" : ""}`}>Custom range</div>
                                        </div>
                                        <div className="popup-months-statistics-range__block">
                                            {/* <div id="min" className="popup-months-statistics-range__calendar"></div>
                                            <div id="max" className="popup-months-statistics-range__calendar"></div> */}
                                            <DatePicker selected={startDate} inline onChange={handleChangeStart} />
                                            <DatePicker selected={endDate} inline onChange={handleChangeEnd} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {months.map((month) => (
                                <div key={month} className={`months-statistics__item item-months-statistics ${selectedMonth === month ? 'active' : ''}`}
                                    onClick={() => handleMonthClick(month)}
                                >
                                    <div className="item-months-statistics__month">{month}</div>
                                    <p className="item-months-statistics__value">$<span>2,129</span></p>
                                </div>
                            ))}

                        </div>

                    </div>


                    <TransitionGroup>
                        <CSSTransition
                            key={selectedMonth}
                            timeout={300}
                            classNames={"fade"}
                        >
                            <div className="statistics__body body-statistics">
                                <div className="body-statistics__header header-body-statistics">
                                    <div className="header-body-statistics__item item-header-body-statistics">
                                        <p className="item-header-body-statistics__value">$ <span>2,129</span></p>
                                        <p className="item-header-body-statistics__text">Total Earnings for selected period</p>
                                    </div>
                                    <div className="header-body-statistics__item item-header-body-statistics">
                                        <p className="item-header-body-statistics__value"><span>8.36</span> K</p>
                                        <p className="item-header-body-statistics__text">Profile visits selected period</p>
                                    </div>
                                </div>

                                <div className="body-statistics__items">

                                    <StatisticItem />
                                    <StatisticItem />

                                </div>

                                <StatisticTable />
                            </div>

                        </CSSTransition>
                    </TransitionGroup>

                </div>

            </div>
        </StatisticStyled>
    )
}
