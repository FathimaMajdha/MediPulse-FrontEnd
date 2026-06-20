import { cn } from "../../lib/utils";

const map = {
  Active: "bg-primary/10 text-primary",
  Stable: "bg-success/15 text-success-foreground",
  Critical: "bg-destructive/15 text-destructive",
  Recovering: "bg-warning/20 text-warning-foreground",
  Scheduled: "bg-primary/10 text-primary",
  Completed: "bg-success/15 text-success-foreground",
  Cancelled: "bg-muted text-muted-foreground line-through",
  Available: "bg-success/15 text-success-foreground",
  "In Surgery": "bg-warning/20 text-warning-foreground",
  "Off Duty": "bg-muted text-muted-foreground",
  Paid: "bg-success/15 text-success-foreground",
};

export function StatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        map[status] ?? "bg-muted text-muted-foreground"
      )}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}