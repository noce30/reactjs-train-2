/**
*
* GenderShow
*
*/
/*eslint-disable*/
import React from 'react';
import iconKid from '../../images/icon_kids.png';
import styled from 'styled-components';
import HOC from '../Hoc';
import Img from '../Img';

const ImageWapper = styled.div`
    margin-bottom: 5px;   
  `;

const GenderContainer = styled.div`
    margin-top: 50px;
  `;

function Kid() {
  return (
    <GenderContainer>
      <ImageWapper className="bt">
        <Img src={iconKid} />
      </ImageWapper>
    </GenderContainer>
  );
}

export default HOC((Kid), iconKid, 'Kid');
