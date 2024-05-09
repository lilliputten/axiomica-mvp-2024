import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { FormControl } from '@mui/material';
import { Check } from '@mui/icons-material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import { FullScreenPageLayout } from 'src/ui/layouts/FullScreenPageLayout';
import FormControl from '@mui/material/FormControl';
import { appTitle } from 'src/core/constants/config';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        {appTitle}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log('[LoginPage:LoginPage] handleSubmit', {
      login: data.get('login'),
      password: data.get('password'),
    });
  };

  const avatarSize = 64;

  return (
    <FullScreenPageLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: avatarSize, height: avatarSize  }}>
            <LockOutlinedIcon
              // fontSize="large"
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Box
              // prettier-ignore
              sx={{ mt: 3, mb: 2 }}
            >
              <Button
                // prettier-ignore
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<Check />}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/*
         * <Copyright sx={{ mt: 8, mb: 4 }} />
         */}
      </Container>
    </FullScreenPageLayout>
  );
}
