import styled, { keyframes } from 'styled-components';
import logo from '../images/full_logo.svg';
import logoAndText from '../images/Gestion-Le-Loup-Logo.png';
import video from '../images/gllvideo.mp4';
import splashBg from '../images/kitchen_bg.jpg';
import Breaker from './Breaker';
import fsr from '../images/fsr.jpg';
import res from '../images/residential.jpg';
import QuoteCarosuel from './QuoteCarosuel';
import bg from '../images/northernlights.jpg';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import CarouselGll from './Carousel';

const Main = () => {
	useEffect(() => {
		const preloadImages = () => {
			[logo, splashBg, fsr, res].forEach((img) => {
				new Image().src = img;
			});
		};
		preloadImages();
	}, []);
	const serviceList = [
		{ title: 'Rénovations complètes', img: fsr, desc: 'We offer full scale renovations' },
		{ title: 'Residential', img: res, desc: 'We offer full scale renovations' },
		{ title: 'Commercial', img: res, desc: 'We offer full scale renovations' },
		{ title: 'Apres-Sinistre', img: 'fsr', desc: 'We offer full scale renovations' },
		{ title: 'Terrace', img: 'fsr', desc: 'We offer full scale renovations' },
	];
	const [caro, setCaro] = useState(serviceList[0]);

	return (
		<>
			<Wrapper>
				<HeaderWrapper>
					<LogoWrapper href=''>
						<Logo
							src={logoAndText}
							alt='logo'
							draggable='false'
						/>
					</LogoWrapper>
					<Navigation>
						<a href='#about'>A propos</a>
						<a href='#services'>Nos services</a>
						<a href='#testimonials'>Témoignages</a>
						<a href='#contact'>Contactez nous</a>
					</Navigation>
				</HeaderWrapper>

				<SplashWrapper>
					<SplashLogo
						src={logoAndText}
						alt='logo'
						draggable='false'
					/>
					<GeneralContractor>Entrepeneur Generale</GeneralContractor>
					<Slogan>Votre vision, notre expertise</Slogan>
				</SplashWrapper>

				<Breaker text='About us' />
				<AboutWrapper id='about'>
					<p>
						Établi en XXXX à Montréal,
						<br /> nous sommes un entrepreneur général à service complet qui se spécialise dans les cuisines et les salles de bain
						résidentielles, les terrasses, les cuisines commerciales et l'apres sinistre.
					</p>
					<p>
						Nos Services:
						<br />
						<ul>
							<li>Rénovations complètes</li>
							<li>Commercial</li>
							<li>Residential</li>
							<li>Terrace</li>
							<li>Apres-Sinistre</li>
						</ul>
					</p>
					<ServicesVideoContainer>
						<video
							autoPlay
							loop
							muted
						>
							<source src={video}></source>
						</video>
					</ServicesVideoContainer>
				</AboutWrapper>

				{/* <Breaker text='Services' />
				<ServicesWrapper id='services'>
					<ServicesContainer></ServicesContainer>
				</ServicesWrapper> */}

				<Breaker text='Témoignages' />
				<TestimonialWrapper id='testimonials'>
					<TestimonialContainer>
						<QuoteCarosuel />
						<CarouselGll />
					</TestimonialContainer>
				</TestimonialWrapper>

				<Breaker text='Contact Us' />
				<ContactWrapper id='contact'></ContactWrapper>

				<Footer></Footer>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	height: 100%;
	overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	width: 100%;
	height: 100px;
	position: fixed;
	z-index: 999;
`;

const LogoWrapper = styled.a`
	max-height: 90%;
	max-width: 600px;
	padding: 0 4rem;
	box-sizing: border-box;
	user-select: none;
`;

const Logo = styled.img`
	max-height: 90px;
	filter: brightness(0) invert(1);
`;

const SplashLogo = styled.img`
	max-height: 200px;
	filter: brightness(0) invert(1);
	margin: 0;
`;

const Navigation = styled.nav`
	font-family: 'Montserrat', sans-serif;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 4rem;
	width: 100%;
	gap: 2rem;
	text-transform: uppercase;
	user-select: none;
	box-sizing: border-box;
	a {
		color: white;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

const SplashWrapper = styled.div`
	width: 100vw;
	height: 100dvh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	background: url(${splashBg});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	user-select: none;
`;

const Slogan = styled.h1`
	color: white;
	font-family: 'Montserrat', sans-serif;
	font-size: 5rem;
	text-align: center;
`;

const GeneralContractor = styled.h2`
	color: white;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	text-align: center;
	margin-top: -4rem;
`;
const AboutWrapper = styled.div`
	width: 100vw;
	height: 100dvh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4rem;
	p {
		color: white;
		font-family: 'Montserrat', sans-serif;
		max-width: 600px;
		font-size: xx-large;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 4rem;
	}
`;

const ServicesWrapper = styled.div`
	width: 100vw;
	height: 100dvh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ServicesContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-image: url(${(props) => props.bg});
	background-size: cover;
	background-position: center;
`;

const ServicesVideoContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	video {
		max-height: 100dvh;
		width: 100%;
		object-fit: cover;
	}
`;

const TestimonialWrapper = styled.div`
	width: 100vw;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4rem;
`;

const TestimonialContainer = styled.div`
	background-color: rgb(10, 10, 10);
	width: 100%;
	height: 100%;
`;
const ContactWrapper = styled.div`
	width: 100vw;
	height: 100dvh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
`;

export default Main;
