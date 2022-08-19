import {ReactElement, ReactNode} from "react";
import Header from "../../_common/header"

interface IBaseLayout {
    children: ReactNode | ReactElement;
}

const defaultLayout = ({children}:IBaseLayout) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            {/*<Footer />*/}
        </>
    );
};
export default defaultLayout;