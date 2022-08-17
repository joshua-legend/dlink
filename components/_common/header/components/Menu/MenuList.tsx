import React from "react";
import {Button, MenuItem, Box, Stack} from "@mui/material";
import Menus from "./Menu";
const MenuList = () => {
    return (
        <Stack direction={"row"}>
            <Menus />
            <Menus />
            <Menus />
            <Menus />
        </Stack>
    );
};
export default MenuList;