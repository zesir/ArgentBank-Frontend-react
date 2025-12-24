import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Styles from "./Nav.module.scss";

type navProps = {
  to: string;
  content: string;
};

const Nav = ({ to, content }: navProps) => {
  return (
    <div>
      <Link className={`${Styles["main-nav-item"]}`} to={to}>
        <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />
        {content}
      </Link>
    </div>
  );
};
export default Nav;
