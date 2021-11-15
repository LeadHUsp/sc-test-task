import React from 'react';
//assets
import avatar from 'assets/avatar.png';
import { ReactComponent as Flag } from 'assets/flag.svg';
import { ReactComponent as StarFilled } from 'assets/star-filled.svg';
import { ReactComponent as StarDrop } from 'assets/star-drop.svg';
const ChatBox: React.FC<{ title: string; user: boolean; name: string; prof: string }> = ({
  title,
  user,
  name,
  prof,
}) => {
  return (
    <div className='wmessager'>
      <div className='wmessager__title block-title'>{title}</div>
      <div className='wmessager__body'>
        <div className='wmessager__head'>
          <div className='wmessager__avatar'>
            <img src={avatar} alt='name' className='_fw' />
          </div>
          <div className='wmessager__persone'>
            <div className='wmessager__name'>{name}</div>

            <div className='wmessager__additional'>
              <Flag className='wmessager__icon' />
              <span>{prof}</span>
            </div>
          </div>
          <div className='wmessager__rating'>
            <div className='icon-list'>
              {[1, 2, 3, 4].map((item) => (
                <div className='icon-list__icon'>
                  <StarFilled />
                </div>
              ))}
              <StarDrop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChatList: React.FC = () => {
  return (
    <div className='chat'>
      <div className='chat__wrapper'>
        <div className='chat__window'>
          <ChatBox
            title='Чат с пользователем'
            user={true}
            name='Наталия Полянская'
            prof='Гид по Баварии, фотограф'
          />
        </div>
        <div className='chat__window'>
          <ChatBox
            title='Чат с администратором'
            user={false}
            name='Администратор'
            prof='TravelAsk'
          />
        </div>
      </div>
    </div>
  );
};
