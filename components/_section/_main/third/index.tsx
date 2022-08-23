import {Box, Stack} from "@mui/material";
import React from "react";
import Prices from "./parts/prices";
import Phrases from "./parts/phrases";

const Third = () => {

    return (
        <Stack sx={{height:"100%"}} flexDirection={"row"}>
            <Box>
                <img style={{objectFit:"cover",width:"100%",height:"100%",borderRadius:"8px"}} src={"/photo/card2.jpg"} />
            </Box>
            <Box>
                <Phrases />
                <Prices />
            </Box>
        </Stack>
    );
};
export default Third;