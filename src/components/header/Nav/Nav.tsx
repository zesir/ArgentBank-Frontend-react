import { useAuth } from "@/Hooks/useAuth";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Styles from "./Nav.module.scss";

type navProps = {
  to: string;
  content: string;
};

const Nav = ({ to, content }: navProps) => {
  const { token, user, setToken, setUser } = useAuth();

  const isLoggedIn = !!token && !!user;
  console.log("Nav - token:", token, "user:", user);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Link to={to} className={`${Styles["main-nav-item"]}`}>
            <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />
            {user?.userName}
          </Link>
          <Link
            to={to}
            onClick={handleLogout}
            className={`${Styles["main-nav-item"]}`}
          >
            <FontAwesomeIcon icon={faSignOut} className={Styles.fa} />
            Log-out
          </Link>
        </div>
      ) : (
        <div>
          <Link className={`${Styles["main-nav-item"]}`} to={to}>
            <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />
            {content}
          </Link>
        </div>
      )}
    </>
  );
};
export default Nav;
