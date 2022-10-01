import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactContainer = styled.div`
	padding: 100px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 2rem;

	@media only screen and (max-width: 768px) {
		margin: 0 5%;
		flex-direction: column;
	}
`;

export const DataContainer = styled.span`
	width: 30%;

	@media screen and (max-width: 768px) {
		width: 80%;
	}
`;

export const Title = styled.div`
	font-weight: 600;
	font-size: 2.5rem;
	color: #ddd;
	padding-bottom: 1rem;
`;

export const Description = styled.div`
	font-size: 1.2rem;
	color: #868686;
	padding-bottom: 1rem;
`;

export const Button = styled.a`
	padding: 5px 15px;
	background-color: #1e50bc;
	color: #ddd;
	font-size: 1.2rem;
	transition: all ease 500ms;
	text-decoration: none;
	cursor: pointer;

	:hover {
		background-color: #0070c9;
	}

	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const IconData = styled.a`
	color: white;
	margin: 15px 10px;
	text-decoration: none;
	display: flex;
	align-items: center;
`;

export const IconText = styled.span`
	color: #868686;
	padding-left: 1rem;
	transition: all ease 300ms;

	:hover {
		color: #bbb;
	}
`;

export const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
	color: #1e50bc;
	transition: all ease 300ms;

	:hover {
		color: #0070c9;
	}
`;
