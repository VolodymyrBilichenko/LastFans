import { AsideMenu } from "../../components/AsideMenu/AsideMenu"
import { AsideMessages } from "../../components/AsideMessages/AsideMessages"


export const PaymentAdd = () => {
    return (
        <main className="page page-payment">
            <AsideMenu/>
            <div className="payment">
                <div className="payment__container">
                    <div className="payment__header">
                        <h2 className="payment__title title title--medium">Add new payment method</h2>
                    </div>
                    <div className="payment__body body-payment">
                        <div className="body-payment__new new-body-payment">
                            <p className="new-body-payment__text">Please fill in your card details below to add the card.</p>
                            <div className="new-body-payment__billing billing-new-body-payment">
                                <div className="new-body-payment__header">
                                    <h3 className="new-body-payment__title">BILLING DETAILS</h3>
                                </div>
                                <div className="billing-new-body-payment__body">

                                    <div className="input-box">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter email" className="input-box__input input input-main"/>
                                    </div>
                                    <div className="billing-new-body-payment__block">
                                        <div className="input-box">
                                            <label>First Name</label>
                                            <input type="text" placeholder="First Name" className="input-box__input input input-main"/>
                                        </div>
                                        <div className="input-box">
                                            <label>Last name</label>
                                            <input type="text" placeholder="Last name" className="input-box__input input input-main"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="new-body-payment__card card-add-body-payment">
                                <div className="new-body-payment__header">
                                    <h3 className="new-body-payment__title">CARD DETAILS</h3>
                                </div>
                                <div className="card-add-body-payment__body">

                                    <div className="input-box">
                                        <label>Card Number</label>
                                        <input type="number" placeholder="1234  1234  1234  1234" className="input-box__input input input-main"/>
                                    </div>
                                    <div className="card-add-body-payment__block">
                                        <div className="input-box">
                                            <label>Expiry</label>
                                            <input type="text" placeholder="MM / YYYY" className="input-box__input input input-main"/>
                                        </div>
                                        <div className="input-box">
                                            <label>CVV</label>
                                            <input type="text" placeholder="123" className="input-box__input input input-main"/>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <button className="new-body-payment__button button"><span>Add card</span></button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <AsideMessages/>
        </main>
    )
}
