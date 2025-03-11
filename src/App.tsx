import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import { ModalProvider } from "./shared/context/modalContext";

const App = () => {
    return (
        <ModalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/authorization" element={<Auth />} />
                    <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
                </Routes>
            </BrowserRouter>
        </ModalProvider>
    );
};

export default App;
