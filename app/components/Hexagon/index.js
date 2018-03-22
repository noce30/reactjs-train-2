/**
*
* Hexagon
*
*/
/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';

const Hexagon = (ComposedComponent, props) => class extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const Container = styled.div`
    position: relative;
    width: 300px; 
    height: 173.21px;
    background-color: ${props.color};
    margin: 10px;
    margin-top:160px;
    border-left: 3px ${props.typeBorder} ${props.colorBorder};
    border-right:3px ${props.typeBorder} ${props.colorBorder};
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    display:inline-block;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 212.13px;
    height: 212.13px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 40.9340px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    top: -106.0660px;
    border-top: 4px ${props.typeBorder} ${props.colorBorder};
    border-right:4px ${props.typeBorder} ${props.colorBorder};
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 212.13px;
    height: 212.13px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 40.9340px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    bottom: -106.0660px;
    border-bottom: 3px ${props.typeBorder} ${props.colorBorder};
    border-left: 3px ${props.typeBorder} ${props.colorBorder};
  }
`;

    const Span = styled.span`
  display: block;
  position: absolute;
  top:1.7320508075688772px;
  left: 0;
  width:294px;
  height:169.7410px;
  z-index: 2;
  background: inherit;
`;
    return (
      <Container>
        <Span></Span>
        <ComposedComponent />
      </Container>
    );
  }
}

export default Hexagon;
