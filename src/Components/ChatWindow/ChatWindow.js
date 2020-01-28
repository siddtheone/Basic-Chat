import React from 'react';
import styles from './ChatWindow.module.css';
import ChatText from '../ChatText';
import {getTime} from '../../helpers/time';

function ChatWindow({
  messages,
  ownMessages,
  is12Hours,
}) {
  return (
    <div className={[styles.chatWindow].join(' ')}>
      {messages.map(m => <ChatText key={m.chatId} message={{...m, date: getTime(m.date, is12Hours)}} isSelf={ownMessages.findIndex(e => e === m.chatId) > -1} />)}
    </div>
  );
}

export default ChatWindow;
