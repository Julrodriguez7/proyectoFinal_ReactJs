import { useForm } from 'react-hook-form'
import './CheckoutForm.css'

export const CheckoutForm = ({ onConfirm }) => {

    const { register, handleSubmit } = useForm()

    const buy = (dataClient) => {
        onConfirm(dataClient)
    }

    return (
        <div className="container-checkout-form">
            <form className='form' onSubmit={handleSubmit(buy)}>
                <input type="text" placeholder='NOMBRE' {...register("firstName")} required/>
                <input type="text" placeholder='APELLIDO' {...register("lastName")} required/>
                <input type="email" placeholder='EMAIL' {...register("email")} required/>
                <input type="phone" placeholder='TELEFONO' {...register("phone")} required/>
                <div className='container-btn-form'>
                    <button type='submit' className='btn-buy'>CREAR ORDEN</button>
                </div>
            </form>
        </div>
    )
}
