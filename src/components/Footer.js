import styled from 'styled-components';
import bg from '../images/northernlights.jpg';
import logo from '../images/logo_1_-removebg-preview.png';
const Footer = () => {
	return (
		<Wrapper>
			<Top>
				<LogoWrapper>
					<Logo
						src={logo}
						draggable='false'
					/>
				</LogoWrapper>
				<div></div>
				<div></div>
			</Top>

			<Plug>
				©2024 Gestion Le Loup
				<br /> Ce site web a été créé par <a href='mailto:jeffrey.kingsbury@icloud.com'>Jeffrey Kingsbury</a> / This website was created by
				<a href='mailto:jeffrey.kingsbury@icloud.com'>Jeffrey Kingsbury</a>
			</Plug>
		</Wrapper>
	);
};

const Plug = styled.p`
	width: 100%;
	text-align: center;
	color: white;
`;

const Top = styled.div`
	width: 100%;
	display: flex;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 600px;
	border-top: 2px solid black;
	background: url(${bg});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	overflow: hidden;
`;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 0 2rem;
	user-select: none;
`;
const Logo = styled.img`
	filter: brightness(0) invert(1);
	height: 50%;

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;
export default Footer;
