import {Button, Stack} from "@mui/material";
import React from "react";
import Phrases from "./parts/phrases";
import CardList from "./parts/cardList";

const Second = () => {

    return (
        <Stack sx={{width:"100%",height:"100%"}} flexDirection={"column"} justifyContent={"space-evenly"}>
            <Phrases/>
            <CardList />
        </Stack>
    );
};
export default Second;