import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    padding: '4% 2%',
  },
  loginButton: {
    backgroundColor: '#212121',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#424242',
    },
    borderRadius: '1rem',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTitle: {
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
  },
  dialogTitleContainer: {
    position: 'relative',
  },
  dialogSubmitButton: {
    height: '36px',
    width: '100px',
  },
  dialogContentContainer: {
    padding: theme.spacing(4, 2),
  },
}));

export default useStyles;
