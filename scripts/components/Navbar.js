import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';


@autobind
class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar-toggle-bar">
          <li className="navbar-toggle" onClick={this.navMessages} >Messages</li>
          <li className="navbar-toggle" onClick={this.navFinance} >Finance</li>
          <li className="navbar-toggle" onClick={this.navChores} >Chores</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Navbar />, document.querySelector('.navbar-container'));