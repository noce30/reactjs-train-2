/**
*
* GenderShow
*
*/
/*eslint-disable*/
import React from 'react';
import iconOcc from '../../images/icon_occupation.png';
import styled from 'styled-components';
import HOC from '../Hoc';
import Img from '../Img';

const ImageWapper = styled.div`
    margin-bottom: 5px;   
  `;

const GenderContainer = styled.div`
    margin-top: 50px;
  `;

function Occupation() {
  return (
    <GenderContainer>
      <ImageWapper className="bt">
        <Img src={iconOcc} />
      </ImageWapper>
    </GenderContainer>
  );
}

export default HOC((Occupation), iconOcc, 'Occupation');
