import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Label } from "../components/Label";
import { Card, CardContent } from "../components/Card";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  FileText,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  User,
  Sparkles,
  Pill,
  LineChart,
  Send,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { useState } from "react";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    avatar: "SJ",
    content: "MediPulse has transformed how I manage my practice. The SOAP notes and e-prescriptions save me hours every day. My patients love the portal too!",
    rating: 5,
    date: "March 2026",
  },
  {
    id: 2,
    name: "Amelia Hart",
    role: "Patient",
    avatar: "AH",
    content: "Finally, a healthcare app that's actually easy to use! I can book appointments, view my records, and message my doctor all in one place.",
    rating: 5,
    date: "April 2026",
  },
  {
    id: 3,
    name: "Dr. Marcus Chen",
    role: "Internal Medicine",
    avatar: "MC",
    content: "The analytics dashboard gives me real-time insights into my patient panel. Revenue tracking and patient flow have never been this clear.",
    rating: 4,
    date: "May 2026",
  },
  {
    id: 4,
    name: "Priya Raman",
    role: "Patient",
    avatar: "PR",
    content: "Being able to refill prescriptions with one click and view my lab results immediately has made managing my health so much easier.",
    rating: 5,
    date: "February 2026",
  },
  {
    id: 5,
    name: "Dr. Evelyn Park",
    role: "Cardiology Department Head",
    avatar: "EP",
    content: "The department load analytics helps us optimize scheduling across the entire cardiology team. We've seen a 30% improvement in patient flow.",
    rating: 5,
    date: "January 2026",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-warning text-warning"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Home() {
  
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Activity className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">MediPulse</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#portals" className="hover:text-foreground transition-colors">Portals</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact Us</a>
          </nav>
         
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-surface" />
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-primary-glow/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              MediPulse 2.0 — now with patient portal
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              A calmer way to run <span className="text-primary">modern care.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              One platform, two thoughtfully designed portals. Patients book visits, view records,
              and refill prescriptions. Providers chart faster and see what matters at a glance.
            </p>
          
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> HIPAA-ready
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HeartPulse className="h-4 w-4 text-primary" /> Used by 1,200+ clinicians
              </span>
              <span className="inline-flex items-center gap-1.5">
                <LineChart className="h-4 w-4 text-primary" /> 99.99% uptime
              </span>
            </div>
          </div>

          {/* Visual mock */}
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card p-4 shadow-glow">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                </div>
                <span className="text-xs text-muted-foreground">medipulse.app/provider</span>
                <span />
              </div>
              <div className="grid grid-cols-3 gap-3 p-4">
                <div className="col-span-2 rounded-xl bg-gradient-primary p-5 text-primary-foreground">
                  <div className="text-xs opacity-80">Today's load</div>
                  <div className="font-display text-4xl font-semibold">58 visits</div>
                  <div className="mt-3 h-16 rounded-md bg-white/15" />
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-muted p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Critical</div>
                    <div className="font-display text-2xl font-semibold text-destructive">7</div>
                  </div>
                  <div className="rounded-xl bg-muted p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Active</div>
                    <div className="font-display text-2xl font-semibold">142</div>
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2">
                  {["Amelia Hart", "Marcus Chen", "Sofia Martins"].map((n) => (
                    <div key={n} className="rounded-lg border border-border bg-background p-3 text-xs">
                      <div className="font-medium">{n}</div>
                      <div className="text-muted-foreground">09:00 · Follow-up</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 hidden w-64 rounded-2xl border border-border bg-card p-4 shadow-soft md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                  <Pill className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <div className="font-medium">Refill ready</div>
                  <div className="text-muted-foreground">Metformin — pick up tomorrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section id="portals" className="mx-auto max-w-7xl px-6 py-20">
        {/* Stats with testimonials */}
        <div className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-gradient-primary p-6 text-primary-foreground text-center">
            <div className="text-3xl font-display font-semibold">4.9</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="text-sm opacity-90 mt-2">Average rating from 500+ users</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <div className="text-3xl font-display font-semibold text-foreground">1,200+</div>
            <div className="text-sm text-muted-foreground mt-1">Active clinicians</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <div className="text-3xl font-display font-semibold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground mt-1">Patient satisfaction rate</div>
          </div>
        </div>
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Two portals, one record</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
            Built for both sides of the visit.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PortalCard
            to="/login?role=patient"
            tag="For patients"
            title="Your health, on your terms"
            description="Book appointments, message your doctor, view lab results, refill prescriptions, and pay your bills — all in one calm place."
            features={[
              "Book & manage appointments",
              "View visit summaries & lab results",
              "Refill prescriptions",
              "Secure messaging with care team",
              "Billing & insurance",
            ]}
            icon={User}
          />
          <PortalCard
            to="/login?role=provider"
            tag="For providers"
            title="A command center for care"
            description="See your day at a glance, chart with SOAP notes, manage your panel, send e-prescriptions, and track department analytics."
            features={[
              "Daily schedule & patient flow",
              "Patient records & charts",
              "SOAP clinical notes",
              "E-prescriptions",
              "Department analytics",
            ]}
            icon={Stethoscope}
            highlighted
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Star className="h-5 w-5 fill-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
            What people are saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real feedback from patients and providers who use MediPulse every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <StarRating rating={t.rating} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                "{t.content}"
              </p>
              <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                {t.date}
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              {showAllTestimonials ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show all testimonials
                </>
              )}
            </button>
          </div>
        )}

        
      </section>

      {/* Features */}
      <section id="features" className="border-y border-border bg-muted/40">
      <div className=" text-center">
          
          <h2 className="mt-12 font-display text-4xl font-semibold tracking-tight">
            Features
          </h2>
         
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={CalendarCheck}
              title="Smart scheduling"
              text="Conflict-aware booking that respects clinician availability and patient preferences."
            />
            <FeatureCard
              icon={FileText}
              title="Structured records"
              text="SOAP notes, allergies, conditions, and history — all on one timeline per patient."
            />
            <FeatureCard
              icon={Pill}
              title="E-prescriptions"
              text="Send refills to pharmacies in seconds with built-in interaction checks."
            />
            <FeatureCard
              icon={LineChart}
              title="Live analytics"
              text="Patient flow, revenue, and department load — updated in real time."
            />
            <FeatureCard
              icon={HeartPulse}
              title="Vitals tracking"
              text="Plot blood pressure, glucose, and weight trends across every encounter."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Secure by default"
              text="Role-based access, audit logs, and encryption end-to-end."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have questions about our platform or need support? We are here to help — reach out and our team will respond within 24 hours.
          </p>
        </div>

        <Card className="border-border shadow-soft">
          <CardContent className="pt-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" placeholder="Tell us more about your inquiry..." rows={5} />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}

function PortalCard({ to, tag, title, description, features, icon: Icon, highlighted }) {
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-3xl border p-8 transition hover:-translate-y-1 ${
        highlighted
          ? "border-primary/30 bg-card shadow-glow"
          : "border-border bg-card shadow-soft hover:shadow-glow"
      }`}
    >
      {highlighted && (
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      )}
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {tag}
          </span>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <ul className="mt-6 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Open portal <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}