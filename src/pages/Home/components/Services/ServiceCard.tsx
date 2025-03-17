import "./serviceCard.css";

type Props = {
    name: string;
    image: string;
    scrollTrigger: number;
};

const ServiceCard = ({ name, image, scrollTrigger }: Props) => {
    return (
        <article className="service__card" style={{ "--scroll-trigger": `${scrollTrigger}%` } as React.CSSProperties}>
            <img src={image} alt={`Imagen de ${name}`} />
            <div>
                <h5>{name}</h5>
                <span>Servicios</span>
            </div>
        </article>
    );
};

export default ServiceCard;
