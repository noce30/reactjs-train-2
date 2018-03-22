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
import HOC from '../Hoc';
import GenderShow from '../GenderShow';

const MenuWapper = styled.div`
  bottom: 300px;  
  width: 100%;
  justify-content: center;
  display: flex;
  position: fixed;
`;

function MenuBottom() { // eslint-disable-line react/prefer-stateless-function
  return (
    <div>
      <MenuWapper>
        <GenderShow className="p-2"/>
        <GenderShow className="p-2"/>
        <GenderShow className="p-2"/>
        <GenderShow className="p-2"/>
        <GenderShow className="p-2"/>
        <GenderShow className="p-2"/>
      </MenuWapper>   
    </div>
  );
}


export default MenuBottom;
