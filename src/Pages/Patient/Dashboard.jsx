import { Link } from "react-router-dom";
import {
  CalendarDays,
  Pill,
  MessageCircle,
  Activity,
  HeartPulse,
  Droplet,
  Footprints,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { PageHeader } from "../../components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";

const vitals = [
  { date: "Jun 12", systolic: 124, diastolic: 80, glucose: 102 },
  { date: "Jun 13", systolic: 122, diastolic: 78, glucose: 99 },
  { date: "Jun 14", systolic: 126, diastolic: 82, glucose: 110 },
  { date: "Jun 15", systolic: 120, diastolic: 76, glucose: 95 },
  { date: "Jun 16", systolic: 118, diastolic: 74, glucose: 92 },
  { date: "Jun 17", systolic: 122, diastolic: 78, glucose: 98 },
  { date: "Jun 18", systolic: 119, diastolic: 75, glucose: 94 },
];

function VitalTile({ icon: Icon, label, value, unit, trend, color }) {
  return (
    <Card className="shadow-soft">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
          <div className={`grid h-9 w-9 place-items-center rounded-xl ${color}`}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-display text-3xl font-semibold tracking-tight">{value}</span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
        <div className="mt-1 text-xs text-success-foreground">{trend}</div>
      </CardContent>
    </Card>
  );
}

export function PatientDashboard() {
  return (
    <div>
      <PageHeader
        title="Hi Amelia, welcome back"
        subtitle="Here's a quick look at your health today."
        actions={
          <Link
            to="/patient/appointments"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-95"
          >
            <CalendarDays className="h-4 w-4" /> Book a visit
          </Link>
        }
      />

      {/* Hero card */}
      <Card className="overflow-hidden border-primary/20 shadow-glow">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gradient-primary p-6 text-primary-foreground md:col-span-2">
            <p className="text-xs uppercase tracking-widest opacity-80">Next appointment</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Follow-up with Dr. Evelyn Park</h3>
            <p className="mt-1 text-sm opacity-90">Cardiology • Friday, June 19 — 09:00 AM</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button className="rounded-lg bg-white/20 px-3 py-1.5 text-xs font-medium hover:bg-white/30">
                Add to calendar
              </button>
              <button className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/20">
                Reschedule
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Pre-visit checklist</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-success-foreground" /> Insurance verified
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-4 w-4 text-success-foreground" /> Symptoms questionnaire
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-4 w-4 rounded-full border border-border" /> Update medications list
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Vitals */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <VitalTile icon={HeartPulse} label="Blood pressure" value="119/75" unit="mmHg" trend="Normal range" color="bg-destructive/10 text-destructive" />
        <VitalTile icon={Droplet} label="Glucose" value="94" unit="mg/dL" trend="Stable" color="bg-primary/10 text-primary" />
        <VitalTile icon={Activity} label="Resting HR" value="68" unit="bpm" trend="-3 bpm vs last week" color="bg-warning/20 text-warning-foreground" />
        <VitalTile icon={Footprints} label="Steps today" value="6,420" unit="steps" trend="On track for 8k goal" color="bg-success/15 text-success-foreground" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="shadow-soft lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display text-lg">Blood pressure trend</CardTitle>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={vitals}>
                <defs>
                  <linearGradient id="bp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                  }}
                />
                <Area type="monotone" dataKey="systolic" stroke="var(--color-chart-1)" fill="url(#bp)" strokeWidth={2} />
                <Area type="monotone" dataKey="diastolic" stroke="var(--color-chart-2)" fill="none" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display text-lg">Active prescriptions</CardTitle>
            <Link to="/patient/prescriptions" className="text-xs font-medium text-primary hover:underline">
              View all
            </Link>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { name: "Albuterol Inhaler", dose: "90 mcg · as needed", refills: 2 },
              { name: "Vitamin D3", dose: "1000 IU · once daily", refills: 5 },
              { name: "Loratadine", dose: "10 mg · once daily", refills: 1 },
            ].map((rx) => (
              <div key={rx.name} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Pill className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{rx.name}</div>
                    <div className="text-xs text-muted-foreground">{rx.dose}</div>
                  </div>
                </div>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                  {rx.refills} refills
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: CalendarDays, title: "Lab results uploaded", meta: "Cholesterol panel · Jun 18" },
              { icon: MessageCircle, title: "Message from Dr. Park", meta: "About your follow-up · Jun 17" },
              { icon: Pill, title: "Prescription refilled", meta: "Albuterol Inhaler · Jun 14" },
              { icon: Activity, title: "Annual physical completed", meta: "Dr. Hassan · Jun 10" },
            ].map((it) => (
              <div key={it.title} className="flex items-center gap-3 rounded-xl border border-border p-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <it.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{it.title}</div>
                  <div className="text-xs text-muted-foreground">{it.meta}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Care team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Dr. Evelyn Park", role: "Cardiologist · Primary" },
              { name: "Dr. Omar Hassan", role: "Internal Medicine" },
              { name: "Nurse Lina Cole", role: "Care Coordinator" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    {m.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                  </div>
                </div>
                <Link to="/patient/messages" className="text-xs font-medium text-primary hover:underline">
                  Message
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}