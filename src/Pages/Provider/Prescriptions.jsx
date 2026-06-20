import { Pill, Plus } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/Table";
import { prescriptions } from "../../lib/mock-data";

export function ProviderPrescriptions() {
  return (
    <div>
      <PageHeader
        title="Prescriptions"
        subtitle={`${prescriptions.length} active prescriptions`}
        actions={
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New prescription
          </Button>
        }
      />

      <Card className="shadow-soft">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medication</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Prescribed by</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prescriptions.map((rx) => (
                <TableRow key={rx.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Pill className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{rx.medication}</div>
                        <div className="text-xs text-muted-foreground">{rx.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{rx.patientName}</div>
                    <div className="text-xs text-muted-foreground">{rx.patientId}</div>
                  </TableCell>
                  <TableCell>{rx.dosage}</TableCell>
                  <TableCell>{rx.frequency}</TableCell>
                  <TableCell>{rx.duration}</TableCell>
                  <TableCell>{rx.prescribedBy}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{rx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}