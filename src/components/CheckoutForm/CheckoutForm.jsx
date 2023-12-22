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
                <input type="text" placeholder='NOMBRE' {...register("firstName")}/>
                <input type="text" placeholder='APELLIDO' {...register("lastName")}/>
                <input type="email" placeholder='EMAIL' {...register("email")}/>
                <input type="phone" placeholder='TELEFONO' {...register("phone")}/>
                <div className='container-btn-form'>
                    <button type='submit' className='btn-buy'>CREAR ORDEN</button>
                </div>
            </form>
        </div>
    )
}
