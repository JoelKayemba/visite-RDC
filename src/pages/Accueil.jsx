import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import accueilData from "../data/accueilData";
import destinations from "../data/destinationData";
import DestinationCard from "../components/DestinationCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ========== ANIMATION VARIANTS ===========
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// ========== STYLED COMPONENTS ===========
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: url(${accueilData.imageDeFond}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  color: ${({ theme }) => theme.couleurs.blanc};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 6rem 5% 3rem;
  }
`;

const TitrePrincipal = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  text-transform: uppercase;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    max-width: 100%;
  }
`;

const Slogan = styled(motion.p)`
  font-size: 1.4rem;
  margin-top: 1rem;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

const InfosIntro = styled(motion.div)`
  position: absolute;
  bottom: 5%;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const InfoBlock = styled(motion.div)`
  flex: 1;
  min-width: 220px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.couleurs.gris};
`;

const DestinationSection = styled.section`
  background: #000;
  padding: 5rem 4%;
`;

const SectionTitre = styled(motion.h2)`
  color: white;
  text-align: center;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const DestGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImmersionSection = styled.section`
  background: #000;
  color: white;
  padding: 5rem 4%;
`;

const ImmersionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ImmersionTitre = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ImmersionTexte = styled(motion.p)`
  font-size: 0.95rem;
  max-width: 600px;
  color: ${({ theme }) => theme.couleurs.gris};
  margin-bottom: 2rem;
`;

const MiniGallery = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  img {
    width: 180px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 90%;
      height: auto;
    }
  }
`;

// ========== COMPONENT ===========
const Accueil = () => {
  return (
    <>
      <Header />
      <HeroSection id="accueil">
        <TitrePrincipal initial="hidden" whileInView="visible" variants={fadeInUp}>
          {accueilData.titrePrincipal}
        </TitrePrincipal>
        <Slogan initial="hidden" whileInView="visible" variants={fadeInUp}>
          {accueilData.slogan}
        </Slogan>
        <InfosIntro
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {accueilData.sectionsIntro.map((info, index) => (
            <InfoBlock key={index} variants={fadeInUp}>
              <strong>{info.titre}</strong>
              <p>{info.texte}</p>
            </InfoBlock>
          ))}
        </InfosIntro>
      </HeroSection>

      <DestinationSection id="destinations">
        <SectionTitre
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Destinations recommandées
        </SectionTitre>

        <DestGrid
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          {destinations.slice(0, 4).map((dest, index) => (
            <DestinationCard
              key={index}
              titre={dest.titre}
              description={dest.description}
              image={dest.image}
              region={dest.region}
            />
          ))}
        </DestGrid>
      </DestinationSection>

      <ImmersionSection>
        <ImmersionContent
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <ImmersionTitre variants={fadeInUp}>
            Voyagez et profitez
          </ImmersionTitre>
          <ImmersionTexte variants={fadeInUp}>
            La RDC est un pays magnifique à découvrir : ses paysages, sa musique, sa population chaleureuse et ses mystères. Laissez-vous emporter par la beauté du fleuve Congo, les sons de la rumba, et les traditions millénaires.
          </ImmersionTexte>

          <MiniGallery>
            <img src="/images/accueil/culture.jpeg" alt="Culture" />
            <img src="/images/accueil/afrique_centre.jpeg" alt="Afrique" />
            <img src="/images/accueil/nature.jpeg" alt="Nature" />
          </MiniGallery>
        </ImmersionContent>
      </ImmersionSection>

      <Footer />
    </>
  );
};

export default Accueil;
