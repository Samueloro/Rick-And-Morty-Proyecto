
import { useLocation } from 'react-router-dom';
import style from './Error.module.css'

export default function Error() {

    const location = useLocation();
    console.log(location);

    location.hash='Error'

    const root = document.documentElement;
    root.style.setProperty('--background', 'url("../Fondos/pageNotFound.jpg")')

    return (
        <div>
            <div >
                <h1 className={style.title}>Página no encontrada</h1>
            </div>
            <div>
                <h3 className={style.text}>Puedes disfrutar de la vista o volver al Inicio.  
                <br/>
                <br/>
                ¡wubalubadubdub!</h3>
            </div>
        </div>
    )
}