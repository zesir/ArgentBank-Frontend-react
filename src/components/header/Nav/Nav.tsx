import { useAuth } from "@/Hooks/useAuth";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Nav.module.scss";

const Nav = () => {
  const { token, user, setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const isLoggedIn = !!token && !!user;
  console.log("Nav - token:", token, "user:", user);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Link to={"/user?edit=true"} className={`${Styles["main-nav-item"]}`}>
            <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />
            {user?.userName}
          </Link>

          <button
            onClick={handleLogout}
            className={`${Styles["main-nav-item"]}`}
          >
            <FontAwesomeIcon icon={faSignOut} className={Styles.fa} />
            Log-out
          </button>
        </div>
      ) : (
        <div>
          <Link className={`${Styles["main-nav-item"]}`} to={"/sign-in"}>
            <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />
            Sign In
          </Link>
        </div>
      )}
    </>
  );
};
export default Nav;
