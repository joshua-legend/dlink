import {Button, Stack} from "@mui/material";
import React from "react";

const _Button = () => {
    return (
        <Stack direction={"column"} sx={{margin:"1rem 0"}}>
            <Button sx={{fontFamily:"Agro",color:"#34515e"}}>Book Now</Button>
        </Stack>
    );
};
export default _Button;