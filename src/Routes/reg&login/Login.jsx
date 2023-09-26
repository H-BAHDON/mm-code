import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Header from '../../Components/header/Header';
import { apiUrl } from '../../config/config';

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: '100vh', // Make the container fill the viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    margin: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <Header showNavigation={false} />

      <Grid container className={classes.loginContainer}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Login with Social Media
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.loginButton}
            href={`${apiUrl}/auth/google`}
          >
            Login with Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.loginButton}
            href={`${apiUrl}/auth/github`}
          >
            Login with GitHub
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
