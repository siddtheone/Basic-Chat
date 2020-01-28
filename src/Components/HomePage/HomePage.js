import React from 'react';

import ChatWindow from '../ChatWindow';
import MessageForm from '../MessageForm';

class HomePage extends React.Component {
  changeMessage = e => {
    const {changeHome} = this.props;
    changeHome({name: 'message', value: e.target.value});
  }

  onKeyPress = e => {
    const {isShortCut} = this.props;
    if(isShortCut === "true" && e.ctrlKey && (['Enter', '\n'].indexOf(e.key) > -1)) {
      this.onSubmit();
    }
  }

  onSubmit = e => {
    if(e) {
      e.preventDefault();
    }
    const {sendMessage, message, username} = this.props;
    if(!message) {
      return;
    }
    sendMessage(message, username);
  }

  render() {
    const {
      message,
    } = this.props;
    return (
      <>
        <ChatWindow />
        <MessageForm
          onMessageChange={this.changeMessage}
          message={message}
          onKeyPress={this.onKeyPress}
          onSubmit={this.onSubmit}
        />
      </>
    )
  }
}

export default HomePage;
