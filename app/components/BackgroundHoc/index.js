/**
*
* BackgroundHoc
*
*/
/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import thai from '../../images/thai.jpg';

const BackgroundHoc = (ComposedComponent, backgroundColor, imageUrl) => class BackgroundHoc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const MainContainer = styled.div`
      min-height:1300px;
      width:100%;
      background-image: url(${thai});
      background-repeat: no-repeat; 
      background-size: cover;
      background-position: center center;
  `;
    const ImageBackground = styled.div`
       padding: 2%;
      height:100%;
      width:100%;
      background-color: rgba($color: #ffffff, $alpha: 0.9);
      color: #FDFDFD;
      position:absolute;
    `;

    return (
      <MainContainer>
        <ImageBackground>
          <ComposedComponent />
        </ImageBackground>
      </MainContainer>
    );
  }
}

export default BackgroundHoc;
