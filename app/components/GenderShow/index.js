/**
*
* GenderShow
*
*/
/*eslint-disable*/
import React from 'react';
import icon from '../../images/icon-96x96.png';
import styled from 'styled-components';
import HOC from '../Hoc';
import Img from '../Img';

function GenderShow() {

  const ImageWapper = styled.div`
    margin-bottom: 10px;
  `;


  return (
    <div>
      <ImageWapper>
        <Img src={icon} />
      </ImageWapper>
      <ImageWapper>
        <Img src={icon} />
      </ImageWapper>
    </div>
  );

}



export default HOC((GenderShow), icon, 'Gender');
