/**
*
* MenuBottom
*
*/
/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import GenderShow from '../GenderShow';
import Kid from '../Kid';
import DOB from '../DOB';
import MaritalStatus from '../MaritalStatus';
import Smoking from '../Smoking';
import Occupation from '../Occupation';

const MenuWapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  bottom: 0;
  margin-top: 320px;
  @media(min-height: 1200px){
    margin-top: 650px;
  }
`;

function MenuBottom() { // eslint-disable-line react/prefer-stateless-function
  return (
      <MenuWapper>
        <GenderShow className="p-2"/>
        <DOB className="p-2"/>
        <MaritalStatus className="p-2"/>
        <Kid className="p-2"/>
        <Occupation className="p-2"/>
        <Smoking className="p-2"/>
      </MenuWapper>   
  );
}


export default MenuBottom;
