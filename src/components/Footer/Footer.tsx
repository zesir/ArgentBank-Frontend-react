import styles from "./Footer.module.scss";
type footerProps = {
  footerText: string;
};
const Footer = ({ footerText }: footerProps) => {
  return (
    <footer className={`${styles["footer"]}`}>
      <p className={`${styles["footer-text"]}`}>{footerText}</p>
    </footer>
  );
};
export default Footer;
