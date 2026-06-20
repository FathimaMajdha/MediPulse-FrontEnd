import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

// Patient imports
import { PatientLayout } from "./Pages/Patient/Layout";
import { PatientDashboard } from "./Pages/Patient/Dashboard";
import { PatientAppointments } from "./Pages/Patient/Appointments";
import { PatientRecords } from "./Pages/Patient/Records";
import { PatientPrescriptions } from "./Pages/Patient/Prescriptions";
import { PatientMessages } from "./Pages/Patient/Messages";
import { PatientBilling } from "./Pages/Patient/Billing";

// Provider imports
import { ProviderLayout } from "./Pages/Provider/Layout";
import { ProviderDashboard } from "./Pages/Provider/Dashboard";
import { ProviderPatients } from "./Pages/Provider/Patients";
import { ProviderDoctors } from "./Pages/Provider/Doctors";
import { ProviderAppointments } from "./Pages/Provider/Appointments";
import { ProviderNotes } from "./Pages/Provider/Notes";
import { ProviderPrescriptions } from "./Pages/Provider/Prescriptions";

// The Home component is defined below in this file, so no import needed!

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} /> {/* This now works! */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Patient Routes */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path="appointments" element={<PatientAppointments />} />
          <Route path="records" element={<PatientRecords />} />
          <Route path="prescriptions" element={<PatientPrescriptions />} />
          <Route path="messages" element={<PatientMessages />} />
          <Route path="billing" element={<PatientBilling />} />
        </Route>

        {/* Provider Routes */}
        <Route path="/provider" element={<ProviderLayout />}>
          <Route index element={<ProviderDashboard />} />
          <Route path="patients" element={<ProviderPatients />} />
          <Route path="doctors" element={<ProviderDoctors />} />
          <Route path="appointments" element={<ProviderAppointments />} />
          <Route path="notes" element={<ProviderNotes />} />
          <Route path="prescriptions" element={<ProviderPrescriptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ... rest of your code (Home, PortalCard, FeatureCard, StarRating components)
export default App;