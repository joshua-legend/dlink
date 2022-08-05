import {ReactElement, ReactNode} from "react";
import Header from "../../_common/header"
import Footer from "../../_common/footer";

interface IBaseLayout {
    children: ReactNode | ReactElement;
}

const baseLayout = ({children}:IBaseLayout) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            {/*<Footer />*/}
        </>
    );
};
export default baseLayout;