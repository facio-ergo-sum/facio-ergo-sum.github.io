import {useRef} from 'react'
import Hero from "./Hero.tsx";
import AppBar from "./AppBar.tsx";

function App() {
    const scrollToPitchRef = useRef(null);

    return (
        <>
            <AppBar/>
            <Hero scrollToPitchRef={scrollToPitchRef}/>
        </>
    )
}

export default App
