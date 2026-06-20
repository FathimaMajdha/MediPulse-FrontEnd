import { Outlet } from "react-router-dom";
import { LayoutDashboard, CalendarDays, FileHeart, Pill, MessageCircle, Receipt } from "lucide-react";
import { AppShell } from "../../components/ui/AppShell";

const items = [
  { title: "Overview", url: "/patient", icon: LayoutDashboard },
  { title: "Appointments", url: "/patient/appointments", icon: CalendarDays },
  { title: "Health Records", url: "/patient/records", icon: FileHeart },
  { title: "Prescriptions", url: "/patient/prescriptions", icon: Pill },
  { title: "Messages", url: "/patient/messages", icon: MessageCircle },
  { title: "Billing", url: "/patient/billing", icon: Receipt },
];

export function PatientLayout() {
  return (
    <AppShell
      navLabel="My health"
      navItems={items}
      userName="Amelia Hart"
      userRole="Patient"
      userInitials="AH"
    >
      <Outlet />
    </AppShell>
  );
}