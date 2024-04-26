import { useState, useEffect } from 'react';
import Styled from 'styled-components';
import logo from '../images/full_logo.svg';

const SmallHeader = () => {
	return (
		<Wrapper>
            <Container>
			<Logo src={logo} alt='logo' draggable='false' />
            <p>
            Building beyond boundaries
            </p>
            </Container>
		</Wrapper>
	);
};

const Wrapper = Styled.div`
    position: fixed;
    display: flex;
    width: 100dvw;
    height: 5dvh;
    background-color: slategray;
    user-select: none;
`;

const Logo = Styled.img`
    display: block;
    margin: 0;
    fill: white;
    height: auto;
    max-height: 80%;
`;

const Container = Styled.div`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        margin: 0;
        display: block;
    }
`;
export default SmallHeader;
