import styles from "./Header.module.scss";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <nav className={`${styles["main-nav"]}`}>
        <Logo src="/assets/img/argentBankLogo.png" to={"/"} />
        <Nav content={"Sign In"} to={"/sign-in"} />
      </nav>
    </>
  );
};
export default Header;
