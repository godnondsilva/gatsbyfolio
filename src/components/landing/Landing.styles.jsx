import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import landingMobileBackground from '../../images/landing-mobile-bg.svg';

export const LandingContainer = styled.div`
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	gap: 5%;

	@media (max-width: 768px) {
		background-image: url(${landingMobileBackground});
		background-repeat: no-repeat;
		background-size: 100%;
		min-height: 100vh;
	}
`;

export const FlexContainer = styled.div`
	padding-top: 100px;
	width: 30%;

	@media (max-width: 1268px) {
		width: 90%;
	}
`;

export const ImageContainer = styled.img`
	width: 40%;
	@media (max-width: 1268px) {
		display: none;
	}
`;

export const Title = styled.div`
	font-weight: 500;
	font-size: 3.5rem;
	color: #ddd;

	@media (max-width: 1400px) {
		font-size: 2rem;
	}
	@media only screen and (max-width: 768px) {
		font-size: 3rem;
	}
`;

export const Subtitle = styled.div`
	font-weight: 300;
	font-size: 1.1rem;
	color: #999;
	padding-bottom: 1rem;

	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const ButtonStyles = css`
	padding: 5px 10px;
	font-size: 1.1rem;
	transition: all ease 300ms;
	text-decoration: none;
	cursor: pointer;

	@media (max-width: 1268px) {
		font-size: 1rem;
	}
`;

export const DarkButton = styled.div`
	color: #ddd;
	background-color: #1e50bc;
	${ButtonStyles}

	:hover {
		background-color: #0070c9;
	}
`;

export const LightButton = styled.a`
	border: 1px solid #bbb;
	color: #bbb;
	background: transparent;
	${ButtonStyles}

	:hover {
		color: #ddd;
		border: 1px solid #ddd;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 15px;
	margin-top: 80px;
`;

export const IconData = styled.a`
	text-decoration: none;
`;

export const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
	color: #bbb;
	transition: all ease 300ms;

	:hover {
		color: #ddd;
	}
`;

export const Blue = styled.span`
	color: #2891e7;
`;
