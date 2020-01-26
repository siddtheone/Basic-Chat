import React from 'react';

function MessageForm({
  onMessageChange,
  onSubmit,
  message,
  onKeyPress,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Enter message"
        onChange={onMessageChange}
        onKeyPress={onKeyPress}
        value={message}
      />
      <button type="submit">▶</button>
    </form>
  );
}

export default MessageForm;
