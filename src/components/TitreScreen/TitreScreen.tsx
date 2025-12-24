import styles from "./TitreScreen.module.scss";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type TitreScreenProps = {
  title: string;
  level?: HeadingLevel;
};

const TitreScreen = ({ title, level = 2 }: TitreScreenProps) => {
  const Tag: React.ElementType = `h${level}`;

  return <Tag className={styles["sr-only"]}>{title}</Tag>;
};

export default TitreScreen;
