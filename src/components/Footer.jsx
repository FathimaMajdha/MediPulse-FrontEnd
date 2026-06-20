import { Link } from "react-router-dom";
import { Activity, Mail, Phone, MapPin, Clock, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Activity className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">MediPulse</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A calm, modern platform for patients and care providers. Manage appointments, records,
              prescriptions and more.
            </p>
            <div className="flex items-center gap-1 text-primary">
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <span className="ml-2 text-xs text-muted-foreground">4.9/5</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p>hello@medipulse.app</p>
                  <p>support@medipulse.app</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p>+1 (555) 019-2834</p>
                  <p>+1 (555) 847-2910</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Location</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p>1200 Health Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Sat – Sun: 10:00 AM – 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground">
          <span>© 2026 MediPulse. Care, simplified.</span>
          <span className="hidden sm:inline">HIPAA-ready · 99.99% uptime · 1,200+ clinicians</span>
        </div>
      </div>
    </footer>
  );
}