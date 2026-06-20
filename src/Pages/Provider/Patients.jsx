import { useMemo, useState } from "react";
import { Search, Plus, Phone, Mail, Droplet } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { patients } from "../../lib/mock-data";

export function ProviderPatients() {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      patients.filter((p) =>
        (p.name + p.id + p.conditions.join(" ")).toLowerCase().includes(q.toLowerCase())
      ),
    [q]
  );

  return (
    <div>
      <PageHeader
        title="Patients"
        subtitle={`${patients.length} active records`}
        actions={
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New patient
          </Button>
        }
      />

      <div className="relative mb-4 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, ID or condition…"
          className="pl-9"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.id} className="shadow-soft transition hover:shadow-glow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                    {p.avatar}
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold leading-tight">{p.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {p.id} • {p.age}y • {p.gender}
                    </div>
                  </div>
                </div>
                <StatusBadge status={p.status} />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Droplet className="h-3.5 w-3.5 text-destructive" />
                  Blood: <span className="font-medium text-foreground">{p.bloodType}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> {p.phone}
                </div>
                <div className="col-span-2 flex items-center gap-1.5 truncate">
                  <Mail className="h-3.5 w-3.5" /> {p.email}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conditions</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.conditions.length === 0 && (
                    <span className="text-xs text-muted-foreground">None recorded</span>
                  )}
                  {p.conditions.map((c) => (
                    <span key={c} className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Allergies</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.allergies.length === 0 ? (
                    <span className="text-xs text-muted-foreground">No known allergies</span>
                  ) : (
                    p.allergies.map((a) => (
                      <span key={a} className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs text-destructive">
                        {a}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>Last visit {p.lastVisit}</span>
                <button className="font-medium text-primary hover:underline">View chart →</button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}