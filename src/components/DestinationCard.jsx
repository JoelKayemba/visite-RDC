import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #111;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  max-width: 300px;
  transition: transform 0.3s;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Titre = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.couleurs.rouge};
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.couleurs.gris};
`;

const Region = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-style: italic;
  color: ${({ theme }) => theme.couleurs.vertRDC};
`;

const DestinationCard = ({ titre, description, image, region }) => {
  return (
    <Card>
      <Image src={image} alt={titre} />
      <CardBody>
        <Titre>{titre}</Titre>
        <Description>{description}</Description>
        <Region>{region}</Region>
      </CardBody>
    </Card>
  );
};

export default DestinationCard;
