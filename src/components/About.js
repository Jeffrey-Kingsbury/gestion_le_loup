import Styled from "styled-components";
const About = () => {
    return (
        <Wrapper className="w-screen h-screen  bg-gradient-to-t to-black from-white via-white">
            
        </Wrapper>
    );
    }
const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;

const Img = Styled.img`
width: 100vw;
`

export default About;