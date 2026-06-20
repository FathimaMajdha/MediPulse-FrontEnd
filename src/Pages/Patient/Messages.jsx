import { useState } from "react";
import { Send, Search } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { Card, CardContent } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const threads = [
  { id: "T1", name: "Dr. Evelyn Park", specialty: "Cardiology", preview: "Looking forward to seeing you Friday — please bring your BP log.", time: "10m", unread: 1, initials: "EP" },
  { id: "T2", name: "Dr. Omar Hassan", specialty: "Internal Medicine", preview: "Your lab results are back and look great overall.", time: "2h", unread: 0, initials: "OH" },
  { id: "T3", name: "Nurse Lina Cole", specialty: "Care Coordinator", preview: "Insurance pre-auth completed — you're all set.", time: "1d", unread: 0, initials: "LC" },
  { id: "T4", name: "MediPulse Billing", specialty: "Billing", preview: "Your statement for May is ready.", time: "3d", unread: 0, initials: "MP" },
];

const conversation = [
  { from: "doctor", text: "Hi Amelia, hope you're doing well!", time: "Tue 10:14" },
  { from: "doctor", text: "Looking forward to seeing you Friday. Please bring your home blood pressure readings from the last two weeks.", time: "Tue 10:15" },
  { from: "me", text: "Sounds good — I have them in the app. Should I print them?", time: "Tue 12:02" },
  { from: "doctor", text: "No need, you can share from the app during the visit. See you Friday at 9!", time: "Tue 12:30" },
];

export function PatientMessages() {
  const [active, setActive] = useState(threads[0]);

  return (
    <div>
      <PageHeader title="Messages" subtitle="Secure conversations with your care team" />

      <Card className="overflow-hidden shadow-soft">
        <div className="grid h-[640px] grid-cols-1 md:grid-cols-[320px_1fr]">
          {/* Thread list */}
          <div className="border-b border-border md:border-b-0 md:border-r">
            <div className="p-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search messages…" className="pl-9" />
              </div>
            </div>
            <div className="divide-y divide-border overflow-y-auto">
              {threads.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t)}
                  className={`flex w-full items-start gap-3 p-3 text-left transition hover:bg-muted/60 ${
                    active.id === t.id ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-sm font-medium">{t.name}</div>
                      <span className="text-[10px] text-muted-foreground">{t.time}</span>
                    </div>
                    <div className="truncate text-xs text-muted-foreground">{t.preview}</div>
                  </div>
                  {t.unread > 0 && (
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                      {t.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Conversation */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 border-b border-border p-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                {active.initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{active.name}</div>
                <div className="text-xs text-muted-foreground">{active.specialty}</div>
              </div>
            </div>
            <CardContent className="flex-1 space-y-3 overflow-y-auto p-6">
              {conversation.map((m, i) => (
                <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      m.from === "me"
                        ? "bg-gradient-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <div>{m.text}</div>
                    <div
                      className={`mt-1 text-[10px] ${
                        m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {m.time}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="flex items-center gap-2 border-t border-border p-3">
              <Input placeholder="Type a message…" className="flex-1" />
              <Button className="gap-1.5">
                <Send className="h-4 w-4" /> Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}