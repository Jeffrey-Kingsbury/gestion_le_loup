import React from "react";
import Styled from "styled-components";
import bg from "../images/northernlights.jpg";
import logo from "../images/full_logo.svg";
import trees from "../images/trees.png";
const Header = () => {
    return (
        <Wrapper className="w-screen h-screen bg-teal-200">
            <Container>

            <Logo src={logo} alt="logo" />
            <Navigation>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </Navigation>
            <img src={trees} alt="trees" />
            </Container>

        </Wrapper>
    );
    }

const Wrapper = Styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;

const Logo = Styled.img`
fill: white;
width: 600px;
filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(67deg) brightness(105%) contrast(102%);
`;

const Navigation = Styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;

`;
    export default Header;
