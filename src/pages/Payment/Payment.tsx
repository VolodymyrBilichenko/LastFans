import { AsideMenu } from '../../components/AsideMenu/AsideMenu'
import { AsideMessages } from '../../components/AsideMessages/AsideMessages'

import Wallet from '../../assets/img/icons/payment/wallet.svg'
import WalletActive from '../../assets/img/icons/payment/active.svg'
import WalletChip from '../../assets/img/icons/payment/chip.svg'
import { NavLink } from 'react-router-dom'

export const Payment = () => {
    return (
        <main className="page page-payment">
            <AsideMenu/>

            <div className="payment">
                <div className="payment__container">
                    <div className="payment__header">
                        <h2 className="payment__title title title--medium">Payment Method</h2>
                    </div>
                    <div className="payment__body body-payment">
                        <div className="body-payment__items">
                            <div className="body-payment__item item-body-payment active">
                                <div className="item-body-payment__logo logo-item-body-payment">
                                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.1498 3.35352H24.3994V21.7703H14.1498V3.35352Z" fill="#B27BFF"  />
                                        <path d="M14.8009 12.5625C14.8009 8.82063 16.5579 5.50163 19.2586 3.35404C17.2739 1.79222 14.7685 0.848633 12.0352 0.848633C5.55983 0.848633 0.321205 6.08726 0.321205 12.5625C0.321205 19.0376 5.55983 24.2764 12.0351 24.2764C14.7683 24.2764 17.2737 23.3328 19.2586 21.7708C16.5579 19.6558 14.8009 16.3044 14.8009 12.5625V12.5625Z" fill="#9E59FF"  />
                                        <path d="M38.23 12.5625C38.23 19.0376 32.9914 24.2764 26.5161 24.2764C23.7829 24.2764 21.2775 23.3328 19.2926 21.7708C22.0259 19.6234 23.7504 16.3044 23.7504 12.5625C23.7504 8.82063 21.9932 5.50163 19.2926 3.35404C21.2773 1.79222 23.7829 0.848633 26.5161 0.848633C32.9914 0.848633 38.2301 6.11987 38.2301 12.5625H38.23Z" fill="#9E59FF"  />
                                    </svg>
                                        
                                </div>
                                <div className="item-body-payment__content">
                                    <p className="item-body-payment__text">Credit Card</p>
                                    <div className="item-body-payment__num"><span>2468</span></div>
                                    <div className="item-body-payment__footer">
                                        <div className="item-body-payment__icon">
                                            <img src={WalletChip} alt="Icon"/>
                                        </div>
                                        <div className="item-body-payment__expire">12/24</div>
                                    </div>
                                </div>

                                <div className="item-body-payment__active active-item-body-payment">
                                    <div className="active-item-body-payment__image">
                                        <img src={WalletActive} alt="Icon"/>
                                    </div>
                                </div>
                            </div>
                            <div className="body-payment__item item-body-payment item-body-payment--red">
                                <div className="item-body-payment__logo">
                                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.1498 3.35352H24.3994V21.7703H14.1498V3.35352Z" fill="#B27BFF"  />
                                        <path d="M14.8009 12.5625C14.8009 8.82063 16.5579 5.50163 19.2586 3.35404C17.2739 1.79222 14.7685 0.848633 12.0352 0.848633C5.55983 0.848633 0.321205 6.08726 0.321205 12.5625C0.321205 19.0376 5.55983 24.2764 12.0351 24.2764C14.7683 24.2764 17.2737 23.3328 19.2586 21.7708C16.5579 19.6558 14.8009 16.3044 14.8009 12.5625V12.5625Z" fill="#9E59FF"  />
                                        <path d="M38.23 12.5625C38.23 19.0376 32.9914 24.2764 26.5161 24.2764C23.7829 24.2764 21.2775 23.3328 19.2926 21.7708C22.0259 19.6234 23.7504 16.3044 23.7504 12.5625C23.7504 8.82063 21.9932 5.50163 19.2926 3.35404C21.2773 1.79222 23.7829 0.848633 26.5161 0.848633C32.9914 0.848633 38.2301 6.11987 38.2301 12.5625H38.23Z" fill="#9E59FF"  />
                                    </svg>
                                        
                                </div>
                                <div className="item-body-payment__content">
                                    <p className="item-body-payment__text">Credit Card</p>
                                    <div className="item-body-payment__num"><span>2468</span></div>
                                    <div className="item-body-payment__footer">
                                        <div className="item-body-payment__icon">
                                            <img src={WalletChip} alt="Icon"/>
                                        </div>
                                        <div className="item-body-payment__expire">12/24</div>
                                    </div>
                                </div>

                                <div className="item-body-payment__active active-item-body-payment">
                                    <div className="active-item-body-payment__image">
                                        <img src={WalletActive} alt="Icon"/>
                                    </div>
                                </div>
                            </div>
                            <NavLink to={'/payment-add'} className="body-payment__add add-body-payment">
                                <div className="add-body-payment__image">
                                    <img src={Wallet} alt="Icon"/>
                                </div>
                                <div className="add-body-payment__text">Add payment card</div>
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <AsideMessages/>
        </main>
    )
}
