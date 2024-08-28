import {MutableRefObject} from "react";
import {PitchSection} from "./Pitch.style.tsx";
import Hyperlink from "./Hyperlink.tsx";


interface PitchProps {
    scrollToPitchRef: MutableRefObject<null | HTMLDivElement>;
}

export default function Pitch(props: PitchProps) {
    const {scrollToPitchRef} = props;
    return (
        <PitchSection ref={scrollToPitchRef}>
            <h3>Welcome to Facio Ergo Sum</h3>
            <p>
                At Facio Ergo Sum, we believe that great software begins with simplicity and a commitment to quality. As
                creators of <Hyperlink href="https://github.com/robvanderleek/create-issue-branch">"Create Issue
                Branch"</Hyperlink> — a powerful GitHub app designed to
                streamline your development workflow — we focus on crafting tools that make a difference. Our passion
                lies in building minimalistic yet effective software solutions that elevate your projects without the
                unnecessary complexity.<br/>
                Discover a team of developers dedicated to enhancing your coding experience, one small but impactful
                project at a time.
            </p>
        </PitchSection>
    );
}