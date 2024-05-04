import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import AppLayout from "./layout/AppLayout";
import MedicationManagement from "./pages/dashboard/MedicationManagement";
import AdherenceTracking from "./pages/dashboard/AdherenceTracking";
import Reminders from "./pages/dashboard/Reminders";
import EducationalResources from "./pages/dashboard/EducationalResources";
import HealthcareProviders from "./pages/dashboard/HealthcareProviders";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Cyan900, blue-100 neutral900

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<AppLayout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/medication-management"
            element={<MedicationManagement />}
          />
          <Route path="/adherence-tracking" element={<AdherenceTracking />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route
            path="/educational-resources"
            element={<EducationalResources />}
          />
          <Route
            path="/healthcare-providers"
            element={<HealthcareProviders />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
