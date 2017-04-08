var MessageBox = React.createClass({
  handleMessageSubmit: function (message) {
    console.log('handleMessageSubmit called!');
    message.id = new Date();
    var newMessages = this.state.messages.concat(message);
    this.setState({ messages: newMessages })
  },
  getInitialState: function() {
    return {
      messages: [
        { id: 1, user: 'hoge', text: 'hogehoge' },
        { id: 2, user: 'fuga', text: 'fugafuga' }
      ]
    }
  },
  render: function() {
    var messageItems = this.state.messages.map(function(message){
      return (
        <MessageItem key={message.id} message={message} />
      );
    });

    return (
      <div className="messageBox">
        {messageItems}
        <MessageForm onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
});
