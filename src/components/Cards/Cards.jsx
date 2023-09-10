
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import style from "./Cards.module.css"
import { useEffect } from "react"

export default function Cards({ characters, onClose, setAccess }) {
    const navigate = useNavigate();
//FUNCIÓN DE SALIDA
    const logout = () => {
        setAccess(false)
        navigate('/')

    }

    //CAMBIO DE BACKGROUND
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--background', 'url("../Fondos/Rick\ and\ Morty.jpg")')
    }, []);


    return (
        <div className={style.contenedor}>
            {
                characters.map(({ id, name, status, species, gender, origin, image }) => {
                    console.log()
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    )
                })
            }
            <button onClick={logout} className={style.logout}>Salir</button>
        </div>
    )
}