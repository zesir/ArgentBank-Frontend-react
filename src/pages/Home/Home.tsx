import servicesDatas from "@/assets/datas/servicesDatas.json";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TitreScreen from "@/components/TitreScreen";
const Home = () => {
  return (
    <main>
      <Hero
        subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
        text="Open a savings account with Argent Bank today!"
      />
      <section className="features">
        <TitreScreen title="Features" />
        {servicesDatas.services.map((service) => (
          <Services
            key={service.key}
            imgSrc={service.imgSrc}
            imgAlt={service.imgAlt}
            h3Text={service.h3Text}
            pText={service.pText}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
