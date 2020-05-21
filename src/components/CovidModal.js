import React, { Component } from 'react';

class CovidModal extends Component {
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
      <div className={this.state.isToggleOn ? 'modal' : 'modal-closed'}>
        <div className="modal-content wrap">
          <div className="modal-content-heading">
            Update!
          </div>
          <div className="modal-content-copy">
            Our Perrysburg and Central Ave. locations are now open normal business hours with patio
            seating available at the Central location.
          </div>
          <div className="modal-content-copy">
            Please remember that due to State guidelines, things might look
            and feel different. Extra cleaning and added space between tables is
            taking place. Good news is we are all in this together! Thank you for
            your patience.
          </div>
          <div className="modal-content-copy">
            Remember to visit our <a className="social-link" href="https://www.facebook.com/PocoPiatti/">Facebook</a> page
            for updates on food specials
            and food truck locations.
          </div>
          <div className="cta" onClick={this.handleClick}>Enter</div>
        </div>
      </div>
    );
  }
}



export default CovidModal;
