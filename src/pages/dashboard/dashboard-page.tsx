import { PropValue } from "@/components/prop-value";
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
      <div className="mb-10">
        <div className="bg-secondary p-8 flex justify-between">
          <div className="w-[40%]">
            <p className="text-2xl">$2,875.24</p>
            <div className="flex justify-between mt-10">
              <div className="">
                <p className="text-xs">Income</p>
                <b className="">$1,725.82</b>
              </div>
              <div className="">
                <p className="text-xs">Outcome</p>
                <b className="">$532.73</b>
              </div>
            </div>
          </div>
          <div className="w-[50%] px-4">
            <PropValue prop="Name" value="Jeseias Domingos" />
            <PropValue prop="Tax ID" value="125.3625.56-896" />
          </div>
        </div>
      </div>
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
