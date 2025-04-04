import logo from "../../assets/images/company/logo.png";
import Register from "./components/Register";
import Login from "./components/Login";
import TogglePanel from "./components/TogglePanel";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ToastProvider } from "../../shared/context/toastContext";
import "./index.css";

const Auth = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleIsToggled = () => setIsToggled(!isToggled);

    return (
        <main className="auth">
            <ToastProvider>
                <header>
                    <NavLink to="/#home">
                        <img src={logo} alt="SilkTree logo" loading="lazy" decoding="async" />
                    </NavLink>
                    <NavLink to="/#home">
                        <img src={logo} alt="SilkTree logo" loading="lazy" decoding="async" />
                    </NavLink>
                </header>
                <main>
                    <Login isToggled={isToggled} handleIsToggled={handleIsToggled} />
                    <Register isToggled={isToggled} handleIsToggled={handleIsToggled} />
                </main>
                <TogglePanel isToggled={isToggled} />
            </ToastProvider>
        </main>
    );
};

export default Auth;
