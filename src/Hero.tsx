import {Button} from "@mui/material";
import {InfoOutlined} from "@mui/icons-material";
import {MutableRefObject} from "react";
import {ButtonSection, HeroSection, Title} from "./Hero.style.tsx";


interface HeroProps {
    scrollToPitchRef: MutableRefObject<null | HTMLElement>;
}

export default function Hero(props: HeroProps) {
    const {scrollToPitchRef} = props;

    const scrollToPitch = () => {
        scrollToPitchRef.current?.scrollIntoView();
    }

    return (
        <HeroSection onClick={scrollToPitch}>
            <Title>
                Facio Ergo Sum
            </Title>
            <ButtonSection>
                <Button variant="contained" size="large" endIcon={<InfoOutlined/>}
                        onClick={scrollToPitch}>
                    About Us
                </Button>
            </ButtonSection>
        </HeroSection>
    );
}