import { Outlet } from "react-router-dom";
import { LayoutDashboard, Users, Stethoscope, CalendarDays, FileText, Pill } from "lucide-react";
import { AppShell } from "../../components/AppShell";

const items = [
  { title: "Dashboard", url: "/provider", icon: LayoutDashboard },
  { title: "Patients", url: "/provider/patients", icon: Users },
  { title: "Doctors", url: "/provider/doctors", icon: Stethoscope },
  { title: "Appointments", url: "/provider/appointments", icon: CalendarDays },
  { title: "Clinical Notes", url: "/provider/notes", icon: FileText },
  { title: "Prescriptions", url: "/provider/prescriptions", icon: Pill },
];

export function ProviderLayout() {
  return (
    <AppShell
      navLabel="Workspace"
      navItems={items}
      userName="Dr. Rivera"
      userRole="Attending Physician"
      userInitials="DR"
    >
      <Outlet />
    </AppShell>
  );
}