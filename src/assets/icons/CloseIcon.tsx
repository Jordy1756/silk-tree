import type { IconProps } from "../../shared/types/iconTypes";

const CloseIcon = ({ width, height, color }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path
                fill={color}
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
        </svg>
    );
};

export default CloseIcon;
