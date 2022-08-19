import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{display:"flex",width:"50%",margin:"auto"}} >
                <Typography sx={{fontFamily:"Agro"}}>제이라인</Typography>
                <Button color={"info"} >ABOUT</Button>
                <Button color={"info"} >RESERVATION</Button>
                <Button color={"info"} >PRICE</Button>
                <Button color={"info"} >EVENT</Button>
                <Button color={"info"} >REVIEW</Button>
            </Toolbar>
        </AppBar>
    );
};
export default Header;