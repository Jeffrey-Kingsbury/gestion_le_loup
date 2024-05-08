import styled from 'styled-components';

const Breaker = ({ text }) => {
	return (
		<Wrapper>
			<h1>{text}</h1>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	min-height: 20dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	color: white;
	background-color: rgb(80, 80, 90);
`;
export default Breaker;
