import Styled from 'styled-components';
import logo from '../images/full_logo.svg';

const Splash = ({about}) => {
console.log(about)
    const handleScroll = () => {
        about.current.scrollIntoView({behavior: 'smooth'});
    }

	return (
		<Wrapper>
            <Logo src={logo} alt='logo' draggable='false' />
            <button onClick={() => handleScroll()}>About</button>
		</Wrapper>
	);
};

const Wrapper = Styled.div`
    width: 100vw;
    height:100dvh; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;

const Logo = Styled.img`
    display: block;
    margin: 0;
    width: 50%;
    min-width: 300px;
`;

export default Splash;
