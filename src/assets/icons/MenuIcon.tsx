import type { IconProps } from "../../shared/types/iconTypes";

const MenuIcon = ({ width, height, color }: IconProps) => {
    return (
        // <svg width={width} height={height} viewBox="0 0 1024 1024">
        //     <path
        //         fill={color}
        //         d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"
        //     />
        // </svg>
        <svg width={width} height={height} viewBox="0 0 24 24">
            <path fill={color} d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z" />
        </svg>
    );
};

export default MenuIcon;
