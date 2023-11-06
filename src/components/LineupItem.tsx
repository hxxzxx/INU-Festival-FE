import { styled } from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


type LineupItemProps = {
    perView: number;
    spaceBetween: number;
    demoImgList: string[];
  }
  
export default function LineupItem({perView, spaceBetween, demoImgList}: LineupItemProps) {
    const Container = styled.div`
      width: 224px;
      height: 21rem;
      position: relative;
      margin-bottom: 20px;
  
    img {
      width: 100%;
      height: 21rem;
      border-radius: 0.9rem;
      box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
    }
  `;
  
    const check = perView > demoImgList.length ? false : true;
    return ( 
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={Math.min(perView, demoImgList.length)}
        speed={300}
        pagination={{ clickable: true }}
        loop={check}
        allowTouchMove={true}
      >
        {demoImgList.map((img, index) => {
          const key = `${index}-${img}`
          return (
            <SwiperSlide key={key}>
              <Container data-hash={key}>
                <img src={img} />
              </Container>
            </SwiperSlide>)
        })}
      </Swiper>
    );
  }
  
  