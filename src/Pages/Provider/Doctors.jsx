import { Star, Users as UsersIcon } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { StatusBadge } from "../../components/StatusBadge";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import { doctors } from "../../lib/mock-data";

export function ProviderDoctors() {
  return (
    <div>
      <PageHeader
        title="Doctors"
        subtitle={`${doctors.length} specialists on staff`}
        actions={<Button variant="outline">Manage rota</Button>}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {doctors.map((d) => (
          <Card key={d.id} className="overflow-hidden shadow-soft transition hover:shadow-glow">
            <div className="h-20 bg-gradient-primary" />
            <CardContent className="-mt-10 p-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border-4 border-card bg-card text-lg font-display font-semibold text-primary shadow-soft">
                {d.avatar}
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <div className="font-display text-base font-semibold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.specialty}</div>
                </div>
                <StatusBadge status={d.status} />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <UsersIcon className="h-3.5 w-3.5" /> Patients
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold">{d.patients}</div>
                </div>
                <div className="rounded-lg bg-muted/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 text-warning" /> Rating
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold">{d.rating}</div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">Schedule</Button>
                <Button size="sm" className="flex-1">View profile</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}