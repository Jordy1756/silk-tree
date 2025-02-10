type IconProps = {
    width: number;
    height: number;
    color?: string;
};

const ArrowLeftIcon = ({ width, height, color }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path
                fill={color}
                d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
            />
        </svg>
    );
};

export default ArrowLeftIcon;
