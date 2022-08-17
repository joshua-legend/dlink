import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" color={"primary"}>
                    <Toolbar >
                        <IconButton>
                            <PetsIcon color={"warning"} />
                        </IconButton>
                        <Typography variant="h6">Digital Link</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
export default Header;