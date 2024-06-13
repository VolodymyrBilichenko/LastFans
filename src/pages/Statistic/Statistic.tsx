import CalendarIc from '../../assets/img/icons/calendar.svg'
import { StatisticItem } from './components/StatisticItem'


export const Statistic = () => {
    return (
        <div className="statistics">
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
                            <div className="months-statistics__item months-statistics-range">
                            {/* readonly="readonly" */}
                                <input type="text" id="dateRange" placeholder="Select a custom range" className="months-statistics-range__input"/>
                                <div className="months-statistics-range__icon">
                                    <img src={CalendarIc} alt="Icon"/>
                                </div>
                                <div className="months-statistics-range__popup popup-months-statistics-range">
                                    <div className="popup-months-statistics-range__body">
                                        <div className="popup-months-statistics-range__items">
                                            <div className="popup-months-statistics-range__item">Today</div>
                                            <div className="popup-months-statistics-range__item">Yesterday</div>
                                            <div className="popup-months-statistics-range__item">Last 7 days</div>
                                            <div className="popup-months-statistics-range__item">Last 30 days</div>
                                            <div className="popup-months-statistics-range__item">This month</div>
                                            <div className="popup-months-statistics-range__item">Last month</div>
                                            <div className="popup-months-statistics-range__item">Custom range</div>
                                        </div>
                                        <div className="popup-months-statistics-range__block">
                                            <div id="min" className="popup-months-statistics-range__calendar"></div>
                                            <div id="max" className="popup-months-statistics-range__calendar"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">March 2024</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">February 2024</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">January 2024</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">December 2023</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">November 2023</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">October 2023</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">September 2023</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                            <div className="months-statistics__item item-months-statistics">
                                <div className="item-months-statistics__month">August 2023</div>
                                <p className="item-months-statistics__value">$<span>2,129</span></p>
                            </div>
                        </div>
                        
                    </div>
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
                            
                            <StatisticItem/>

                            <div className="body-statistics__graphic graphic-body-statistics">
                                <div className="graphic-body-statistics__header">
                                    <div className="graphic-body-statistics__block">
                                        <div className="graphic-body-statistics__title">Profile Visits</div>
                                        <span className="graphic-body-statistics__date">March 2024</span>
                                    </div>
                                    <div className="graphic-body-statistics__stat">
                                        <div className="graphic-body-statistics__block">
                                            <p className="graphic-body-statistics__value"><span>8.36</span>K</p>
                                            <div className="graphic-body-statistics__change change-graphic-body-statistics down">
                                                <div className="change-graphic-body-statistics__arrow">
                                                    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00613 6.39722V2.00825L0.866188 3.35454C0.738002 3.50593 0.551245 3.56503 0.376127 3.50963C0.201009 3.4542 0.0642422 3.29268 0.0173103 3.08588C-0.0296216 2.87907 0.0205187 2.65844 0.148705 2.50705L2.15409 0.138589C2.20602 0.0772143 2.26855 0.0299384 2.33749 2.20298e-05V0H2.34607H2.35033H2.35704H2.36316H2.36808H2.37599H2.37905H2.38823H2.398H2.40837H2.41934H2.43031H2.44068H2.45046H2.54887H2.55865H2.56902H2.57999H2.59095H2.60133H2.6111H2.62028H2.62393H2.63184H2.63677H2.64288H2.6496H2.65385L2.66243 0.00361288C2.73138 0.0335073 2.79398 0.0808052 2.84583 0.142202L4.8513 2.51067C4.97956 2.66205 5.02962 2.88268 4.98269 3.0895C4.93576 3.29629 4.79899 3.45781 4.62387 3.51324C4.44876 3.56864 4.26192 3.50954 4.13374 3.35815L2.99379 2.01187V6.40083C2.99379 6.6149 2.89717 6.8127 2.74018 6.91972C2.58319 7.02677 2.3898 7.02677 2.23281 6.91972C2.07582 6.8127 1.9792 6.6149 1.9792 6.40083L2.00613 6.39722Z" fill="#1AD598" />
                                                    </svg>   
                                                </div>
                                                <p className="change-graphic-body-statistics__value"><span>-4,12</span> %</p>
                                            </div>
                                        </div>
                                        <p className="graphic-body-statistics__text">This month</p>
                                    </div>
                                </div>
                                <div className="graphic-body-statistics__body">
                                    <canvas id="visits"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="body-statistics__transactions transactions-body-statistics">
                            <div className="transactions-body-statistics__body">
                                <div className="transactions-body-statistics__header">
                                    <div className="transactions-body-statistics__title title title--small">Last transactions</div>
                                    <span className="transactions-body-statistics__date">March 2024</span>
                                </div>
                                <div className="transactions-body-statistics__content">
                                    <div className="transactions-body-statistics__items">
                                        <div className="transactions-body-statistics__item item-transactions">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <span className="item-transactions__user">Eric101</span> <a href="some" className="item-transactions__user-link">Eric101</a>
                                                </p>
                                            </p>
                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>
                                        <div className="transactions-body-statistics__item item-transactions">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <span className="item-transactions__user">Eric101</span> <a href="some" className="item-transactions__user-link">Eric101</a>
                                                </p>
                                            </p>
                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>
                                        <div className="transactions-body-statistics__item item-transactions">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <span className="item-transactions__user">Eric101</span> <a href="some" className="item-transactions__user-link">Eric101</a>
                                                </p>
                                            </p>
                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>
                                        <div className="transactions-body-statistics__item item-transactions">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <span className="item-transactions__user">Eric101</span> <a href="some" className="item-transactions__user-link">Eric101</a>
                                                </p>
                                            </p>
                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>
                                        <div className="transactions-body-statistics__item item-transactions">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <span className="item-transactions__user">Eric101</span> <a href="some" className="item-transactions__user-link">Eric101</a>
                                                </p>
                                            </p>
                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>
                                        <div className="transactions-body-statistics__item item-transactions">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <span className="item-transactions__user">Eric101</span> <a href="some" className="item-transactions__user-link">Eric101</a>
                                                </p>
                                            </p>
                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="transactions-body-statistics__bottom">
                                    <div className="footer-body-earnings__block">
                                        <div className="footer-body-earnings__pages">
                                            <p><span>1</span>-<span>10</span> of 131</p>
                                        </div>
                                        <div className="footer-body-earnings__arrows">
                                            <button className="footer-body-earnings__arrow footer-body-earnings__prev">
                                                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.58211 8.50318L4.86132 8.22013C4.94852 8.13104 4.99656 8.01252 4.99656 7.88585C4.99656 7.75925 4.94852 7.64059 4.86132 7.55151L1.69807 4.32258L4.86483 1.08994C4.95203 1.00099 5 0.882334 5 0.755734C5 0.629134 4.95203 0.510403 4.86483 0.42139L4.58734 0.138262C4.40688 -0.0460874 4.11294 -0.0460874 3.93248 0.138262L0.14852 3.98712C0.0613902 4.07606 -1.90962e-07 4.19458 -1.96776e-07 4.3223L-1.96844e-07 4.32378C-2.0261e-07 4.45045 0.0614589 4.56897 0.14852 4.65791L3.92223 8.50318C4.00936 8.59227 4.12897 8.64116 4.25299 8.6413C4.37708 8.6413 4.49504 8.59227 4.58211 8.50318Z" fill="#3F79CF" ></path>
                                                </svg>
                                            </button>
                                            <button className="footer-body-earnings__arrow footer-body-earnings__next">
                                                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.58211 8.50318L4.86132 8.22013C4.94852 8.13104 4.99656 8.01252 4.99656 7.88585C4.99656 7.75925 4.94852 7.64059 4.86132 7.55151L1.69807 4.32258L4.86483 1.08994C4.95203 1.00099 5 0.882334 5 0.755734C5 0.629134 4.95203 0.510403 4.86483 0.42139L4.58734 0.138262C4.40688 -0.0460874 4.11294 -0.0460874 3.93248 0.138262L0.14852 3.98712C0.0613902 4.07606 -1.90962e-07 4.19458 -1.96776e-07 4.3223L-1.96844e-07 4.32378C-2.0261e-07 4.45045 0.0614589 4.56897 0.14852 4.65791L3.92223 8.50318C4.00936 8.59227 4.12897 8.64116 4.25299 8.6413C4.37708 8.6413 4.49504 8.59227 4.58211 8.50318Z" fill="#3F79CF" ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div data-spollers className="footer-body-earnings__per-page _spoller-init">
                                        <p>Items per page:</p>
                                        <details className="field-block-add-vid__item spollers__item input input-main">
                                            <summary data-spoller-close className="field-block-add-vid__title spollers__title">10</summary>
                                            <div className="field-block-add-vid__body spollers__body">
                                                <div className="field-block-add-vid__value">10</div>
                                                <div className="field-block-add-vid__value">16</div>
                                                <div className="field-block-add-vid__value">32</div>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
