import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
