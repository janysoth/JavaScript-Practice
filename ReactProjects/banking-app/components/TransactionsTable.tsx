import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date));
          const amount = formatAmount(t.amount);

          const isDebit = t.type === 'debit';
          const isCredit = t.type === 'credit';

          return (
            <TableRow key={t.id}>
              {/* Transaction Table Cell */}
              <TableCell>
                <div>
                  <h1>
                    {removeSpecialCharacters(t.name)}
                  </h1>
                </div>
              </TableCell>

              {/* Amount Table Cell */}
              <TableCell>
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>

              {/* Status Table Cell */}
              <TableCell>
                {status}
              </TableCell>

              {/* Date Table Cell */}
              <TableCell>
                {formatDateTime(new Date(t.date)).dateTime}
              </TableCell>

              {/* Payment Channel Table Cell */}
              <TableCell>
                {t.paymentChannel}
              </TableCell>

              {/* Category Table Cell */}
              <TableCell>
                {t.category}
              </TableCell>

            </TableRow>
          );
        })}
      </TableBody>
    </Table>

  )
}

export default TransactionsTable