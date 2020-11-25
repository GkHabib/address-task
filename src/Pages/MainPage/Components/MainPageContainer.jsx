import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNewAuthenticationCodeRequest } from '../Redux/Actions/index';
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
    const { postNewAuthenticationCodeRequestAction } = this.props;
    return (
      <MainPage
        onRequestNewCodeFromServer={postNewAuthenticationCodeRequestAction}
      />
    );
  }
}

MainPageContainer.propTypes = {
  postNewAuthenticationCodeRequestAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postNewAuthenticationCodeRequestAction: phoneNumber => dispatch(postNewAuthenticationCodeRequest(phoneNumber)),
});

export default connect(null, mapDispatchToProps)(MainPageContainer);
