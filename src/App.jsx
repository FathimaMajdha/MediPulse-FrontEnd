

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import PatientAppointments from './Pages/patients/PatientAppointments';
import PatientMedications from './Pages/patients/PatientMedications';
import PatientLabResults from './Pages/patients/PatientLabResults';
import PatientMedicalRecords from './Pages/patients/PatientMedicalRecords';
import PatientMessages from './Pages/patients/PatientMessages';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/patient/appointments" element={<PatientAppointments/>}/>
         <Route path="/patient/medications" element={<PatientMedications/>}/>
         <Route path="/patient/lab-results" element={<PatientLabResults/>}/>
         <Route path="/patient/medical-records" element={<PatientMedicalRecords/>}/>
         <Route path="/patient/messages" element={<PatientMessages/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
