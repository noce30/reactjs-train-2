/**
*
* Img
*
*/

import React from 'react';
// import styled from 'styled-components';

function Img(props) { /*eslint-disable*/
  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  );
}

Img.propTypes = {

};

export default Img;
