import React, { useState, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
//assets
import avatar from "assets/avatar-admin.png";
import avatarUser from "assets/avatar-user.png";
import { ReactComponent as Flag } from "assets/flag.svg";
import { ReactComponent as StarFilled } from "assets/star-filled.svg";
import { ReactComponent as StarDrop } from "assets/star-drop.svg";
import { ReactComponent as Send } from "assets/send.svg";

interface MessageStateInterface {
  id: number;
  role: "admin" | "user";
  avatar: string;
  message: string;
  date: string;
}
interface MessageComponentInterface extends MessageStateInterface {
  currentRole: "admin" | "user";
}
const Message: React.FC<MessageComponentInterface> = ({
  avatar,
  message,
  date,
  role,
  currentRole,
}) => {
  return (
    <div className={`message`}>
      <div
        className={`${
          currentRole === role ? "_current" : ""
        } message__wrapper`}>
        <div className='message__avatar'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='message__content'>
          <span className='message__msg'>{message}</span>
          <span className='message__note'>{date}</span>
        </div>
      </div>
    </div>
  );
};
const ChatBox: React.FC<{
  title: string;
  user: boolean;
  name: string;
  prof: string;
  send: (role: "admin" | "user", avatar: string, message: string) => void;
  currentRole: "admin" | "user";
  messages: MessageStateInterface[];
}> = ({ title, user, name, prof, messages, currentRole, send }) => {
  const [message, setMessage] = useState<string>("");
  const scroolbar = useRef<Scrollbars>(null);
  const [scrollHeight, setScrollHeight] = useState<number | null>(null);

  return (
    <div className='wmessager'>
      <div className='wmessager__title block-title'>{title}</div>
      <div className='wmessager__body'>
        <div className='wmessager__head'>
          <div className='wmessager__avatar'>
            <img src={user ? avatar : avatarUser} alt='name' className='_fw' />
          </div>
          <div className='wmessager__persone'>
            <div className='wmessager__name'>{name}</div>

            <div className='wmessager__additional'>
              <Flag className='wmessager__icon' />
              <span>{prof}</span>
            </div>
          </div>
          {!user && (
            <div className='wmessager__rating'>
              <div className='icon-list'>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className='icon-list__icon'>
                    <StarFilled />
                  </div>
                ))}
                <StarDrop />
              </div>
            </div>
          )}
        </div>

        <div className='wmessager__list'>
          <Scrollbars
            ref={scroolbar}
            autoHeight
            autoHeightMin={100}
            autoHeightMax={495}
            onUpdate={(value) => {
              if (value.scrollHeight !== scrollHeight) {
                setScrollHeight(value.scrollHeight);
                scroolbar.current?.scrollToBottom();
              }
            }}
            style={{ height: "495px" }}
            renderThumbVertical={(props) => (
              <div {...props} className='wmessager__track' />
            )}>
            {messages.map((item) => (
              <Message key={item.id} {...item} currentRole={currentRole} />
            ))}
          </Scrollbars>
        </div>
      </div>
      <div className='wmessager__footer'>
        <div className='wmessager__avatar'>
          <img src={user ? avatarUser : avatar} alt='name' className='_fw' />
        </div>
        <div className='wmessager__field'>
          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            type='text'
            className='wmessager__input'
            placeholder='Напишите сообщение...'
            value={message}
          />
        </div>
        <button
          className='wmessager__send'
          onClick={() => {
            send(currentRole, user ? avatarUser : avatar, message);
            scroolbar.current?.scrollToBottom();
            setMessage("");
          }}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export const ChatList: React.FC = () => {
  const [messages, setMessages] = useState<MessageStateInterface[]>([
    {
      id: 43453,
      role: "user",
      avatar: avatarUser,
      message: "Здравствуйте",
      date: "Вчера в 18:45",
    },
    {
      id: 3456,
      role: "admin",
      avatar: avatar,
      message: "Здравствуйте, чем могу Вам помочь?",
      date: "Вчера в 18:45",
    },
    {
      id: Date.now(),
      role: "user",
      avatar: avatarUser,
      message:
        "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
      date: "Вчера в 18:45",
    },
    {
      id: 888,
      role: "admin",
      avatar: avatar,
      message:
        "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
      date: "Вчера в 18:45",
    },
    {
      id: 44545,
      role: "user",
      avatar: avatarUser,
      message:
        "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
      date: "Вчера в 18:45",
    },
    {
      id: 990,
      role: "admin",
      avatar: avatar,
      message:
        "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования ",
      date: "Вчера в 18:45",
    },
  ]);
  const sendMessageHandler = (
    role: "admin" | "user",
    avatar: string,
    message: string
  ) => {
    const messageObj = {
      id: 0,
      role,
      avatar,
      message,
      date: "",
    };
    const date = Date.now();
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    messageObj.date = `Сегодня ${hours}:${minutes}`;
    messageObj.id = date;
    setMessages((prev) => [...prev, messageObj]);
  };
  return (
    <div className='chat'>
      <div className='chat__wrapper'>
        <div className='chat__window'>
          <ChatBox
            title='Чат с пользователем'
            user={false}
            name='Наталия Полянская'
            prof='Гид по Баварии, фотограф'
            currentRole='admin'
            messages={messages}
            send={sendMessageHandler}
          />
        </div>
        <div className='chat__window'>
          <ChatBox
            title='Чат с администратором'
            user={true}
            name='Администратор'
            prof='TravelAsk'
            currentRole='user'
            messages={messages}
            send={sendMessageHandler}
          />
        </div>
      </div>
    </div>
  );
};
