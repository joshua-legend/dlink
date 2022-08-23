import {Divider, Stack, Typography} from "@mui/material";
import React from "react";
import Button from "./button";

const Phrases = () => {
    return (
        <Stack direction={"column"} justifyContent={"center"} spacing={2} sx={{width:"70%",margin:"5rem auto 0",fontFamily:"Elice Digital Baeum",color:"#34515e"}} >
            <Typography variant={"h5"} >About Us</Typography>
            <Typography variant={"h3"} >Your Eyebrows are Our Priority</Typography>
            <Typography paragraph>We provide the best spa experience that guarantees to make you healthier and make you look more beautiful</Typography>
            <Button />
        </Stack>
    );
};
export default Phrases;