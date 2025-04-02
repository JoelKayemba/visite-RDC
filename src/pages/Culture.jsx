import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Header from "../components/Header";
import Footer from "../components/Footer";
import culture from "../data/cultureData";
import accueilData from "../data/accueilData";
import TypewriterText from "../components/TyperwriterText";

const PageContainer = styled.section`
  min-height: 100vh;
  background: url(${accueilData.imageDeFond}) center/cover no-repeat;
  background-attachment: fixed;
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height:150vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  z-index: 0;
`;

const SwiperContainer = styled.div`
  z-index: 1;
  position: relative;
  padding: 2rem;
`;

const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  border-radius: 16px;
  z-index: 1;
`;

const Image = styled.img`
  width: 280px;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  filter: brightness(0.85);
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  width: 40%;
  max-width: 600px;
  z-index: 2;
  text-align: left;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 15%;
    left: 5%;
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  line-height: 1.6;
  margin-top: 1rem;
`;

const NavButton = styled.div`
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 3;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = styled(NavButton)`
  left: 1rem;
`;

const NextButton = styled(NavButton)`
  right: 1rem;
`;

const Culture = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();

  const handleDone = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <Header />
      <PageContainer id="culture">
        <Overlay />

        <TextOverlay>
          <Title>
          <Title>{culture[activeIndex].titre}</Title>
          </Title>
          <Description>
            <TypewriterText
              key={activeIndex + "-desc"}
              text={culture[activeIndex].description}
              speed={80}
              onDone={handleDone}
            />
          </Description>
        </TextOverlay>

        <SwiperContainer>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {culture.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "280px" }}>
                <SlideContent>
                  <ImageWrapper>
                    <Image src={item.image} alt={item.titre} />
                    <ImageOverlay />
                  </ImageWrapper>
                </SlideContent>
              </SwiperSlide>
            ))}

            <PrevButton className="custom-prev">‹</PrevButton>
            <NextButton className="custom-next">›</NextButton>
          </Swiper>
        </SwiperContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Culture;
