import {ReactElement, ReactNode} from "react";
import {Container} from "@mui/material";

interface IBaseLayout {
    children: ReactNode | ReactElement;
}

const baseLayout = ({children}:IBaseLayout) => {
    return (
        <Container>


        </Container>
    );
};
export default baseLayout;