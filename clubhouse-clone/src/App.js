import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        < Routes element={< PlanLayout/>} >
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code-confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
       </Routes>
        <Routes element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
