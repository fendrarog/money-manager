import { useAppSelector } from "../../app/hooks";
import TransactionItem from "./TransactionItem";

const TransactionList: React.FC = () => {
  const { list } = useAppSelector((state) => state.transactions);
  return (
    <ul className="transactions__items">
      {list.map((transaction) => (
        <TransactionItem key={transaction.date} {...transaction} />
      ))}
    </ul>
  );
};

export default TransactionList;
