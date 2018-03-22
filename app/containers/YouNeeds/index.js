/**
 *
 * YouNeeds
 *
 */
/*eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectYouNeeds from './selectors';
import reducer from './reducer';
import Hexagon from 'components/Hexagon';
import styled from 'styled-components';
import YourConcernItem from './YourConcernItem';
import YourBudgetItem from './YourBudgetItem';
import YourNeedsItem from './YourNeedsItem';
import BackgroundHoc from '../../components/BackgroundHoc';

const Container = styled.div`
width: 100%;
margin:auto;
text-align:center;
padding:40px;
`

export class YouNeeds extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <h1>You Needs</h1>
        <YourConcernItem />
        <YourNeedsItem />
        <YourBudgetItem />
      </Container>
    );
  }
}

YouNeeds.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  youneeds: makeSelectYouNeeds(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'youNeeds', reducer });

export default BackgroundHoc(compose(withReducer, withConnect)(YouNeeds), "242, 242, 242", "../images/thai.jpg");
