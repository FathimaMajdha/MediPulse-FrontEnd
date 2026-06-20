import {
  Users,
  CalendarCheck,
  HeartPulse,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { PageHeader } from "../../components/PageHeader";
import { StatusBadge } from "../../components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";
import { appointments, analyticsWeekly, departmentLoad, patients } from "../../lib/mock-data";

const COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

function Stat({ label, value, delta, icon: Icon }) {
  return (
    <Card className="shadow-soft">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
            <p className="mt-2 font-display text-3xl font-semibold tracking-tight">{value}</p>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-success-foreground">
          <ArrowUpRight className="h-3.5 w-3.5" />
          {delta}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProviderDashboard() {
  return (
    <div>
      <PageHeader
        title="Good morning, Dr. Rivera"
        subtitle="Here's what's happening across MediPulse today."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total Patients" value="2,847" delta="+12.4% this month" icon={Users} />
        <Stat label="Today's Appointments" value="58" delta="+8 vs yesterday" icon={CalendarCheck} />
        <Stat label="Critical Cases" value="7" delta="2 newly admitted" icon={HeartPulse} />
        <Stat label="Weekly Revenue" value="$54.5K" delta="+6.2% WoW" icon={DollarSign} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="shadow-soft lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-display text-lg">Patient flow</CardTitle>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success-foreground">
              <TrendingUp className="h-3 w-3" /> +14%
            </div>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsWeekly}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                  }}
                />
                <Area type="monotone" dataKey="appointments" stroke="var(--color-chart-2)" fill="url(#g2)" strokeWidth={2} />
                <Area type="monotone" dataKey="patients" stroke="var(--color-chart-1)" fill="url(#g1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Department load</CardTitle>
            <p className="text-xs text-muted-foreground">Active patient share</p>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentLoad}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {departmentLoad.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs">
              {departmentLoad.map((d, i) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: COLORS[i % COLORS.length] }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="shadow-soft lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display text-lg">Today's schedule</CardTitle>
            <p className="text-xs text-muted-foreground">{appointments.length} appointments</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {appointments.slice(0, 6).map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between rounded-xl border border-border bg-background/50 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 text-center">
                    <div className="font-display text-base font-semibold">{a.time}</div>
                    <div className="text-[10px] uppercase text-muted-foreground">today</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <div className="text-sm font-medium">{a.patientName}</div>
                    <div className="text-xs text-muted-foreground">
                      {a.type} • {a.doctorName}
                    </div>
                  </div>
                </div>
                <StatusBadge status={a.status} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-lg">Revenue</CardTitle>
            <p className="text-xs text-muted-foreground">Weekly, in USD</p>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsWeekly}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                  }}
                />
                <Bar dataKey="revenue" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-lg">Recently updated patients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {patients.slice(0, 4).map((p) => (
              <div key={p.id} className="rounded-xl border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                    {p.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.id} • {p.age}y</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <StatusBadge status={p.status} />
                  <span className="text-xs text-muted-foreground">{p.lastVisit}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}