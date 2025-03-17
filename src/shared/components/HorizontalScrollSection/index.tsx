import { ReactNode } from "react";
import "./index.css";

type Props = {
    id?: string;
    height: string;
    pinChildren?: ReactNode;
    children: ReactNode;
};

const HorizontalScrollSection = ({ id, height, pinChildren, children }: Props) => {
    return (
        <section id={id} className="horizontal__scroll-section" style={{ "--height": height } as React.CSSProperties}>
            <div className="pin__wrap-sticky">
                {pinChildren}
                <div className="pin__wrap">{children}</div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;
