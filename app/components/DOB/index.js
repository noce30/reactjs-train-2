/**
*
* GenderShow
*
*/
/*eslint-disable*/
import React from 'react';
import iconDob from '../../images/icon_dob.png';
import styled from 'styled-components';
import HOC from '../Hoc';
import Img from '../Img';

const ImageWapper = styled.div`
    margin-bottom: 5px;   
  `;

const GenderContainer = styled.div`
    margin-top: 50px;
  `;

function DOB() {
  return (
    <GenderContainer>
      <ImageWapper className="bt">
        <Img src={iconDob} />
      </ImageWapper>
    </GenderContainer>
  );
}

export default HOC((DOB), iconDob, 'DOB');
