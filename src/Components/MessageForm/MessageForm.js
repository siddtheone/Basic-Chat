import React from 'react';
import styles from './MessageForm.module.css';

function MessageForm({
  onMessageChange,
  onSubmit,
  message,
  onKeyPress,
}) {
  return (
    <form onSubmit={onSubmit} className={styles.messageForm}>
      <input
        placeholder="Enter message"
        onChange={onMessageChange}
        onKeyPress={onKeyPress}
        value={message}
        className={styles.messageInput}
      />
      <button type="submit" className={styles.messageSubmit}>▶</button>
    </form>
  );
}

export default MessageForm;
