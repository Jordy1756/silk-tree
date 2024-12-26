import { ReactNode } from "react";
import "./index.css";

type HorizontalScrollSectionProps = {
    id: string;
    height: string;
    viewTimelineName: string;
    pinChildren?: ReactNode;
    children: ReactNode;
};

const HorizontalScrollSection = ({
    id,
    height,
    viewTimelineName,
    pinChildren,
    children,
}: HorizontalScrollSectionProps) => {
    return (
        <section
            id={id}
            className="horizontal__scroll-section"
            style={{ "--height": height, "--view-timeline-name": viewTimelineName } as React.CSSProperties}
        >
            <div className="pin__wrap-sticky">
                {pinChildren}
                <div className="pin__wrap">{children}</div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;
