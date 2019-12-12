import React, { Component } from 'react';
import { Link } from "gatsby";

class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="MobileNavigation">
          <button
            onClick={this.handleClick}
            className={this.state.isToggleOn ? 'hamburger hamburger--slider' : 'hamburger hamburger--slider is-active'}
            >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className={this.state.isToggleOn ? 'MobileNavigationHidden' : 'MobileNavigationActive'}>
                <Link
                  onClick={this.handleClick}
                  to="/">
                  <h5>Home</h5>
                </Link>
                <Link
                  onClick={this.handleClick}
                  to="/Menu/">
                  <h5>Menu</h5>
                </Link>
                <Link
                  onClick={this.handleClick}
                  to="/PrivateEvents/">
                  <h5>Private Events</h5>
                </Link>
                <Link
                  onClick={this.handleClick}
                  to="/Catering/">
                  <h5>Catering</h5>
                </Link>
                <Link
                  onClick={this.handleClick}
                  to="/About/">
                  <h5>About</h5>
                </Link>
                <Link
                  onClick={this.handleClick}
                  to="/Contact/">
                <h5>Contact</h5>
              </Link>
          </div>
        </div>
    );
  }
}



export default MobileNavigation
