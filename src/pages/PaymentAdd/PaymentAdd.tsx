
// export const PaymentAdd = () => {
//     return (
//         <div className="payment">
//             <div className="payment__container">
//                 <div className="payment__header">
//                     <h2 className="payment__title title title--medium">Add new payment method</h2>
//                 </div>
//                 <div className="payment__body body-payment">
//                     <div className="body-payment__new new-body-payment">
//                         <p className="new-body-payment__text">Please fill in your card details below to add the card.</p>
//                         <div className="new-body-payment__billing billing-new-body-payment">
//                             <div className="new-body-payment__header">
//                                 <h3 className="new-body-payment__title">BILLING DETAILS</h3>
//                             </div>
//                             <div className="billing-new-body-payment__body">

//                                 <div className="input-box">
//                                     <label>Email</label>
//                                     <input type="email" placeholder="Enter email" className="input-box__input input input-main"/>
//                                 </div>
//                                 <div className="billing-new-body-payment__block">
//                                     <div className="input-box">
//                                         <label>First Name</label>
//                                         <input type="text" placeholder="First Name" className="input-box__input input input-main"/>
//                                     </div>
//                                     <div className="input-box">
//                                         <label>Last name</label>
//                                         <input type="text" placeholder="Last name" className="input-box__input input input-main"/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="new-body-payment__card card-add-body-payment">
//                             <div className="new-body-payment__header">
//                                 <h3 className="new-body-payment__title">CARD DETAILS</h3>
//                             </div>
//                             <div className="card-add-body-payment__body">

//                                 <div className="input-box">
//                                     <label>Card Number</label>
//                                     <input type="number" placeholder="1234  1234  1234  1234" className="input-box__input input input-main"/>
//                                 </div>
//                                 <div className="card-add-body-payment__block">
//                                     <div className="input-box">
//                                         <label>Expiry</label>
//                                         <input type="text" placeholder="MM / YYYY" className="input-box__input input input-main"/>
//                                     </div>
//                                     <div className="input-box">
//                                         <label>CVV</label>
//                                         <input type="text" placeholder="123" className="input-box__input input input-main"/>
//                                     </div>


//                                 </div>
//                             </div>
//                         </div>
//                         <button className="new-body-payment__button button"><span>Add card</span></button>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }




import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addPayment } from '../../redux/toolkitSlice';

// Створення інтерфейсу для даних форми
interface IFormInput {
    email: string;
    firstName: string;
    lastName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
}

// Схема валідації за допомогою Yup
const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    cardNumber: yup
        .string()
        .matches(/^[0-9]{16}$/, 'Card number must be 16 digits')
        .required('Card number is required'),
    expiry: yup
        .string()
        .matches(/^(0[1-9]|1[0-2])\/[0-9]{4}$/, 'Expiry must be in MM/YYYY format')
        .required('Expiry is required'),
    cvv: yup
        .string()
        .matches(/^[0-9]{3}$/, 'CVV must be 3 digits')
        .required('CVV is required')
});

export const PaymentAdd: React.FC = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });

    // Типізація обробника відправки форми
    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
        dispatch(addPayment(data));
        toast.success('New payment method added successfully');
        reset(); // Очищення форми після успішного відправлення
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__header">
                    <h2 className="payment__title title title--medium">Add new payment method</h2>
                </div>
                <div className="payment__body body-payment">
                    <div className="body-payment__new new-body-payment">
                        <p className="new-body-payment__text">Please fill in your card details below to add the card.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="new-body-payment__billing billing-new-body-payment">
                                <div className="new-body-payment__header">
                                    <h3 className="new-body-payment__title">BILLING DETAILS</h3>
                                </div>
                                <div className="billing-new-body-payment__body">
                                    <div className="input-box">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter email"
                                            className="input-box__input input input-main"
                                            {...register('email')}
                                        />
                                        {errors.email && <p className="error-message" style={{ color: '#CB0000' }}>{errors.email.message}</p>}
                                    </div>
                                    <div className="billing-new-body-payment__block">
                                        <div className="input-box">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="input-box__input input input-main"
                                                {...register('firstName')}
                                            />
                                            {errors.firstName && <p className="error-message" style={{ color: '#CB0000' }}>{errors.firstName.message}</p>}
                                        </div>
                                        <div className="input-box">
                                            <label>Last name</label>
                                            <input
                                                type="text"
                                                placeholder="Last name"
                                                className="input-box__input input input-main"
                                                {...register('lastName')}
                                            />
                                            {errors.lastName && <p className="error-message" style={{ color: '#CB0000' }}>{errors.lastName.message}</p>}
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
                                        <input
                                            type="text"
                                            placeholder="1234  1234  1234  1234"
                                            className="input-box__input input input-main"
                                            {...register('cardNumber')}
                                        />
                                        {errors.cardNumber && <p className="error-message" style={{ color: '#CB0000' }}>{errors.cardNumber.message}</p>}
                                    </div>
                                    <div className="card-add-body-payment__block">
                                        <div className="input-box">
                                            <label>Expiry</label>
                                            <input
                                                type="text"
                                                placeholder="MM / YYYY"
                                                className="input-box__input input input-main"
                                                {...register('expiry')}
                                            />
                                            {errors.expiry && <p className="error-message" style={{ color: '#CB0000' }}>{errors.expiry.message}</p>}
                                        </div>
                                        <div className="input-box">
                                            <label>CVV</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                className="input-box__input input input-main"
                                                {...register('cvv')}
                                            />
                                            {errors.cvv && <p className="error-message" style={{ color: '#CB0000' }}>{errors.cvv.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="new-body-payment__button button"><span>Add card</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
