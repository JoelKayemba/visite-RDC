import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  max-width: 320px;
  transition: transform 0.3s;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Categorie = styled.span`
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  background: ${({ theme }) => theme.couleurs.rouge};
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const Titre = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.couleurs.vertRDC};
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.couleurs.gris};
`;

const RichesseCard = ({ titre, description, image, categorie }) => {
  return (
    <Card>
      <Image src={image} alt={titre} />
      <CardBody>
        <Categorie>{categorie}</Categorie>
        <Titre>{titre}</Titre>
        <Description>{description}</Description>
      </CardBody>
    </Card>
  );
};

export default RichesseCard;
