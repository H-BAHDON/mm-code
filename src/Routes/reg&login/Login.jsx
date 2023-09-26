import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../../Components/header/Header';
import { apiUrl } from '../../config/config';


export default function Login() {
  const classes = useStyles();

  return (
    <>
      <Header showNavigation={false} />

      <Grid container >
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
