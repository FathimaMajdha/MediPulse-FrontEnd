import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

// Patient imports
import { PatientLayout } from "./pages/Patient/Layout";
import { PatientDashboard } from "./pages/Patient/Dashboard";
import { PatientAppointments } from "./pages/Patient/Appointments";
import { PatientRecords } from "./pages/Patient/Records";
import { PatientPrescriptions } from "./pages/Patient/Prescriptions";
import { PatientMessages } from "./pages/Patient/Messages";
import { PatientBilling } from "./pages/Patient/Billing";

// Provider imports
import { ProviderLayout } from "./pages/Provider/Layout";
import { ProviderDashboard } from "./pages/Provider/Dashboard";
import { ProviderPatients } from "./pages/Provider/Patients";
import { ProviderDoctors } from "./pages/Provider/Doctors";
import { ProviderAppointments } from "./pages/Provider/Appointments";
import { ProviderNotes } from "./pages/Provider/Notes";
import { ProviderPrescriptions } from "./pages/Provider/Prescriptions";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
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

export default App;