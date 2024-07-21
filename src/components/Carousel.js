import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import one from '../images/examples/1.jpg';
import two from '../images/examples/2.jpg';
import three from '../images/examples/3.jpg';
import four from '../images/examples/4.jpg';
import five from '../images/examples/5.jpg';
import six from '../images/examples/6.jpg';
import seven from '../images/examples/7.jpg';
import eight from '../images/examples/8.jpg';
import nine from '../images/examples/9.jpg';
import ten from '../images/examples/10.jpg';
import eleven from '../images/examples/11.jpg';
import twelve from '../images/examples/12.jpg';
import thirteen from '../images/examples/13.jpg';
import fourteen from '../images/examples/14.jpg';
import fifteen from '../images/examples/15.jpg';
import sixteen from '../images/examples/16.jpg';
import seventeen from '../images/examples/17.jpg';
import eighteen from '../images/examples/18.jpg';
import nineteen from '../images/examples/19.jpg';
import twenty from '../images/examples/20.jpg';
import twentyOne from '../images/examples/21.jpg';
import twentyTwo from '../images/examples/22.jpg';
import twentyThree from '../images/examples/23.jpg';
import twentyFour from '../images/examples/24.jpg';
import twentyFive from '../images/examples/25.jpg';

const CarouselGll = () => {
	useEffect(() => {
		const preloadImages = () => {
			[
				one,
				two,
				three,
				four,
				five,
				six,
				seven,
				eight,
				nine,
				ten,
				eleven,
				twelve,
				thirteen,
				fourteen,
				fifteen,
				sixteen,
				seventeen,
				eighteen,
				nineteen,
				twenty,
				twentyOne,
				twentyTwo,
				twentyThree,
				twentyFour,
				twentyFive,
			].forEach((img) => {
				new Image().src = img;
			});
		};
		preloadImages();
	}, []);
	const photos = [
		{ src: one, width: 961, height: 1281 },
		{ src: two, width: 900, height: 1200 },
		{ src: three, width: 1280, height: 960 },
		{ src: four, width: 1280, height: 913 },
		{ src: five, width: 1280, height: 960 },
		{ src: six, width: 900, height: 1200 },
		{ src: seven, width: 1280, height: 960 },
		{ src: eight, width: 1280, height: 960 },
		{ src: nine, width: 900, height: 1200 },
		{ src: ten, width: 1280, height: 960 },
		{ src: eleven, width: 540, height: 720 },
		{ src: twelve, width: 576, height: 720 },
		{ src: thirteen, width: 960, height: 720 },
		{ src: fourteen, width: 540, height: 720 },
		//{ src: fifteen, width: 540, height: 720 },
		{ src: sixteen, width: 1280, height: 1595 },
		{ src: seventeen, width: 1280, height: 1257 },
		{ src: eighteen, width: 1280, height: 1277 },
		{ src: nineteen, width: 1280, height: 830 },
		{ src: twenty, width: 1280, height: 1592 },
		{ src: twentyOne, width: 1280, height: 1257 },
		{ src: twentyTwo, width: 1280, height: 1591 },
		{ src: twentyThree, width: 1280, height: 1294 },
		{ src: twentyFour, width: 1280, height: 860 },
		{ src: twentyFive, width: 1280, height: 1862 },
	];

	const [index, setIndex] = useState(-1);

	return (
		<Wrapper>
			<PhotoAlbum
				targetRowHeight={150}
				onClick={({ index }) => setIndex(index)}
				layout='columns'
				photos={photos}
			/>

			<Lightbox
				slides={photos}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				// enable optional lightbox plugins
				plugins={[Fullscreen, Slideshow, Zoom]}
			/>
		</Wrapper>
	);
};

const Img = styled.img`
	max-height: 400px;
`;

const Wrapper = styled.div`
	padding: 2rem 10%;
`;
export default CarouselGll;
