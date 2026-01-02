import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";

function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </>
  );
}

export default AppRoutes;
