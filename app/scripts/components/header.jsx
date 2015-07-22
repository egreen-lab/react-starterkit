import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <header className="clearfix">
        Application Name

        <nav className="clearfix">
          <div className="nav-item">
            <Link to="home">
              <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                <i className="material-icons">add</i>
              </button>

            </Link>
          </div>
          <div className="nav-item">
            <Link to="info">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Button
              </button>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;