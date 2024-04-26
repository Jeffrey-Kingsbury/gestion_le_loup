import {React, useState, useEffect }from 'react';
import Styled from 'styled-components';
import logo from '../images/full_logo.svg';

const Header = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
    
        const handleScroll = () => {
            let maxScroll = windowDimensions.height;  
            let opacity = (maxScroll - window.scrollY) / maxScroll ;
            console.log(opacity * 100)
            opacity = Math.max(opacity, 0); 
            opacity = Math.min(opacity, 1);
            setScrollTop(opacity * 100);
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        handleScroll();  // Call the function immediately to set initial opacity
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [windowDimensions]);
    

	return (
		<Wrapper className='bg-transparent'>
			<Container scrollpos={scrollTop}>
				<Logo src={logo} alt='logo' draggable="false"/>
				<Navigation scrollpos={scrollTop}>
					<a href='#about'>About</a>
					<a href='#services'>Services</a>
					<a href='#testimonials'>Testimonials</a>
					<a href='#contact'>Contact</a>
				</Navigation>
			</Container>
		</Wrapper>
	);
};

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    width: 100%;
    height: 100vh;
`;

const Logo = Styled.img`
fill: white;
max-height: 90%;
max-width: 600px;
`;

const Navigation = Styled.nav`
    display: ${({ scrollpos }) => scrollpos > 10 ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    opacity: ${({ scrollpos }) => scrollpos}%;
`;

const Container = Styled.div`
    top:0;
    user-select: none;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgb(173,225,212);
    transition: all .25s ease-in-out;
    height: ${({ scrollpos }) => scrollpos < 5 ? 5 : scrollpos}vh;
    pointer-events: ${({ scrollpos }) => scrollpos < 40 ? 'none' : 'auto'};
`;

export default Header;
