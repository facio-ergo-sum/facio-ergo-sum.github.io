import {useRef} from 'react'
import Hero from "./Hero.tsx";
import AppBar from "./AppBar.tsx";
import Footer from "./Footer.tsx";
import Pitch from "./Pitch.tsx";

function App() {
    const scrollToPitchRef = useRef(null);

    return (
        <>
            <AppBar/>
            <Hero scrollToPitchRef={scrollToPitchRef}/>
            <Pitch scrollToPitchRef={scrollToPitchRef}/>
            <Footer/>
        </>
    )
}

export default App
