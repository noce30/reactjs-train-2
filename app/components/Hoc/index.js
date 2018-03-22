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

const MenuText = styled.div`
    font-weight: bold;
    color: #29317A;
    position: fixed;
    margin: 0 25px;
    bottom: 3%;
    width: 70px;
    text-align: center;
`;

const Hoc = (ComposedComponent, icon, name) => class extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <div>
     
        <div className="hoc-container">
          <div>
            <Img src={icon} alt={name} />
          </div>
          <ComposedComponent />
        </div>
        <MenuText>
          {name}
        </MenuText>
      </div>
    );
  }
}

Hoc.propTypes = {

};

export default Hoc;
