import React, { Component } from 'react';
import axios from 'axios'
import './E2container.css';

class E2container extends Component {
  constructor(props) {
    super(props);
    this.state = {display: { is_guest: 0} };
    axios.get('http://localhost:8888/api/sessions').then(function (response) {
      this.setState(response.data);
    }.bind(this));
  };

  render() {
    let guestbanner = null;
    if(this.state.display.is_guest)
    {
      guestbanner = <p>Guest User!</p>
    }

    return (
      <div className="E2container">
       <p>E2 UI</p>
       {guestbanner}
      </div>
    );
  }
}

export default E2container;
