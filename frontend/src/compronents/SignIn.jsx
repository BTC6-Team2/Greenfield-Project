import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './icons/github.jpeg';
import './signin.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub, FaLine } from 'react-icons/fa6';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { TbBrandYahoo } from 'react-icons/tb';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const response = fetch('http://localhost:3000/login', {
            method: 'POST',
            body: {
                user_id: data.get('user_id'),
                password: data.get('password'),
            },
        }).then((res) => {
            console.log('res.ok:', res.ok);
            if (res.ok) {
                setSuccess(true);
            } else {
                alert('ログインできませんでした');
            }
        });
        // .then(res => res.json())
        // .then(data => {
        // })
    };

    return (
        <ThemeProvider theme={defaultTheme}>
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
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'access',
                            width: '80px',
                            height: '80px',
                        }}
                    >
                        {/* <LockOutlinedIcon /> */}
                        <img
                            src="./images/kabegami.gif"
                            alt="X"
                            width={'100px'}
                        />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <p>外部アプリ認証でログインする</p>
                        <nav className="site-nav">
                            <a href="/auth/google">
                                <FaGoogle className="icon" />
                            </a>
                            <a href="/auth/github">
                                <FaGithub className="icon" />
                            </a>

                            <RiTwitterXLine className="icon" />
                            <FaFacebook className="icon" />
                            <TbBrandYahoo className="icon" />
                            <FaLine className="icon" />
                        </nav>

                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                            </Grid>
                            <Grid item>
                                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}
