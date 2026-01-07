import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginForm from "./components/LoginForm/LoginForm";
import styles from "./LogCard.module.scss";

const LogCard = () => {
  return (
    <div className="log-card">
      <FontAwesomeIcon
        icon={faUserCircle}
        className={`${styles["sign-in-icon"]}`}
      />
      <h1>Sign In</h1>
      <LoginForm />
    </div>
  );
};
export default LogCard;
