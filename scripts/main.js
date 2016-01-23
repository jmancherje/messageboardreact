import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import { Router, Route } from 'react-router';
import { History } from 'react-router';
import { createHistory } from 'history';
// render other components
import Navbar from './components/Navbar';
import AddMessageButton from './components/AddMessageButton';

@autobind
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      path : '/',
      messages : require('./sample-messages')
    }
  }

  renderMessage(key) {
    return <Message key={key} index={key} details={this.state.messages[key]} />
  }

  loadLocalMessages() {
    this.setState({
      messages : require('./sample-messages')
    })
  }

  updatePath(path) {
    this.state.path = path;
    this.setState({
      path: this.state.path
    });
  }

  render() {
    return (
      <div className="internal-app-container">
        <div className="message-container">
          {Object.keys(this.state.messages).map(this.renderMessage)}
        </div>
      </div>
    )
  }
}

class Message extends React.Component {
  render() {
    var details = this.props.details;
    return (
      <div className="single-message-block">
        <img src={details.image} alt={details.name + ' portrait'} />
        <h4 className="message-username">{details.name}</h4>
        <p className="message-content">{details.message}</p>
        <p className="message-timestamp">{details.time}</p>
      </div>
    )
  }
}

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}/>
    <Route path="/messages" component={App}/>
    <Route path="/finances" component={App}/>
    <Route path="/chores" component={App}/>
  </Router>
)
    // <Route path="*" component={NotFound}/>


ReactDOM.render(<App />, document.querySelector('.app-container'));