import React, { useState, useEffect } from "react";
import style from './Card.module.css';
import { NavLink } from 'react-router-dom'
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card(props, /* { id, name, species, gender, image, onClose } */) {
    /* console.log(props); */
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        props.allCharacters.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
    }, [props.allCharacters]);


    const handleFavorite = event => {
        if (isFav) {
            setIsFav(false);
            props.removeFav(props.id)
        } else {
            setIsFav(true);
            props.addFav(props)
        }
    }

    return (
        <div className={style.contenedor}>

            <NavLink className={style.Navname} to={`/detail/${props.id}`}>
                <h2 className={style.name}>{props.name}</h2>
            </NavLink>

            <button onClick={() => props.onClose(props.id)} className={style.button} id={props.id}>X</button>

            <img src={props.image} alt={props.name} className={style.image} />

            <div className={style.h2}>
                <h2 className={style.property}>{props.species}</h2>
                <h2 className={style.property2}>{props.gender}</h2>
            </div>
            
            <div className={style.favorites}>
                {
                    isFav ? (
                        <button onClick={handleFavorite} className={style.favorite}>❤️</button>
                    ) : (
                        <button onClick={handleFavorite} className={style.favorite}>🤍</button>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCharacters: state.allCharacters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: character => {
            dispatch(addFav(character))
        },
        removeFav: id => {
            dispatch(removeFav(id))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);