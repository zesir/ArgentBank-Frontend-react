import TitreScreen from "@/components/TitreScreen";
import styles from "./Hero.module.scss";

type HeroProps = {
  subtitles: string[];
  text: string;
};
const Hero = ({ subtitles, text }: HeroProps) => {
  return (
    <div className={`${styles["hero"]}`}>
      <section className={`${styles["hero-content"]}`}>
        <TitreScreen title="Promoted Content" />
        {subtitles.map((subtitle, index) => (
          <p key={index} className={styles.subtitle}>
            {subtitle}
          </p>
        ))}
        <p className={`${styles["text"]}`}>{text}</p>
      </section>
    </div>
  );
};

export default Hero;
