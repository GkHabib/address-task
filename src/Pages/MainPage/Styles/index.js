import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    paddingTop: '15vh',
  },
  loginButton: {
    backgroundColor: '#212121',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#424242',
    },
  },
}));

export default useStyles;
