import styles from "./Services.module.scss";

type ServicesProps = {
  imgSrc: string;
  imgAlt: string;
  h3Text: string;
  pText: string;
};
const Services = ({ imgSrc, imgAlt, h3Text, pText }: ServicesProps) => {
  return (
    <div className={`${styles["feature-item"]}`}>
      <img src={imgSrc} alt={imgAlt} className={`${styles["feature-icon"]}`} />
      <h3 className={`${styles["feature-item-title"]}`}>{h3Text}</h3>
      <p>{pText}</p>
    </div>
  );
};

export default Services;
