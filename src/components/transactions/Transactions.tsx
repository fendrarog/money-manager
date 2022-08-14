import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTransactions } from "../../store/TransactionsSlice";
import TransactionList from "./TransactionList";
import classNames from "classnames";

const Transactions: React.FC = () => {
  const dispatch = useAppDispatch();
  const { load, error } = useAppSelector((state) => state.transactions);
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <section className={classNames("page__transactions", "transactions")}>
      <div className="transactions__container">
        <div className="transactions__body">
          {load && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>}
          <TransactionList />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
