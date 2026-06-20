import { CalendarDays, Clock, MapPin, Plus, Video } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const upcoming = [
  {
    id: "AP-1",
    title: "Follow-up consultation",
    doctor: "Dr. Evelyn Park",
    specialty: "Cardiology",
    date: "Fri, Jun 19",
    time: "09:00 AM",
    type: "In-person",
    location: "MediPulse Clinic · Suite 304",
    status: "Scheduled",
  },
  {
    id: "AP-2",
    title: "Quarterly check-up",
    doctor: "Dr. Omar Hassan",
    specialty: "Internal Medicine",
    date: "Tue, Jul 02",
    time: "11:30 AM",
    type: "Telehealth",
    location: "Video call",
    status: "Scheduled",
  },
];

const past = [
  { id: "AP-9", title: "Annual physical", doctor: "Dr. Omar Hassan", date: "Jun 10", status: "Completed" },
  { id: "AP-8", title: "Skin check", doctor: "Dr. Mei Tanaka", date: "May 22", status: "Completed" },
  { id: "AP-7", title: "Vaccination", doctor: "Nurse Lina Cole", date: "Apr 14", status: "Completed" },
];

const specialties = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics", "Internal Medicine"];

export function PatientAppointments() {
  return (
    <div>
      <PageHeader
        title="Appointments"
        subtitle="Manage your upcoming and past visits"
        actions={
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Book new visit
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-lg">Upcoming</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcoming.map((a) => (
                <div key={a.id} className="rounded-2xl border border-border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="font-display text-base font-semibold">{a.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {a.doctor} • {a.specialty}
                      </div>
                    </div>
                    <StatusBadge status={a.status} />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" /> {a.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {a.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {a.type === "Telehealth" ? <Video className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
                      {a.location}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm" variant="outline">Cancel</Button>
                    {a.type === "Telehealth" && (
                      <Button size="sm" className="gap-1.5">
                        <Video className="h-3.5 w-3.5" /> Join call
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-lg">Past visits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {past.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-xl border border-border p-3">
                  <div>
                    <div className="text-sm font-medium">{a.title}</div>
                    <div className="text-xs text-muted-foreground">{a.doctor} • {a.date}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={a.status} />
                    <button className="text-xs font-medium text-primary hover:underline">Visit summary →</button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Book by specialty</CardTitle>
            <p className="text-xs text-muted-foreground">Quick-start a booking</p>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {specialties.map((s) => (
              <button
                key={s}
                className="rounded-xl border border-border bg-background p-3 text-left text-sm transition hover:border-primary hover:bg-primary/5"
              >
                {s}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}