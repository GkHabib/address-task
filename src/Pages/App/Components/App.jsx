import React from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import RTL from '../../../Common/Components/RTL/index';
import History from '../../../Router/History';
import MainPage from '../../MainPage/index';
import './font.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muiTheme: undefined,
    };
  }

  componentDidMount() {
    const { appearance } = this.props;
    if (appearance) this.createTheme();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { appearance } = this.props;
    if (prevProps.appearance.themingData.palette.type !== appearance.themingData.palette.type
      || prevProps.appearance.themingData.direction !== appearance.themingData.direction) {
      this.createTheme();
    }
  }

  createTheme = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { themingData } = this.props.appearance;
    const theme = createMuiTheme(themingData);
    this.setState({ muiTheme: theme });
  };

  componentDidCatch(error, errorInfo) {
    console.log('THERE IS AN ERROR!\n*****************************************');
    console.log(error, errorInfo);
    History.replace('/');
  }

  render() {
    const { muiTheme } = this.state;
    const { appearance, auth } = this.props;
    if (muiTheme) return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RTL>
          <div
            dir={appearance.themingData.direction}
            className={appearance.themingData.direction === 'rtl' ? 'persianFont' : 'englishFont'}
          >
            <MainPage />
          </div>
        </RTL>
      </ThemeProvider>
    );
    return <div>Loading</div>;
  }
}

App.propTypes = {
  appearance: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  appearance: state.appearance,
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
