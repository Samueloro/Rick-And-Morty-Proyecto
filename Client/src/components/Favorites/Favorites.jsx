
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

function Favorites({ myFavorites, onClose, allCharacters}) {
  
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();
    //CAMBIO DE BACKGROUND
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--background', 'url("../Fondos/Rick\ and\ Morty.jpg")')
    }, []);

    
    
    //FUNCIÓN ORDER
    const handleOrder = event => {
        dispatch(orderCards(event.target.value))
        aux ? setAux(false) : setAux(true)
    }
    
    //FILTRO DE GENERO 
    const handleFilter = event => {
        dispatch(filterCards(event.target.value))
    }
    
    useEffect(() => {
        dispatch(orderCards('A'))
    }, [allCharacters])




    return (
        <div>
            <div className={style.contenedorSelect}>
                <select name="order" onChange={handleOrder} className={style.select1}>
                    <option value={'A'}>Ascendente</option>
                    <option value={'D'}>Descendente</option>
                </select>
                <select name="filter" onChange={handleFilter} className={style.select2}>
                    <option value={'ALL'}>All</option>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Genderless'}>Genderless</option>
                    <option value={'unknown'}>unknown</option>
                </select>
            </div>
            <div className={style.contenedor}>
                {
                    myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
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
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites,
        allCharacters: state.allCharacters
    }
}

export default connect(mapStateToProps)(Favorites)