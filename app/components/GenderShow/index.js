/**
*
* GenderShow
*
*/
/*eslint-disable*/
import React from 'react';
import icon from '../../images/icon_female.png';
import styled from 'styled-components';
import HOC from '../Hoc';
import Img from '../Img';

const ImageWapper = styled.div`
    margin-bottom: 5px;   
  `;
  
  const GenderContainer = styled.div`
    margin-top: 50px;
  `;

function GenderShow() {
  return (
    <GenderContainer>
      <ImageWapper className="bt">
        <Img src={icon} />
      </ImageWapper>
      <ImageWapper className="bt">
        <Img src={icon} />
      </ImageWapper>
    </GenderContainer>
  );
}

export default HOC((GenderShow), icon, 'Gender');
