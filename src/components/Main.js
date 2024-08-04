import styled, { keyframes } from 'styled-components';
import logo from '../images/full_logo.svg';
import splashBg from '../images/Sophie_Querbes_23101314536.jpg';
import fsr from '../images/fsr.jpg';
import res from '../images/residential.jpg';
import QuoteCarosuel from './QuoteCarosuel';

import Splash from './Splash';

import arrorwIcon from '../images/down-chevron.png';
import CarouselGll from './Carousel';
import Form from './Form';

const Main = () => {
	return (
		<>
			<Wrapper>
				<Splash />
				<AboutWrapper id='about'>
					<p>
						<div>
							Bienvenue chez Gestion Le Loup, votre spécialiste de la rénovation au service de la grande région de Montréal. <br />
							Chez Gestion Le Loup, nous sommes fiers de livrer des rénovations de qualité qui conviennent à tous les budgets.
						</div>
						<br />
						<b>Expertise haut de gamme</b>
						<br />
						Notre équipe se spécialise dans les constructions haut de gamme, donnant vie avec passion à la vision du designer que vous avez
						choisi. Bénéficiez de nos relations établies avec des sociétés de conception de premier plan, garantissant une collaboration
						transparente pour votre projet.
						<br />
						<br />
						<b>Reprise après sinistre</b>
						<br />
						En tant qu'entrepreneurs agréés, nous proposons des services post-catastrophe complets. Qu'il s'agisse de dégâts causés par une
						inondation dans votre sous-sol ou d'une fuite sur le toit, comptez sur nous pour vous guider tout au long du processus de
						reconstruction, transformant l'adversité en une opportunité d'améliorer votre maison.
						<br />
						<br />
						<b>Rénovation extérieure</b>
						<br />
						Rehaussez l'extérieur de votre maison grâce à notre expertise en matière de terrasses en bois traité sous pression, de porches en
						cèdre et de solutions extérieures haut de gamme. Quelle que soit la saison, notre équipe est prête à transformer vos espaces
						extérieurs.
						<br />
						<br />
						<b>Excellence commerciale</b>
						<br />
						Notre division commerciale excelle dans la création d'environnements axés sur le design pour les restaurants et les boutiques. Nous
						avons géré avec succès les rénovations de certains des établissements préférés de Montréal.
						<br />
						<br />
						<b>Expertise et partenariats</b>
						<br />
						Avec un réseau de sous-traitants de confiance, nous garantissons un service rapide et professionnel pour tous vos besoins. De la
						toiture et de la plomberie à l'électricité, en passant par le CVC, le plâtre et la peinture, le carrelage, l'ébénisterie et la
						menuiserie, notre équipe offre à chaque fois un savoir-faire de haut niveau.
						<br />
						<br />
						<b>Approche centrée sur le client</b>
						<br />
						Chez Gestion Le Loup, nous priorisons une communication claire et l'accessibilité tout au long de chaque projet. Notre équipe de
						direction s'engage à vous tenir informé et impliqué à chaque étape du processus de rénovation. Que vous ayez des questions, des idées
						ou des préoccupations, nous sommes là pour vous écouter et vous fournir des conseils d'experts. Votre satisfaction est notre priorité
						et notre engagement en faveur d'une communication transparente garantit une expérience fluide et sans stress du début à la fin.
						<br />
						<br />
						<b>Établir des relations</b>
						<br />
						Nous sommes toujours désireux de nouer de nouveaux partenariats et de collaborer avec vos designers préférés. Faites l'expérience de
						la différence avec Gestion Le Loup, où la qualité rencontre le dévouement.
						<br />
						<br />
						Contactez-nous dès aujourd'hui pour discuter de votre projet de rénovation.
					</p>
				</AboutWrapper>

				<TestimonialWrapper id='testimonials'>
					<TestimonialContainer>
						<QuoteCarosuel />
						<h1>Notre travail parle de lui-même</h1>
						<CarouselGll />
					</TestimonialContainer>
				</TestimonialWrapper>

				<ContactWrapper id='contact'>
					<Form />
				</ContactWrapper>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	overflow-x: hidden;
`;

const Bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const AboutWrapper = styled.div`
	width: 100dvw;
	min-height: 150dvh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-image: url(${res});
	background-size: cover;
	background-position: center;
	p {
		color: white;
		font-family: 'Montserrat', sans-serif;
		width: 90%;
		font-size: x-large;
		background-color: rgba(0, 0, 0, 0.8);
		padding: 1rem 4rem;
		box-sizing: border-box;
		@media only screen and (max-width: 650px) {
			font-size: large;
			padding: 1rem;
			width: 95%;
		}
		div {
			text-align: center;
			font-size: 2.5rem;
			@media only screen and (max-width: 650px) {
				font-size: 1.25rem;
			}
		}
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
	h1 {
		width: 100%;
		text-align: center;
		color: white;
	}
`;
const ContactWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Main;
