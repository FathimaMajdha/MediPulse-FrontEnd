import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Activity, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Checkbox } from "../components/Checkbox";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "patient";

  const handleLogin = (e) => {
    e.preventDefault();
    // After successful login, redirect to the appropriate portal
    if (role === "patient") {
      navigate("/patient");
    } else {
      navigate("/provider");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left: brand panel */}
      <aside className="hidden lg:flex relative flex-col justify-between bg-gradient-primary p-12 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
        <Link to="/" className="relative flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
            <Activity className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold tracking-tight">MediPulse</span>
        </Link>

        <div className="relative space-y-4">
          <h1 className="text-4xl font-semibold leading-tight">A calmer way to run modern care.</h1>
          <p className="text-primary-foreground/80 max-w-md">
            One secure place for patients and providers — records, appointments, prescriptions and analytics.
          </p>
          <div className="flex gap-6 pt-6 text-sm text-primary-foreground/80">
            <div><div className="text-2xl font-semibold text-white">12k+</div>Patients</div>
            <div><div className="text-2xl font-semibold text-white">350+</div>Providers</div>
            <div><div className="text-2xl font-semibold text-white">99.9%</div>Uptime</div>
          </div>
        </div>

        <p className="relative text-xs text-primary-foreground/70">© {new Date().getFullYear()} MediPulse Health Systems</p>
      </aside>

      {/* Right: form */}
      <main className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary">
              <Activity className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold">MediPulse</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Welcome back, {role === "patient" ? "Patient" : "Provider"}
            </h2>
            <p className="text-muted-foreground">Sign in to access your {role} portal.</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={role === "patient" ? "amelia.h@mail.com" : "dr.rivera@clinic.com"} 
                  className="pl-10 h-11" 
                  defaultValue={role === "patient" ? "amelia.h@mail.com" : "dr.rivera@clinic.com"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-11"
                  defaultValue="password123"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
                Keep me signed in for 30 days
              </Label>
            </div>

            <Button type="submit" className="w-full h-11 bg-gradient-primary text-primary-foreground shadow-glow">
              Sign in as {role === "patient" ? "Patient" : "Provider"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center text-xs"><span className="bg-background px-3 text-muted-foreground">Or continue as</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button 
                asChild 
                variant={role === "patient" ? "default" : "outline"} 
                className="h-11"
              >
                <Link to="/login?role=patient">Patient</Link>
              </Button>
              <Button 
                asChild 
                variant={role === "provider" ? "default" : "outline"} 
                className="h-11"
              >
                <Link to="/login?role=provider">Provider</Link>
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            New to MediPulse?{" "}
            <Link to={`/register?role=${role}`} className="text-primary font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}