import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNewAuthenticationCodeRequest, postConfirmationCodeRequest } from '../Redux/Actions/index';
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
    const { postNewAuthenticationCodeRequestAction, postConfirmationCodeRequestAction, auth } = this.props;
    return (
      <MainPage
        onRequestNewCodeFromServer={postNewAuthenticationCodeRequestAction}
        onConfirmTheConfirmationCode={postConfirmationCodeRequestAction}
        auth={auth}
      />
    );
  }
}

MainPageContainer.propTypes = {
  postNewAuthenticationCodeRequestAction: PropTypes.func.isRequired,
  postConfirmationCodeRequestAction: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  postNewAuthenticationCodeRequestAction: phoneNumber => dispatch(postNewAuthenticationCodeRequest(phoneNumber)),
  postConfirmationCodeRequestAction: (confirmationCode, mobileNumber) => dispatch(postConfirmationCodeRequest(confirmationCode, mobileNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
