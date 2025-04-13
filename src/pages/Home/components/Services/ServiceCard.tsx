import { CSSProperties } from "react";
import "./serviceCard.css";

type Props = {
    index: number;
    name: string;
    image: string;
};

const ServiceCard = ({ index, name, image }: Props) => {
    return (
        <article className="service__card" style={{ "--index": index } as CSSProperties}>
            <figure>
                <img src={image} alt={`Imagen de ${name}`} />
            </figure>
            <div>
                <h5>{name}</h5>
                <span>Servicios</span>
            </div>
        </article>
    );
};

export default ServiceCard;
