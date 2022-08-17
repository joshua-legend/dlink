import React from "react";
import {Button, MenuItem, Menu} from "@mui/material";
const Menus = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color={"info"}
            >
                코인
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>비트코인</MenuItem>
                <MenuItem onClick={handleClose}>이더리움</MenuItem>
                <MenuItem onClick={handleClose}>리플</MenuItem>
                <MenuItem onClick={handleClose}>솔라나</MenuItem>
                <MenuItem onClick={handleClose}>도지</MenuItem>
                <MenuItem onClick={handleClose}>이더리움 클래식</MenuItem>
                <MenuItem onClick={handleClose}>루나ㅋ</MenuItem>
            </Menu>
        </div>
    );
};
export default Menus;