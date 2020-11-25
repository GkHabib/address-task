import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Dialog, DialogTitle, DialogContent, Typography, IconButton, TextField,
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
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const [step, setStep] = useState(steps[0]);
  const resetStep = () => setStep(steps[0]);
  const goToNextStep = () => setStep(steps[1]);
  const [inputValue, setInputValue] = useState('');
  const { onRequestNewCodeFromServer } = props;
  const stepDataObject = {
    submitMobileNumber: {
      title: 'تایید شماره موبایل',
      textFieldLabel: 'شماره‌تلفن همراه',
      textFieldHelperText: 'لطفا شماره‌تلفن همراه خود را وارد نمایید',
      buttonLabel: 'درخواست کد',
      onClick: () => {
        onRequestNewCodeFromServer(inputValue && inputValue.toString());
        goToNextStep();
      },
    },
    submitConfirmationCode: {
      title: 'تایید کد احراز هویت',
      textFieldLabel: 'کد احراز هویت ارسال‌شده',
      textFieldHelperText: 'لطفا کد احراز هویت ارسال‌شده به شماره‌تلفن همراه وارد شده را وارد نمایید',
      buttonLabel: 'تایید کد احراز هویت',
      onClick: () => {
        closeDialog();
        resetStep();
      },
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
          startIcon={<InputIcon />}
        >
          {'ورود/ثبت‌نام'}
        </Button>
      </Grid>
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
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}

              />
            </Grid>
            <Grid container xs={12} md={6} style={{ margin: '16px 0' }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={stepDataObject[step].onClick}
              >
                {stepDataObject[step].buttonLabel}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

MainPage.propType = {
  onRequestNewCodeFromServer: PropTypes.func.isRequired,
};


export default MainPage;
