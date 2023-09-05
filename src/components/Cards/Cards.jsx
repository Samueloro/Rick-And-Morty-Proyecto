import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
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
        </div>
    )
}