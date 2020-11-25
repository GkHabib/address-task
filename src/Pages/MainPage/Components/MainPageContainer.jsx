import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <MainPage />
    );
  }
}

MainPageContainer.propTypes = {

};

const mapDispatchToProps = dispatch => ({
  // podLoginSuccessAction: token => dispatch(podLoginSuccess(token)),
});

export default connect(null, mapDispatchToProps)(MainPageContainer);
