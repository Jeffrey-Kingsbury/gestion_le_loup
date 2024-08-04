import styled from 'styled-components';
import splashBg from '../images/Sophie_Querbes_23101314536.jpg';
import logoAndText from '../images/Gestion-Le-Loup-Logo.png';

const Splash = () => {
	return (
		<Wrapper>
			<Logo
				src={logoAndText}
				alt='logo'
				draggable='false'
			/>
			<GeneralContractor>
				Entrepeneur Generale
				<hr />
				Votre vision, notre expertise
			</GeneralContractor>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: url(${splashBg});
	background-position: center;
	background-size: cover;
	height: 100dvh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4rem;

	a {
		border: none;
		border-radius: 3em;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
		display: inline-block;
		font-size: 1.5rem;
		text-decoration: none;
		padding: 1em 2em;
		width: auto;
		background-color: #4287f5;
		color: #fff !important;
		transition: all 0.3s ease;
	}

	a:hover {
		background-color: #4293f5;
	}
`;

const Logo = styled.img`
	max-width: 600px;

	@media only screen and (max-width: 650px) {
		max-width: 400px;
	}
`;

const GeneralContractor = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	text-align: center;
	margin-top: -4rem;
	color: black;
	padding: 0.5rem 1rem;
	font-weight: bold;

	@media only screen and (max-width: 650px) {
		font-size: 1.5rem;
	}
`;

export default Splash;
