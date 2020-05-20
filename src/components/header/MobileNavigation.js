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
      <div className="mobile-navigation">
          <button
            onClick={this.handleClick}
            className={this.state.isToggleOn ? 'hamburger hamburger--slider' : 'hamburger hamburger--slider is-active'}
            >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className={this.state.isToggleOn ? 'mobile-navigation-hidden' : 'mobile-navigation-active'}>
            <div className="mobile-navigation-active-wrap">
            <Link onClick={this.handleClick} to="/">Home</Link>
            <Link onClick={this.handleClick} to="/Menu/">Menu</Link>
            <Link onClick={this.handleClick}to="/PrivateEvents/">Private Events</Link>
            <Link onClick={this.handleClick}to="/Catering/">Catering</Link>
            <Link onClick={this.handleClick}to="/About/">About</Link>
            <Link onClick={this.handleClick}to="/Contact/">Contact</Link>
        
            </div>
          </div>
        </div>
    );
  }
}



export default MobileNavigation
