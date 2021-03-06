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
import thai from '../../images/thai.jpg';

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

export default BackgroundHoc(compose(withReducer, withConnect)(YouNeeds), {
  imgUrl: thai,
  backgroundColor: "242, 242, 242",
  isShowNextPage: true,
  pre: "/home",
  next: "/gender",
  title: 'You Needs'
});
