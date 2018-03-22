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
      position: fixed;
    
  `;
    const ImageBackground = styled.div`    
      height:100%;
      width:100%;
      background-color: rgba(${backgroundColor},0.7);       
      position:fixed;
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
