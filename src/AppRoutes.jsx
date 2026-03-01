import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Preview from "./pages/Preview.jsx";
import ResumeBuilder from "./pages/ResumeBuilder.jsx";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/app/builder/:resumeId' element={<ResumeBuilder />} />
        <Route path='/view/:resumeId' element={<Preview />} />
        <Route path='/preview/:resumeId' element={<Preview />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
