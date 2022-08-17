import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    const icon = <InputAdornment position="start"><SearchIcon /></InputAdornment>;
    return (
        <>
            <TextField
                placeholder="Search items, collection, and accounts"
                size="small"
                color={"primary"}
                InputProps={{
                    startAdornment:(icon),
                }}
            />
        </>
    );
};
export default Search;