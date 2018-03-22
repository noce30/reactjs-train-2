import React, { Component } from 'react';/*eslint-disable */
import Hexagon from 'components/Hexagon/index';
import styled from 'styled-components';
import icon_hand from '../../images/icon_hand.png';

const Content = styled.div`
    z-index: 10;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align:center;
    width: 300px; 
`;

const Text = styled.h3`
text-transform:uppercase;
color:rgb(45, 53, 124);
margin-top: 20px;
`;

class YourConcernItem extends Component {
    
    render() {
        return (
            <Content>
                <img src={icon_hand} />
                <br/>
                <Text>your needs</Text>
            </Content>
        )
    }
}

export default Hexagon(YourConcernItem,
    {
        colorBorder: "rgb(45, 53, 124)",
        color: "rgb(237, 237, 238)",
        typeBorder: "solid"
    });
