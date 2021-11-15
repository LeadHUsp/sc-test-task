import React from 'react';

//assets
import img from 'assets/preview.jpg';
export const PreviewCard: React.FC = () => {
  return (
    <div className='pcard'>
      <div className='pcard__wrapper'>
        <div className='pcard__box'>
          <img src={img} alt='barselona' className='pcard__img' />
        </div>
        <div className='pcard__box'>
          <div className='pcard__descr'>
            <div className='pcard__title block-title'>Барселона — обзор города</div>
            <p>
              Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
              многочисленными фестивалями и гастрономическим разнообразием понравилась мне
              в первый же день пребывания и стала местом, в котором...
            </p>
            <a href='#1' className='pcard__link'>
              Читать дальше
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
