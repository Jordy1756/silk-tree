import "./serviceCard.css";

type ServiceCardProps = {
    name: string;
    image: string;
    scrollTrigger: number;
};

const ServiceCard = ({ name, image, scrollTrigger }: ServiceCardProps) => {
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
