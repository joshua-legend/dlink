import {Stack} from "@mui/material";
import React from "react";
import Title from "./title";
import Description from "./description";
import Button from "./button";

const Phrases = () => {
    return (
        <Stack direction={"column"} sx={{margin:"15rem 0 0 10rem"}}>
            <Title />
            <Description />
            <Button />
        </Stack>
    );
};
export default Phrases;