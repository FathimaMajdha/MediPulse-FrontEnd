import { Download, FlaskConical, FileText, Syringe, HeartPulse } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";

const labs = [
  { name: "Complete Blood Count", date: "Jun 18, 2026", status: "Normal", color: "text-success-foreground bg-success/15" },
  { name: "Lipid Panel", date: "Jun 18, 2026", status: "Borderline", color: "text-warning-foreground bg-warning/20" },
  { name: "HbA1c", date: "May 30, 2026", status: "Normal", color: "text-success-foreground bg-success/15" },
  { name: "Thyroid Panel", date: "Apr 12, 2026", status: "Normal", color: "text-success-foreground bg-success/15" },
];

const immunizations = [
  { name: "Influenza (Flu)", date: "Oct 2025" },
  { name: "COVID-19 Booster", date: "Sep 2025" },
  { name: "Tdap", date: "Mar 2023" },
  { name: "MMR", date: "Childhood" },
];

const summaries = [
  { title: "Annual physical exam", date: "Jun 10, 2026", doctor: "Dr. Omar Hassan", summary: "Overall good health. Recommended increased cardio and Vitamin D supplementation." },
  { title: "Asthma follow-up", date: "Jun 14, 2026", doctor: "Dr. Omar Hassan", summary: "Exercise-induced wheezing improved. Continue pre-exercise albuterol." },
];

export function PatientRecords() {
  return (
    <div>
      <PageHeader
        title="Health Records"
        subtitle="Your complete medical history at MediPulse"
      />

      {/* Overview */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-soft">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Blood type</span>
              <HeartPulse className="h-4 w-4 text-destructive" />
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">O+</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Allergies</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs text-destructive">Penicillin</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Conditions</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">Asthma</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Primary doctor</div>
            <div className="mt-2 text-sm font-medium">Dr. Evelyn Park</div>
            <div className="text-xs text-muted-foreground">Cardiology</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Lab results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {labs.map((l) => (
              <div key={l.name} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <FlaskConical className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${l.color}`}>{l.status}</span>
                  <button aria-label="Download" className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted">
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Immunizations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {immunizations.map((i) => (
              <div key={i.name} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Syringe className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-medium">{i.name}</div>
                </div>
                <span className="text-xs text-muted-foreground">{i.date}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-lg">Visit summaries</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {summaries.map((s) => (
            <div key={s.title} className="rounded-xl border border-border p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="font-display text-base font-semibold">{s.title}</div>
                  <div className="text-xs text-muted-foreground">{s.doctor} • {s.date}</div>
                </div>
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                  <FileText className="h-3.5 w-3.5" /> Full summary
                </button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}