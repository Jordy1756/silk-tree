import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import { ModalProvider } from "./shared/context/modalContext";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authorization" element={<Auth />} />
                <Route
                    path="/schedule-appointment"
                    element={
                        <ModalProvider>
                            <ScheduleAppointment />
                        </ModalProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
