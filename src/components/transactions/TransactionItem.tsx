import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transaction } from "../../store/TransactionsSlice";

const TransactionItem: React.FC<Transaction> = ({
  name,
  info,
  amount,
  icon,
  date,
  time,
  invoice,
}) => {
  return (
    <li className="transactions__item">
      <div className="transactions__name">
        <FontAwesomeIcon icon={faShoppingBag as IconProp} />
        <div>{name}</div>
      </div>
      <p>{date}</p>
      <p>{time}</p>
      <p>{amount} &#8381;</p>
      <p>{info}</p>
      <p>{invoice}</p>
    </li>
  );
};

export default TransactionItem;
