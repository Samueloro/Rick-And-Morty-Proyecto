import { useEffect } from "react";
import style from './About.module.css'

export default function About() {

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--background', 'url("../Fondos/Rick\ and\ Morty.jpg")')
    }, []);

    return (
        <>
        <div className={style.container}>
            <div className={style.image}>
                <img src="../Fondos/about.png" alt="Ricks ship" className={style.img} />
            </div>
            <div className={style.text}>
                <span className={style.parrafo}><h4 className={style.title}>¡Hola! Soy Samuel Rodríguez, el cerebro detrás de esta página dedicada a Rick and Morty.</h4> Con 22 años de edad, he logrado combinar mi pasión por la programación con mi amor por esta increíble serie animada.
                    <br />
                    Mi experiencia abarca lenguajes como JavaScript, CSS, React y Redux, lo que me permite dar vida a ideas creativas y funcionales. Estoy en constante aprendizaje, buscando siempre nuevas formas de mejorar y optimizar mis habilidades.
                    <br />
                    <br />
                    Pero eso no es todo. Además de mi faceta como programador, también soy un apasionado músico. Me sumerjo en el mundo del reggaetón, fusionando ritmos y creando melodías que mueven emociones. Esta dualidad entre el código y la música es una de las cosas que más disfruto en la vida.
                    <br/>
                    <br />
                    Estudié administración de empresas, lo que me ha brindado una perspectiva única sobre cómo combinar la creatividad con la gestión eficiente. Soy una persona disciplinada, siempre en busca de superar mis propios límites y alcanzar mis metas.
                    <br/>
                    <br/>
                    En mi vida personal, comparto mi espacio con una compañera muy especial: Lili, mi gata. Ella trae una dosis extra de alegría y compañerismo a mis días.
                    <br/>
                    <br />
                    ¡Bienvenido a mi rincón de Rick and Morty!. Espero que disfrutes explorando tanto como yo disfruto creando este espacio.
                    <br/>
                    ¡Gracias por ser parte de esta aventura!

                    <h4 className={style.pie}>Samuel Mateo Rodríguez  Yopasa</h4>
                    <h5 className={style.pie}>('El Pango')</h5>
                </span>
            </div>
        </div>

            </>
    )
}