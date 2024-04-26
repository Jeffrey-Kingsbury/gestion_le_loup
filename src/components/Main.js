import styled from "styled-components";
import About from "./About";
import Splash from "./Splash";
import { useRef } from "react";
const Main = () => {
    const aboutRef = useRef(null);
    console.log(aboutRef)
    return(<>
    <Wrapper>
        <Splash about={aboutRef}/>
        <About ref={aboutRef}/>
    </Wrapper>
    </>)
}

const Wrapper = styled.div`
height: 600dvh;
`;
export default Main;