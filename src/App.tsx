import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAppointment from "./pages/MedicalAppointment";
import Layout from "./shared/layouts/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/authorization" element={<Auth />} />
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
