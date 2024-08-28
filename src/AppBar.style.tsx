import {AppBar as MuiAppBar, styled} from "@mui/material";

export const TopRightSection = styled('div')`
    display: flex;
    align-items: center;
`;

export const Title = styled('span')`
    flex-grow: 1;
    cursor: pointer;
`;

export const StyledAppBar = styled(MuiAppBar)`
    background-color: rgb(10, 10, 10);
    background-image: unset;
`;