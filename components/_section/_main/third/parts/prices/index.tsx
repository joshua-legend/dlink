import {Box, Stack, Typography} from "@mui/material";
import SellIcon from '@mui/icons-material/Sell';
import React from "react";

const Prices = () => {
    return (
        <Stack direction={"column"} justifyContent={"center"} spacing={2} sx={{width:"70%",margin:"5rem auto 0",fontFamily:"Elice Digital Baeum",color:"#34515e"}} >
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography variant={"h4"}><SellIcon/> Basic Eyelashes</Typography>
                <Typography variant={"h4"}>30,000</Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography variant={"h4"}><SellIcon/> Double Eyelashes</Typography>
                <Typography variant={"h4"}>40,000</Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography variant={"h4"}><SellIcon/> Retouch Volume</Typography>
                <Typography variant={"h4"}>25,000</Typography>
            </Box>
        </Stack>
    );
};
export default Prices;