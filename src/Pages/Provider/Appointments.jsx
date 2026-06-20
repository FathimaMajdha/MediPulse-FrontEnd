import { Plus, Calendar as CalendarIcon } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { appointments } from "../../lib/mock-data";

const hours = Array.from({ length: 10 }, (_, i) => 8 + i);

export function ProviderAppointments() {
  return (
    <div>
      <PageHeader
        title="Appointments"
        subtitle="Friday, June 19, 2026"
        actions={
          <>
            <Button variant="outline" className="gap-2">
              <CalendarIcon className="h-4 w-4" /> Week view
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Book appointment
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="shadow-soft lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display text-lg">Today's timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {hours.map((h) => {
                const label = `${h.toString().padStart(2, "0")}:00`;
                const slot = appointments.find((a) => a.time.startsWith(h.toString().padStart(2, "0")));
                return (
                  <div key={h} className="flex gap-4 border-t border-border py-3 first:border-t-0">
                    <div className="w-16 pt-1 font-mono text-xs text-muted-foreground">{label}</div>
                    <div className="flex-1">
                      {slot ? (
                        <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-3">
                          <div>
                            <div className="text-sm font-medium">{slot.patientName}</div>
                            <div className="text-xs text-muted-foreground">
                              {slot.type} • {slot.doctorName}
                            </div>
                          </div>
                          <StatusBadge status={slot.status} />
                        </div>
                      ) : (
                        <button className="w-full rounded-xl border border-dashed border-border py-3 text-xs text-muted-foreground transition hover:border-primary hover:text-primary">
                          + Available slot
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Upcoming</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {appointments.map((a) => (
              <div key={a.id} className="rounded-xl border border-border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-display text-sm font-semibold">{a.time}</div>
                  <StatusBadge status={a.status} />
                </div>
                <div className="mt-1 text-sm">{a.patientName}</div>
                <div className="text-xs text-muted-foreground">
                  {a.type} • {a.doctorName}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}