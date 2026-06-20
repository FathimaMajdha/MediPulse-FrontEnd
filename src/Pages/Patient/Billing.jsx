import { CreditCard, FileText, ShieldCheck, Download } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { StatusBadge } from "../../components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";
import { Button } from "../../components/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/Table";

const invoices = [
  { id: "INV-2402", date: "Jun 10, 2026", description: "Annual physical exam", amount: 2400.0, status: "Paid" },
  { id: "INV-2401", date: "May 22, 2026", description: "Dermatology consult", amount: 300.0, status: "Paid" },
  { id: "INV-2400", date: "Jun 14, 2026", description: "Pulmonology follow-up", amount: 800.5, status: "Scheduled" },
  { id: "INV-2399", date: "Apr 14, 2026", description: "Vaccination", amount: 450.0, status: "Paid" },
];

export function PatientBilling() {
  return (
    <div>
      <PageHeader
        title="Billing"
        subtitle="Invoices, payments and insurance"
        actions={
          <Button className="gap-2">
            <CreditCard className="h-4 w-4" /> Pay balance
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-soft">
          <CardContent className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Current balance</div>
            <div className="mt-2 font-display text-3xl font-semibold">₹1200.00</div>
            <div className="mt-1 text-xs text-muted-foreground">Due Jun 30, 2026</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Paid this year</div>
            <div className="mt-2 font-display text-3xl font-semibold">₹3,150.00</div>
            <div className="mt-1 text-xs text-muted-foreground">Across 8 invoices</div>
          </CardContent>
        </Card>
        <Card className="border-primary/30 bg-primary/5 shadow-soft">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
              <ShieldCheck className="h-4 w-4" /> Insurance
            </div>
            <div className="mt-2 text-sm font-semibold">Blue Cross PPO</div>
            <div className="text-xs text-muted-foreground">Member #BC-99-241-587</div>
            <div className="mt-2 text-xs text-muted-foreground">Deductible: ₹480 / ₹1,500 met</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-lg">Invoices</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((i) => (
                <TableRow key={i.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{i.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>{i.description}</TableCell>
                  <TableCell className="text-muted-foreground">{i.date}</TableCell>
                  <TableCell className="font-medium">₹{i.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <StatusBadge status={i.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <button aria-label="Download" className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted">
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}