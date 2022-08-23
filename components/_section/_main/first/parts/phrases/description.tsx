import {Stack, Typography} from "@mui/material";
import React from "react";

const Description = () => {
    return (
        <Stack direction={"column"} sx={{fontFamily:"Agro",color:"#78909c",margin:"1rem 0"}}>
            <Typography variant={"h5"}>Take care of your beauty with your beautiful eyebrows.</Typography>
            <Typography variant={"h5"}>We represent professional beauty with eyebrows.</Typography>
        </Stack>
    );
};
export default Description;