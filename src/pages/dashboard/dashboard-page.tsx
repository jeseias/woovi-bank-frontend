import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const DashboardPage = () => {
  return (
    <div className="p-4 container">
      <Table>
        <TableCaption>Your latest transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Transaction Id</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
