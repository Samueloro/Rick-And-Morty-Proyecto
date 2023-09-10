import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import Validation from './Validation'
import style from './Start.module.css'

export default function Form({ login }) {
//CAMBIO DE BACKGROUND
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--background', 'url("../Fondos/Inicio.jpg")')
    }, []);

//ESTADOS LOCALES
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        email: 'Por favor, ingrese sus datos',
        password: '',
    })

//SETEO ESTADOS LOCALES
    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(Validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        login(userData)
    }

//RENDER
    return (
        <div className={style.conteiner}>

            <form onSubmit={handleSubmit} className={style.form}>
                <label className={style.labels}> Email</label>
                <br />
                <input
                    className={style.inputs}
                    name='email'
                    value={userData.email}
                    type="text"
                    placeholder='Ingrese su Email'
                    onChange={handleChange} />
                <p className={style.errors}>{errors.email ? errors.email : null}</p>
                <br />
                <label className={style.labels}> Password</label>
                <br />
                <input
                    className={style.inputs}
                    name='password'
                    value={userData.password}
                    type="password"
                    placeholder='Ingrese su Password'
                    onChange={handleChange} />
                <p className={style.errors}>{errors.password ? errors.password : null}</p>
                <br />


                <button className={style.submit} disabled={errors.email || errors.password} type='submit'>Start</button>
            </form>
        </div>

    )
}