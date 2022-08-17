import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
const Logo = () => {
    return (
        <>
            <IconButton>
                <PetsIcon color={"warning"} />
            </IconButton>
            <Typography variant="h6">Digital Link</Typography>
        </>
    );
};
export default Logo;