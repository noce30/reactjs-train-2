/**
*
* BackgroundHoc
*
*/
/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import thai from '../../images/thai.jpg';
import right from '../../images/right.png';
import back from '../../images/back.png';

const BackgroundHoc = (ComposedComponent, props) => class BackgroundHoc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const MainContainer = styled.div`
      min-height:1300px;
      width:100%;
      background-image: url(${props.imgUrl});
      background-repeat: no-repeat; 
      background-size: cover;
      background-position: center center;
      position: absolute;
    
  `;
    const ImageBackground = styled.div`    
      height:100%;
      width:100%;
      background-color: rgba(${props.backgroundColor},0.7);       
      position:absolute;
    `;

    const NextPre = styled.div`
    position:fixed;
    top:50%;
    width:100%;
    `;

    const Next = styled.a`
    float:right;
    `;

    const Pre = styled.a`
    
    `;

    return (
      <MainContainer>
        <ImageBackground>
          {props.isShowNextPage &&
            <NextPre>
              <Pre href={props.pre}><img src={back} /></Pre>
              <Next href={props.next}><img src={right} /></Next>
            </NextPre>
          }
          <ComposedComponent />
        </ImageBackground>
      </MainContainer>
    );
  }
}

export default BackgroundHoc;
