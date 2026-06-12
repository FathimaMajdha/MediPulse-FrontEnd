import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';

// Patient Pages
import PatientAppointments from './Pages/patients/PatientAppointments';
import PatientMedications from './Pages/patients/PatientMedications';
import PatientLabResults from './Pages/patients/PatientLabResults';
import PatientMedicalRecords from './Pages/patients/PatientMedicalRecords';
import PatientMessages from './Pages/patients/PatientMessages';

// Provider Pages
import ProviderDashboard from './Pages/providers/ProviderDashboard';
import SoapNotes from './Pages/providers/SoapNotes';
import EPrescribe from './Pages/providers/EPrescribe';
import ProviderLabOrders from './Pages/providers/ProviderLabOrders';
import ProviderSchedule from './Pages/providers/ProviderSchedule';
import ProviderPatientList from './Pages/providers/ProviderPatientList';
import ProviderAnalytics from './Pages/providers/ProviderAnalytics';

// Features Pages
import EhrManagement from './Pages/features/EhrManagement';
import HipaaCompliance from './Pages/features/HipaaCompliance';
import FeaturesLabIntegration from './Pages/features/FeaturesLabIntegration';
import MobileAccess from './Pages/features/MobileAccess';
import AiAssistance from './Pages/features/AiAssistance';

// Resources Pages
import Blog from './Pages/resources/Blog';
import CaseStudies from './Pages/resources/CaseStudies';
import Webinars from './Pages/resources/Webinars';
import ResourcesFaq from './Pages/resources/ResourcesFaq';
import SupportCenter from './Pages/resources/SupportCenter';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        {/* Patient Routes */}
        <Route path="/patient/appointments" element={<PatientAppointments/>}/>
        <Route path="/patient/medications" element={<PatientMedications/>}/>
        <Route path="/patient/lab-results" element={<PatientLabResults/>}/>
        <Route path="/patient/medical-records" element={<PatientMedicalRecords/>}/>
        <Route path="/patient/messages" element={<PatientMessages/>}/>
        <Route path="/patient/dashboard" element={<PatientAppointments/>}/> {/* Fallback for dashboard */}
        <Route path="/patient/billing" element={<PatientAppointments/>}/> {/* Fallback for billing */}

        {/* Provider Routes */}
        <Route path="/provider/dashboard" element={<ProviderDashboard/>}/>
        <Route path="/provider/soap-notes" element={<SoapNotes/>}/>
        <Route path="/provider/eprescribe" element={<EPrescribe/>}/>
        <Route path="/provider/lab-orders" element={<ProviderLabOrders/>}/>
        <Route path="/provider/schedule" element={<ProviderSchedule/>}/>
        <Route path="/provider/patients" element={<ProviderPatientList/>}/>
        <Route path="/provider/analytics" element={<ProviderAnalytics/>}/>

        {/* Features Routes */}
        <Route path="/features/ehr-management" element={<EhrManagement/>}/>
        <Route path="/features/hipaa-compliance" element={<HipaaCompliance/>}/>
        <Route path="/features/lab-integration" element={<FeaturesLabIntegration/>}/>
        <Route path="/features/mobile-access" element={<MobileAccess/>}/>
        <Route path="/features/ai-assistance" element={<AiAssistance/>}/>

        {/* Resources Routes */}
        <Route path="/resources/blog" element={<Blog/>}/>
        <Route path="/resources/case-studies" element={<CaseStudies/>}/>
        <Route path="/resources/webinars" element={<Webinars/>}/>
        <Route path="/resources/faq" element={<ResourcesFaq/>}/>
        <Route path="/resources/support" element={<SupportCenter/>}/>

        {/* Pricing */}
        <Route path="/pricing" element={<Pricing/>}/>

      </Routes>
    </Router>
      
    </>
  )
}

export default App
