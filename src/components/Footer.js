import styled from 'styled-components';
import bg from '../images/northernlights.jpg';
import logo from '../images/logo_1_-removebg-preview.png';
const Footer = () => {
	return (
		<Wrapper>
			<LogoWrapper>
				<Logo src={logo} />
			</LogoWrapper>
			<div></div>
			<div></div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 600px;
	border-top: 2px solid black;
	background: url(${bg});
	background-position: center;
	background-size: cover;
	display: flex;
	gap: 1rem;
	div {
		width: 33%;
		display: flex;
		align-items: center;
	}
`;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const Logo = styled.img`
	filter: brightness(0) invert(1);
	height: 50%;
	left: 0;
`;
export default Footer;
