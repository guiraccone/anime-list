import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer, OutletContainer } from "./styles";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <OutletContainer>          
                <Outlet />
            </OutletContainer>
            <Footer/>
        </LayoutContainer>

    )
}