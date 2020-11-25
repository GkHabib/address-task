import React from 'react';
import {
  Button,
} from '@material-ui/core';
import useStyles from '../Styles';

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => console.log('Submitted')}
      margin="normal"
      size="large"
      variant="text"
      color="primary"
      fullWidth
      className={classes.loginButton}
      // startIcon={<PodIcon viewBox="0 0 48 48" />}
    >
      {'ورود/ثبت‌نام'}
    </Button>
  );
};


export default MainPage;
