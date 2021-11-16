import React, { useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "react-image-lightbox/style.css";
import FsLightbox from "fslightbox-react";
//assets
import avatar from "assets/avatar.png";
import slide1 from "assets/slide-1.jpg";
import slide2 from "assets/slide-2.jpg";
import slide3 from "assets/slide-3.jpg";
import { ReactComponent as Like } from "assets/like.svg";
import "swiper/swiper.scss";

const ReviewsCard: React.FC<{
  openGallery: (number: number, sources: string[]) => void;
}> = ({ openGallery }) => {
  const slides = [slide1, slide2, slide3];
  return (
    <div className='rcard'>
      <div className='rcard__head'>
        <div className='rcard__avatar'>
          <img src={avatar} alt='name' className='_fw' />
        </div>
        <div className='rcard__name'>Наталия Полянская</div>
      </div>
      <div className='rcard__title'>
        <span className='rcard__title--marked'>БАРСЕЛОНА</span> — О городе:
      </div>
      <div className='rcard__body'>
        Барселона – моя третья большая любовь, после Вены и Крита. Это город, в
        который я каждый раз возвращаюсь с огромным удовольствием, всем
        рекомендую хоть раз там побывать и осмотреть ...
      </div>
      <div className='rcard__gallery'>
        <div
          onClick={() => {
            openGallery(1, slides);
          }}
          style={{ backgroundImage: `url(${slide1})` }}
          className='rcard__box'></div>
        <div
          onClick={() => {
            openGallery(2, slides);
          }}
          style={{ backgroundImage: `url(${slide2})` }}
          className='rcard__box'></div>
        <div
          onClick={() => {
            openGallery(3, slides);
          }}
          style={{ backgroundImage: `url(${slide3})` }}
          className='rcard__box'></div>
        <div
          onClick={() => {
            openGallery(3, slides);
          }}
          style={{ backgroundImage: `url(${slide3})` }}
          className='rcard__box'>
          <div className='rcard__counter'>+7</div>
        </div>
      </div>
      <div className='rcard__footer'>
        <div className='rcard__list'>
          <div className='rcard__item'>около 1 года назад</div>
          <div className='rcard__item rcard__item--separator'>
            9 комментариев
          </div>
          <div className='rcard__item rcard__item--align_end'>
            <button className='icon-btn'>
              <Like className='icon-btn__icon' />
              <span className='icon-btn__counter'>9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Reviews: React.FC = () => {
  const [lightboxController, setLightboxController] = useState<{
    toggler: boolean;
    slide: number;
    sources: string[] | undefined;
  }>({
    toggler: false,
    slide: 1,
    sources: [],
  });

  function openLightboxOnClick(number: number, sources: string[]) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
      sources,
    });
  }

  return (
    <div className='reviews'>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={lightboxController.sources}
        slide={lightboxController.slide}
      />
      <div className='reviews__title block-title'>Отзывы о Барселоне</div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".reviews__box--dots",
          type: "bullets",
          bulletClass: "reviews__dot",
          bulletActiveClass: "_active",
        }}
        spaceBetween={20}
        slidesPerView='auto'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <SwiperSlide key={index * 11} className='reviews__slide'>
            <ReviewsCard openGallery={openLightboxOnClick} />
          </SwiperSlide>
        ))}

        <span slot='container-end'> </span>
      </Swiper>
      <div className='reviews__footer'>
        <div className='reviews__box'>
          <button className='reviews__btn'>Все отзывы</button>
        </div>
        <div className='reviews__box reviews__box--dots'></div>
      </div>
    </div>
  );
};
