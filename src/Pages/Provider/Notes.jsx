import { FilePlus2 } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { notes } from "../../lib/mock-data";

const sections = [
  { key: "subjective", label: "S — Subjective" },
  { key: "objective", label: "O — Objective" },
  { key: "assessment", label: "A — Assessment" },
  { key: "plan", label: "P — Plan" },
];

export function ProviderNotes() {
  return (
    <div>
      <PageHeader
        title="Clinical Notes"
        subtitle="SOAP-format encounters"
        actions={
          <Button className="gap-2">
            <FilePlus2 className="h-4 w-4" /> New note
          </Button>
        }
      />

      <div className="space-y-4">
        {notes.map((n) => (
          <Card key={n.id} className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
                <div>
                  <div className="font-display text-lg font-semibold">{n.patientName}</div>
                  <div className="text-xs text-muted-foreground">
                    {n.id} • Patient {n.patientId}
                  </div>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <div className="font-medium text-foreground">{n.doctor}</div>
                  <div>{n.date}</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {sections.map((s) => (
                  <div key={s.key} className="rounded-xl bg-muted/50 p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                      {s.label}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{n[s.key]}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}