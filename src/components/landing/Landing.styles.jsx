import styled from 'styled-components';
import { Link } from 'gatsby';
import mobile from '../../images/mobileres.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LandingContainer = styled.div`
	background: #111;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	@media (max-width: 768px) {
		background-color: #1a1a1a;
		background-image: url(${mobile});
		margin-top: 30px;
		background-repeat: no-repeat;
		background-size: 100%;
		// background-position: center;
		min-height: 100vh;
		height: -webkit-fill-available;
	}
`;

export const DataContainer = styled.div`
	animation: fadeInAnimation ease 1.5s forwards;
	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	margin-top: 200px;
	width: 600px;
	@media (max-width: 1600px) {
		width: 500px;
	}
	@media (max-width: 1400px) {
		width: 370px;
	}
	@media (max-width: 968px) {
		width: 300px;
	}
	@media (max-width: 768px) {
		width: 250px;
		margin-top: 0;
	}
`;

export const ImageContainer = styled.img`
	// styled(Img)
	display: inline-block;
	width: 800px;
	height: 600px;
	@media (max-width: 1600px) {
		width: 800px;
		height: 600px;
	}
	@media (max-width: 1400px) {
		width: 660px;
		height: 500px;
	}
	@media (max-width: 968px) {
		width: 500px;
		height: 400px;
	}
	@media (max-width: 768px) {
		width: 0;
		height: 0;
	}
`;

export const Title = styled.div`
	font-weight: 500;
	font-size: 3.5rem;
	@media (max-width: 1400px) {
		font-size: 2.2rem;
	}
	@media only screen and (max-width: 768px) {
		font-size: 3rem;
	}
	color: #ddd;
	cursor: default;
`;

export const Subtitle = styled.div`
	font-weight: 300;
	font-size: 1.1rem;
	letter-spacing: 0.2;
	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 768px) {
		font-size: 1.1rem;
	}
	padding-bottom: 2rem;
	color: #868686;
	cursor: default;
`;

export const ButtonContainer = styled.div`
	display: flex;
`;

export const DarkButton = styled.div`
	color: #ddd;
	background-color: #1e50bc;
	padding: 5px 10px;
	font-size: 1.1rem;
	:hover {
		background-color: #0070c9;
	}
	transition: all ease 300ms;
	text-decoration: none;
	cursor: pointer;
	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const LightButton = styled.a`
	padding: 5px 10px;
	border: 1px solid #bbb;
	color: #bbb;
	font-size: 1.1rem;
	:hover {
		border-color: #ddd;
		color: #ddd;
	}
	transition: all ease 300ms;
	margin-left: 10px;
	text-decoration: none;
	cursor: pointer;
	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const IconContainer = styled.div`
	margin-top: 200px;
	@media (max-width: 1600px) {
		margin-top: 180px;
	}
	@media only screen and (max-width: 968px) {
		margin-top: 100px;
	}
	@media only screen and (max-width: 768px) {
		margin-top: 60px;
	}
`;

export const IconData = styled.a`
	margin: 10px;
	text-decoration: none;
`;

export const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
	color: #bbb;
	:hover {
		color: #ddd;
	}
	transition: all ease 300ms;
`;

export const LinkContainer = styled(Link)`
	color: #aaa;
	text-decoration: none;
	// border-bottom: 1px solid currentColor;
	// display: inline-block;
	// line-height: 0.85;
	transition: all 200ms ease-in;
	:hover {
		color: #ddd;
	}
`;

export const Blue = styled.span`
	color: #087ddd;
`;
