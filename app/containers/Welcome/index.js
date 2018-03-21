/**
 *
 * Welcome
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectWelcome from './selectors';
import reducer from './reducer';
import messages from './messages';
import WelcomeHeader from './welcome-header';
import WelcomeBody from './welcome-body';
import thai from '../../images/thai.jpg';

const Container = styled.div`
min-height:1000px;
width:100%;
background-image:url(${thai});
position:absolute;
background-repeat:no-repeat;
background-size: cover;
background-position: center center;
`;

const ContainerImage = styled.div`
padding: 2%;
height:100%;
width:100%;
background-color:rgba(34, 41, 89,0.9);
color: #FDFDFD;
position:absolute;
`;

export class Welcome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <ContainerImage>
          <WelcomeHeader />
          <FormattedMessage {...messages.header} />
          <WelcomeBody></WelcomeBody>
        </ContainerImage>
      </Container>
    );
  }
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  welcome: makeSelectWelcome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'welcome', reducer });

export default compose(
  withReducer,
  withConnect,
)(Welcome);
