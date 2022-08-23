import {Stack} from "@mui/material";
import React from "react";
import Phrases from "./parts/phrases";

const First = () => {

    return (
        <Stack sx={{height:"100%"}} flexDirection={"column"} justifyContent={"flex-start"}>
            <Phrases />
        </Stack>
    );
};
export default First;