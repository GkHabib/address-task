import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Dialog, DialogTitle, DialogContent, Typography, IconButton, TextField, Grow
} from '@material-ui/core';
import {
  Input as InputIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import { isMobile } from 'react-device-detect';
import useStyles from '../Styles';

const steps = [
  'submitMobileNumber',
  'submitConfirmationCode',
];

const MainPage = (props) => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const [step, setStep] = useState(steps[0]);
  const resetStep = () => setStep(steps[0]);
  const goToNextStep = () => setStep(steps[1]);
  const [inputMobileNumber, setInputMobileNumber] = useState('');
  const [inputConfirmationCode, setInputConfirmationCode] = useState('');
  const { onRequestNewCodeFromServer, onConfirmTheConfirmationCode, auth } = props;
  const [transitionIn, setTransitionIn] = useState(true);
  const stepDataObject = {
    submitMobileNumber: {
      title: 'تایید شماره موبایل',
      textFieldLabel: 'شماره‌تلفن همراه',
      textFieldHelperText: 'لطفا شماره‌تلفن همراه خود را وارد نمایید',
      buttonLabel: 'درخواست کد',
      onClick: () => {
        setTransitionIn(false);
        onRequestNewCodeFromServer(inputMobileNumber && inputMobileNumber.toString()).then(res => {
          goToNextStep();
          setTransitionIn(true);
        });
      },
      onChange: (event) => { setInputMobileNumber(event.target.value) },
      value: inputMobileNumber,
    },
    submitConfirmationCode: {
      title: 'تایید کد احراز هویت',
      textFieldLabel: 'کد احراز هویت ارسال‌شده',
      textFieldHelperText: 'لطفا کد احراز هویت ارسال‌شده به شماره‌تلفن همراه وارد شده را وارد نمایید',
      buttonLabel: 'تایید کد احراز هویت',
      onClick: () => {
        onConfirmTheConfirmationCode(inputConfirmationCode && inputConfirmationCode.toString(), inputMobileNumber && inputMobileNumber.toString()).then(res => {
          closeDialog();
          resetStep();
          setInputConfirmationCode('');
          setInputMobileNumber('');
        });
      },
      onChange: (event) => { setInputConfirmationCode(event.target.value) },
      value: inputConfirmationCode,
    },
  };
  return (
    <Grid
      container
      xs={12}
      direction="row"
      justify={isMobile ? 'center' : 'flex-end'}
      alignItems={isMobile ? 'center' : 'flex-start'}
      className={classes.root}
    >
      {(auth && auth.user && auth.user.mobile_number)
        ? (
          <Typography>
            {` خوش آمدید${auth.user.mobile_number}`}
          </Typography>
        ) : (
          <Grid
            item
            xl={2}
            lg={3}
            md={4}
            xs={12}
          >
            <Button
              onClick={() => {
                openDialog();
              }}
              margin="normal"
              size="large"
              variant="text"
              color="primary"
              fullWidth
              className={classes.loginButton}
              startIcon={<InputIcon/>}
            >
              {'ورود/ثبت‌نام'}
            </Button>
          </Grid>
        )}
      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle classes={{ root: classes.dialogTitleContainer }}>
          <Typography variant="h6"  className={classes.dialogTitle}>
            {stepDataObject[step].title}
          </Typography>
          <IconButton
            className={classes.closeButton}
            onClick={closeDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grow in={transitionIn}>
            <Grid
              container
              xs={12}
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.dialogContentContainer}
            >
              <Grid container xs={12} md={6} style={{ margin: '16px 0' }}>
                <TextField
                  fullWidth
                  label={stepDataObject[step].textFieldLabel}
                  variant="outlined"
                  helperText={stepDataObject[step].textFieldHelperText}
                  autoFocus
                  value={stepDataObject[step].value}
                  onChange={stepDataObject[step].onChange}

                />
              </Grid>
              <Grid container xs={12} md={6} style={{ margin: '16px 0' }}>
                <Button
                  fullWidth
                  variant={!stepDataObject[step].value ? "outlined" : "contained"}
                  color="primary"
                  onClick={!stepDataObject[step].value ? () => {} : stepDataObject[step].onClick}
                  className={classes.loginButton}
                >
                  {stepDataObject[step].buttonLabel}
                </Button>
              </Grid>
            </Grid>
          </Grow>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

MainPage.propType = {
  onRequestNewCodeFromServer: PropTypes.func.isRequired,
  onConfirmTheConfirmationCode: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
};


export default MainPage;
