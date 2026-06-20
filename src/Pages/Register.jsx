import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Activity, Mail, Lock, Eye, EyeOff, ArrowRight, HeartPulse, Stethoscope, Check } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Checkbox } from "../components/Checkbox";

export function Register() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "patient";
  const [role, setRole] = useState(defaultRole);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const rules = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "One number", ok: /\d/.test(password) },
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <main className="flex items-center justify-center p-6 sm:p-12 order-2 lg:order-1">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary">
              <Activity className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold">MediPulse</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Create your account</h2>
            <p className="text-muted-foreground">Join MediPulse in less than a minute.</p>
          </div>

          {/* Role selector */}
          <div className="grid grid-cols-2 gap-3">
            {([
              { id: "patient", label: "I'm a Patient", icon: HeartPulse, desc: "Manage my health" },
              { id: "provider", label: "I'm a Provider", icon: Stethoscope, desc: "Care for patients" },
            ]).map((r) => {
              const Icon = r.icon;
              const active = role === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-primary bg-primary/5 shadow-glow"
                      : "border-border hover:border-primary/50 hover:bg-muted/40"
                  }`}
                >
                  <Icon className={`h-5 w-5 mb-2 ${active ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="font-medium text-sm">{r.label}</div>
                  <div className="text-xs text-muted-foreground">{r.desc}</div>
                </button>
              );
            })}
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="first">First name</Label>
                <Input id="first" placeholder={role === "patient" ? "Amelia" : "Dr. Rivera"} className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last">Last name</Label>
                <Input id="last" placeholder={role === "patient" ? "Hart" : "MD"} className="h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={role === "patient" ? "amelia.h@mail.com" : "dr.rivera@clinic.com"} 
                  className="pl-10 h-11" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="pl-10 pr-10 h-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <ul className="grid grid-cols-1 gap-1 pt-1">
                {rules.map((r) => (
                  <li key={r.label} className={`flex items-center gap-2 text-xs ${r.ok ? "text-primary" : "text-muted-foreground"}`}>
                    <Check className={`h-3.5 w-3.5 ${r.ok ? "opacity-100" : "opacity-40"}`} />
                    {r.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground leading-relaxed">
                I agree to the <a href="#" className="text-primary hover:underline">Terms</a> and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </Label>
            </div>

            <Button type="submit" className="w-full h-11 bg-gradient-primary text-primary-foreground shadow-glow">
              Create {role === "patient" ? "patient" : "provider"} account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to={`/login?role=${role}`} className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>

      {/* Right brand panel */}
      <aside className="hidden lg:flex relative flex-col justify-between bg-gradient-primary p-12 text-primary-foreground overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,white,transparent_40%),radial-gradient(circle_at_30%_80%,white,transparent_40%)]" />
        <Link to="/" className="relative flex items-center gap-2 self-end">
          <span className="text-xl font-semibold tracking-tight">MediPulse</span>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
            <Activity className="h-5 w-5" strokeWidth={2.5} />
          </div>
        </Link>

        <div className="relative space-y-6">
          <h1 className="text-4xl font-semibold leading-tight">Care that flows with you.</h1>
          <ul className="space-y-3 text-primary-foreground/90">
            {[
              "HIPAA-ready security by default",
              "Unified patient & provider portals",
              "Real-time scheduling & messaging",
              "Insights that help you do more, calmly",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-primary-foreground/70">Trusted by clinics in 24 countries.</p>
      </aside>
    </div>
  );
}