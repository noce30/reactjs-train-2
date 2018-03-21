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
import GenderShow from '../GenderShow';
import icon from '../../images/icon-96x96.png';
import Img from '../Img';

const Hoc = (ComposedComponent, link, name) => class extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      const HocWapper = styled.div`
      width:70px;
      height:45px;
      background:black;
      transition: height .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
      transform: rotatex(180deg) translate3d(0, -200px,0);/* the Y-Value shall be higher than the height on hover*/
      transform-origin: top;
    `;

    return (
      <HocWapper>
        <div>
          <Img src={icon} alt={name} />
        </div>
        <ComposedComponent />
        <div>
          {name}
        </div>
      </HocWapper>
    );
  }
}

Hoc.propTypes = {

};

export const Gender = Hoc((GenderShow), icon, "Gender");

export default Hoc;
