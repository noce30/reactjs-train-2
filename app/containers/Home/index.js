/**
 *
 * Home
 *
 */
/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import BackgroundHoc from '../../components/BackgroundHoc';
import thai from '../../images/thai.jpg';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import messages from './messages';
import MenuBottom from '../../components/MenuBottom';

export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>     
        <MenuBottom/>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default BackgroundHoc(compose(withReducer,  withConnect)(Home),{
  imgUrl: thai,
  backgroundColor: "255,255,255",
  isShowNextPage: true,
  pre:"",
  next:"/youneeds",  
  title: 'Sony Trinh'
});


