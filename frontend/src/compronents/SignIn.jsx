import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './icons/github.jpeg';
import './signin.css';

import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub, FaLine } from 'react-icons/fa6';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { TbBrandYahoo } from 'react-icons/tb';

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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="user id"
                            label="user id"
                            name="user id"
                            autoComplete="user id"
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
