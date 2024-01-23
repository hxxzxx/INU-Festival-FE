import { useState } from 'react';

import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import Notice from '../../types/Notice';

import 'swiper/components/pagination/pagination.min.css';
import useCheckScreenWidth from '../../hooks/useCheckScreenWidth';

const NoticeContentBox = styled.div`
background-color: #EBF2FF;
margin-top: 2.3rem;
padding: 2rem;
border-radius: 10px;
font-weight: 350;
line-height: 2.5rem; /* 160% */
letter-spacing: -0.04348rem;
white-space: pre-line;
`;

const NoticeImageContainer = styled.div`
border-radius: 1rem;
display: flex;
`;

const NoticeImageBox = styled.img`
width: 15rem;
border-radius: 1rem;
margin: 2rem 0.6rem;
`;

type NoticeItemProps = {
    notice: Notice;
}

export default function NoticeBottom({ notice } : NoticeItemProps) {
  const [perview, setPerView] = useState(3);

  useCheckScreenWidth(setPerView);

  return (
    <NoticeContentBox>
      {notice.content}
      <Swiper
        slidesPerView={perview}
        spaceBetween={10}
        allowTouchMove
        freeMode
        freeModeMinimumVelocity={0.01}
      >
        <NoticeImageContainer>
          {
            notice.img.map((imgsrc, index) => {
              const key = `${imgsrc} + ${index}`;
              return (
                <SwiperSlide key={key}>
                  <NoticeImageBox src={imgsrc} />
                </SwiperSlide>
              );
            })
          }
        </NoticeImageContainer>
      </Swiper>
    </NoticeContentBox>
  );
}