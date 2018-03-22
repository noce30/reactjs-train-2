/**
*
* Hoc
*
*/
/*eslint-disable*/
import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import icon from '../../images/icon_female.png';
import Img from '../Img';

const Hoc = (ComposedComponent, link, name) => class extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <div>

        <div className="hoc-container">
          <div>
            <Img src={icon} alt={name} />
          </div>
          <ComposedComponent />
        </div>
        <div className="menu-text">
          {name}
        </div>
      </div>
    );
  }
}

Hoc.propTypes = {

};

export default Hoc;
