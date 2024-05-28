import React from 'react'
import { AsideMenu } from '../../components/AsideMenu/AsideMenu'
import { AsideMessages } from '../../components/AsideMessages/AsideMessages'

export const History = () => {
    return (
        <main className="page page-earnings">
            <AsideMenu/>

            <div className="earnings">
                <div className="earnings__container">
                    <div className="earnings__block">
                        <div className="earnings__header main-header">
                            <h2 className="earnings__title title title--medium">History</h2>
                        </div>
                        <div className="earnings__body body-earnings">
                            <div className="body-earnings__content">
                                <div className="body-earnings__top top-body-earnings">
                                    <div className="top-body-earnings__item item-body-earnings">
                                        <div className="item-body-earnings__session item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Session</p>
                                        </div>
                                        <div className="item-body-earnings__payout item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payout</p>

                                        </div>
                                        <div className="item-body-earnings__fee item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing Fee</p>
                                        </div>
                                        <div className="item-body-earnings__at item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing At</p>
                                        </div>
                                        <div className="item-body-earnings__payment-method item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Method</p>
                                        </div>
                                        <div className="item-body-earnings__payment-status item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Status</p>
                                        </div>
                                        <div className="item-body-earnings__invoice item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Self Invoice</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="body-earnings__items">
                                    <div className="body-earnings__item item-body-earnings">
                                        <div className="item-body-earnings__session item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Session</p>
                                            <div className="item-body-earnings__date">16 Aug 2023 - 31 Aug 2023</div>
                                        </div>
                                        <div className="item-body-earnings__payout item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payout</p>

                                            <p className="item-body-earnings__value">$<span>468.36</span></p>
                                        </div>
                                        <div className="item-body-earnings__fee item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing Fee</p>
                                            <p className="item-body-earnings__value">$<span>0.00</span></p>
                                        </div>
                                        <div className="item-body-earnings__at item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing At</p>
                                            <div className="item-body-earnings__date">01.09.2023</div>
                                        </div>
                                        <div className="item-body-earnings__payment-method item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Method</p>
                                            <p className="item-body-method">SEPA</p>
                                        </div>
                                        <div className="item-body-earnings__payment-status paid item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Status</p>
                                            <p className="item-body-earnings__status">Paid</p>
                                        </div>
                                        <div className="item-body-earnings__invoice item-body-earnings__cell">
                                            <a href="some" className="item-body-earnings__link button button--fw"><span>Send email</span></a>
                                        </div>
                                    </div>
                                    <div className="body-earnings__item item-body-earnings">
                                        <div className="item-body-earnings__session item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Session</p>
                                            <div className="item-body-earnings__date">16 Aug 2023 - 31 Aug 2023</div>
                                        </div>
                                        <div className="item-body-earnings__payout item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payout</p>

                                            <p className="item-body-earnings__value">$<span>468.36</span></p>
                                        </div>
                                        <div className="item-body-earnings__fee item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing Fee</p>
                                            <p className="item-body-earnings__value">$<span>0.00</span></p>
                                        </div>
                                        <div className="item-body-earnings__at item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing At</p>
                                            <div className="item-body-earnings__date">01.09.2023</div>
                                        </div>
                                        <div className="item-body-earnings__payment-method item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Method</p>
                                            <p className="item-body-method">SEPA</p>
                                        </div>
                                        <div className="item-body-earnings__payment-status paid item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Status</p>
                                            <p className="item-body-earnings__status">Paid</p>
                                        </div>
                                        <div className="item-body-earnings__invoice item-body-earnings__cell">
                                            <a href="some" className="item-body-earnings__link button button--fw"><span>Send email</span></a>
                                        </div>
                                    </div>
                                    <div className="body-earnings__item item-body-earnings">
                                        <div className="item-body-earnings__session item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Session</p>
                                            <div className="item-body-earnings__date">16 Aug 2023 - 31 Aug 2023</div>
                                        </div>
                                        <div className="item-body-earnings__payout item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payout</p>

                                            <p className="item-body-earnings__value">$<span>468.36</span></p>
                                        </div>
                                        <div className="item-body-earnings__fee item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing Fee</p>
                                            <p className="item-body-earnings__value">$<span>0.00</span></p>
                                        </div>
                                        <div className="item-body-earnings__at item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Processing At</p>
                                            <div className="item-body-earnings__date">01.09.2023</div>
                                        </div>
                                        <div className="item-body-earnings__payment-method item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Method</p>
                                            <p className="item-body-method">SEPA</p>
                                        </div>
                                        <div className="item-body-earnings__payment-status paid item-body-earnings__cell">
                                            <p className="item-body-earnings__text">Payment Status</p>
                                            <p className="item-body-earnings__status">Paid</p>
                                        </div>
                                        <div className="item-body-earnings__invoice item-body-earnings__cell">
                                            <a href="some" className="item-body-earnings__link button button--fw"><span>Send email</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body-earnings__footer footer-body-earnings">
                                <div className="footer-body-earnings__block">
                                    <div className="footer-body-earnings__pages">
                                        <p><span>1</span>-<span>10</span> of 131</p>
                                    </div>
                                    <div className="footer-body-earnings__arrows">
                                        <button className="footer-body-earnings__arrow footer-body-earnings__prev">
                                            <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.58211 8.50318L4.86132 8.22013C4.94852 8.13104 4.99656 8.01252 4.99656 7.88585C4.99656 7.75925 4.94852 7.64059 4.86132 7.55151L1.69807 4.32258L4.86483 1.08994C4.95203 1.00099 5 0.882334 5 0.755734C5 0.629134 4.95203 0.510403 4.86483 0.42139L4.58734 0.138262C4.40688 -0.0460874 4.11294 -0.0460874 3.93248 0.138262L0.14852 3.98712C0.0613902 4.07606 -1.90962e-07 4.19458 -1.96776e-07 4.3223L-1.96844e-07 4.32378C-2.0261e-07 4.45045 0.0614589 4.56897 0.14852 4.65791L3.92223 8.50318C4.00936 8.59227 4.12897 8.64116 4.25299 8.6413C4.37708 8.6413 4.49504 8.59227 4.58211 8.50318Z" fill="#3F79CF"/>
                                            </svg>    
                                        </button>
                                        <button className="footer-body-earnings__arrow footer-body-earnings__next">
                                            <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.58211 8.50318L4.86132 8.22013C4.94852 8.13104 4.99656 8.01252 4.99656 7.88585C4.99656 7.75925 4.94852 7.64059 4.86132 7.55151L1.69807 4.32258L4.86483 1.08994C4.95203 1.00099 5 0.882334 5 0.755734C5 0.629134 4.95203 0.510403 4.86483 0.42139L4.58734 0.138262C4.40688 -0.0460874 4.11294 -0.0460874 3.93248 0.138262L0.14852 3.98712C0.0613902 4.07606 -1.90962e-07 4.19458 -1.96776e-07 4.3223L-1.96844e-07 4.32378C-2.0261e-07 4.45045 0.0614589 4.56897 0.14852 4.65791L3.92223 8.50318C4.00936 8.59227 4.12897 8.64116 4.25299 8.6413C4.37708 8.6413 4.49504 8.59227 4.58211 8.50318Z" fill="#3F79CF"/>
                                            </svg>    
                                        </button>
                                    </div>
                                </div>
                                <div data-spollers className="footer-body-earnings__per-page">
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

            <AsideMessages/>
        </main>
    )
}
