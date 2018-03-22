/**
 *
 * Welcome
 *
 */
/*eslint-disable */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import BackgroundHoc from '../../components/BackgroundHoc';

import injectReducer from 'utils/injectReducer';
import makeSelectWelcome from './selectors';
import reducer from './reducer';
import messages from './messages';
import WelcomeHeader from './welcome-header';
import WelcomeBody from './welcome-body';
import thai from '../../images/thai.jpg';

const Container = styled.div`
padding: 2%;
color: #FDFDFD;
`;

export class Welcome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <WelcomeHeader />
        <FormattedMessage {...messages.header} />
        <WelcomeBody></WelcomeBody>
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

export default BackgroundHoc(compose(withReducer, withConnect)(Welcome), "34, 41, 89", thai);
