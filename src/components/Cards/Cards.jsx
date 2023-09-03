import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards({ characters }) {
    return (
        <div className={style.contenedor}>
            {
                characters.map(({ id, name, status, species, gender, origin, image }) => {
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        onClose={() => window.alert('Emulamos que se cierra la card')}
                        image={image}
                        />
                    )
                })
            }
        </div>
    )
}