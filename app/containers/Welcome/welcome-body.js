import React, { Component } from 'react'/* eslint-disable */
import styled from 'styled-components';
import icon_female from '../../images/icon_female.png';

const Container = styled.div`
width:20%;
margin:auto;
text-align:center;
`;

const Input = styled.input`
  text-align:center;
  color: #CD5677;
  border-bottom: solid 1px;
  width:100%;
  height: 40px;
`;

const Slide = styled.div`
margin-top:70px;
width:100%;
background: linear-gradient(to right, #C1527C, #522E4C);
text-align:left;
border-radius:30px;
`;

const TextUpcase = styled.span`
text-transform: uppercase;
margin-left:15px;
`

export default class WelcomeBody extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2>Welcome</h2>
                    <Input type="text" placeholder="your name here" />
                    <Slide>
                        <img src={icon_female} />
                        <TextUpcase>let's start your asessment</TextUpcase>
                    </Slide>
                </Container>
            </div>
        )
    }
}
