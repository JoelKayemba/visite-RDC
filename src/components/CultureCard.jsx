import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #111;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Categorie = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.couleurs.bleuRDC};
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Titre = styled.h3`
  color: ${({ theme }) => theme.couleurs.rouge};
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.couleurs.gris};
`;

const CultureCard = ({ image, titre, description, categorie }) => {
  return (
    <Card>
      <Image src={image} alt={titre} />
      <CardContent>
        <Categorie>{categorie}</Categorie>
        <Titre>{titre}</Titre>
        <Description>{description}</Description>
      </CardContent>
    </Card>
  );
};

export default CultureCard;
