import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<PlanLayout><Welcome /></PlanLayout>} />

        {/* Define the route for "/invite" */}
        <Route path="/invite" element={<PhoneConfirmation />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
