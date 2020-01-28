import React from 'react';
import styles from './ChatText.module.css';

function ChatText({
  message,
  isSelf
}) {
  const classes = [styles.chatText];
  if(isSelf) {
    classes.push(styles.selfChatText)
  }
  return (
    <div className={classes.join(' ')}>
      <div>
        {!isSelf && <span>{message.username}, </span>}
        <time>{message.date}</time>
      </div>
      <div className={styles.text}>{message.message}</div>
    </div>
  )
}

export default ChatText;
