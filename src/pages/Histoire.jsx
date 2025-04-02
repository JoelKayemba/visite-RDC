import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import histoire from "../data/histoireData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageContainer = styled.section`
  background: #000;
  color: white;
  padding: 6rem 4%;
`;

const Titre = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
`;

const Bloc = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${({ align }) =>
      align === "right"
        ? css`
            flex-direction: row-reverse;
          `
        : align === "center"
        ? css`
            justify-content: center;
            flex-direction: column;
            text-align: center;
          `
        : ""}
  }
`;

const Image = styled(motion.img)`
  width: ${({ orientation }) => (orientation === "portrait" ? "220px" : "300px")};
  height: ${({ orientation }) => (orientation === "portrait" ? "340px" : "200px")};
  object-fit: cover;
  border-radius: 10px;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Contenu = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  max-width: 600px;
`;

const Date = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.couleurs.gris};
`;

const TitreEtape = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.couleurs.vertRDC};
  margin: 0.3rem 0 1rem;
`;

const Texte = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.couleurs.gris};
  line-height: 1.6;
  white-space: pre-wrap;
`;

const fadeAndSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const typingText = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const Histoire = () => {
  return (
    <>
      <Header />
      <PageContainer id="histoire">
        <Titre>Histoire de la RDC</Titre>

        {histoire.map((event, index) => {
          const align =
            index % 3 === 0
              ? "left"
              : index % 3 === 1
              ? "right"
              : "center";

          return (
            <Bloc
              key={index}
              align={align}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeAndSlide}
              custom={index}
            >
              <Image
                src={event.image}
                alt={event.titre}
                orientation={event.orientation}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              <Contenu>
                <Date>{event.date}</Date>
                <TitreEtape>{event.titre}</TitreEtape>
                <Texte
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={typingText}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {event.texte}
                </Texte>
              </Contenu>
            </Bloc>
          );
        })}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Histoire;
