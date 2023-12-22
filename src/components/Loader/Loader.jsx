import './Loader.css'
import { bouncy } from 'ldrs'

export const Loader = () => {

    bouncy.register()

    return (
        <div className='container-loader'>
            <div className='loader'>
                <l-bouncy
                    size="90"
                    speed="2.5"
                    color="rgb(0, 102, 255)"
                ></l-bouncy>
            </div>
        </div>
    )
}
