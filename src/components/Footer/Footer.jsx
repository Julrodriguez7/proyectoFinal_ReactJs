import './Footer.css'
import mercadopago from "./assets/mercadopago.png"
import efectivo from "./assets/efectivo.png"
import mastercard from "./assets/mastercard.png"
import visa from "./assets/visa.png"
import maestro from "./assets/maestro.png"
import cordobesa from "./assets/cordobesa.png"
import naranja from "./assets/naranja.png"
import nativa from "./assets/nativa.png"
import cabal from "./assets/cabal.png"
import instagram from "./assets/instagram.png"
import facebook from "./assets/facebook.png"

export const Footer = () => {
    return (
        <div className='container-footer'>

            <div className='container-sections-footer'>
                <div>
                    <div>
                        <div className='img-mercpago'>
                            <img src={mercadopago} alt="mercadopago" />
                        </div>
                    </div>
                    <div className='container-img-pay'>
                        <img src={efectivo} alt="efectivo" />
                        <img src={mastercard} alt="" />
                        <img src={visa} alt="" />
                        <img src={maestro} alt="" />
                        <img src={cordobesa} alt="cordobesa" />
                        <img src={naranja} alt="" />
                        <img src={nativa} alt="" />
                        <img src={cabal} alt="" />
                    </div>
                </div>

                <div className='container-ub'>
                    <div>
                        <h3>UBICACIÓN</h3>
                        <p>CALLE FALSA 123</p>
                    </div>
                    <div>
                        <h3>CONTACTO</h3>
                        <p>XXXXX-XXXXXXXX</p>
                    </div>
                </div>

                <div className='container-img-red'>
                    <h3>REDES</h3>
                    <div>
                        <img src={instagram} alt="" className='img-red'/>
                        <img src={facebook} alt="" className='img-red'/>
                    </div>
                </div>

            </div>

            <div className='copy'>
                <p>© 2023 by ARROW</p>
            </div>
        </div>
    )
}
