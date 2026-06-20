import { Pill, RefreshCw } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const active = [
  { name: "Albuterol Inhaler", dose: "90 mcg", frequency: "As needed", prescribedBy: "Dr. Omar Hassan", refills: 2, lastFilled: "Jun 14, 2026" },
  { name: "Vitamin D3", dose: "1000 IU", frequency: "Once daily", prescribedBy: "Dr. Omar Hassan", refills: 5, lastFilled: "May 30, 2026" },
  { name: "Loratadine", dose: "10 mg", frequency: "Once daily", prescribedBy: "Dr. Mei Tanaka", refills: 1, lastFilled: "Apr 22, 2026" },
];

const past = [
  { name: "Amoxicillin", dose: "500 mg", duration: "10 days", date: "Mar 2026" },
  { name: "Prednisone taper", dose: "20 mg → 5 mg", duration: "14 days", date: "Jan 2026" },
];

export function PatientPrescriptions() {
  return (
    <div>
      <PageHeader
        title="Prescriptions"
        subtitle="Active medications & refill history"
      />

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-lg">Active medications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {active.map((rx) => (
            <div key={rx.name} className="rounded-2xl border border-border p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Pill className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold">{rx.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {rx.dose} • {rx.frequency}
                    </div>
                  </div>
                </div>
                <Button size="sm" className="gap-1.5">
                  <RefreshCw className="h-3.5 w-3.5" /> Request refill
                </Button>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-3 text-xs sm:grid-cols-3">
                <div>
                  <div className="text-muted-foreground">Prescribed by</div>
                  <div className="mt-0.5 font-medium">{rx.prescribedBy}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Refills left</div>
                  <div className="mt-0.5 font-medium">{rx.refills}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Last filled</div>
                  <div className="mt-0.5 font-medium">{rx.lastFilled}</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-6 shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-lg">Past medications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {past.map((p) => (
            <div key={p.name} className="flex items-center justify-between rounded-xl border border-border p-3 text-sm">
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.dose} • {p.duration}</div>
              </div>
              <span className="text-xs text-muted-foreground">{p.date}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}