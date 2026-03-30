import TitreScreen from "@/components/TitreScreen";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

type LogoProps = {
  src?: string;
  alt?: string;
  className?: string;
  to: string;
};

const Logo = ({ src, alt, className, to }: LogoProps) => {
  return (
    <Link className={`${styles["main-nav-logo"]} ${className}`} to={to}>
      <img
        className={`${styles["main-nav-logo-image"]}`}
        src={src}
        alt={alt || "Argent Bank Logo"}
      />
      <TitreScreen title="Argent Bank" level={1} />
    </Link>
  );
};
export default Logo;
