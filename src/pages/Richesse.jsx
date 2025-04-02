import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import richesses from "../data/richesseData";
import Header from "../components/Header";
import Footer from "../components/Footer";

// -------- Styled Components --------
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
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  padding: 1rem;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  filter: brightness(0.8);

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
    font-size: 2.3rem;
    color: ${({ theme }) => theme.couleurs.vertRDC || "#00e676"};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.couleurs.gris || "#ccc"};
    line-height: 1.7;
  }

  span {
    margin-top: 1.2rem;
    display: inline-block;
    font-weight: 600;
    color: ${({ theme }) => theme.couleurs.rouge || "#ff5252"};
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
`;

// -------- Animations --------
const fadeSlideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageFade = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const Richesse = () => {
  return (
    <>
      <Header />
      <PageContainer id="richesses">
        {richesses.map((item, index) => (
          <Section
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {(index % 2 === 0 && (
              <>
                <ImageWrapper>
                  <Image src={item.image} alt={item.titre} variants={imageFade} />
                </ImageWrapper>
                <Content variants={fadeSlideRight}>
                  <h2>{item.titre}</h2>
                  <p>{item.description}</p>
                  <span>{item.categorie}</span>
                </Content>
              </>
            )) || (
              <>
                <Content variants={fadeSlideLeft}>
                  <h2>{item.titre}</h2>
                  <p>{item.description}</p>
                  <span>{item.categorie}</span>
                </Content>
                <ImageWrapper>
                  <Image src={item.image} alt={item.titre} variants={imageFade} />
                </ImageWrapper>
              </>
            )}
          </Section>
        ))}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Richesse;
