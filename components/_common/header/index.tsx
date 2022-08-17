import {AppBar, Box, Toolbar} from "@mui/material";
import Logo from "./components/Logo";
import Search from "./components/Search";
import MenuList from "./components/Menu/MenuList";
const Header = () => {
    return (
        <>
            <Box>
                <AppBar position="sticky">
                    <Toolbar >
                        <Logo />
                        <Search />
                        <MenuList />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
export default Header;