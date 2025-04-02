import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import destinations from "../data/destinationData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageContainer = styled.div`
  background: #000;
  color: white;
`;

const Section = styled(motion.section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem 4%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 1rem;
  position: relative;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.couleurs.vertRDC || "white"};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.couleurs.gris || "#ccc"};
    line-height: 1.6;
  }

  span {
    margin-top: 1.5rem;
    display: inline-block;
    font-weight: bold;
    color: ${({ theme }) => theme.couleurs.rouge || "#ff5b5b"};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeImg = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const Destinations = () => {
  return (
    <>
      <Header />
      <PageContainer id="destinations">
        {destinations.map((item, index) => (
          <Section
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Alternance image gauche/droite */}
            {(index % 2 === 0 && (
              <>
                <ImageContainer>
                  <Image
                    src={item.image}
                    alt={item.titre}
                    variants={fadeImg}
                  />
                </ImageContainer>
                <Content variants={fadeUp}>
                  <h2>{item.titre}</h2>
                  <p>{item.description}</p>
                  <span>{item.region}</span>
                </Content>
              </>
            )) || (
              <>
                <Content variants={fadeUp}>
                  <h2>{item.titre}</h2>
                  <p>{item.description}</p>
                  <span>{item.region}</span>
                </Content>
                <ImageContainer>
                  <Image
                    src={item.image}
                    alt={item.titre}
                    variants={fadeImg}
                  />
                </ImageContainer>
              </>
            )}
          </Section>
        ))}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Destinations;
