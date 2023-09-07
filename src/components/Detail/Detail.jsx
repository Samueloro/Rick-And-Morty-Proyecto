import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './Detail.module.css'
import { NavLink } from "react-router-dom"

export default function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }

        })
            .catch(error => {
                console.error("Error al obtener datos:", error);
            })
    }, [id]);


    return (
        <div className={style.container}>
            {/*             {console.log(character)} */}
            <div className={style.column}>
                <h1 className={style.text}>Name:<span className={style.value}>{character.name}</span></h1>
                <h1 className={style.text}>Status:<span className={style.value}>{character.status}</span></h1>
                <h1 className={style.text}>Specie:<span className={style.value}>{character.species}</span></h1>
                <h1 className={style.text}>Gender:<span className={style.value}>{character.gender}</span></h1>
                <h1 className={style.text}>Origin:<span className={style.value}>{character.origin?.name}</span></h1>
            </div>
            <div className={style.column}>
                <img className={style.image} src={character.image} alt={character.name} />
                <div >{character.id}</div>
                <NavLink to={'/home'}>
                <button>Back</button>
                </NavLink>
            </div>

        </div>
    )
}