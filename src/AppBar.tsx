import {Toolbar} from "@mui/material";
import fesLogo from './assets/fes-logo-360x360.png'
import {StyledAppBar, Title} from "./AppBar.style.tsx";


export default function AppBar() {
    return (
        <StyledAppBar position="fixed" style={{background: 'none'}} elevation={0}>
            <Toolbar>
                <Title onClick={() => window.scrollTo(0, 0)}>
                    <img src={fesLogo} width={40} alt="Facio Ergo Sum logo"/>
                </Title>
            </Toolbar>
        </StyledAppBar>
    );
}