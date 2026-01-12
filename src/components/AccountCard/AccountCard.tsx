import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./AccountCard.module.scss";
type AccountCardProps = {
  title: string;
  amount: number;
  description: string;
  transactionPath?: string;
};
const AccountCard = ({
  title,
  amount,
  description,
  transactionPath,
}: AccountCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (transactionPath) {
      navigate(transactionPath);
    }
  };
  return (
    <section className={`${styles["account"]}`}>
      <div className={`${styles["account-content-wrapper"]}`}>
        <h3 className={`${styles["account-title"]}`}>{title}</h3>
        <p className={`${styles["account-amount"]}`}>
          ${amount.toLocaleString()}
        </p>
        <p className={`${styles["account-amount-description"]}`}>
          {description}
        </p>
      </div>
      <div className={`${styles["account-content-wrapper"]} ${styles["cta"]}`}>
        {transactionPath && (
          <Button
            label="View Transactions"
            className="transaction-button"
            onClick={handleClick}
          />
        )}
      </div>
    </section>
  );
};
export default AccountCard;
