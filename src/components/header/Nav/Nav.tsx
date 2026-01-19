import type { AppDispatch, RootState } from "@/redux/store";
import { logout } from "@/redux/userSlice";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Nav.module.scss";

const Nav = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = user.isLoggedIn;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="link-container">
          <Link to={"/user?edit=true"} className={Styles["main-nav-item"]}>
            <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />

            {user.userName}
          </Link>

          <button onClick={handleLogout} className={Styles["main-nav-item"]}>
            <FontAwesomeIcon icon={faSignOut} className={Styles.fa} />
            Log-out
          </button>
        </div>
      ) : (
        <div>
          <Link className={Styles["main-nav-item"]} to={"/sign-in"}>
            <FontAwesomeIcon icon={faUserCircle} className={Styles.fa} />
            Sign In
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
