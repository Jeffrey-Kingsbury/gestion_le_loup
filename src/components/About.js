import Styled from 'styled-components';
import wood_bg from '../images/house_bg.png';
import { useState, useEffect, useRef } from 'react';

const About = () => {
	const [opacity, setOpacity] = useState(100);
	const containerRef = useRef(null);
	const [isVisible, setVisible] = useState(true);
	const domRef = useRef();

	const updateOpacity = () => {
		const containerTop = containerRef.current.getBoundingClientRect().top;
		const containerHeight = containerRef.current.offsetHeight;
		const windowHeight = window.innerHeight;

		if (containerTop + containerHeight <= 0 || containerTop >= windowHeight) {
			setOpacity(0);
			return;
		}

		const visibleHeight = Math.min(containerHeight, windowHeight - (containerTop * 2));
		const percentageVisible = visibleHeight / containerHeight;

		setOpacity(percentageVisible * 100);
	};

	useEffect(() => {
		window.addEventListener('scroll', updateOpacity);
		window.addEventListener('resize', updateOpacity);
		updateOpacity(); // Call the function immediately to set initial opacity
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);

		return () => {
            observer.unobserve(domRef.current);
			window.removeEventListener('scroll', updateOpacity);
			window.removeEventListener('resize', updateOpacity);
		};
	}, []);

	return (
		<Wrapper>
			<Container ref={containerRef} scrollpos={opacity}>
				<h1 className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
				</h1>
			</Container>
		</Wrapper>
	);
};
const Wrapper = Styled.div`
    width: 100vw;
    height:150vh;
    background: rgb(173,225,212);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 25%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 100%);    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 4rem;
`;

const Container = Styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
color: white;
background-image: url(${wood_bg});
background-size: cover;
background-position: center;
opacity: ${({ scrollpos }) => scrollpos}%;   
font-size: 4rem;

	h1{
		margin-top: 2rem;
		opacity: 0;
		transform: translateY(15vh);
		visibility: hidden;
		transition: opacity 0.6s ease-in-out, transform 1s ease-in-out;
		will-change: opacity, visibility;

		&.is-visible {
			opacity: 1;
			transform: none;
			visibility: visible;
		}
	}
`;

export default About;
