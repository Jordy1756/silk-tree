import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import { StandardModalProvider } from "./shared/context/standardModalContext";

import { ConfirmationModalProvider } from "./shared/context/confirmationModalContext";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authorization" element={<Auth />} />
                <Route
                    path="/schedule-appointment"
                    element={
                        <ConfirmationModalProvider>
                            <StandardModalProvider>
                                <ScheduleAppointment />
                            </StandardModalProvider>
                        </ConfirmationModalProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
