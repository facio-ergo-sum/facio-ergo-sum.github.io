import {Toolbar} from "@mui/material";
import fesLogo from './assets/fes-logo-360x360.png'
import {StyledAppBar, Title, TopRightSection} from "./AppBar.style.tsx";
import Hyperlink from "./Hyperlink.tsx";
import githubLogo from './assets/github-logo-white-on-transparent-120x120.png';


export default function AppBar() {
    return (
        <StyledAppBar position="fixed" style={{background: 'none'}} elevation={0}>
            <Toolbar>
                <Title onClick={() => window.scrollTo(0, 0)}>
                    <img src={fesLogo} width={40} alt="Facio Ergo Sum logo"/>
                </Title>
                <TopRightSection>
                    <Hyperlink href="https://github.com/facio-ergo-sum"><img alt="GitHub logo"
                                                                             src={githubLogo}
                                                                             height={48}/></Hyperlink>
                </TopRightSection>
            </Toolbar>
        </StyledAppBar>
    );
}