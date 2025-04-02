// src/data/accueilData.js

const accueilData = {
  titrePrincipal: "VISITE RDC",
  slogan:
    "Découvrez la beauté, la richesse et l’histoire de la République Démocratique du Congo.",
  imageDeFond: "/images/accueil/rdc_hero.jpg",

  sectionsIntro: [
    {
      titre: "Un pays au cœur de l’Afrique",
      texte:
        "La RDC, vaste et majestueuse, vous offre une diversité incroyable de paysages, cultures et expériences humaines. Des forêts tropicales aux volcans en éruption, chaque région vous surprendra.",
      image: "/images/accueil/afrique_centre.jpeg",
    },
    {
      titre: "Explorez nos merveilles naturelles",
      texte:
        "Parcs nationaux, rivières légendaires, chutes d’eau spectaculaires… Le patrimoine naturel congolais est l’un des plus riches du monde.",
      image: "/images/accueil/nature.jpeg",
    },
    {
      titre: "Une culture vibrante",
      texte:
        "Musique, danses, artisanat, tenues traditionnelles et cuisines : plongez dans l’identité culturelle forte de la RDC.",
      image: "/images/accueil/culture.jpeg",
    },
  ],

  liensRapides: [
    { label: "L’histoire du pays", lien: "/histoire" },
    { label: "Destinations à visiter", lien: "/destinations" },
    { label: "Nos richesses", lien: "/richesses" },
    { label: "Culture congolaise", lien: "/culture" },
  ],

  gallery: [
    {
      url: "/images/accueil/rdc_hero.jpg",
      titre: "VISITE RDC",
      texte:
        "Découvrez la beauté, la richesse et l’histoire de la République Démocratique du Congo.",
    },
    {
      url: "/images/accueil/nature.jpeg",
      titre: "Beauté naturelle",
      texte: "Explorez les parcs, rivières et paysages spectaculaires du pays.",
    },
    {
      url: "/images/accueil/culture.jpeg",
      titre: "Culture vivante",
      texte: "Une culture riche : musique, artisanat, danse, tradition...",
    },
    {
      url: "/images/accueil/afrique_centre.jpeg",
      titre: "Cœur de l’Afrique",
      texte:
        "La RDC, au centre du continent africain, regorge de diversité et d’histoire.",
    },
  ],
};

export default accueilData;
