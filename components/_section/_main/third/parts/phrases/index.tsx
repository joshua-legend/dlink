import {Box, Divider, Stack, Typography} from "@mui/material";
import React from "react";

const Phrases = () => {
    return (
        <Stack direction={"column"} justifyContent={"center"} alignContent={"start"} spacing={2} sx={{width:"70%",margin:"5rem auto 0",fontFamily:"Elice Digital Baeum",color:"white"}} >
            <Typography variant={"h3"} >Our services</Typography>
            <Typography variant={"h2"} >Eyelashes</Typography>
            <Typography paragraph>This service is for you - extra exfoliation, neck and upper chest masks, and a relaxing scalp massage to invigorate blood circulation.</Typography>
        </Stack>
    );
};
export default Phrases;