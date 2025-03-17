import "./index.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/company/logo.png";
import TogglePanel from "./components/TogglePanel";
import { useState } from "react";

const Auth = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleIsToggled = () => setIsToggled(!isToggled);

    return (
        <main className="auth">
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
        </main>
    );
};

export default Auth;
