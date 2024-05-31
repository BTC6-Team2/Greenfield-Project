import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Header = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						ゴミ出しアプリ
					</Typography>
					<Button color="inherit" onClick={handleClickOpen}>
						Login
					</Button>
				</Toolbar>
			</AppBar>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries(formData.entries());
						const email = formJson.email;
						console.log(email);
						handleClose();
					},
				}}
			>
				<DialogTitle>Login</DialogTitle>
				<DialogContent>
					<DialogContentText>
						ユーザー名とパスワード入力してください
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="name"
						name="email"
						label="ユーザー名"
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						required
						margin="dense"
						id="name"
						name="email"
						label="パスワード"
						type="text"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit">Subscribe</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default Header;
