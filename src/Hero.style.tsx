import {styled} from "@mui/material";

export const HeroSection = styled('div')`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/hero-image-1920x1359.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'Archivo Black', sans-serif;

    color: white;
    text-align: center;
`;

export const Title = styled('div')`
    margin-top: 10vh;
    @media (max-width: 600px) {
        font-size: 12vw;
    }
    @media (min-width: 600px) {
        font-size: 6vw;
    }
`;

export const ButtonSection = styled('div')`
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10vh;
`;