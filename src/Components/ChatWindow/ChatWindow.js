import React from 'react';
import styles from './ChatWindow.module.css';
import ChatText from '../ChatText';

function ChatWindow({
  messages,
  ownMessages,
}) {
  // TODO: Correct reverse
  return (
    <div className={[styles.chatWindow].join(' ')}>
      {messages.map(m => <ChatText key={m.chatId} message={m} isSelf={ownMessages.findIndex(e => e === m.chatId) > -1} />)}
    </div>
  );
}

export default ChatWindow;
