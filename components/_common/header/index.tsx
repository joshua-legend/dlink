import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{display:"flex",width:"50%",margin:"auto",justifyContent:"space-between"}} >
                <Typography sx={{fontFamily:"Agro"}}>제이라인</Typography>
                <Button color={"info"} >Home</Button>
                <Button color={"info"} >Price</Button>
                <Button color={"info"} >Gallery</Button>
                <Button color={"info"} >Map</Button>
                <Button color={"info"} >Reservation</Button>
            </Toolbar>
        </AppBar>
    );
};
export default Header;