import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthStatusProvider } from "./shared/context/authStatusContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAppointment from "./pages/MedicalAppointment";
import Layout from "./shared/layouts/Layout";

const App = () => {
    return (
        <AuthStatusProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/authorization" element={<Auth />} />
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthStatusProvider>
    );
};

export default App;
